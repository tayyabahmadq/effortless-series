/**
 * Academics - RGPV 8th-semester elective: ME-802(A) Automobile Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries three body paragraphs, five
 * bullets, a diagram, key terms, a callout, a table or code sample, and
 * three exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me802a: AcademicSubject = {
  id: "me-802-a",
  code: "ME-802(A)",
  title: "Automobile Engineering",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to the automobile for RGPV mechanical engineers: chassis and frames, MPFI and CRDI, clutches and gearboxes, steering and suspension, brakes with ABS, electricals and air conditioning, airbags and ESC, BS-VI aftertreatment, and the electric-autonomous future.",
  description:
    "Five units walk from the vehicle itself - chassis, frames, layouts, aerodynamics and tyre-limited performance - through the engine and powertrain with MPFI, CRDI, the clutch, synchromesh and automatic gearboxes and the differential, then into steering geometry, suspension and braking with ABS and regeneration. Unit IV powers and protects the occupants: battery, starting, charging, lighting, air conditioning, airbags, ESC and ADAS with NVH. Unit V cleans up and looks forward: catalytic converter, EGR, DPF, BS-VI norms, alternative fuels, electric and hybrid powertrains, and the connected, autonomous vehicle. Every section pairs theory with a labelled sketch or numerical and the questions RGPV actually asks.",
  accentColor: "#f472b6",
  emoji: "AE",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Vehicle Fundamentals",
      summary:
        "The automobile as a machine: what a chassis is, how frames and monocoque bodies carry load, why engine position and driven axle define a layout, how air shapes drag and lift, and how tyre grip and road resistances set acceleration, top speed and gradeability.",
      chapter: {
        number: "01",
        title: "Chassis, Frames, Layouts and Performance",
        intro:
          "Unit I defines the vehicle before Unit II powers it: the chassis and its classification by load-carrying structure, the ladder frame and the frameless body, the five classical engine-drive layouts, the aerodynamics of drag and lift, and finally the tyre and the force balance that govern performance.",
        inOneBreath:
          "The chassis is the complete vehicle minus body; it may be a separate ladder frame carrying everything, a stressed monocoque shell, or a semi-integral compromise; layouts place the engine front, mid or rear over front, rear or all driven axles and thereby fix weight distribution and packaging; drag rises with the square of speed and the power to fight it with the cube; and performance is whatever tractive effort remains after rolling resistance, aerodynamic drag and gradient take their share.",
        sections: [
          {
            number: "1.1",
            title: "Chassis, vehicle classification and body types",
            body: [
              "An automobile is assembled around its chassis - a word borrowed from French frame-builders - which carries the engine, the transmission, the axles and wheels, the controls, the suspension and the electricals: everything, in fact, except the body and its occupants. The chassis must accept the vertical static load of the powertrain and payload, resist the reaction torques of the engine and the brakes, survive twisting when one wheel climbs a kerb, and still hold every mounting point in its designed position so that steering geometry, driveshafts and body panels all align. How the chassis shares these duties with the body is the most fundamental classification of road vehicles.",
              "Three load-carrying philosophies dominate. In the conventional or body-on-frame vehicle, a separate ladder frame of two side members and several cross members carries every load, and the body is bolted on through rubber mounts as a shelter; trucks, buses and rugged off-roaders still favour it because it is strong, repairable and tolerant of abuse. In the integral or monocoque construction the pressed-steel body shell itself is the structure - floor pan, sills, pillars and roof form a stressed box that carries all loads, saving weight and giving designers a controlled crash-energy path; virtually all modern cars are built this way. Between them sits the semi-integral chassis, where a stub frame carrying the engine and front suspension is welded into a partly stressed body.",
              "Vehicles are also classified in ways the examiner expects you to list. By load capacity: heavy vehicles above roughly 3.5 tonnes, then medium and light. By fuel: petrol, diesel, gas and electric. By drive: front-wheel, rear-wheel and all-wheel drive. By wheels and use: two-wheelers, three-wheelers, passenger cars, buses and goods trucks. Body styles range from sedan, hatchback, estate, coupe and convertible to multi-purpose vehicles and SUVs, while commercial bodies run from pick-ups to bus coaches. Whatever the class, the chassis engineer trades strength against weight and stiffness against cost, while leaving room for the passengers the machine exists to serve.",
            ],
            bullets: [
              "Chassis = the complete vehicle without the body: engine, gearbox, axles, wheels, steering, brakes, suspension and electricals.",
              "Body-on-frame: a ladder frame carries all loads; the body is dead weight - chosen for trucks, buses and off-roaders needing strength and easy repair.",
              "Monocoque: the body shell (floor pan, sills, pillars, roof) is the load-carrying structure - lighter per unit stiffness and gives designed crumple paths; standard for cars.",
              "Semi-integral: a stub frame for engine and front suspension is bonded to a partly stressed body - cheaper isolation of road noise.",
              "Other classifications: by load (heavy/medium/light), by fuel (petrol, diesel, gas, electric), by drive (FWD/RWD/AWD) and by wheels (two/three/four).",
            ],
            table: {
              caption: "Chassis architectures compared.",
              headers: ["Type", "Loads carried by", "Typical use", "Chief advantage"],
              rows: [
                ["Body-on-frame (ladder)", "Side members + cross members", "Trucks, buses, off-road SUVs", "Rugged; body repairs are easy"],
                ["Monocoque (integral)", "Stressed body shell", "Cars, crossovers", "Light with a designed crash path"],
                ["Semi-integral", "Body + bolted subframes", "Mid-size cars", "Isolates powertrain noise"],
                ["Backbone / tubular", "Central tube or welded tubes", "Sports and rally cars", "High stiffness for low mass"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A new mass-market hatchback: which chassis?",
              caption:
                "The architecture decision every programme takes first - it fixes weight, cost and crash behaviour for the whole project.",
              start: "New passenger-car programme - choose the chassis architecture.",
              branches: [
                { label: "Monocoque (integral)", outcome: "light, stiff, crumple zones absorb impact - cheapest at volume", good: true },
                { label: "Body-on-frame", outcome: "strong but heavy; fuel economy and handling both suffer", good: false },
                { label: "Tubular space frame", outcome: "superb stiffness but low-volume hand assembly at high cost", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Define, classify, sketch",
              body: "A 7-mark chassis question wants the definition (vehicle without body), a classification with examples, and one labelled sketch each of body-on-frame and monocoque. Write the two load paths explicitly: through side members in the first case, through the floor pan and sills in the second.",
            },
            keyTerms: [
              { term: "Chassis", definition: "The complete vehicle minus the body: it carries the powertrain, running gear, controls and all operating loads." },
              { term: "Monocoque", definition: "Single-shell construction in which the body panels themselves form the load-carrying structure." },
              { term: "Ladder frame", definition: "Two parallel side members joined by cross members forming the load-carrying skeleton of a body-on-frame vehicle." },
            ],
            examQuestions: [
              {
                q: "What is a chassis? Classify automobile chassis on the basis of load-carrying structure and compare body-on-frame with monocoque construction, giving sketches, merits and applications of each.",
                marks: 7,
                outline: [
                  "Define the chassis as the vehicle without body and list what it carries.",
                  "State the loads it must resist: static, engine and braking torque reactions, torsion from uneven roads.",
                  "Sketch body-on-frame: side members, cross members, rubber body mounts; give merits (strength, repairability) and uses (trucks, buses).",
                  "Sketch monocoque: stressed floor pan, sills, pillars; give merits (weight, crash energy path) and uses (passenger cars).",
                  "Describe semi-integral construction as the middle path with subframes.",
                  "Add the other classifications: by load, fuel, drive and wheel count, with one example each.",
                  "Conclude with the trade-off: strength and repairability against weight and crash performance.",
                ],
              },
              {
                q: "List the main components mounted on a vehicle chassis.",
                marks: 2,
              },
              {
                q: "Name the forces acting on an automobile chassis in service.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Frames and frameless construction",
            body: [
              "In a body-on-frame vehicle the frame is the backbone: two side members running the length of the vehicle joined by five or more cross members, giving the classic ladder silhouette. The side members carry bending from the payload, so their section is deepest between the axles where the bending moment peaks and shallower over the axles. Cross members keep the two rails square and resist racking; a diagonal X-member multiplies torsional stiffness several-fold. Gussets at the joints prevent local bending failures, and the whole frame is designed to deflect elastically without cracking over the vehicle life.",
              "Section shape decides stiffness per kilogram. An open channel section is cheap to press and good in bending but poor in torsion; a box or tubular section is far stiffer in torsion for the same mass and suits X-members and competition cars; an I-section gives the best bending stiffness and appears in heavy trucks. The frame in service meets static weight, driving and braking torque reactions through its mounts, centrifugal forces in cornering, impact loads, and torsion whenever one wheel rises alone - the most punishing case for an open section. Design keeps stress below yield with a margin, while limiting deflection so the body never squeaks.",
              "Frameless or monocoque construction abandons the separate frame: the pressed floor pan, sills, pillars, roof and bulkheads are welded into a single stressed box that carries everything, saving perhaps a third of the mass. Sub-frames still isolate the engine-gearbox assembly and the rear suspension on rubber bushes, which protects the cabin from vibration. Front and rear crumple zones are deliberately weakened to collapse and absorb crash energy, while a safety cage of high-strength steel surrounds the occupants - the reason cars abandoned separate frames. Wound into the exam answer: name the sections, sketch the ladder with X-member, and give the frameless advantages.",
            ],
            bullets: [
              "Side members carry bending - deepest between axles where bending moment is highest; cross members resist racking and hold the frame square.",
              "X-member (diagonal cross member) multiplies torsional stiffness; gussets reinforce the joints against local failure.",
              "Channel section: cheap, good in bending, weak in torsion; box/tubular: best torsion for mass; I-section: best bending, used in trucks.",
              "Frame loads: static payload, engine and brake torque reactions, cornering centrifugal force, impact, and one-wheel-bump torsion.",
              "Frameless body: floor pan, sills and pillars form the stressed structure; subframes on bushes carry engine and rear suspension; crumple zones plus a safety cage handle crashes.",
            ],
            table: {
              caption: "Frame section shapes and their behaviour.",
              headers: ["Section", "Bending", "Torsion", "Where used"],
              rows: [
                ["Open channel", "Good", "Poor", "Standard side members, cheap to press"],
                ["Box / tubular", "Good", "Best", "X-members, rally and race frames"],
                ["I-section", "Best", "Poor", "Heavy truck chassis rails"],
                ["Hat (top-hat)", "Good", "Moderate", "Cross members closed with a flat plate"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a pothole load reaches the cabin",
              caption:
                "The load path through a ladder frame - each arrow is a mark in a suspension-chassis answer.",
              steps: [
                { label: "Tyre strikes the pothole", note: "impact several times static weight" },
                { label: "Spring compresses, damper controls rebound" },
                { label: "Force enters the axle and its mounts" },
                { label: "Cross members share it between the two rails" },
                { label: "Side members bend elastically between axles" },
                { label: "Rubber body mounts filter the cabin", note: "vibration dies here" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch discipline",
              body: "Draw the ladder frame in plan: two rails, at least five cross members, one X-member, axles shown as heavy lines. Mark the deepest part of the rail between the axles. Examiners look for the X-member and the deep mid-section - both are one-line marks.",
            },
            keyTerms: [
              { term: "Side member", definition: "The longitudinal rail of a frame that carries bending loads from payload and powertrain." },
              { term: "Cross member", definition: "A transverse member joining the side members, resisting racking and distributing loads." },
              { term: "Subframe", definition: "A small auxiliary frame carrying engine or suspension, mounted to the body through rubber bushes." },
            ],
            examQuestions: [
              {
                q: "With a neat sketch explain the construction of a conventional ladder frame. Discuss the loads on it, the section shapes used, and the function of cross members and the X-member.",
                marks: 7,
                outline: [
                  "Sketch the ladder frame in plan: two side members, five-plus cross members, one X-member, axles.",
                  "Show side members deepest between axles - bending moment is maximum there.",
                  "List loads: static, engine torque reaction, braking torque, cornering force, impact, one-wheel torsion.",
                  "Compare channel, box/tubular and I-sections for bending and torsion.",
                  "Explain the cross member's role against racking and the X-member's torsional advantage.",
                  "Mention gussets, pressed steel material and deflection limits.",
                  "Close with a note on why frames suit trucks while cars moved to monocoque.",
                ],
              },
              {
                q: "State the functions of cross members in a vehicle frame.",
                marks: 2,
              },
              {
                q: "Explain three advantages of frameless (monocoque) construction over a separate frame.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Vehicle layouts: engine position and driven axle",
            body: [
              "A vehicle layout fixes where the engine sits and which wheels it drives, and through that choice it fixes weight distribution, cabin packaging, driveline cost and handling character. Front engine, front-wheel drive (FF) dominates modern passenger cars: engine, clutch, gearbox and differential are combined into one transaxle across the front, there is no propeller shaft so the floor can be flat, the bonnet can be short, and the engine mass over the driven wheels gives good traction on wet roads. Its penalties are torque steer under hard acceleration and front tyres that must steer, drive and absorb braking wear together.",
              "Front engine, rear-wheel drive (FR) runs the engine lengthwise into a gearbox, then a propeller shaft with universal joints back to a separate final drive. Weight spreads nearer the ideal 50:50, steering is uncorrupted by drive torque, and the layout tows well - which is why it survives in luxury, sporty and commercial vehicles at the cost of a transmission tunnel through the cabin. Rear-engine rear-drive (RR), immortalised by the Volkswagen Beetle, gives fantastic traction and a tiny driveline but demands skill and modern stability control to tame its pendulum effect. Mid-engine cars centralise mass for agility; all-wheel drive adds a transfer case and extra differentials for traction at a price in weight and losses.",
              "The layout also sets the polar moment of inertia - the resistance to yaw - because mass far from the centre makes a car feel lazy yet stable, while centralised mass makes it darting. Packaging follows: transverse engines leave room for passengers, lengthwise ones for crash structures. Driveshaft tunnels, rear-seat space, fuel tank position, spare wheel well and boot volume all trace back to the layout decision made on day one of the programme. In the exam, a small table of layouts with merits and demerits, plus one sketch of each driveline, is the expected shape of the answer.",
            ],
            bullets: [
              "FF: transaxle under the bonnet, no propeller shaft, flat floor, good wet traction; suffers torque steer and front tyre wear.",
              "FR: lengthwise engine, propeller shaft, separate differential; balanced weight and clean steering at the cost of the cabin tunnel.",
              "RR / mid-engine: short driveline and high traction (RR) or lowest polar moment (mid) - packaging and cooling are the price.",
              "4WD/AWD: transfer case splits torque front and rear - maximum traction, extra mass and driveline losses.",
              "Layout drives everything downstream: polar moment of inertia, weight distribution, floor shape, boot volume and fuel tank position.",
            ],
            table: {
              caption: "The classical layouts at a glance.",
              headers: ["Layout", "Engine / drive", "Chief merit", "Chief demerit"],
              rows: [
                ["FF", "Front / front", "Cheap, compact, flat floor", "Torque steer, front tyre load"],
                ["FR", "Front / rear", "Balance, sporty, tows well", "Tunnel, costlier driveline"],
                ["RR", "Rear / rear", "Traction, tiny driveline", "Cooling, pendulum oversteer"],
                ["MR", "Mid / rear", "Low inertia, agile", "Cabin heat, poor access"],
                ["AWD", "Any / all", "Traction in all weathers", "Weight, losses, cost"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Engine position against driven axle",
              caption:
                "Every production car falls in one of these quadrants - the empty one explains why.",
              axes: {
                x: "Driven axle: front (left) to rear (right)",
                y: "Engine: front (top) to mid/rear (bottom)",
              },
              quadrants: [
                { label: "FF - front engine, front drive", note: "transaxle and no prop shaft; hatchbacks and sedans" },
                { label: "FR - front engine, rear drive", note: "balanced and sporty; needs the tunnel" },
                { label: "Rear engine driving the front", note: "packaging nightmare; experimental only" },
                { label: "MR / RR - mid or rear engine, rear drive", note: "low inertia supercars and the classic city Beetle" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not declare FR dead",
              body: "Students love to write that front-wheel drive has replaced rear-wheel drive everywhere. It has not: FR still rules trucks, buses, premium and performance cars because of balance and towing. Mark each layout with its surviving application and you cannot be trapped.",
            },
            keyTerms: [
              { term: "Transaxle", definition: "A combined gearbox and final-drive unit, typical of front-wheel-drive cars." },
              { term: "Propeller shaft", definition: "The shaft carrying drive from the gearbox to the rear final drive through universal joints." },
              { term: "Transfer case", definition: "The gearbox that splits engine torque between front and rear axles in a 4WD vehicle." },
            ],
            examQuestions: [
              {
                q: "Explain the various vehicle layouts with respect to engine location and driven axle. Give a labelled driveline sketch of FF and FR and state the merits and demerits of each layout.",
                marks: 7,
                outline: [
                  "Define layout as engine position plus driven axle; it fixes weight distribution and packaging.",
                  "Sketch FF: transverse engine, transaxle, driveshafts to front wheels; list merits (space, cost, traction) and demerits (torque steer, tyre wear).",
                  "Sketch FR: lengthwise engine, gearbox, propeller shaft with UJs, final drive; merits (balance, towing) and demerits (tunnel, cost).",
                  "Cover RR (Beetle) and mid-engine layouts with one application each.",
                  "Explain 4WD: transfer case, extra differentials, traction at the cost of weight.",
                  "Discuss polar moment of inertia and its handling consequence.",
                  "Summarise why FF dominates mass-market cars today.",
                ],
              },
              {
                q: "What is a transaxle and where is it used?",
                marks: 2,
              },
              {
                q: "Why does a front-wheel-drive car offer better traction on wet roads than a comparable rear-drive car?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Automotive aerodynamics: drag, lift and control",
            body: [
              "At city speeds the air is almost a bystander; at highway speed it is the dominant resistance. Aerodynamic drag force is D = 0.5 rho Cd A v^2, where rho is air density, Cd the drag coefficient, A the frontal area and v the speed - so drag grows with the square of speed, and the power to overcome it grows with the cube: doubling speed demands roughly eight times the aerodynamic power. A bluff truck runs Cd near 0.6-0.8, a modern sedan near 0.25-0.32, while a true teardrop would manage about 0.04. Every 10% shaved off Cd returns a visible fuel saving at 90 km/h and above.",
              "Drag is mostly pressure drag: the nose creates a high-pressure stagnation point, flow separates somewhere along the rear, and the low-pressure wake behind drags the car backwards. Skin friction matters far less on a car than on an aircraft. Around this core sit interference drag from mirrors, mudguards and gutters; internal drag from radiator and underbody airflow; and lift - the same low pressure over a curved roof that flies an aeroplane wing partially unloads the tyres, so designers add front air dams, splitters, spoilers and underbody diffusers to keep the wheels pressed to the road. Crosswinds add yawing moments that test high-sided vehicles.",
              "Drag reduction is a checklist the examiner rewards: round the nose and integrate the grille, rake the windscreen with flush glass, taper the roofline into a fastback or a Kamm tail with a sharp separation edge, cover and fair the wheels, smooth the underbody with trays and a rear diffuser, put mirrors on stalks and kill the gutters. Testing uses the wind tunnel with smoke wands and pressure taps, plus road coast-down tests that separate rolling from aerodynamic losses by fitting the deceleration curve. Sketch the pressure zones - stagnation at the nose, suction over the crown, wake at the base - and label the devices that manage them.",
            ],
            bullets: [
              "Drag: D = 0.5 rho Cd A v^2 - force rises with speed squared, power with speed cubed.",
              "Pressure (form) drag dominates through the wake; add interference drag (mirrors, arches) and internal drag (radiator, underbody flow).",
              "Lift unloads tyres: air dams, splitters, spoilers and diffusers trade a little drag for grip.",
              "Reduction checklist: rounded nose, raked flush-glass screen, Kamm tail, wheel covers, smooth underbody, stalk mirrors.",
              "Typical Cd: truck 0.6-0.8, modern sedan 0.25-0.32, teardrop ideal about 0.04; test by wind tunnel or coast-down fitting.",
            ],
            table: {
              caption: "Aerodynamic devices and what they do.",
              headers: ["Device", "Effect on drag", "Effect on lift / stability"],
              rows: [
                ["Front air dam", "Small reduction", "Cuts underbody flow, reduces front lift"],
                ["Rear spoiler", "Small rise or neutral", "Delays separation, adds rear downforce"],
                ["Rear wing", "Increase", "Large downforce for track use"],
                ["Underbody tray + diffuser", "Reduction", "Suction holds the car down"],
                ["Flush glass, stalk mirrors", "Reduction", "Also cuts wind noise"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "A boxy body against a slippery one",
              caption:
                "The same cabin, two drag bills - separation point and wake size tell the story.",
              left: {
                heading: "High-drag body (Cd about 0.55)",
                items: [
                  "Flat vertical grille - early separation",
                  "Square roof drops the flow abruptly - large wake",
                  "Protruding mirrors and mudguards - interference drag",
                  "Open, messy underbody - turbulent drag and lift",
                  "External gutters, door handles, aerials",
                ],
              },
              right: {
                heading: "Slippery body (Cd about 0.28)",
                items: [
                  "Rounded nose with a small stagnation zone",
                  "Raked windscreen, flush glass, A-pillar fairings",
                  "Fastback roof ending in a sharp Kamm edge",
                  "Smooth underbody with trays and a rear diffuser",
                  "Stalk mirrors, covered wheels, hidden door handles",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the formula and the cube law",
              body: "Always write D = 0.5 rho Cd A v^2 with each symbol named, then the two consequences: drag with v squared, power with v cubed. Add one worked line - a 10% Cd cut at 100 km/h saves roughly 5% fuel - and the theory marks are banked before the sketch.",
            },
            keyTerms: [
              { term: "Drag coefficient (Cd)", definition: "A dimensionless measure of how smoothly a body slips through air, independent of its size." },
              { term: "Wake", definition: "The low-pressure turbulent region behind a moving body, the main source of pressure drag." },
              { term: "Air dam", definition: "A lip below the front bumper that blocks air from the underbody, cutting lift and some drag." },
            ],
            examQuestions: [
              {
                q: "Define aerodynamic drag. Derive its expression for a road vehicle, explain the factors affecting it, and describe the methods used to reduce drag on a modern car.",
                marks: 7,
                outline: [
                  "Write D = 0.5 rho Cd A v^2 and define every symbol.",
                  "Explain the physics: stagnation at the nose, separation, low-pressure wake - pressure drag dominates.",
                  "Note secondary sources: interference drag from mirrors and arches, internal cooling and underbody drag.",
                  "Give typical Cd values for a truck, a sedan and a teardrop.",
                  "State the v-squared force and v-cubed power laws with a fuel-economy consequence.",
                  "List reduction measures: rounded nose, raked screen, Kamm tail, wheel and underbody treatment, stalk mirrors.",
                  "Mention lift control (air dam, spoiler, diffuser) and testing by tunnel or coast-down.",
                ],
              },
              {
                q: "Why does the power needed to overcome aerodynamic drag rise with the cube of speed?",
                marks: 2,
              },
              {
                q: "Distinguish between a spoiler and a wing, and state the effect of each on lift and drag.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Tyres, road resistances and vehicle performance",
            body: [
              "The tyre is the only component that touches the road, and it decides most of what the vehicle can do. Modern construction is radial: casing plies run at 90 degrees to the circumference with steel belts under the tread, giving a compliant sidewall, a stable footprint, low rolling resistance and long life - against the older bias or cross-ply tyre whose criss-crossed plies make a stiff, cheap carcass that squirms at speed. Tubeless tyres hold air against the rim; the size code 195/65 R15 means 195 mm section width, sidewall 65% of that, radial, 15-inch rim. Grip, comfort, noise and wear are all set by this one component.",
              "Tyre dynamics centres on the slip angle: the angle between the tyre's heading and its actual direction of travel. Cornering force grows almost linearly with slip angle, peaks near 6-10 degrees, then falls as the contact patch breaks away. Camber tilts add camber thrust, and the friction or traction circle says braking, cornering and driving all draw on one grip budget - brake hard while cornering and lateral grip collapses. Rolling resistance, roughly Cr m g with Cr near 0.010-0.015 for radial car tyres, rises with under-inflation, speed and load, and feeds directly into fuel economy.",
              "Performance is a force balance. Tractive effort at the driven wheels must first pay rolling resistance, aerodynamic drag 0.5 rho Cd A v^2 and gradient resistance m g sin(theta); whatever remains accelerates the mass. Top speed is the point where available tractive force (or power) exactly equals total resistance, and gradeability is the steepest slope the surplus can climb at a stated speed. A typical numerical gives masses, Cd, A and power, then asks for acceleration at 60 km/h or the maximum gradient: write the balance equation, substitute, and box the answer with units - that is the whole mark scheme.",
            ],
            bullets: [
              "Radial tyre: plies at 90 degrees plus steel belts - compliant sidewall, stable footprint, low rolling resistance; bias-ply is stiff and cheap but squirms.",
              "Slip angle: angle between tyre heading and path; cornering force rises to a peak near 6-10 degrees then falls away.",
              "Traction circle: braking, cornering and drive share one grip budget - spend it on one and the others starve.",
              "Resistances: rolling Cr m g, aero 0.5 rho Cd A v^2, gradient m g sin(theta); surplus force equals m x a.",
              "Top speed: tractive force equals total resistance; gradeability is the maximum slope climbable at a given speed.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Road-load balance and top-speed estimate for a 1200 kg car with 66 kW at the wheels.",
              code: `# Road-load balance and top speed for a 1200 kg car
m, g = 1200.0, 9.81          # mass (kg), gravity
Cr = 0.013                    # rolling resistance coefficient
Cd, A, rho = 0.30, 2.2, 1.2   # drag coeff, frontal area m^2, air density
P_wheel = 66.0                # power available at the wheels, kW

def rolling(v):               # roughly constant with speed
    return Cr * m * g

def aero(v):                  # grows with speed squared
    return 0.5 * rho * Cd * A * v ** 2

v = 1.0
while P_wheel * 1000 > (rolling(v) + aero(v)) * v:
    v += 0.1
print(f"top speed ~ {v:.1f} m/s = {v * 3.6:.0f} km/h")

for kmh in (40, 60, 90, 120):
    v = kmh / 3.6
    print(f"{kmh:3d} km/h: aero {aero(v):4.0f} N, rolling {rolling(v):4.0f} N")`,
            },
            diagram: {
              kind: "flow",
              title: "The performance balance sheet",
              caption:
                "Tractive effort minus the three resistances is acceleration - the last box is top speed.",
              steps: [
                { label: "Tractive force at wheels", note: "engine torque x gear ratio / wheel radius" },
                { label: "Pay rolling resistance", note: "Cr m g, near constant" },
                { label: "Pay aerodynamic drag", note: "0.5 rho Cd A v^2" },
                { label: "Pay gradient resistance", note: "m g sin(theta)" },
                { label: "Surplus force = m a", note: "this is acceleration" },
                { label: "Surplus zero: top speed", note: "the power balance point" },
              ],
            },
            callout: {
              type: "tip",
              title: "Numerical template",
              body: "Write the balance F_surplus = F_tractive - (F_roll + F_aero + F_grade) before touching numbers, and convert km/h to m/s first - most lost marks in RGPV performance numericals are unit errors, not physics errors.",
            },
            keyTerms: [
              { term: "Slip angle", definition: "The angle between a tyre's heading and its actual direction of travel; it generates cornering force." },
              { term: "Radial ply tyre", definition: "A tyre whose casing plies run radially at 90 degrees to the circumference beneath steel belts." },
              { term: "Gradeability", definition: "The steepest gradient a vehicle can climb at a specified speed in a given gear." },
            ],
            examQuestions: [
              {
                q: "List the resistances opposing vehicle motion. Derive the tractive force equation for acceleration and top speed on a level road and on a gradient, and explain slip angle and the traction circle.",
                marks: 7,
                outline: [
                  "List rolling, aerodynamic and gradient resistences with their formulae.",
                  "Rolling resistance = Cr m g with typical Cr values for radial tyres.",
                  "Aerodynamic drag = 0.5 rho Cd A v^2; gradient = m g sin(theta).",
                  "Write F_surplus = F_tractive - sum of resistances = m a.",
                  "Top speed on level road: surplus is zero; solve or iterate the power balance.",
                  "Gradeability: maximum theta from the surplus at given speed.",
                  "Define slip angle, its force curve and the traction circle's combined braking-cornering budget.",
                ],
              },
              {
                q: "State two merits of a radial ply tyre over a bias ply tyre.",
                marks: 2,
              },
              {
                q: "Define slip angle and explain how cornering force varies with it.",
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
      title: "Engine and Powertrain",
      summary:
        "Fuel delivery and torque management: multi-point fuel injection with closed-loop lambda control, common rail diesel injection with multiple events, the friction clutch, synchromesh, automatic and CVT gearboxes, propeller shafts, hypoid final drive and the differential.",
      chapter: {
        number: "02",
        title: "Fuel Injection and Transmission Systems",
        intro:
          "Unit II starts where the fuel meets the air - MPFI petrol and CRDI diesel systems controlled by sensors and maps - then follows the torque through the clutch, the gearbox in its synchromesh, automatic and CVT forms, and the propeller shaft to the differential that lets two wheels corner at different speeds.",
        inOneBreath:
          "MPFI fires one injector per cylinder under ECU control against a 14.7:1 stoichiometric target, closed-loop trimmed by the lambda sensor; CRDI stores fuel at up to about 2000 bar in a rail so piezo injectors can deliver pilot, main and post shots; the clutch couples engine to gearbox by clamping a friction disc with a diaphragm spring; the gearbox trades speed for torque through synchronised helical pairs, planetary sets or variable pulleys; and the bevel-gear differential splits torque 50:50 while letting the outer wheel outrun the inner on a bend.",
        sections: [
          {
            number: "2.1",
            title: "Multi-point fuel injection (MPFI)",
            body: [
              "The carburettor meters fuel with fixed jets whose calibration drifts with weather, altitude and wear; it cannot hold the precise mixture a catalytic converter demands. Multi-point fuel injection solves this: one electromagnetic injector per cylinder sprays fuel onto the back of each intake valve, and an electronic control unit computes how long each injector stays open - the pulse width - from live sensor data. The result is metering accurate to a millisecond, even cylinder-to-cylinder fuelling, clean cold starts with mapped enrichment, and the ability to hold lambda - the actual air-fuel ratio divided by the stoichiometric 14.7:1 - almost exactly at 1.0 where the three-way catalyst works.",
              "The sensor suite reads the engine like a physician. A hot-wire mass airflow sensor (or the MAP-and-rpm speed-density method) measures air mass; the throttle position sensor reports demand; coolant and intake-air temperature sensors correct density; the crankshaft and camshaft sensors time the injections and the spark; and the oxygen sensor in the exhaust closes the loop. Actuators are the injector solenoids, the idle air control valve and the electric fuel pump holding about 3-4 bar in the rail. Open-loop running - cold start and full-load enrichment - ignores the lambda sensor; closed-loop cruise reads it many times a second.",
              "Control logic layers corrections on a base map. The ECU looks up base fuel for the measured air mass, then multiplies by warm-up, acceleration enrichment, deceleration fuel cut and battery-voltage compensation (a weak battery opens injectors slower, so they need longer commands). Sequential injection times each spray to its own cylinder's intake stroke; grouped or batch injection is cheaper but cruder. Adaptive learning stores long-term trims so the system corrects for ageing injectors and a clogged air filter. In the exam, draw the loop: sensors, ECU, injector, combustion, lambda sensor, trim.",
            ],
            bullets: [
              "MPFI places one solenoid injector per cylinder at the intake port, fired by the ECU with millisecond pulse widths.",
              "Target mixture is stoichiometric 14.7:1 (lambda = 1) - the window in which the three-way catalyst converts all three pollutants.",
              "Sensor suite: MAF (or MAP + rpm), throttle position, coolant and air temperature, crank and cam position, exhaust lambda sensor.",
              "Open loop at cold start and full load; closed loop at cruise, where the lambda sensor trims each pulse many times per second.",
              "Pulse width = base fuel from air mass x corrections (warm-up, accel, voltage); adaptive memory stores long-term trim.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Injector pulse width from measured air mass - the heart of speed-density fuelling.",
              code: `# Injector pulse width from measured air mass
inj_flow = 380.0        # cc/min at the rail pressure
afr = 14.7              # target air-fuel ratio (stoichiometric)
fuel_density = 0.74     # g/cc for petrol

cc_per_ms = inj_flow / 60.0 / 1000.0   # cc delivered per millisecond

def pulse_ms(air_g, trim=1.0):
    fuel_g = air_g / afr                # fuel mass the mix needs
    cc = fuel_g / fuel_density          # convert mass to volume
    return cc / cc_per_ms * trim        # command the injector

for air in (0.3, 0.6, 1.2):            # air per cylinder per stroke, g
    print(f"air {air:.1f} g -> {pulse_ms(air):.2f} ms")`,
            },
            diagram: {
              kind: "cycle",
              title: "Closed-loop fuel control",
              caption:
                "The lambda loop that keeps a petrol engine at 14.7:1 - the diagram to draw whenever MPFI is asked.",
              steps: [
                { label: "Measure air mass", note: "MAF hot-wire or MAP speed-density" },
                { label: "ECU computes pulse width", note: "target lambda = 1" },
                { label: "Injector fires into the port", note: "a few milliseconds of solenoid lift" },
                { label: "Cylinder burns the mixture" },
                { label: "Lambda sensor reads exhaust oxygen", note: "rich or lean, within milliseconds" },
                { label: "Trim adjusts the next pulse", note: "loop repeats many times a second" },
              ],
            },
            callout: {
              type: "exam",
              title: "The chain earns the marks",
              body: "Write MPFI answers as a chain: sensors to ECU to actuators, then close the loop through the lambda sensor. Name the two loops (open at start and full load, closed at cruise) and quote 14.7:1 - that single number is worth a mark every year.",
            },
            keyTerms: [
              { term: "Stoichiometric ratio", definition: "The air-fuel ratio (14.7:1 for petrol) at which complete combustion just uses all the oxygen." },
              { term: "Lambda sensor", definition: "An exhaust oxygen sensor whose signal tells the ECU whether the mixture is rich or lean." },
              { term: "Speed-density method", definition: "Computing air mass from manifold pressure, rpm and air temperature instead of a MAF sensor." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a multi-point fuel injection system with a block diagram of its sensors, ECU and actuators. Distinguish open-loop from closed-loop operation and state the advantages over a carburettor.",
                marks: 7,
                outline: [
                  "Draw the block diagram: sensors -> ECU -> injectors, with the lambda sensor returning to the ECU.",
                  "List sensors: MAF or MAP, throttle position, coolant and air temperature, crank and cam position, lambda sensor.",
                  "Explain port injection: one injector per cylinder at the valve, 3-4 bar rail, millisecond pulses.",
                  "Describe the pulse width calculation: base fuel from air mass multiplied by corrections.",
                  "Closed loop at cruise keeps lambda = 1 for the catalyst; open loop at cold start and full load.",
                  "Advantages: precise metering, even cylinder fuelling, clean cold start, better economy and lower emissions.",
                  "Mention sequential versus batch injection and adaptive trims.",
                ],
              },
              {
                q: "What is the function of the lambda (oxygen) sensor in a petrol engine?",
                marks: 2,
              },
              {
                q: "Differentiate between open-loop and closed-loop fuel control.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Common rail diesel injection (CRDI)",
            body: [
              "A diesel engine ignites by compression, so combustion quality is decided by how finely the fuel is atomised - and atomisation needs pressure. Older systems let pump speed dictate injection pressure, so a lazy engine at low rpm injected coarsely. Common rail diesel injection decouples the two: a high-pressure pump, driven by the engine, charges an accumulator rail to as much as about 2000 bar, and a rail pressure sensor with a metering valve holds that pressure steady regardless of speed. Each injector - a solenoid or a faster piezo stack - then opens on ECU command, spraying through micro-holes as fine atomisation at every rpm.",
              "The rail's steady pressure unlocks multiple injection events per combustion. A tiny pilot shot a few crank degrees before the main injection warms the chamber and shortens ignition delay, cutting the classic diesel knock. The main event, timed near top dead centre, delivers the torque; one or more post injections late in the cycle burn soot precursors, control exhaust temperature for regeneration of the particulate filter, and can shape the heat-release rate. The ECU reads a three-dimensional map of rpm and load to choose rail pressure, timing, number of shots and duration - fuelling is now software.",
              "The payoffs are why every modern diesel is common rail: torque rises with refinement, particulate and NOx emissions fall because mixing is controlled, cold-start clatter fades, and fuel economy improves - the package that makes BS-VI diesel feasible. Piezo injectors switch in well under a millisecond, permitting five or more shots per cycle. Service weaknesses are injector coking, drifting rail-pressure sensors and the precision of the very fine clearances, which is why fuel filtration and clean tank work matter. Draw the hydraulic path tank to tip and quote the pressures.",
            ],
            bullets: [
              "The rail is an accumulator: a high-pressure pump charges it to as much as about 2000 bar, decoupling injection pressure from engine speed.",
              "Injectors are ECU-triggered solenoids or faster piezo stacks switching in under a millisecond.",
              "Pilot injection shortens ignition delay and kills diesel knock; main injection makes torque; post injection manages soot and filter regeneration.",
              "The ECU works from maps of rpm x load selecting rail pressure, timing, number of shots and duration.",
              "Benefits: higher torque with refinement, lower PM and NOx, better economy - the enabler of BS-VI diesel.",
            ],
            table: {
              caption: "Injection events in one CRDI combustion cycle.",
              headers: ["Event", "Timing", "Purpose"],
              rows: [
                ["Pilot", "A few degrees before main", "Warm the chamber, shorten ignition delay, cut noise"],
                ["Main", "Around top dead centre", "Deliver the torque-setting fuel quantity"],
                ["Post", "Just after main", "Burn soot precursors, shape heat release"],
                ["Late post", "Expansion / exhaust stroke", "Raise exhaust temperature for DPF regeneration"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Diesel fuel path in a CRDI system",
              caption:
                "From tank to tip: low-pressure feed, filter, high-pressure pump, the rail, the injector.",
              stages: [
                { label: "Tank + lift pump", note: "low-pressure feed" },
                { label: "Filter and water separator" },
                { label: "High-pressure pump", note: "up to about 2000 bar" },
                { label: "Common rail", note: "accumulator smooths the pulses" },
                { label: "Electronic injectors", note: "pilot, main, post shots" },
                { label: "Combustion chamber", note: "atomisation through micro-holes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the accumulator",
              body: "The exam phrase is 'common rail acts as an accumulator'. Say it, sketch the rail feeding all injectors, and quote the pressure class (1600-2000 bar in production). Distinguish CRDI from unit-injector systems where each injector builds its own pressure - a favourite one-mark distinction.",
            },
            keyTerms: [
              { term: "Common rail", definition: "A pressurised accumulator feeding all injectors, decoupling injection pressure from engine speed." },
              { term: "Pilot injection", definition: "A small fuel shot before the main injection that shortens ignition delay and reduces noise." },
              { term: "Piezo injector", definition: "An injector actuated by a piezoelectric stack, switching fast enough for several shots per cycle." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a common rail diesel injection system with a neat sketch. Describe pilot, main and post injections and state the advantages over conventional pump-line-nozzle systems.",
                marks: 7,
                outline: [
                  "Sketch: tank, lift pump, filter, high-pressure pump, rail with pressure sensor and relief valve, injectors.",
                  "Explain the rail as an accumulator holding up to about 2000 bar independent of engine speed.",
                  "Describe ECU control from rpm x load maps: pressure, timing, shots and duration.",
                  "Pilot injection: shortens ignition delay, cuts knock.",
                  "Main injection: sets torque near TDC; post injection: soot control and DPF regeneration heat.",
                  "Advantages: refinement, torque, lower PM and NOx, economy - enables BS-VI diesel.",
                  "Contrast with pump-line-nozzle systems whose pressure follows cam speed.",
                ],
              },
              {
                q: "Why is the common rail called an accumulator?",
                marks: 2,
              },
              {
                q: "What is pilot injection and what are its benefits?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "The clutch: single-plate, multi-plate and centrifugal",
            body: [
              "The clutch is the torque gate between engine and gearbox. It must engage gradually so the car creeps instead of lurching, transmit the engine's maximum torque with margin, dissipate the heat of engagement, and damp torsional vibration from the engine's power pulses. The single-plate dry clutch does all this with a friction disc splined to the gearbox input shaft, sandwiched between the flywheel face and a pressure plate. The disc carries friction linings, cushion springs to soften take-up, and torsional damper springs in its hub that absorb firing-frequency vibration before it reaches the gear teeth.",
              "Clamping comes from a diaphragm spring - a dished ring of radial fingers - seated in the clutch cover and pressing the pressure plate against the disc. Depressing the pedal moves the release bearing against the finger tips; the spring pivots on its wire rings, its centre pulls back, and the pressure plate lifts, cutting the torque path. Release the pedal and the spring clamps again. Torque capacity follows friction theory: T = mu n W Rm, with mu the lining coefficient, n the number of friction faces (two for a single plate), W the axial clamp load and Rm the mean lining radius. The diaphragm's virtue is nearly constant clamp load as the lining wears, plus a pedal that gets lighter, not heavier.",
              "Variants serve different duties. Multi-plate clutches - several interleaved discs and plates, usually running wet in oil - pack far more friction area into a small radius, suiting motorcycles, heavy vehicles and racing; oil carries away engagement heat. The centrifugal clutch engages shoes automatically by speed, as on automatic scooters. Faults are classic exam shorts: slip from worn linings, oil or weak springs; drag from insufficient free play or a warped disc; judder from contaminated or glazed linings. Free play - the few millimetres of pedal travel before the bearing touches the fingers - is the routine adjustment.",
            ],
            bullets: [
              "Clutch duties: gradual engagement, torque capacity with margin, heat dissipation, torsional vibration damping.",
              "Single-plate dry clutch: friction disc with damper springs, pressure plate, diaphragm spring, release bearing and fork, cover on the flywheel.",
              "Torque capacity: T = mu n W Rm - lining friction coefficient, number of faces, clamp load, mean radius.",
              "Diaphragm spring gives near-constant clamp load as the disc wears and a lighter pedal than coil springs.",
              "Multi-plate wet clutches add friction area in a small radius (bikes, heavy duty); centrifugal clutches engage by rpm on scooters.",
            ],
            table: {
              caption: "Clutch types and their applications.",
              headers: ["Type", "Construction", "Where used"],
              rows: [
                ["Single-plate dry", "One disc, diaphragm spring", "Passenger cars, light trucks"],
                ["Multi-plate wet", "Stack of discs in oil", "Motorcycles, heavy vehicles, racing"],
                ["Centrifugal", "Shoes fly out with speed", "Automatic scooters, go-karts"],
                ["Electromagnetic", "Powder or flux clutch", "Some fans, compressors, old cars"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Declutching: pedal to broken torque path",
              caption:
                "Six steps from the driver's foot to a gearbox free to change gear - draw this with the clutch in section.",
              steps: [
                { label: "Pedal pressed", note: "free play of 15-20 mm taken first" },
                { label: "Cable or master cylinder pulls the fork" },
                { label: "Release bearing presses the diaphragm fingers" },
                { label: "Diaphragm pivots on its wire rings" },
                { label: "Pressure plate lifts off the disc" },
                { label: "Torque path engine to gearbox is broken" },
              ],
            },
            callout: {
              type: "exam",
              title: "The section sketch",
              body: "Draw the clutch in section: flywheel, friction disc on its splined hub, pressure plate, diaphragm fingers, release bearing. Label the damper springs in the hub - most students forget them - then write T = mu n W Rm and define each symbol. That sketch plus equation is the standard 7-mark answer.",
            },
            keyTerms: [
              { term: "Diaphragm spring", definition: "A dished spring of radial fingers that clamps the pressure plate and gives a light, consistent pedal." },
              { term: "Release bearing", definition: "The thrust bearing that presses the diaphragm fingers to disengage the clutch." },
              { term: "Free play", definition: "The small pedal travel before the release bearing touches the fingers; the routine clutch adjustment." },
            ],
            examQuestions: [
              {
                q: "With a neat sectional sketch explain the construction and working of a single-plate dry clutch. Derive its torque capacity and explain the function of the torsional damper springs.",
                marks: 7,
                outline: [
                  "Sketch flywheel, friction disc with splined hub, pressure plate, diaphragm spring, cover, release bearing and fork.",
                  "Working engaged: diaphragm clamps disc between flywheel and pressure plate - torque flows.",
                  "Working disengaged: pedal, fork, bearing, fingers, spring pivots, plate lifts - path broken.",
                  "Torque capacity T = mu n W Rm; define each term and note n = 2 for one plate.",
                  "Damper springs in the hub absorb engine torsional vibration protecting the gearbox.",
                  "Cushion springs soften engagement; diaphragm keeps clamp load constant as linings wear.",
                  "Mention typical faults: slip, drag, judder, and the free-play adjustment.",
                ],
              },
              {
                q: "Why are torsional damper springs provided in a clutch disc?",
                marks: 2,
              },
              {
                q: "Why is a multi-plate clutch preferred in motorcycles?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Gearboxes: synchromesh, automatic and CVT",
            body: [
              "An IC engine delivers useful torque only in a narrow band, yet the car must creep in traffic and cruise at highway speed - the gearbox multiplies torque by trading it against speed, through gear ratios set by tooth counts. In the constant-mesh manual box, helical gear pairs on two shafts are permanently engaged; selecting a gear slides a dog sleeve to lock the chosen gear to its shaft. The problem is matching speeds before the dogs engage, once solved by double-declutching, today by the synchronizer: a brass blocker ring acting as a small cone clutch that spins the mating gear to shaft speed and blocks the sleeve until the speeds match.",
              "The automatic transmission replaces the clutch with a torque converter - impeller, turbine and a stator on a one-way clutch that redirects returning fluid to multiply torque by about two to two-and-a-half times at stall. Behind it, planetary gear sets provide the ratios: a simple set has a sun gear, planet pinions on a carrier and an internal ring gear, and by holding one member with a brake while driving another through a clutch, the set gives reduction, overdrive or reverse. The valve body - hydraulics once, solenoids and a transmission controller now - shifts the clutches and brakes according to speed, load and driver demand.",
              "The CVT abandons fixed steps: two cone pulleys whose effective diameters change continuously, joined by a steel push-belt or chain, give any ratio between mechanical limits, holding the engine at its best speed while road speed rises - efficient but once derided for its rubber-band feel. The dual-clutch transmission pre-selects the next gear on a second clutch, shifting in milliseconds. Compare them for the exam: manuals are efficient and engaging; automatics are smooth with converter losses (later offset by lock-up clutches); CVTs are efficient in the right duty; DCTs are fast but complex. A comparison table is the expected answer shape.",
            ],
            bullets: [
              "Gearbox need: multiply torque across a wide speed range since the engine's useful band is narrow.",
              "Synchronizer: brass blocker ring cone-clutches the gear to shaft speed and blocks dog engagement until matched - no double-declutching.",
              "Torque converter: impeller, turbine, stator on a one-way clutch; multiplies torque about 2-2.5x at stall; lock-up clutch removes slip at cruise.",
              "Planetary set: sun, carrier and ring; drive one member, hold another, ratios emerge - the heart of automatics.",
              "CVT: variable pulleys and steel belt give stepless ratios; DCT pre-selects gears on two clutches for millisecond shifts.",
            ],
            table: {
              caption: "Transmission types compared.",
              headers: ["Type", "Ratio control", "Shift character", "Efficiency", "Typical use"],
              rows: [
                ["Manual (synchromesh)", "Fixed helical pairs", "Driver + clutch, ms interrupt", "Highest", "Most of Asia, Europe"],
                ["Automatic (planetary)", "Planetary sets + converter", "Smooth, no interrupt", "Good with lock-up", "Comfort cars"],
                ["CVT", "Variable pulleys + belt", "Stepless, engine holds rpm", "Good, drivetrain simple", "Scooters, hybrids, commuters"],
                ["DCT", "Two clutches, pre-selected", "Millisecond, firm", "Near-manual", "Performance and premium"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Stepped gearboxes against the stepless CVT",
              caption:
                "The fundamental transmission choice: discrete ratio jumps or a continuous sweep.",
              left: {
                heading: "Stepped (manual / automatic)",
                items: [
                  "Fixed discrete ratios chosen by teeth",
                  "Torque interrupt or converter slip at each shift",
                  "Engine rpm swings up and down with gears",
                  "Strong mechanical lock at cruise",
                  "Driver or TCU picks the gear",
                ],
              },
              right: {
                heading: "Stepless (CVT)",
                items: [
                  "Continuous ratio between mechanical limits",
                  "No shift shock - the ratio glides",
                  "Engine holds near-constant rpm at optimum",
                  "Belt and pulley losses; early rubber-band feel",
                  "Ideal duty cycle: commuting and hybrids",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Name the three members",
              body: "In planetary questions, always name sun, planet carrier and ring gear, then state the rule: drive one, hold one, output from the third. Add the torque-converter trio impeller-turbine-stator and you have the two sketches automatic-transmission marks are built on.",
            },
            keyTerms: [
              { term: "Synchronizer ring", definition: "A brass blocker ring that cone-clutches a gear to shaft speed before dog engagement." },
              { term: "Torque converter", definition: "A fluid coupling with impeller, turbine and stator that multiplies torque at stall and damps shocks." },
              { term: "Planetary gear set", definition: "Sun, planet carrier and ring gears giving multiple ratios by holding or driving different members." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a synchromesh gearbox with a neat sketch of the synchronizer unit, and compare manual, automatic and CVT transmissions.",
                marks: 7,
                outline: [
                  "State the gearbox purpose: torque multiplication across the speed range.",
                  "Describe constant-mesh layout: helical pairs, dog sleeves on splined hubs.",
                  "Sketch the synchronizer: hub, sleeve, brass blocker ring, gear cone.",
                  "Explain working: sleeve moves, cone contact equalises speeds, blocker prevents early dog engagement, sleeve locks the gear.",
                  "Contrast with the older sliding-mesh and double-declutch practice.",
                  "Automatics: torque converter (impeller-turbine-stator) plus planetary sets shifted by clutches and brakes.",
                  "CVT: variable pulleys and belt for stepless ratio; end with a one-line comparison of efficiency and feel.",
                ],
              },
              {
                q: "What is the function of the stator in a torque converter?",
                marks: 2,
              },
              {
                q: "Explain the principle of a CVT and state two advantages over a stepped gearbox.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Propeller shaft, final drive and the differential",
            body: [
              "In a front-engine rear-drive car the torque crosses the vehicle through the propeller shaft. Because the rear axle rises and falls on its springs, the shaft angle changes constantly, so a universal joint - the Hooke or Cardan joint - sits at each end, and because the effective length also changes, a splined slip joint in the shaft tube accommodates it. Long vehicles use two-piece shafts with a centre bearing to avoid whirling. The final drive then turns the torque through 90 degrees with a hypoid bevel pair - the pinion axis sits below the crown wheel centre, lowering the driveshaft, quieting the mesh and demanding extreme-pressure oil.",
              "The differential lives behind the crown wheel and exists for one geometric truth: in a corner the outer wheel travels farther than the inner. Its cage bolts to the crown wheel and carries two spider (pinion) bevel gears that mesh with two side (sun) gears splined to the axles. Straight ahead, everything rotates as one - the spider gears orbit but do not spin on their pins. In a bend, the spider gears do spin, adding speed to the outer axle and subtracting exactly as much from the inner, while the cage speed - the average - stays fixed. Torque, however, splits 50:50 always, because the spider gears idle.",
              "That 50:50 honesty becomes a weakness: put one wheel on ice and it spins freely, receiving almost all the speed while the gripping wheel receives almost no torque, and the car stalls. Limited-slip differentials answer with clutch packs, Torsen helical gears or viscous couplings that bias torque to the wheel with grip; locking differentials force both axles to rotate together off-road; and electronics fake an LSD by braking the spinning wheel (the basis of traction control). The exam wants the bevel-gear sketch with the two cases - straight ahead and cornering - plus the classic caveat that speeds differ while torque stays equal.",
            ],
            bullets: [
              "Propeller shaft: universal joints at both ends absorb the changing axle angle; a splined slip joint absorbs length change; long shafts add a centre bearing.",
              "Final drive: hypoid bevel pair turns torque 90 degrees with the pinion offset below the crown wheel - lower floor, quieter, needs EP oil.",
              "Differential straight ahead: cage, spider gears and side gears rotate as one block - no relative motion.",
              "Differential cornering: spider gears walk, adding speed to the outer axle, subtracting from the inner; cage speed is the average.",
              "Torque split is always 50:50 - hence the one-wheel-on-ice failure and the LSD, locking and brake-based electronic answers.",
            ],
            table: {
              caption: "Differential types and their torque behaviour.",
              headers: ["Type", "Torque behaviour", "Application"],
              rows: [
                ["Open", "Always 50:50, speeds free", "Most road cars"],
                ["Clutch-pack LSD", "Biases torque under load", "Performance cars"],
                ["Torsen helical", "Torque-sensing, seamless", "AWD systems (quattro)"],
                ["Locking", "Forces equal speeds", "Off-road, military"],
                ["Electronic (brake-based)", "Brakes the spinning wheel", "Modern ESC cars"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One wheel on ice, one on tarmac",
              caption:
                "The differential dilemma every exam syllabus circles - which type actually pulls the car out?",
              start: "Pulling away with the right rear wheel on wet grass, the left on dry tarmac.",
              branches: [
                { label: "Open differential", outcome: "the spinning wheel takes the speed, the grip takes no torque - car stays stuck", good: false },
                { label: "Limited-slip differential", outcome: "clutch pack biases torque to the gripping wheel - the car pulls away", good: true },
                { label: "Locked differential", outcome: "both wheels forced to equal speed - unbeatable in mud, scrubs tyres on tarmac", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Speeds versus torque",
              body: "Never write that an open differential splits torque to whichever wheel grips. It splits torque equally, always; only the speeds vary. Writing the opposite costs the credibility of the whole answer - state it the correct way and move on.",
            },
            keyTerms: [
              { term: "Universal joint", definition: "A Hooke/Cardan coupling permitting drive through a changing shaft angle, used at propeller shaft ends." },
              { term: "Hypoid gear", definition: "A bevel gear pair with the pinion offset below the crown wheel axis, lowering the driveshaft." },
              { term: "Limited-slip differential", definition: "A differential that biases torque toward the higher-grip wheel using clutches, gears or viscous coupling." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a bevel-gear differential for straight-ahead running and for cornering, with sketches. Why is a limited-slip differential sometimes fitted, and what are the functions of universal and slip joints in the propeller shaft?",
                marks: 7,
                outline: [
                  "Sketch the assembly: crown wheel on the cage, spider gears on pins, side gears splined to the axles.",
                  "Straight ahead: cage, spiders and side gears rotate as one; no spider spin.",
                  "Cornering: spiders spin on their pins - outer axle speeds up, inner slows, cage speed is the mean.",
                  "State the torque law: split is 50:50 regardless of grip; demonstrate the ice-wheel failure.",
                  "LSD types: clutch pack, Torsen, viscous; locking and electronic brake-based solutions.",
                  "Universal joints handle the changing angle as the axle moves; slip joint handles the changing length.",
                  "Mention the hypoid final drive: pinion offset, quiet mesh, EP oil.",
                ],
              },
              {
                q: "Why is a slip joint provided in a propeller shaft?",
                marks: 2,
              },
              {
                q: "State three advantages of a hypoid final drive over a plain bevel pair.",
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
      title: "Steering, Suspension and Brakes",
      summary:
        "Keeping the car pointed, planted and stoppable: steering geometry with the Ackermann condition, alignment angles and their wear patterns, suspension from leaf axles to the MacPherson strut, hydraulic drum and disc brakes, ABS with electronic brakeforce distribution, and regenerative braking.",
      chapter: {
        number: "03",
        title: "Steering, Suspension and Braking Systems",
        intro:
          "Unit III is the dynamics trio. Steering geometry sets the angles at which tyres meet the road and the Ackermann condition that lets them roll around one turn centre; suspension isolates the body without losing tyre contact; and the braking chain multiplies pedal force through hydraulics into drum or disc friction, then modulates it electronically through ABS, EBD and regeneration.",
        inOneBreath:
          "Ackermann geometry makes the inner wheel steer more than the outer so all four wheels roll about one instantaneous centre on the rear-axle line; alignment angles - camber, caster, kingpin inclination and toe - trade tyre wear against stability and self-centring; suspension springs carry the body while dampers spend its energy through coil, leaf, torsion or air elements under rigid axles or MacPherson and wishbone independents; hydraulic brakes press linings on drums or pads on discs through a tandem master cylinder boosted by manifold vacuum; and ABS holds slip near the friction peak while EBD apportions force and regeneration returns braking energy to the battery.",
        sections: [
          {
            number: "3.1",
            title: "Steering geometry and the Ackermann principle",
            body: [
              "Steering exists to aim the front wheels - but only geometry decides whether they roll or scrub. The primary angles are measured before you drive anywhere. Camber tilts the wheel in front view: negative camber leans the top of the tyre inward, improving grip in corners at some straight-line wear cost. Kingpin inclination (steering axis inclination) leans the ball-joint axis inward, producing a self-centring torque from the vehicle weight as the wheel steers. Caster leans that axis backward in side view - the fork angle of a bicycle - giving directional stability and returnability. Toe sets the pair slightly pigeon-toed (toe-in) for stability or splayed (toe-out) for eager turn-in.",
              "The Ackermann principle is the heart of the exam question. When a car corners, all four wheels must roll - without lateral slip - about a single instantaneous centre lying on the extension of the rear axle line. The front wheels, steered about kingpins a track-width apart, must therefore point at that same centre, which forces the inner wheel to a larger angle than the outer. Geometry delivers this: the steering arms are inclined so their centre-lines meet on the rear axle line, making the track rod shorter than the kingpin span. The correct steering condition is written cot(theta_outer) - cot(theta_inner) = track / wheelbase - quote it with the sketch of the trapezium.",
              "The mechanism turns intention into angle. In the dominant rack-and-pinion gear, the steering column turns a pinion that walks a toothed rack sideways; tie rods at each end push and pull the steering arms on the knuckles. Recirculating-ball gears, with their worm-and-nut reduction and power assistance, still serve trucks and older heavy cars. Power steering cuts the effort: hydraulic systems pressurise a cylinder from an engine-driven pump, while electric power steering (EPS) turns a motor on the column or rack - lighter, tunable by speed, efficient, and the natural interface for lane-keeping assistance. Steering ratio and lock-to-lock turns complete the vocabulary.",
            ],
            bullets: [
              "Camber: wheel tilt in front view (negative = top in); caster: axis lean in side view for stability and return; KPI: inward lean of the steering axis; toe: slight pigeon-toe for stability.",
              "Ackermann: all wheels roll about one instantaneous centre on the rear-axle line - the inner wheel must steer more.",
              "Correct steering condition: cot(theta_outer) - cot(theta_inner) = track / wheelbase; achieved by angling the steering arms to meet on the rear axle line.",
              "Rack and pinion: pinion walks the rack, tie rods steer the knuckles - direct, light, universal on cars; recirculating ball serves trucks.",
              "EPS: motor assist on column or rack - speed-tunable, efficient, the interface for lane-keep and ADAS.",
            ],
            table: {
              caption: "The steering alignment angles.",
              headers: ["Angle", "Viewed from", "Primary effect"],
              rows: [
                ["Camber", "Front", "Cornering grip vs tyre wear"],
                ["Caster", "Side", "Directional stability, self-return"],
                ["Kingpin inclination", "Front", "Weight-induced self-centring"],
                ["Toe (in / out)", "Top", "Straight-line stability vs turn-in"],
                ["Toe-out on turns", "Top", "Ackermann compliance during cornering"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Steering input to road-wheel angle",
              caption:
                "The rack-and-pinion chain - and the last box is where Ackermann lives.",
              steps: [
                { label: "Steering wheel turned", note: "about 3 turns lock to lock" },
                { label: "Column drives the pinion" },
                { label: "Pinion walks the rack laterally" },
                { label: "Tie rods push and pull the steering arms" },
                { label: "Knuckles pivot on ball joints" },
                { label: "Inner wheel angles more than outer", note: "the Ackermann condition" },
              ],
            },
            callout: {
              type: "exam",
              title: "Derive, then sketch",
              body: "The 7-mark Ackermann answer: draw the wheelbase, track and instantaneous centre on the rear-axle line; mark inner and outer angles; derive cot(theta_o) - cot(theta_i) = c / l; then sketch the steering-arm trapezium that realises it. The derivation plus the trapezium is what separates 4 marks from 7.",
            },
            keyTerms: [
              { term: "Instantaneous centre", definition: "The single point on the rear-axle line extension about which all four wheels roll in a turn." },
              { term: "Caster angle", definition: "Backward lean of the steering axis in side view, giving directional stability and self-return." },
              { term: "Rack and pinion", definition: "A steering gear in which a pinion on the column moves a toothed rack connected to the tie rods." },
            ],
            examQuestions: [
              {
                q: "State the Ackermann steering principle and derive the correct steering condition. Explain how the steering linkage achieves it and describe the rack-and-pinion steering gear.",
                marks: 7,
                outline: [
                  "State the principle: all wheels roll without slip about one instantaneous centre on the rear-axle line.",
                  "Draw wheelbase l, track c, centre O on the rear-axle extension; mark inner angle theta_i, outer theta_o.",
                  "Derive cot(theta_o) - cot(theta_i) = c / l from the two right triangles to O.",
                  "Explain that the inner wheel turns more; errors cause tyre scrub in turns.",
                  "Show the steering-arm trapezium meeting on the rear axle line to implement it.",
                  "Describe rack and pinion: pinion, rack, tie rods, ball joints; note its directness.",
                  "Mention power steering - hydraulic vs EPS - and the effect of caster on returnability.",
                ],
              },
              {
                q: "Why is toe-in provided on the front wheels of a car?",
                marks: 2,
              },
              {
                q: "State three advantages of electric power steering over hydraulic.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Wheel alignment, wear diagnosis and steering errors",
            body: [
              "Alignment is the art of keeping all the steering angles inside the maker's tiny windows - a few tenths of a degree for camber, a fraction of a degree for toe. When they drift, the tyre prints the evidence. Excess negative camber wears the inner shoulder; excess positive camber wears the outer shoulder. Incorrect toe feathers the tread into saw-tooth edges - run a palm across the tread and it feels smooth one way, ridged the other. Caster rarely wears tyres but unbalanced caster side-to-side pulls the car toward the lower-caster side; kingpin-inclusion errors make it wander or crab.",
              "Adjustment order matters and exam questions ask for it. Caster and camber are set first (shims, eccentric bolts or slotted struts depending on design), then toe last, by screwing the tie rods in or out - because toe is disturbed by every change upstream. Rear alignment matters too: the rear axle's thrust angle - the angle between its direction of rolling and the car's centreline - makes a car crab down the road with the steering wheel off-centre; four-wheel alignment aligns the front wheels to the thrust line, not the body. Many MacPherson-strut cars have no factory camber adjustment: a bent strut from a kerb strike means replacement, not bending.",
              "Symptoms cluster into a diagnosis table worth memorising: pull to one side (unequal camber or tyre pressure, or a dragging brake), wander (loose linkage, worn idler arms), shimmy (wheel imbalance, worn tie-rod ends), tramp (wheel hop from runout or a bent rim), poor returnability (insufficient caster), off-centre steering wheel (rear thrust angle). Balancing completes the picture: static balancing corrects heavy spots in one plane, dynamic balancing corrects the couple that makes the wheel wobble at speed. Alignment checked on a level rack with a loaded, correctly inflated car is a service item, not a repair afterthought.",
            ],
            bullets: [
              "Wear map: inner shoulder = excess negative camber; outer shoulder = excess positive camber; feathered saw-tooth = incorrect toe.",
              "Adjust in order - caster, camber, then toe last via tie-rod length, because every upstream change disturbs toe.",
              "Unequal caster pulls to one side; insufficient caster kills self-return and stability at speed.",
              "Thrust angle: misaligned rear axle makes the car crab; four-wheel alignment references the front to the thrust line.",
              "Symptom clusters: pull, wander (loose linkage), shimmy (imbalance), tramp (runout), off-centre wheel (thrust angle); static vs dynamic balancing.",
            ],
            table: {
              caption: "Symptom clusters and their usual causes.",
              headers: ["Symptom", "Usual cause", "First check"],
              rows: [
                ["Pulls to one side", "Unequal camber or tyre pressure; dragging brake", "Swap front tyres left to right"],
                ["Wanders at speed", "Excess toe-out; loose tie-rod ends; low caster", "Rock each wheel at 3 and 9 o'clock"],
                ["Shimmy in the wheel", "Wheel imbalance; worn linkage; bent rim", "Static and dynamic balance check"],
                ["Tramp / wheel hop", "Runout; out-of-round tyre; bent wheel", "Dial-gauge the rim and tyre"],
                ["Poor self-return after a turn", "Insufficient caster", "Caster readout on the alignment rack"],
                ["Off-centre steering wheel", "Rear thrust angle from axle misalignment", "Four-wheel alignment to the thrust line"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The camber-toe wear map",
              caption:
                "Four corners of alignment abuse and the tyre damage each one prints - palm the tread to feel toe wear.",
              axes: {
                x: "Toe: in (left) to out (right)",
                y: "Camber: negative (top) to positive (bottom)",
              },
              quadrants: [
                { label: "Toe-in + negative camber", note: "inner-shoulder wear; stable straight line - sporty stance" },
                { label: "Toe-out + negative camber", note: "crisp turn-in but feathered inner wear - track setup" },
                { label: "Toe-in + positive camber", note: "outer-shoulder wear; heavy, lazy steering" },
                { label: "Toe-out + positive camber", note: "wandering plus outer wear - nothing recommends it" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never bend a strut",
              body: "On MacPherson-strut cars camber is fixed by design. If camber is out of spec, suspect a bent strut, control arm or knuckle from a kerb or pothole - the repair is replacement, and the exam answer says so. Bending components to set alignment is a workshop horror story, not a procedure.",
            },
            keyTerms: [
              { term: "Thrust angle", definition: "The angle between the rear axle's rolling direction and the vehicle centreline; it causes crabbing." },
              { term: "Toe-in", definition: "Slight pigeon-toe of the front wheels that pre-loads linkages and stabilises straight running." },
              { term: "Shimmy", definition: "A rapid to-and-fro oscillation of the steering wheel, usually from wheel imbalance or worn linkage." },
            ],
            examQuestions: [
              {
                q: "Explain the effects of incorrect camber, caster and toe on tyre wear, steering behaviour and stability. Describe how alignment is adjusted and diagnosed, including the thrust angle and four-wheel alignment.",
                marks: 7,
                outline: [
                  "Define camber, caster, toe and kingpin inclination in one line each.",
                  "Camber errors: inner-shoulder (negative) and outer-shoulder (positive) wear; effect on pull.",
                  "Caster: unequal caster pulls to one side; low caster loses returnability and stability.",
                  "Toe: feathered saw-tooth wear across the tread; toe-in for stability vs toe-out for turn-in.",
                  "Adjustment order: caster, camber, then toe last via tie rods; note no-factory-adjustment struts.",
                  "Thrust angle from rear misalignment causes crabbing; four-wheel alignment references the thrust line.",
                  "Close with diagnosis: pull, wander, shimmy, tramp, and static vs dynamic balancing.",
                ],
              },
              {
                q: "What is thrust angle and what symptom does it produce?",
                marks: 2,
              },
              {
                q: "List the symptoms of incorrect toe-in and state how toe is adjusted.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Suspension: springs, dampers and the MacPherson strut",
            body: [
              "Suspension connects the wheels to the body and pursues two contradictory goals: let the wheel follow the road for grip, and keep the body still for comfort. Every system is built from the same elements. Springs - coil, leaf, torsion bar or air - store road-shock energy and carry the load. Dampers (shock absorbers) spend that energy: a piston forces oil through valves, and without them the spring would bounce the wheel like a pogo stick. Linkages locate the wheel in space, anti-roll bars couple left and right to resist body roll, and rubber bushes isolate noise. Unsprung mass - wheel, tyre, brake, and a share of the links - is the enemy: the lighter it is, the faster the tyre tracks the surface.",
              "Axles come in two philosophies. A dependent (rigid) axle ties the wheels on one beam, located by leaf springs or links - strong, cheap and beloved of trucks, but one wheel's motion tilts the other. Independent suspension lets each wheel rise and fall alone: the double wishbone uses two A-arms to control the knuckle, holding camber beautifully through travel (hence its racing use), while the MacPherson strut replaces the upper arm with a telescopic damper acting as a structural member: the coil spring wraps the strut, a single lower control arm locates the base through a ball joint, and the steering knuckle bolts to the strut housing. It is compact, cheap, and tall enough to limit design lowness - the front suspension of most modern cars.",
              "The supporting cast completes the picture. Anti-roll bars - a torsion tube with lever arms - tie the two sides so body roll twists the bar, adding roll stiffness without adding ride harshness, and their drop links are the classic MOT rattle. Gas-charged dampers prevent oil foaming at high frequency; worn dampers show as float after bumps and long stopping distances. Air springs - rolling rubber bellows on a compressor - hold constant height under load and adapt damping (semi-active, skyhook control) for premium cars and buses. Torsion-beam rear axles are the semi-independent compromise on hatchbacks: cheap, compact, sharing a twist beam instead of a true differential of motion.",
            ],
            bullets: [
              "Suspension goals: keep the tyre on the road (grip) and the body still (comfort); springs store, dampers spend, linkages locate.",
              "Spring types: coil (cars), leaf (rigid axles, commercial), torsion bar, air (buses, premium, self-levelling).",
              "Damper: oil through valved pistons dissipates spring energy; gas charge stops foaming; wear shows as float and long stops.",
              "Dependent rigid axle: strong and cheap but coupled; independent: double wishbone holds camber best, MacPherson strut is the mass-market front end.",
              "Anti-roll bar couples the sides to fight roll; unsprung mass is minimised for fast tyre tracking.",
            ],
            table: {
              caption: "Suspension systems compared.",
              headers: ["System", "Cost", "Camber control", "Typical application"],
              rows: [
                ["MacPherson strut", "Low", "Adequate", "Front of most cars"],
                ["Double wishbone", "High", "Excellent", "Performance and racing"],
                ["Torsion-beam axle", "Low", "Fair (semi-independent)", "Rear of hatchbacks"],
                ["Rigid axle + leaf", "Low", "None (coupled)", "Trucks, buses"],
                ["Air suspension", "High", "Adaptive", "Premium cars, coaches"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The MacPherson strut, top to bottom",
              caption:
                "One member does three jobs: damper, structural strut and spring carrier - draw it as a stack.",
              layers: [
                { label: "Strut top mount to body", note: "rubber-isolated" },
                { label: "Coil spring around the damper strut" },
                { label: "Steering knuckle / strut housing" },
                { label: "Lower control arm", note: "locates the wheel base" },
                { label: "Ball joint between knuckle and arm" },
                { label: "Road wheel and tyre", note: "the unsprung mass" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the strut",
              body: "Draw the MacPherson strut as a vertical member: top mount, damper body, coil, knuckle, ball joint, control arm - then label the anti-roll-bar drop link. The 7-mark suspension answer is a labelled sketch plus rigid-vs-independent comparison; the sketch carries the structure marks.",
            },
            keyTerms: [
              { term: "Unsprung mass", definition: "The mass not carried by the suspension springs - wheel, tyre, brake and part of the links." },
              { term: "MacPherson strut", definition: "An independent suspension combining a telescopic damper as a structural member with a coil spring and a lower control arm." },
              { term: "Anti-roll bar", definition: "A torsion bar coupling left and right wheels to add roll stiffness without adding ride stiffness." },
            ],
            examQuestions: [
              {
                q: "State the functions of a suspension system. Compare rigid-axle and independent suspensions with sketches, and explain the construction and advantages of the MacPherson strut.",
                marks: 7,
                outline: [
                  "Functions: absorb road shocks, keep tyres contacted, support load, control body roll.",
                  "Elements: spring, damper, linkages, bushes, anti-roll bar - one line each.",
                  "Rigid axle: beam on leaf springs or links; strong, cheap; wheels coupled - sketch.",
                  "Independent: each wheel free; better ride and grip; list wishbone and MacPherson.",
                  "MacPherson sketch: top mount, strut damper, coil, knuckle, ball joint, lower arm, drop link.",
                  "MacPherson advantages: compact, cheap, fewer parts; limitation: height limits lowness, camber control moderate.",
                  "Mention unsprung mass, gas dampers, air springs and torsion-beam compromise.",
                ],
              },
              {
                q: "What is the function of a damper (shock absorber) in a suspension system?",
                marks: 2,
              },
              {
                q: "List three advantages of the MacPherson strut over a double-wishbone arrangement.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Braking systems: drum, disc and hydraulics",
            body: [
              "A braking system must stop the vehicle within a safe distance, hold it on a gradient, and keep working downhill without fade - and it must do so through two independent circuits by law. The hydraulic chain multiplies force with Pascal's law: the pedal lever and vacuum booster (servo) multiply the driver's foot force into the master cylinder, where a small piston raises line pressure; at the wheel, larger pistons in wheel cylinders or calipers convert that pressure back into a larger clamping force. The tandem master cylinder keeps two separate fluid circuits - front/rear or diagonal - so a burst line only halves, never deletes, the braking.",
              "The friction ends differ. The drum brake has two shoes inside a rotating drum; the wheel cylinder pushes them outward, and because the leading shoe is dragged into the drum by friction itself, the assembly is self-energizing - light pedal force, strong braking, but heat is trapped inside, so drums fade. The disc brake clamps pads onto an exposed rotating disc with a caliper; being non-self-energizing it needs more boost, but the disc radiates heat to the air, resists fade, sheds water and self-adjusts - which is why discs own the front axle, where 60-70% of braking force goes under weight transfer, and drums survive at cheap rear axles with an easy parking-brake linkage. Ventilated discs and pad compounds (organic, semi-metallic, ceramic) tune feel and temperature.",
              "Numbers complete the answer. Line pressure times caliper piston area gives clamp force; clamp force times pad friction times effective radius gives brake torque; torque divided by rolling radius gives ground force, capped by tyre grip. Brake fade has mechanisms worth naming: pad resin outgassing at extreme temperature, fluid boiling if moisture-laden, and lining glaze. Maintenance items are bleeding air from the highest points, pad and shoe wear, and spongy-pedal diagnosis. The exam pattern: draw the hydraulic circuit with master cylinder section, then work one force-multiplication numerical.",
            ],
            bullets: [
              "Pascal's law chain: pedal ratio x vacuum boost -> master cylinder pressure -> wheel piston area -> clamping force.",
              "Tandem master cylinder keeps two independent circuits (front/rear or diagonal) so one leak never deletes all braking.",
              "Drum brakes: shoes are self-energizing (leading shoe dragged into the drum) - light pedal, cheap, but heat-trapped and fade-prone.",
              "Disc brakes: pads on an exposed disc - non-self-energizing, needs boost, but fade-resistant, self-cleaning and self-adjusting; discs own the front axle.",
              "Fade mechanisms: pad resin out-gassing, fluid boiling with moisture, glazing; service: bleeding, wear, spongy-pedal diagnosis.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Pedal force to stopping distance - the hydraulic chain and the grip limit in one calculation.",
              code: `# Pedal force to stopping distance for a 1200 kg car
m, g = 1200.0, 9.81
mu_tyre = 0.85        # tyre-to-road friction

Ft = 400.0            # driver pedal force, N
ratio = 4.0           # pedal lever ratio
boost = 3.0           # vacuum booster multiplication
d_mc = 0.020          # master cylinder bore, m
d_cal = 0.054         # caliper piston bore, m
mu_pad = 0.40         # pad-to-disc friction
r_eff = 0.11          # effective disc radius, m
r_wheel = 0.30        # rolling tyre radius, m

A_mc = 3.1416 * (d_mc / 2) ** 2
A_cal = 3.1416 * (d_cal / 2) ** 2

p = Ft * ratio * boost / A_mc        # line pressure, Pa
T_one = 2 * mu_pad * p * A_cal * r_eff   # torque, one front disc
F_ground = 2 * T_one / r_wheel      # both front discs
F = min(F_ground, mu_tyre * m * g)  # grip is the cap
a = F / m
v = 100 / 3.6

print(f"line pressure {p / 1e5:.0f} bar, decel {a / g:.2f} g")
print(f"stopping distance from 100 km/h: {v * v / (2 * a):.1f} m")`,
            },
            diagram: {
              kind: "flow",
              title: "Pedal to road: the hydraulic braking chain",
              caption:
                "Every arrow multiplies force - draw this chain and label where Pascal's law acts.",
              steps: [
                { label: "Pedal force + vacuum booster", note: "driver effort multiplied" },
                { label: "Tandem master cylinder", note: "two independent circuits" },
                { label: "Pipes, hoses, valves" },
                { label: "Caliper / wheel cylinder pistons" },
                { label: "Friction torque at disc or drum" },
                { label: "Tyre-to-road force", note: "capped by grip" },
              ],
            },
            callout: {
              type: "exam",
              title: "Section of the master cylinder",
              body: "Draw the tandem master cylinder in section: two pistons, two reservoirs, two outlets - and state why the second circuit survives a failure. Then explain self-energizing drum action in two sentences with a leading-shoe sketch. Those two items are the backbone of most RGPV brake questions.",
            },
            keyTerms: [
              { term: "Tandem master cylinder", definition: "A master cylinder with two pistons and circuits so braking survives one hydraulic failure." },
              { term: "Brake fade", definition: "Loss of braking effectiveness at high temperature from pad out-gassing, fluid boiling or glazing." },
              { term: "Self-energizing action", definition: "Drum-brake effect where friction drags the leading shoe harder into the drum, multiplying applied force." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a hydraulic braking system with a sectional sketch of the tandem master cylinder. Compare drum and disc brakes, and explain brake fade and the need for a vacuum booster.",
                marks: 7,
                outline: [
                  "Draw the circuit: pedal, booster, master cylinder, lines, calipers/wheel cylinders, drums/discs.",
                  "Master cylinder section: primary and secondary pistons, reservoirs, two outlets; dual-circuit safety.",
                  "Pascal's law: pressure equal throughout; force multiplied by piston-area ratio; write the force chain.",
                  "Drum brake: shoes, wheel cylinder, leading-shoe self-energizing, adjuster; merits and fade.",
                  "Disc brake: caliper, pads, exposed rotor; non-self-energizing but fade-resistant; ventilated discs.",
                  "Fade: resin out-gassing, moisture-laden fluid boiling, glazing; symptoms and prevention.",
                  "Booster: manifold vacuum assists pedal force; note weight transfer loads the front axle.",
                ],
              },
              {
                q: "Why are disc brakes less prone to fade than drum brakes?",
                marks: 2,
              },
              {
                q: "State the functions of a vacuum booster and a proportioning valve in the braking system.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "ABS, EBD and regenerative braking",
            body: [
              "A locked wheel is a bad wheel: sliding friction is lower than peak rolling friction, the stopping distance grows, and - decisively - a locked front wheel cannot steer. The tyre's mu-slip curve peaks at around 10-20% slip (slip = 1 - wheel speed / vehicle speed) and falls beyond it, so the optimal strategy holds every tyre near that peak. The anti-lock braking system does exactly this: a speed sensor and a toothed ring at each wheel feed the ABS ECU, and a hydraulic modulator with inlet and outlet valves per channel executes hold-release-reapply cycles at 10-20 times per second, keeping slip near the optimum while the driver simply stands on the pedal and feels the pulsation.",
              "Electronic brakeforce distribution refines the balance. Under braking, weight transfers forward and the rear axle unloads; if rear pressure were unrestrained, the rear wheels would lock first and swing the tail. EBD replaces the old mechanical proportioning valve, trimming rear-circuit pressure continuously to match grip and load - even side-to-side in a loaded van cornering under braking. Brake assist watches pedal velocity and applies full boost when it reads panic, and the same modulator hardware powers traction control and the stability control of Unit IV, which is why the brake ECU became the vehicle's fastest-growing control unit.",
              "Regenerative braking belongs to the electric era: the traction motor is also a generator, and when the driver lifts or brakes, the wheels drive the motor, its electromagnetic resistance slows the car and the recovered energy charges the battery instead of heating the pads. Blended braking blends regen first and friction only when regen reaches its limit - near standstill, at full demand, or when the battery is cold or full. City driving recovers on the order of 20-30% of energy, extends range and saves pad wear; one-pedal driving is the UX consequence. Note the exam caveat: on loose gravel or deep snow ABS can lengthen stopping distance - a locked wedge of material helps there - but retaining steering remains its core gift.",
            ],
            bullets: [
              "Locked wheel: lower friction and no steering - the mu-slip curve peaks at 10-20% slip; ABS holds each tyre there.",
              "ABS loop: wheel-speed sensors -> ECU slip calculation -> modulator valves hold-release-reapply at 10-20 Hz; pedal pulsates normally.",
              "EBD trims rear (and cross) circuit pressure to match weight transfer and load, replacing the mechanical proportioning valve.",
              "Brake assist detects panic pedal velocity and applies full boost; the same modulator powers traction and stability control.",
              "Regen: motor as generator returns energy to the battery; blended braking mixes regen and friction; recovers roughly 20-30% in city cycles.",
            ],
            table: {
              caption: "Braking with and without ABS.",
              headers: ["Aspect", "Wheels locked", "With ABS"],
              rows: [
                ["Friction used", "Sliding, past the peak", "Near peak, 10-20% slip"],
                ["Steering", "Lost (front lock)", "Retained throughout"],
                ["Stopping distance", "Usually longer", "Usually shorter (not on gravel)"],
                ["Driver action", "Cadence pumping", "Press and hold, steer"],
                ["Stability", "Rear lock can spin the car", "Directionally stable"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The regenerative braking energy loop",
              caption:
                "Kinetic energy that once heated the disc now returns to the battery - the loop to draw for EV brake questions.",
              steps: [
                { label: "Driver lifts or brakes", note: "motor switched to generator mode" },
                { label: "Wheels drive the motor-generator", note: "electromagnetic braking torque" },
                { label: "Kinetic energy becomes electricity" },
                { label: "Inverter charges the battery", note: "within BMS limits" },
                { label: "Regen tapers at low speed", note: "friction brakes blend in to a stop" },
                { label: "Energy spent again at the next launch" },
              ],
            },
            callout: {
              type: "warning",
              title: "The ABS exception",
              body: "Do not write that ABS always shortens stopping distance. On loose gravel or deep snow a locked wheel builds a wedge of material and can stop sooner. ABS's guaranteed win is retaining steering control - state that precisely and the examiner knows you understand the physics.",
            },
            keyTerms: [
              { term: "Slip ratio", definition: "The difference between wheel and vehicle speed normalised by vehicle speed; grip peaks at 10-20%." },
              { term: "Electronic brakeforce distribution", definition: "Software trimming of brake pressure per axle and side to match grip and load transfer." },
              { term: "Blended braking", definition: "Coordinated use of regenerative and friction braking to decelerate seamlessly and maximise recovery." },
            ],
            examQuestions: [
              {
                q: "Explain the working of an anti-lock braking system with a block diagram of its sensors, ECU and hydraulic modulator. Describe EBD and regenerative braking, and state why ABS does not always reduce stopping distance.",
                marks: 7,
                outline: [
                  "Start from the mu-slip curve: friction peaks at 10-20% slip; a locked wheel slides and cannot steer.",
                  "Block diagram: wheel-speed sensors, ECU, modulator valves, pump, brake circuit.",
                  "Modulator action: hold, release, reapply at 10-20 Hz; pedal pulsation is normal.",
                  "EBD: trims rear and cross pressure against weight transfer, replacing proportioning valves.",
                  "Brake assist and the shared modulator for traction/stability control.",
                  "Regen: motor as generator, blended braking, 20-30% city recovery, limits at low speed and full battery.",
                  "The exception: on gravel or deep snow a locked wedge can stop shorter - steering retention is ABS's core benefit.",
                ],
              },
              {
                q: "What is the function of EBD in a modern braking system?",
                marks: 2,
              },
              {
                q: "Explain the principle of regenerative braking and state two of its benefits.",
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
      title: "Electrical and Safety",
      summary:
        "The rolling electrical and electronic vehicle: lead-acid battery and starter motor, alternator charging, lighting and body electronics, automotive air conditioning, airbags and crumple structures, electronic stability control, ADAS levels and the discipline of NVH.",
      chapter: {
        number: "04",
        title: "Automotive Electricals, Comfort and Safety",
        intro:
          "Unit IV electrifies the machine and then protects its people. The battery and starter motor turn chemical energy into cranking torque; the alternator and its regulator put it back; lighting, CAN networking and diagnostics knit the electricals together; the air-conditioning circuit keeps the cabin habitable; and airbags, ESC, ADAS and NVH engineering keep the occupants safe and serene.",
        inOneBreath:
          "Six lead-acid cells in series give about 12.6 V and hundreds of cold-cranking amps that a solenoid-switched series starter motor turns into cranking torque through an overrunning-clutch pinion; the alternator - three-phase stator, slip-ring rotor, six-diode rectifier, regulator - returns the charge at a held 14.2-14.6 V; the refrigerant cycle compresses, condenses, expands and evaporates its way to a cold cabin; and safety pairs the active electronics of ABS, EBD and ESC with the passive armour of belts, airbags, crumple zones and a safety cage, before ADAS levels and NVH engineering refine the whole experience.",
        sections: [
          {
            number: "4.1",
            title: "The battery and the starting system",
            body: [
              "The lead-acid battery is six cells in series, each producing about 2.1 V, so a fully charged 12 V battery rests near 12.6 V. In each cell, positive lead-peroxide plates (chocolate brown) and negative spongy lead plates (grey) sit in dilute sulphuric acid of specific gravity near 1.28 when charged. On discharge both plates convert to lead sulphate and the acid weakens toward 1.12 - which is why a hydrometer reads state of charge. Ratings matter in exams: ampere-hour capacity (the 20-hour rate), cold-cranking amps delivered at -18 C, and reserve capacity in minutes at 25 A with the alternator dead.",
              "The starter motor is a series-wound DC machine - chosen because a series motor gives maximum torque at zero speed, exactly what cranking demands. Turning the key energises the solenoid, which does two jobs at once: its heavy contacts connect the battery to the motor (currents of 200-400 A are routine), and its plunger forks the pinion along the armature shaft to mesh with the flywheel ring gear. An overrunning (Bendix-type) clutch lets the pinion spin freely once the engine fires, so the accelerating engine cannot fling the armature to destruction. Cranking speed is about 150-250 rpm; healthy cranking voltage should stay above about 9.6 V.",
              "Diagnosis is the exam's favourite short question. A single click with dim lamps means a flat battery or corroded joint; rapid clicking suggests a discharged battery or a failing solenoid; a healthy spin that never fires is fuel or ignition, not the starter. Maintenance: keep terminals clean and tight, top up vented cells with distilled water, and never hammer the pinion to free it. The 12 V system survives even in electric cars, where a small auxiliary battery still boots the control units before the high-voltage system closes its contactors.",
            ],
            bullets: [
              "Six lead-acid cells in series: fully charged battery rests near 12.6 V; electrolyte SG falls from about 1.28 to 1.12 as it discharges.",
              "Ratings: ampere-hours (20-hour rate), cold-cranking amps at -18 C, reserve capacity minutes at 25 A.",
              "Series-wound starter: maximum torque at zero speed - the exact cranking requirement; draws 200-400 A through the solenoid's heavy contacts.",
              "Solenoid's dual role: closes the motor circuit and forks the pinion into the flywheel ring gear.",
              "Overrunning (Bendix) clutch protects the armature once the engine fires; cranking 150-250 rpm at not less than about 9.6 V.",
            ],
            table: {
              caption: "The starting circuit, component by component.",
              headers: ["Component", "Function"],
              rows: [
                ["Battery", "Supplies 200-400 A of cranking current"],
                ["Ignition switch", "Energises the solenoid with a small control current"],
                ["Solenoid", "Closes heavy contacts and engages the pinion"],
                ["Starter motor (series DC)", "Delivers maximum torque at stall speed"],
                ["Pinion + overrunning clutch", "Meshes with the ring gear, freewheels on engine start"],
                ["Ring gear on flywheel", "Turns the crankshaft at cranking speed"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The cranking sequence",
              caption:
                "From key to firing engine in six steps - the standard starting-system answer.",
              steps: [
                { label: "Key to START", note: "small current to the solenoid" },
                { label: "Solenoid closes heavy contacts", note: "battery now feeds the motor" },
                { label: "Plunger forks the pinion into the ring gear" },
                { label: "Motor cranks at 150-250 rpm", note: "200-400 A drawn" },
                { label: "Engine fires and accelerates" },
                { label: "Overrunning clutch freewheels, key returns", note: "pinion retracts" },
              ],
            },
            callout: {
              type: "exam",
              title: "Diagnosis earns marks",
              body: "Learn the three symptoms: click-no-crank with dim lamps (flat battery or bad connection), rapid clicking (discharged or weak solenoid), free-spinning but no fire (fuel or ignition fault). One diagnosis line in the answer shows the examiner real understanding, not just a copied diagram.",
            },
            keyTerms: [
              { term: "Cold cranking amps", definition: "The current a battery can deliver for 30 s at -18 C while staying above 7.2 V." },
              { term: "Overrunning clutch", definition: "The one-way clutch in the starter pinion that prevents the engine from driving the armature." },
              { term: "Sulphation", definition: "Hard lead-sulphate crystals that form on plates of a battery left discharged, permanently reducing capacity." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of the lead-acid battery and the starter-motor circuit with a sketch, including the dual function of the solenoid and the overrunning clutch. Define the battery ratings Ah, CCA and reserve capacity.",
                marks: 7,
                outline: [
                  "Battery construction: six cells, PbO2 positive plates, spongy lead negatives, dilute H2SO4, separators.",
                  "Discharge chemistry: both plates to lead sulphate; SG falls 1.28 to 1.12; hydrometer reads state of charge.",
                  "Ratings: ampere-hour at the 20-hour rate, cold-cranking amps at -18 C, reserve capacity minutes.",
                  "Circuit sketch: battery, ignition switch, solenoid, series motor, pinion and ring gear.",
                  "Solenoid dual role: heavy contacts for motor current plus mechanical fork to mesh the pinion.",
                  "Series motor chosen for maximum torque at zero speed; 200-400 A; 150-250 rpm cranking.",
                  "Overrunning clutch protects the armature when the engine fires; close with maintenance and diagnosis notes.",
                ],
              },
              {
                q: "Why is a series-wound motor used as a starter motor?",
                marks: 2,
              },
              {
                q: "Define the ampere-hour, cold-cranking amp and reserve capacity ratings of an automotive battery.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Charging system, lighting and body electronics",
            body: [
              "The alternator is a three-phase AC machine with a claw-pole rotor magnetised through slip rings and a stator wound in star or delta; a six-diode bridge rectifies the output, and the regulator holds system voltage at about 14.2-14.6 V by throttling rotor field current. Against the old DC dynamo it wins on every axis: useful output at engine idle (the dynamo needed revs), smaller and lighter construction, and brushes that carry only the field current. The ECU-managed 'smart' regulator goes further, scheduling recovery after cold starts and during deceleration to shave fuel consumption, and conversely easing load at full throttle.",
              "Lighting is legally defined and examinable. Headlamps evolved from tungsten-halogen 55/60 W bulbs through high-intensity discharge (xenon) arcs to LED matrices that shade oncoming traffic beam-by-beam; the dip switch and aiming matter as much as brightness. Around the car: tail and brake lamps (switched off the pedal), reverse lamps on the gearbox switch, direction indicators pulsed by a flasher relay or LED driver, fog lamps low and wide, and all of it fed through fuses, with relays handling the heavy currents so tiny switch contacts survive. Colour codes, earthing points and earth-side switching are the workshop basics.",
              "Body electronics tie it together. The CAN bus (and its siblings) lets controllers share one twisted pair instead of forests of wire: the body control module manages locking, wipers, lighting and immobiliser; the infotainment layer adds connectivity. Diagnostics arrive through the OBD-II port with its standardised trouble codes: a P code for powertrain, B for body, C for chassis and U for network faults. Electrical fault-hunting follows one rule: measure voltage drops across the live circuit under load - most 'failed lamps' are corroded earths, not broken bulbs.",
            ],
            bullets: [
              "Alternator: claw-pole rotor on slip rings, three-phase stator, six-diode rectifier; regulator holds 14.2-14.6 V via field current.",
              "Advantages over the DC dynamo: output at idle, smaller and lighter, brushes carry only field current.",
              "Lighting: halogen to LED matrix evolution; fuses protect circuits, relays carry heavy headlamp currents; brake, reverse, indicator and fog circuits with their switches.",
              "CAN bus lets ECUs share one data pair; the body control module runs locking, wipers, lighting, immobiliser.",
              "OBD-II DTCs: P powertrain, B body, C chassis, U network; diagnose with voltage-drop tests under load.",
            ],
            codeExample: {
              language: "text",
              caption:
                "Reading OBD-II diagnostic trouble codes on a lighting and charging fault hunt.",
              code: `OBD-II diagnostic trouble codes (DTCs)
Format: one letter + four digits
  P  powertrain (engine, gearbox)
  B  body (lighting, airbags, seats)
  C  chassis (ABS, steering, suspension)
  U  network / communication (CAN bus)

Typical findings on a lighting + charging fault hunt:
  P0562  system voltage low          -> alternator output below threshold
  P0620  generator control circuit   -> field or rectifier wiring fault
  B2578  headlamp low-beam circuit   -> open circuit or high resistance
  B2634  lamp fault, front fog       -> bulb or earth path
  U0100  lost communication with ECM -> CAN wiring or gateway fault

Method: read code + freeze frame -> confirm with the wiring diagram
        -> repair the cause -> clear -> recheck after a road test.`,
            },
            diagram: {
              kind: "layers",
              title: "The 12 V electrical power stack",
              caption:
                "Loads on top, energy sources at the bottom - fuses and relays guard the middle.",
              layers: [
                { label: "Loads: lamps, motors, ECUs, infotainment" },
                { label: "Protection and switching: fuses, relays, body control module" },
                { label: "Battery: 12 V, 45-80 Ah energy buffer" },
                { label: "Alternator: regulated 14.2-14.6 V source" },
                { label: "Engine drive: belt and pulley", note: "the energy ultimately comes from fuel" },
              ],
            },
            callout: {
              type: "tip",
              title: "Voltage drop, not continuity",
              body: "A corroded earth passes a continuity test yet drops 2 V under load - that is why lamps glow brown. Examiners love the method: measure the drop across each connection with the load switched on; anything above about 0.2 V per joint is the fault.",
            },
            keyTerms: [
              { term: "Voltage regulator", definition: "The control that varies alternator field current to hold system voltage near 14.2-14.6 V." },
              { term: "CAN bus", definition: "The Controller Area Network sharing data between vehicle ECUs over a twisted pair." },
              { term: "Relay", definition: "An electromagnet switch letting a small control current switch a heavy lamp or motor current." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of an automotive alternator with its rectifier and regulator, and compare it with a DC generator. Describe the headlamp circuit and the role of relays and fuses.",
                marks: 7,
                outline: [
                  "Construction: claw-pole rotor excited via slip rings, three-phase stator, six-diode bridge.",
                  "Working: engine belt spins the rotor, stator induces 3-phase AC, diodes rectify to DC.",
                  "Regulation: field current throttled to hold 14.2-14.6 V; smart regulators schedule recovery.",
                  "Compare with DC dynamo: alternator outputs at idle, smaller, lighter, cooler running.",
                  "Headlamp circuit: battery, relay, switch, fuse, dip/main filaments or LED driver; aim and dip.",
                  "Relay logic: small switch current controls heavy lamp current; fuses protect the wiring.",
                  "Add the CAN bus and OBD-II codes as the modern diagnostics layer.",
                ],
              },
              {
                q: "Why are relays used in headlamp circuits?",
                marks: 2,
              },
              {
                q: "State three advantages of an alternator over a DC generator.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Air conditioning and climate control",
            body: [
              "Automotive air conditioning is a vapour-compression refrigeration cycle that moves heat from the cabin to the street. The compressor - belt-driven through an electromagnetic clutch, or electric in EVs and hybrids - squeezes low-pressure refrigerant vapour into a hot, high-pressure gas (about 70-80 C). The condenser, mounted ahead of the radiator, rejects that heat to the airstream and the gas condenses to liquid. An expansion valve (or a fixed orifice tube) then drops the pressure, and inside the cabin the evaporator lets the low-pressure liquid boil - R-134a boils near -26 C at one atmosphere - absorbing heat from air blown over its fins. Vapour returns to the compressor to close the loop.",
              "The circuit carries two protective extras. The receiver-drier (on expansion-valve systems) stores liquid, filters debris and holds desiccant for stray moisture; orifice-tube systems use an accumulator on the low side to stop liquid reaching the compressor. Refrigerant history is examinable: ozone-destroying R-12 was banned, its replacement R-134a has a global-warming potential near 1,400, and modern cars move to R-1234yf with GWP under 1. Pressure switches protect the loop - low-charge cut-out, high-pressure fan boost - and the compressor's polyalkylene glycol oil circulates with the refrigerant.",
              "The cabin side is more than cooling. Air from the blower passes through the filter and the cold evaporator - moisture condenses on the chilled fins and drains away, so the air leaves both cool and dry, which is why air conditioning defogs a windscreen fastest. Heating arrives from engine coolant through a heater core, and the blend door mixes hot and cold paths for any temperature; automatic climate control closes the loop with cabin and sun-load sensors commanding flap actuators and blower speed. The compressor consumes 3-5 kW, an honest fuel penalty; service is leak checking, cabin filter and condenser cleanliness.",
            ],
            bullets: [
              "Cycle stages: compressor (low-pressure vapour to hot high-pressure gas), condenser (heat out, gas to liquid), expansion valve (pressure drop), evaporator (boiling liquid absorbs cabin heat).",
              "Receiver-drier on TXV systems; accumulator on orifice-tube systems protects the compressor from liquid slugs.",
              "Refrigerants: R-12 banned (ozone), R-134a GWP about 1,400, R-1234yf GWP below 1; PAG oil travels with the gas.",
              "Dehumidification: moisture condenses on the cold evaporator fins and drains - the reason AC defogs fastest.",
              "Heating: engine coolant through a heater core with a blend door; automatic climate control adds sensors and actuator flaps; compressor load 3-5 kW.",
            ],
            table: {
              caption: "Refrigerant state at each stage of the loop.",
              headers: ["Component", "Refrigerant in", "Refrigerant out", "Heat"],
              rows: [
                ["Compressor", "Low-pressure vapour", "High-pressure hot vapour", "Work input"],
                ["Condenser", "High-pressure vapour", "High-pressure liquid", "Rejected outside"],
                ["Expansion valve", "High-pressure liquid", "Low-pressure cold mist", "Throttled"],
                ["Evaporator", "Low-pressure liquid", "Low-pressure vapour", "Absorbed from cabin"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The refrigerant loop",
              caption:
                "Compress, condense, throttle, evaporate - mark the state and pressure at every station.",
              steps: [
                { label: "Compressor", note: "low-pressure vapour to hot high-pressure vapour" },
                { label: "Condenser", note: "heat rejected; vapour condenses" },
                { label: "Expansion valve", note: "pressure drop chills the liquid" },
                { label: "Evaporator", note: "boiling refrigerant absorbs cabin heat" },
                { label: "Suction line returns to compressor", note: "cycle repeats" },
              ],
            },
            callout: {
              type: "exam",
              title: "Label the states",
              body: "Draw the AC circuit as a loop and write at each station: gas or liquid, high or low pressure, hot or cold. State labels - not component names alone - are what the marking scheme checks, and they prove you understand the cycle rather than memorised the diagram.",
            },
            keyTerms: [
              { term: "Expansion valve", definition: "The throttling device dropping refrigerant pressure so it can boil in the evaporator." },
              { term: "Evaporator", definition: "The cabin-side heat exchanger where low-pressure refrigerant boils, absorbing heat and drying the air." },
              { term: "Receiver-drier", definition: "The liquid-side reservoir with filter and desiccant used in expansion-valve systems." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of an automotive air-conditioning system with a circuit diagram, marking the refrigerant state at every point. Describe the function of the expansion valve and the receiver-drier, and explain how the system dehumidifies and heats the cabin.",
                marks: 7,
                outline: [
                  "Draw the loop: compressor, condenser, expansion valve, evaporator, suction line.",
                  "State labels: compressor raises pressure and temperature; condenser rejects heat, liquefying the gas.",
                  "Expansion valve throttles to low pressure; evaporator boils the refrigerant, absorbing cabin heat.",
                  "Blower air passes the cold fins; moisture condenses and drains - dehumidification plus cooling.",
                  "Receiver-drier (or accumulator) stores, filters and dries; pressure switches protect the loop.",
                  "Heating by coolant through a heater core; blend door mixes; automatic climate control sensors.",
                  "Note refrigerants R-12 to R-134a to R-1234yf and the 3-5 kW compressor load.",
                ],
              },
              {
                q: "What is the function of the expansion valve in the AC circuit?",
                marks: 2,
              },
              {
                q: "Why does an air conditioner dehumidify the cabin air, and why is this fastest way to clear a fogged windscreen?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Safety: airbags, ESC and crash structures",
            body: [
              "Passive safety assumes the crash will happen. The seat belt is the primary restraint; modern belts add a pyrotechnic pretensioner that removes slack within milliseconds and a load limiter that pays out webbing to cushion the chest. The airbag is strictly supplemental - SRS. Accelerometers feed the airbag ECU, which decides within about 15-25 ms whether the deceleration profile is a genuine crash; the inflator (once sodium azide, now guanidine-nitrate formulations) generates nitrogen that bursts a nylon bag through the module cover, fully inflating around 30-40 ms after impact and venting immediately after. Front, side, curtain and knee bags cover the cabin; seat-occupancy sensors decide whether to fire.",
              "Active safety prevents the crash. Electronic stability control adds a yaw-rate sensor, a steering-angle sensor and lateral accelerometer to the ABS wheel speeds, and continuously compares the driver's intended path with the measured one. When the car understeers wide, ESC brakes the inner rear wheel, creating a correcting yaw moment; when it oversteers, it brakes the outer front and cuts engine torque through the CAN bus. It intervenes at each wheel individually before the driver senses trouble, and studies credit it with cutting single-vehicle fatal crashes by roughly a third to a half - the reason it is mandated.",
              "The body completes the defence. Front and rear crumple zones are deliberately engineered to collapse progressively, converting crash energy into metal deformation, while a safety cage of high-strength steel keeps the survival space intact; collapsible steering columns, anti-submarining seat bases and head restraints against whiplash finish the interior. Pedestrian protection shapes bonnet crush space and pop-up hinges. The philosophy pairs layers: active systems (ABS, EBD, TCS, ESC) avoid the collision, passive systems (belts, bags, structure) manage it, and post-crash systems - automatic emergency calling - summon help. Bharat and Global NCAP star ratings quantify the package.",
            ],
            bullets: [
              "Airbag timeline: crash detected in 15-25 ms, bag inflated by about 30-40 ms, venting deflates it immediately after - all before the occupant moves far.",
              "Pretensioner removes belt slack in milliseconds; load limiter pays out webbing to cap chest force - belts remain the primary restraint.",
              "ESC sensor set: yaw rate, steering angle, lateral acceleration, wheel speeds; it compares intended versus actual path and brakes single wheels to correct.",
              "Understeer correction: brake inner rear; oversteer correction: brake outer front plus throttle cut via CAN.",
              "Crash structure: progressive crumple zones front and rear plus a high-strength safety cage; ESC is credited with cutting serious single-vehicle crashes by about 30-50%.",
            ],
            table: {
              caption: "Active and passive safety systems.",
              headers: ["System", "Category", "Action"],
              rows: [
                ["ABS + EBD", "Active", "Hold slip near the friction peak, balance forces"],
                ["ESC / ESP", "Active", "Brake individual wheels to correct yaw"],
                ["Traction control", "Active", "Cut torque or brake a spinning wheel"],
                ["Seat belt + pretensioner", "Passive", "Primary restraint, removes slack"],
                ["Airbags (SRS)", "Passive", "Cushion the second collision"],
                ["Crumple zones + safety cage", "Passive", "Absorb energy, preserve survival space"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A fast bend taken too quickly",
              caption:
                "Understeer developing - the fork between electronics, skill and disaster.",
              start: "A front-drive car enters a bend too fast and begins to run wide.",
              branches: [
                { label: "ESC intervenes", outcome: "brakes the inner rear wheel and trims throttle - a yaw moment pulls the nose back on line", good: true },
                { label: "Driver brakes hard without ABS", outcome: "front tyres lock, steering is lost and the car ploughs straight on", good: false },
                { label: "Driver eases throttle and unwinds the wheel", outcome: "the classic skid correction - works if there is room and skill", good: true },
                { label: "Driver adds steering and throttle", outcome: "front tyres wash out further - off the road", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "SRS means supplemental",
              body: "Airbag answers must say it: SRS = Supplemental Restraint System, effective only with the belt worn. Writing that airbags are the primary restraint, or that they deploy in gentle braking over a bump, signals a fundamental misunderstanding and loses credibility marks.",
            },
            keyTerms: [
              { term: "SRS airbag", definition: "A supplemental inflatable restraint that deploys within 30-40 ms of a severe crash to cushion the occupant." },
              { term: "Electronic stability control", definition: "A system braking individual wheels and trimming torque to keep the vehicle on the driver's intended path." },
              { term: "Crumple zone", definition: "A deliberately deformable body region that absorbs crash energy before it reaches the occupant cage." },
            ],
            examQuestions: [
              {
                q: "Explain the working of electronic stability control with its sensors and correcting actions for understeer and oversteer. Describe airbag deployment timing and the construction of crumple zones and the safety cage.",
                marks: 7,
                outline: [
                  "ESC sensors: yaw rate, steering angle, lateral acceleration, wheel speeds.",
                  "Control law: compare intended path from steering angle with measured yaw - the difference is the error.",
                  "Understeer: brake the inner rear wheel to add a tucking-in yaw moment.",
                  "Oversteer: brake the outer front wheel and cut engine torque via CAN.",
                  "Airbag chain: accelerometer decision in 15-25 ms, inflator generates nitrogen, full inflation by 30-40 ms, immediate venting.",
                  "Belts with pretensioners and load limiters as the primary restraint - airbags are supplemental.",
                  "Crumple zones absorb energy progressively; the high-strength safety cage preserves survival space.",
                ],
              },
              {
                q: "What does SRS stand for and why are airbags called supplemental?",
                marks: 2,
              },
              {
                q: "Distinguish between crumple zones and the safety cage of a car body.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "ADAS and NVH engineering",
            body: [
              "Advanced driver assistance systems begin with a sensor suite: cameras read lanes, signs and objects; radar at 24 or 77 GHz measures range and closing velocity robustly in rain and fog; LiDAR builds precise three-dimensional point clouds but is costlier and weather-sensitive; ultrasonic sensors cover parking ranges. The features ladder from warnings (forward collision, lane departure) through assistance (autonomous emergency braking, adaptive cruise, lane keeping) to partial automation. The SAE J3016 scale grades the result: L0-L1 assistance on a single axis, L2 combined steering and speed control with the driver watching, L3 conditional automation where the driver may look away in defined conditions, L4 driverless inside a geofence, and L5 full automation anywhere.",
              "NVH - noise, vibration and harshness - is the discipline of making a vehicle feel refined. Noise divides into airborne (exhaust orifice, intake hiss, wind rush) and structure-borne (engine forces entering the body through mounts and radiating from panels). Vibration appears as idle shake, boom at resonant speeds, and harshness as the sharpness of impacts over broken surfaces. Sources: combustion and rotating engine masses, gear mesh whine, tyre tread and cavity resonance, road texture through the suspension, aeroacoustic leaks at mirrors and seals. Measurement uses A-weighted decibels and order tracking - the rpm-synchronous harmonics that identify a source.",
              "Control works at three points. At the source: balance rotating parts, detune brackets, rib panels. In the path: hydraulic engine mounts, tuned absorbers, isolated subframes, damping sheets on body panels. At the receiver: encapsulation, acoustic laminated glass, and active noise cancellation playing anti-sound through the audio system. Tyre makers fight cavity resonance with foam-lined treads; brake engineers fight squeal with shims and pad chemistry. Pass-by noise rules and brand character both drive NVH targets from the first design freeze, and NVH warranty claims explain why it is a career of its own.",
            ],
            bullets: [
              "ADAS sensor suite: camera (lanes, signs), radar (range and velocity in weather), LiDAR (3D point cloud), ultrasonic (parking).",
              "SAE J3016 ladder: L0-L1 assistance, L2 partial with driver watching, L3 conditional eyes-off, L4 geofenced driverless, L5 everywhere.",
              "NVH = noise (airborne and structure-borne), vibration (idle shake, boom), harshness (impact sharpness).",
              "Sources: combustion and rotating masses, gear mesh, tyre tread and cavity, road texture through suspension, wind leaks at mirrors and seals.",
              "Control at three points: source (balancing, detuning), path (hydro mounts, tuned absorbers, damping), receiver (encapsulation, acoustic glass, active cancellation).",
            ],
            table: {
              caption: "NVH sources and their standard fixes.",
              headers: ["Source", "Path", "Typical fix"],
              rows: [
                ["Engine idle shake", "Mounts to body", "Hydraulic mounts, counter-balance shafts"],
                ["Exhaust boom", "Pipes to floor", "Resonators, flexible decouplers"],
                ["Gear whine", "Mounts and axles", "Tooth profile and backlash tuning"],
                ["Tyre cavity noise", "Suspension", "Foam-lined tyres, bushings"],
                ["Wind noise", "Mirror wakes, seals", "Mirror design, acoustic glass"],
                ["Brake squeal", "Caliper and knuckle", "Shims, pad compound, greasing pins"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "SAE automation levels, L5 on top",
              caption:
                "Driver responsibility shrinks as you climb - the L2/L3 boundary is where the system, not the driver, becomes the fallback.",
              tiers: [
                { label: "L5 Full automation", note: "no driver, no controls, all conditions" },
                { label: "L4 High automation", note: "driverless inside a geofence - robotaxis" },
                { label: "L3 Conditional", note: "eyes off in defined conditions; hands back on request" },
                { label: "L2 Partial", note: "hands-on supervision: ACC + lane centring" },
                { label: "L0-L1 Assistance", note: "warnings and single-axis help: AEB, LDW, ACC" },
              ],
            },
            callout: {
              type: "tip",
              title: "The L2/L3 boundary",
              body: "The examiner's favourite: at L2 the driver is the fallback and must supervise; at L3 the system is the fallback within its conditions and may ask the driver to take over. One sentence on responsibility transfer answers most ADAS level questions.",
            },
            keyTerms: [
              { term: "LiDAR", definition: "A light-based ranging sensor producing precise 3D point clouds, costly and weather-sensitive." },
              { term: "Order tracking", definition: "Analysis of vibration harmonics synchronous with rpm to identify their source." },
              { term: "Structure-borne noise", definition: "Vibration travelling through solid mounts and panels before radiating as audible noise." },
            ],
            examQuestions: [
              {
                q: "Explain the SAE levels of driving automation with examples, and describe the sensors used in ADAS. Discuss the sources of NVH in automobiles and their control at the source, in the path and at the receiver.",
                marks: 7,
                outline: [
                  "List the sensor suite: camera, radar, LiDAR, ultrasonic - one capability and one limit each.",
                  "Define SAE L0-L5 briefly, with a named example at each level.",
                  "Emphasise the L2/L3 responsibility boundary - driver fallback versus system fallback.",
                  "Define NVH: noise (airborne vs structure-borne), vibration, harshness.",
                  "Sources: engine combustion and rotation, gear whine, tyre cavity, road texture, aeroacoustic leaks.",
                  "Control: source (balancing, detuning), path (hydro mounts, absorbers, damping sheets), receiver (encapsulation, acoustic glass, ANC).",
                  "Close with measurement: dB(A) weighting and order tracking.",
                ],
              },
              {
                q: "Distinguish between radar and LiDAR for ADAS applications.",
                marks: 2,
              },
              {
                q: "State three sources of NVH in a car and one countermeasure for each.",
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
      title: "Emissions and Future",
      summary:
        "Cleaning the tailpipe and electrifying the future: the three-way catalyst and EGR, particulate filters with regeneration, BS-VI norms, alternative fuels from ethanol to hydrogen, electric powertrains with battery and motor, and hybrids with connected, autonomous vehicles.",
      chapter: {
        number: "05",
        title: "Emission Control and Future Mobility",
        intro:
          "Unit V closes the loop between the automobile and its environment. Petrol aftertreatment pairs the three-way catalyst with EGR against NOx; diesel adds the DPF and SCR; BS-VI norms from April 2020 forced the whole package onto Indian roads; and the final sections look past hydrocarbons to alternative fuels, battery-electric powertrains, hybrids and the connected autonomous future.",
        inOneBreath:
          "The three-way catalyst oxidises CO and HC while reducing NOx - but only in a narrow window around lambda = 1 held by closed-loop fuelling; EGR suppresses NOx at source by cooling combustion; the wall-flow DPF traps particulate and regenerates by burning soot near 600 C; BS-VI from April 2020 cut sulphur to 10 ppm and diesel-car NOx to 0.08 g/km, forcing DPF-plus-SCR architectures; alternative fuels trade energy density for renewability from ethanol and biodiesel to CNG and hydrogen; and the future is a battery pack feeding an inverter-driven motor, in series, parallel or power-split hybrids, wrapped in connectivity and graded autonomy.",
        sections: [
          {
            number: "5.1",
            title: "Three-way catalyst and exhaust gas recirculation",
            body: [
              "A petrol engine's regulated exhaust is three gases: carbon monoxide from incomplete burning, unburnt hydrocarbons from crevices and misfires, and oxides of nitrogen cooked wherever flame temperature exceeds roughly 1500 C. The three-way catalytic converter attacks all three at once. Inside a stainless can sits a ceramic honeycomb of cordierite, coated with a washcoat of alumina that multiplies surface area, seeded with precious metals: platinum and palladium oxidise CO and HC to CO2 and water, while rhodium strips oxygen from NOx to release nitrogen. The converter's constraint is chemistry: reduction needs a slightly rich mixture, oxidation a lean one, so both work only in a narrow window around lambda = 1 - which is exactly what closed-loop fuelling exists to hold.",
              "Two practical behaviours matter. Light-off: the catalyst needs about 250-300 C to work, so modern cars mount a close-coupled converter right behind the exhaust manifold to reach temperature within the first minute, backed by a second underbody unit. Poisoning: lead irreversibly coats the active metals - the engineering reason unleaded petrol became mandatory - and sulphur competes for sites. Ceria in the washcoat stores and releases oxygen to buffer the lambda swings of a live engine. Note that a diesel's lean exhaust cannot use a three-way catalyst: its NOx goes to EGR at source and SCR downstream.",
              "Exhaust gas recirculation attacks NOx where it forms. Bleeding 5-20% of spent exhaust back into the intake replaces fresh charge with inert gas - mostly CO2 and water vapour - which slows combustion and lowers peak flame temperature; thermal NOx formation collapses. External EGR runs through a valve and, in modern engines, a cooler that densifies the charge for more effect; internal EGR exploits valve overlap to trap residuals. The ECU schedules the rate from its rpm-load map. The price is a small power loss and, at high rates, soot deposits and rising HC; both petrol and diesel engines use it, and it pairs with the catalyst rather than competing with it.",
            ],
            bullets: [
              "Three pollutants: CO (incomplete oxidation), HC (crevices, misfire, quench), NOx (flame temperature above about 1500 C).",
              "Three-way catalyst: cordierite honeycomb, alumina washcoat, Pt and Pd oxidise CO/HC, Rh reduces NOx; ceria buffers oxygen.",
              "Narrow window: lambda = 1 (14.7:1) held by closed-loop fuelling - the catalyst's non-negotiable requirement.",
              "Light-off at 250-300 C explains close-coupled converters; lead and sulphur poison the precious metals - hence unleaded fuel.",
              "EGR: 5-20% inert exhaust lowers peak flame temperature and thermal NOx; cooled and internal variants; small power penalty.",
            ],
            table: {
              caption: "Pollutants, their causes and their cures.",
              headers: ["Pollutant", "Formed by", "Controlled by"],
              rows: [
                ["CO", "Rich mixture, incomplete oxidation", "Oxidised in the catalyst (Pt, Pd)"],
                ["HC", "Crevices, quench layers, misfire", "Oxidised in the catalyst; EGR tuned"],
                ["NOx", "High flame temperature, spare oxygen", "Reduced by Rh; prevented by cooled EGR"],
                ["PM (diesel)", "Diffusion combustion, rich zones", "DPF and cleaner CRDI injection (Unit V, next section)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The petrol exhaust route",
              caption:
                "From valve to tailpipe with the catalyst's two guards: the lambda sensor upstream, EGR taken off early.",
              steps: [
                { label: "Exhaust manifold", note: "gases at 400-900 C" },
                { label: "Lambda sensor", note: "reports rich or lean to the ECU" },
                { label: "EGR take-off", note: "up to 20% inert gas back to the intake" },
                { label: "Close-coupled three-way catalyst", note: "Rh reduces NOx; Pt, Pd oxidise CO and HC" },
                { label: "Underbody catalyst + muffler", note: "polishing and silencing" },
              ],
            },
            callout: {
              type: "exam",
              title: "Write the equations",
              body: "Three short equations anchor the catalyst answer: 2CO + O2 gives 2CO2; 2C2H6 + 7O2 gives 4CO2 + 6H2O; 2NO gives N2 + O2. Then state the lambda = 1 window and why the sensor closes the loop. Chemical equations are the fastest marks in this unit.",
            },
            keyTerms: [
              { term: "Three-way catalyst", definition: "A converter that simultaneously oxidises CO and HC and reduces NOx within a narrow lambda window." },
              { term: "Light-off temperature", definition: "The temperature (about 250-300 C) at which a catalyst becomes effective." },
              { term: "Exhaust gas recirculation", definition: "Rebreathe of inert exhaust into the intake to lower peak combustion temperature and NOx." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a three-way catalytic converter with the chemical reactions involved, and the reason it needs closed-loop fuelling. Explain how EGR reduces NOx formation and its types and side effects.",
                marks: 7,
                outline: [
                  "Construction: stainless shell, cordierite honeycomb, alumina washcoat, Pt/Pd/Rh loading, ceria oxygen store.",
                  "Reactions: 2CO + O2 to 2CO2; hydrocarbons to CO2 and H2O; 2NO to N2 + O2.",
                  "The conflict: NOx reduction needs rich, CO/HC oxidation needs lean - resolution in the lambda = 1 window.",
                  "Closed loop: lambda sensor trims fuelling to hold the window; ceria buffers transients.",
                  "Light-off near 250-300 C explains close-coupled converters; lead poisoning explains unleaded petrol.",
                  "EGR: 5-20% inert exhaust lowers peak flame temperature, killing thermal NOx; cooled and internal types.",
                  "Side effects: power loss, soot deposits, HC rise at high rates - used on petrol and diesel alike.",
                ],
              },
              {
                q: "Why is unleaded petrol mandatory for cars fitted with catalytic converters?",
                marks: 2,
              },
              {
                q: "Explain how EGR reduces NOx and state two of its side effects.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Diesel particulate filter and BS-VI norms",
            body: [
              "Diesel particulate matter - carbon soot carrying adsorbed hydrocarbons and sulphates - is the emission diesel engines cannot hide. The wall-flow DPF answers it: a honeycomb of cordierite or silicon carbide in which alternate channel ends are plugged, so exhaust must force its way through porous walls, depositing particles with better than 90% efficiency by mass. Soot accumulates in the walls and raises backpressure; the engine spends more fuel pushing gas through, so the filter must periodically clean itself. Ash from oil additives also accumulates, and unlike soot it cannot be burned out - it is removed only by workshop cleaning or replacement.",
              "Regeneration is controlled soot combustion, and temperature is the whole problem: soot oxidises near 550-600 C while diesel exhaust normally runs 200-400 C. Passive regeneration exploits chemistry - with an upstream oxidation catalyst making NO2, soot oxidises continuously at 300-450 C, but it needs favourable duty cycles. Active regeneration is the common path: the ECU's soot model (differential-pressure based) detects loading, then post-injection, intake throttling and retarding raise exhaust temperature to about 600 C and the soot burns to CO2. Cars used only for short urban trips never complete a regen and arrive at the workshop with a blocked DPF - a highway run is the classic prescription.",
              "BS-VI, enforced from 1 April 2020 by skipping BS-V entirely, is the regulatory frame that made all this hardware compulsory. Sulphur fell from 50 to 10 ppm - the enabler for particulate filters and advanced catalysts. Diesel-car NOx limits fell from 0.25 to 0.08 g/km (about 68% down) and particulate mass from 0.025 to 0.0045 g/km (about 82% down); petrol NOx tightened from 0.08 to 0.06 g/km. Real-driving emissions testing and mandatory OBD closed the loopholes. Diesel aftertreatment became a chain - EGR at source, then oxidation catalyst, DPF, SCR with urea (DEF) reducing NOx over a catalyst, and an ammonia-slip catalyst to finish.",
            ],
            bullets: [
              "Wall-flow DPF: plugged alternate channels force gas through porous walls - over 90% PM capture; soot raises backpressure, ash is permanent.",
              "Regeneration burns soot to CO2 - needs about 550-600 C against normal exhaust of 200-400 C.",
              "Passive regen: NO2-assisted oxidation at 300-450 C (continuous regeneration trap); Active regen: post-injection lifts exhaust to about 600 C on ECU command.",
              "Urban-only duty cycles block DPFs; interrupted regeneration triggers limp-home and workshop cleaning.",
              "BS-VI (April 2020, skipping BS-V): sulphur 10 ppm, diesel NOx 0.08 g/km, PM 0.0045 g/km, petrol NOx 0.06 g/km, plus RDE and OBD.",
            ],
            table: {
              caption: "BS-IV versus BS-VI for passenger cars (mass emission stage limits).",
              headers: ["Parameter", "BS-IV", "BS-VI"],
              rows: [
                ["Sulphur in fuel", "50 ppm", "10 ppm"],
                ["Diesel NOx", "0.25 g/km", "0.08 g/km"],
                ["Diesel PM mass", "0.025 g/km", "0.0045 g/km"],
                ["Petrol NOx", "0.08 g/km", "0.06 g/km"],
                ["Implementation", "2017", "1 April 2020 (BS-V skipped)"],
                ["Additions", "Lab cycle only", "RDE + mandatory OBD"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "DPF: load, trigger, burn, repeat",
              caption:
                "The regeneration duty cycle every diesel engine now lives by.",
              steps: [
                { label: "Soot accumulates in the walls", note: "captured during normal driving" },
                { label: "Differential pressure rises", note: "the ECU soot model tracks loading" },
                { label: "Active regeneration triggered", note: "post-injection lifts exhaust to about 600 C" },
                { label: "Soot oxidises to CO2", note: "filter clears; ash remains" },
                { label: "Backpressure falls", note: "duty cycle repeats" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numbers examiners check",
              body: "Quote four figures and the BS-VI answer writes itself: sulphur 10 ppm, diesel NOx 0.25 to 0.08 g/km, PM 0.025 to 0.0045 g/km, implementation 1 April 2020 with BS-V skipped. Approximate but correct numbers beat vague prose every time.",
            },
            keyTerms: [
              { term: "Wall-flow filter", definition: "A DPF whose plugged alternate channels force gas through porous soot-collecting walls." },
              { term: "Active regeneration", definition: "ECU-triggered raising of exhaust temperature to about 600 C to burn accumulated soot." },
              { term: "DEF (diesel exhaust fluid)", definition: "Urea solution injected upstream of the SCR catalyst, where it releases ammonia to reduce NOx." },
            ],
            examQuestions: [
              {
                q: "Explain the construction and working of a diesel particulate filter with the regeneration process. Compare BS-IV and BS-VI norms with the key numeric limits and describe the complete diesel aftertreatment chain.",
                marks: 7,
                outline: [
                  "Construction: cordierite or SiC honeycomb, alternate plugged channels, porous walls, over 90% capture.",
                  "Soot raises backpressure; ash from oil additives is permanent - workshop removal only.",
                  "Regeneration need: soot oxidises near 550-600 C, exhaust normally 200-400 C.",
                  "Passive regen with NO2 at 300-450 C via an upstream oxidation catalyst; active regen by post-injection to about 600 C.",
                  "Blocked-DPF case: short urban trips never complete regeneration.",
                  "BS-VI table: sulphur 10 ppm, diesel NOx 0.08 g/km, PM 0.0045 g/km, petrol NOx 0.06 g/km, RDE and OBD.",
                  "Chain: EGR, DOC, DPF, SCR with DEF, ammonia-slip catalyst.",
                ],
              },
              {
                q: "Why does BS-VI fuel need sulphur as low as 10 ppm?",
                marks: 2,
              },
              {
                q: "Differentiate passive and active DPF regeneration.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Alternative fuels",
            body: [
              "Three pressures push beyond petrol and diesel: finite petroleum and import bills, urban air quality, and carbon. An alternative fuel is judged on a checklist the examiner expects: energy density by mass and volume, octane or cetane rating as relevant, vapour pressure and cold start, storage and safety, corrosive effects on fuel lines, availability and cost per kilometre. Alcohols come first in the syllabus: ethanol blends readily with petrol, has an octane number near 109 and carries oxygen in the molecule for cleaner CO and HC - but its energy density is only about two-thirds of petrol (27 versus 44 MJ/kg), so jets must flow more, and it is hygroscopic and corrosive to some metals and rubbers. India's blending programme targets E10 and E20; flex-fuel engines adjust fuelling to whatever blend arrives.",
              "Gaseous fuels trade storage pain for clean burning. CNG - mostly methane at about 200 bar - has an octane number near 120, cuts PM and NOx sharply and costs little per kilometre, which is why taxis and three-wheelers adopted it; the cylinders are heavy and eat boot space, and the refuelling network is still thin. LPG, a propane-butane mix liquid at modest pressure, stores easily but is imported. Biodiesel (FAME from vegetable oils) runs in diesels at B5-B20 with a cetane number above 50 and better lubricity, gelling in cold weather and leaving deposits if unmanaged.",
              "Hydrogen is the extreme case: about 120 MJ/kg - nearly three times petrol - and zero tailpipe emissions bar NOx if burned in an engine; a fuel-cell stack turns it to electricity quietly at high efficiency. But its volumetric density is dismal, demanding 350-700 bar cylinders or cryogenic liquid, the infrastructure barely exists, and most hydrogen today is made from natural gas. Electricity is the other endgame - judged well-to-wheel, it is only as clean as the grid. Map every fuel on two axes - state of matter and fossil versus renewable - and the classification question answers itself.",
            ],
            bullets: [
              "Selection checklist: energy density (mass and volume), octane or cetane, vapour pressure and cold start, storage safety, corrosion, availability, cost per km.",
              "Ethanol: octane about 109, oxygenated, cleaner CO and HC; energy about 27 MJ/kg (two-thirds of petrol) - bigger flows, hygroscopic, corrosive to some parts; E10/E20 blending, flex-fuel engines.",
              "CNG: methane at about 200 bar, octane near 120, very low PM and NOx, cheap running; heavy cylinders, boot space, thin network. LPG stores as liquid at low pressure.",
              "Biodiesel (B5-B20): cetane above 50, good lubricity; cold-flow and deposit issues.",
              "Hydrogen: about 120 MJ/kg and zero tailpipe (NOx if burned), but needs 350-700 bar storage or cryogenics; fuel cells convert it to electricity.",
            ],
            table: {
              caption: "Approximate energy content and rating of alternative fuels.",
              headers: ["Fuel", "State on board", "Energy (MJ/kg)", "Rating", "Chief hurdle"],
              rows: [
                ["Petrol", "Liquid", "44", "ON 91-99", "Baseline fossil"],
                ["Diesel", "Liquid", "43", "CN 48-55", "PM and NOx"],
                ["Ethanol", "Liquid", "27", "ON ~109", "Energy per litre; corrosive"],
                ["Biodiesel", "Liquid", "38", "CN 51-65", "Cold flow, deposits"],
                ["CNG", "Gas, 200 bar", "50", "ON ~120", "Cylinder mass and space"],
                ["Hydrogen", "Gas, 350-700 bar", "120", "ON ~130 (ICE)", "Storage and infrastructure"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Classifying alternative fuels",
              caption:
                "Two axes settle every classification question: state of matter against carbon origin.",
              axes: {
                x: "State: liquid (left) to gaseous (right)",
                y: "Origin: fossil (top) to renewable (bottom)",
              },
              quadrants: [
                { label: "Petrol, diesel, LPG", note: "energy dense and convenient - but finite and carbon-positive" },
                { label: "CNG, LNG", note: "cleaner-burning fossil gases stored under pressure" },
                { label: "Ethanol, biodiesel blends", note: "drop-in renewables for existing engines" },
                { label: "Biogas, green hydrogen", note: "renewable gases - storage and infrastructure remain hurdles" },
              ],
            },
            callout: {
              type: "tip",
              title: "Explain the jet size question",
              body: "Whenever you mention ethanol or CNG, add the follow-up in one line: lower energy per unit means the engine meters more fuel for the same power. That single causal sentence shows understanding beyond the property table and covers the examiner's favourite probe.",
            },
            keyTerms: [
              { term: "Octane number", definition: "A fuel's resistance to knock in spark-ignition engines; higher allows higher compression." },
              { term: "Flex-fuel engine", definition: "An engine whose fuelling adapts automatically to any alcohol-petrol blend in range." },
              { term: "Energy density", definition: "Energy stored per unit mass (or volume) of fuel - the master property of the selection checklist." },
            ],
            examQuestions: [
              {
                q: "List the desirable properties of an alternative automobile fuel. Discuss CNG and ethanol as alternatives to petrol - properties, merits, demerits and required engine modifications - and mention the hydrogen pathway.",
                marks: 7,
                outline: [
                  "State the checklist: energy density, octane or cetane, volatility, storage safety, corrosion, availability, cost.",
                  "CNG: methane at 200 bar, octane near 120, low PM and NOx, cheap running; demerits: cylinders, boot space, network.",
                  "Modifications for CNG: storage cylinders, pressure regulator, gas mixer or injection, hardened valve seats.",
                  "Ethanol: octane 109, oxygenated, cleaner CO and HC; energy 27 MJ/kg, hygroscopic, corrosive - needs bigger flow and compatible materials.",
                  "Blends: E10/E20 mandates and flex-fuel sensor-based fuelling; biodiesel B5-B20 for diesels.",
                  "Hydrogen: 120 MJ/kg, zero tailpipe; storage at 350-700 bar or cryogenic; fuel cell route.",
                  "Conclude with the liquid-gaseous x fossil-renewable classification map.",
                ],
              },
              {
                q: "Why does a hydrogen tank offer the highest energy per kilogram yet the poorest per litre?",
                marks: 2,
              },
              {
                q: "State three merits and three demerits of CNG as an automotive fuel.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Electric vehicles: battery, motor and powertrain",
            body: [
              "An EV replaces the tank-engine-gearbox stack with battery, inverter and motor. The battery pack is hundreds of lithium-ion cells in series and parallel, grouped into modules and supervised by the battery management system - cell voltages, temperatures, balancing, contactors, and estimates of state of charge and health. Chemistries trade virtues: NMC packs more energy per kilogram for a given range; LFP is cheaper, safer and lasts longer. Pack voltages run from about 300 to 800 V; the pack is a third of the vehicle's cost, and its specific energy - roughly 150-250 Wh/kg - sets the range.",
              "The power electronics are the muscle. The on-board charger converts AC from a wallbox to DC at maybe 7-11 kW; DC fast charging bypasses it entirely, pushing 50-350 kW but tapering above about 80% to protect the cells. The inverter - IGBT or increasingly silicon-carbide MOSFET switches - synthesises three-phase AC of variable frequency and amplitude from the DC link, and the traction motor turns it into torque: permanent-magnet synchronous machines for efficiency, induction machines for robustness and cost. Because an electric motor gives maximum torque from zero rpm across a wide efficient band, a single-speed reduction gear replaces the multi-ratio gearbox entirely; regenerative braking simply runs the machine backwards as a generator.",
              "Thermal management decides both range and life: cells are happiest between about 15 and 35 C - cold winters cut range and hot summers age cells, so liquid-cooled plates hold the temperature and, rarely discussed, must also prevent cell-to-cell propagation of a thermal runaway. Efficiency is the headline: 85-90% plug-to-wheel against roughly 25-35% tank-to-wheel for the best combustion cars, with quietness, instant torque and home charging as quality-of-life bonuses. The honest debits: purchase cost dominated by the battery, charging time measured in tens of minutes, range anxiety on paper if not in practice, and grid carbon intensity deciding the true footprint.",
            ],
            bullets: [
              "Pack architecture: cells to modules to pack, 300-800 V, NMC (energy) versus LFP (cost, safety, life); BMS supervises voltages, temperatures, balancing, contactors.",
              "Inverter synthesises variable-frequency three-phase AC from the DC link - IGBT or SiC MOSFET switches.",
              "Motor choice: permanent-magnet synchronous for efficiency, induction for robustness; full torque from zero rpm.",
              "Single-speed reduction replaces the gearbox; regen runs the motor as a generator back into the pack.",
              "Charging: AC 7-11 kW overnight, DC 50-350 kW tapering above 80%; efficiency 85-90% plug-to-wheel versus 25-35% tank-to-wheel.",
            ],
            codeExample: {
              language: "python",
              caption:
                "Range estimate and a fast-charge time model for a 40 kWh EV.",
              code: `# Range and charging estimate for a 40 kWh EV
capacity = 40.0          # usable battery energy, kWh
consumption = 0.155      # kWh per km at a steady 60 km/h
regen_recovery = 0.18    # share of braking energy city driving recovers

hwy_range = capacity / consumption
city_base = consumption * 1.05           # stop-start penalty
city_effective = city_base * (1 - regen_recovery)
city_range = capacity / city_effective

print(f"highway range ~ {hwy_range:.0f} km")
print(f"city range with regen ~ {city_range:.0f} km")

# Fast charge model: 100 kW to 60%, then taper to 25 kW
energy, minutes = 0.0, 0.0
target = 0.8 * capacity
while energy < target:
    power = 100.0 if energy < 0.6 * capacity else 25.0
    energy += power / 60.0
    minutes += 1.0
print(f"0 to 80% in about {minutes:.0f} minutes")`,
            },
            diagram: {
              kind: "flow",
              title: "Grid to road: the EV energy path",
              caption:
                "The path that replaces tank-to-engine - and regen walks it in reverse.",
              steps: [
                { label: "Grid / charging point", note: "AC wallbox or DC fast charger" },
                { label: "On-board charger / DC inlet" },
                { label: "High-voltage battery pack", note: "300-800 V under BMS supervision" },
                { label: "Inverter", note: "DC to variable-frequency three-phase AC" },
                { label: "Traction motor + reduction gear" },
                { label: "Wheels", note: "regeneration reverses this path" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why one gear is enough",
              body: "The standard viva probe: why no multi-speed gearbox in an EV? Because the motor delivers full torque from zero rpm and stays efficient across a wide speed band, one fixed reduction covers creep to motorway. One causal sentence - torque availability, not habit - is the full answer.",
            },
            keyTerms: [
              { term: "Battery management system", definition: "The electronics supervising cell voltages, temperatures, balancing and contactors, and estimating SOC and SOH." },
              { term: "Inverter", definition: "The power-electronic stage converting DC battery voltage to variable-frequency three-phase AC for the motor." },
              { term: "State of charge", definition: "The present energy in a battery expressed as a percentage of its usable capacity." },
            ],
            examQuestions: [
              {
                q: "Explain the layout and working of a battery electric vehicle with a block diagram covering battery pack, BMS, inverter, motor and charging. State why a single-speed transmission suffices, and compare EV efficiency with the IC engine.",
                marks: 7,
                outline: [
                  "Block diagram: grid, charger, pack, BMS, inverter, motor, reduction gear, wheels.",
                  "Pack: series-parallel cells, modules, 300-800 V, NMC versus LFP chemistry trade-offs.",
                  "BMS duties: monitoring, balancing, thermal supervision, contactor control, SOC and SOH estimation.",
                  "Inverter and motor: PMSM versus induction; torque from zero rpm across the band.",
                  "Single-speed reduction because of the torque curve - contrast with the ICE's narrow band.",
                  "Charging: AC 7-11 kW, DC 50-350 kW with taper; regenerative braking path.",
                  "Efficiency: 85-90% plug-to-wheel against 25-35% tank-to-wheel; close with cost and charging-time debits.",
                ],
              },
              {
                q: "List the functions of a battery management system.",
                marks: 2,
              },
              {
                q: "Why do electric vehicles not need a multi-ratio gearbox?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Hybrids, autonomous and connected vehicles",
            body: [
              "Hybrids graduate electrification through stages. Micro hybrids add only stop-start; mild hybrids bolt a 48 V belt-starter-generator that assists the engine but cannot drive alone. Full hybrids drive on engine, motor or both: in a series hybrid the engine only spins a generator and the motor drives the wheels - efficient in stop-go traffic but paying double-conversion losses on the highway; in a parallel hybrid one clutch lets engine and motor torque the same shaft together; the power-split hybrid uses a planetary gear set to blend both paths, the Toyota Prius archetype. Plug-in hybrids (PHEV) enlarge the battery for 30-80 km of electric range before behaving as full hybrids. The payoff is city fuel savings of 30-50% with engine downsizing and Atkinson-cycle efficiency.",
              "Autonomous driving is a pipeline: sense, perceive, plan, control. Cameras, radar, LiDAR, ultrasonics and GPS feed a sensor-fusion layer that builds the world model - objects, lanes, free space; planners choose route, behaviour and trajectory; controllers actuate steering, brakes and throttle through the same by-wire systems ADAS already uses. The SAE levels of the previous section grade the result, and the unsolved problems are engineering and social at once: rare edge cases, the impossible validation of billions of kilometres, liability and ethics, and the redundancy a machine needs to fail safely.",
              "Connectivity is the third strand. V2V lets vehicles share position and intent; V2I talks to signals and infrastructure; V2X covers everything, including pedestrians' phones. Over-the-air updates keep software fresh and fixed without a workshop visit; fleets feed each other HD maps and learned trajectories; telematics enable usage-based insurance; and cybersecurity becomes a safety property - standards like ISO/SAE 21434 govern it. Together the strands form the software-defined vehicle: electric for its clean, controllable powertrain; connected for data; autonomous on top. Indian roads see ADAS features arriving with BS-VI stage 2 and a growing policy push, with robotaxi pilots on the horizon.",
            ],
            bullets: [
              "Hybrid ladder: micro (stop-start), mild (48 V assist), full (series, parallel, power-split), plug-in (30-80 km electric range).",
              "Series: engine generates, motor drives - city-efficient, double-conversion loss on highway; Parallel: both torque one shaft; Power-split: planetary set blends paths (Prius).",
              "Autonomy pipeline: sense (radar, camera, LiDAR) -> perceive (fusion, world model) -> plan (route, behaviour, trajectory) -> control (by-wire actuators).",
              "V2V, V2I and V2X connect vehicles to each other, signals and everything; OTA updates and fleet learning keep software current.",
              "Cybersecurity is a safety property (ISO/SAE 21434); the strands converge in the software-defined vehicle.",
            ],
            table: {
              caption: "Hybrid configurations compared.",
              headers: ["Configuration", "Engine drives wheels?", "Electric-only drive?", "Best known for"],
              rows: [
                ["Series", "No - only a generator", "Yes", "City buses, range-extenders"],
                ["Parallel", "Yes", "Assist only", "Mild hybrids, many Hondas"],
                ["Power-split", "Yes, via planetary set", "Yes", "Toyota Prius family"],
                ["Plug-in (PHEV)", "Yes", "Yes, 30-80 km", "Wall-chargeable commuters"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The autonomous driving pipeline",
              caption:
                "Sense, perceive, plan, control - every self-driving architecture, from research car to robotaxi, is these four stages.",
              stages: [
                { label: "Sense", note: "camera, radar, LiDAR, ultrasonic, GPS" },
                { label: "Perceive", note: "sensor fusion: objects, lanes, free space" },
                { label: "Plan", note: "route, behaviour, trajectory" },
                { label: "Control", note: "steering, brake and throttle actuators" },
                { label: "Learn", note: "fleet data and OTA updates feed back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Arrows decide marks",
              body: "In hybrid sketches, the direction of energy arrows is the whole answer: series shows engine to generator to motor to wheels (never engine to wheels); parallel shows both engine and motor arrowing into the wheels. Draw two small diagrams and label the torque paths - examiners check the arrows, not the artistry.",
            },
            keyTerms: [
              { term: "Series hybrid", definition: "A hybrid whose engine only generates electricity while an electric motor drives the wheels." },
              { term: "Power-split hybrid", definition: "A hybrid using a planetary gear set to combine engine and motor power paths." },
              { term: "V2X", definition: "Vehicle-to-everything communication covering vehicles, infrastructure and other road users." },
            ],
            examQuestions: [
              {
                q: "Classify hybrid electric vehicles with diagrams of series, parallel and power-split configurations, stating the merits of each. Explain the sense-perceive-plan-control pipeline of an autonomous vehicle and the meaning of V2V, V2I and V2X.",
                marks: 7,
                outline: [
                  "Define the hybrid ladder: micro, mild, full and plug-in with their voltages and ranges.",
                  "Series diagram: engine to generator to motor to wheels; merits in city duty, demerit of double conversion.",
                  "Parallel diagram: engine and motor both torque the shaft; simple, cheap, assist-only electric drive.",
                  "Power-split: planetary gear set blending both paths - the Prius compromise.",
                  "PHEV: 30-80 km plug-in range before operating as a full hybrid.",
                  "Autonomy pipeline: sense, perceive (fusion), plan, control - one line each with its sensors and outputs.",
                  "V2V, V2I, V2X definitions and OTA updates; close with cybersecurity as a safety property.",
                ],
              },
              {
                q: "What is an over-the-air (OTA) update and why has it become important?",
                marks: 2,
              },
              {
                q: "Differentiate between V2V and V2I communication.",
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
        "RGPV ME-802(A) papers typically spread 65-80 marks across labelled-sketch questions (clutch, gearbox, differential, MacPherson strut, AC circuit, catalytic converter) and system-explanation essays (MPFI, CRDI, ABS, ESC), with numericals appearing from braking, performance and injection. Allocate revision in roughly that ratio, and keep at least one full sketch practice per major component regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Clutch, synchromesh gearbox and differential: construction + working", weight: "8-10 marks", note: "Three guaranteed sketches; practise each with labels and one equation or condition." },
        { topic: "MPFI and CRDI: layout, sensors, closed loop, multiple injections", weight: "8-10 marks", note: "Sensor-to-ECU-to-actuator chain with the lambda loop and pilot-main-post table." },
        { topic: "Hydraulic brakes with drum/disc comparison + ABS and EBD", weight: "8-10 marks", note: "Master cylinder section, Pascal force chain, mu-slip curve and modulator action." },
        { topic: "Steering geometry: Ackermann condition and alignment angles", weight: "6-8 marks", note: "Derive cot(theta_o) - cot(theta_i) = c/l; know the wear pattern for each wrong angle." },
        { topic: "Battery, starting and charging systems", weight: "6-8 marks", note: "Solenoid dual role, overrunning clutch, alternator regulation with diagnosis shorts." },
        { topic: "Catalytic converter, EGR and BS-VI/DPF aftertreatment", weight: "6-8 marks", note: "Three equations, lambda window, regeneration cycle and the BS-VI number set." },
        { topic: "EV powertrain and hybrid classification", weight: "6-8 marks", note: "Grid-to-wheels diagram, BMS, inverter; series-parallel-power-split sketches with arrows." },
        { topic: "Suspension: MacPherson strut, rigid vs independent", weight: "5-7 marks", note: "Labelled strut sketch plus the comparison table earns full marks quickly." },
        { topic: "Air conditioning cycle with state labels", weight: "5-7 marks", note: "Loop diagram with gas/liquid and pressure written at every station." },
        { topic: "Chassis, frames, layouts and aerodynamics", weight: "5-7 marks", note: "Definitions plus the drag formula and its v-cubed power consequence." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers and sketch drills under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the vehicle itself", tasks: ["Chassis classification and frame sketches (3 drawings)", "Layout table + aerodynamic drag formula with a worked top-speed idea", "Tyre construction, slip angle, resistance numericals (10 sums)"] },
        { week: "Week 2", focus: "Unit II part 1 - fuel systems and clutch", tasks: ["MPFI block diagram + lambda closed loop drawn from memory", "CRDI pipeline, pilot-main-post table, pressure classes memorized", "Single-plate clutch section sketch + T = mu n W Rm numericals"] },
        { week: "Week 3", focus: "Unit II part 2 - transmission", tasks: ["Synchromesh unit sketch with blocker ring story", "Planetary set rule and torque converter trio written 5 times", "Differential bevel-gear sketch, straight-ahead and cornering cases"] },
        { week: "Week 4", focus: "Unit III - steering, suspension, brakes", tasks: ["Ackermann derivation until reproducible cold", "MacPherson strut + suspension comparison table", "Brake force-chain numerical (8 sums) + ABS/EBD block diagrams"] },
        { week: "Week 5", focus: "Unit IV - electricals and safety", tasks: ["Starting circuit, alternator and OBD code meanings", "AC loop with state labels + heating/blend door notes", "ESC corrections, airbag timeline, SAE pyramid, NVH sources table"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Catalyst equations, EGR, DPF cycle, BS-VI number drill", "EV path diagram + hybrid sketches with energy arrows", "Two full past papers under exam timing + all 10 sketches redrawn"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last-day rescue plan",
      bullets: [
        "Redraw the big six sketches from memory: single-plate clutch, synchromesh unit, differential, MacPherson strut, AC loop, catalytic converter - any you cannot finish in five minutes is tonight's revision.",
        "Memorize the number set: stoichiometric 14.7:1, CRDI up to about 2000 bar, light-off 250-300 C, DPF regen about 600 C, BS-VI sulphur 10 ppm, diesel NOx 0.08 g/km, battery 12.6 V, regulated charge 14.2-14.6 V.",
        "Rewrite the formula sheet: drag 0.5 rho Cd A v^2, tractive balance, Ackermann cot condition, clutch torque T = mu n W Rm, slip ratio definition.",
        "Drill the classification lists - chassis types, layouts, clutch types, gearbox types, diff types, hybrid types, SAE levels - they are the fastest 2-3 mark sweep in the paper.",
        "Skim every 7-mark outline in this guide; the first and last lines of each outline are what examiners read first and reward first.",
        "Sleep. An automobile paper rewards labelled sketches and clean numericals, and both need a rested hand.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every sketch is worth its labels: clutch section, gearbox synchronizer, differential, strut, AC loop, catalyst - name ten parts or lose half the marks.",
        "For numericals: formula, substitution, computation, boxed answer with units - most marks die in skipped substitutions, not wrong physics.",
        "Answer classification questions with a table (type, construction, application); examiners mark tabulated comparisons faster and fuller than prose.",
        "Attempt sketch-based questions first while your hand is fresh; keep essay questions (MPFI, ESC, BS-VI) for the second half when words flow easier.",
        "Time-box: 2-mark shorts in 3-4 minutes, 7-mark questions in 15 minutes with at least a labelled sketch plus six outline points; reserve 10 minutes to check numbers and labels.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing that an open differential sends torque to the gripping wheel - it splits torque 50:50 always; only the speeds differ.",
        "Calling airbags the primary restraint - they are SRS, supplemental to the belt, and they deploy only in severe impacts.",
        "Mixing BS-IV and BS-VI numbers - write the BS-VI set as sulphur 10 ppm, diesel NOx 0.08 g/km, PM 0.0045 g/km, dated 1 April 2020.",
        "Forgetting the lambda = 1 window when explaining the three-way catalyst - reduction and oxidation conflict outside it.",
        "Drawing CRDI without the rail-as-accumulator line, or quoting injection pressures of a few hundred bar - production common rail runs up to about 2000 bar.",
        "Swapping camber and caster - camber is viewed from the front (tyre tilt), caster from the side (axis lean); the wear patterns follow the correct one.",
      ],
    },
  ],
};
