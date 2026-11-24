/**
 * Academics - RGPV Civil Engineering 5th-semester subject: CE-502
 * Transportation Engineering II.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries 3 body paragraphs (~100 words
 * each), 5+ bullets, a diagram, a callout, a table or code sample, 3+
 * key terms and 3 exam-style questions (one 7-mark with outline + two
 * shorts).
 */

import type { AcademicSubject } from "./types";

export const ce502: AcademicSubject = {
  id: "ce-502",
  code: "CE-502",
  title: "Transportation Engineering II",
  semester: "V Semester",
  program: "RGPV \u00b7 Civil Engineering",
  tagline:
    "The complete visual guide to transportation engineering II for civil engineers: railway permanent way and signalling, airport planning and runway design, bridge components and IRC loading, harbour and tunnel engineering, and traffic studies with flexible and rigid pavement design.",
  description:
    "Five units walk from the permanent way of a railway - gauge, rails, sleepers, ballast, fastenings, turnouts, stations, yards and signalling - through airport planning, site selection, wind-rose runway orientation, runway and taxiway design and airport lighting; across bridge components, classification, abutments, piers, foundations, superstructure types and IRC loading; into harbour components, breakwaters, docks, tunnel sections, alignment, tunneling methods, ventilation and lining; and finally to traffic studies, signs and signals, intersections, IRC road classification, flexible and rigid pavement design, and the ESWL and equivalent wheel load concepts. Every section pairs the textbook theory with a worked numerical, a redrawable diagram and three exam-style questions including one full 7-mark answer outline.",
  accentColor: "#f59e0b",
  emoji: "TE",
  unitCount: 5,
  totalSections: 25,
  units: [
    // =========================== UNIT I - RAILWAY ENGINEERING ===========================
    {
      number: 1,
      roman: "I",
      title: "Railway Engineering",
      summary:
        "The permanent way of a railway - the gauge, the rails, the sleepers and ballast, the fastenings, the points and crossings, and the stations, yards and signals that govern train movement.",
      chapter: {
        number: "01",
        title: "Railway Engineering",
        intro:
          "Unit I assembles the railway from the ground up: the gauge that sets the width of the track, the rails that carry the wheel, the sleepers and ballast that distribute the load, the fastenings and turnouts that hold and route the rail, and the stations, yards and signals that receive, sort and protect the train.",
        inOneBreath:
          "Gauge is the clear distance between inner rail faces, fixed once for the whole route; broad 1676 mm, metre 1000 mm, narrow 762 and 610 mm; rails are 52-60 kg/m vignoles steel welded into CWR; sleepers of prestressed concrete at 600 mm spacing carry elastic clips; ballast of 20-50 mm crushed stone gives a 250 mm cushion; turnouts of 1 in 8.5 to 1 in 16 switch trains between tracks; the block system and colour-light signals keep one train per section.",
        sections: [
          {
            number: "1.1",
            title: "Railway components and gauges",
            body: [
              "Railway engineering concerns the planning, design, construction and maintenance of the permanent way and the rolling stock that runs on it. The permanent way is the assembled track of rails, sleepers, ballast and subgrade that carries the wheel loads of locomotives and wagons. A railway system is wider than the track alone: it includes the rolling stock, the stations and yards, the signalling and telecommunication, and the traction system. Together these form an integrated transport mode whose high capacity and low rolling resistance make it the natural choice for medium-distance passenger and bulk freight movement. The gauge is the most fundamental parameter of the track, fixed once and held for the whole route.",
              "Gauge is the minimum perpendicular distance between the inner faces of the two rails, measured 14 mm below the running surface. Indian Railways uses the broad gauge of 1676 mm, the metre gauge of 1000 mm and narrow gauges of 762 mm and 610 mm; the ongoing Project Unigauge converts all routes to broad gauge for speed and capacity. A uniform gauge allows through running without transshipment, lowers freight cost and raises the speed potential. Mixed gauge on one route forces bogie changes or transshipment at interchange, adding time, labour and damage to every consignment handled at the change point.",
              "The choice of gauge depends on traffic volume, alignment cost, speed requirement and the strategic need for through connection. Broad gauge suits trunk routes carrying dense traffic; metre and narrow gauges survive on hill railways and lightly trafficked branches where capital cost dominates. The gauge once fixed governs the radius of curves, the size of rolling stock, the dimensions of platforms and tunnels, and the entire economics of operation. Re-gauging an existing line means lifting the rails, re-laying sleepers to a new spacing and rebuilding every platform and turnout, which is why conversion is staged over years rather than done in a single block.",
            ],
            bullets: [
              "Permanent way: rails, sleepers, ballast, subgrade and fittings carrying rolling stock wheel loads.",
              "Gauge: clear minimum distance between inner faces of rails 14 mm below the running surface.",
              "Broad gauge 1676 mm is the Indian standard; metre 1000 mm and narrow 762/610 mm survive on branch lines.",
              "Uniform gauge enables through running, lower freight cost and higher speed; mixed gauge forces transshipment.",
              "Project Unigauge converts all Indian Railways routes to broad gauge, staged over years.",
              "Gauge fixes curve radius, rolling stock size, platform and tunnel dimensions.",
              "Hill railways (Darjeeling, Kalka-Shimla, Nilgiri) keep narrow gauge for tight curves and steep gradients.",
            ],
            table: {
              caption: "Components of the permanent way.",
              headers: ["Component", "Function", "Material"],
              rows: [
                ["Rails", "carry wheel loads, guide wheels", "steel"],
                ["Sleepers", "hold rails to gauge, transfer load to ballast", "timber, concrete, steel"],
                ["Ballast", "hold sleepers, drain water, distribute load", "crushed stone"],
                ["Subgrade", "natural or prepared earth foundation", "soil, gravel"],
                ["Fittings", "clip rails to sleepers, set gauge", "elastic clips, fishplates"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Permanent way assembly - bottom-up",
              caption:
                "Each layer depends on the one below; build and inspect in this order.",
              steps: [
                { label: "Subgrade prepared and compacted", note: "earth foundation" },
                { label: "Ballast laid and compacted", note: "250 mm cushion" },
                { label: "Sleepers placed at 600 mm spacing", note: "PSC concrete" },
                { label: "Rails laid and fastened", note: "60 kg/m, elastic clips" },
                { label: "CWR welded and stressed", note: "no joints" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Learn the four Indian Railway gauges verbatim - broad 1676 mm, metre 1000 mm, narrow 762 mm and 610 mm. RGPV examiners ask this in every paper and award full marks for the exact numbers, not approximations.",
            },
            keyTerms: [
              { term: "Gauge", definition: "Minimum perpendicular distance between inner faces of rails 14 mm below the running surface." },
              { term: "Permanent way", definition: "The complete track assembly of rails, sleepers, ballast and subgrade." },
              { term: "Project Unigauge", definition: "The Indian Railways programme converting all routes to broad gauge." },
              { term: "Rolling stock", definition: "Locomotives and wagons that run on the permanent way." },
            ],
            examQuestions: [
              {
                q: "Define railway gauge. State the gauges used on Indian Railways with their dimensions, the factors governing gauge selection, and the advantages of a uniform gauge. Outline Project Unigauge.",
                marks: 7,
                outline: [
                  "Define gauge as the minimum distance between inner faces of rails 14 mm below the running surface.",
                  "List the gauges on Indian Railways: broad 1676 mm, metre 1000 mm, narrow 762 mm and 610 mm.",
                  "State the factors: traffic volume, alignment cost, speed, curve radius, strategic through-connection.",
                  "Explain advantages of uniform gauge: through running, lower freight cost, higher speed, larger rolling stock.",
                  "Describe Project Unigauge as the staged conversion of all Indian Railways routes to broad gauge.",
                  "Give an example of cost of mixed gauge: transshipment at interchange, parcel damage, time delay.",
                  "Conclude: gauge choice is strategic, fixed once and held for the whole route.",
                ],
              },
              {
                q: "Distinguish between broad gauge and metre gauge with their dimensions and one use each.",
                marks: 2,
              },
              {
                q: "Name the four components of the permanent way and state the function of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Rails",
            body: [
              "A rail is the steel member on which the flanged wheels of rolling stock run, and it performs four jobs at once: it provides a continuous smooth running surface that minimises rolling resistance, it guides the wheels laterally, it transmits the wheel load to the sleepers at discrete points, and it carries the traction and braking forces. Rails are manufactured by the open-hearth or electric-arc process from medium manganese steel, rolled to a standard I-section called the flat-bottom or vignoles rail. The head wears under traffic, the web resists bending, and the foot distributes load to the sleeper through the bearing plate.",
              "Rail weight is measured in kilograms per metre and is the headline specification of a route. Indian Railways uses 52 kg/m and 60 kg/m rails on broad-gauge trunk routes, 90 R (44.6 kg/m) on lighter routes, and 60 R and 75 R on metre gauge. Heavier rails last longer, carry higher axle loads at higher speed, and develop fewer defects such as hogging and battering at joints. The rail section is identified by its weight per metre and the shape of the head; the standard 60 kg/m rail has a head width of 67 mm, a height of 168 mm and a foot width of 145 mm.",
              "Rails are supplied in standard lengths of 13 m for 52 kg/m and 60 kg/m sections, and shorter welded panels for metre gauge. To avoid the bump at every joint, rails are welded into long welded rails of 260 m at the depot and then into continuously welded rail (CWR) of several kilometres by flash-butt or gas-pressure welding on site. CWR eliminates joints, lowers maintenance cost and lifts the speed potential, but it introduces longitudinal thermal stresses that need anchoring, elastic fastenings and proper temperature management at the time of laying. Head wear and joint battering are common rail defects; grinding reprofiles the head and extends rail life.",
            ],
            bullets: [
              "Rails carry wheel loads, guide wheels, transmit load to sleepers, transmit traction and braking.",
              "Flat-bottom (vignoles) section is the standard; head, web, foot are the three parts.",
              "52 kg/m and 60 kg/m on broad-gauge trunk routes; 90 R on lighter routes.",
              "Standard 13 m panels welded into continuously welded rail (CWR) of several kilometres.",
              "CWR eliminates joints but introduces thermal stress needing elastic fastenings.",
              "Head wear, hogging and joint battering are common rail defects; grinding reprofiles the head.",
              "Flash-butt and gas-pressure welding join long welded rail on site.",
            ],
            table: {
              caption: "Rails used on Indian Railways.",
              headers: ["Section", "Weight (kg/m)", "Typical use", "Panel length (m)"],
              rows: [
                ["60 R", "28", "narrow gauge", "9"],
                ["75 R", "37", "metre gauge branch", "12"],
                ["90 R", "44.6", "broad-gauge secondary", "13"],
                ["52 kg", "52", "broad-gauge trunk", "13"],
                ["60 kg", "60", "broad-gauge high-speed", "13"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From liquid steel to a 60 kg/m rail",
              caption:
                "Each stage controls the microstructure that gives the rail its wear and fatigue life.",
              stages: [
                { label: "Melt steel in electric arc furnace", note: "medium manganese" },
                { label: "Continuous casting into blooms", note: "clean steel" },
                { label: "Roll into vignoles section", note: "head, web, foot" },
                { label: "Cut to 13 m and quench head", note: "hardened head" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the defects",
              body: "When asked about rail defects, name them by their textbook names - hogging, battering, wheel burns, corrugation, end battering at joints - and link each to its cause. Named defects earn method marks even if the rest of the answer slips.",
            },
            keyTerms: [
              { term: "Rail", definition: "The steel I-section member that carries and guides the wheel loads of rolling stock." },
              { term: "Rail weight (kg/m)", definition: "Headline specification of a route; 52 and 60 kg/m are standard on broad-gauge trunk routes." },
              { term: "Continuously welded rail (CWR)", definition: "Rails welded into a continuous string of several kilometres to eliminate joints." },
              { term: "Vignoles section", definition: "The flat-bottom rail shape with head, web and foot, the modern standard." },
            ],
            examQuestions: [
              {
                q: "Describe a rail section with a sketch. State the weights of rails used on Indian Railways, the defects that develop in rails, and the welding methods used to convert short rails into continuously welded rail.",
                marks: 7,
                outline: [
                  "Describe the rail section: head, web, foot; flat-bottom or vignoles section rolled from medium manganese steel.",
                  "State the rail weights: 52 kg/m and 60 kg/m on broad-gauge trunk routes; 90 R on lighter routes.",
                  "State the standard 13 m panel length and the dimensions of the 60 kg/m rail (head 67 mm, height 168 mm).",
                  "Explain continuously welded rail (CWR) and the welding methods: flash-butt and gas-pressure welding.",
                  "State the advantages of CWR: elimination of joints, lower maintenance cost, higher speed potential.",
                  "State the disadvantage: longitudinal thermal stresses requiring elastic fastenings and temperature management.",
                  "List common rail defects: head wear, hogging, joint battering; mention rail grinding to reprofile.",
                ],
              },
              {
                q: "What is continuously welded rail? State one advantage and one disadvantage.",
                marks: 2,
              },
              {
                q: "A rail weighs 60 kg/m and is supplied in 13 m panels. Compute the weight of one panel.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Sleepers and ballast",
            body: [
              "Sleepers are the transverse members of the permanent way that carry the rails and transfer the wheel load to the ballast. They hold the rails to the correct gauge and cant, provide a resilient bed for the rail, and insulate the two rails electrically for track circuiting. The classic material is timber - sal, teak or deodar - well-seasoned and creosoted against fungal decay. Steel sleepers, pressed from channel sections, were used widely on metre gauge. Today the dominant type is the prestressed concrete sleeper, which is durable, strong and immune to decay, and carries the elastic fastenings that modern continuously welded rail needs.",
              "Sleeper density is expressed as the number of sleepers per rail length or per kilometre. On Indian Railways broad-gauge trunk routes carry 1660 sleepers per kilometre at a spacing of about 600 mm; heavier density is used on curves, approaches to joints, and in turnouts. A concrete sleeper measures about 2500 x 250 x 200 mm and weighs 250-300 kg. Sleeper spacing is kept uniform where possible, reduced on curves and at fish-plated joints. Too few sleepers overload the ballast and accelerate track geometry loss; too many raise cost without proportionate benefit and hinder tamping.",
              "Ballast is the granular material packed around and beneath the sleepers that fixes their position, drains water away from the track, distributes the load to a wider area of subgrade, and provides resilience. Hard, angular, crushed stone of 20-50 mm size is the standard; on metre gauge and in yards, smaller stone or moorum may be used. The minimum ballast cushion below the sleeper underside is 250 mm for broad gauge. Ballast is tamped mechanically under the sleeper ends and centre to restore track geometry after traffic settlement. Periodic ballast cleaning removes fines that choke drainage; failure to clean is a leading cause of track slum and pumping sleepers.",
            ],
            bullets: [
              "Sleepers hold rails to gauge, transfer load to ballast, provide resilience and electrical insulation.",
              "Timber (sal, teak), steel (channel section), prestressed concrete are the main sleeper materials.",
              "Sleeper density of 1660 per km on broad-gauge trunk routes; spacing about 600 mm.",
              "Ballast of crushed stone 20-50 mm provides a 250 mm minimum cushion below sleeper.",
              "Ballast distributes load to subgrade, drains water, allows tamping for geometry restoration.",
              "Periodic ballast cleaning removes fines that choke drainage and cause pumping sleepers.",
              "Too few sleepers overload ballast; too many raise cost and hinder tamping.",
            ],
            table: {
              caption: "Sleeper types and properties.",
              headers: ["Type", "Material", "Life (years)", "Notes"],
              rows: [
                ["Timber", "sal, teak", "12-20", "creosoted against decay"],
                ["Steel", "channel section", "30-50", "corrodes in saline soil"],
                ["Prestressed concrete", "RCC + PSC", "40-50", "dominant today, immune to decay"],
                ["Cast iron", "C.I. pot", "30-40", "brittle under impact, phased out"],
                ["Composite", "FRP", "20-30", "experimental, light weight"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The permanent way is five stacked layers",
              caption:
                "Load flows from rail through sleeper and ballast to the subgrade - name each layer in the exam.",
              layers: [
                { label: "Rail - 60 kg/m steel section", note: "carries wheel" },
                { label: "Elastic fastening + bearing pad", note: "resilient grip" },
                { label: "Concrete sleeper at 600 mm spacing", note: "transfers load" },
                { label: "Ballast - 250 mm crushed stone", note: "drains and distributes" },
                { label: "Subgrade - compacted earth", note: "ultimate foundation" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two numbers to remember",
              body: "Always state the standard ballast cushion (250 mm for broad gauge) and the standard crushed stone size (20-50 mm). These two numbers are the difference between a partial answer and a full-marks one.",
            },
            keyTerms: [
              { term: "Sleeper", definition: "Transverse member carrying the rail, holding gauge and transferring load to the ballast." },
              { term: "Sleeper density", definition: "Number of sleepers per rail length or per kilometre; 1660 per km on broad-gauge trunk routes." },
              { term: "Ballast cushion", definition: "Minimum depth of crushed stone below the sleeper underside; 250 mm for broad gauge." },
              { term: "Tamping", definition: "Mechanical packing of ballast under sleepers to restore track geometry after settlement." },
            ],
            examQuestions: [
              {
                q: "State the functions of sleepers and ballast. Compare timber, steel and concrete sleepers. State the standard ballast cushion and explain why ballast cleaning is necessary.",
                marks: 7,
                outline: [
                  "State the functions of sleepers: hold rails to gauge, transfer load to ballast, provide resilience, electrical insulation.",
                  "Compare timber (well-seasoned, creosoted), steel (channel section), prestressed concrete (durable, dominant today).",
                  "State sleeper density: number of sleepers per rail length or per km; 1660 per km on broad-gauge trunk routes at 600 mm spacing.",
                  "State the function of ballast: fix sleeper position, drain water, distribute load, provide resilience.",
                  "State the standard ballast: crushed stone 20-50 mm; minimum cushion 250 mm below sleeper underside for broad gauge.",
                  "Explain tamping and ballast cleaning: tamping restores geometry; cleaning removes fines that choke drainage.",
                  "Conclude: too few sleepers overload ballast; too many raise cost and hinder tamping.",
                ],
              },
              {
                q: "Define sleeper density. Give a typical value for broad gauge.",
                marks: 2,
              },
              {
                q: "Why is crushed stone preferred over moorum as ballast?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Fixtures, fastenings, points and crossings",
            body: [
              "Track fixtures and fastenings are the small but critical components that hold the rail to the sleeper, hold two rail ends together, and set the gauge. Fish plates join rail ends at joints, with four fish bolts per joint compressing the plate against the rail web. Bearing plates spread the rail load on timber sleepers and resist wear; on concrete sleepers, a grooved rubber pad sits between rail and sleeper chair. Elastic fastenings such as the Pandrol clip and the K-type clip grip the rail foot, hold it down against uplift and provide longitudinal restraint, a key requirement of continuously welded rail that must resist thermal expansion forces.",
              "Points and crossings, also called turnouts, allow a train to move from one track to another. A turnout consists of a pair of switches, the movable rails that the wheel flange is guided along; a crossing, the gap in the rail that lets the flange cross the other rail; and a closure or lead rail connecting them. The crossing has a vee of cast manganese steel and a check rail opposite it to hold the outer wheel on course. The turnout number is the cotangent of the crossing angle; turnouts of 1 in 8.5 and 1 in 12 are standard on broad gauge, with 1 in 16 used for higher diverging speeds.",
              "Turnout design begins with the crossing angle, which fixes the speed: the smaller the angle, the higher the permissible speed. A 1 in 8.5 turnout limits speed to about 15 km/h on the diverging route, a 1 in 12 turnout allows 30 km/h, and a 1 in 16 long-curved-crossing turnout allows 50 km/h. Switches are straight or curved, the curved switch giving a smoother entry. Layout of crossings includes the heel of switch, the switch lead, the crossing lead and the turnout curve, which together define the turnout geometry. Interlocked turnouts are locked to the signal so a route cannot be set or cleared while the switch is open or mis-set.",
            ],
            bullets: [
              "Fish plates and fish bolts join rail ends at joints; bearing plates spread rail load on timber sleepers.",
              "Elastic fastenings (Pandrol, K-type) grip the rail foot and provide longitudinal restraint for CWR.",
              "A turnout has switches, a crossing with vee and check rail, and closure rails.",
              "Turnout number = cotangent of crossing angle; smaller angle = higher diverging speed.",
              "1 in 8.5 allows 15 km/h; 1 in 12 allows 30 km/h; 1 in 16 allows 50 km/h on the diverging route.",
              "Switch lead, crossing lead and turnout curve define turnout geometry.",
              "Interlocked turnouts are locked to signals so a route cannot be set while the switch is open.",
            ],
            table: {
              caption: "Turnout number and diverging speed.",
              headers: ["Turnout number", "Crossing angle (deg)", "Diverging speed (km/h)", "Use"],
              rows: [
                ["1 in 8.5", "6.7", "15", "yards and slow branches"],
                ["1 in 12", "4.8", "30", "standard BG turnouts"],
                ["1 in 16", "3.6", "50", "high-speed diverging route"],
                ["1 in 20", "2.9", "65", "premium route turnouts"],
                ["1 in 24", "2.4", "80", "very high speed turnouts"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "A turnout is a fork in the track",
              caption:
                "The switch position decides whether the wheel stays on the main line or diverges - and a mis-set switch derails.",
              start: "Wheel approaches a turnout",
              branches: [
                { label: "Take straight route", outcome: "wheel passes on the main line", good: true },
                { label: "Take diverging route", outcome: "switch guides wheel onto turnout at 1 in 12", good: true },
                { label: "Switch not set for route", outcome: "wheel derails at the open switch", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Number is cotangent, not angle",
              body: "Do not confuse the turnout number with the crossing angle in degrees. The turnout number is the cotangent of the crossing angle (tangent is 1/N), so a 1 in 12 turnout has a crossing angle of about 4.8 degrees.",
            },
            keyTerms: [
              { term: "Turnout", definition: "The assembly of switches, crossing and closure rails that lets a train move from one track to another." },
              { term: "Switch", definition: "The movable rail of a turnout that guides the wheel flange onto the straight or diverging route." },
              { term: "Crossing", definition: "The gap in the rail of a turnout that lets the wheel flange cross the other rail; includes a vee and check rail." },
              { term: "Turnout number", definition: "The cotangent of the crossing angle; 1 in 8.5, 1 in 12 and 1 in 16 are common on broad gauge." },
            ],
            examQuestions: [
              {
                q: "Define a turnout. With a sketch, name the parts of a turnout and explain the meaning of the turnout number. State the speeds permitted on 1 in 8.5, 1 in 12 and 1 in 16 turnouts.",
                marks: 7,
                outline: [
                  "Define a turnout (points and crossings) as the assembly that lets a train move from one track to another.",
                  "Name the parts: switches (movable rails), crossing (vee + check rail), closure rails, heel of switch.",
                  "Define the turnout number as the cotangent of the crossing angle (tangent = 1/N).",
                  "State standard turnouts and speeds: 1 in 8.5 at 15 km/h, 1 in 12 at 30 km/h, 1 in 16 at 50 km/h on the diverging route.",
                  "Explain the role of the check rail opposite the crossing nose to hold the outer wheel on course.",
                  "State the geometry: switch lead, crossing lead, turnout curve define the overall layout.",
                  "Explain interlocking: turnout locked to signal so a route cannot be cleared while the switch is open.",
                ],
              },
              {
                q: "What is the function of a check rail at a crossing?",
                marks: 2,
              },
              {
                q: "A turnout has a crossing angle whose tangent is 1/12. Identify the turnout number and the approximate crossing angle in degrees.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Stations, yards and signalling",
            body: [
              "A railway station is the controlled place where trains stop to pick up and set down passengers, exchange parcels, and cross or overtake other trains. Stations are classified as wayside, junction or terminal: a wayside station serves passing traffic only; a junction station has two or more routes diverging and may carry a marshalling yard; a terminal station ends a route and provides facilities for engine reversal and stabling. Station layout includes the platform with its running lines, the platform length of at least eight bogies for a passenger train, waiting halls, ticketing, parcel office and station master's office, all governed by the Indian Railway Works Manual.",
              "A yard is a system of sidings, parallel to the running lines, on which trains are received, sorted, dispatched and stabled. A marshalling yard breaks up inbound freight trains, sorts wagons by destination into new trains, and dispatches them. The classic hump marshalling yard pushes wagons over a hump and lets gravity sort them through a fan of sidings controlled by retarders; flat shunting yards use draw-and-shunt movement. Passenger terminals and locomotive yards handle coach and engine stabling respectively. Every yard has a system of points, signals, derails and trap points to prevent unintended movement into the running line.",
              "Signalling is the system of signals, points and interlocking that prevents more than one train occupying the same section of track at the same time. The block system divides the line into block sections between consecutive stations; only one train may enter a section, and the section is released only when the train has cleared it. Colour-light signals show red for stop, yellow for caution and green for clear, with double yellow for high-speed approaches on four-aspect systems. Mechanical interlocking through a lever frame, or electronic interlocking through a relay or solid-state interlocking, ensures a signal cannot be cleared unless the route is set, the points are locked and no conflicting route overlaps.",
            ],
            bullets: [
              "Wayside station serves passing traffic; junction has diverging routes; terminal ends a route.",
              "Marshalling yard breaks up inbound trains, sorts wagons, dispatches new trains.",
              "Hump yard uses gravity and retarders; flat yard uses draw-and-shunt movement.",
              "Block system divides line into sections; only one train per section.",
              "Colour-light signals: red stop, yellow caution, green clear; double yellow on four-aspect.",
              "Interlocking ensures a signal cannot be cleared unless the route is set and points are locked.",
              "Mechanical, relay or solid-state interlocking systems govern modern yards.",
            ],
            table: {
              caption: "Colour-light signal aspects and meaning.",
              headers: ["Aspect", "Meaning", "Action"],
              rows: [
                ["Red", "stop", "halt before signal"],
                ["Yellow", "caution", "be ready to stop at next signal"],
                ["Double yellow", "preliminary caution", "high-speed approach on four-aspect"],
                ["Green", "clear", "proceed at normal speed"],
                ["Flashing yellow", "low-speed approach", "junction speed limit ahead"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Station type by traffic volume and number of routes",
              caption:
                "Station classification is a 2-by-2 of traffic volume against number of routes - place a given station in its quadrant.",
              axes: { x: "Traffic volume", y: "Number of routes" },
              quadrants: [
                { label: "Wayside station", note: "halt with single platform" },
                { label: "Passenger terminal", note: "terminates route, reverses engine" },
                { label: "Branch junction", note: "two routes diverge at low traffic" },
                { label: "Major junction + yard", note: "multi-route, marshalling" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sketch the block system",
              body: "Sketch the block system as a single-line diagram with two stations and one block section between them. The picture is worth three marks even before you describe the interlocking.",
            },
            keyTerms: [
              { term: "Wayside station", definition: "A railway station that serves passing traffic only, with no diverging routes." },
              { term: "Marshalling yard", definition: "A system of sidings that receives, sorts by destination and dispatches freight trains." },
              { term: "Block system", definition: "Signalling system dividing the line into sections, with only one train permitted per section." },
              { term: "Interlocking", definition: "Mechanical or electronic system that prevents a signal being cleared unless the route is set and points are locked." },
            ],
            examQuestions: [
              {
                q: "Classify railway stations. Describe the components of a marshalling yard and the function of a hump yard. State the principle of the block system of signalling and the role of interlocking.",
                marks: 7,
                outline: [
                  "Classify stations: wayside (passing traffic only), junction (two or more routes diverging), terminal (ends a route).",
                  "State station layout: platforms, running lines, platform length for at least eight bogies, waiting halls, ticketing, station master's office.",
                  "Define a yard as the system of sidings for receiving, sorting, dispatching and stabling trains.",
                  "Describe a marshalling yard: breaks up inbound trains, sorts wagons by destination, dispatches new trains.",
                  "Describe a hump yard: pushes wagons over a hump, gravity sorts them through a fan of sidings controlled by retarders.",
                  "State the block system principle: divide line into block sections; only one train per section; release on clearance.",
                  "State the role of interlocking: signal cannot be cleared unless the route is set, points locked and no conflicting route overlaps.",
                ],
              },
              {
                q: "Distinguish between a junction station and a terminal station.",
                marks: 2,
              },
              {
                q: "Explain the meaning of a colour-light signal's red, yellow and green aspects.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =========================== UNIT II - AIRPORT ENGINEERING ===========================
    {
      number: 2,
      roman: "II",
      title: "Airport Engineering",
      summary:
        "Airport planning from demand forecast to master plan, runway orientation by wind rose, runway and taxiway geometry, and the lighting that extends operation into low visibility.",
      chapter: {
        number: "02",
        title: "Airport Engineering",
        intro:
          "Unit II builds an airport from forecast to fixture: the 20-year demand forecast that fixes airside capacity, the site selection that balances airspace, ground and environment, the wind-rose analysis that orients the runway, the geometric design of runway and taxiway, the apron and parking layout, and the lighting systems that allow all-weather operation.",
        inOneBreath:
          "Forecast for 20 years sets runway and terminal size; site selection weighs airspace, ground and access; wind rose orients runway to 95 percent usability; runway length is corrected 7 percent per 300 m of elevation, 1 percent per deg C above standard, 20 percent per 1 percent gradient; PCN-ACN pair fixes pavement strength; taxiway, apron and terminal form the landside; approach and edge lighting, PAPI and stop bars extend operation into night and low visibility.",
        sections: [
          {
            number: "2.1",
            title: "Airport planning and site selection",
            body: [
              "Airport planning begins with a forecast of aviation demand - annual passengers, cargo tonnage and aircraft movements - for a 20-year horizon. The forecast fixes the airfield capacity needed, which determines runway length, runway configuration and terminal size. The master plan integrates the airside (runways, taxiways, apron), the landside (terminal, parking, access roads) and the airspace around the airport. ICAO Annex 14 and the FAA Advisory Circulars govern runway geometry, obstacle limitation surfaces and runway end safety areas. The plan must reconcile demand growth with environmental limits on noise, emissions and land use around the airport.",
              "Site selection begins from a regional plan that identifies an air-space free of mountains, tall buildings and other airports, with flat or gently sloping ground, available land for 20-year expansion, and access to the city it serves. Airspace constraints include the imaginary surfaces of Annex 14 - the approach surface, the conical surface and the horizontal surface - that must be kept clear of obstacles. Ground constraints include soil bearing capacity, drainage and ground slope, and the risk of fog, dust and bird strike. Environmental and social constraints - noise on nearby housing, displacement of villages, and wetland or forest impact - often decide the final site.",
              "The selected site is checked against the wind rose to confirm runway orientation, against the airspace to confirm clearance of obstacle limitation surfaces, and against soil and drainage reports to confirm constructability. The master plan then fixes runway length from the design aircraft, terminal area from the design hour passenger volume, and the access system from landside demand. Site selection is iterative: a site with excellent airspace but poor ground access is rejected in favour of one that balances all criteria. The final report carries maps of the airspace, the wind rose and the ground, with reasons for each rejected alternative.",
            ],
            bullets: [
              "Forecast aviation demand for a 20-year horizon; forecast fixes airside capacity.",
              "Master plan integrates airside (runway, taxiway, apron), landside (terminal, parking, access) and airspace.",
              "ICAO Annex 14 governs runway geometry and obstacle limitation surfaces.",
              "Airspace constraints: approach, conical and horizontal surfaces must be clear of obstacles.",
              "Ground constraints: soil bearing capacity, drainage, ground slope, fog, dust, bird-strike risk.",
              "Environmental constraints: noise on housing, displacement, wetland or forest impact.",
              "Site selection is iterative; a site balancing all criteria wins over one with only one strength.",
            ],
            table: {
              caption: "Site selection criteria.",
              headers: ["Criterion", "Why it matters", "Threshold"],
              rows: [
                ["Airspace", "obstacle clearance", "Annex 14 surfaces clear"],
                ["Wind rose", "95 percent usability", "single runway OK"],
                ["Ground", "bearing capacity and drainage", "subgrade CBR \u2265 8"],
                ["Access", "ground transport to city", "within 60 min of CBD"],
                ["Environment", "noise, displacement", "no settlement within 5 km"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Airport site selection from forecast to master plan",
              caption:
                "Each stage tightens the candidate list - the last stage freezes the master plan.",
              stages: [
                { label: "Forecast aviation demand for 20 years", note: "passengers, cargo, movements" },
                { label: "Identify candidate sites", note: "regional airspace scan" },
                { label: "Evaluate airspace, ground and access", note: "Annex 14 + soil + access" },
                { label: "Select site and freeze master plan", note: "airside, landside, airspace" },
              ],
            },
            callout: {
              type: "exam",
              title: "Start with the forecast",
              body: "When asked to outline airport planning, always start with the 20-year forecast. The forecast fixes the airside capacity, which fixes the runway, which fixes the terminal - examiners look for this chain of reasoning.",
            },
            keyTerms: [
              { term: "Airport master plan", definition: "The integrated plan of airside, landside and airspace for a 20-year horizon." },
              { term: "Obstacle limitation surface", definition: "ICAO Annex 14 imaginary surfaces (approach, conical, horizontal) kept clear of obstacles." },
              { term: "Site selection", definition: "Iterative choice of airport location balancing airspace, ground, access and environment." },
              { term: "Airside", definition: "The part of the airport with runways, taxiways and apron, where aircraft operate." },
            ],
            examQuestions: [
              {
                q: "Outline the steps of airport planning. State the factors governing site selection for an airport and the airspace and ground constraints that apply.",
                marks: 7,
                outline: [
                  "Outline the planning steps: forecast aviation demand for 20 years; identify candidate sites; evaluate airspace, ground and access; freeze master plan.",
                  "State the master plan components: airside (runways, taxiways, apron), landside (terminal, parking, access), airspace.",
                  "State the airspace constraints: ICAO Annex 14 obstacle limitation surfaces - approach, conical, horizontal.",
                  "State the ground constraints: soil bearing capacity, drainage, ground slope, fog, dust, bird-strike risk.",
                  "State the environmental and social constraints: noise on housing, village displacement, wetland or forest impact.",
                  "Explain the iterative nature: site with excellent airspace but poor ground access is rejected for one balancing all criteria.",
                  "Conclude with the master plan output: runway length, terminal area, access system, each derived from design-year demand.",
                ],
              },
              {
                q: "Name the four components of an airport master plan.",
                marks: 2,
              },
              {
                q: "Why is a 20-year forecast used in airport planning?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Runway orientation and wind rose diagram",
            body: [
              "Runway orientation is chosen so that aircraft can take off and land into the wind for maximum lift and control. The crosswind component - the wind speed perpendicular to the runway - must stay within the limit of the design aircraft, typically 15 knots for a small plane and 25 knots for a transport aircraft. The wind rose analysis plots the percentage of time the wind blows from each direction at each speed band, and overlays the runway direction on it. The runway is oriented to maximise the coverage of usable wind: the ICAO standard is 95 percent usability, that is, the crosswind component is within limits for 95 percent of the time.",
              "The wind rose is a polar diagram with sixteen directions on the circumference and speed bands as concentric circles; each sector is shaded to the percentage of observations in that direction and speed range. To read it, lay a transparent template of the runway direction and a crosswind-limit line over the rose; the wind lying within the crosswind limit is usable. The template is rotated to find the orientation that maximises the usable wind area. For transport-category aircraft a crosswind of 15 knots is taken as the usability limit; if a single runway cannot reach 95 percent, a cross or open-V runway pair is needed.",
              "Where 95 percent usability is not reached with a single runway, a second runway is added, oriented to cover the wind directions missed by the first. A cross runway intersects the primary near a right angle; an open-V pair diverges by about 60 degrees and gives a quiet end at each runway head. The wind rose also informs the runway threshold location, the instrument approach procedure and noise abatement departure routing. For sites in the Indo-Gangetic plain the prevailing wind from west-southwest often yields a runway near 09/27, while coastal sites yield a runway aligned to the sea breeze.",
            ],
            bullets: [
              "Runway orientation chosen so aircraft take off and land into the wind for maximum lift.",
              "Crosswind component must stay within the design aircraft limit (15 knots small, 25 transport).",
              "Wind rose is a polar diagram of 16 directions and speed bands.",
              "ICAO usability standard: 95 percent of time crosswind within limit.",
              "Template method overlays runway direction and crosswind line on the wind rose.",
              "Single runway below 95 percent: add cross or open-V second runway.",
              "Indo-Gangetic plain often yields a runway near 09/27; coastal sites align to sea breeze.",
            ],
            table: {
              caption: "Wind rose directions and crosswind on a 09/27 runway.",
              headers: ["Wind direction", "Frequency (%)", "Crosswind on 09/27 (knots)"],
              rows: [
                ["W", "18", "0"],
                ["WSW", "12", "3"],
                ["SW", "8", "6"],
                ["E", "10", "0"],
                ["N", "5", "20"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Runway orientation decision from the wind rose",
              caption:
                "The wind rose forks the decision: keep the single runway, augment it, or reject the site.",
              start: "Compute 95 percent usability from the wind rose",
              branches: [
                { label: "Single runway reaches 95 percent", outcome: "build one runway along prevailing wind", good: true },
                { label: "Below 95 percent, crosswinds dominate", outcome: "add cross or open-V runway", good: true },
                { label: "Winds too varied", outcome: "site rejected for an airport", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the wind rose",
              body: "Practice drawing a wind rose with at least 8 directions before the exam. The polar diagram with the runway overlay is the heart of every wind-rose question, and the marks are in the diagram, not the description.",
            },
            keyTerms: [
              { term: "Wind rose", definition: "A polar diagram showing the percentage of time wind blows from each direction at each speed band." },
              { term: "Crosswind component", definition: "Wind speed perpendicular to the runway; limited to 15 knots for small, 25 for transport aircraft." },
              { term: "Runway usability", definition: "Percentage of time crosswind is within the design limit; ICAO standard is 95 percent." },
              { term: "Open-V runway pair", definition: "Two runways diverging by about 60 degrees, used when one runway cannot meet 95 percent usability." },
            ],
            examQuestions: [
              {
                q: "Explain with a sketch how a wind rose is used to orient a runway. State the ICAO usability standard and the action taken when a single runway cannot meet it.",
                marks: 7,
                outline: [
                  "Define runway orientation: chosen so aircraft take off and land into the wind for maximum lift and control.",
                  "State the crosswind component limit: 15 knots for small planes, 25 knots for transport aircraft.",
                  "Explain the wind rose: polar diagram with 16 directions on circumference and speed bands as concentric circles.",
                  "State the ICAO usability standard: 95 percent of time the crosswind component must be within limit.",
                  "Describe the template method: lay a runway-direction template with a crosswind-limit line over the rose; rotate to maximise usable wind area.",
                  "State the action when 95 percent is not met: add a cross or open-V second runway to cover missed wind directions.",
                  "Give an example: Indo-Gangetic plain yields a runway near 09/27 from prevailing west-southwest winds.",
                ],
              },
              {
                q: "Define the crosswind component and state its typical limit for a transport aircraft.",
                marks: 2,
              },
              {
                q: "A wind blows from the east at 20 knots. Compute the crosswind component on a runway oriented north-south.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Runway design",
            body: [
              "Runway length is the headline parameter of runway design and is fixed by the design aircraft, its take-off weight, the airport elevation, the air temperature, and the runway gradient. The basic length for a standard day at sea level is read from the aircraft manufacturer's performance chart; it is corrected for elevation at the rate of 7 percent per 300 m of elevation above mean sea level, for temperature at 1 percent per degree above the standard atmosphere, and for gradient. The corrected length provides the take-off run available, the take-off distance available, the accelerate-stop distance available and the landing distance available, each of which the pilot checks before every flight.",
              "Runway width is the lateral extent provided for the undercarriage of the design aircraft plus a safety margin. ICAO Annex 14 code numbers 1 to 4 cover aircraft of wing span 9 m to 80 m and outer main gear span up to 16 m. Code 4E, used by heavy transport jets, requires a runway width of 45 m with paved shoulders of 7.5 m each side. Other geometric elements are the runway strip of 150 m width that surrounds the runway, the runway end safety area of 90 m beyond each end, and the clearway and stopway, the latter letting the take-off distance be extended for an aborted take-off.",
              "Runway pavements are flexible (bituminous) or rigid (concrete). Flexible pavement carries load by distributing it through layered granular and bituminous courses over the subgrade; rigid pavement acts as a stiff slab that bridges local weak spots. Pavement thickness is designed for the design aircraft gear load and the number of coverages over a 20-year life; the method of choice is the FAA's CBR method for flexible pavements and the Westergaard analysis for rigid. Pavement quality is reported as the Pavement Classification Number (PCN), paired with the Aircraft Classification Number (ACN) so a runway is fit for an aircraft when ACN is less than or equal to PCN.",
            ],
            bullets: [
              "Runway length fixed by design aircraft, take-off weight, elevation, temperature, gradient.",
              "Elevation correction: 7 percent per 300 m above mean sea level.",
              "Temperature correction: 1 percent per deg C above standard atmosphere.",
              "Gradient correction: 20 percent for each 1 percent of gradient, capped at 0.35.",
              "ICAO code 4E: runway width 45 m with paved shoulders of 7.5 m.",
              "Runway strip 150 m wide; runway end safety area 90 m beyond each end.",
              "PCN-ACN criterion: runway is fit when ACN is less than or equal to PCN.",
            ],
            codeExample: {
              language: "python",
              caption: "Runway length correction for elevation, temperature and gradient.",
              code:
                "# Runway length correction per ICAO Annex 14 / FAA AC 150/5325-4.\n" +
                "# Basic sea-level length is corrected for elevation, temperature and gradient.\n" +
                "\n" +
                "def corrected_length(basic, elevation_m, temp_c, gradient_percent):\n" +
                "    \"\"\"basic: sea-level standard-day length in m.\n" +
                "    elevation_m: airport elevation above mean sea level.\n" +
                "    temp_c: airport reference temperature in deg C.\n" +
                "    gradient_percent: effective gradient along the runway.\"\"\"\n" +
                "    # 7 percent per 300 m of elevation\n" +
                "    elev_corr = basic * (1 + 0.07 * elevation_m / 300.0)\n" +
                "    # 1 percent per deg C above standard atmosphere (15 - 0.0065 * elevation)\n" +
                "    standard_temp = 15 - 0.0065 * elevation_m\n" +
                "    excess_temp = max(0.0, temp_c - standard_temp)\n" +
                "    temp_corr = elev_corr * (1 + 0.01 * excess_temp)\n" +
                "    # 20 percent for each 1 percent of effective gradient (capped at 0.35)\n" +
                "    grad_factor = min(0.20 * gradient_percent, 0.35)\n" +
                "    grad_corr = temp_corr * (1 + grad_factor)\n" +
                "    return grad_corr\n" +
                "\n" +
                "L = corrected_length(basic=1800, elevation_m=600, temp_c=25, gradient_percent=0.7)\n" +
                "print(\"Corrected runway length =\", round(L, 0), \"m\")\n",
            },
            diagram: {
              kind: "pyramid",
              title: "Runway design stacks four requirements",
              caption:
                "Performance at the base, safety areas in the middle, geometry above, pavement strength at the top.",
              tiers: [
                { label: "PCN matches design ACN", note: "pavement strength" },
                { label: "Width 45 m + shoulders 7.5 m", note: "code 4E geometry" },
                { label: "Strip 150 m + RESA 90 m", note: "safety areas" },
                { label: "Corrected length for elevation + temperature + gradient", note: "performance" },
              ],
            },
            callout: {
              type: "warning",
              title: "Order of corrections",
              body: "Apply the elevation correction (7 percent per 300 m) before the temperature correction. The temperature correction is computed on the elevation-corrected length, not on the basic length - a common slip that costs marks.",
            },
            keyTerms: [
              { term: "Runway length", definition: "Distance provided for take-off run, take-off distance, accelerate-stop and landing, after elevation, temperature and gradient corrections." },
              { term: "Pavement Classification Number (PCN)", definition: "Number expressing the strength of a runway pavement for a given subgrade." },
              { term: "Aircraft Classification Number (ACN)", definition: "Number expressing the load severity of an aircraft on a given pavement." },
              { term: "Runway end safety area (RESA)", definition: "90 m area beyond each runway end to safely arrest an overrun." },
            ],
            examQuestions: [
              {
                q: "Derive the corrections applied to the basic runway length for airport elevation, temperature and gradient. Define PCN and ACN and state the criterion for an aircraft to use a runway.",
                marks: 7,
                outline: [
                  "State that runway length is fixed by design aircraft, take-off weight, airport elevation, air temperature, runway gradient.",
                  "Derive elevation correction: 7 percent per 300 m above mean sea level.",
                  "Derive temperature correction: 1 percent per deg C above the standard atmosphere (15 - 0.0065 * elevation).",
                  "Derive gradient correction: 20 percent for each 1 percent of effective gradient, capped at 0.35.",
                  "Define the take-off run available, take-off distance available, accelerate-stop distance available and landing distance available.",
                  "State PCN (Pavement Classification Number) and ACN (Aircraft Classification Number) as the strength-classification pair.",
                  "State the criterion: a runway is fit for an aircraft when ACN is less than or equal to PCN.",
                ],
              },
              {
                q: "State the ICAO code 4E runway width and shoulder width.",
                marks: 2,
              },
              {
                q: "What is a runway end safety area and what is its standard length?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Taxiway design and airport layout",
            body: [
              "A taxiway connects the runway to the apron and the apron to the terminal. Taxiway width is fixed by the outer main gear span of the critical aircraft plus a clearance: code E aircraft require a taxiway width of 25 m with paved shoulders. Taxiway geometry is governed by the taxiway strip of 40 to 80 m on either side and by the fillets that keep the main gear of large aircraft within the pavement during a turn. The taxiway edge is marked by blue reflectors; the centreline is painted yellow with holding position markings at the runway intersection, where taxiing aircraft hold short of the runway.",
              "The apron or holding bay is the paved area on which aircraft are parked for passenger boarding, refuelling and servicing. Gate geometry is fixed by the aircraft type and the parking method - nose-in, angled nose-in, parallel or remote. Nose-in parking needs a pushback tractor to retract the aircraft but exposes the full fuselage to the terminal front. Apron size depends on the number of contact and remote stands, and on the passenger boarding bridge or walkway used. The apron must be sloped to drain water away from the terminal and provide a safe walking margin for ground staff around parked aircraft.",
              "The overall airport layout is the master plan in plan form: the runway and taxiway system, the apron and terminal, the landside access roads, the parking, the cargo and hangar area, and the air traffic control tower with a view of the manoeuvring area. A simple layout has one runway, one parallel taxiway, an apron at one end and a terminal in front. A complex layout has two parallel runways with rapid exit taxiways, a satellite terminal fed by a people-mover, and a peripheral access road. The runway-to-terminal distance is kept short for taxi time but long enough for noise and blast control.",
            ],
            bullets: [
              "Taxiway connects runway to apron; code E needs 25 m width with shoulders.",
              "Taxiway strip 40 to 80 m each side; fillets keep main gear in pavement on turns.",
              "Blue edge reflectors and yellow centreline markings on taxiways.",
              "Apron: paved parking area for boarding, refuelling, servicing.",
              "Parking methods: nose-in (pushback), angled, parallel, remote.",
              "Nose-in exposes full fuselage to terminal; remote uses walkway or bus.",
              "Overall airport layout integrates runway, taxiway, apron, terminal and access.",
            ],
            table: {
              caption: "Apron parking methods compared.",
              headers: ["Method", "Pushback needed", "Terminal front used", "Best for"],
              rows: [
                ["Nose-in", "yes", "fully", "narrow-body contact gate"],
                ["Angled nose-in", "yes", "partially", "regional apron"],
                ["Parallel", "no", "long edge", "small terminal apron"],
                ["Remote", "no", "none", "wide-body or charter"],
                ["Open remote", "no", "none", "cargo and military"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Nose-in versus remote apron parking",
              caption:
                "Nose-in gives quick boarding via bridge; remote gives flexibility and lower terminal cost.",
              left: {
                heading: "Nose-in (contact stand)",
                items: [
                  "aircraft parks perpendicular to terminal",
                  "needs pushback tractor",
                  "full fuselage at terminal front",
                  "boarding bridge directly to gate",
                  "best for narrow-body aprons",
                ],
              },
              right: {
                heading: "Remote parking",
                items: [
                  "aircraft parks away from terminal",
                  "self-power in and out",
                  "walk or bus to terminal",
                  "lower terminal cost",
                  "best for wide-body or charter",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Draw the parking layout",
              body: "In apron questions, draw the parking layout. The pushback arrow for nose-in parking and the bus arrows for remote parking make the comparison clear at a glance.",
            },
            keyTerms: [
              { term: "Taxiway", definition: "Paved path connecting the runway to the apron and the apron to the terminal." },
              { term: "Apron", definition: "Paved parking area on which aircraft stand for boarding, refuelling and servicing." },
              { term: "Holding bay", definition: "Apron area near the runway end where aircraft wait before take-off clearance." },
              { term: "Fillet", definition: "Extra pavement added at a taxiway curve to keep the main gear of large aircraft within the pavement." },
            ],
            examQuestions: [
              {
                q: "Describe the components of a taxiway and an apron. Compare nose-in and remote parking of aircraft. State the function of holding bays and taxiway fillets.",
                marks: 7,
                outline: [
                  "Define a taxiway as the path connecting runway to apron and apron to terminal.",
                  "State taxiway geometry: width 25 m for code E aircraft; taxiway strip 40 to 80 m each side; fillets for large-aircraft turns.",
                  "State taxiway markings: blue edge reflectors; yellow centreline; holding position markings at runway intersection.",
                  "Define the apron as the paved area for parking, boarding, refuelling, servicing.",
                  "Compare parking methods: nose-in (needs pushback, full fuselage to terminal), angled, parallel, remote.",
                  "State the apron sizing: number of contact and remote stands; boarding bridge type; slope for drainage away from terminal.",
                  "Conclude with overall airport layout: runway-taxiway-apron-terminal-access integrated as the master plan.",
                ],
              },
              {
                q: "What is a pushback tractor and when is it required?",
                marks: 2,
              },
              {
                q: "State the standard colour of taxiway edge and centreline lights.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Airport lighting",
            body: [
              "Airport lighting extends airport operation into low-visibility and night conditions and guides pilots on approach, touchdown and ground movement. Approach lighting provides a path of lights on the extended runway centreline that the pilot sees during the final approach; the simplest is the centreline bar approach lighting system, the most elaborate is the CALVERT or ALSF-2 system extending 900 m from the threshold. The threshold is marked by a row of green lights, the runway end by red lights, and the runway edge by white lights; the runway centreline and touchdown zone lights help the pilot hold the line on landing.",
              "Taxiway lighting uses blue edge lights and green centreline lights to guide the aircraft after landing to the apron. Apron floodlighting illuminates the parking stands for ground handling; it is mounted on buildings or poles so as not to dazzle the cockpit. Runway lead-in lights and stop bar lights control ground movement at intersections with runways; a lit red stop bar at a runway holding point means no entry, and the runway guard lights flash a warning. Precision approach path indicators (PAPI) set beside the runway give the pilot a visual glide-slope reference: two red and two white lights means on-slope.",
              "Airfield lighting is powered from a constant-current regulator, a series circuit that feeds each light through an isolating transformer, so one lamp failure does not black out the circuit. The regulator current is 6.6 A; the runway edge and centreline lights run on the same circuit and dim to 1 percent, 10 percent, 20 percent and 30 percent for night and day operations. Standby power for lighting and navigation aids comes from a diesel generator that picks up within 15 seconds of a grid failure, an ICAO requirement for precision-approach runways.",
            ],
            bullets: [
              "Approach lighting: centreline bars extending from threshold; CALVERT or ALSF-2 up to 900 m.",
              "Green threshold lights, red runway-end lights, white runway edge lights.",
              "Blue taxiway edge lights; green taxiway centreline lights.",
              "PAPI: two red and two white means on-slope; gives visual glide-slope reference.",
              "Stop bar lights: red lit bar at holding point means no entry; guard lights flash.",
              "Apron floodlighting mounted on poles must not dazzle the cockpit.",
              "Constant-current regulator feeds each lamp through isolating transformer at 6.6 A.",
            ],
            table: {
              caption: "Airport lighting systems.",
              headers: ["System", "Location", "Colour", "Function"],
              rows: [
                ["Approach lights", "extended centreline", "white", "guide pilot on final"],
                ["Threshold lights", "runway end", "green", "mark start of runway"],
                ["Runway edge lights", "along edge", "white", "outline runway at night"],
                ["Runway end lights", "far end", "red", "mark end of runway"],
                ["Taxiway edge lights", "taxiway edge", "blue", "outline taxiway"],
                ["PAPI", "beside runway", "red/white", "give visual glide slope"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "An airport is four stacked layers",
              caption:
                "Airspace to landside - each layer is planned for a 20-year horizon and lit for all-weather operation.",
              layers: [
                { label: "Airspace - approach and obstacle surfaces", note: "Annex 14" },
                { label: "Airside - runway, taxiway, apron", note: "lit for low visibility" },
                { label: "Terminal - check-in, security, boarding", note: "passenger processing" },
                { label: "Landside - access roads, parking, transit", note: "city connection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Five colours to memorise",
              body: "Remember the colour code: green threshold, red runway end, white runway edge, blue taxiway edge, yellow taxiway centreline. These five colours cover most of the airport-lighting question.",
            },
            keyTerms: [
              { term: "Approach lighting", definition: "Centreline bar system on the extended runway centreline guiding the pilot on final approach." },
              { term: "PAPI", definition: "Precision approach path indicator; two red and two white lights means on-slope." },
              { term: "Stop bar lights", definition: "Red lit bar at a runway holding point meaning no entry; controls ground movement." },
              { term: "Constant-current regulator", definition: "6.6 A series circuit feeding each lamp through an isolating transformer." },
            ],
            examQuestions: [
              {
                q: "Describe the runway and approach lighting systems at an airport. State the function of PAPI, stop bar lights and the constant-current regulator used for airfield lighting.",
                marks: 7,
                outline: [
                  "Describe approach lighting: centreline bars extending from threshold; CALVERT or ALSF-2 systems up to 900 m.",
                  "State runway lighting: green threshold lights, red runway-end lights, white edge lights, runway centreline and touchdown zone lights.",
                  "State taxiway lighting: blue edge lights, green centreline lights.",
                  "Describe PAPI: two red and two white lights means on-slope; gives visual glide-slope reference.",
                  "State the function of stop bar lights: lit red bar at runway holding point means no entry; runway guard lights flash warning.",
                  "State apron floodlighting: mounted on poles, must not dazzle the cockpit.",
                  "Explain constant-current regulator: series circuit at 6.6 A; isolation transformer per lamp; standby diesel picks up within 15 s.",
                ],
              },
              {
                q: "What colours mark the runway threshold and runway end?",
                marks: 2,
              },
              {
                q: "State the standby power requirement for a precision-approach runway.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =========================== UNIT III - BRIDGE ENGINEERING ===========================
    {
      number: 3,
      roman: "III",
      title: "Bridge Engineering",
      summary:
        "The components and classification of bridges, abutments and piers, foundation types by depth, superstructure forms by span, and the IRC loading that drives the design.",
      chapter: {
        number: "03",
        title: "Bridge Engineering",
        intro:
          "Unit III builds a bridge from foundation to deck: the components and classification that name the parts, the abutments and piers that form the substructure, the foundation types that reach hard stratum below the river, the superstructure forms that span the gap, and the IRC loading classes that drive every design decision.",
        inOneBreath:
          "A bridge is superstructure, bearings, substructure and foundation; classified by form (slab, girder, arch, truss, suspension, cable-stayed), material and use; abutments at the ends retain the approach, piers between spans resist water and wind; foundations follow hard-stratum depth - open footing for 0-5 m, well for 10-30 m, piles for 20 m and beyond; superstructure spans range from 10 m slabs to 2000 m suspension; IRC Class AA, 70R, A and B are the design loads, with impact factor 10-25 percent.",
        sections: [
          {
            number: "3.1",
            title: "Bridge components and classification",
            body: [
              "A bridge carries a road, railway or pipeline over a river, valley or another road, and the structural components that make this possible are common to all bridges. The superstructure is the part that carries traffic - the deck slab or girder, the wearing surface, and the kerbs and railings. The substructure supports the superstructure and transfers its load to the foundation; it comprises the abutment at each end and the piers between spans. The foundation is the part below the substructure that delivers the load to the ground, by spread footing, well, pile or raft. Bearings sit between superstructure and substructure to allow rotation and thermal movement.",
              "Bridges are classified by their superstructure form and by their use. By form: a slab bridge carries the deck as a slab spanning between supports; a girder bridge uses steel or prestressed concrete girders; an arch bridge transfers load by arch thrust to abutments; a truss bridge carries load through triangulated steel members; a suspension bridge hangs the deck from main cables carried over towers and anchored at the ends; a cable-stayed bridge runs stays directly from tower to deck. By use: a highway bridge, a railway bridge, a footbridge, an aqueduct. By material: timber, masonry, RCC, steel, composite. By span arrangement: simply supported, continuous, cantilever.",
              "Bridge selection is governed by the span length, the foundation conditions at the site, the navigation or flood clearance required, and aesthetics. A small culvert or slab bridge suits spans up to 10 m; RCC girder bridges cover 10 to 25 m; prestressed girders reach 40 m; steel trusses reach 100 m; arch and cable-stayed bridges reach 300 m and beyond. The clear headroom above high flood level or navigation channel fixes the deck elevation. For a railway bridge the dynamic live load and impact factor raise the design force, while deflection limits are stricter than on highway bridges. IRC codes give the design loads for both.",
            ],
            bullets: [
              "Superstructure carries traffic: deck slab or girder, wearing surface, kerbs, railings.",
              "Substructure supports superstructure and transfers load to foundation.",
              "Foundation delivers load to ground: spread footing, well, pile or raft.",
              "Bearings sit between superstructure and substructure to allow rotation and movement.",
              "Classification by form: slab, girder, arch, truss, suspension, cable-stayed.",
              "Classification by material: timber, masonry, RCC, steel, composite.",
              "Span ranges: slab up to 10 m; girder 10-25 m; truss 100-200 m; cable-stayed beyond 300 m.",
            ],
            table: {
              caption: "Bridge classification by span.",
              headers: ["Form", "Span range (m)", "Material", "Example use"],
              rows: [
                ["Slab", "up to 10", "RCC", "culvert, minor road bridge"],
                ["Girder", "10-25", "RCC or PSC", "highway over-bridge"],
                ["Steel girder", "25-100", "steel", "railway over-bridge"],
                ["Truss", "100-200", "steel", "long railway bridge"],
                ["Arch", "100-300", "RCC or steel", "valley crossing"],
                ["Cable-stayed", "300-1000", "steel", "estuary crossing"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Load flow in a bridge - deck to ground",
              caption:
                "Load flows from the deck down to the foundation in five steps - name each in the exam.",
              steps: [
                { label: "Deck slab carries traffic", note: "superstructure" },
                { label: "Bearings transmit load and rotation", note: "allow movement" },
                { label: "Pier or abutment receives load", note: "substructure" },
                { label: "Foundation transfers to ground", note: "well, pile, raft" },
                { label: "Approach embankment completes the bridge", note: "earth retaining" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch first",
              body: "In any bridge question, start with a sketch showing superstructure, bearings, substructure and foundation. The sketch anchors the definitions that follow and earns the first two marks before any detail.",
            },
            keyTerms: [
              { term: "Superstructure", definition: "The part of a bridge that carries traffic: deck, wearing surface, kerbs, railings." },
              { term: "Substructure", definition: "The part of a bridge that supports the superstructure: abutments and piers." },
              { term: "Foundation", definition: "The part below the substructure that delivers load to the ground by footing, well, pile or raft." },
              { term: "Bearing", definition: "Device between superstructure and substructure that allows rotation and thermal movement." },
            ],
            examQuestions: [
              {
                q: "Sketch a typical bridge and name its components. Classify bridges by superstructure form, by material, and by use, giving one example of each.",
                marks: 7,
                outline: [
                  "Sketch a bridge: superstructure (deck, wearing surface, kerbs, railings); substructure (abutments, piers); foundation; bearings.",
                  "Define superstructure as the part that carries traffic; substructure as the part that supports it; foundation as the part below that delivers load to ground.",
                  "Classify by form: slab, girder, arch, truss, suspension, cable-stayed.",
                  "Classify by material: timber, masonry, RCC, steel, composite.",
                  "Classify by use: highway, railway, foot, aqueduct.",
                  "State the span ranges: slab up to 10 m; RCC girder 10-25 m; PSC 25-40 m; steel truss 40-100 m; arch/stayed beyond.",
                  "State the role of clear headroom above high flood level or navigation channel in fixing deck elevation.",
                ],
              },
              {
                q: "Distinguish between superstructure and substructure.",
                marks: 2,
              },
              {
                q: "Name two materials used for bridge bearings.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Abutments and piers",
            body: [
              "An abutment is the substructure at each end of a bridge that supports the end of the superstructure and retains the approach embankment. The classic abutment has a breast wall against the earth pressure of the approach, a wing wall at each side to retain the embankment slope, and a back wall behind the seat that carries the bearings. The bridge seat at the top is the platform on which the bearings sit; it is raised above the ground by the abutment stem. A well-designed abutment drains backfill through weep holes so that water pressure does not build up against the wall.",
              "Types of abutment include the straight abutment with parallel wing walls, the return abutment with wing walls perpendicular to the bridge, and the U-abutment in which the wings form a U with the breast wall. A counterfort abutment has counterforts behind the breast wall to resist high earth pressure economically; a buried abutment is hidden behind an earth filler. The choice depends on height, earth pressure, and the alignment of the approach. For railway over-bridges the abutment must also resist the live load surcharge of the rail, and the wing walls must protect the embankment from erosion of the natural waterway.",
              "A pier is the intermediate substructure between two spans of a multi-span bridge, transferring the superstructure load to the foundation. Piers are classified by shape and material: solid masonry or RCC piers for short spans; framed RCC piers with a hammer-head cap; and tall slender steel or RCC trestle piers for bridges over deep valleys. Pier shape is fixed by hydraulic and navigation needs: a rectangular pier is simple but offers high resistance to flow; a cutwater pier has a pointed end to split floodwater and debris. Each pier must resist vertical load from the superstructure, horizontal braking and wind forces, and water current pressure.",
            ],
            bullets: [
              "Abutment: end support that retains approach embankment and carries the bearings.",
              "Abutment has breast wall, wing walls, back wall and bridge seat.",
              "Types: straight, return, U-abutment, counterfort, buried.",
              "Pier: intermediate substructure between two spans.",
              "Pier types: solid masonry or RCC, framed RCC, trestle for deep valleys.",
              "Pier loads: vertical, horizontal braking and wind, water current pressure.",
              "Cutwater end splits floodwater and debris; rectangular pier has high flow resistance.",
            ],
            table: {
              caption: "Abutment versus pier.",
              headers: ["Feature", "Abutment", "Pier"],
              rows: [
                ["Location", "end of bridge", "between two spans"],
                ["Earth pressure", "retains approach embankment", "no backfill"],
                ["Hydraulic load", "no water current", "resists water current"],
                ["Shape", "breast wall + wing walls", "solid, framed or trestle"],
                ["Load source", "superstructure + surcharge", "superstructure + wind + braking"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Abutment versus pier",
              caption:
                "Both are substructure, but only the abutment retains the approach earth.",
              left: {
                heading: "Abutment",
                items: [
                  "end support of a bridge",
                  "retains approach embankment",
                  "has breast wall and wing walls",
                  "carries surcharge from live load",
                  "U, return, counterfort types",
                ],
              },
              right: {
                heading: "Pier",
                items: [
                  "intermediate support between spans",
                  "no earth pressure from backfill",
                  "shaped to resist water current",
                  "carries braking and wind load",
                  "solid, framed or trestle types",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not mix up the roles",
              body: "Do not say a pier retains the approach embankment - only the abutment does. Confusing abutment and pier function is the single most common bridge answer slip.",
            },
            keyTerms: [
              { term: "Abutment", definition: "End substructure that supports the superstructure and retains the approach embankment." },
              { term: "Pier", definition: "Intermediate substructure between two spans that transfers load to the foundation." },
              { term: "Wing wall", definition: "Side wall of an abutment that retains the embankment slope beyond the breast wall." },
              { term: "Counterfort", definition: "Vertical buttress behind a tall abutment breast wall to resist earth pressure economically." },
            ],
            examQuestions: [
              {
                q: "Define an abutment and a pier. State the functions of each, the types of abutment used, and the loads a pier must resist in a river bridge.",
                marks: 7,
                outline: [
                  "Define abutment: end support of bridge that supports superstructure and retains approach embankment.",
                  "Name abutment components: breast wall, wing walls, back wall, bridge seat for bearings.",
                  "State types: straight, return, U-abutment, counterfort, buried.",
                  "Define pier: intermediate substructure between two spans that transfers load to foundation.",
                  "State pier types: solid masonry or RCC, framed RCC with hammer-head cap, trestle for deep valleys.",
                  "State pier loads: vertical from superstructure; horizontal braking and wind; water current pressure varying with velocity squared.",
                  "Explain cutwater end on a pier to split floodwater and debris; rectangular pier has high flow resistance.",
                ],
              },
              {
                q: "What is the function of a wing wall in an abutment?",
                marks: 2,
              },
              {
                q: "Why is a pier provided with a cutwater end?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Bridge foundations",
            body: [
              "Bridge foundations must transfer heavy pier and abutment loads to the ground while resisting scour of the river bed and lateral pressure of the water current. The choice of foundation type depends on the depth of the hard stratum below the river bed, the scour depth, the magnitude of the load, and the construction method possible in flowing water. Shallow foundations - open spread footings - are used when hard stratum lies within 3 to 5 m of the bed and scour is limited. Where hard stratum lies deeper, well foundations and pile foundations take over; well foundations are the classic Indian bridge foundation across major rivers.",
              "A well foundation, also called a caisson or cylinder, is a hollow prestressed RCC or steel shell that is sunk into the river bed by dredging the soil inside it. The shell is built up in stages above water, sunk under its own weight, and trimmed at the cutting edge; once the hard stratum is reached, the bottom is plugged with concrete, the well is filled with sand, and a pier cap is cast on top. Well foundations suit depths of 10 to 30 m, resist high scour and ship impact, and work in any soil. Their construction is slow and labour-intensive but reliable.",
              "Pile foundations use precast or cast-in-situ concrete piles driven or bored to the hard stratum; a group of piles is capped by an RCC pile cap that distributes the pier load. Piles suit hard stratum beyond 20 m depth, soft river beds, and high lateral loads from current and ship impact. Where a bridge spans a tidal estuary, the foundation is protected by a riprap apron or a cut-off wall that prevents scour from undermining the pile cap. For small bridges a raft foundation spread over the whole footing area carries the load when the soil is firm and the bed is dry.",
            ],
            bullets: [
              "Foundation choice depends on depth of hard stratum, scour depth, load, construction method in water.",
              "Open spread footing: hard stratum within 3-5 m, limited scour.",
              "Well foundation: hollow shell sunk by dredging; depths 10-30 m.",
              "Well foundation: plug bottom with concrete, fill with sand, cast pier cap.",
              "Pile foundation: precast or cast-in-situ piles to hard stratum beyond 20 m.",
              "Pile cap distributes pier load; riprap apron prevents scour.",
              "Raft foundation: firm soil, dry bed, small bridges.",
            ],
            table: {
              caption: "Foundation type by depth of hard stratum.",
              headers: ["Foundation", "Hard stratum depth (m)", "Best soil", "Example"],
              rows: [
                ["Open spread footing", "0-5", "stiff soil above water table", "small bridge abutment"],
                ["Well foundation", "10-30", "river bed with scour", "major river bridge pier"],
                ["Pile foundation", "20+", "soft river bed", "estuary bridge pier"],
                ["Raft foundation", "0-5", "firm soil, dry bed", "small culvert"],
                ["Caisson", "10-25", "below water table", "bridge pier in deep water"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Foundation type follows the depth of hard stratum",
              caption:
                "Read the depth of hard stratum below the river bed, then pick the matching foundation.",
              stages: [
                { label: "Hard stratum within 5 m", note: "open spread footing" },
                { label: "Hard stratum at 10-30 m, river bed", note: "well foundation" },
                { label: "Hard stratum beyond 20 m, soft bed", note: "pile foundation" },
                { label: "Firm soil, dry bed", note: "raft foundation" },
              ],
            },
            callout: {
              type: "tip",
              title: "State the scour line first",
              body: "State the scour-depth estimate before naming the foundation type. The foundation depth is fixed below the maximum scour depth, so the scour line drives the whole selection.",
            },
            keyTerms: [
              { term: "Well foundation", definition: "Hollow RCC or steel shell sunk by dredging, plugged with concrete; suits depths 10-30 m in a river bed." },
              { term: "Pile foundation", definition: "Group of precast or cast-in-situ piles capped by an RCC cap that distributes the pier load." },
              { term: "Scour depth", definition: "Depth below the river bed to which the bed material is removed by flood flow; fixes foundation depth." },
              { term: "Caisson", definition: "Watertight retaining structure sunk into the river bed to allow excavation and concreting below water." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of bridge foundation with neat sketches. State the conditions under which each type is selected, with particular reference to scour depth and the depth of hard stratum.",
                marks: 7,
                outline: [
                  "State that foundation choice depends on depth of hard stratum, scour depth, magnitude of load, construction method in water.",
                  "Describe shallow foundation: open spread footing, used when hard stratum within 3-5 m and scour is limited.",
                  "Describe well foundation: hollow RCC or steel shell sunk by dredging; plug bottom with concrete; fill with sand; cast pier cap.",
                  "State well foundation depths 10-30 m; resists scour and ship impact; slow but reliable.",
                  "Describe pile foundation: precast or cast-in-situ piles to hard stratum; pile cap distributes pier load; riprap apron prevents scour.",
                  "Describe raft foundation: spread over whole footing area; used on firm soil with dry bed for small bridges.",
                  "State the role of scour-depth estimate in fixing foundation depth below the river bed.",
                ],
              },
              {
                q: "What is a well foundation and where is it used?",
                marks: 2,
              },
              {
                q: "State one advantage of a pile foundation over a spread footing.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Superstructure types",
            body: [
              "The superstructure is the part of the bridge that carries traffic and spans between the substructure supports. The simplest form is the slab superstructure - a reinforced concrete slab spanning between abutments or piers, suitable for spans up to about 10 m. For longer spans, a girder-and-slab system uses RCC or prestressed concrete girders as the main flexural members, with a deck slab on top; spans of 20 to 40 m are routine. Steel girder bridges with RCC or steel decks carry highway and railway loads over spans of 40 to 100 m; the girders are plate girders or box girders.",
              "For long spans, structural forms change. An arch bridge transfers load to the abutments as horizontal thrust, allowing spans of 100 to 300 m with masonry, concrete or steel; the arch may be above the deck (true arch), below it (through arch) or partly buried. A truss bridge carries load through triangulated members in tension and compression, and is used for spans of 100 to 200 m, especially for railways. A suspension bridge hangs the deck from main cables draped over towers and anchored at the ends, reaching spans of 1000 m to 2000 m; a cable-stayed bridge runs straight stays from the tower to the deck, reaching 300 to 1000 m.",
              "Bearings connect the superstructure to the substructure. A fixed bearing holds the deck against translation and allows only rotation; an expansion bearing allows both rotation and longitudinal movement for temperature and creep. Steel rocker-roller bearings were the classic expansion bearing; today elastomeric pad bearings, which combine rubber layers and steel plates, are the standard for short and medium spans, while pot bearings and spherical bearings handle heavy loads and large rotations. Expansion joints at each end of the deck allow the deck to move; modern modular joints accommodate movement of up to 1 m without noise or leak.",
            ],
            bullets: [
              "Slab bridge: RCC slab spanning between supports, for spans up to 10 m.",
              "Girder bridge: RCC or PSC girders with deck slab, for 10-40 m.",
              "Steel girder or box girder: 40-100 m.",
              "Truss bridge: triangulated steel members, 100-200 m, suited to railways.",
              "Arch transfers thrust to abutments; 100-300 m.",
              "Cable-stayed: stays direct from tower to deck; 300-1000 m.",
              "Bearings: fixed (rotation only), expansion (rotation + movement); elastomeric, pot, spherical.",
            ],
            table: {
              caption: "Superstructure types and span.",
              headers: ["Type", "Span (m)", "Material", "Bearing requirement"],
              rows: [
                ["Slab", "up to 10", "RCC", "elastomeric pad"],
                ["RCC girder", "10-25", "RCC", "elastomeric pad"],
                ["PSC girder", "25-40", "PSC", "pot or spherical"],
                ["Steel truss", "100-200", "steel", "rocker-roller"],
                ["Arch", "100-300", "RCC or steel", "fixed hinge"],
                ["Cable-stayed", "300-1000", "steel", "fixed at deck"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Superstructure form forks by span",
              caption:
                "Span length forks the choice: girder, truss or arch, or cable-supported.",
              start: "Choose span length and site",
              branches: [
                { label: "Span up to 25 m", outcome: "RCC or PSC girder bridge", good: true },
                { label: "Span 50 to 200 m", outcome: "steel truss or arch bridge", good: true },
                { label: "Span beyond 300 m", outcome: "cable-stayed or suspension bridge", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Learn the span ranges",
              body: "Learn the span ranges by heart: slab up to 10 m, RCC girder 10-25 m, PSC 25-40 m, steel truss 100-200 m, suspension beyond 1000 m. RGPV questions ask for these ranges directly.",
            },
            keyTerms: [
              { term: "Slab bridge", definition: "RCC superstructure in which the deck slab itself spans between supports, for spans up to 10 m." },
              { term: "Girder bridge", definition: "Superstructure using RCC, PSC or steel girders as the main flexural members with a deck slab on top." },
              { term: "Cable-stayed bridge", definition: "Bridge with straight stays running from a tower directly to the deck, for spans 300-1000 m." },
              { term: "Expansion bearing", definition: "Bearing that allows both rotation and longitudinal movement of the deck for temperature and creep." },
            ],
            examQuestions: [
              {
                q: "Classify bridge superstructures by structural form, indicating the span range for which each is suitable. State the function of bearings and the types of expansion bearing in use.",
                marks: 7,
                outline: [
                  "Classify by span: slab (up to 10 m); RCC girder (10-25 m); PSC girder (25-40 m); steel girder (40-100 m); truss (100-200 m); arch (100-300 m); suspension (1000-2000 m); cable-stayed (300-1000 m).",
                  "Describe slab superstructure: RCC slab spanning between supports for short spans.",
                  "Describe girder-and-slab: RCC or PSC girders carry deck slab for medium spans; steel plate or box girder for longer.",
                  "Describe arch: transfers load by arch thrust to abutments; true, through or partly buried.",
                  "State the function of bearings: connect superstructure to substructure; allow rotation and longitudinal movement.",
                  "State bearing types: fixed, expansion (rocker-roller, elastomeric pad, pot, spherical).",
                  "State the role of expansion joints: allow deck movement; modular joints accommodate up to 1 m without noise.",
                ],
              },
              {
                q: "Distinguish between a slab bridge and a girder bridge.",
                marks: 2,
              },
              {
                q: "What is the function of an elastomeric pad bearing?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "IRC loading",
            body: [
              "IRC loading is the standard set of vehicular loads specified by the Indian Roads Congress (IRC:6) for the design of highway bridges. IRC Class AA represents the heaviest tracked and wheeled military vehicles, a 700 kN tracked load or a 1000 kN wheeled load, and is specified for bridges on national highways and on routes of military importance. IRC Class 70R is a standard heavy loading of comparable magnitude used for major bridges. IRC Class A is the standard train of wheeled vehicles with axle loads up to 114 kN, applied to all permanent highway bridges; IRC Class B is the lighter equivalent for minor roads and temporary bridges.",
              "Each load class is applied as a moving load that produces the maximum bending moment and shear in the member being designed. For a simply supported span the load train is positioned so that the heaviest axle sits at midspan for maximum moment and at the support for maximum shear, with the train stretched to either side. The maximum moment under a point load is W*L/4 at midspan; under a uniformly distributed load it is w*L^2/8. The dynamic effect of moving vehicles is allowed for by an impact factor that increases the live load by 10 to 25 percent, depending on span and class.",
              "Earth pressure from the approach embankment acts on the abutment as a permanent lateral load; water current pressure acts on the pier substructure as a horizontal load that varies as the square of velocity. Wind load acts on the exposed area of the superstructure and traffic; longitudinal braking force is 20 percent of the first lane load and 10 percent of subsequent lanes. Temperature variation induces longitudinal force in the deck unless expansion bearings are provided. The load combinations in IRC:6 group these effects with partial safety factors so the most unfavourable but realistic combination governs the design, ensuring safety without excessive cost.",
            ],
            bullets: [
              "IRC Class AA: 700 kN tracked or 1000 kN wheeled, for national highways and military routes.",
              "IRC Class 70R: heavy standard loading of comparable magnitude.",
              "IRC Class A: standard wheeled train, axle loads up to 114 kN, for all permanent bridges.",
              "IRC Class B: lighter wheeled train, for minor and temporary roads.",
              "Moving load positioned for maximum moment (axle at midspan) and shear (axle at support).",
              "Impact factor 10 to 25 percent depending on span and class.",
              "Load combinations of IRC:6 group dead, live, earth, water, wind, braking, temperature.",
            ],
            table: {
              caption: "IRC loading classes.",
              headers: ["Class", "Vehicle", "Load (kN)", "Used for"],
              rows: [
                ["AA", "tracked or wheeled", "700/1000", "national highways, military routes"],
                ["70R", "tracked or wheeled", "700/1000", "major highway bridges"],
                ["A", "wheeled train", "114 per axle", "all permanent highway bridges"],
                ["B", "wheeled train", "lighter", "minor and temporary roads"],
                ["A + pedestrian", "with crowd load", "4 kN/m^2", "footpaths"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "IRC loading classes by route importance and load magnitude",
              caption:
                "Place each IRC class in its quadrant of route importance against load magnitude.",
              axes: { x: "Route importance", y: "Load magnitude" },
              quadrants: [
                { label: "Class B", note: "minor and temporary roads" },
                { label: "Class A", note: "standard highway train, all permanent bridges" },
                { label: "Class 70R", note: "major bridges, heavy standard loading" },
                { label: "Class AA", note: "national highways and military routes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Position the load for maximum effect",
              body: "When solving IRC loading questions, position the heaviest axle at midspan for maximum moment and at the support for maximum shear. The maximum moment under a point load is W*L/4 - memorise this.",
            },
            keyTerms: [
              { term: "IRC Class AA", definition: "Heaviest IRC loading: 700 kN tracked or 1000 kN wheeled, for national highways and military routes." },
              { term: "Impact factor", definition: "Factor increasing the live load by 10-25 percent to allow for the dynamic effect of moving vehicles." },
              { term: "IRC Class A", definition: "Standard wheeled train with axle loads up to 114 kN, applied to all permanent highway bridges." },
              { term: "Load combination", definition: "Grouping of dead, live, earth, water, wind, braking and temperature effects with partial safety factors per IRC:6." },
            ],
            examQuestions: [
              {
                q: "State the IRC loading classes for highway bridges. Define the impact factor and the longitudinal braking force. Outline the load combinations considered in bridge design.",
                marks: 7,
                outline: [
                  "State IRC Class AA: 700 kN tracked or 1000 kN wheeled, for national highways and military routes.",
                  "State IRC Class 70R: standard heavy loading of comparable magnitude for major bridges.",
                  "State IRC Class A: standard wheeled train with axle loads up to 114 kN, applied to all permanent highway bridges.",
                  "State IRC Class B: lighter wheeled train for minor and temporary roads.",
                  "Explain moving load positioning: heaviest axle at midspan for maximum moment, at support for maximum shear.",
                  "Define impact factor: dynamic effect of moving vehicles; 10 to 25 percent of live load depending on span and class.",
                  "State the load combinations of IRC:6: dead, live, earth pressure, water, wind, braking, temperature; partial safety factors govern.",
                ],
              },
              {
                q: "State the axle load of the heaviest vehicle in IRC Class A loading.",
                marks: 2,
              },
              {
                q: "Why is the dynamic effect of moving loads allowed for by an impact factor?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =========================== UNIT IV - HARBOUR AND TUNNEL ENGINEERING ===========================
    {
      number: 4,
      roman: "IV",
      title: "Harbour and Tunnel Engineering",
      summary:
        "Harbour components and layout, breakwaters and docks, tunnel sections and alignment, tunneling methods by ground, and the ventilation and lining that finish the tunnel.",
      chapter: {
        number: "04",
        title: "Harbour and Tunnel Engineering",
        intro:
          "Unit IV covers the two underground-and-underwater branches of transportation engineering: harbours and tunnels. The harbour side runs from harbour components and layout through breakwaters and docks; the tunnel side runs from sections and alignment through tunneling methods to ventilation and lining.",
        inOneBreath:
          "A harbour is entrance, breakwater, basin, berths, wharves and back-up land; natural (Mumbai), semi-natural or artificial (Chennai); breakwaters are rubble mound (armour of tetrapods sized by Hudson formula) or vertical wall (reflecting); docks are wet (lock-gate), dry (graving) or floating; tunnels are horseshoe, circular or rectangular in section; aligned horizontally by topography and vertically by grade; driven by drill-and-blast in hard rock, shield in soft ground, cut-and-cover when shallow; ventilated longitudinal, transverse or by piston effect; lined with bolts, shotcrete and concrete.",
        sections: [
          {
            number: "4.1",
            title: "Harbour components and layout",
            body: [
              "A harbour is a sheltered area of water on a coast where ships can anchor, load and unload cargo, take on fuel, and seek refuge from storms. A harbour complex has several components: the entrance channel that gives ships access from the open sea; the breakwater that shelters the harbour from waves; the basin where ships lie at anchor; the berths where ships are tied up for working; the wharves and quays that line the berths and carry cranes and sheds; and the transit sheds and warehouses where cargo is sorted and stored before delivery. The back-up land carries roads, railways and stacking yards.",
              "Harbours are classified by location and use. A natural harbour uses a protected bay or estuary with little construction, like Mumbai and Visakhapatnam. A semi-natural harbour needs a breakwater on one side only. An artificial harbour is built from scratch with breakwaters enclosing an open coast, like Chennai. By use, harbours split into commercial ports carrying general cargo and containers, fishing harbours with processing sheds and ice factories, naval harbours for warships with protected anchorages, and harbours of refuge that shelter ships in storms without cargo handling. Each type fixes the depth, berth length, crane capacity and back-up area needed.",
              "Harbour layout is fixed by the orientation of the coast, the prevailing wind and wave direction, and the depth of water needed at the berths. The entrance is placed on the leeward side of the breakwater so ships enter with the wind abeam; its width is 0.7 to 1.0 times the length of the largest ship, with a depth at least 1.5 m greater than the loaded draft. The basin provides a turning circle of 2 to 4 times ship length; the berths lie along the wharves with apron widths of 15 to 30 m for cranes and cargo handling. A layout that ignores siltation by longshore drift can fill a harbour basin within years.",
            ],
            bullets: [
              "Harbour: sheltered water area on a coast for anchoring, cargo, fuel, refuge.",
              "Components: entrance channel, breakwater, basin, berths, wharves, transit sheds, back-up land.",
              "Natural harbour: protected bay with little construction (Mumbai).",
              "Semi-natural harbour needs a breakwater on one side only.",
              "Artificial harbour built from scratch with breakwaters (Chennai).",
              "By use: commercial, fishing, naval, harbour of refuge.",
              "Entrance on leeward side; width 0.7-1.0 times ship length; depth 1.5 m over draft.",
            ],
            table: {
              caption: "Harbour types by location and use.",
              headers: ["Type", "Example", "Use", "Construction"],
              rows: [
                ["Natural", "Mumbai", "commercial", "minimal works"],
                ["Semi-natural", "Cochin", "commercial", "breakwater on one side"],
                ["Artificial", "Chennai", "commercial", "fully enclosed by breakwater"],
                ["Fishing", "Sassoon Dock", "fish landing", "ice, processing sheds"],
                ["Naval", "Karwar", "naval base", "protected anchorage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "A ship's path from open sea to berth",
              caption:
                "A ship moves from the open sea through the entrance to the berth in five stages.",
              steps: [
                { label: "Open-sea entrance channel", note: "approach" },
                { label: "Breakwater shelters the basin", note: "wave protection" },
                { label: "Turning basin inside the breakwater", note: "2-4 ship lengths" },
                { label: "Berths along wharves and quays", note: "cargo working" },
                { label: "Transit sheds, warehouses and back-up land", note: "storage and access" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sketch the harbour first",
              body: "Sketch a harbour as a half-circle breakwater with entrance, basin, berths and transit sheds. The sketch is worth five marks in any harbour question and should be your first move.",
            },
            keyTerms: [
              { term: "Harbour", definition: "Sheltered area of water on a coast where ships anchor, load, unload, refuel and take refuge." },
              { term: "Breakwater", definition: "Structure built into the sea to shelter a harbour or coast from wave action." },
              { term: "Berth", definition: "Designated place along a wharf where a ship is tied up for cargo working." },
              { term: "Transit shed", definition: "Single-storey warehouse on the wharf for short-term cargo storage before delivery." },
            ],
            examQuestions: [
              {
                q: "Define a harbour. State its components with a sketch. Classify harbours by location and by use, with one example of each.",
                marks: 7,
                outline: [
                  "Define a harbour as a sheltered area of water on a coast where ships anchor, load, unload, refuel, take refuge.",
                  "Name the components: entrance channel, breakwater, basin, berths, wharves and quays, transit sheds and warehouses, back-up land.",
                  "Classify by location: natural (Mumbai), semi-natural, artificial (Chennai).",
                  "Classify by use: commercial, fishing, naval, harbour of refuge.",
                  "State that each type fixes depth, berth length, crane capacity and back-up area.",
                  "State the entrance placement on the leeward side; width 0.7 to 1.0 times ship length; depth at least 1.5 m greater than loaded draft.",
                  "State the basin turning circle 2 to 4 times ship length; berth apron 15 to 30 m for cranes.",
                ],
              },
              {
                q: "Distinguish between a natural harbour and an artificial harbour.",
                marks: 2,
              },
              {
                q: "What is a transit shed and where is it located?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Breakwaters and docks",
            body: [
              "A breakwater is a structure built out into the sea to protect a harbour or coast from wave action. It creates a calm water area behind it where ships can berth safely. Breakwaters are of two main types: the rubble mound breakwater, a heap of quarry stone with a heavy armour layer on the seaward face; and the vertical wall breakwater, a caisson or masonry wall that reflects wave energy. Composite breakwaters combine a rubble mound base with a vertical wall on top. The choice depends on water depth, wave height, foundation soil and the availability of stone or caissons.",
              "A rubble mound breakwater has a core of small quarried stone, a filter layer of intermediate stone, and an armour layer of large blocks or concrete tetrapods that resist wave action. The armour blocks are sized by the Hudson formula, which gives the required block weight as a function of wave height, block density and slope angle. Tetrapods and dolosse interlock to dissipate wave energy and are used when natural stone of adequate size is unavailable. The crest is set above the design wave run-up; the seaward slope is 1 in 2 or 1 in 3 to absorb energy; the harbour side is steeper.",
              "A dock is a facility where a ship is brought for cargo handling, repair or dry-docking. A wet dock has a permanent water level maintained by a lock gate, allowing ships to berth at all states of the tide; it is used where the tidal range is large, as at Liverpool and Kolkata. A dry dock is a basin closed by a caisson that is pumped dry so the ship rests on blocks for inspection and repair of the underwater hull. A floating dock is a steel or concrete pontoon that is submerged to receive a ship and raised to lift it clear of water.",
            ],
            bullets: [
              "Breakwater shelters harbour or coast from wave action.",
              "Rubble mound: core, filter, armour layer of large blocks or tetrapods.",
              "Vertical wall: caisson or masonry, reflects wave energy.",
              "Hudson formula gives armour block weight from wave height, density, slope angle.",
              "Tetrapods and dolosse interlock to dissipate wave energy.",
              "Wet dock: permanent water level by lock gate (Kolkata).",
              "Dry dock: basin closed by caisson, pumped dry for repair; floating dock submersible pontoon.",
            ],
            table: {
              caption: "Breakwater and dock types compared.",
              headers: ["Component", "Function", "Type 1", "Type 2"],
              rows: [
                ["Breakwater", "shelters harbour from waves", "rubble mound", "vertical wall"],
                ["Armour unit", "resists wave action", "tetrapod", "dolosse"],
                ["Dock (water)", "ship berthing at all tide", "wet dock", "lock-gate basin"],
                ["Dock (dry)", "ship repair underwater", "graving dock", "floating dock"],
                ["Berth", "ship tied up", "wharf (parallel)", "jetty (perpendicular)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Rubble mound versus vertical wall breakwater",
              caption:
                "Rubble mound absorbs wave energy; vertical wall reflects it - choice follows depth and foundation.",
              left: {
                heading: "Rubble mound",
                items: [
                  "heap of quarry stone",
                  "armour layer of blocks or tetrapods",
                  "energy absorbed by interlocking voids",
                  "flexible to settlement",
                  "best for moderate depth",
                ],
              },
              right: {
                heading: "Vertical wall",
                items: [
                  "caisson or masonry wall",
                  "energy reflected back to sea",
                  "needs firm foundation",
                  "less material, faster to build",
                  "best for deep water",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Absorb versus reflect",
              body: "A rubble mound breakwater absorbs wave energy; a vertical wall reflects it. Never describe them as interchangeable - the choice follows water depth and foundation soil.",
            },
            keyTerms: [
              { term: "Rubble mound breakwater", definition: "Heap of quarry stone with core, filter and armour layers of blocks or tetrapods that absorb wave energy." },
              { term: "Dry dock", definition: "Basin closed by a caisson and pumped dry so a ship rests on blocks for underwater hull repair." },
              { term: "Wet dock", definition: "Dock with permanent water level maintained by a lock gate, allowing berthing at all tide states." },
              { term: "Tetrapod", definition: "Concrete armour unit of four legs that interlocks to resist wave action on a rubble mound breakwater." },
            ],
            examQuestions: [
              {
                q: "Describe the types of breakwater used in harbour engineering with sketches. State the function of a tetrapod and the Hudson formula for armour block weight.",
                marks: 7,
                outline: [
                  "Define a breakwater as the structure that protects a harbour or coast from wave action.",
                  "Describe rubble mound breakwater: core of small stone, filter layer, armour layer of large blocks or tetrapods.",
                  "Describe vertical wall breakwater: caisson or masonry wall reflecting wave energy.",
                  "State the Hudson formula for armour block weight as a function of wave height, block density, slope angle.",
                  "Describe tetrapods and dolosse as interlocking armour units used when natural stone is unavailable.",
                  "Define a wet dock as one with permanent water level maintained by a lock gate (Kolkata, Liverpool).",
                  "Define a dry dock as a basin closed by a caisson, pumped dry for ship repair; floating dock as a submersible pontoon.",
                ],
              },
              {
                q: "Distinguish between a wet dock and a dry dock.",
                marks: 2,
              },
              {
                q: "State one advantage of a floating dock over a graving dock.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Tunnel sections and alignment",
            body: [
              "A tunnel is an underground passage for a road, railway, water supply or sewage, driven through a hill, mountain or under a river. Tunnel section shape is fixed by the use, the method of driving, and the rock pressure expected. A horseshoe section suits railway and highway tunnels in good rock; a circular section resists uniform rock pressure and water pressure, and is used for sub-aqueous tunnels driven by shield or TBM; a rectangular section with a flat roof suits shallow cut-and-cover tunnels. Each section carries the traffic lane or track with required clearance, ventilation duct and walkway.",
              "Tunnel alignment is the geometric line - horizontal and vertical - along which the tunnel is driven. The horizontal alignment is a series of straights and curves that follow the topography of the surface and the geology of the underground; vertical alignment follows the hydraulic grade for a water tunnel, or a maximum ruling gradient for a railway tunnel. For long tunnels in mountainous terrain, vertical shafts are sunk at intervals to divide the work into several headings and shorten the construction time. The minimum radius of horizontal curve in a railway tunnel is larger than in the open to keep sight distance and avoid end-wall collision.",
              "Geological investigation for a tunnel is more thorough than for any surface work because the rock is the structure, the load and the medium of construction. Surface mapping, boreholes at intervals along the alignment, and geophysical surveys establish the rock types, the joint pattern, the water table and the fault zones. A tunnel in hard massive rock needs light support; a tunnel in jointed rock or soft soil needs heavy steel supports, concrete lining and forward probing to detect water-bearing strata. A portal at each end is designed for stability, drainage and aesthetics, and the approach cut is supported against slope failure.",
            ],
            bullets: [
              "Horseshoe section: railway and highway tunnels in good rock.",
              "Circular section: resists uniform pressure, used for sub-aqueous tunnels by shield or TBM.",
              "Rectangular section: shallow cut-and-cover tunnels.",
              "Horizontal alignment: straights and curves following topography and geology.",
              "Vertical alignment: hydraulic grade for water tunnels, ruling gradient for railway.",
              "Vertical shafts at intervals divide work into several headings.",
              "Geological investigation: surface mapping, boreholes, geophysics for rock type, joints, water, faults.",
            ],
            table: {
              caption: "Tunnel sections and their use.",
              headers: ["Section", "Shape", "Best for", "Method"],
              rows: [
                ["Horseshoe", "arched top, flat invert", "railway, highway in rock", "drill-and-blast"],
                ["Circular", "full circle", "sub-aqueous, water pressure", "TBM or shield"],
                ["Rectangular", "flat roof and invert", "shallow cut-and-cover", "cut-and-cover"],
                ["Oval", "egg shape", "sewer under pressure", "shield"],
                ["D-shaped", "flat top, curved invert", "short highway tunnel in rock", "drill-and-blast"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Tunnel alignment from geology to headings",
              caption:
                "Fix the geology first, then the geometry, then the construction method.",
              stages: [
                { label: "Surface mapping and boreholes", note: "geological investigation" },
                { label: "Fix horizontal alignment", note: "straights and curves" },
                { label: "Fix vertical alignment", note: "gradient and grade line" },
                { label: "Sink shafts and drive headings", note: "construction phase" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three sections, three examples",
              body: "Name three tunnel sections in every tunnel question: horseshoe (railway), circular (sub-aqueous), rectangular (cut-and-cover). The three-section answer with one example each is the full-marks format.",
            },
            keyTerms: [
              { term: "Tunnel alignment", definition: "The horizontal and vertical geometric line along which a tunnel is driven." },
              { term: "Horseshoe section", definition: "Tunnel cross-section with arched top and flat invert, suited to railway and highway tunnels in good rock." },
              { term: "Portal", definition: "The entrance and exit of a tunnel, designed for stability, drainage and aesthetics." },
              { term: "Cover", definition: "Vertical distance between the tunnel crown and the ground surface above." },
            ],
            examQuestions: [
              {
                q: "Describe the common cross-sections of a tunnel. State the factors that govern tunnel alignment and the role of geological investigation in tunnel design.",
                marks: 7,
                outline: [
                  "Describe horseshoe section: suits railway and highway tunnels in good rock.",
                  "Describe circular section: resists uniform rock and water pressure; used for sub-aqueous TBM-driven tunnels.",
                  "Describe rectangular section: flat roof, suits shallow cut-and-cover tunnels.",
                  "State that section carries traffic lane or track with clearance, ventilation duct and walkway.",
                  "Define horizontal alignment: straights and curves following topography and geology.",
                  "Define vertical alignment: hydraulic grade for water tunnels; maximum ruling gradient for railway tunnels.",
                  "State the role of geological investigation: surface mapping, boreholes, geophysical surveys for rock type, joints, water table, faults.",
                ],
              },
              {
                q: "Why is a circular section preferred for sub-aqueous tunnels?",
                marks: 2,
              },
              {
                q: "What is a tunnel portal and what is its function?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Tunneling methods",
            body: [
              "Tunneling methods are chosen by the rock type, the tunnel cross-section, the length and the depth of cover. In hard rock the classic method is drilling and blasting: a pattern of holes is drilled into the face by a drill jumbo, charged with explosive, blasted, and the broken muck is removed by loaders and dumpers; the exposed rock is then supported by rock bolts, steel ribs and shotcrete. The cycle of drill-blast-muck-support repeats for every metre of advance. Modern hard-rock tunnels use a tunnel boring machine (TBM) that cuts the rock with disc cutters and installs the lining in one continuous operation, reaching advance rates of 20 to 40 m per day.",
              "In soft ground - clay, sand, or soil below the water table - the shield method is used. A shield is a steel cylinder with a cutting edge that is jacked forward into the soil; the soil inside the shield is excavated by hand or by a mechanical cutter, and a concrete or cast-iron lining is erected inside the tail of the shield as it advances. A slurry or earth-pressure-balance shield uses pressurised bentonite slurry or excavated soil to balance the face pressure and prevent ground loss and surface settlement. The method is used for sub-aqueous and metro tunnels in soft alluvium.",
              "For shallow tunnels in soft ground the cut-and-cover method is used: a trench is excavated from the surface, the tunnel structure is cast in the trench, and the surface is restored. This method is simple and cheap but disruptive to surface traffic, and is used for metro tunnels under wide roads and for short underpasses. For tunnels under rivers and estuaries the immersed tube method is used: tunnel sections are cast in a dry dock, floated to site, sunk into a dredged trench, joined underwater and backfilled. Each method has its own safety, environmental and cost profile that fixes the choice.",
            ],
            bullets: [
              "Drill-and-blast in hard rock: drill pattern, charge, blast, muck, support by bolts/ribs/shotcrete.",
              "TBM in hard rock: disc cutters, continuous advance, lining installed behind cutter head.",
              "Shield in soft ground: steel cylinder, jacked forward, soil excavated, lining erected in tail.",
              "Slurry or EPB shield: pressurised slurry or excavated soil balances face pressure.",
              "Cut-and-cover for shallow tunnels: trench from surface, cast, restore surface.",
              "Immersed tube for sub-aqueous: cast in dry dock, floated, sunk, joined, backfilled.",
              "Method choice follows rock type, depth of cover, cross-section and length.",
            ],
            table: {
              caption: "Tunneling methods by ground and rate.",
              headers: ["Method", "Best ground", "Depth", "Typical rate (m/day)"],
              rows: [
                ["Drill and blast", "hard rock", "any", "5-10"],
                ["TBM (hard rock)", "massive rock", "deep", "20-40"],
                ["Shield", "soft ground", "below water table", "8-15"],
                ["EPB TBM", "soft soil", "urban, below water", "10-20"],
                ["Cut-and-cover", "shallow soft ground", "up to 15 m", "varies"],
                ["Immersed tube", "river or estuary", "shallow underwater", "cast off-site"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Tunneling method forks by rock type and cover",
              caption:
                "Identify the ground and depth of cover, then pick the matching method.",
              start: "Identify rock type and cover",
              branches: [
                { label: "Hard rock, deep cover", outcome: "drill-and-blast or TBM", good: true },
                { label: "Soft ground below water table", outcome: "shield or EPB TBM", good: true },
                { label: "Shallow soft ground", outcome: "cut-and-cover or immersed tube", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the method in one line",
              body: "Match the method to the ground in one sentence: hard rock - drill-and-blast or TBM; soft below water - shield; shallow soft - cut-and-cover. This triad answers most method-selection questions.",
            },
            keyTerms: [
              { term: "Drill and blast", definition: "Hard-rock tunneling method using drill jumbo, explosives and muck removal, with bolt/rib/shotcrete support." },
              { term: "Shield method", definition: "Soft-ground tunneling using a steel cylinder jacked forward, with lining erected in the tail." },
              { term: "Cut-and-cover", definition: "Shallow tunneling by trenching from the surface, casting the tunnel and restoring the surface." },
              { term: "TBM", definition: "Tunnel boring machine with disc cutters that cuts rock and installs lining in one continuous operation." },
            ],
            examQuestions: [
              {
                q: "Describe the methods of tunneling in hard rock, soft ground and shallow ground. State the conditions under which each method is selected.",
                marks: 7,
                outline: [
                  "Describe drill-and-blast in hard rock: drill pattern, charge, blast, muck removal, support by bolts/ribs/shotcrete.",
                  "Describe TBM in hard rock: disc cutters, continuous advance, lining installed behind cutter head; 20-40 m/day.",
                  "Describe shield method in soft ground: steel cylinder with cutting edge, jacked forward, soil excavated inside, lining erected in tail.",
                  "Describe slurry or EPB shield: pressurised bentonite or excavated soil balances face pressure, prevents ground loss.",
                  "Describe cut-and-cover for shallow tunnels: trench from surface, cast tunnel, restore surface.",
                  "Describe immersed tube for sub-aqueous: sections cast in dry dock, floated to site, sunk into dredged trench, joined underwater, backfilled.",
                  "State that method choice follows rock type, depth of cover, cross-section and length.",
                ],
              },
              {
                q: "What is a tunnel boring machine (TBM)?",
                marks: 2,
              },
              {
                q: "State one advantage of cut-and-cover over shield tunneling.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Tunnel ventilation and lining",
            body: [
              "Tunnel ventilation removes toxic gases from vehicle exhaust, dust from blasting, heat from the rock, and smoke in the event of a fire. The choice of ventilation depends on the length of the tunnel and the traffic type. A short railway tunnel in good rock may need no mechanical ventilation, relying on the piston effect of moving trains. A long highway tunnel with dense traffic requires longitudinal ventilation by jet fans mounted at the soffit, transverse ventilation by ducts running fresh air in and stale air out, or semi-transverse ventilation that supplies fresh air through a duct and exhausts through portals.",
              "Ventilation design for a highway tunnel computes the required fresh air volume from the number and type of vehicles, the gradient, the speed, and the permissible carbon monoxide level of 100 to 200 ppm. Jet fans of 15 to 40 kW each push air along the tunnel at 4 to 6 m/s; for tunnels over 3 km a transverse system is preferred to keep a uniform air quality throughout. In railway tunnels the piston effect of train movement gives most of the ventilation; in metros with frequent trains, mechanical ventilation is needed only at stations and emergency escape shafts.",
              "Tunnel lining is the inner surface of the tunnel that protects the rock from weathering, gives a smooth hydraulic surface, and supports the rock pressure. A lining may be temporary or permanent. Temporary lining of rock bolts, steel ribs and shotcrete supports the freshly exposed rock; permanent lining of cast-in-situ or precast concrete carries the long-term load and finishes the tunnel. In a TBM-driven tunnel the precast concrete segments erected behind the cutter head serve as both temporary and permanent lining. Lining thickness is fixed by the rock pressure, the tunnel diameter and the design life of 50 to 100 years.",
            ],
            bullets: [
              "Ventilation removes exhaust gases, blasting dust, rock heat, smoke in fire.",
              "Longitudinal: jet fans at soffit push air along tunnel at 4-6 m/s; suits up to 3 km.",
              "Transverse: ducts run fresh air in and stale air out; suits over 3 km.",
              "Semi-transverse: fresh air by duct, exhaust by portal.",
              "Piston effect of moving trains ventilates short railway tunnels.",
              "Lining protects rock, gives smooth hydraulic surface, supports rock pressure.",
              "Temporary lining (bolts, shotcrete, ribs) vs permanent (cast-in-situ or precast concrete).",
            ],
            table: {
              caption: "Tunnel ventilation systems.",
              headers: ["System", "Air path", "Best for", "Notes"],
              rows: [
                ["Longitudinal", "along tunnel by jet fans", "up to 3 km highway", "simple, low cost"],
                ["Transverse", "fresh in, stale out by ducts", "over 3 km highway", "uniform air quality"],
                ["Semi-transverse", "fresh in by duct, out by portal", "medium tunnel", "compromise"],
                ["Piston effect", "train movement", "railway tunnel", "no fans needed"],
                ["Mechanical", "fans at stations and shafts", "metro tunnels", "for emergency smoke"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "A tunnel is built outward from the rock",
              caption:
                "The lining is a four-layer sandwich from rock mass out to the finished concrete surface.",
              layers: [
                { label: "Final concrete lining - cast-in-situ or precast", note: "permanent" },
                { label: "Waterproof membrane", note: "seals water out" },
                { label: "Primary support - rock bolts, shotcrete, steel ribs", note: "temporary" },
                { label: "Rock mass - the load and the medium", note: "the structure" },
              ],
            },
            callout: {
              type: "exam",
              title: "The 3 km rule",
              body: "For tunnel ventilation, state the trigger: tunnel length over 3 km needs transverse ventilation. The number 3 km is the rule of thumb that examiners look for.",
            },
            keyTerms: [
              { term: "Longitudinal ventilation", definition: "System using jet fans at the soffit to push air along the tunnel; suits tunnels up to 3 km." },
              { term: "Tunnel lining", definition: "Inner surface protecting the rock, giving a smooth hydraulic surface and supporting rock pressure." },
              { term: "Shotcrete", definition: "Sprayed concrete applied to the rock face as temporary support in tunneling." },
              { term: "Piston effect", definition: "Natural ventilation of a railway tunnel by the air pushed ahead of a moving train." },
            ],
            examQuestions: [
              {
                q: "Describe the systems of tunnel ventilation with sketches. State the components of a tunnel lining and the difference between temporary and permanent lining. Outline the criterion for choosing longitudinal versus transverse ventilation.",
                marks: 7,
                outline: [
                  "State the purpose of tunnel ventilation: remove toxic exhaust gases, blasting dust, rock heat, smoke in fire.",
                  "Describe longitudinal ventilation: jet fans at the soffit push air along the tunnel at 4-6 m/s; suits tunnels up to 3 km.",
                  "Describe transverse ventilation: ducts run fresh air in and stale air out; suits tunnels over 3 km.",
                  "Describe semi-transverse ventilation: supplies fresh air through duct, exhausts through portals.",
                  "State the piston effect of moving trains as the natural ventilation mechanism in short railway tunnels.",
                  "Define tunnel lining as the inner surface protecting rock, giving smooth hydraulic surface, supporting rock pressure.",
                  "Distinguish temporary lining (rock bolts, shotcrete, steel ribs) from permanent lining (cast-in-situ or precast concrete); state TBM precast segments serve both.",
                ],
              },
              {
                q: "What is the piston effect in a railway tunnel?",
                marks: 2,
              },
              {
                q: "State one function of shotcrete in tunneling.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    // =========================== UNIT V - TRAFFIC ENGINEERING AND PAVEMENT DESIGN ===========================
    {
      number: 5,
      roman: "V",
      title: "Traffic Engineering and Pavement Design",
      summary:
        "Traffic studies and their design parameters, signs and signals including Webster's cycle time, intersections and the IRC road classification, flexible and rigid pavement design, and the ESWL and equivalent wheel load concepts.",
      chapter: {
        number: "05",
        title: "Traffic Engineering and Pavement Design",
        intro:
          "Unit V brings the road to life: traffic studies that feed every design decision, signs and signals that regulate and guide, intersections that resolve conflict and the IRC classification that orders the network, the flexible and rigid pavements that carry the load, and the ESWL and equivalent wheel load concepts that feed pavement thickness.",
        inOneBreath:
          "Traffic studies give AADT, design hourly volume (30th highest hour) and PCU; signs are regulatory (circular), warning (triangular) and informatory (rectangular); Webster's cycle time C = (1.5L+5)/(1-Y) splits green time by demand; intersections are at-grade (T, cross, roundabout) or grade-separated (diamond, cloverleaf); IRC classes run from expressway to village road; flexible pavement is designed by CBR (IRC:37), rigid by Westergaard (IRC:58); ESWL converts dual-tyre assembly to single load, EWL factor uses the fourth-power law (W/80)^4 to convert axle damage to standard axles.",
        sections: [
          {
            number: "5.1",
            title: "Traffic studies",
            body: [
              "Traffic engineering is the branch of civil engineering that deals with the safe and efficient movement of people and goods on roads. Traffic studies are the data-collection exercises that feed every planning and design decision. Volume studies measure the number of vehicles passing a point per hour or per day; the peak-hour volume sets the design hour for capacity. Speed studies measure the speed of individual vehicles, give the 85th-percentile speed that is used to set speed limits, and reveal whether a road is being used at or above its design speed. Origin-destination studies track where trips begin and end, and feed traffic forecasting models.",
              "Traffic studies also include the classified count, where vehicles are counted by type - car, two-wheeler, bus, truck, cycle - to derive passenger car units; parking studies that measure demand and duration in a central area; and accident studies that map black spots and analyse causes. Data are collected by manual counting, by pneumatic tube detectors, by inductive loop detectors embedded in the road, and increasingly by video and GPS-based systems. The results feed the four-stage transport planning model: trip generation, trip distribution, modal split and traffic assignment, which together forecast the traffic on a road or a network for a design year.",
              "The practical output of traffic studies is a set of design parameters that govern road geometry and capacity. The annual average daily traffic (AADT) sets the road class; the design hourly volume - the 30th highest hour of the year - sets the lane capacity needed; the directional split, the peak-hour factor and the heavy-vehicle share refine the analysis. IRC:64 gives the capacity of rural roads in passenger car units per hour; the level of service from A (free flow) to F (forced flow) is the qualitative measure of the resulting traffic condition. A road is designed for a target level of service at the design year.",
            ],
            bullets: [
              "Volume studies: vehicles per hour or day; peak-hour volume fixes design hour.",
              "Speed studies: 85th-percentile speed sets speed limits.",
              "Origin-destination studies track where trips begin and end; feed forecast models.",
              "Classified count by vehicle type gives passenger car units (PCU).",
              "Four-stage model: trip generation, distribution, modal split, traffic assignment.",
              "Design parameters: AADT, design hourly volume (30th highest hour), directional split.",
              "IRC:64 gives capacity in PCU/hour; level of service A (free) to F (forced).",
            ],
            table: {
              caption: "Traffic studies and their outputs.",
              headers: ["Study", "Method", "Output", "Use"],
              rows: [
                ["Volume", "manual or loop count", "AADT, peak hour", "design hour capacity"],
                ["Speed", "radar or video", "85th percentile speed", "speed limit setting"],
                ["O-D", "interviews or number plates", "trip matrix", "forecast model input"],
                ["Parking", "patrol survey", "occupancy, duration", "parking policy"],
                ["Accident", "records, mapping", "black spots", "safety improvement"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The traffic studies loop",
              caption:
                "Data, analysis, forecast, design - and back to data collection on the same corridor.",
              steps: [
                { label: "Collect volume, speed, O-D data", note: "field work" },
                { label: "Analyse - PCU, AADT, 30th HV", note: "statistics" },
                { label: "Forecast - four-stage model", note: "design year" },
                { label: "Design - geometry and capacity", note: "road or intersection" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the PCU factors",
              body: "Define PCU before any traffic count answer. One truck is three PCU, one bus is three PCU, one car is one PCU, one two-wheeler is 0.5 PCU - these conversion factors are asked verbatim.",
            },
            keyTerms: [
              { term: "AADT", definition: "Annual average daily traffic; the total yearly traffic divided by 365, used to set road class." },
              { term: "Design hourly volume", definition: "The 30th highest hourly volume of the year, used to size lane capacity." },
              { term: "Passenger car unit (PCU)", definition: "Equivalent-car measure of a vehicle's effect on traffic; truck = 3 PCU, car = 1 PCU." },
              { term: "Level of service", definition: "Qualitative measure A (free flow) to F (forced flow) of traffic condition on a road." },
            ],
            examQuestions: [
              {
                q: "State the various traffic studies carried out on a road network. Explain how volume, speed and origin-destination studies are conducted and the design parameters derived from them.",
                marks: 7,
                outline: [
                  "State the purpose of traffic studies: feed every planning and design decision with data.",
                  "Describe volume studies: number of vehicles per hour or day; peak-hour volume fixes design hour.",
                  "Describe speed studies: 85th-percentile speed sets speed limits; reveals whether road is used at or above design speed.",
                  "Describe origin-destination studies: where trips begin and end; feed traffic forecasting models.",
                  "State the four-stage transport planning model: trip generation, distribution, modal split, traffic assignment.",
                  "State the design parameters derived: AADT, design hourly volume (30th highest hour), directional split, heavy-vehicle share.",
                  "State IRC:64 capacity of rural roads in PCU/hour; level of service A (free) to F (forced) is the qualitative measure.",
                ],
              },
              {
                q: "Define AADT and the 30th highest hourly volume.",
                marks: 2,
              },
              {
                q: "What is a passenger car unit (PCU)?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Traffic signs and signals",
            body: [
              "Traffic signs are the standardised roadside devices that regulate, warn and guide the road user. They are grouped into three categories. Regulatory signs give mandatory instructions that the driver must obey - stop, give way, no entry, speed limit; they are circular with a red border. Warning signs alert the driver to a hazard ahead - sharp curve, school, railway crossing; they are triangular with a red border pointing up. Informatory signs give useful information - destination, distance, hospital, fuel - and are rectangular with a blue background. The colour, shape and symbol of each sign follow the IRC Code of Practice.",
              "Traffic signals control the right of way at an intersection by alternating green, amber and red displays to conflicting traffic streams. A fixed-time signal cycles through stages of preset duration, suitable where traffic is steady; a vehicle-actuated signal adjusts the green time to the demand detected by loops or push buttons, suitable where traffic is variable. A fully adaptive signal coordinates a network of intersections in real time. Signal design begins from the design hourly volume of each approach, computes the saturation flow, the critical lane volume and the cycle time by Webster's method, and splits the green time among phases in proportion to demand.",
              "Webster's method gives the optimal cycle time C as (1.5*L + 5) / (1 - Y), where L is the total lost time per cycle and Y is the sum of the critical flow ratios across all phases. The green time for each phase is then g_i = (C - L) * y_i / Y. A typical cycle time is 60 to 120 seconds; the amber period is 3 to 5 seconds. The signal head must be visible from at least the stopping sight distance; the stop line is set at the kerb line of the cross road. Pedestrian signals and pelican crossings give safe crossing for non-motorised users.",
            ],
            bullets: [
              "Three sign categories: regulatory (circular, red border), warning (triangular, red up), informatory (rectangular, blue).",
              "Fixed-time signal cycles through stages of preset duration.",
              "Vehicle-actuated signal adjusts green time to demand detected by loops.",
              "Webster's cycle time: C = (1.5*L + 5) / (1 - Y), L is lost time, Y is sum of critical flow ratios.",
              "Green time split: g_i = (C - L) * y_i / Y, in proportion to demand.",
              "Typical cycle 60-120 s, amber 3-5 s; signal visible from stopping sight distance.",
              "Pedestrian signals and pelican crossings for non-motorised users.",
            ],
            table: {
              caption: "Traffic sign categories.",
              headers: ["Category", "Shape", "Colour", "Example"],
              rows: [
                ["Regulatory", "circular", "red border", "stop, give way, no entry"],
                ["Warning", "triangular", "red border, up", "sharp curve, school"],
                ["Informatory", "rectangular", "blue background", "destination, fuel"],
                ["Mandatory", "circular", "blue background", "go straight, turn left"],
                ["Cautionary", "triangular", "red border", "men at work, slippery road"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Three sign families, regulatory on top",
              caption:
                "Regulatory at the top because obedience is mandatory; informatory at the base for guidance.",
              tiers: [
                { label: "Regulatory - stop, give way, speed limit", note: "must obey" },
                { label: "Warning - curve, school, railway", note: "caution ahead" },
                { label: "Informatory - destination, distance, fuel", note: "guidance" },
              ],
            },
            callout: {
              type: "warning",
              title: "Y must be below 1",
              body: "Webster's formula C = (1.5*L + 5) / (1 - Y) requires Y to be less than 1. If Y reaches or exceeds 1, the intersection is over-saturated and no cycle time can clear it - this is a common slip in calculation questions.",
            },
            keyTerms: [
              { term: "Regulatory sign", definition: "Mandatory traffic sign of circular shape with red border; stop, give way, no entry." },
              { term: "Webster's cycle time", definition: "Optimal signal cycle C = (1.5*L + 5) / (1 - Y), where L is lost time and Y is the sum of critical flow ratios." },
              { term: "Saturation flow", definition: "Maximum rate at which vehicles can discharge from a lane queue, in PCU per hour of green." },
              { term: "Signal phase", definition: "A set of traffic movements that receive green simultaneously at a signalised intersection." },
            ],
            examQuestions: [
              {
                q: "Classify traffic signs with examples. Derive Webster's formula for the optimal cycle time of a traffic signal and outline how the green time is split among phases.",
                marks: 7,
                outline: [
                  "Classify traffic signs: regulatory (mandatory, circular, red border), warning (triangular, red border up), informatory (rectangular, blue background).",
                  "Give examples: stop, give way, no entry (regulatory); sharp curve, school, railway (warning); destination, distance, fuel (informatory).",
                  "State that signal types: fixed-time, vehicle-actuated, fully adaptive.",
                  "Derive Webster's cycle time C = (1.5*L + 5) / (1 - Y), where L is total lost time and Y is sum of critical flow ratios.",
                  "State green time split: g_i = (C - L) * y_i / Y, in proportion to demand.",
                  "State typical cycle 60-120 s, amber 3-5 s; signal head visible from at least stopping sight distance.",
                  "State pedestrian signals and pelican crossings for non-motorised users.",
                ],
              },
              {
                q: "State the colour and shape of a regulatory sign.",
                marks: 2,
              },
              {
                q: "What is a vehicle-actuated signal?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Intersections and IRC classification of roads",
            body: [
              "An intersection is the point where two or more roads meet or cross; it is the location of the highest conflict on a road network. At-grade intersections are the most common: a three-leg T or Y, a four-leg cross, or a multi-leg roundabout. Channelised intersections use traffic islands to separate turning traffic from through traffic and to define priority. Grade-separated interchanges avoid the conflict altogether by bridging the roads and connecting them by ramps - the diamond, the cloverleaf, the trumpet and the directional interchange are the common forms, used on expressways and arterials where speed and volume justify the cost.",
              "Intersection design fixes the corner radius, the channelising islands, the turning roadway width, and the sight triangle that gives drivers a clear view of conflicting traffic. The radius must serve the design vehicle - a semi-trailer needs 15 m or more, while a passenger car can turn in 6 m. A roundabout is a channelised intersection in which traffic moves one way around a central island; entry is by give-way and the circulating flow is continuous. Roundabouts cut the number of conflict points from 32 to 16, eliminate the high-speed crossing conflict, and reduce accident severity, but their capacity is limited.",
              "IRC classification of roads is given in IRC:73 for rural (non-urban) roads and follows the geometric design standards of IRC:SP:73 for urban streets. The five functional classes are: expressways, designed for fast long-distance traffic with full access control; national highways, the primary arterial grid connecting state capitals and major cities; state highways, connecting district headquarters to the national highway network; major district roads, connecting towns and markets within a district; and other district roads and village roads, the local network feeding traffic to the higher classes. Each class fixes the design speed, the right of way width, the lane configuration and the level of service to be provided at the design year.",
            ],
            bullets: [
              "At-grade intersections: three-leg T or Y, four-leg cross, multi-leg roundabout.",
              "Channelised intersections use islands to separate turning traffic.",
              "Grade-separated interchanges: diamond, cloverleaf, trumpet, directional.",
              "Sight triangle gives drivers a clear view of conflicting traffic.",
              "Corner radius serves design vehicle: 15 m for semi-trailer, 6 m for car.",
              "Roundabout cuts conflict points from 32 to 16; reduces accident severity.",
              "IRC classes: expressways, NH, SH, MDR, ODR and village roads.",
            ],
            table: {
              caption: "Intersection types.",
              headers: ["Type", "Grade separation", "Volume served", "Example"],
              rows: [
                ["T or Y", "at-grade", "low", "rural junction"],
                ["Cross (4-leg)", "at-grade", "medium", "urban junction"],
                ["Roundabout", "at-grade", "medium-high", "city circle"],
                ["Diamond", "grade-separated", "medium-high", "ramp interchange"],
                ["Cloverleaf", "grade-separated", "high", "expressway junction"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Intersection type by grade separation and volume",
              caption:
                "Place any intersection in a 2-by-2 of grade separation against traffic volume.",
              axes: { x: "Separation of grade", y: "Traffic volume" },
              quadrants: [
                { label: "Unsignalised T or cross", note: "give way or stop control" },
                { label: "Signalised or roundabout", note: "channelised with islands" },
                { label: "Simple interchange", note: "diamond or half-cloverleaf" },
                { label: "Full interchange", note: "cloverleaf or directional" },
              ],
            },
            callout: {
              type: "tip",
              title: "Four sketches, four marks",
              body: "Sketch the four intersection types - T, cross, roundabout, interchange - before answering. The four sketches take 90 seconds and earn four of the seven marks.",
            },
            keyTerms: [
              { term: "Intersection", definition: "The point where two or more roads meet or cross; the location of highest conflict on a road network." },
              { term: "Roundabout", definition: "Channelised at-grade intersection with one-way traffic around a central island; entry by give-way." },
              { term: "IRC classification", definition: "Functional classification of roads in IRC:73 from expressways down to village roads." },
              { term: "Channelising island", definition: "Raised traffic island at an intersection that separates turning traffic from through traffic." },
            ],
            examQuestions: [
              {
                q: "Classify intersections. State the types of grade-separated interchange with sketches. Outline the IRC functional classification of roads from expressway to village road.",
                marks: 7,
                outline: [
                  "Define an intersection as the point where two or more roads meet or cross.",
                  "Classify at-grade intersections: three-leg T or Y, four-leg cross, multi-leg roundabout.",
                  "State the role of channelising islands to separate turning traffic from through traffic.",
                  "Classify grade-separated interchanges: diamond, cloverleaf, trumpet, directional.",
                  "State the sight triangle that gives drivers a clear view of conflicting traffic.",
                  "State the corner radius needed for the design vehicle (15 m for semi-trailer, 6 m for car).",
                  "Outline IRC functional classes: expressways, national highways, state highways, MDR, ODR and village roads.",
                ],
              },
              {
                q: "State one advantage of a roundabout over a signalised cross.",
                marks: 2,
              },
              {
                q: "What is the design vehicle for a channelised intersection?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Flexible and rigid pavement design",
            body: [
              "A road pavement is the layered structure that carries traffic load from the road surface to the subgrade. Flexible pavement is built of bituminous and granular layers that distribute load by particle-to-particle contact; it flexes under load and recovers, but accumulates rutting and fatigue over its life. Rigid pavement is built of cement concrete slabs that act as stiff beams, bridging local weak spots in the subgrade and carrying load by beam action. The choice between flexible and rigid depends on subgrade strength, traffic volume, climate, initial and life-cycle cost, and the availability of materials and curing time.",
              "Flexible pavement design follows the California Bearing Ratio (CBR) method given in IRC:37. The total pavement thickness is read from a chart against the design traffic in million standard axle loads (msa) and the subgrade CBR; the thickness is then split into the granular sub-base, the granular base, and the bituminous surfacing of binder and wearing course. The design traffic is computed as N = 365 * A * D * F / SF, where A is the initial commercial traffic, D the growth factor, F the vehicle damage factor and SF the lateral distribution factor.",
              "Rigid pavement design follows IRC:58 and the Westergaard analysis, treating the slab as a beam on an elastic foundation characterised by the modulus of subgrade reaction k. The slab thickness is fixed by the flexural strength of concrete, the wheel load, the spacing of joints and the temperature differential that produces warping stress. Joints - contraction, expansion, warping and construction - control cracking; dowel bars transfer load across contraction joints and tie bars hold lane edges together. Rigid pavement lasts 30 to 40 years against 12 to 15 years for flexible, has lower maintenance and a higher initial cost, and suits heavy-traffic urban corridors and industrial estates.",
            ],
            bullets: [
              "Flexible pavement: bituminous and granular layers; load by particle contact.",
              "Rigid pavement: concrete slabs; load by beam action.",
              "CBR method (IRC:37) for flexible; thickness from chart vs design traffic in msa and CBR.",
              "Design traffic N = 365 * A * D * F / SF; F is vehicle damage factor.",
              "Westergaard method (IRC:58) for rigid; slab on elastic foundation of modulus k.",
              "Joint types: contraction, expansion, warping, construction; dowel and tie bars.",
              "Flexible 12-15 year life, lower initial cost; rigid 30-40 year life, higher initial cost.",
            ],
            table: {
              caption: "Flexible versus rigid pavement.",
              headers: ["Feature", "Flexible", "Rigid"],
              rows: [
                ["Material", "bituminous + granular", "concrete slab"],
                ["Load transfer", "particle contact", "beam action"],
                ["Design code", "IRC:37 (CBR)", "IRC:58 (Westergaard)"],
                ["Failure mode", "rutting, fatigue cracking", "joint cracking"],
                ["Life", "12-15 years", "30-40 years"],
                ["Initial cost", "lower", "higher"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flexible versus rigid pavement",
              caption:
                "Flexible flexes and recovers; rigid bridges weak spots - design method and failure mode differ.",
              left: {
                heading: "Flexible pavement",
                items: [
                  "bituminous and granular layers",
                  "load spreads by particle contact",
                  "CBR design (IRC:37)",
                  "fatigue cracking and rutting failure",
                  "life 12-15 years, lower initial cost",
                ],
              },
              right: {
                heading: "Rigid pavement",
                items: [
                  "concrete slabs on sub-base",
                  "load carried by beam action",
                  "Westergaard design (IRC:58)",
                  "cracking failure at joints",
                  "life 30-40 years, higher initial cost",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Quote the design traffic formula",
              body: "State the design traffic formula N = 365 * A * D * F / SF for flexible pavement. RGPV awards marks for naming each variable even if the arithmetic slips.",
            },
            keyTerms: [
              { term: "Flexible pavement", definition: "Pavement of bituminous and granular layers distributing load by particle contact; designed by CBR (IRC:37)." },
              { term: "Rigid pavement", definition: "Pavement of concrete slabs carrying load by beam action; designed by Westergaard (IRC:58)." },
              { term: "CBR", definition: "California Bearing Ratio; index of subgrade strength used to read flexible pavement thickness from IRC:37." },
              { term: "Vehicle damage factor", definition: "Average equivalent standard axle per commercial vehicle, used to compute design traffic in msa." },
            ],
            examQuestions: [
              {
                q: "Distinguish between flexible and rigid pavements. Outline the CBR method of flexible pavement design (IRC:37) and the Westergaard method of rigid pavement design (IRC:58).",
                marks: 7,
                outline: [
                  "Define flexible pavement: bituminous and granular layers, load spreads by particle contact, flexes under load.",
                  "Define rigid pavement: concrete slabs on sub-base, load carried by beam action, bridges weak spots.",
                  "Outline CBR method (IRC:37): total thickness from chart against design traffic in msa and subgrade CBR; split into sub-base, base, bituminous surfacing.",
                  "State design traffic N = 365 * A * D * F / SF, where A is initial traffic, D growth factor, F vehicle damage factor, SF lateral distribution.",
                  "Outline Westergaard method (IRC:58): slab as beam on elastic foundation of modulus k; thickness from flexural strength, wheel load, joint spacing, temperature differential.",
                  "State joint types: contraction, expansion, warping, construction; dowel bars transfer load, tie bars hold lane edges.",
                  "Compare: flexible 12-15 year life, lower initial cost; rigid 30-40 year life, higher initial cost, lower maintenance.",
                ],
              },
              {
                q: "State the standard axle load used in IRC:37.",
                marks: 2,
              },
              {
                q: "What is the modulus of subgrade reaction (k)?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "ESWL and equivalent wheel load",
            body: [
              "Equivalent Single Wheel Load (ESWL) is a concept used in flexible pavement design to convert the damaging effect of a set of dual wheels into the equivalent effect of a single wheel. The wheel load on a heavy truck is carried by two tyres side by side on the same axle; each tyre carries half the axle load. As depth below the surface increases, the stress bulbs of the two tyres overlap and merge, until at a depth of about twice the tyre spacing they behave as a single wheel of the combined load. ESWL converts the dual-tyre assembly to a single-tyre load that produces the same stress at the same depth.",
              "The ESWL is computed by the graphical or analytical method. At shallow depth (less than the tyre spacing s) the two stresses do not overlap and the ESWL equals one tyre load. At depth greater than 2s the stresses overlap fully and the ESWL equals the total dual-tyre load. In between, the ESWL grows linearly from one-tyre load to the total load as the depth goes from s to 2s. A practical code snippet computes ESWL given the total dual load and the depth; this is what the pavement designer uses to read the thickness chart in IRC:37.",
              "Equivalent Wheel Load (EWL) factors convert the damage caused by a given axle of any load into the damage caused by a standard axle of 80 kN, the unit used in IRC:37. The damage is governed by the fourth-power law: damage is proportional to the fourth power of the wheel load, so EWL factor = (W / 80)^4. A 160 kN axle does 16 times the damage of an 80 kN axle. The vehicle damage factor is the average EWL factor per commercial vehicle; it converts the number of commercial vehicles per day into the cumulative standard axles for the design period.",
            ],
            bullets: [
              "ESWL: single wheel load that produces same stress as dual-tyre assembly at given depth.",
              "At depth less than spacing s: ESWL equals one-tyre load.",
              "At depth greater than 2s: ESWL equals total dual load.",
              "Between s and 2s: ESWL grows linearly.",
              "EWL factor: fourth-power ratio (W/80)^4 converts any wheel load damage to standard axle.",
              "Standard axle of 80 kN used in IRC:37.",
              "Vehicle damage factor: average EWL factor per commercial vehicle.",
            ],
            codeExample: {
              language: "python",
              caption: "ESWL and EWL factor for a dual-tyre axle of 160 kN.",
              code:
                "# Equivalent Single Wheel Load (ESWL) and Equivalent Wheel Load factor\n" +
                "# per IRC:37 for flexible pavement design.\n" +
                "\n" +
                "def eswl(dual_load, depth, spacing):\n" +
                "    \"\"\"ESWL for a dual-tyre assembly at a given depth.\n" +
                "    Below s -> single tyre load = dual_load / 2.\n" +
                "    Above 2s -> total dual_load.\n" +
                "    Between s and 2s -> linear interpolation.\"\"\"\n" +
                "    s = spacing\n" +
                "    if depth <= s:\n" +
                "        return dual_load / 2.0\n" +
                "    if depth >= 2 * s:\n" +
                "        return dual_load\n" +
                "    # linear in [s, 2s]\n" +
                "    return dual_load / 2.0 + (dual_load / 2.0) * ((depth - s) / s)\n" +
                "\n" +
                "def ewl_factor(wheel_load_kn, standard=80.0):\n" +
                "    \"\"\"Fourth-power law: EWL factor for one axle.\"\"\"\n" +
                "    return (wheel_load_kn / standard) ** 4\n" +
                "\n" +
                "# Example: dual-tyre axle of 160 kN, spacing 300 mm, depth 600 mm\n" +
                "dual_load = 160.0      # kN on two tyres\n" +
                "spacing = 300          # mm\n" +
                "depth = 600            # mm\n" +
                "print(\"ESWL at\", depth, \"mm =\", round(eswl(dual_load, depth, spacing), 1), \"kN\")\n" +
                "print(\"EWL factor for 160 kN axle =\", round(ewl_factor(160.0), 3))\n",
            },
            diagram: {
              kind: "flow",
              title: "ESWL grows with depth below the surface",
              caption:
                "Read the depth, then pick the matching ESWL rule - three ranges, one answer.",
              steps: [
                { label: "Know dual-tyre load and spacing", note: "160 kN, s = 300 mm" },
                { label: "Compute depth below surface", note: "600 mm" },
                { label: "At depth < s: ESWL = one-tyre load", note: "80 kN" },
                { label: "At depth > 2s: ESWL = total dual load", note: "160 kN" },
                { label: "Between s and 2s: linear interpolation", note: "linear" },
              ],
            },
            callout: {
              type: "tip",
              title: "Three depth ranges",
              body: "For ESWL, remember the three depth ranges: depth less than s gives one-tyre load, depth greater than 2s gives total dual load, in between is linear. The three-range rule is the heart of every ESWL question.",
            },
            keyTerms: [
              { term: "ESWL", definition: "Equivalent Single Wheel Load that produces the same stress at a given depth as a dual-tyre assembly." },
              { term: "Equivalent wheel load factor", definition: "Fourth-power ratio (W/80)^4 that converts damage from any wheel load to a standard 80 kN axle." },
              { term: "Fourth-power law", definition: "Rule that pavement damage is proportional to the fourth power of the wheel load." },
              { term: "Vehicle damage factor", definition: "Average equivalent standard axle per commercial vehicle, used to compute design traffic in msa." },
            ],
            examQuestions: [
              {
                q: "Define ESWL. Explain the graphical method of computing ESWL for a dual-tyre assembly. State the fourth-power law for equivalent wheel load and its use in computing the vehicle damage factor.",
                marks: 7,
                outline: [
                  "Define ESWL as the single wheel load that produces the same stress at a given depth as a dual-tyre assembly.",
                  "State the rule at depth less than spacing s: stresses do not overlap, ESWL equals one-tyre load.",
                  "State the rule at depth greater than 2s: stresses overlap fully, ESWL equals total dual load.",
                  "State the rule between s and 2s: ESWL grows linearly from one-tyre load to total dual load.",
                  "Define EWL factor as the fourth-power ratio (W/80)^4 that converts any wheel load damage to standard axle damage.",
                  "State the standard axle load of 80 kN used in IRC:37.",
                  "Define vehicle damage factor as the average EWL factor per commercial vehicle; converts traffic count to cumulative standard axles.",
                ],
              },
              {
                q: "State the depths at which ESWL equals one-tyre load and the total dual load.",
                marks: 2,
              },
              {
                q: "Compute the EWL factor for a 160 kN axle against a standard axle of 80 kN.",
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
        "RGPV CE-502 papers typically spread 60-70 of the marks across runway orientation and length correction, bridge foundation types, IRC loading, tunneling methods, flexible pavement design by CBR and ESWL. Signalling, traffic signs and harbour layout supply the definitional short questions that anchor every paper. Allocate revision time in roughly the same ratio, and keep one full practice slot per unit regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Runway orientation by wind rose and runway length correction", weight: "8-10 marks", note: "Sketch the wind rose and apply elevation, temperature and gradient corrections step by step." },
        { topic: "IRC loading classes and impact factor for bridges", weight: "8-10 marks", note: "Name Class AA, 70R, A and B with magnitudes; position loads for max moment and shear." },
        { topic: "Bridge foundation types and selection by scour depth", weight: "8-10 marks", note: "Well foundation sketch and sinking sequence is asked almost every year." },
        { topic: "Tunneling methods by rock type", weight: "8-10 marks", note: "Drill-and-blast, TBM, shield, cut-and-cover - match each to its ground." },
        { topic: "Flexible pavement design by CBR method", weight: "8-10 marks", note: "State design traffic N = 365ADF/SF and read thickness from IRC:37 chart." },
        { topic: "Rigid pavement design by Westergaard", weight: "6-8 marks", note: "Slab thickness, joints, dowel and tie bars, modulus of subgrade reaction k." },
        { topic: "ESWL and equivalent wheel load", weight: "6-8 marks", note: "Three depth ranges for ESWL; fourth-power law for EWL factor." },
        { topic: "Points and crossings / turnouts", weight: "6-8 marks", note: "Sketch, name parts, turnout number and diverging speeds." },
        { topic: "Harbour components and breakwaters", weight: "6-8 marks", note: "Layout sketch, rubble mound vs vertical wall, Hudson formula." },
        { topic: "Traffic signs and Webster's signal cycle", weight: "4-6 marks", note: "Three sign categories and the cycle-time formula C = (1.5L+5)/(1-Y)." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers every section of the syllabus twice - once for understanding, once for revision - and reserves the final week for full papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - railway engineering", tasks: ["Gauge and components, rails and CWR", "Sleepers, ballast, fastenings", "Turnouts, stations, yards and signalling"] },
        { week: "Week 2", focus: "Unit II - airport engineering", tasks: ["Planning and site selection", "Wind rose and runway orientation", "Runway, taxiway, apron, lighting"] },
        { week: "Week 3", focus: "Unit III - bridge engineering (part 1)", tasks: ["Components and classification", "Abutments and piers", "Bridge foundations by depth"] },
        { week: "Week 4", focus: "Unit III (part 2) and Unit IV", tasks: ["Superstructure types and bearings", "IRC loading classes", "Harbour components and breakwaters"] },
        { week: "Week 5", focus: "Unit IV (tunnels) and Unit V (traffic)", tasks: ["Tunnel sections, alignment and methods", "Tunnel ventilation and lining", "Traffic studies, signs and signals"] },
        { week: "Week 6", focus: "Unit V (pavement) and full revision", tasks: ["Intersections and IRC road classification", "Flexible and rigid pavement design", "ESWL and equivalent wheel load; two full past papers"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      body: [
        "The night before the exam is for verbatim recall and one timed paper - not for new topics. Spend 90 minutes on the items below and 90 minutes on one past paper under exam timing.",
      ],
      bullets: [
        "Revise the four railway gauges, the rail weights 52/60 kg/m and the turnout numbers 1 in 8.5/12/16 with their speeds - these are direct recall questions.",
        "Re-draw the wind rose with the runway overlay, the runway correction formula and the PCN-ACN criterion - all three appear in airport questions.",
        "Memorise IRC Class AA, 70R, A and B with their loads and the impact factor range 10-25 percent.",
        "Practise the CBR design traffic formula N = 365ADF/SF and the ESWL three-range rule (one-tyre at s, total at 2s, linear between).",
        "Sketch from memory: bridge components, harbour layout, tunnel section, turnout, flexible pavement layers.",
        "Keep one full past paper for the last evening - time-box 7-mark questions to 14-18 minutes each.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Start every bridge, harbour, tunnel or turnout question with a labelled sketch - the sketch earns the first two marks before any prose.",
        "Quote IRC codes by number: IRC:37 for flexible pavement, IRC:58 for rigid, IRC:6 for bridge loads, IRC:64 for capacity - examiners reward the citation.",
        "For runway and pavement numericals, state the formula first, substitute second, compute third. Formula marks survive an arithmetic slip.",
        "Name the parts of every assembly by their textbook names: turnout (switch, crossing, closure), harbour (entrance, breakwater, basin, berth), tunnel (portal, heading, lining).",
        "Time-box: 2-mark questions in 4 minutes, 3-mark in 6 minutes, 7-mark in 14-18 minutes, and keep 10 minutes at the end for a verification pass.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing the turnout number with the crossing angle - turnout number is the cotangent of the angle, so 1 in 12 means about 4.8 degrees.",
        "Applying temperature correction before elevation correction in runway length - temperature correction is on the elevation-corrected length, not the basic length.",
        "Treating ACN and PCN as the same thing - PCN is the runway's strength, ACN is the aircraft's load; a runway is fit when ACN is less than or equal to PCN.",
        "Mixing up flexible and rigid pavement design codes - IRC:37 (CBR) for flexible, IRC:58 (Westergaard) for rigid.",
        "Forgetting the 2s limit in ESWL - below s ESWL is one-tyre load, above 2s it is total dual load, between is linear.",
        "Drawing a roundabout with traffic going clockwise - in India, traffic circulates counter-clockwise around the central island.",
      ],
    },
  ],
};
