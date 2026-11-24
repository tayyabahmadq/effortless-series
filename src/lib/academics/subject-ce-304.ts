/**
 * Academics - RGPV Civil Engineering 3rd-semester subject: CE-304 Building Planning & Architecture.
 *
 * Structure mirrors subject-cs-302.ts and subject-ce-303.ts: units -> one
 * chapter per unit -> numbered sections (5 units x 5 sections = 25).  Each
 * section carries three body paragraphs, five bullets, a diagram, a callout,
 * a table or text/python code sample, three key terms, and three exam-style
 * questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce304: AcademicSubject = {
  id: "ce-304",
  code: "CE-304",
  title: "Building Planning & Architecture",
  semester: "III Semester",
  program: "RGPV \u00b7 Civil Engineering",
  tagline:
    "The complete visual guide to Building Planning & Architecture for RGPV Civil Engineering: from orientation and NBC bye-laws through foundations, components, functional planning, drawing conventions and green buildings - with diagrams, NBC numbers and exam questions in every section.",
  description:
    "Five units walk through the principles of building planning - orientation, aspects and prospects, NBC bye-laws, setbacks and FSI - into the components that make a building stand - plinth, walls, floors, roofs, doors, windows, stairs and foundations - then through the functional planning of residential, public, commercial, industrial and special buildings, into the conventions of architectural drawing - plan, elevation, section, scales, symbols and schedules - and finally into green buildings and sustainability, with IGBC and LEED ratings, passive design, green materials, rainwater harvesting and energy efficiency. Every section pairs theory with a redrawable diagram, a worked table or python snippet, and the exam questions RGPV actually asks.",
  accentColor: "#84cc16",
  emoji: "BP",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Principles of Building Planning",
      summary:
        "The substrate of the whole subject: orientation of buildings on a site, the six planning principles of aspect, prospect, roominess, flexibility, circulation and economy, the National Building Code and local bye-laws, setbacks and height restrictions, and the Floor Space Index that fixes urban density.",
      chapter: {
        number: "01",
        title: "Principles of Building Planning",
        intro:
          "Unit I builds the vocabulary every later unit borrows: orientation of a building on its plot relative to sun and wind, the six principles of aspect, prospect, roominess, flexibility, circulation and economy, the National Building Code and the local bye-laws derived from it, the setbacks and height limits that govern open space, and the Floor Space Index (FSI/FAR) that fixes how much may be built on a plot.",
        inOneBreath:
          "Orientation places the long axis east-west so the south face admits winter sun while the east and west walls limit heat gain, and admits the prevailing south-west breeze; aspect fixes each room by sun and air (kitchen east, bedroom south-west), prospect fixes the view, roominess is perceived spaciousness from area, proportion and height, flexibility is adaptation to changed use, circulation is short and direct movement without through rooms, and economy balances the above within budget; the National Building Code by the Bureau of Indian Standards is the master reference, locally adapted as bye-laws fixing ground coverage 50-75 percent, setbacks of 3 m front, 1.5 m side and 2 m rear, height linked to road width, and Floor Space Index as total built-up area divided by plot area, typically 1.0-1.5 for residential use.",
        sections: [
          {
            number: "1.1",
            title: "Orientation of buildings",
            body: [
              "Building orientation is the deliberate placement of a structure on its plot with respect to sun, wind and rain so that indoor spaces stay comfortable year-round. In the northern hemisphere, a building with its long axis running east to west presents its wider south face to the winter sun, allowing warmth to enter, while the shorter east and west walls limit the heat gain from low morning and evening rays. Orientation also governs how the prevailing breeze enters: across central India the summer wind blows from the south-west, so living rooms are placed to receive it directly and utility blocks buffer the hot western face.",
              "Climate dictates the orientation strategy. In hot-dry regions such as Indore and Bhopal, orientation seeks to exclude direct sun and admit night breeze; in warm-humid coastal belts it chases cross-ventilation; in composite climates the design swings between summer cooling and winter warming. The National Building Code classifies India into five zones and prescribes thumb-rules for each. A widely used practical compromise is to set the long face about twenty-two and a half degrees off south-east, which captures morning sun in winter and avoids the worst afternoon heat in summer while still admitting breeze.",
              "Site realities temper the textbook ideal. A plot may not face the desired direction, the street frontage fixes the entrance, and adjoining tall buildings may shade the south face. When the ideal orientation is impossible, designers fall back on shading devices, verandas and buffer rooms to recover comfort. A north-facing wall, in the northern hemisphere, is the most shaded face and is reserved for libraries, store rooms and computer labs that dislike direct sun. Orientation is therefore the first decision taken after reading a site, and every later choice on aspect, prospect and circulation builds on it.",
            ],
            bullets: [
              "East-west long axis: maximises south face for winter sun, minimises east-west exposure.",
              "South-west breeze: in central India, the prevailing summer wind enters through the south face.",
              "North face: shaded all day; reserved for heat-sensitive rooms such as stores and labs.",
              "22.5 deg off south-east: the practical compromise orientation for composite climates.",
              "NBC climate zones: hot-dry, warm-humid, composite, temperate, cold - each with its own rules.",
              "Site realities: street frontage, neighbouring buildings and plot shape often override the ideal.",
            ],
            table: {
              caption: "Recommended orientation by NBC climate zone.",
              headers: ["Climate zone", "Goal", "Recommended long-axis", "Notes"],
              rows: [
                ["Hot-dry", "exclude sun, admit night breeze", "East-west", "Buffer walls on west"],
                ["Warm-humid", "maximise cross-ventilation", "East-west, longer faces open", "Verandas + louvres"],
                ["Composite", "winter sun + summer breeze", "22.5 deg off south-east", "Seasonal shading devices"],
                ["Temperate", "admit sun all year", "East-west", "South glazing unprotected"],
                ["Cold", "trap maximum sun", "East-west, south glazing large", "Thick walls, small north windows"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Steps in fixing building orientation",
              caption: "Read the site, study the climate, then commit to an axis.",
              steps: [
                { label: "Site survey", note: "plot size, shape, access" },
                { label: "Climate study", note: "NBC zone identified" },
                { label: "Sun-path analysis", note: "shadow angles" },
                { label: "Wind-rose study", note: "prevailing breeze direction" },
                { label: "Final orientation", note: "long axis chosen" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair sun with wind",
              body: "When asked to justify an orientation, always pair solar reasoning with wind reasoning. Examiners lose patience with answers that mention only sun, since breeze drives summer comfort in central India. Cite the NBC climate zone before stating the rule.",
            },
            keyTerms: [
              { term: "Orientation", definition: "The angular placement of a building relative to true north to optimise solar gain and wind access." },
              { term: "Aspect", definition: "The directional placement of individual rooms so that each receives the appropriate kind of sun and air." },
              { term: "NBC climate zone", definition: "One of five regional classifications in the National Building Code that guide orientation and envelope design." },
            ],
            examQuestions: [
              {
                q: "Define building orientation. Explain the factors affecting orientation in India, with the thumb-rules prescribed for each NBC climate zone. Why is the long axis usually kept east-west?",
                marks: 7,
                outline: [
                  "Define orientation as angular placement for sun and wind access.",
                  "List four factors: climate, sun path, wind direction, site constraints.",
                  "State the NBC climate zones: hot-dry, warm-humid, composite, temperate, cold.",
                  "Explain the east-west long-axis rule: maximises winter south sun, minimises east-west heat gain.",
                  "Give the 22.5 deg off south-east compromise for composite climate.",
                  "Mention site constraints: street frontage and neighbouring buildings.",
                  "Conclude with room placement on the north vs south face.",
                ],
              },
              {
                q: "Why is the north-facing wall preferred for libraries and store rooms in the northern hemisphere?",
                marks: 3,
              },
              {
                q: "State the recommended orientation of a long wall for a composite climate in central India, with one reason.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Principles of planning: aspect, prospect, roominess, flexibility, circulation, economy",
            body: [
              "The principles of building planning are the yardsticks against which any plan is judged. Aspect fixes the placement of each room so that it receives the right kind of sun and air: the kitchen needs eastern sun to dry up morning dampness, the bedroom needs south-west breeze for summer comfort, and the study prefers north light for steady glare-free illumination. Prospect is the view from the room: living rooms face the garden or street for visual relief, while bathrooms and stores turn toward the service lane. Aspect concerns the building's relation to climate; prospect concerns its relation to the surroundings.",
              "Roominess is the sense of adequate space inside a room, achieved not just by area but by proportion, height and furniture placement. A square room of 12 sq m feels cramped if its furniture crowds the centre; the same area feels spacious with corner placement and a high ceiling. Flexibility means a room can adapt to changing use: the drawing room of a young couple may later host a small office, so doors and walls must allow this. Circulation is the ease of moving through the building: corridors are kept short, free of sharp turns, and never pass through one room to reach another. Economy is the discipline of achieving the above within budget.",
              "These six principles often trade against one another and the architect's job is to balance them. A perfect aspect may demand a longer wall that hurts economy; a generous circulation lobby may eat roominess; the flexibility of one large room may compromise the privacy of separated bedrooms. RGPV examiners expect each principle defined, illustrated with one example, and then critiqued for the trade-offs. The classic illustration: a south-facing bedroom with a balcony gives both morning sun (aspect) and a view of the garden (prospect), but the balcony costs money (economy) and may darken the room (roominess). Every decision is a small optimisation.",
            ],
            bullets: [
              "Aspect: placement of rooms so each receives the right sun, air and daylight.",
              "Prospect: the outside view from a room - living areas to garden, services to lane.",
              "Roominess: perceived spaciousness from area, proportion, ceiling height and furniture layout.",
              "Flexibility: ability of a room to serve changing uses over the life of the building.",
              "Circulation: ease of movement inside the building; short, direct, no through-rooms.",
              "Economy: achieving aspect, prospect, roominess, flexibility and circulation within budget.",
              "Privacy, sanitation and safety are sometimes listed as additional principles.",
            ],
            table: {
              caption: "The six principles applied to a 2BHK plan.",
              headers: ["Principle", "Example in plan"],
              rows: [
                ["Aspect", "Kitchen on east for morning sun"],
                ["Prospect", "Living room faces the garden on south"],
                ["Roominess", "3.6 m x 4.2 m bedroom with 3 m ceiling"],
                ["Flexibility", "Drawing room can host a small office"],
                ["Circulation", "Lobby links all rooms, none is through"],
                ["Economy", "Common wall shared with bathroom plumbing"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Principles versus room quality",
              caption: "Each principle targets one or more room-quality goals.",
              axes: { x: "Comfort-focused", y: "Cost-focused" },
              quadrants: [
                { label: "Aspect, Prospect, Roominess (comfort)" },
                { label: "Flexibility (long-term comfort + cost)" },
                { label: "Circulation (comfort + cost)" },
                { label: "Economy (pure cost)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Define, illustrate, critique",
              body: "For each principle, follow the three-step answer: define in one sentence, illustrate with a room example, then critique one trade-off. This pattern earns full marks for any principle question in RGPV papers.",
            },
            keyTerms: [
              { term: "Aspect", definition: "The placement of a room relative to the sun and wind so that the activity inside gets the right kind of natural light and air." },
              { term: "Prospect", definition: "The view of the surroundings that a room commands, deciding whether it faces the garden, the street or the service side." },
              { term: "Roominess", definition: "The perceived spaciousness of a room, a function of area, proportion, ceiling height and furniture arrangement." },
            ],
            examQuestions: [
              {
                q: "Define and explain the six principles of building planning - aspect, prospect, roominess, flexibility, circulation and economy - with one example each and the trade-offs among them.",
                marks: 7,
                outline: [
                  "Define each principle in one clear sentence.",
                  "Aspect example: kitchen on east for morning sun.",
                  "Prospect example: living room faces the garden on south.",
                  "Roominess example: 3.6 m x 4.2 m bedroom with 3 m ceiling.",
                  "Flexibility example: drawing room convertible to a home office.",
                  "Circulation example: lobby linking rooms without through-passages.",
                  "Economy example: shared plumbing wall; trade-off: ideal aspect may cost more.",
                ],
              },
              {
                q: "Distinguish between aspect and prospect with examples.",
                marks: 3,
              },
              {
                q: "What is roominess? State two factors that improve it.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "National Building Code and building bye-laws",
            body: [
              "The National Building Code of India, published by the Bureau of Indian Standards, is the master reference for all building design and construction in the country. It is not a rigid law but a code of practice adopted, with local modifications, by every municipality. The NBC covers structural safety, fire safety, plumbing, ventilation, lighting, and the all-important building bye-laws that regulate plot coverage, setbacks, height and open space. Bye-laws exist to protect the occupant, the neighbour and the city: they prevent overbuilding, ensure daylight reaches every room, keep fire-fighters' access clear, and reserve green and parking areas.",
              "Building bye-laws are local rules enacted by the urban local body - in Bhopal, by the Municipal Corporation under the Madhya Pradesh Bhoomi Vikas Niyam. They specify for each plot its permissible ground coverage (typically 50 to 75 percent for residential), the minimum setbacks on each side, the maximum height in metres and number of storeys, the minimum road width for a building to qualify for a higher FAR, the parking slots to be provided, and the minimum size of habitable rooms. A typical residential bye-law requires 3 m front setback, 1.5 m side setbacks, and a rear setback of 2 m, with two covered car parks for a dwelling above 100 sq m.",
              "To obtain a building permit, the architect submits drawings showing compliance with every applicable bye-law: site plan, plan, sections, elevations and structural details. The local authority scrutinises the submission, may demand revisions, and on approval issues a commencement certificate. The same bye-laws empower the authority to demolish illegal constructions, regularise minor deviations on payment of a compounding fee, and prosecute severe violations. The NBC was first published in 1970 and substantially revised in 2005, 2016 and 2023 - the latest revision folds in green building provisions and accessibility for persons with disabilities. Every civil engineer must know the NBC part that governs the project at hand.",
            ],
            bullets: [
              "NBC: master code by the Bureau of Indian Standards, adopted with local changes.",
              "Bye-laws: local rules by the urban body fixing coverage, setbacks, height, parking.",
              "Typical residential ground coverage: 50-75 percent of plot area.",
              "Standard residential setbacks: 3 m front, 1.5 m side, 2 m rear.",
              "Permit process: site plan, plan, sections, elevations, structural drawings.",
              "Revised editions of NBC: 1970, 2005, 2016, 2023; the 2023 edition adds green clauses.",
              "Compounding fee regularises minor deviations; severe deviations invite demolition.",
            ],
            table: {
              caption: "Typical residential bye-laws in an RGPV-relevant MP city.",
              headers: ["Item", "Requirement"],
              rows: [
                ["Ground coverage", "Up to 75% of plot"],
                ["Front setback", "3 m minimum"],
                ["Side setbacks", "1.5 m each side"],
                ["Rear setback", "2 m minimum"],
                ["Max height", "G + 2 floors (~10 m)"],
                ["Parking", "1 ECS per 100 sq m built-up"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From NBC to a building permit",
              caption: "The bye-laws travel from the national code to your drawing sheet.",
              stages: [
                { label: "National Building Code", note: "BIS publication" },
                { label: "State development rules", note: "state-level adaptation" },
                { label: "Local municipal bye-laws", note: "numbers fixed" },
                { label: "Architect's drawings", note: "compliance shown" },
                { label: "Permit / commencement certificate", note: "permission to build" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the right rule source",
              body: "Always cite the NBC for principles and the local bye-laws for numbers. RGPV examiners distinguish between the national code (definitions, structural safety) and municipal rules (the actual setback distances). A question on bye-laws wants municipal numbers, not NBC generalities.",
            },
            keyTerms: [
              { term: "National Building Code", definition: "The comprehensive code of practice for building design and construction published by the Bureau of Indian Standards." },
              { term: "Building bye-laws", definition: "Local rules enacted by the urban body fixing plot coverage, setbacks, height, parking and room sizes." },
              { term: "Setback", definition: "The mandatory open strip between a building and the plot boundary on each side, fixed by bye-laws." },
            ],
            examQuestions: [
              {
                q: "What is the National Building Code of India? Explain its scope and the role of building bye-laws. List the bye-laws applicable to a residential building on a 150 sq m plot.",
                marks: 7,
                outline: [
                  "Define NBC as the BIS code of practice first published in 1970.",
                  "State scope: structural safety, fire, plumbing, ventilation, lighting, bye-laws.",
                  "Define building bye-laws as local rules fixing coverage, setbacks, height, parking.",
                  "Give typical coverage: 50-75 percent of plot for residential.",
                  "Give setbacks: 3 m front, 1.5 m side, 2 m rear for a 150 sq m plot.",
                  "Give height: G + 2 storeys (~10 m) on a normal road.",
                  "Give parking: 1 ECS per 100 sq m built-up; 2 covered parks above 100 sq m.",
                ],
              },
              {
                q: "Distinguish between the National Building Code and local building bye-laws.",
                marks: 3,
              },
              {
                q: "State any three items regulated by building bye-laws for a residential plot.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Setbacks, height restrictions and open space requirements",
            body: [
              "Setbacks are the mandatory open strips left between the building and the plot boundary on each side. They serve three purposes: admitting daylight and air to every room, providing access for fire-fighting equipment, and preventing a building from crowding the street or the neighbour. The front setback is the largest because it also shapes the street facade and reserves space for car parking and a garden. Side setbacks keep windows from looking directly into a neighbour's window and ensure that a fire on one plot does not leap to the next. Rear setbacks preserve a ventilation shaft and a service lane for utilities.",
              "Height restrictions govern both the absolute height in metres and the number of storeys permitted on a plot. They are linked to the width of the abutting road: a narrow lane supports only a ground-plus-one structure, while a 12 m road permits ground-plus-three, and a 30 m road permits high-rise towers. Height is also capped by the floor area ratio, which prevents a tall slim tower on a small plot. Open space requirements set the minimum uncovered area inside the plot - typically 30 to 50 percent of plot area for residential use - so that ground coverage never consumes the whole site.",
              "Setbacks and open spaces are policed by the local authority at the permit stage and again at the occupancy stage. A surveyor measures the built-up area and the setbacks from the boundary; any deviation of more than about 10 cm in residential buildings is treated as a violation that may be compounded for a fee, while severe deviations invite demolition. Open spaces must remain open: they cannot be covered by tin sheds or enclosed rooms, and the rules reserve them for trees, parking and rainwater harvesting. Examiners expect you to read a site plan and state whether the setbacks, height and open space shown comply with the local bye-laws.",
            ],
            bullets: [
              "Front setback: largest, faces street; doubles as parking and garden strip.",
              "Side setback: keeps windows private, blocks fire spread between plots.",
              "Rear setback: ventilation shaft, service access, utilities.",
              "Height caps: linked to abutting road width and to floor area ratio.",
              "Open space: 30-50% of plot must stay uncovered for residential use.",
              "Compounding rule: small deviations (within ~10 cm) may be regularised on payment.",
              "Open space cannot be covered later by a shed; it must remain open for fire access.",
            ],
            table: {
              caption: "Setbacks and height by road width (typical residential bye-law).",
              headers: ["Road width", "Max floors", "Front setback", "Side setback"],
              rows: [
                ["< 6 m", "G only", "3 m", "1.5 m"],
                ["6-9 m", "G + 1", "3 m", "1.5 m"],
                ["9-12 m", "G + 2", "3 m", "1.5 m"],
                ["12-18 m", "G + 3", "4.5 m", "2 m"],
                ["> 18 m", "High-rise", "6 m", "3 m"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Setback decision fork for a residential plot",
              caption: "Pick the right rule by road width.",
              start: "Plot under 300 sq m?",
              branches: [
                { label: "road width < 6 m", outcome: "G only, 3 m front setback", good: false },
                { label: "road width 6-12 m", outcome: "G + 2, 3 m front, 1.5 m side", good: true },
                { label: "road width > 12 m", outcome: "G + 3 or high-rise with 6 m setback", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Open space cannot be covered later",
              body: "Owners often cover the rear setback with a tin shed or extra room after the occupancy certificate. This is illegal: open space must remain open for fire access and ventilation. RGPV examiners deduct marks if the answer does not mention that open space is permanent.",
            },
            keyTerms: [
              { term: "Setback", definition: "The mandatory open strip between a building and the plot boundary, fixed by bye-laws on each side." },
              { term: "Height restriction", definition: "A cap on the number of storeys and the absolute height of a building based on road width." },
              { term: "Open space requirement", definition: "The minimum percentage of plot area that must remain uncovered and unbuilt upon." },
            ],
            examQuestions: [
              {
                q: "Define setbacks and open space. Explain why setbacks are provided, list typical setback values for residential plots, and explain how height restrictions are linked to road width.",
                marks: 7,
                outline: [
                  "Define setback and open space in one sentence each.",
                  "Three purposes of setbacks: daylight, fire access, neighbour privacy.",
                  "Front 3 m, side 1.5 m, rear 2 m for a typical residential plot.",
                  "Open space requirement: 30-50% of plot must stay uncovered.",
                  "Height link to road width: <6 m road allows G only, 12 m road allows G + 3.",
                  "Note that height is also capped by the floor area ratio.",
                  "Mention that open space cannot be covered later, even by a shed.",
                ],
              },
              {
                q: "Why is the front setback larger than the side setback in residential bye-laws?",
                marks: 3,
              },
              {
                q: "State the relationship between the width of the abutting road and the permissible height of a building.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Floor Space Index and Floor Area Ratio (FSI/FAR)",
            body: [
              "The Floor Space Index, also called Floor Area Ratio, is the ratio of the total built-up area of all floors to the area of the plot on which the building stands. An FSI of 1.0 on a 300 sq m plot permits 300 sq m of total construction, spread over any number of floors as long as setbacks and height limits are respected. FSI controls urban density: a low FSI keeps a locality sparse and residential, while a high FSI permits towers and the higher populations they hold. Indian cities typically grant 1.0 to 1.5 FSI for residential use and up to 2.5 or more for commercial plots near transit corridors.",
              "FSI is computed by dividing total built-up area by plot area. Built-up area includes the area of every floor measured at the outer face of the external walls, including balconies, staircases and lift wells, but excluding open projections, parking areas, shafts and basement areas used only for parking. Some bye-laws grant premium FSI - additional construction rights in exchange for payment or for providing public amenities such as a public plaza. Transit-oriented development zones in Delhi and Bhopal award higher FSI near metro stations, on the logic that dense development supports public transport.",
              "FSI interacts with setbacks, height and ground coverage to fix the bulk of the building. The rule is simple: covered area on each floor, multiplied by the number of floors, equals total built-up area, which divided by plot area yields FSI. A 200 sq m plot with 1.5 FSI allows 300 sq m built-up; if ground coverage is limited to 75 percent, the maximum footprint is 150 sq m, and the remaining 150 sq m must sit on a second floor. The same FSI thus produces either a squat two-storey block or a slim four-storey tower, the choice governed by height limits and architectural intent. Examiners expect the arithmetic to be shown.",
            ],
            bullets: [
              "FSI = FAR = total built-up area divided by plot area.",
              "Typical Indian residential FSI: 1.0 to 1.5; commercial up to 2.5 or more.",
              "Built-up area: external-wall face, includes stairs, lifts, balconies; excludes parking and shafts.",
              "Premium FSI: extra rights in exchange for payment or public amenities.",
              "TOD zones: higher FSI near metro stations to support public transit.",
              "FSI x plot area = total permissible built-up; spreads over any floors within height cap.",
              "Ground coverage x floors must equal built-up; balance height vs footprint.",
            ],
            codeExample: {
              language: "python",
              caption: "Compute permissible built-up area, footprint and number of floors from FSI and plot area.",
              code: `def fsi_calc(plot_area, fsi, max_coverage_ratio, floor_height=3.0, max_height=10.0):
    total_built = plot_area * fsi
    max_footprint = plot_area * max_coverage_ratio
    floors_by_footprint = total_built / max_footprint
    floors_by_height = int(max_height // floor_height)
    floors = min(int(floors_by_footprint), floors_by_height)
    return {
        "plot_area": plot_area,
        "fsi": fsi,
        "total_built_permitted": total_built,
        "max_footprint": max_footprint,
        "floors_needed": int(floors_by_footprint),
        "floors_allowed": floors,
    }

# 200 sq m plot, FSI 1.5, 75% coverage, 10 m height cap
print(fsi_calc(200, 1.5, 0.75))
# {'plot_area': 200, 'fsi': 1.5, 'total_built_permitted': 300.0,
#  'max_footprint': 150.0, 'floors_needed': 2, 'floors_allowed': 3}`,
            },
            diagram: {
              kind: "layers",
              title: "How FSI is consumed on a plot",
              caption: "Each layer is one floor of the building, summing to FSI.",
              layers: [
                { label: "Plot area (e.g. 200 sq m)", note: "the denominator" },
                { label: "Floor 1 footprint (75% = 150 sq m)", note: "ground coverage" },
                { label: "Floor 2 footprint (150 sq m)", note: "same footprint" },
                { label: "Total built-up = 300 sq m", note: "the numerator" },
                { label: "FSI = 300 / 200 = 1.5", note: "the ratio" },
              ],
            },
            callout: {
              type: "tip",
              title: "Show the arithmetic",
              body: "For an FSI question, always write: plot area, FSI, total permissible built-up, ground coverage percentage, then number of floors. Skipping the arithmetic and stating only 'FSI is 1.5' earns half marks. RGPV loves a fully worked numerical answer.",
            },
            keyTerms: [
              { term: "Floor Space Index (FSI)", definition: "The ratio of total built-up floor area of all floors to the plot area; also called Floor Area Ratio (FAR)." },
              { term: "Premium FSI", definition: "Additional construction rights granted by the authority in exchange for payment or the provision of public amenities." },
              { term: "Ground coverage", definition: "The percentage of plot area covered by the building footprint at ground level." },
            ],
            examQuestions: [
              {
                q: "Define Floor Space Index and Floor Area Ratio. State how they are computed. A 300 sq m plot in Bhopal has an FSI of 1.2 and a maximum ground coverage of 66.7%. Compute the total permissible built-up area and the number of floors required.",
                marks: 7,
                outline: [
                  "Define FSI = FAR = total built-up area / plot area.",
                  "State typical Indian residential FSI: 1.0 to 1.5.",
                  "List items included in built-up area: external walls, balconies, stairs, lifts.",
                  "List items excluded: open projections, parking, shafts, basement parking.",
                  "Compute total built-up: 300 x 1.2 = 360 sq m.",
                  "Compute footprint: 300 x 0.667 = 200 sq m per floor.",
                  "Compute floors: 360 / 200 = 1.8, round up to 2 floors; ground + first.",
                ],
              },
              {
                q: "State the differences between FSI and ground coverage.",
                marks: 3,
              },
              {
                q: "If plot area is 250 sq m and permissible FSI is 1.5, what is the total built-up area permitted?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Building Components and Foundations",
      summary:
        "The anatomy of a building from the ground up: the plinth and its damp-proof course, walls, floors and roofs; doors, windows and ventilators with their NBC sizes; stairs and the 2R + T = 600 rule; shallow foundations including spread, isolated, combined, strap and raft; and deep foundations - piles, piers and well (caisson) foundations.",
      chapter: {
        number: "02",
        title: "Building Components and Foundations",
        intro:
          "Unit II opens the body of a building: the plinth and damp-proof course that separate the structure from the soil; the walls, floors and roofs that enclose and shelter it; the doors, windows and ventilators that punctuate its envelope; the stairs that link its floors; and the foundations, shallow and deep, that transfer every load down to the bearing soil.",
        inOneBreath:
          "The plinth sits 300-600 mm above ground and carries the damp-proof course that stops moisture rising into the walls; walls of 230 mm brick are load-bearing while 115 mm half-brick walls are partitions; floors are slabs with finishing layers and a minimum 2.75 m habitable height; flat RCC roofs are universal in India with waterproofing and a 1:100 slope; doors are 1.0 m x 2.1 m internal and 1.2 m x 2.1 m main, classified by mechanism as hinged, sliding, folding, revolving and swinging, and by panel as panelled, flush, louvered and wired-glass; windows are 1.2 m x 1.5 m with area at least one-tenth of the floor; stairs follow 2R + T = 600 mm with residential risers 150-200 mm and treads 250-300 mm, capped at 12 risers per flight; shallow foundations (spread, isolated, combined, strap, raft) are used where the surface soil is strong and designed against bearing capacity failure and excessive settlement; deep foundations - piles, piers and wells (caissons) - bypass weak surface soil by end bearing and skin friction.",
        sections: [
          {
            number: "2.1",
            title: "Plinth, walls, floors and roofs",
            body: [
              "Every building rises from a foundation through a plinth to the superstructure. The plinth is the portion of the wall that sits between the ground level and the floor level of the ground floor, typically 300 to 600 mm above ground. It carries the damp-proof course, a layer of impervious material that prevents moisture rising from the soil into the walls, and it raises the floor above the surrounding ground to keep out rain and dirt. The plinth wall is built of brick or stone, finished with a plinth band in seismic zones, and supports the floor slab above.",
              "Walls are the vertical load-bearing elements of the superstructure. In load-bearing construction, the walls themselves carry the roof and floor loads down to the foundation; in framed construction, columns and beams carry the loads while walls serve only as partitions. Brick walls are common in central India, with thickness of one brick (230 mm) for load-bearing and half-brick (115 mm) for partition. Floors are horizontal surfaces that divide the building into storeys; each floor consists of a structural slab or joist system, a finishing layer such as tile or stone, and an insulating layer where needed.",
              "Roofs crown the building and protect it from sun, rain and wind. Flat roofs of RCC slab are universal in Indian residential construction because they double as a terrace and rainwater harvesting surface; pitched roofs of tiles or sheets are used where rainfall is heavy or snow expected. A flat roof needs a thermal insulating layer on top, a waterproofing membrane, and a small slope (about 1 in 100) toward the rainwater pipe. The choice between flat and pitched depends on climate, span and architectural intent; the NBC specifies minimum heights of rooms (2.75 m for habitable) and roofs for ventilation and headroom.",
            ],
            bullets: [
              "Plinth: 300-600 mm above ground; carries the damp-proof course.",
              "Damp-proof course: layer of impervious material preventing rise of moisture.",
              "Load-bearing wall: carries structural loads; 230 mm brick typical.",
              "Partition wall: non-load-bearing; half-brick 115 mm or block.",
              "Floor: structural slab + finish; minimum habitable height 2.75 m (NBC).",
              "Flat RCC roof: standard in India; needs waterproofing + 1:100 slope.",
              "Pitched roof: used for heavy rainfall, snow or aesthetic character.",
            ],
            table: {
              caption: "Comparison of wall types.",
              headers: ["Type", "Thickness", "Role", "Material"],
              rows: [
                ["Load-bearing", "230 mm (1 brick)", "carries loads", "brick / stone"],
                ["Partition", "115 mm (half brick)", "divides rooms", "brick / block"],
                ["Cavity wall", "250 mm+", "thermal + sound insulation", "two leaves + gap"],
                ["Retaining wall", "300 mm+", "holds back soil", "RCC / stone"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "From foundation to roof - the load path",
              caption: "The pyramid of building elements - narrowest at the top.",
              tiers: [
                { label: "Roof (RCC slab or pitched)", note: "covers the building" },
                { label: "Floors (slab + finish)", note: "divide into storeys" },
                { label: "Walls (load-bearing / partition)", note: "vertical supports" },
                { label: "Plinth + DPC", note: "above ground level" },
                { label: "Foundation", note: "below ground" },
              ],
            },
            callout: {
              type: "exam",
              title: "DPC is not optional",
              body: "Examiners deduct marks if you omit the damp-proof course when sketching a wall section. Always draw the DPC as a thin line above the plinth, and label its material (e.g. 25 mm rich concrete). It is the single most forgotten element in a wall-section drawing.",
            },
            keyTerms: [
              { term: "Plinth", definition: "The portion of the wall between ground level and floor level that supports the floor slab and carries the damp-proof course." },
              { term: "Damp-proof course", definition: "A horizontal layer of impervious material such as concrete or slate that prevents moisture rising from the soil." },
              { term: "Load-bearing wall", definition: "A wall designed to carry the structural loads of the roof and floors above down to the foundation." },
            ],
            examQuestions: [
              {
                q: "Sketch and label the parts of a load-bearing wall from foundation to roof. Explain the function of the plinth, damp-proof course, walls, floors and roof.",
                marks: 7,
                outline: [
                  "Draw the wall section: foundation, plinth, DPC, wall, floor, roof.",
                  "Define plinth: portion between ground and floor level, 300-600 mm high.",
                  "Define DPC: horizontal impervious layer preventing moisture rise.",
                  "Define wall: load-bearing 230 mm or partition 115 mm.",
                  "Define floor: structural slab + finishing layer.",
                  "Define roof: flat RCC slab with waterproofing, or pitched tile roof.",
                  "Mention NBC minimum room height of 2.75 m and the 1:100 roof slope.",
                ],
              },
              {
                q: "What is a damp-proof course? State its material and position in a wall.",
                marks: 3,
              },
              {
                q: "Distinguish between a load-bearing wall and a partition wall.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Doors, windows and ventilators",
            body: [
              "Doors, windows and ventilators form the openings of a building. A door is an adjustable barrier in a wall that permits or denies passage of people and goods; a window admits daylight and air and gives a view of the outside; a ventilator is a small opening placed high in a wall, above door height, that exhausts hot air and supports continuous cross-ventilation. Sizes are standardised in the NBC: a single-leaf internal door is 1.0 m by 2.1 m, a main entrance door 1.2 m by 2.1 m, a window 1.2 m by 1.5 m for a medium room, and a ventilator 0.9 m by 0.45 m placed at least 2.1 m above floor.",
              "Door types are classified by mechanism and by panel arrangement. By mechanism: side-hinged (most common), sliding, folding, revolving (used in public buildings to keep two climates separate), and swinging (double-action, used between kitchen and dining). By panel arrangement: panelled door with recessed wooden panels, flush door with a flat plywood face on a honeycomb core, louvered door for ventilation where privacy matters (bathrooms, stores), and wired-glass door for fire safety in staircases. Windows are likewise classified: fixed, casement (side-hinged), sliding, louvered (glass louvers), and pivoted (top or centre pivot for high-level ventilation).",
              "Window design follows the principles of aspect and ventilation. The area of window openings in a habitable room should be at least one-tenth of the floor area, and at least half of the window area should be openable to qualify as ventilation. In hot-dry climates, louvered windows facing a veranda admit breeze without glare; in warm-humid climates, large casement windows on opposite walls create the cross-ventilation that makes coastal houses bearable. Ventilators placed above doors exhaust hot air through the stack effect. RGPV examiners expect students to identify door and window types from a sketch, state their size, and select the right type for a given room and climate.",
            ],
            bullets: [
              "Door: adjustable barrier; standard internal door 1.0 m x 2.1 m.",
              "Main entrance door: 1.2 m x 2.1 m; panelled or flush.",
              "Window: standard 1.2 m x 1.5 m; area >= 1/10 of floor area.",
              "Ventilator: 0.9 m x 0.45 m placed above 2.1 m from floor.",
              "Types by mechanism: hinged, sliding, folding, revolving, swinging.",
              "Flush door: plywood on honeycomb core - light and cheap.",
              "Louvered door/window: used for ventilation with privacy (bathrooms, stores).",
            ],
            table: {
              caption: "Door and window sizes (NBC residential).",
              headers: ["Element", "Width", "Height", "Sill height"],
              rows: [
                ["Internal door", "1.0 m", "2.1 m", "-"],
                ["Main entrance", "1.2 m", "2.1 m", "-"],
                ["Bedroom window", "1.2 m", "1.5 m", "0.9 m"],
                ["Bathroom window", "0.6 m", "0.6 m", "1.2 m"],
                ["Ventilator", "0.9 m", "0.45 m", "2.1 m"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a door type by room",
              caption: "Match door mechanism to room function.",
              start: "What room is the door for?",
              branches: [
                { label: "Bedroom or main entrance", outcome: "Hinged panelled or flush door - 1.0-1.2 m wide", good: true },
                { label: "Bathroom or store", outcome: "Louvered door for ventilation with privacy", good: true },
                { label: "Public building entrance", outcome: "Revolving or double swing door for climate separation", good: true },
                { label: "Fire-exit staircase", outcome: "Wire-mesh glass fire-rated door", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Memorise the NBC sizes",
              body: "The single-leaf internal door is 1.0 m x 2.1 m and the main entrance is 1.2 m x 2.1 m - learn these numbers cold. The window area rule (>= 1/10 of floor area, >= 1/2 openable) is asked almost every RGPV paper.",
            },
            keyTerms: [
              { term: "Door", definition: "An adjustable barrier in a wall that permits or denies passage; the standard internal door is 1.0 m by 2.1 m." },
              { term: "Window", definition: "An opening in a wall fitted with glass and a frame to admit daylight, air and view; minimum area one-tenth of the room's floor area." },
              { term: "Ventilator", definition: "A small opening placed high in a wall above door height that exhausts hot air and supports continuous cross-ventilation." },
            ],
            examQuestions: [
              {
                q: "Classify doors by mechanism and by panel arrangement. State the standard NBC sizes of doors, windows and ventilators for residential use, and explain the rule governing window area in a habitable room.",
                marks: 7,
                outline: [
                  "Classify doors by mechanism: hinged, sliding, folding, revolving, swinging.",
                  "Classify doors by panel: panelled, flush, louvered, wired-glass.",
                  "Give internal door size 1.0 m x 2.1 m and main door 1.2 m x 2.1 m.",
                  "Give window 1.2 m x 1.5 m and ventilator 0.9 m x 0.45 m at 2.1 m.",
                  "State the window-area rule: window area >= 1/10 of room floor area.",
                  "State that >= 1/2 of window area must be openable for ventilation.",
                  "Give one example room-to-door mapping: bathroom -> louvered.",
                ],
              },
              {
                q: "Distinguish between a panelled door and a flush door.",
                marks: 3,
              },
              {
                q: "State the function of a ventilator and its usual position in a wall.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Stairs: types, proportions and design rules",
            body: [
              "A staircase is a series of steps arranged to connect floors at different levels. Each step consists of a horizontal tread on which the foot rests and a vertical riser that connects consecutive treads. The NBC and Indian Standard 1644 fix the proportions: a residential stair has a riser of 150 to 200 mm and a tread of 250 to 300 mm, with the empirical rule that twice the riser plus the tread equals about 600 mm (2R + T = 600). The number of risers in a flight is limited to 12 for residential and 16 for public buildings; beyond this a landing must be inserted so the climber can rest.",
              "Stairs are classified by their plan form. A straight flight stair runs in one direction between two landings; a dog-legged stair turns 180 degrees at a half-space landing, the standard form for Indian residences because it is compact. A quarter-turn stair turns 90 degrees through an L-shaped landing; an open-well or geometrical stair has a well between flights and turns through winders. A spiral stair winds around a central post and is used where space is tight; it is not allowed as a primary fire-exit stair. The minimum clear width of a residential stair is 1.0 m and of a public stair 1.5 m, with handrails on both sides.",
              "Stair design begins with the floor-to-floor height, the available plan area and the traffic load. The total height is divided by the chosen riser to obtain the number of risers; the riser count fixes the number of treads at one less than the risers. The tread run multiplied by tread count gives the horizontal length of a flight, which must fit the available staircase area; if it does not fit, a dog-leg or quarter-turn form is adopted. The headroom above any tread should be at least 2.1 m. Stairs are detailed with nosing (a 25 mm projection beyond the riser) and a non-slip finish; the pitch should not exceed 40 degrees for safety.",
            ],
            bullets: [
              "Step = tread (horizontal) + riser (vertical); 2R + T = 600 mm.",
              "Residential riser 150-200 mm, tread 250-300 mm.",
              "Max risers per flight: 12 (residential), 16 (public); then a landing.",
              "Types: straight, dog-legged, quarter-turn, open-well, spiral.",
              "Min width: 1.0 m residential, 1.5 m public; handrails both sides.",
              "Max pitch: 40 degrees; headroom 2.1 m minimum.",
              "Nosing: 25 mm projection of tread beyond the riser.",
            ],
            table: {
              caption: "Stair dimensions by building type (IS 1644).",
              headers: ["Item", "Residential", "Public", "Shop"],
              rows: [
                ["Riser (mm)", "150-200", "100-150", "150"],
                ["Tread (mm)", "250-300", "300-350", "250"],
                ["Min width (m)", "1.0", "1.5", "1.5"],
                ["Max risers/flight", "12", "16", "16"],
                ["Max pitch (deg)", "40", "32", "32"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Designing a stair from floor height",
              caption: "Step by step, from height to flight form.",
              steps: [
                { label: "Floor-to-floor height", note: "say 3.0 m" },
                { label: "Choose riser", note: "150 mm gives 20 risers" },
                { label: "Cap risers per flight at 12", note: "needs 2 flights" },
                { label: "Compute tread run", note: "19 x 300 = 5.7 m per flight" },
                { label: "Adopt dog-leg form", note: "to fit a compact staircase" },
              ],
            },
            callout: {
              type: "exam",
              title: "2R + T = 600 is the key",
              body: "The thumb rule 2R + T = 600 mm appears in nearly every stair question. Use it to fix the tread once the riser is chosen, and remember the inverse: comfortable stairs satisfy the relation. A stair of 200 mm riser should have 200 mm tread, not 250.",
            },
            keyTerms: [
              { term: "Tread", definition: "The horizontal portion of a step on which the foot rests; residential 250-300 mm." },
              { term: "Riser", definition: "The vertical portion of a step connecting two consecutive treads; residential 150-200 mm." },
              { term: "Flight", definition: "An unbroken series of steps between two landings, limited to 12 risers in residential stairs." },
            ],
            examQuestions: [
              {
                q: "Classify stairs by plan form. State the NBC / IS 1644 rules for stair proportions and design a dog-legged staircase for a floor-to-floor height of 3.0 m, riser 150 mm, in a staircase of width 1.0 m.",
                marks: 7,
                outline: [
                  "Classify stairs: straight, dog-legged, quarter-turn, open-well, spiral.",
                  "Give 2R + T = 600 mm and typical residential ranges.",
                  "Number of risers: 3000 / 150 = 20.",
                  "Cap risers per flight at 12 -> split into two flights of 10.",
                  "Treads per flight = 9; tread 300 mm gives run 2.7 m.",
                  "Landing width 1.0 m; total stair length = 2.7 + 1.0 + 2.7 = 6.4 m.",
                  "Verify width 1.0 m and pitch < 40 deg.",
                ],
              },
              {
                q: "Distinguish between a dog-legged stair and an open-well stair.",
                marks: 3,
              },
              {
                q: "State the relation 2R + T = 600 and its purpose.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Foundations: shallow types and load transfer",
            body: [
              "The foundation is the lowest part of a building that transfers its load to the underlying soil or rock without causing settlement or shear failure. Every foundation is designed against two limits: the bearing capacity of the soil (the maximum pressure the soil can carry without failing) and the permissible settlement of the structure (typically 25 mm for isolated footings on sandy soil, 40 mm on clay). The depth of foundation is fixed by Rankine's rule for minimum depth, by the water table, by the presence of weak topsoil, and by the need to place the base below the frost line. A minimum depth of 1.0 m is common for residential footings on firm soil.",
              "Shallow foundations transfer load at depths close to the surface, where the depth-to-width ratio is less than about 1. They include the spread footing, which widens the base of a load-bearing wall to spread its load; the isolated column footing (a square or rectangular pad under each column); the combined footing (a single pad under two adjacent columns when their individual footings would overlap); the strap footing (two pads tied by a beam to balance eccentric loads); and the raft or mat foundation, a single slab covering the whole plan area when the soil is weak or columns are closely spaced. Shallow foundations are economical when the soil near the surface is strong.",
              "Load transfer in a shallow foundation follows a simple path. The roof load flows down through beams to columns or walls, then through the plinth, the footing and the base of the foundation into the soil. The soil reacts by spreading the load in a bulb of pressure that diminishes with depth, so that at a depth equal to the footing width the pressure has fallen to about one-tenth. Where the surface soil is weak or the column loads are very large, deep foundations - piles, piers and wells - bypass the weak layer to anchor in stronger strata below. The choice between shallow and deep rests on a soil report, the magnitude of the load, and the depth at which good bearing strata are available.",
            ],
            bullets: [
              "Foundation: lowest part of the building that transfers load to the soil.",
              "Two design limits: bearing capacity of soil and permissible settlement.",
              "Minimum depth: Rankine's rule, below topsoil and frost, often ~1.0 m.",
              "Shallow: D / B < 1; types: spread, isolated, combined, strap, raft.",
              "Spread footing widens wall base to spread load.",
              "Raft: single slab under the whole building when soil is weak.",
              "Load bulb pressure falls to ~1/10 at depth equal to footing width.",
            ],
            table: {
              caption: "Types of shallow foundation and their use.",
              headers: ["Type", "Shape", "Use"],
              rows: [
                ["Spread footing", "wider base of a wall", "load-bearing walls"],
                ["Isolated", "square / rectangular pad", "single columns"],
                ["Combined", "one pad under two columns", "adjacent columns, footings would overlap"],
                ["Strap", "two pads tied by a beam", "eccentric column near boundary"],
                ["Raft / mat", "slab covering whole plan", "weak soil, columns close"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Load transfer from roof to soil",
              caption: "Each layer hands the load down to the next.",
              layers: [
                { label: "Roof slab", note: "receives live + dead load" },
                { label: "Beam / column", note: "collects roof load" },
                { label: "Plinth wall + DPC", note: "hands load to footing" },
                { label: "Isolated / raft footing", note: "spreads load" },
                { label: "Bearing soil", note: "load bulb diminishes with depth" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always cite two design limits",
              body: "An answer that states only bearing capacity without settlement misses half the marks. The two design limits of a foundation are: (1) bearing capacity of soil, (2) permissible settlement of the structure. State both before discussing the foundation type.",
            },
            keyTerms: [
              { term: "Foundation", definition: "The lowest load-transferring part of a building, designed against bearing capacity failure and excessive settlement." },
              { term: "Bearing capacity", definition: "The maximum pressure that the soil can carry without shear failure or excessive settlement." },
              { term: "Shallow foundation", definition: "A foundation whose depth is less than its width, used when the surface soil has adequate bearing capacity." },
            ],
            examQuestions: [
              {
                q: "Define a foundation and state its functions. Classify shallow foundations and explain the conditions under which each type is selected. State the two design limits of a foundation.",
                marks: 7,
                outline: [
                  "Define foundation: lowest part that transfers load to the soil.",
                  "Two functions: distribute load safely, prevent settlement and shear failure.",
                  "Two design limits: bearing capacity of soil, permissible settlement.",
                  "Classify shallow: spread, isolated, combined, strap, raft.",
                  "Spread: widens wall base for load-bearing walls.",
                  "Isolated: pad under each column; combined when pads would overlap.",
                  "Raft: when soil is weak, columns close, or basement is planned.",
                ],
              },
              {
                q: "Distinguish between an isolated footing and a combined footing.",
                marks: 3,
              },
              {
                q: "State the two design limits of a foundation.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Deep foundations: piles, piers and well (caisson) foundations",
            body: [
              "Deep foundations are used when the surface soil is too weak to support the load, or when scour by a river would undermine a shallow footing. A deep foundation extends to a depth greater than its width, often several times its width, and transfers the load to a stronger stratum at depth, partly by end bearing on the hard layer and partly by skin friction along its shaft. Piles are long slender columns of concrete, steel or timber driven or bored into the ground; piers are larger-diameter cylindrical shafts bored and concreted in place; well or caisson foundations are hollow chambers sunk through soft soil to rest on a hard bed, the standard foundation for major bridge piers in Indian rivers.",
              "Pile classification is by material and by load transfer. By material: precast concrete, cast-in-situ concrete, steel H-piles, timber (now rare). By load transfer: end-bearing piles that rest on a hard stratum and carry the load at the tip; friction piles that develop their capacity by skin friction along the shaft in soil with no hard layer at depth; and compaction piles driven mainly to densify loose sand. A pile group of several piles is capped by a thick RCC pile cap that distributes the column load equally. The number of piles in a group is fixed by the column load divided by the safe load per pile, with extra allowance for group action.",
              "Piers and well foundations serve heavier loads than piles. A pier is typically 1 to 3 m in diameter, bored by auger or grabbed, concreted after a steel liner is placed, and used for bridge piers and flyover columns where a single large-diameter shaft is more efficient than a group of small piles. A well foundation consists of a well curb with a cutting edge, a steining (the wall of the well), a top plug and a sand fill; it is sunk by dredging soil from inside, the well descending under its own weight. Well foundations have carried every major Indian railway bridge across the Ganga and Yamuna, and remain the standard where scour depth is high.",
            ],
            bullets: [
              "Deep foundation: depth > width; transfers load by end bearing + skin friction.",
              "Piles: slender columns of concrete / steel / timber, driven or bored.",
              "End-bearing pile: rests on hard stratum; carries load at tip.",
              "Friction pile: develops capacity by skin friction along shaft.",
              "Pier: 1-3 m diameter shaft, bored and concreted in place.",
              "Well (caisson): hollow chamber sunk by dredging soil from inside.",
              "Pile cap: thick RCC slab distributing column load to a group of piles.",
            ],
            table: {
              caption: "Comparison of piles, piers and well foundations.",
              headers: ["Aspect", "Pile", "Pier", "Well (caisson)"],
              rows: [
                ["Diameter", "0.3-0.6 m", "1-3 m", "3-12 m"],
                ["Depth", "up to ~30 m", "5-30 m", "10-40 m"],
                ["Installation", "driven / bored", "bored + concreted", "sunk by dredging"],
                ["Use", "buildings, jetties", "bridge piers, flyovers", "major river bridges"],
                ["Load transfer", "end + friction", "mainly end bearing", "end bearing on hard bed"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Piles versus piers and wells - the deep foundation family",
              caption: "Diameter grows, depth grows, capacity grows - so does installation cost.",
              left: {
                heading: "Piles (small, many)",
                items: [
                  "Diameter 0.3-0.6 m",
                  "Driven or bored",
                  "Capped by RCC pile cap",
                  "Used in groups",
                  "Foundations of multi-storey buildings",
                ],
              },
              right: {
                heading: "Piers and wells (large, few)",
                items: [
                  "Diameter 1-12 m",
                  "Bored or sunk by dredging",
                  "Each carries a single column",
                  "Used individually",
                  "Foundations of bridges and flyovers",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Skin friction + end bearing",
              body: "A pile's capacity is the sum of end bearing and skin friction. RGPV questions often ask: 'What is the load carried by a pile 300 mm diameter, 10 m long, in soil with end bearing 400 kN/sqm and skin friction 30 kN/sqm?' Compute both terms and add.",
            },
            keyTerms: [
              { term: "Pile", definition: "A slender column of concrete, steel or timber driven or bored into the ground to transfer load to a hard stratum at depth or by skin friction." },
              { term: "Pier", definition: "A large-diameter cylindrical shaft bored and concreted in place to carry heavy column loads, typically for bridges." },
              { term: "Well foundation (caisson)", definition: "A hollow chamber with a cutting edge, sunk through soft soil by dredging, to rest on a hard stratum; the standard foundation for major bridge piers." },
            ],
            examQuestions: [
              {
                q: "Define a deep foundation. Differentiate between piles, piers and well foundations. Classify piles by material and by load transfer, and state when a friction pile is preferred over an end-bearing pile.",
                marks: 7,
                outline: [
                  "Define deep foundation: depth > width, transfers load to stronger stratum.",
                  "Pile: slender, 0.3-0.6 m diameter, driven or bored.",
                  "Pier: 1-3 m diameter shaft bored and concreted in place.",
                  "Well (caisson): hollow chamber sunk by dredging.",
                  "Pile classification by material: precast, cast-in-situ, steel, timber.",
                  "Pile classification by load: end-bearing, friction, compaction.",
                  "Friction pile preferred when no hard stratum is within reach.",
                ],
              },
              {
                q: "Distinguish between an end-bearing pile and a friction pile.",
                marks: 3,
              },
              {
                q: "State one situation where a well foundation is the only choice.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Functional Planning of Buildings",
      summary:
        "Planning the building to its use: residential houses graded by privacy and plumbing economy; public buildings such as schools, hospitals and libraries zoned by cleanliness and noise; commercial and industrial buildings organised for daylight and the production line; special assembly buildings like auditoriums and stadiums designed for sight-lines, acoustics and rapid evacuation; and the universal concerns of traffic circulation, ventilation and lighting.",
      chapter: {
        number: "03",
        title: "Functional Planning of Buildings",
        intro:
          "Unit III applies the principles of Unit I to the principal building types: residential, public (school, hospital, library), commercial and industrial, and special assembly buildings. Each type has its own zoning logic, occupancy-driven dimensions, and safety rules, and all share the cross-cutting concerns of traffic circulation, ventilation and lighting.",
        inOneBreath:
          "Residential planning grades rooms by privacy from entrance to bedroom and clusters the kitchen, bath and WC on a shared plumbing wall; public buildings zone by cleanliness and noise, with the school around a central court, the hospital from OPD at the front to the sterile OT at the back, and the library from issue counter to deep stack room; commercial buildings from shop to mall maximise selling area within a 12-15 m depth to daylight, while industrial buildings run from raw material store to dispatch under north-light roofs of 15-30 m portal frame span; special buildings like auditoriums and stadiums rake the floor for sight-lines, target reverberation times of 1.0-1.5 s for speech and provide exits at 1.0 m width per 60 persons; traffic circulation uses corridors of 1.0-3.0 m width by use; ventilation relies on cross-flow, stack effect and air changes per hour (4-12); and lighting targets daylight factors of 2-10 percent and lux levels of 100-500 by task.",
        sections: [
          {
            number: "3.1",
            title: "Residential building planning",
            body: [
              "A residential building is the most common type a civil engineer designs, and its planning is the daily work of small practices. The plan groups rooms by privacy and use: the entrance porch and lobby are public; the living and dining rooms are semi-private; the bedrooms are private; and the kitchen, bathrooms and store are service rooms. The grouping rule is that public rooms cluster near the entrance, private rooms lie deeper in the plan, and service rooms share a plumbing wall. Privacy is graded: a visitor entering the house should not see the dining table or bedroom directly, and the kitchen should not open onto the living room without a screen.",
              "A standard RGPV exercise is to design a two-bedroom house on a given plot. The living room is placed on the front, facing the garden, with area 16 to 20 sq m; the kitchen is on the east for morning sun, area 8 sq m, opening to a utility; the master bedroom is on the south-west for cross-ventilation, area 12 to 14 sq m; the second bedroom is on the north, area 10 to 12 sq m; the bathroom and WC share a wall with the kitchen for plumbing economy, area 4 sq m each; the staircase, if any, sits at one side with a lobby at its top. Total carpet area for a 2BHK on 100 sq m plot is roughly 60 sq m, with the balance in walls, setbacks and circulation.",
              "Residential planning is judged by the six principles of Unit I and by the NBC bye-laws of Unit I. Aspect places the kitchen east and the bedrooms south-west; prospect gives the living room a garden view; roominess follows from generous ceiling height and proportion; circulation avoids through rooms; flexibility allows a bedroom to double as a study; economy balances the carpet area with the budget. The NBC fixes minimum room sizes: living room 9.5 sq m with minimum width 2.4 m, kitchen 5 sq m with width 1.8 m, bath 1.5 sq m, WC 0.9 sq m. A plan that violates these is rejected by the municipal permit authority even before structural review.",
            ],
            bullets: [
              "Privacy gradient: entrance -> living -> bedrooms -> services.",
              "Plumbing wall: kitchen, bath and WC share one wall for economy.",
              "Living room: front, 16-20 sq m; kitchen east, 8 sq m.",
              "Bedrooms: south-west for cross-ventilation, 12-14 sq m.",
              "NBC minimums: living 9.5 sq m, kitchen 5 sq m, bath 1.5 sq m, WC 0.9 sq m.",
              "Total carpet area for 2BHK on 100 sq m plot: ~60 sq m.",
              "Rooms grouped by use: public at front, private deep, services on plumbing wall.",
            ],
            table: {
              caption: "NBC minimum sizes for residential rooms.",
              headers: ["Room", "Area", "Min width", "Min height"],
              rows: [
                ["Living room", "9.5 sq m", "2.4 m", "2.75 m"],
                ["Bedroom", "9.5 sq m", "2.4 m", "2.75 m"],
                ["Kitchen", "5.0 sq m", "1.8 m", "2.75 m"],
                ["Bathroom", "1.5 sq m", "1.2 m", "2.1 m"],
                ["WC", "0.9 sq m", "0.9 m", "2.1 m"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Room placement matrix",
              caption: "Pick the room's slot by climate axis and privacy axis.",
              axes: { x: "Privacy (public to private)", y: "Climate (sun + breeze)" },
              quadrants: [
                { label: "Public + good climate (south): Living room" },
                { label: "Private + good climate (south-west): Master bedroom" },
                { label: "Public + harsh climate (east): Kitchen (morning sun only)" },
                { label: "Private + neutral (north): Second bedroom, study" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw to scale on the plot",
              body: "RGPV residential planning questions are marked on the drawing, not just the write-up. Always draw the plot boundary, mark setbacks to scale, place the rooms with dimensions, and label the plumbing wall. A sketch without dimensions cannot earn full marks.",
            },
            keyTerms: [
              { term: "Privacy gradient", definition: "The ordering of rooms from public at the entrance to private at the back, so visitors do not see private areas." },
              { term: "Plumbing wall", definition: "A single internal wall carrying the pipes of the kitchen, bathroom and WC, used for economy of materials and maintenance." },
              { term: "Carpet area", definition: "The enclosed usable floor area of a room measured within the inner faces of the walls." },
            ],
            examQuestions: [
              {
                q: "Plan a two-bedroom house on a 100 sq m plot. Draw the line plan to scale, mark setbacks, place rooms and explain the principles used.",
                marks: 7,
                outline: [
                  "Draw plot 10 m x 10 m; setbacks 3 m front, 1.5 m sides, 2 m rear.",
                  "Place living room on front-south, 4 m x 4 m.",
                  "Place kitchen on east, 2.5 m x 3.2 m, opening to utility.",
                  "Place master bedroom south-west, 3.6 m x 3.8 m.",
                  "Place second bedroom north, 3.0 m x 3.5 m.",
                  "Place bath + WC on the shared plumbing wall.",
                  "Verify NBC minimum areas: living 16 sq m, bedroom > 9.5 sq m.",
                ],
              },
              {
                q: "State the NBC minimum sizes of a living room and a kitchen.",
                marks: 3,
              },
              {
                q: "What is a plumbing wall and why is it used in residential planning?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Public buildings: schools, hospitals and libraries",
            body: [
              "Public buildings serve large numbers of unrelated users, and their planning must address safety, accessibility, queueing and clear zoning. Schools, hospitals and libraries are the three archetypes a civil engineer meets in RGPV questions. A school is organised around a central court or corridor with classrooms on one side, the principal's office and lobby at the entrance, the library and labs on the quiet side, and the toilet block and drinking water in a service core. Classroom size follows enrolment: 1.2 sq m per student at primary level, 1.5 sq m at secondary, with a 6 m x 7.5 m classroom standard for 40 students.",
              "A hospital is zoned by cleanliness and noise: the outpatient department and pharmacy face the entrance, the diagnostic block (lab, radiology) sits between OPD and wards, the inpatient wards lie deeper in the plan for quiet, the operation theatre complex is at the cleanest end with sterile zoning, the emergency entrance is separate from OPD, and the mortuary and service core are at the back. Corridor widths are wider than residential (2.4 m for wards, 3.0 m for the OT), and doors are double-leaf to allow trolley movement. A library is zoned by noise: the lobby and issue counter at the entrance, the stack room deep inside for security, the reading room quiet, the periodical room less so, and the librarian's office overlooking the issue counter.",
              "Public buildings must meet accessibility norms for persons with disabilities: a ramp of 1:12 slope at the main entrance, a lift in buildings above two storeys, doors at least 0.9 m wide, and at least one disabled-friendly toilet on each floor. Fire safety codes demand two independent staircases, fire-exit doors opening outward, smoke detectors in corridors, and a fire tank and pump. The floor area per person is fixed by the NBC: 1.5 sq m for assembly halls, 2.5 sq m for classroom, 8 sq m for hospital wards. Public buildings thus plan not only rooms but also corridors, stairs, ramps and toilets that match the expected occupancy.",
            ],
            bullets: [
              "School classroom: 6 m x 7.5 m for 40 students; 1.5 sq m per student.",
              "Hospital zones: OPD at front, diagnostics mid, wards deep, OT at clean end.",
              "Emergency entrance separate from OPD; mortuary at rear.",
              "Library zones: issue counter at front, stack room deep, reading room quiet.",
              "Accessibility: 1:12 ramp, lift above 2 storeys, 0.9 m doors.",
              "Fire safety: two staircases, outward-opening fire exits, smoke detectors.",
              "NBC occupancy: 1.5 sq m/assembly, 2.5 sq m/class, 8 sq m/ward.",
            ],
            table: {
              caption: "Floor area per occupant (NBC public buildings).",
              headers: ["Building type", "Area per person"],
              rows: [
                ["Assembly hall", "1.5 sq m"],
                ["Classroom", "2.5 sq m"],
                ["Office", "5.0 sq m"],
                ["Hospital ward", "8.0 sq m"],
                ["Library reading room", "3.0 sq m"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Hospital zoning cycle from entrance to recovery",
              caption: "The patient's path defines the zoning of a hospital.",
              steps: [
                { label: "Entrance + reception", note: "OPD and emergency" },
                { label: "Diagnostic block", note: "lab + radiology" },
                { label: "Inpatient ward", note: "quiet zone" },
                { label: "Operation theatre complex", note: "sterile zone" },
                { label: "Recovery + discharge", note: "back to lobby" },
                { label: "Service core + mortuary", note: "rear of building" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two exits for public buildings",
              body: "For any public building, the NBC mandates two independent staircases on opposite faces. This is the single most tested safety rule - quote it in every answer on schools, hospitals and libraries, and place the second staircase on the opposite end of the plan from the main one.",
            },
            keyTerms: [
              { term: "Public building", definition: "A building serving many unrelated users, designed with zoning, accessibility, fire safety and occupancy-driven floor area." },
              { term: "Sterile zoning", definition: "The practice of separating the operation theatre block from the rest of the hospital by clean corridors and air-locks to prevent infection." },
              { term: "Accessibility norm", definition: "The NBC rule that every public building must provide ramps, lifts and toilets usable by persons with disabilities." },
            ],
            examQuestions: [
              {
                q: "Discuss the planning principles for a public building. Explain the zoning of a 30-bed hospital, with the placement of OPD, diagnostics, wards, OT and the service core, and state the NBC accessibility rules.",
                marks: 7,
                outline: [
                  "Define public building; list two key demands: safety + accessibility.",
                  "Zoning of hospital: OPD at front, diagnostics mid, wards deep, OT at clean end.",
                  "Emergency entrance separate from OPD; mortuary at rear.",
                  "Sterile zoning for OT: clean corridor, air-lock, positive pressure.",
                  "Accessibility: 1:12 ramp at entrance, lift above 2 storeys, 0.9 m doors.",
                  "Fire safety: two independent staircases on opposite faces.",
                  "NBC occupancy: 8 sq m per bed in ward.",
                ],
              },
              {
                q: "State the NBC floor area per person for an assembly hall and a classroom.",
                marks: 3,
              },
              {
                q: "Why is the operation theatre placed at the cleanest end of the hospital?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Commercial and industrial buildings",
            body: [
              "Commercial buildings - shops, offices, banks, malls - are planned to maximise selling or working area while keeping the customer and employee comfortable. A shop is a single deep room facing the street, with display window at front, the sales counter at the centre, the store and toilet at the back. A bank extends the shop with a strong room, a vault, a safe deposit locker room and a manager's cabin. An office building arranges workstations in open bays around a central core of lifts, toilets and staircases; the floor plate is typically 12 to 15 m deep from the window wall to the core, so that daylight reaches every workstation. Malls plan a wide central atrium with shops on either side and food courts at the top.",
              "Industrial buildings - factories, workshops, warehouses - are planned around the production line. The raw material store is at one end, the production bay runs the length of the building, the assembly and finishing areas follow, and the finished goods store and dispatch sit at the other end. Heavy machines are placed on isolated foundations to damp vibration, and the roof carries the overhead crane that lifts components between stations. Industrial roofs are usually north-light trusses - pitched roofs with glazing on the north slope that admits glare-free daylight - and monitor roofs that combine ventilation with daylight. Heights are generous: 6 m clear for small workshops, 9 m and more for heavy machine halls.",
              "Both commercial and industrial buildings must respect fire, ventilation and structural codes. Fire codes are stricter than for residential: every floor above 15 m height needs a wet riser, a hose reel and a fire alarm; basements need sprinklers; the fire escape staircase must be enclosed. Ventilation may be natural, by opening windows and north-light glazing, or mechanical, by forced-air ducts; industrial buildings with dust or fume need mechanical exhaust with a calculated air-change rate. Structural spans are large: portal frames of 15 to 30 m for workshops, space frames for large warehouses. The civil engineer's task is to balance column-free area, daylight and ventilation against the budget for structure and services.",
            ],
            bullets: [
              "Shop: deep room, display window at front, store and toilet at back.",
              "Bank: shop + strong room + vault + lockers + manager's cabin.",
              "Office: open bays around a lift-toilet-stair core; 12-15 m depth to daylight.",
              "Industrial layout: raw store -> production -> assembly -> dispatch.",
              "Industrial roof: north-light truss or monitor roof for daylight + ventilation.",
              "Fire: wet riser above 15 m, sprinkler in basements, enclosed escape stair.",
              "Spans: portal frames 15-30 m, space frames for very large warehouses.",
            ],
            table: {
              caption: "Commercial and industrial building features.",
              headers: ["Building", "Typical depth", "Roof", "Special feature"],
              rows: [
                ["Shop", "6-8 m", "flat RCC", "display window"],
                ["Office", "12-15 m", "flat RCC", "central core of lifts + toilets"],
                ["Mall", "atrium + 2 sides", "flat + skylight", "central atrium"],
                ["Workshop", "15-30 m span", "north-light truss", "overhead crane"],
                ["Warehouse", "30+ m span", "space frame", "high bay racking"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Office building layers around a central core",
              caption: "Daylight reaches every desk by keeping the depth to core within 15 m.",
              layers: [
                { label: "Roof + structural slab", note: "RCC flat slab" },
                { label: "Top floor workstations", note: "around central core" },
                { label: "Lift-toilet-stair core", note: "central vertical circulation" },
                { label: "Ground floor lobby + reception", note: "public face" },
                { label: "Foundation + basement parking", note: "below ground" },
              ],
            },
            callout: {
              type: "tip",
              title: "12 to 15 m rule for office depth",
              body: "In office planning, keep the depth from the window wall to the central core within 15 m. This is the rule that ensures daylight reaches every workstation without electric lighting during the day. RGPV questions on office plans often check this number.",
            },
            keyTerms: [
              { term: "North-light truss", definition: "A pitched roof truss with glazing on the north slope that admits glare-free daylight to an industrial building." },
              { term: "Portal frame", definition: "A structural frame with rigid joints between columns and rafters, used for column-free industrial spans of 15 to 30 m." },
              { term: "Wet riser", definition: "A vertical fire-fighting water pipe permanently charged with water, mandatory in buildings above 15 m height." },
            ],
            examQuestions: [
              {
                q: "Discuss the planning of commercial and industrial buildings. Explain the layout of a 200 sq m shop and a factory shed of 30 m span, and state the fire safety rules for buildings above 15 m height.",
                marks: 7,
                outline: [
                  "Define commercial and industrial buildings with one example each.",
                  "Shop layout: display window at front, counter mid, store + toilet at back.",
                  "Office layout: open bays around central core, 12-15 m depth.",
                  "Factory layout: raw store -> production -> assembly -> dispatch.",
                  "Industrial roof: north-light truss for glare-free daylight.",
                  "Fire rules above 15 m: wet riser, hose reel, fire alarm, enclosed escape.",
                  "Basements: sprinkler mandatory.",
                ],
              },
              {
                q: "What is a north-light truss and where is it used?",
                marks: 3,
              },
              {
                q: "State the NBC fire-safety rule for buildings above 15 m height.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Special buildings: auditoriums, stadiums and places of assembly",
            body: [
              "Special buildings are those that assemble very large numbers of people for a shared activity - watching a performance, playing or watching sport, praying, learning. An auditorium is planned around sight-lines: every seat must see the stage without obstruction, so the floor is raked (sloped upward from front to back) and the seats staggered so each row's occupants look between the heads of the row ahead. The stage is at one end, the green rooms and dressing rooms behind it, the foyer and toilets at the entrance, and the projection room at the back. Acoustics are critical: reverberation time of 1.0 to 1.5 seconds for speech, 1.5 to 2.0 seconds for music, controlled by absorptive panels on the rear wall and reflective ones near the stage.",
              "A stadium is a much larger assembly building, with the playing field in the centre and tiers of seating rising around it. The seating is raked for sight-lines to the field; aisles of 1.2 m width serve every 10 seats; vomitories (short tunnels) feed the crowd from concourses behind the tiers to the seating rows. Player dressing rooms, referee rooms, medical rooms and press rooms sit under the stands at field level. Concourses at the back of the seating tiers carry toilets, food counters and exits. The roof, when present, is a tensile or cantilever structure that covers the seats without obscuring the field. The whole stadium is designed for rapid evacuation: every seat is within 45 m of an exit, and the entire bowl empties in 8 to 10 minutes.",
              "Special buildings of every kind follow the same three rules: sight-lines, acoustics and evacuation. A lecture theatre rakes its floor so the back rows see the lecturer and the board; a cinema rakes its floor and absorbs rear-wall echoes; a temple, mosque or church plans its congregational hall so the speaker at the focal point is heard at the back. Exit widths are computed from the occupant load: 1.0 m of door width per 60 persons for assembly buildings. The number of exits is at least two, growing to four or more as the occupant load rises. Acoustic treatment, smoke extraction and emergency lighting are not optional extras but part of the core plan.",
            ],
            bullets: [
              "Auditorium: raked floor, staggered seats, stage at one end, projection at back.",
              "Reverberation time: 1.0-1.5 s speech, 1.5-2.0 s music.",
              "Stadium: field in centre, raked tiers, vomitories from concourses to seats.",
              "Aisle width 1.2 m per 10 seats; exit width 1.0 m per 60 persons.",
              "Evacuation: every seat within 45 m of an exit; whole bowl empties in 8-10 min.",
              "Player rooms, press rooms, medical rooms under the stands.",
              "Roof: tensile or cantilever that does not obscure the field.",
            ],
            table: {
              caption: "Special building design targets.",
              headers: ["Building", "Sight-line target", "Reverb time", "Exit rule"],
              rows: [
                ["Auditorium", "raked floor, staggered seats", "1.0-1.5 s (speech)", "1 m / 60 persons"],
                ["Cinema", "raked floor", "0.8-1.0 s", "1 m / 60 persons"],
                ["Stadium", "raked tiers", "n/a (open air)", "1 m / 60 persons, 45 m to exit"],
                ["Lecture theatre", "raked floor", "1.0 s", "1 m / 60 persons"],
                ["Place of worship", "focal speaker", "1.5 s", "1 m / 60 persons"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Auditorium planning sequence",
              caption: "Plan sight-lines, acoustics and exits in that order.",
              steps: [
                { label: "Fix the stage and focal point", note: "anchor of sight-lines" },
                { label: "Lay the front row", note: "rake the floor upward" },
                { label: "Stagger seats", note: "each row sees between heads ahead" },
                { label: "Place acoustic panels", note: "absorptive rear, reflective near stage" },
                { label: "Place exits", note: "1 m width per 60 persons, within 45 m" },
              ],
            },
            callout: {
              type: "exam",
              title: "Compute exit width",
              body: "Examiners love the numerical exit-width rule: 1.0 m of door width per 60 persons for assembly buildings. For a 600-seat auditorium, the minimum combined exit width is 600 / 60 = 10 m, split across at least two doors of 2.0 to 2.5 m each. Show the division.",
            },
            keyTerms: [
              { term: "Sight-line", definition: "A straight, unobstructed view from a seat to the stage or field, achieved by raking the floor and staggering the seats." },
              { term: "Reverberation time", definition: "The time for a sound to decay by 60 dB after the source stops; 1.0 to 1.5 s for speech, 1.5 to 2.0 s for music in an auditorium." },
              { term: "Vomitory", definition: "A short tunnel in a stadium that channels the crowd from the rear concourse to a seating tier." },
            ],
            examQuestions: [
              {
                q: "Discuss the planning of special buildings. Explain the principles of auditorium design - sight-lines, acoustics and exits - and compute the minimum exit width for a 600-seat auditorium.",
                marks: 7,
                outline: [
                  "Define special buildings: assembly for performance, sport, worship.",
                  "Sight-lines: raked floor, staggered seats, focal point on stage.",
                  "Acoustics: reverberation time 1.0-1.5 s speech; absorptive rear wall.",
                  "Exit rule: 1.0 m of width per 60 persons for assembly.",
                  "Compute: 600 / 60 = 10 m of total exit width.",
                  "Split across at least 2 exits on opposite ends, e.g. 4 doors x 2.5 m.",
                  "Every seat within 45 m of an exit.",
                ],
              },
              {
                q: "What is reverberation time? State suitable values for speech and music.",
                marks: 3,
              },
              {
                q: "Define a vomitory and state its function in a stadium.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Traffic circulation, ventilation and lighting",
            body: [
              "Traffic circulation inside a building is the path people follow from the entrance to their destination. Good circulation is short, direct, free of dead ends, and never passes through one room to reach another. Horizontal circulation uses corridors and lobbies; vertical circulation uses stairs, lifts and ramps. Corridor widths follow occupancy: 1.0 m for residential, 1.5 m for offices, 2.0 m for schools, 2.4 m for hospitals, 3.0 m for assembly buildings. A lobby is a widened corridor at the intersection of paths, used to gather people before they fan out. Lifts are mandatory in buildings above 13 m height or four storeys; ramps of 1:12 slope serve wheelchair users and goods trolleys.",
              "Ventilation renews the air inside a room and is achieved by either natural or mechanical means. Natural ventilation relies on windows on opposite walls to set up cross-flow, on the stack effect that vents hot air through high openings, and on courtyards that draw air through the building. The NBC requires that the openable window area be at least one-twentieth of the floor area for residential rooms and one-tenth for kitchens. Mechanical ventilation uses exhaust fans, ducted supply air or full air-conditioning; hospitals, theatres and large offices need it because natural openings are inadequate for their occupant density. The air-change rate per hour is the design target: 4 to 8 for residences, 6 for offices, 10 to 12 for toilets and kitchens.",
              "Lighting, natural or artificial, sets the comfort and productivity of a room. Daylight factor is the ratio of indoor illuminance to outdoor illuminance, expressed in percent; a 2 percent daylight factor is the minimum for reading rooms, 5 percent for offices and drafting halls, 10 percent for art studios. Daylight is admitted by windows, skylights, clerestories and light shelves that bounce daylight deep into the room. Artificial lighting layers ambient (general), task (workplace) and accent (display) illumination; the NBC fixes 150 lux for residences, 300 lux for offices, 500 lux for drafting, 100 lux for corridors. Lighting and ventilation are sister concerns: a well-lit room often is also well-ventilated because both rely on windows of adequate size and placement.",
            ],
            bullets: [
              "Corridor widths: 1.0 m residential, 1.5 m office, 2.0 m school, 2.4 m hospital.",
              "Lifts mandatory above 13 m or 4 storeys; ramp slope 1:12 for wheelchair users.",
              "Cross-ventilation: windows on opposite walls; stack effect: hot air vents high.",
              "Openable window area: >= 1/20 floor area for residences, >= 1/10 for kitchens.",
              "Air changes per hour: 4-8 residences, 6 offices, 10-12 toilets and kitchens.",
              "Daylight factor: 2% minimum for reading, 5% offices, 10% art studios.",
              "Lux levels: 150 residences, 300 offices, 500 drafting, 100 corridors.",
            ],
            table: {
              caption: "NBC lighting and ventilation targets.",
              headers: ["Space", "Min openable window", "Air changes/hr", "Lux"],
              rows: [
                ["Residence living", "1/20 of floor area", "4-8", "150"],
                ["Kitchen", "1/10 of floor area", "10-12", "300"],
                ["Office", "1/10 of floor area", "6", "300"],
                ["Drafting hall", "1/8 of floor area", "6", "500"],
                ["Corridor", "1/20 of floor area", "4", "100"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Natural versus mechanical ventilation",
              caption: "Choose by occupancy, climate and air-quality needs.",
              left: {
                heading: "Natural ventilation",
                items: [
                  "Cross-flow through opposite windows",
                  "Stack effect through high vents",
                  "Courtyard-driven flow",
                  "Zero running cost",
                  "Used up to mid-density rooms",
                ],
              },
              right: {
                heading: "Mechanical ventilation",
                items: [
                  "Exhaust fans and ducted supply",
                  "Full air-conditioning",
                  "Air-handling unit on each floor",
                  "High running cost",
                  "Hospitals, theatres, large offices",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Daylight factor: 2-5-10",
              body: "Remember the daylight factor ladder: 2 percent for reading, 5 percent for offices, 10 percent for art studios. It is the most-tested number in lighting questions, and is the difference between a passing sketch and a full-marks sketch.",
            },
            keyTerms: [
              { term: "Cross-ventilation", definition: "The natural flow of air through a room driven by openings on opposite walls, which admits breeze on one side and exhausts it on the other." },
              { term: "Daylight factor", definition: "The ratio of indoor illuminance at a point to the simultaneous outdoor illuminance under an overcast sky, expressed as a percentage." },
              { term: "Air change rate", definition: "The number of times the full volume of air in a room is replaced in one hour, the design target for mechanical ventilation." },
            ],
            examQuestions: [
              {
                q: "Explain the principles of horizontal and vertical circulation in buildings. State the NBC rules for natural ventilation and daylighting, with the standards for residential, office and kitchen rooms.",
                marks: 7,
                outline: [
                  "Horizontal circulation: corridors and lobbies; no through rooms.",
                  "Vertical circulation: stairs, lifts above 13 m, ramps 1:12.",
                  "Corridor widths by use: 1.0 m residential to 3.0 m assembly.",
                  "Natural ventilation: openable window area >= 1/20 floor for residences.",
                  "Air change rates: 4-8 residences, 6 offices, 10-12 kitchens.",
                  "Daylight factor: 2% reading, 5% office, 10% studio.",
                  "Lux levels: 150 residence, 300 office, 500 drafting.",
                ],
              },
              {
                q: "Define cross-ventilation and state how it is achieved.",
                marks: 3,
              },
              {
                q: "State the NBC minimum openable window area for a kitchen.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Architectural Drawing and Symbols",
      summary:
        "The drawing language of the architect: the three primary views of plan, elevation and section; the scale and A-series paper sizes that fix the level of detail; the conventional signs and hatches of IS 962; the door, window and sanitary fitting symbols in plan and elevation; and the door, window and sanitary schedules that drive procurement and the bill of quantities.",
      chapter: {
        number: "04",
        title: "Architectural Drawing and Symbols",
        intro:
          "Unit IV teaches the language in which the principles of Units I to III are communicated: the plan, elevation and section views; the choice of scale and paper size; the conventional signs for materials and fittings of IS 962; the specific symbols for doors, windows and sanitary fittings; and the schedules that tabulate every door, window and fitting for procurement.",
        inOneBreath:
          "A plan is a horizontal slice at 1.0 m above floor showing rooms, walls, doors and windows; an elevation is the outside view of one face showing heights and finishes; a section is a vertical slice showing floor heights, foundation and roof structure; scale is the ratio of drawing size to actual size (1:50 residential plan, 1:200 site plan, 1:5 detail); A-series paper runs A0 841x1189 mm down to A4 with each half the previous and aspect ratio one to root-two; conventional signs include 45-degree hatch for brick, triangles for concrete, X for an RCC column, an arc for a door swing, three parallel lines for a window, a kidney shape for an Indian WC and a circle with a notch for a wash basin; schedules tabulate every door (D1, D2...) and window (W1, W2...) by mark, size, type, material and location, driving the bill of quantities and the procurement order.",
        sections: [
          {
            number: "4.1",
            title: "Plan, elevation and section",
            body: [
              "An architectural drawing communicates a three-dimensional building on a two-dimensional sheet. Three primary views suffice: the plan, the elevation and the section. The plan is a horizontal slice through the building at about 1.0 m above floor level, looking down; it shows the layout of rooms, walls, doors and windows in plan form, and is the most-used drawing for permits and construction. The elevation is the view of one face of the building from outside; it shows the heights, the window and door positions, the finishes and the roof profile. The section is a vertical slice through the building, looking along a direction perpendicular to the cut; it shows floor heights, room heights, foundations, roof structure and staircases.",
              "Each drawing carries its own scale and annotation. Plans are drawn at 1:50 or 1:100 for small buildings, 1:200 for large sites; elevations at the same scale as plans; sections at 1:50 to expose construction detail. Walls cut by the plan are drawn as thick lines, doors as an arc showing the swing, windows as three parallel lines (frame, glass, frame). Dimensions are placed on the outside in chains, with overall dimensions on the outermost line and detail dimensions closer to the drawing. North arrow, scale bar, title block and drawing number complete every sheet. The NBC and IS 962 prescribe the conventions for line thickness, hatching and lettering.",
              "Reading a drawing set is a skill the civil engineer uses every day. From the plan the engineer reads room sizes, wall positions and openings; from the elevation, the facade and finishes; from the section, the heights and the structural elements invisible on plan. The three views together fully describe the building for the contractor to construct and the municipal authority to permit. RGPV questions often ask for the line plan of a small building and its front elevation; the marks reward correct projection between the two (door and window positions in the elevation must match the plan), neat line work, dimensioning and the title block. A drawing that does not project consistently between plan and elevation is rejected.",
            ],
            bullets: [
              "Plan: horizontal slice at ~1.0 m above floor; shows rooms, walls, doors.",
              "Elevation: outside view of one face; shows heights and finishes.",
              "Section: vertical slice; shows floor heights, foundation, roof structure.",
              "Plan scales: 1:50 (small), 1:100 (medium), 1:200 (large sites).",
              "Wall in plan: thick line; door: arc of swing; window: three parallel lines.",
              "Annotations: north arrow, scale bar, title block, dimensions in chains.",
              "Plan-elevation projection: door and window positions must match.",
            ],
            table: {
              caption: "Three views and their content.",
              headers: ["View", "Cut plane", "Shows", "Typical scale"],
              rows: [
                ["Plan", "horizontal at 1.0 m", "rooms, walls, doors", "1:50 / 1:100"],
                ["Elevation", "no cut (exterior)", "facade, heights, finishes", "same as plan"],
                ["Longitudinal section", "vertical along length", "room heights, roof structure", "1:50"],
                ["Cross-section", "vertical across width", "floor depth, foundation", "1:50"],
                ["Site plan", "horizontal at ground", "plot, setbacks, trees", "1:200"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a drawing set from a sketch",
              caption: "Plan, then elevations, then sections - in that order.",
              steps: [
                { label: "Sketch", note: "line diagram of rooms" },
                { label: "Plan", note: "draw walls, doors, windows to scale" },
                { label: "Elevation", note: "project openings upward from plan" },
                { label: "Section", note: "slice vertically; show heights and structure" },
                { label: "Title block + dimensions", note: "north arrow, scale bar" },
              ],
            },
            callout: {
              type: "exam",
              title: "Projection earns marks",
              body: "Examiners check projection between views: the windows on the front elevation must align with those on the plan. Always drop faint construction lines from the plan upward to the elevation before drawing the elevation solid. Inconsistency between views is the commonest reason a drawing set loses marks.",
            },
            keyTerms: [
              { term: "Plan", definition: "A horizontal orthographic projection of a building cut at about 1.0 m above floor level, showing the layout of rooms, walls and openings." },
              { term: "Elevation", definition: "An orthographic view of one external face of a building, showing its heights, openings and finishes." },
              { term: "Section", definition: "A vertical orthographic projection obtained by slicing the building with a vertical plane, showing internal heights and structure." },
            ],
            examQuestions: [
              {
                q: "Define plan, elevation and section. State the conventions for drawing walls, doors, windows and dimensions in a plan, and explain the relationship between plan and elevation.",
                marks: 7,
                outline: [
                  "Define plan: horizontal slice at 1.0 m above floor.",
                  "Define elevation: outside view of one face.",
                  "Define section: vertical slice through the building.",
                  "Wall in plan: thick line; door: arc showing swing direction.",
                  "Window in plan: three parallel lines (frame, glass, frame).",
                  "Dimensions: outermost overall chain, inner detail chain.",
                  "Projection: openings on elevation must align with plan by vertical lines.",
                ],
              },
              {
                q: "Distinguish between a longitudinal section and a cross-section.",
                marks: 3,
              },
              {
                q: "How is a window represented in a plan view?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Scale, paper sizes and proportional representation",
            body: [
              "Architectural drawings use scale because buildings are too large to draw at full size. Scale is the ratio of drawing size to actual size: 1:50 means 1 mm on the drawing equals 50 mm in reality, or 1 cm equals 50 cm. A residential plan fits on an A1 sheet at 1:50; a site plan on A1 fits at 1:200; a detail of a stair tread on A3 fits at 1:5. Paper sizes follow the A-series: A0 (841 x 1189 mm), A1 (594 x 841), A2 (420 x 594), A3 (297 x 420), A4 (210 x 297). Each smaller size is half the larger one, and the aspect ratio of one to root-two is preserved across all sizes.",
              "The choice of scale fixes the level of detail and the readable accuracy. At 1:50 a 230 mm brick wall drawn at 4.6 mm thick is just visible and hatching fits; at 1:200 the same wall is 1.15 mm thick, almost a line, and hatching is impossible. Conversely, a stair tread at 1:50 is only 6 mm wide on paper - too small to dimension - so details of stairs and joints are drawn at 1:5 or 1:10. The civil engineer chooses the scale by the content: site plans at 1:200 to 1:500, floor plans at 1:50 to 1:100, sections at 1:50, construction details at 1:5 to 1:20. Every drawing must state its scale in the title block.",
              "Scales are represented in three ways: as a ratio (1:50), as a statement (1 cm equals 50 cm), and as a scale bar drawn on the sheet. The scale bar is essential because paper shrinks and expands with humidity; a measured distance against the bar cancels the error. The reduction-enlargement factor for paper reproduction (e.g. A1 reduced to A3 is a 0.5 factor) must be planned so that the smaller print still reads; details that fit A1 may become illegible on A3. The NBC and IS 6962 recommend a preferred scale series: 1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500, 1:1000, so that draughtsmen across the country use the same ratios and drawings reproduce cleanly.",
            ],
            bullets: [
              "Scale = drawing size : actual size; 1:50 means 1 mm on paper = 50 mm real.",
              "A-series paper: A0 841 x 1189; A1 = A0 / 2; aspect ratio 1 : root-2.",
              "Residential plan fits A1 at 1:50; site plan at 1:200.",
              "Detail of stair tread at 1:5; door joint at 1:10.",
              "Preferred series (IS 6962): 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000.",
              "Scale bar: drawn on every sheet; survives paper shrinkage.",
              "Title block must state scale; A1 reduced to A3 is a 0.5 factor.",
            ],
            table: {
              caption: "Preferred scales for architectural drawings.",
              headers: ["Drawing type", "Scale", "On paper"],
              rows: [
                ["Site plan", "1:200 - 1:500", "50 m plot = 100-250 mm"],
                ["Floor plan", "1:50 - 1:100", "10 m room = 100-200 mm"],
                ["Section", "1:50", "3 m height = 60 mm"],
                ["Door / window detail", "1:10 - 1:20", "1 m door = 50-100 mm"],
                ["Stair tread detail", "1:5", "300 mm tread = 60 mm"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Choosing a scale",
              caption: "Match the scale to the content shown.",
              stages: [
                { label: "Identify the content", note: "site, plan, section or detail" },
                { label: "Pick the paper size", note: "A0, A1, A2, A3" },
                { label: "Choose the preferred scale", note: "1:50, 1:100, 1:200..." },
                { label: "Verify the drawing fits the sheet", note: "leave margins + title block" },
                { label: "Print scale bar in title block", note: "survives paper shrinkage" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always print a scale bar",
              body: "A scale ratio (1:50) printed in the title block is meaningless once the drawing is photocopied at 90 percent. Always print a scale bar on the sheet: a measured distance against the bar corrects for enlargement or reduction. RGPV drawing examiners look for the scale bar before reading dimensions.",
            },
            keyTerms: [
              { term: "Scale", definition: "The ratio of the size of an object on a drawing to its actual size, written as 1:N (e.g. 1:50)." },
              { term: "A-series paper", definition: "The international standard paper sizes from A0 down to A4, where each smaller sheet is half the area of the previous one." },
              { term: "Scale bar", definition: "A printed bar of known real length drawn on a drawing that allows measurement of distances even after the paper is reproduced or shrunk." },
            ],
            examQuestions: [
              {
                q: "Define scale. State the preferred scale series as per IS 6962. Choose appropriate scales and paper sizes for a site plan, a floor plan, a section and a door detail, and explain why a scale bar is essential.",
                marks: 7,
                outline: [
                  "Define scale as the ratio of drawing size to actual size.",
                  "List A-series paper: A0 841 x 1189, A1 = half, etc.",
                  "Preferred series: 1:1, 1:2, 1:5, 1:10, 1:20, 1:50, 1:100, 1:200, 1:500.",
                  "Site plan: A1 at 1:200; floor plan: A1 at 1:50.",
                  "Section: A1 at 1:50; door detail: A3 at 1:10.",
                  "State the role of scale bar: cancels paper shrinkage.",
                  "Title block must state the scale of every drawing.",
                ],
              },
              {
                q: "State the dimensions of A1 and A2 sheets and their aspect ratio.",
                marks: 3,
              },
              {
                q: "Why is a scale bar preferred over a printed scale ratio?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Conventional signs and symbols",
            body: [
              "Conventional signs are the alphabet of architectural drawings: standardised symbols that convey a material, an element or a fitting without a written label. They let a drawing stay legible at small scales and let engineers across the country read the same sheet identically. IS 962 and the NBC codify these signs: a brick wall is shown hatched at 45 degrees, a concrete wall by a solid hatch with diagonal triangles, an RCC column by a square with an X inside, a door by an arc of its swing, a window by three parallel lines, a stair by a series of steps with an arrow for the up direction. Each symbol carries its meaning without text.",
              "Materials are coded by hatch patterns: brick by 45-degree lines, concrete by triangles and dots, earth by short random dashes, stone by alternating thick and thin oblique lines, wood by arcs simulating grain, glass by two parallel lines with hatching, steel by an X inside a thin rectangle. These hatches are scaled so that on a 1:50 plan the brick hatch is about 5 mm spacing, readable yet compact. Fittings carry their own signs: a WC by a kidney-shaped outline, a wash basin by a circle with a notch, a kitchen sink by a rectangle with a drain circle, a cooking range by four burners, a switch by an 's', a socket by a circle with two lines.",
              "The discipline of conventional signs lets an architect draw a complex plan in minutes that any engineer reads in seconds. It also enables drawing by CAD libraries, where the symbol is inserted from a block rather than redrawn each time. RGPV examiners expect students to identify every common sign on sight and to draw the signs for a brick wall, an RCC column, a door, a window, a WC and a wash basin on the answer sheet. A neat legend listing the signs used is part of every professional drawing; it removes any ambiguity when the symbol is unusual or new. The legend is placed in the corner of the sheet, beside the title block.",
            ],
            bullets: [
              "Brick wall: 45-degree hatch lines.",
              "Concrete: triangles and dots; RCC column: square with an X.",
              "Earth: short random dashes; stone: thick + thin oblique lines.",
              "Wood: arcs simulating grain; glass: two parallel lines + hatching.",
              "Door: arc of swing; window: three parallel lines.",
              "WC: kidney-shaped outline; wash basin: circle with a notch.",
              "Stair: series of steps with an arrow for the up direction.",
            ],
            table: {
              caption: "Common conventional signs (IS 962).",
              headers: ["Element", "Sign"],
              rows: [
                ["Brick wall (in section)", "45-degree hatch lines"],
                ["RCC column (in plan)", "square with an X inside"],
                ["Concrete (in section)", "triangles + dots"],
                ["Earth (in section)", "short random dashes"],
                ["Wood (in section)", "arcs imitating grain"],
                ["Steel (in section)", "thin rectangle with an X"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Symbol groups on a drawing",
              caption: "Each group serves a different purpose.",
              axes: { x: "Materials (sections)", y: "Fittings (plans)" },
              quadrants: [
                { label: "Walls and columns (brick, RCC, concrete)" },
                { label: "Doors, windows, stairs (plan elements)" },
                { label: "Sanitary fittings (WC, basin, sink)" },
                { label: "Electrical symbols (switch, socket, light)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Always draw a legend",
              body: "Even when you use only standard symbols, place a small legend in the corner of every drawing. Examiners award a mark for the legend and lose marks when symbols are ambiguous. A drawing without a legend is treated as incomplete.",
            },
            keyTerms: [
              { term: "Conventional sign", definition: "A standardised symbol on a drawing that represents a material, building element or fitting without a written label." },
              { term: "Hatch pattern", definition: "The set of lines, dots or shapes drawn inside the boundary of a material on a section to indicate its type (brick, concrete, earth, steel)." },
              { term: "Legend", definition: "A small table on a drawing that lists and labels the conventional signs used, placed beside the title block." },
            ],
            examQuestions: [
              {
                q: "Explain the need for conventional signs in architectural drawing. Draw the conventional signs for a brick wall in section, an RCC column in plan, a door, a window, a WC and a wash basin, and state the role of a legend.",
                marks: 7,
                outline: [
                  "Define conventional signs as standardised symbols on a drawing.",
                  "State purpose: legibility at small scales; uniform reading across engineers.",
                  "Brick wall in section: 45-degree hatch lines.",
                  "RCC column in plan: square with an X.",
                  "Door: arc of swing; window: three parallel lines.",
                  "WC: kidney shape; wash basin: circle with a notch.",
                  "Legend: corner table listing the signs used, removes ambiguity.",
                ],
              },
              {
                q: "Draw the conventional signs for an earth section and a wood section.",
                marks: 3,
              },
              {
                q: "State the role of a legend on an architectural drawing.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "Doors, windows and sanitary fitting symbols",
            body: [
              "Doors and windows in plan are drawn as their top-view projections. A single-leaf door is shown as a thin rectangle (the leaf) attached to a wall by a hinge, with an arc swept from the hinge through 90 degrees showing the swing direction. A double-leaf door has two leaves and two arcs. A sliding door has two parallel rectangles overlapping, no arc; a folding door has multiple small rectangles in a fan. A louvered door has the same outline with short parallel lines across the leaf indicating louvers. The frame is shown by a thicker line at the wall opening. Door dimensions (e.g. 1.0 x 2.1 m) are noted beside the symbol or in the door schedule.",
              "Windows in plan are drawn as three parallel lines across the opening - the outer frame, the glazing and the inner frame - regardless of the window type. The type (fixed, casement, sliding, louvered) is conveyed by a small annotation: 'FW' for fixed, 'CW' for casement, 'SW' for sliding. In elevation, a casement window is shown as a rectangle with one or two leaf lines on the side that opens; a sliding window as two overlapping rectangles; a louvered window as multiple short parallel lines tilted at about 45 degrees. Ventilators are drawn in elevation as small horizontal rectangles above the door, often with two slanted lines to indicate louvers.",
              "Sanitary fitting symbols are universally recognised: a WC (Indian type) is drawn as a kidney-shaped outline with the wider end against the wall; a WC (European type) as an oval with a small rectangle for the cistern behind; a wash basin as a circle with a notch on one side for the tap; a kitchen sink as a rectangle divided into two bowls with a drain circle each; a bathtub as a rectangle with rounded corners; a urinal as a small curved outline. The fittings are placed in the plan with their centre-to-wall distances dimensioned, and the waste pipe runs shown as thin dashed lines sloping toward the soil stack. IS 962 standardises all these signs.",
            ],
            bullets: [
              "Single-leaf door: rectangle + 90-degree arc from the hinge.",
              "Double-leaf door: two rectangles + two arcs; sliding door: two overlapping rectangles.",
              "Window in plan: three parallel lines; type marked 'FW', 'CW', 'SW'.",
              "Louvered window: multiple short parallel lines at 45 degrees in elevation.",
              "Ventilator: small horizontal rectangle above a door.",
              "WC Indian: kidney shape; WC European: oval + cistern rectangle.",
              "Wash basin: circle with notch; sink: two-bowl rectangle + drain circles.",
            ],
            table: {
              caption: "Door and window symbols.",
              headers: ["Element", "Plan view symbol", "Annotation"],
              rows: [
                ["Single-leaf door", "rectangle + 90-degree arc", "D1"],
                ["Double-leaf door", "two rectangles + two arcs", "D2"],
                ["Sliding door", "two overlapping rectangles", "SD"],
                ["Casement window", "three parallel lines", "CW"],
                ["Sliding window", "three lines + overlap", "SW"],
                ["Ventilator", "small rectangle above door", "V"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Window symbols from plan to schedule",
              caption: "Three ways of drawing the same casement window.",
              tiers: [
                { label: "Window type code", note: "CW / SW / FW annotation" },
                { label: "Plan view: three parallel lines", note: "in the wall opening" },
                { label: "Elevation: rectangle + leaf line", note: "shows opening direction" },
                { label: "Schedule entry", note: "size, type, sill height" },
              ],
            },
            callout: {
              type: "exam",
              title: "Show the swing direction",
              body: "The arc on a door symbol is not optional; it tells the contractor which way to hang the door. RGPV drawing answers lose a mark if the arc is missing or drawn the wrong way. Always draw the arc so the door opens into the room, away from the corridor.",
            },
            keyTerms: [
              { term: "Door swing arc", definition: "The quarter-circle drawn in plan from the hinge of a door, showing the area swept by the door as it opens and the direction in which it opens." },
              { term: "Window type code", definition: "The short annotation (FW fixed, CW casement, SW sliding) placed beside a window symbol to indicate its operating mechanism." },
              { term: "Sanitary fitting symbol", definition: "A standardised outline drawn in plan to represent a WC, wash basin, sink, bathtub or urinal, codified by IS 962." },
            ],
            examQuestions: [
              {
                q: "Draw the conventional symbols in plan for a single-leaf door, a double-leaf door, a sliding window, a casement window, an Indian WC and a wash basin. Explain the swing arc and the window type code.",
                marks: 7,
                outline: [
                  "Single-leaf door: thin rectangle with hinge on wall + 90-degree arc.",
                  "Double-leaf door: two rectangles, two arcs; sliding door: two overlapping rectangles, no arc.",
                  "Window plan: three parallel lines across the opening.",
                  "Window type codes: FW (fixed), CW (casement), SW (sliding).",
                  "Indian WC: kidney-shaped outline, wide end at wall.",
                  "Wash basin: circle with a notch for the tap.",
                  "Swing arc shows door-open direction into the room.",
                ],
              },
              {
                q: "Distinguish between the plan symbols of a casement window and a sliding window.",
                marks: 3,
              },
              {
                q: "Draw the conventional symbol for a ventilator and state where it is placed.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Door, window and sanitary schedules",
            body: [
              "A schedule is a tabular list of every element of one type in a building, with its size, material and position, used to accompany the drawings on site. The door schedule lists every door by a mark (D1, D2, D3...), giving its width, height, leaf count, material (panelled, flush, louvered), frame type (wood, steel), and the room in which it is installed. The window schedule similarly lists each window by mark (W1, W2...) with its width, height, sill height, type (fixed, casement, sliding) and glazing. The sanitary schedule lists each fitting (WC, basin, sink) by mark with its type, material (ceramic, stainless steel), and the room in which it appears.",
              "Schedules solve two problems. They let the contractor order all the doors, windows and fittings at once in a single bill of quantities, with confidence that nothing is missed; and they let the architect make a change in one place (e.g. raising the sill height of W2) and propagate it to every drawing where W2 appears by a single update to the schedule. On a large project with hundreds of doors, the schedule is the only way to keep track. The schedule is printed on its own sheet, numbered, and bound into the drawing set. A door schedule has columns: Mark, Width, Height, Leaves, Material, Frame, Location, Remarks.",
              "The schedule is built up from the floor plans: each door or window is marked on the plan with its code (D1, W1), and the same code is keyed into the schedule with its dimensions taken from the plan or measured off the drawing. The schedule then drives the bill of quantities: the quantity surveyor counts the D1 doors, multiplies by their area and the unit rate, and sums the cost across all marks. Errors in schedules propagate to the bill, so the schedule is double-checked by the architect before issue. RGPV questions expect students to draft a door schedule and a window schedule from a given plan, with the columns filled correctly and consistent with the plan marks.",
            ],
            bullets: [
              "Schedule: tabular list of every door, window or fitting in the building.",
              "Door schedule columns: Mark, Width, Height, Leaves, Material, Frame, Location, Remarks.",
              "Window schedule adds Sill height and Type (FW / CW / SW).",
              "Sanitary schedule adds Material (ceramic, stainless steel) and Fitting type.",
              "Codes (D1, D2, W1, W2) appear on the plan and are keyed to the schedule.",
              "Schedule drives the bill of quantities and the procurement order.",
              "Schedule printed on its own sheet, bound into the drawing set.",
            ],
            table: {
              caption: "Sample door schedule for a 2BHK.",
              headers: ["Mark", "Width", "Height", "Leaves", "Material", "Location"],
              rows: [
                ["D1", "1.2 m", "2.1 m", "2", "Panelled", "Main entrance"],
                ["D2", "1.0 m", "2.1 m", "1", "Flush", "Bedrooms"],
                ["D3", "0.75 m", "2.0 m", "1", "Flush", "Bathroom"],
                ["D4", "0.9 m", "2.1 m", "1", "Louvered", "Store"],
                ["D5", "1.5 m", "2.1 m", "2", "Sliding", "Living to garden"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Schedule cycle - from plan to procurement",
              caption: "Each door and window travels this loop once.",
              steps: [
                { label: "Mark on plan", note: "D1, D2, W1..." },
                { label: "Enter in schedule", note: "size, type, location" },
                { label: "Bill of quantities", note: "count x area x rate" },
                { label: "Procurement order", note: "supplier list" },
                { label: "Site installation", note: "as per schedule mark" },
              ],
            },
            callout: {
              type: "tip",
              title: "Mark first, schedule second",
              body: "On the plan, mark every door and window with a code (D1, D2, W1, W2) before drafting the schedule. The schedule mirrors the plan: a code missing on the plan will not appear in the schedule, and a code in the schedule but not on the plan signals an error.",
            },
            keyTerms: [
              { term: "Door schedule", definition: "A tabular list of every door in a building, with mark, size, leaf count, material and location, used to procure and install doors." },
              { term: "Window schedule", definition: "A tabular list of every window in a building, with mark, size, sill height, type and glazing, used to procure and install windows." },
              { term: "Bill of quantities", definition: "A priced list of every item of work in a project, derived from the schedules and drawings, used for tendering and payment." },
            ],
            examQuestions: [
              {
                q: "Explain the purpose of a door schedule and a window schedule. Draft a door schedule with at least five entries for a 2BHK plan, listing the columns and the typical contents.",
                marks: 7,
                outline: [
                  "Define schedule: tabular list of every door / window in the building.",
                  "State purpose: drives procurement, bill of quantities, installation.",
                  "Door schedule columns: Mark, Width, Height, Leaves, Material, Frame, Location.",
                  "List 5 entries: D1 main 1.2 x 2.1, D2 bedroom 1.0 x 2.1, D3 bath 0.75 x 2.0, etc.",
                  "Window schedule adds Sill height and Type code.",
                  "Codes on plan must match schedule exactly.",
                  "Schedule is bound into the drawing set as its own sheet.",
                ],
              },
              {
                q: "State the columns of a window schedule and one extra item it carries compared to a door schedule.",
                marks: 3,
              },
              {
                q: "Define the bill of quantities and its relation to schedules.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Green Buildings and Sustainability",
      summary:
        "Closing the loop on environmental performance: the IGBC and LEED rating systems with their credit categories and tiers; passive design and climate-responsive architecture; green materials and embodied energy from bamboo to RCC; rainwater harvesting and solid and liquid waste management; and energy efficiency with the ECBC code, on-site solar and case studies of Indian Platinum-rated buildings.",
      chapter: {
        number: "05",
        title: "Green Buildings and Sustainability",
        intro:
          "Unit V closes the loop on environmental performance: the IGBC and LEED rating systems that score green buildings; passive design and climate-responsive architecture that cut the cooling load; green materials and their embodied energy; rainwater harvesting and solid and liquid waste management; and energy efficiency through the ECBC code, on-site solar and the case studies of India's first Platinum-rated buildings.",
        inOneBreath:
          "Green building ratings score environmental performance across site, water, energy, materials and indoor quality, with tiers Certified, Silver, Gold and Platinum; IGBC by the CII is the Indian system, LEED by the U.S. Green Building Council the global one, both awarding Platinum at 75+ and 80+ points respectively; passive design uses orientation, shading, thermal mass, ventilation, daylighting and insulation to cut cooling load by 30-50% before any active system; green materials include fly-ash brick (500 MJ/cu m), stabilised mud block (200 MJ/cu m) and bamboo (50 MJ/cu m) compared with burnt clay brick (1500 MJ) and RCC (3000 MJ); rainwater harvesting captures rooftop rain through a first-flush diverter and sand filter into storage tanks or recharge pits; waste management segregates wet, dry and hazardous solids and treats grey water in reed beds for reuse; and the Energy Conservation Building Code by the Bureau of Energy Efficiency targets envelope U-values, lighting power density and HVAC COP, cut by 25-40% versus conventional, supplemented by rooftop solar PV and net-metering, with case studies CII-Sohrabji Godrej Green Business Centre in Hyderabad and ITC Green Centre in Gurgaon both LEED Platinum.",
        sections: [
          {
            number: "5.1",
            title: "IGBC and LEED rating systems",
            body: [
              "Green building rating systems score a building on its environmental performance across site, water, energy, materials and indoor quality, and award a label (Certified, Silver, Gold, Platinum) that signals its sustainability to owners and tenants. The two systems relevant in India are LEED (Leadership in Energy and Environmental Design), run by the U.S. Green Building Council and used worldwide, and IGBC (Indian Green Building Council), run by the Confederation of Indian Industry and tuned to Indian climates and regulations. Both assign points across credit categories; the total points decide the rating level. A project registers at the design stage, submits documentation at completion, and is audited before the label is awarded.",
              "IGBC rates buildings under several rating programmes: IGBC Green Homes for residences, IGBC Green New Buildings for commercial and institutional buildings, IGBC Green Schools, IGBC Green Factory Buildings, IGBC Green Townships, IGBC Green SEZs and IGBC Green Existing Buildings. Each programme has a credit catalogue and a minimum-points-per-category rule. Typical categories are: site planning and management, water conservation, energy efficiency, materials and resources, indoor environmental quality, and innovation. Points are weighted toward energy and water, which carry the largest environmental impact in Indian buildings. A project that meets all the mandatory requirements and earns 40-49 points is Certified, 50-59 Silver, 60-74 Gold, 75+ Platinum.",
              "LEED v4.1 is the current global version, with categories: Location and Transportation, Sustainable Sites, Water Efficiency, Energy and Atmosphere, Materials and Resources, Indoor Environmental Quality, Innovation, Regional Priority. The points are 110 in total: 40-49 Certified, 50-59 Silver, 60-79 Gold, 80+ Platinum. The credit categories overlap with IGBC's but LEED weights location and transportation more heavily, reflecting the U.S. context. In India, both ratings are accepted by clients and by government bodies; IGBC is preferred for projects where Indian climate data and local materials are central, while LEED is preferred for multinational corporate offices. The civil engineer's role is to document each credit during design and construction, and to coordinate with the rating assessor.",
            ],
            bullets: [
              "LEED: by U.S. Green Building Council; 110 total points; 4 rating tiers.",
              "IGBC: by CII - India; tuned to Indian climate and regulations.",
              "IGBC programmes: Homes, New Buildings, Schools, Factory, Township, SEZ.",
              "Rating tiers (IGBC): 40-49 Certified, 50-59 Silver, 60-74 Gold, 75+ Platinum.",
              "Categories: site, water, energy, materials, IEQ, innovation.",
              "Energy and water carry the highest point weights.",
              "LEED tiers: 40-49 Certified, 50-59 Silver, 60-79 Gold, 80+ Platinum.",
            ],
            table: {
              caption: "IGBC and LEED rating tiers.",
              headers: ["Rating", "IGBC points", "LEED points"],
              rows: [
                ["Certified", "40-49", "40-49"],
                ["Silver", "50-59", "50-59"],
                ["Gold", "60-74", "60-79"],
                ["Platinum", "75+", "80+"],
                ["Total points", "100", "110"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The green building rating pyramid",
              caption: "Most projects sit at Silver or Gold; Platinum is the top tier.",
              tiers: [
                { label: "Platinum (75+ IGBC, 80+ LEED)", note: "highest performance" },
                { label: "Gold (60-74 / 60-79)", note: "common target for new builds" },
                { label: "Silver (50-59)", note: "baseline corporate goal" },
                { label: "Certified (40-49)", note: "entry-level green" },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the rating bodies",
              body: "Always name the rating body: IGBC is run by the CII in India, LEED by the U.S. Green Building Council. Examiners deduct marks for vague statements like 'rated by the government'. State the four tiers (Certified, Silver, Gold, Platinum) and the points bracket for each.",
            },
            keyTerms: [
              { term: "Green building rating", definition: "A standardised scoring of a building's environmental performance, awarded as Certified, Silver, Gold or Platinum by an agency such as IGBC or LEED." },
              { term: "IGBC", definition: "The Indian Green Building Council, run by the Confederation of Indian Industry, which rates green buildings in India under programmes tuned to Indian climates and regulations." },
              { term: "LEED", definition: "Leadership in Energy and Environmental Design, the global rating system of the U.S. Green Building Council, with 110 total points across eight credit categories." },
            ],
            examQuestions: [
              {
                q: "Explain the purpose of green building rating systems. Compare IGBC and LEED with their rating tiers, point scales and credit categories, and state when each is preferred in India.",
                marks: 7,
                outline: [
                  "Define green building rating: scores a building's environmental performance.",
                  "IGBC: by CII - India; programmes: Homes, New Buildings, Schools, etc.",
                  "LEED: by U.S. Green Building Council; v4.1, 110 total points.",
                  "Tiers IGBC: 40-49 Certified, 50-59 Silver, 60-74 Gold, 75+ Platinum.",
                  "Tiers LEED: 40-49 Certified, 50-59 Silver, 60-79 Gold, 80+ Platinum.",
                  "Categories: site, water, energy, materials, IEQ, innovation.",
                  "IGBC preferred for Indian climate + materials; LEED for multinational offices.",
                ],
              },
              {
                q: "State the four rating tiers of IGBC and their point brackets.",
                marks: 3,
              },
              {
                q: "State the role of the Confederation of Indian Industry in green building rating.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Passive design and climate-responsive architecture",
            body: [
              "Passive design uses the building's form, orientation and fabric to keep occupants comfortable without mechanical heating or cooling. It works with the sun, wind and daylight available on the site, and is the first step before any active system is specified. The five classic strategies are: solar shading of windows and walls during the hot months; thermal mass in walls and floors that absorbs heat by day and releases it by night; natural ventilation by cross-flow and stack effect; daylighting by well-placed windows, light shelves and clerestories; and insulation of the envelope to slow heat transfer. A building that follows all five strategies can cut its cooling load by 30 to 50 percent.",
              "Climate-responsive architecture tailors the passive strategy to the local climate. In hot-dry regions such as Jodhpur and Bhopal, the design uses thick walls (300 to 450 mm of stone or burnt clay) for thermal mass, small windows on the west, deep verandas for shading, and internal courtyards that vent hot air at night. In warm-humid regions such as Mumbai and Chennai, the design uses large openings on opposite walls for cross-ventilation, raised floors to admit breeze from below, light-coloured roofs to reflect sun, and shaded verandas all round. In composite regions such as Delhi and Indore, the design combines both: thermal mass for the hot-dry months and ventilation for the warm-humid months.",
              "Contemporary passive design adds new tools: earth-coupled buildings that use the constant ground temperature at 3 m depth as a heat sink; wind towers that catch the upper breeze and channel it down into the building; evaporative cooling by passing air over water or through wet khus mats; solar chimneys that draw hot air out of the top by stack effect; and Trombe walls - a south-facing masonry wall painted black behind glass - that capture solar heat by day and release it into the room at night. The CII-Sohrabji Godrej Green Business Centre in Hyderabad and the ITC Green Centre in Gurgaon are Indian exemplars of passive design at commercial scale, both IGBC Platinum rated.",
            ],
            bullets: [
              "Passive design: uses form, orientation and fabric to avoid mechanical cooling.",
              "Five strategies: shading, thermal mass, ventilation, daylighting, insulation.",
              "Hot-dry: thick walls, small west windows, courtyards, deep verandas.",
              "Warm-humid: large cross-vents, raised floors, light-coloured roofs.",
              "Composite: thermal mass + ventilation, switchable by season.",
              "Earth coupling, wind towers, solar chimneys, Trombe walls - advanced passive.",
              "Cooling load cut by 30-50% with full passive strategy.",
            ],
            table: {
              caption: "Passive strategy by climate.",
              headers: ["Climate", "Walls", "Windows", "Roof", "Special"],
              rows: [
                ["Hot-dry", "thick mass", "small, west shaded", "light, insulated", "courtyard + veranda"],
                ["Warm-humid", "light", "large opposite", "light, reflective", "raised floor + veranda"],
                ["Composite", "thick mass", "medium, operable", "light + insulated", "seasonal devices"],
                ["Temperate", "medium", "south-facing large", "medium", "sun-trap glazing"],
                ["Cold", "thick + insulated", "south glazing large", "thick insulated", "sun-space buffer"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The passive design cycle",
              caption: "Five strategies work together to keep the building comfortable.",
              steps: [
                { label: "Solar shading", note: "keep sun off windows and walls" },
                { label: "Thermal mass", note: "absorb day heat; release at night" },
                { label: "Natural ventilation", note: "cross-flow + stack" },
                { label: "Daylighting", note: "light shelves + clerestory" },
                { label: "Insulation", note: "slow heat transfer through envelope" },
              ],
            },
            callout: {
              type: "tip",
              title: "Passive first, active second",
              body: "The IGBC and LEED credit hierarchy places passive design before active systems. State this in any green-building answer: design the envelope and orientation first to minimise the cooling load, then size the air-conditioning to the reduced load. Reversing the order forfeits both credits and comfort.",
            },
            keyTerms: [
              { term: "Passive design", definition: "The use of building form, orientation and fabric to keep occupants comfortable without mechanical heating or cooling." },
              { term: "Thermal mass", definition: "The capacity of a material such as stone, brick or concrete to absorb heat during the day and release it at night, smoothing indoor temperature." },
              { term: "Trombe wall", definition: "A south-facing masonry wall painted black and placed behind glass, which captures solar heat by day and releases it into the room at night." },
            ],
            examQuestions: [
              {
                q: "Define passive design. State its five classic strategies and explain how passive design adapts to hot-dry, warm-humid and composite climates, with one Indian example.",
                marks: 7,
                outline: [
                  "Define passive design: use of form, orientation and fabric for comfort.",
                  "Five strategies: shading, thermal mass, ventilation, daylighting, insulation.",
                  "Hot-dry: thick walls, small west windows, courtyards, verandas.",
                  "Warm-humid: large openings, cross-ventilation, raised floor.",
                  "Composite: combined mass + ventilation, seasonally switchable.",
                  "Give example: CII-Sohrabji Godrej Green Business Centre, Hyderabad.",
                  "State that passive design cuts cooling load by 30-50% before active systems.",
                ],
              },
              {
                q: "What is a Trombe wall and how does it work?",
                marks: 3,
              },
              {
                q: "State two passive strategies for warm-humid climates.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Green materials and embodied energy",
            body: [
              "Green materials are those whose manufacture, use and disposal have low environmental impact. They are locally sourced to cut transport energy, made from renewable or recycled raw materials, low in embodied energy (the total energy consumed to extract, manufacture, transport and install them), non-toxic in use, and reusable or recyclable at the end of the building's life. Examples include burnt clay brick made with farm waste as fuel, fly-ash brick that consumes a power-plant waste, stabilised mud block compressed in a manual press, bamboo grown on a 3 to 5 year cycle, recycled concrete aggregate from demolished buildings, and reused steel sections from disassembled structures.",
              "Embodied energy is the hidden energy cost of a material, often dwarfing its operating energy over a short building life. Per cubic metre, RCC has embodied energy of about 2000 to 3000 MJ, burnt clay brick about 1000 to 1500 MJ, fly-ash brick about 500 MJ, stabilised mud block about 200 MJ, and bamboo about 50 MJ per unit volume. Cement alone contributes 7 to 8 percent of global CO2 emissions, so green materials substitute fly-ash, ground granulated blast-furnace slag or calcined clay for part of the cement clinker. The choice is not always lowest embodied energy: a material with low embodied energy but high operating energy (e.g. uninsulated mud wall in a cold climate) may be worse over the building's life than one with higher embodied energy but lower operating energy.",
              "Green materials also include finishes and fittings: low-VOC (volatile organic compound) paints that do not outgas toxins, water-based adhesives, natural stone and terrazzo floors that last a century, recycled glass tiles, wool and cork for insulation, linoleum from linseed oil, and certified sustainable timber from forests managed under FSC (Forest Stewardship Council). The IGBC and LEED material credit categories reward the use of recycled content, regional materials, certified wood, and lifecycle-based selection. The civil engineer's responsibility is to read the environmental product declaration (EPD) for each major material and to choose the option that balances embodied energy, durability, indoor air quality and cost.",
            ],
            bullets: [
              "Green material: low embodied energy, renewable, local, non-toxic, recyclable.",
              "Fly-ash brick: 500 MJ/cu m; uses power-plant waste, replaces burnt clay.",
              "Stabilised mud block: ~200 MJ/cu m; pressed in a manual machine.",
              "Bamboo: ~50 MJ/cu m; renewable on a 3-5 year cycle.",
              "Embodied energy: RCC ~2000-3000 MJ/cu m; burnt clay brick 1000-1500 MJ.",
              "Cement contributes 7-8% of global CO2; substitute fly-ash, slag, calcined clay.",
              "Low-VOC paints, FSC-certified wood, recycled glass tiles - green finishes.",
            ],
            table: {
              caption: "Embodied energy of common materials.",
              headers: ["Material", "Embodied energy (MJ/cu m)", "Notes"],
              rows: [
                ["Bamboo", "~50", "renewable on 3-5 yr cycle"],
                ["Stabilised mud block", "~200", "manual press"],
                ["Fly-ash brick", "~500", "uses power-plant waste"],
                ["Burnt clay brick", "1000-1500", "fuel-fired kiln"],
                ["RCC", "2000-3000", "cement + steel"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Material selection - green versus conventional",
              caption: "Compare embodied energy and lifecycle cost.",
              left: {
                heading: "Green materials",
                items: [
                  "Fly-ash brick ~500 MJ",
                  "Stabilised mud ~200 MJ",
                  "Bamboo ~50 MJ",
                  "FSC-certified timber",
                  "Recycled aggregate concrete",
                ],
              },
              right: {
                heading: "Conventional materials",
                items: [
                  "Burnt clay brick ~1500 MJ",
                  "RCC ~3000 MJ",
                  "Virgin steel",
                  "Imported marble",
                  "Portland cement (no SCM)",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Read the EPD before you specify",
              body: "The Environmental Product Declaration is the official source for a material's lifecycle impact. RGPV answers that mention EPDs signal professional awareness. Always state the embodied-energy figure for at least two alternative materials before recommending one.",
            },
            keyTerms: [
              { term: "Green material", definition: "A building material with low embodied energy, made from renewable or recycled raw materials, locally sourced and recyclable at the end of the building's life." },
              { term: "Embodied energy", definition: "The total energy consumed in extracting, manufacturing, transporting and installing a unit of building material, expressed in MJ per cubic metre." },
              { term: "Environmental product declaration (EPD)", definition: "A verified document reporting the lifecycle environmental impact of a material, used to compare options in green procurement." },
            ],
            examQuestions: [
              {
                q: "Define embodied energy. Compare the embodied energy of RCC, burnt clay brick, fly-ash brick, stabilised mud block and bamboo. State the role of supplementary cementitious materials and explain what an EPD is.",
                marks: 7,
                outline: [
                  "Define embodied energy: total energy to extract, make, transport, install.",
                  "Give numbers: RCC ~2000-3000 MJ, burnt clay ~1500 MJ, fly-ash ~500 MJ.",
                  "Stabilised mud ~200 MJ; bamboo ~50 MJ per cubic metre.",
                  "SCM: fly-ash, GGBS, calcined clay replace cement clinker; cut CO2.",
                  "Cement alone is 7-8% of global CO2.",
                  "EPD: verified document with lifecycle impact data.",
                  "Compare two options before specifying: e.g. fly-ash vs burnt clay.",
                ],
              },
              {
                q: "State any three properties of a green building material.",
                marks: 3,
              },
              {
                q: "What is an environmental product declaration?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Rainwater harvesting and waste management",
            body: [
              "Rainwater harvesting captures the rain that falls on a building's roof and either stores it for later use or recharges it into the ground to revive aquifers. A rooftop system consists of a catchment (the roof), a conveyance (down-take pipes with a first-flush diverter to discard the dirtiest early rain), a filter (sand and gravel layers to remove silt), and either a storage tank or a recharge pit. A 100 sq m roof in Bhopal, which receives about 1100 mm of rain a year, captures 110 cu m of rainwater; after losses of about 20 percent, 88 cu m is available for use or recharge - enough for one household's annual drinking and cooking needs. The system is mandatory in many Indian cities for new buildings above a stated area.",
              "Recharge pits and trenches return rainwater to the aquifer rather than to the storm drain. A recharge pit is a 1 to 2 m diameter hole filled with pebbles and sand, into which filtered roof water is led; it percolates into the surrounding soil and raises the water table. A recharge trench is a long, shallow excavation alongside a building, filled with boulders, used where the soil is sandy. A recharge well is a deeper structure for areas with low-permeability topsoil over a good aquifer. The choice depends on soil permeability, water-table depth and the volume of water to be recharged; the design must prevent contamination by sewage and ensure a minimum distance from the building foundation.",
              "Solid and liquid waste management closes the sustainability loop. Segregation at source into wet (biodegradable), dry (recyclable) and hazardous wastes is the first step; composting wet waste on site or in the locality is the second. A 100-unit residential complex generates about 25 to 40 kg of wet waste a day, all of which can be composted in a row of aerobic bins. Liquid waste is segregated into black water (from WCs, high in pathogens) and grey water (from baths and kitchens, lower in contamination); grey water can be treated in a reed bed or aeration tank and reused for flushing and gardening. IGBC awards credits for on-site composting, grey-water reuse and rainwater harvesting, all of which appear in nearly every green-rated Indian project.",
            ],
            bullets: [
              "Rooftop harvesting: catchment, conveyance, first-flush diverter, filter, storage or recharge.",
              "100 sq m roof in Bhopal captures ~88 cu m/yr (after 20% loss).",
              "Recharge pit: 1-2 m dia hole, pebble + sand fill, percolates into soil.",
              "Recharge trench: long shallow excavation with boulders, sandy soils.",
              "Recharge well: deeper, for low-permeability topsoil over good aquifer.",
              "Solid waste segregation: wet (compost), dry (recycle), hazardous (special).",
              "Grey water from baths + kitchens: treat in reed bed; reuse for flushing + garden.",
            ],
            table: {
              caption: "Rainwater harvesting yield at Indian cities (100 sq m roof).",
              headers: ["City", "Rainfall (mm/yr)", "Capture (cu m)", "Net after 20% loss"],
              rows: [
                ["Bhopal", "~1100", "110", "88"],
                ["Indore", "~1000", "100", "80"],
                ["Mumbai", "~2400", "240", "192"],
                ["Delhi", "~700", "70", "56"],
                ["Chennai", "~1300", "130", "104"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Rooftop rainwater harvesting flow",
              caption: "From roof to ground, with a first-flush diverter and a filter.",
              steps: [
                { label: "Roof catchment", note: "100 sq m" },
                { label: "Down-take pipe + first-flush diverter", note: "discard early rain" },
                { label: "Sand and gravel filter", note: "remove silt" },
                { label: "Storage tank or recharge pit", note: "use or recharge" },
                { label: "Aquifer revived", note: "water table rises" },
              ],
            },
            callout: {
              type: "warning",
              title: "Distance from foundation",
              body: "A recharge pit must be at least 3 m away from the building foundation and never upslope of a soak-pit or sewer line. Examiners deduct marks for recharge-pit designs that risk undermining the foundation or contaminating the water supply. Always state the clearance in the answer.",
            },
            keyTerms: [
              { term: "Rainwater harvesting", definition: "The capture of rain from a roof or surface, either stored for use or recharged into the ground to revive aquifers." },
              { term: "First-flush diverter", definition: "A device in a rainwater harvesting system that discards the dirtiest rain that falls first, carrying roof dust and bird droppings away from the storage tank." },
              { term: "Grey water", definition: "Wastewater from baths, showers and kitchens (not WCs), lower in contamination than black water, treatable for reuse in flushing and gardening." },
            ],
            examQuestions: [
              {
                q: "Explain the layout of a rooftop rainwater harvesting system. Compute the annual water captured by a 120 sq m roof in Bhopal (rainfall 1100 mm) and describe two recharge methods.",
                marks: 7,
                outline: [
                  "Components: catchment (roof), down-take pipe, first-flush diverter, filter, storage or recharge.",
                  "First-flush diverter discards the dirtiest early rain.",
                  "Filter: sand and gravel layers remove silt.",
                  "Capture: 120 x 1.1 m = 132 cu m gross.",
                  "Net after 20% loss: 132 x 0.8 = 105.6 cu m per year.",
                  "Recharge pit: 1-2 m dia, pebble + sand fill, percolates into soil.",
                  "Recharge trench: long, shallow, boulders; for sandy soil; keep 3 m from foundation.",
                ],
              },
              {
                q: "Distinguish between a recharge pit and a recharge trench.",
                marks: 3,
              },
              {
                q: "Define grey water and state one use of treated grey water.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Energy efficiency and case studies",
            body: [
              "Energy efficiency in buildings targets the largest consumers of electricity: lighting, air-conditioning, pumps and plug loads. The Energy Conservation Building Code (ECBC) of the Bureau of Energy Efficiency sets prescriptive and performance-based standards for new commercial buildings with a connected load of 100 kW or more. ECBC fixes the envelope U-values, the window-wall ratio, the HVAC efficiency, the lighting power density (LPD) in watts per sq m, and the use of renewable energy on site. A building that meets ECBC cuts its energy use by 25 to 40 percent compared with a conventional one. IGBC and LEED both reward ECBC compliance as the baseline, with extra points for exceeding it.",
              "On-site renewable energy is the second pillar of efficiency. Rooftop solar photovoltaic panels convert sunlight to electricity; a 10 kWp system on a 100 sq m south-facing roof in central India generates about 50 kWh per day, enough to cover the daytime load of a small office. Solar water heaters use flat-plate or evacuated-tube collectors to heat water for bathing and kitchen use, replacing electric geysers; a 100-litre-per-day system pays back in three to four years. Solar air heaters and dryers are used in agro-industrial applications. Net-metering arrangements allow the building to export surplus solar power to the grid, lowering the energy bill and the carbon footprint.",
              "Indian green building case studies illustrate the integrated approach. The CII-Sohrabji Godrej Green Business Centre in Hyderabad was India's first LEED Platinum building, with rooftop solar PV, rainwater harvesting, a cooling tower using treated wastewater, and daylighting for 90 percent of the workstations. Suzlon One Earth in Pune is LEED Platinum and IGBC Platinum, with 100 percent on-site renewable energy from wind and solar, daylight for 90 percent of the area, and rainwater harvesting. ITC Green Centre in Gurgaon is LEED Platinum, with a 30 percent lower energy use than a conventional office through passive design and high-efficiency HVAC. These projects show that Platinum-level performance is achievable in Indian climates with current technology.",
            ],
            bullets: [
              "ECBC: by Bureau of Energy Efficiency; for buildings with connected load >= 100 kW.",
              "ECBC cuts energy use by 25-40% vs conventional buildings.",
              "Lighting power density (LPD): watts per sq m; lower is better.",
              "On-site solar PV: 10 kWp system generates ~50 kWh/day in central India.",
              "Solar water heater: 100 LPD system, 3-4 year payback.",
              "Net-metering: export surplus solar power to grid.",
              "CII Godrej Hyderabad: India's first LEED Platinum; ITC Gurgaon: LEED Platinum.",
            ],
            table: {
              caption: "Energy-efficiency targets (ECBC).",
              headers: ["Item", "Conventional", "ECBC-compliant"],
              rows: [
                ["Envelope U-value (W/sq m K)", "1.0-2.0", "0.4-0.6"],
                ["Window-wall ratio", "0.5", "< 0.3"],
                ["Lighting LPD office (W/sq m)", "12-15", "8-10"],
                ["HVAC COP", "3.0", "4.5+"],
                ["Energy use index (kWh/sq m/yr)", "150-200", "90-120"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Pathways to energy efficiency",
              caption: "Start with envelope, then active systems, then on-site renewables.",
              start: "Where to invest first?",
              branches: [
                { label: "Envelope first", outcome: "U-values, shading, daylighting - cuts load by 25%", good: true },
                { label: "Active systems", outcome: "High-COP HVAC, low-LPD lighting - 25% more", good: true },
                { label: "On-site renewables", outcome: "Solar PV + solar water heater - covers the rest", good: true },
                { label: "Buy grid green power", outcome: "Last resort - renewable power purchase agreement", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Always cite one Indian case",
              body: "Green building answers without a named Indian project look generic. Memorise one: CII-Sohrabji Godrej Green Business Centre in Hyderabad - India's first LEED Platinum - with rooftop solar PV, rainwater harvesting, and daylight for 90% of area. Drop it into the conclusion of any 7-mark answer.",
            },
            keyTerms: [
              { term: "ECBC", definition: "The Energy Conservation Building Code of the Bureau of Energy Efficiency, setting prescriptive and performance-based energy standards for large commercial buildings in India." },
              { term: "Lighting power density (LPD)", definition: "The installed lighting load per unit floor area, expressed in watts per square metre, fixed by ECBC for each space type." },
              { term: "Net-metering", definition: "An arrangement that allows a building with rooftop solar photovoltaic to export surplus electricity to the grid and be billed only for the net energy consumed." },
            ],
            examQuestions: [
              {
                q: "Explain the Energy Conservation Building Code and its key requirements. State the role of on-site solar energy and describe the green features of one Indian Platinum-rated case study.",
                marks: 7,
                outline: [
                  "ECBC: by Bureau of Energy Efficiency; for buildings with load >= 100 kW.",
                  "ECBC cuts energy use by 25-40% vs conventional.",
                  "Prescriptive targets: envelope U-values, window-wall ratio, LPD, HVAC COP.",
                  "LPD: 8-10 W/sq m for offices (ECBC) vs 12-15 conventional.",
                  "Solar PV: 10 kWp system gives ~50 kWh/day in central India.",
                  "Net-metering exports surplus to grid.",
                  "Case: CII-Sohrabji Godrej, Hyderabad - LEED Platinum, solar PV, rainwater, daylight 90%.",
                ],
              },
              {
                q: "Define lighting power density and state a typical ECBC value for offices.",
                marks: 3,
              },
              {
                q: "State the role of net-metering in a rooftop solar PV system.",
                marks: 2,
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
        "RGPV CE-304 papers typically spread 70-80 of the marks across FSI/FAR computation, NBC bye-laws and setbacks, stair design, foundations, plan-elevation-section drawing, conventional signs and green buildings (IGBC/LEED and passive design), with functional planning and schedules supplying the short and medium questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "FSI/FAR computation (numerical with coverage and floors)", weight: "10-14 marks", note: "Almost guaranteed; practise 4-5 full solves including the floors-by-height limit." },
        { topic: "NBC bye-laws, setbacks and height restrictions", weight: "10-12 marks", note: "Quote the local numbers; tie height to road width." },
        { topic: "Stair design and 2R + T = 600 rule", weight: "8-10 marks", note: "Design a dog-leg from 3 m height; show risers, treads, landing, length." },
        { topic: "Foundations: shallow types and load transfer", weight: "8-10 marks", note: "Classify spread, isolated, combined, strap, raft with one use each." },
        { topic: "Plan, elevation, section + conventional signs", weight: "8-10 marks", note: "Draw walls, doors, windows and fittings in plan to IS 962 conventions." },
        { topic: "Principles of planning (aspect, prospect, roominess)", weight: "6-8 marks", note: "Define, illustrate, critique - the three-step answer." },
        { topic: "Residential 2BHK planning on 100 sq m plot", weight: "6-8 marks", note: "Draw line plan with setbacks, plumbing wall and NBC minimum sizes." },
        { topic: "Green buildings: IGBC/LEED tiers and passive design", weight: "6-8 marks", note: "Memorise tier brackets; pair passive strategies with one Indian case." },
        { topic: "Door/window/sanitary schedules", weight: "4-6 marks", note: "Draft a 5-row door schedule with correct columns and plan codes." },
        { topic: "Rainwater harvesting and ECBC energy efficiency", weight: "4-6 marks", note: "Rooftop yield numerical plus ECBC LPD and U-value targets." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - principles and bye-laws", tasks: ["Orientation, six principles, NBC climate zones", "NBC bye-laws: coverage, setbacks, height by road width", "FSI/FAR: 5 numerical solves including coverage cap"] },
        { week: "Week 2", focus: "Unit II - components and foundations", tasks: ["Plinth, walls, floors, roofs and DPC (sketch section)", "Doors, windows, ventilators with NBC sizes + stair design", "Shallow and deep foundations; pile capacity by end + friction"] },
        { week: "Week 3", focus: "Unit III - functional planning", tasks: ["Residential 2BHK line plan on 100 sq m plot", "Hospital zoning, school and library planning, exits", "Commercial, industrial, special buildings; circulation + ventilation"] },
        { week: "Week 4", focus: "Unit IV - drawing and symbols", tasks: ["Plan, elevation, section projection practice (2 sets)", "Scale, A-series paper, conventional signs (IS 962)", "Door, window, sanitary schedules from a given plan"] },
        { week: "Week 5", focus: "Unit V - green buildings", tasks: ["IGBC and LEED tiers, credit categories, rating bodies", "Passive design by climate; green materials and embodied energy", "Rainwater harvesting yield, ECBC targets, Indian Platinum case studies"] },
        { week: "Week 6", focus: "Full revision + papers", tasks: ["Revise all 5 units' 7-mark questions and outlines", "Draw two complete drawing sets (residential + public) under time", "Two full past papers under exam timing; verify arithmetic and projection"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Revise the six principles of planning and the NBC minimum room sizes on one page.",
        "Practise one FSI computation end-to-end with coverage and height limits.",
        "Re-draw the conventional signs for wall, RCC column, door, window, WC and basin.",
        "Recap the IGBC and LEED point brackets and the four rating tiers (Certified to Platinum).",
        "Memorise the 2R + T = 600 stair rule and one dog-leg stair design.",
        "Read two case studies (CII Hyderabad, ITC Gurgaon) with their key green features.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Start every 7-mark answer with a one-line definition before the example or arithmetic.",
        "Draw the diagram first for stair, foundation and orientation questions - marks reward the sketch.",
        "Show all arithmetic for FSI / stair design / air-change / exit-width calculations in steps.",
        "Cite the NBC for principles and the local bye-laws for the actual setback numbers.",
        "Drop one Indian green building case study (CII Hyderabad or ITC Gurgaon) into the conclusion.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Quoting only the NBC general rule when the bye-law question wants the local number.",
        "Omitting the damp-proof course in a wall-section sketch.",
        "Forgetting the 2R + T = 600 mm thumb rule in stair design.",
        "Drawing door symbols without the swing arc showing the open direction.",
        "Mixing up IGBC and LEED point brackets for Gold (60-74 vs 60-79) and Platinum (75+ vs 80+).",
        "Skipping the scale bar on a drawing and stating only the scale ratio.",
      ],
    },
  ],
};
