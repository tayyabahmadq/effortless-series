import type { AcademicSubject } from "./types";

export const it802c: AcademicSubject = {
  id: "it-802-c",
  code: "IT-802(C)",
  title: "Robotics",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: what makes a machine a robot, how transforms and DH parameters turn joint angles into tool pose, how the Jacobian ties velocity to force, how sensors and cameras feed the control laws, and how embedded hardware and ROS finally make it all move.",
  description:
    "Five units walk from robot anatomy, classification and open/closed-loop control through kinematics (transforms, DH parameters, Jacobian, singularities, statics) and Euler-Lagrange dynamics, on to sensors and the pinhole camera with its calibration and transformation hierarchy, then the control laws from P to PID to computed torque with electric, hydraulic and pneumatic actuation and their transmissions, ending with embedded architecture, sensor and actuator interfacing, real-time operation and ROS programming for a working prototype.",
  accentColor: "#10b981",
  emoji: "RB",
  unitCount: 5,
  totalSections: 38,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Robotics",
      summary:
        "Unit I frames the whole subject: the definition and anatomy of a robot, the seven components every robot shares, classification by geometry, drive and application, the open-loop versus closed-loop divide, the mechanisms and manipulators vocabulary, degrees of freedom and workspace, and the safety and social duties of machines that act in the human world.",
      chapter: {
        number: "01",
        title: "What Makes a Machine a Robot",
        intro:
          "Unit I covers the definition of a robot and its sense-think-act structure, the types and components of a robot, classification by geometry and drive, open-loop and closed-loop control systems, the definitions of mechanisms and manipulators, degrees of freedom and workspace, and the social issues and safety practices of robot deployment.",
        inOneBreath:
          "A robot is a reprogrammable, multifunctional manipulator that senses, decides and acts. Every robot shares the same anatomy: links and joints for a skeleton, actuators for muscles, sensors for senses and a controller for a brain. Classification by geometry fixes the workspace shape, closed-loop feedback is what separates a robot from a machine that merely repeats, and safety is a design input rather than an afterthought.",
        sections: [
          {
            number: "1.1",
            title: "What is a robot?",
            body: [
              "The definition that earns the marks is the Robotic Industries Association one: a robot is a reprogrammable, multifunctional manipulator designed to move material, parts, tools or specialized devices through variable programmed motions for the performance of a variety of tasks. Three tests hide in that sentence - reprogrammable (its behaviour is changed by changing the program, not the hardware), multifunctional (one machine, many tasks), and manipulator (it moves things through space). A device that fails any of the three is automation, not a robot, and saying which test fails is exactly what the examiner wants.",
              "Structurally every robot runs the same loop: sense, think, act. Sensors measure the world and the robot's own joints; the controller - the program plus the control laws of Unit IV - decides what to do next; actuators convert decisions into motion, and the loop repeats hundreds of times per second. Fixed automation (a washing machine, a conveyor, a drilling jig) executes a fixed sequence with no sensing-driven decisions. A CNC machine is closer but still task-dedicated: its motions are fixed by part geometry rather than freely reprogrammable for variety of tasks.",
              "A worked classification makes the tests concrete. A washing machine: not reprogrammable to other tasks, not a manipulator - fixed automation. A CNC lathe: reprogrammable within one task family, but its tool path is prescribed, not sense-driven - borderline, usually called automation. A six-axis welding arm: reprogrammable, multifunctional, a manipulator - a robot. A Mars rover: senses, decides, acts and moves itself - a mobile robot, the manipulator test satisfied by its instrument arm and mobility. The pattern: apply the three tests one by one, name the failing test, and the classification writes itself.",
              "Exam framing: the definition question is near-guaranteed and is worth writing verbatim before any elaboration. The strong answers pair the RIA definition with the three tests, draw the sense-think-act loop, and classify two or three devices with the failing test named. Weak answers list science-fiction imagery - resist it. The definition mark is for the sentence, the structure mark is for the loop, and the application mark is for the classifications.",
            ],
            keyTerms: [
              { term: "Robot (RIA definition)", definition: "A reprogrammable, multifunctional manipulator moving material, parts, tools or devices through variable programmed motions for a variety of tasks." },
              { term: "Reprogrammable", definition: "Behaviour changes by changing the program, not the hardware." },
              { term: "Multifunctional", definition: "One machine serves many task types." },
              { term: "Manipulator", definition: "An arm-like mechanism that moves objects through space." },
              { term: "Fixed automation", definition: "Hardware-wired sequence with no reprogramming and no sensing-driven decisions." },
            ],
            callout: {
              type: "tip",
              title: "The three-word test",
              body: "Reprogrammable + multifunctional + manipulator decides robot versus automation every time. Quote the RIA definition verbatim for the definition mark, then run the three tests on the example device - naming which test fails is what separates a classified answer from a described one.",
            },
            bullets: [
              "RIA definition: reprogrammable, multifunctional manipulator - write it verbatim.",
              "Three tests: reprogrammable, multifunctional, manipulator - a device failing any one is automation.",
              "Robot loop: sense -> think -> act, repeating hundreds of times per second.",
              "Washing machine fails all three tests; CNC fails multifunctional and sense-driven control.",
              "A 6-axis welding arm passes all three; a Mars rover is a mobile robot with an instrumented manipulator.",
            ],
            diagram: {
              kind: "compare",
              title: "Robot vs fixed automation",
              caption: "The difference is not intelligence - it is reprogrammability plus sense-driven decisions.",
              left: {
                heading: "Fixed automation",
                items: [
                  "Sequence wired into the hardware or cam",
                  "One task for the machine's whole life",
                  "No sensor-driven decisions mid-cycle",
                  "Example: washing machine, conveyor, jig",
                ],
              },
              right: {
                heading: "Robot",
                items: [
                  "Behaviour changed by reprogramming",
                  "One machine, many tasks (multifunctional)",
                  "Senses feed decisions every cycle",
                  "Example: 6-axis welding and assembly arm",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "loop.py - the sense-think-act loop in three lines",
              code: `while True:
    s = sensor.read()          # sense: encoders, camera, force
    a = policy.decide(s)       # think: control law of Unit IV
    actuator.command(a)        # act: torque, velocity, gripper`,
            },
            examQuestions: [
              {
                q: "Define an industrial robot as per the Robotic Industries Association. Explain the sense-think-act structure of a robot and differentiate a robot from fixed automation with two examples.",
                marks: 14,
                outline: [
                  "Verbatim RIA definition: reprogrammable, multifunctional manipulator, variable programmed motions",
                  "Unpack the three tests: reprogrammable, multifunctional, manipulator",
                  "Sense stage: encoders, cameras, force sensors measure world and joints",
                  "Think stage: controller runs the decision logic and control laws",
                  "Act stage: actuators convert decisions into motion; loop repeats",
                  "Washing machine fails all three tests - fixed automation",
                  "6-axis welding arm passes all three - a robot; name the failing test for each example",
                ],
              },
              {
                q: "Is a CNC machine tool a robot? Justify your answer using the defining characteristics of a robot.",
                marks: 7,
                outline: [
                  "Reprogrammable: yes - part programs change the motion",
                  "Multifunctional: no - the task family is machining only",
                  "Manipulator: partially - motion follows a prescribed path, not sense-driven positioning",
                  "No closed sensing loop on the part itself in basic CNC",
                  "Verdict: advanced automation, not a robot - name the failing tests",
                ],
              },
              {
                q: "Explain the difference between a robot and a teleoperated machine with one example of each.",
                marks: 7,
                outline: [
                  "Robot: autonomy onboard - senses and controller decide the motion",
                  "Teleoperated machine: human closes the loop remotely (surgical teleoperation)",
                  "Shared traits: manipulator, actuators, sensors",
                  "Difference lives in the 'think' stage - program versus human operator",
                  "Examples: assembly robot vs bomb-disposal teleoperator",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Types and components of a robot",
            body: [
              "Every industrial robot, however exotic, decomposes into the same seven components. The manipulator is the mechanical skeleton - a chain of rigid links joined by movable joints. The end effector is the tool at the wrist - gripper, weld torch, spray gun, vacuum cup. Actuators are the muscles - electric, hydraulic or pneumatic motors that drive the joints. Sensors are the senses - joint encoders internally, cameras and force sensors externally. The controller is the brain - the computer running trajectory planning and the control laws. The power unit conditions electricity or hydraulics for the actuators, and the teach pendant is the human interface for programming and jogging.",
              "Two chains describe how the components interact. The energy chain runs power unit -> actuator -> joint -> load: electricity or oil becomes torque, torque becomes joint motion, joint motion becomes tool motion. The signal chain runs sensor -> controller -> actuator: the encoder reports joint angle, the controller compares it with the desired trajectory and computes the error, and the command goes to the actuator - the closed loop of section 1.4. The two chains cross at every joint, which is why robot design is always mechatronic: mechanical, electrical and software decisions are inseparable.",
              "A worked example fixes the vocabulary. A six-axis pick-and-place arm: six brushless AC servo motors (actuators) with harmonic-drive reductions mounted on cast aluminium links (manipulator), a pneumatic gripper (end effector), one incremental encoder per joint plus a wrist camera (sensors), an industrial controller executing the trajectory and a PLC-class safety board (controller), a 3-phase 400 V feed with regenerative drive (power unit), and a handheld pendant for jog and teach (human interface). Naming one concrete hardware item per component is the level of specificity that earns full marks.",
              "Exam framing: 'explain the anatomy/components of a robot with a neat sketch' is a classic 14-mark question. The skeleton answer is the sketch of a manipulator with the seven components labelled, one sentence of function per component, and the two chains (energy, signal) written explicitly. Adding one real hardware example per component converts a generic answer into an engineer's answer.",
            ],
            keyTerms: [
              { term: "Manipulator", definition: "The chain of links and joints forming the robot's mechanical skeleton." },
              { term: "End effector", definition: "The tool mounted on the wrist - gripper, torch, spray gun - that does the actual task." },
              { term: "Controller", definition: "The computer running trajectory generation, servo loops and safety logic." },
              { term: "Teach pendant", definition: "The handheld terminal used to jog, program and start the robot." },
              { term: "Power unit", definition: "The subsystem conditioning electrical, hydraulic or pneumatic power for the actuators." },
            ],
            callout: {
              type: "exam",
              title: "Seven components, one example each",
              body: "Manipulator, end effector, actuator, sensor, controller, power unit, teach pendant - write all seven, one function line each, one hardware example each. Then state the two chains: energy (power -> actuator -> joint) and signal (sensor -> controller -> actuator). That structure is the full 14-mark anatomy answer.",
            },
            bullets: [
              "Manipulator: links + joints - the skeleton; often 4 to 7 axes.",
              "End effector: gripper, torch, cup - mounted at the wrist flange.",
              "Actuators: electric (servo, stepper), hydraulic, pneumatic - the muscles.",
              "Sensors: joint encoders and resolvers internally; cameras, force, proximity externally.",
              "Controller: trajectory planning + joint servo loops + safety logic.",
              "Power unit and teach pendant: energy conditioning and the human interface.",
              "Energy chain: power -> actuator -> joint -> load; signal chain: sensor -> controller -> actuator.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Command and energy flow through a robot",
              caption:
                "Programmed motion flows down the pipeline; the sensor branch feeds back to the controller, closing the loop.",
              stages: [
                { label: "Program / trajectory", note: "what the task demands" },
                { label: "Controller", note: "plans + computes joint commands" },
                { label: "Actuators", note: "servo motors, cylinders" },
                { label: "Manipulator joints", note: "torque becomes motion" },
                { label: "End effector", note: "the task is done; sensors report back" },
              ],
            },
            table: {
              caption: "Component · role · typical hardware.",
              headers: ["Component", "Role", "Typical hardware"],
              rows: [
                ["Manipulator", "mechanical skeleton, positions the wrist", "cast links + rotary joints, 4-7 axes"],
                ["End effector", "performs the task", "pneumatic gripper, weld torch, vacuum cup"],
                ["Actuators", "drive the joints", "AC servo motors with harmonic drives"],
                ["Sensors", "measure joints and environment", "incremental encoders, wrist F/T sensor, camera"],
                ["Controller", "plan trajectories, close servo loops", "industrial robot controller + safety board"],
                ["Power unit", "condition energy for actuators", "3-phase drive, hydraulic power pack"],
                ["Teach pendant", "program and jog the robot", "handheld terminal with deadman switch"],
              ],
            },
            examQuestions: [
              {
                q: "With a neat sketch, explain the construction of an industrial robot. Describe the function of each component - manipulator, end effector, actuator, sensor, controller, power unit and teach pendant - and state how the energy and signal chains interact.",
                marks: 14,
                outline: [
                  "Sketch: base, links, joints, wrist, end effector, controller cabinet, pendant",
                  "Manipulator: chain of links and joints forming the skeleton",
                  "End effector: gripper/torch mounted at the wrist flange",
                  "Actuators: electric/hydraulic/pneumatic muscles driving each joint",
                  "Sensors: joint encoders internally; camera and force sensors externally",
                  "Controller + power unit + teach pendant: brains, energy, human interface",
                  "Energy chain power->actuator->joint; signal chain sensor->controller->actuator",
                ],
              },
              {
                q: "Differentiate the end effector from the manipulator, and give two examples of end effectors with their applications.",
                marks: 7,
                outline: [
                  "Manipulator: positions and orients the wrist in space",
                  "End effector: the tool doing the task; attached at the flange",
                  "Gripper - part handling and assembly",
                  "Weld torch - seam welding along a taught path",
                  "Design coupling: end-effector mass adds to wrist payload and inertia",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Classification of robots",
            body: [
              "The classification the examiner wants first is by geometry - the sequence of revolute (R) and prismatic (P) joints. Cartesian or gantry robots (PPP) move in rectangular boxes and excel at heavy, precise, linear work. Cylindrical robots (RPP) sweep a cylinder around a base column. Spherical or polar robots (RRP) sweep a sphere - maximum reach per kilogram of robot. SCARA robots (two R in a horizontal plane + one P for the vertical) dominate planar assembly. Articulated robots (RRR and beyond, typically six revolute axes) are the general-purpose human-arm-like machines that dominate welding, painting and handling.",
              "Three further axes of classification complete the picture. By drive: electric (the default today), hydraulic (high force density, outdoor and heavy presses), pneumatic (fast, cheap, on-off automation). By application: industrial fixed robots (welding, painting, palletizing, assembly, machine tending) versus mobile robots (AGVs, drones, rovers) versus collaborative robots sharing space with people. By payload and precision class: from desktop arms moving grams to heavy-payload machines moving hundreds of kilograms; repeatability figures (typically 0.02-0.1 mm) label the precision classes.",
              "A worked selection exercise is the exam's favourite form. Welding car bodies: large dexterous three-dimensional workspace around the car, orientation changes everywhere - six-axis articulated. Electronics PCB assembly: planar pick-and-place at high speed with a vertical insert - SCARA. Palletizing 25 kg sacks into layers: rectangular stack, heavy payload, simple motions - Cartesian gantry. Spray painting a housing: sweeping surfaces, hazardous fumes - spherical or articulated, often explosion-protected. The method: read the workspace shape and payload out of the task, then match the geometry table.",
              "Exam framing: classification questions come in two forms - 'classify robots by geometry with sketches' and 'select a robot type for the given application'. Both are answered from one table: geometry, joint sequence, workspace shape, typical payload, example application. Draw the five workspace envelopes as small sketches - the envelope shape is the single most信息-dense fact and is what the sketch marks reward.",
            ],
            keyTerms: [
              { term: "Cartesian (PPP)", definition: "Three prismatic axes; rectangular workspace; highest stiffness and precision." },
              { term: "SCARA", definition: "Selective Compliance Assembly Robot Arm - two horizontal revolute joints plus a vertical prismatic; the assembly specialist." },
              { term: "Articulated (RRR)", definition: "All-revolute arm resembling a human arm; 4-7 axes; largest dexterous workspace." },
              { term: "Spherical (RRP)", definition: "Two revolute + one prismatic; spherical envelope; maximum reach per robot mass." },
              { term: "Repeatability", definition: "The spread of returned positions after repeated approaches to one taught point." },
            ],
            callout: {
              type: "exam",
              title: "The workspace sketch is the answer",
              body: "For every geometry, the examiner wants the envelope: rectangular (Cartesian), cylindrical, spherical, planar-band (SCARA), Anthropomorphic blob (articulated). Learn to draw five small envelopes in thirty seconds - the sketches carry the marks even if the prose runs short.",
            },
            bullets: [
              "Cartesian PPP: rectangular box; heavy, precise, linear - gantries, 3D printers.",
              "Cylindrical RPP: cylinder around a column; compact floor footprint.",
              "Spherical RRP: sphere; maximum reach per kg; older unpainting machines.",
              "SCARA: planar fast assembly; vertical compliance for insertion.",
              "Articulated RRR+: human-arm-like, 6 axes, the general-purpose default.",
              "By drive: electric / hydraulic / pneumatic; by use: industrial / mobile / collaborative.",
            ],
            diagram: {
              kind: "fork",
              title: "Selecting an arm geometry",
              caption: "Read the workspace and payload out of the task, then match the geometry - not the other way round.",
              start: "Choosing an arm geometry for the task",
              branches: [
                { label: "Heavy payloads in a rectangular zone", outcome: "Cartesian gantry - stiff, precise, simple control", good: true },
                { label: "Fast planar assembly + vertical insert", outcome: "SCARA - speed with vertical compliance", good: true },
                { label: "Dexterous 3D work in tight spaces", outcome: "6-axis articulated - largest dexterous workspace", good: true },
                { label: "Geometry chosen by habit, not task", outcome: "wrong envelope - costly redesign, poor reach", good: false },
              ],
            },
            table: {
              caption: "Configuration · joint sequence · workspace · application.",
              headers: ["Configuration", "Joints", "Workspace shape", "Typical application"],
              rows: [
                ["Cartesian", "P-P-P", "rectangular box", "gantry palletizing, 3D printing"],
                ["Cylindrical", "R-P-P", "cylinder about a column", "machine loading, die casting"],
                ["Spherical (polar)", "R-R-P", "sphere sector", "spray painting, heavy reach"],
                ["SCARA", "R-R-P (vertical)", "planar band + insert depth", "PCB assembly, small-part handling"],
                ["Articulated", "R-R-R (+wrist R)", "near-spherical blob", "welding, painting, general handling"],
              ],
            },
            examQuestions: [
              {
                q: "Classify robots on the basis of geometry (coordinate system). Sketch the workspace envelope of each configuration with its joint sequence and one application.",
                marks: 14,
                outline: [
                  "Cartesian PPP - rectangular box - gantry palletizing, 3D printers",
                  "Cylindrical RPP - cylinder about a column - machine loading",
                  "Spherical RRP - sphere sector - spray painting",
                  "SCARA - planar band with vertical insert - PCB assembly",
                  "Articulated RRR - near-spherical dexterous volume - welding",
                  "Sketch each envelope; label R and P joints",
                  "Payload/precision rises from spherical to Cartesian; dexterity peaks at articulated",
                ],
              },
              {
                q: "Select a suitable robot type with justification for (a) car-body spot welding, (b) electronic component insertion, (c) heavy sack palletizing.",
                marks: 7,
                outline: [
                  "Spot welding: 6-axis articulated - dexterous 3D reach around the body",
                  "Insertion: SCARA - planar speed + vertical compliance",
                  "Palletizing: Cartesian gantry - rectangular stack, heavy payload, simple control",
                  "Justification reads workspace shape + payload from the task",
                  "One line on why the rejected geometries fail",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Open-loop and closed-loop control systems",
            body: [
              "An open-loop system applies its input without measuring the output: the controller computes a command from the plan alone and assumes the plant obeys. A closed-loop (feedback) system measures the output with a sensor, forms the error e = setpoint - measurement, and commands based on the error, so disturbances and model mismatches are continuously corrected. The feedback path is the entire difference: one block diagram with a comparator and a sensor branch converts the first system into the second, and every servo in Unit IV lives inside that loop.",
              "Worked examples anchor both sides. Washing machine: timer-based, open loop - it fills for a set time regardless of actual level. Air conditioner: thermostat measures room temperature and switches - closed loop. Robot joint: a stepper-driven joint can run open loop (it loses steps silently under overload), while a servo joint with an encoder measures position every cycle and never loses track. Cruise control: setpoint 80 km/h, a headwind drops the speed to 68, error 12 km/h, the controller adds throttle until the error vanishes - the sentence that shows disturbance rejection.",
              "The comparison is the exam table. Open loop: simple, cheap, stable by construction, but inaccurate under disturbances and drift - accuracy depends entirely on calibration of the plant. Closed loop: accurate despite disturbances, tolerant of plant variation, but costlier (sensor + controller), can become unstable if gains are badly chosen, and injects sensor noise into the loop. The deep line worth writing: feedback trades plant accuracy for loop accuracy - the sensor and the control law, not the motor, decide the final precision.",
              "Exam framing: 'differentiate open-loop and closed-loop systems with block diagrams and examples' is a certain question. Draw both block diagrams, fill a four-row comparison (accuracy, stability, cost, disturbance rejection), and close with one example of each - the washing machine/thermostat pair and the stepper/servo pair both work.",
            ],
            keyTerms: [
              { term: "Open-loop control", definition: "Command computed from the plan alone; output never measured." },
              { term: "Closed-loop control", definition: "Output measured and fed back; command computed from the error." },
              { term: "Error (e)", definition: "e = setpoint - measured output; the quantity the controller drives to zero." },
              { term: "Feedback path", definition: "Sensor + signal conditioning returning the output to the comparator." },
              { term: "Disturbance rejection", definition: "The closed loop's ability to cancel external pushes on the plant." },
            ],
            callout: {
              type: "tip",
              title: "Feedback buys disturbance rejection, not just accuracy",
              body: "The non-obvious point: an open-loop system can be accurate on the bench (perfectly calibrated) yet drift in the field, because nothing corrects it. A closed loop attenuates a disturbance by roughly 1/(1 + KG) - the loop gain, not the motor quality, sets field accuracy. Say that sentence and the comparison question is won.",
            },
            bullets: [
              "Open loop: no sensor of the output; accuracy rests on calibration alone.",
              "Closed loop: measure -> compare with setpoint -> act on the error.",
              "Examples: timer washing machine vs thermostat AC; stepper joint vs encoder servo.",
              "Cruise-control trace: 80 set, headwind drops to 68, error 12 -> throttle rises.",
              "Open loop: cheap, simple, stable; blind to disturbance and drift.",
              "Closed loop: accurate, disturbance-rejecting; costlier and stability must be designed.",
            ],
            diagram: {
              kind: "flow",
              title: "The closed-loop block diagram",
              caption: "Setpoint minus measurement is the error; the loop exists to drive it to zero.",
              steps: [
                { label: "Setpoint", note: "80 km/h or joint angle" },
                { label: "Comparator", note: "error = setpoint - measured" },
                { label: "Controller", note: "P/PD/PID law on the error" },
                { label: "Plant", note: "motor + gearbox + joint" },
                { label: "Sensor", note: "encoder measures output; feeds back" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "cruise.py - a closed loop in five lines",
              code: `speed, target = 0.0, 80.0
for t in range(1, 121):
    err = target - speed          # comparator
    throttle = 0.05 * err         # proportional controller
    speed += 3.0 * throttle - 0.8 # plant: responds + headwind drag
# speed settles at ~76-80 despite the constant headwind disturbance`,
            },
            examQuestions: [
              {
                q: "Draw the block diagrams of open-loop and closed-loop control systems. Compare them on accuracy, stability, cost and disturbance rejection, giving one example of each system.",
                marks: 14,
                outline: [
                  "Open-loop block: input -> controller -> plant -> output (no feedback)",
                  "Closed-loop block: setpoint -> comparator -> controller -> plant -> output -> sensor back",
                  "Error definition e = setpoint - measurement",
                  "Accuracy: open loop rests on calibration; closed loop rests on loop gain",
                  "Stability: open loop stable by construction; closed loop can oscillate with high gain",
                  "Cost: sensor + electronics vs none",
                  "Examples: timer washing machine vs thermostat AC; stepper vs encoder servo",
                ],
              },
              {
                q: "Why does an industrial robot joint use closed-loop position control even when a stepper motor could run open loop?",
                marks: 7,
                outline: [
                  "Steppers lose steps silently under overload - open loop cannot detect it",
                  "Encoder feedback measures true joint angle every cycle",
                  "Gravity and friction disturbances are corrected continuously",
                  "Payload variation changes plant dynamics - feedback absorbs it",
                  "Safety: position error monitoring detects collisions",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Mechanisms and manipulators",
            body: [
              "A mechanism is an assembly of rigid bodies (links) connected by joints (kinematic pairs) so as to transmit and transform motion and force in a prescribed way. A manipulator is a particular mechanism: an open kinematic chain anchored to a base, whose final link carries the end effector, designed to position and orient that tool in space. The vocabulary matters because Unit II's kinematics is written in exactly these terms - every link gets a frame, every joint gets a variable, and the chain product gives the tool pose.",
              "Joints are classified by the motion they permit. The two one-degree-of-freedom lower pairs used in virtually every syllabus robot are the revolute joint R (pure rotation about an axis) and the prismatic joint P (pure sliding along an axis). Composites exist - cylindrical (R+P), spherical (3R), planar/gliding, screw/helical - but multi-DOF joints are built up from single-DOF pairs in real arms. The manipulator's mobility is therefore just the count of its independent joint variables, which is why the DOF counting of section 1.6 follows directly from the joint list.",
              "A worked decomposition: a SCARA is R + R + P in its main chain - two revolute joints rotating about vertical axes (shoulder, elbow) and one prismatic joint sliding vertically (z-stroke), plus often a wrist roll. Its joint list fixes everything downstream: four joint variables (including the wrist roll), a planar work envelope with a vertical stroke, and the simple kinematics that make SCARA the assembly robot of choice. An articulated six-axis arm is six R joints - three for position (shoulder, elbow) and three wrist joints for orientation.",
              "Exam framing: 'define mechanism and manipulator; explain types of joints used in robots with sketches' is the standard form. Define both terms, draw the revolute and prismatic pairs with their axes marked, tabulate the composite pairs (cylindrical, spherical, planar, screw) with DOF, and close by decomposing one real arm (SCARA or articulated) into its joint list.",
            ],
            keyTerms: [
              { term: "Mechanism", definition: "Rigid links connected by joints to transmit and transform prescribed motion and force." },
              { term: "Link", definition: "A rigid body in the chain; in analysis, the space between two joint axes." },
              { term: "Kinematic pair (joint)", definition: "The connection permitting relative motion - revolute, prismatic, and composites." },
              { term: "Manipulator", definition: "An open kinematic chain on a base carrying an end effector for positioning tasks." },
              { term: "Open chain", definition: "Serial chain with one path from base to tool - no closed loops." },
            ],
            callout: {
              type: "tip",
              title: "Lower pairs, one DOF each",
              body: "Revolute and prismatic are the two 1-DOF lower pairs from which every syllabus arm is assembled; cylindrical = R+P, spherical = 3R, screw = R+P coupled. Count a manipulator's DOF by counting independent 1-DOF joints - this single habit makes the joint table and the DOF count agree every time.",
            },
            bullets: [
              "Mechanism: links + joints transmitting prescribed motion; manipulator: open chain for tool positioning.",
              "Revolute R: rotation about an axis - 1 DOF; the default robot joint.",
              "Prismatic P: sliding along an axis - 1 DOF; gantries, SCARA z-stroke.",
              "Composites: cylindrical R+P, spherical 3R, planar, screw/helical.",
              "SCARA = R + R + P: two vertical-axis revolutes, one vertical prismatic, optional wrist roll.",
              "Six-axis articulated = 6 R joints: three position + three orientation.",
            ],
            diagram: {
              kind: "layers",
              title: "Manipulator anatomy from base to tool",
              caption: "Read the chain upward: the base anchors, the arm positions, the wrist orients, the end effector works.",
              layers: [
                { label: "End effector", note: "gripper or tool at the flange" },
                { label: "Wrist (2-3 R joints)", note: "orients the tool in space" },
                { label: "Arm (links + joints)", note: "positions the wrist; RRR or RRP" },
                { label: "Base", note: "anchors the chain to the floor or rail" },
              ],
            },
            table: {
              caption: "Joint type · motion · DOF · where it appears.",
              headers: ["Joint", "Motion", "DOF", "Typical use"],
              rows: [
                ["Revolute (R)", "rotation about an axis", "1", "arm, elbow, wrist joints"],
                ["Prismatic (P)", "sliding along an axis", "1", "gantry axes, SCARA z-stroke"],
                ["Cylindrical", "rotation + slide", "2", "composite of R + P"],
                ["Spherical (ball)", "rotation about a point", "3", "composite of 3R; wrist concepts"],
                ["Screw (helical)", "coupled rotation + slide", "1", "lead screws, jacks"],
              ],
            },
            examQuestions: [
              {
                q: "Define mechanism and manipulator. Explain the types of joints (kinematic pairs) used in robots with neat sketches and the degree of freedom of each.",
                marks: 14,
                outline: [
                  "Mechanism: links + joints transmitting prescribed motion/force",
                  "Manipulator: open kinematic chain on a base carrying the end effector",
                  "Revolute R: rotation, 1 DOF - sketch with axis",
                  "Prismatic P: sliding, 1 DOF - sketch with axis",
                  "Composites: cylindrical (2), spherical (3), planar, screw (1)",
                  "DOF of a manipulator = count of independent 1-DOF joints",
                  "Decompose SCARA (R+R+P) or a 6-axis articulated arm as the example",
                ],
              },
              {
                q: "Differentiate revolute and prismatic joints with sketches, and state one robot configuration in which each dominates.",
                marks: 7,
                outline: [
                  "Revolute: rotation about a fixed axis; compact, strong, the default",
                  "Prismatic: sliding along a straight axis; stiff, needs length",
                  "Articulated arm: revolute everywhere",
                  "Cartesian gantry: prismatic everywhere",
                  "SCARA mixes both: 2R + P",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Degrees of freedom and the workspace",
            body: [
              "The degree of freedom (DOF) of a mechanism is the number of independent coordinates needed to specify its configuration. A free rigid body in space has six - three translations and three rotations - so placing an object at an arbitrary position and orientation demands a six-DOF manipulator. Fewer than six means some poses are unreachable or need re-fixturing: a SCARA's four DOF suffice only for planar assembly with a vertical insert, while painting a car body needs all six. Arms with more than six are redundant - extra joints for obstacle avoidance and dexterity - and their control must pick one solution among many.",
              "The workspace is the volume of points the end effector can reach. Two variants are distinguished: the reachable workspace (every point some orientation can touch) and the dexterous workspace (every point reachable with every orientation). Joint limits carve the envelope out of the geometry's ideal shape - the rectangular box of a Cartesian, the annulus of a planar 2R arm (between |L1 - L2| and L1 + L2), the near-spherical blob of an articulated arm. Workspace sketches and the reach/repeatability figures are how robots are specified in datasheets, and the examiner expects the two terms distinguished.",
              "A worked DOF count uses Grübler's planar criterion: M = 3(n - 1) - 2j, with n the link count including ground and j the 1-DOF joint count. Four-bar linkage: n = 4, j = 4, M = 3 x 3 - 2 x 4 = 1. Planar 2R arm: n = 3, j = 2, M = 6 - 4 = 2. Slider-crank: n = 4, j = 3 pins + 1 slide = 4, M = 9 - 8 = 1. The spatial form (Kutzbach) M = 6(n - 1 - j1) + Σfi extends the idea, but the planar counts above are what appear in exams.",
              "Exam framing: two questions recur - 'why does a robot need six DOF?' (answer: 3 + 3 for position and orientation of a rigid body) and 'find the DOF of the given mechanism' (apply Grübler with n and j counted carefully, ground included). The dexterous versus reachable workspace distinction is the third guaranteed mark.",
            ],
            keyTerms: [
              { term: "Degree of freedom (DOF)", definition: "The number of independent coordinates specifying the mechanism's configuration." },
              { term: "Reachable workspace", definition: "All points the end effector can reach with some orientation." },
              { term: "Dexterous workspace", definition: "All points reachable with every orientation." },
              { term: "Redundant manipulator", definition: "More than six DOF; infinitely many inverse-kinematics solutions." },
              { term: "Grübler criterion", definition: "Planar mobility M = 3(n - 1) - 2j for n links and j one-DOF joints." },
            ],
            callout: {
              type: "exam",
              title: "Six = three plus three",
              body: "A rigid body needs six numbers - x, y, z and three orientation angles - so arbitrary placement demands six DOF. SCARA's four DOF are enough only because assembly is planar plus a vertical insert. Write the 3 + 3 sentence first; it is the conceptual mark before any counting.",
            },
            bullets: [
              "DOF = independent coordinates of configuration; a free body has 6 (3 translations + 3 rotations).",
              "Arbitrary pose needs 6 DOF; SCARA's 4 DOF serve planar + vertical tasks only.",
              "Redundant arms (>6 DOF) trade uniqueness of IK for obstacle avoidance.",
              "Reachable workspace: some orientation; dexterous workspace: every orientation.",
              "Planar 2R arm workspace: annulus between |L1 - L2| and L1 + L2.",
              "Grübler planar: M = 3(n - 1) - 2j; four-bar = 1, 2R arm = 2, slider-crank = 1.",
            ],
            diagram: {
              kind: "matrix",
              title: "Configuration selection: workspace versus precision",
              caption: "Axis x sweeps workspace size; axis y rises with precision - each classical geometry sits in its own quadrant.",
              axes: { x: "Workspace size (compact -> sweeping)", y: "Precision (low -> high)" },
              quadrants: [
                { label: "Cartesian gantry", note: "highest repeatability, bounded box" },
                { label: "Articulated 6-axis", note: "largest dexterous volume, rigidity carries precision" },
                { label: "Cylindrical", note: "radial sweep, medium precision" },
                { label: "Spherical", note: "max reach per kg, lowest stiffness" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "gruebler.py - planar DOF counts",
              code: `def planar_dof(n_links, joints_1dof):
    return 3 * (n_links - 1) - 2 * joints_1dof

print(planar_dof(4, 4))       # four-bar linkage -> 1
print(planar_dof(3, 2))       # planar 2R arm     -> 2
print(planar_dof(4, 4))       # slider-crank      -> 1  (3 pins + 1 slide)`,
            },
            examQuestions: [
              {
                q: "Define degree of freedom, reachable workspace and dexterous workspace. Why does a general-purpose manipulator require six degrees of freedom, and when is a SCARA's four enough?",
                marks: 14,
                outline: [
                  "DOF: independent coordinates of configuration",
                  "Free rigid body: 6 DOF - 3 translations + 3 rotations",
                  "Reachable workspace: some orientation; dexterous: every orientation",
                  "6 = 3 + 3 for arbitrary position and orientation",
                  "SCARA's 4 DOF: planar assembly + vertical insert is the task",
                  "Fewer than 6 forces re-fixturing or limits orientations",
                  "Redundant arms (>6): multiple IK solutions, obstacle avoidance",
                ],
              },
              {
                q: "Using Grübler's criterion, find the degrees of freedom of (a) a four-bar linkage, (b) a planar 2R manipulator, (c) a slider-crank mechanism.",
                marks: 7,
                outline: [
                  "M = 3(n - 1) - 2j, n includes ground",
                  "Four-bar: n = 4, j = 4 -> M = 9 - 8 = 1",
                  "2R arm: n = 3, j = 2 -> M = 6 - 4 = 2",
                  "Slider-crank: n = 4, j = 4 (3 pins + 1 slide) -> M = 1",
                  "Interpretation: each count equals the independent inputs needed",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Social issues and safety",
            body: [
              "Safety is designed, not hoped for. An industrial robot is strong, fast and blind; a person inside its envelope is a crushing hazard. The standards hierarchy: ISO 10218-1/2 governs industrial robot and cell safety, and ISO/TS 15066 extends it to collaborative operation with quantified force and pressure limits per body region. The safeguarding toolbox: physical fences with interlocked gates, light curtains that stop motion when the beam breaks, pressure mats, safety-rated soft axis limiting, clearly placed emergency stops, and - in collaborative mode - speed-and-separation monitoring and power-and-force-limited joints.",
              "Risk assessment is the method that binds it together: identify hazards (impact, crushing, trapping, injection from hydraulic lines, electric, stored energy), estimate risk (severity x probability x exposure), reduce it (inherently safe design first, then engineering controls - the guards and interlocks - then information and training). The collaborative robot is not automatically safe: cobots are safe only within a validated application - a force-limited arm holding a razor is still a razor. That single sentence demonstrates the maturity examiners look for.",
              "The social issues are the other half of the syllabus line. Employment: robots displace repetitive manual jobs while creating others (robot operators, integrators, maintenance technicians); the honest discussion names both and lands on retraining and policy rather than slogans. Economics: productivity and quality rise, unit costs fall, and the gains concentrate where capital is - inequality is the real debate. Ethics and law: who is responsible when an autonomous machine errs, liability across manufacturer-integrator-user, and the psychological effects of human-robot workplaces. Two paragraphs of balanced discussion is the expected depth.",
              "Exam framing: 'discuss the social issues and safety aspects of robotics' is a 14-mark discussion question with no numericals - it rewards structure. Safety half: hazards, standards (quote ISO 10218 and ISO/TS 15066 by name), safeguarding devices, risk-assessment three-step. Social half: employment both sides, economics, ethics/liability. A closing line - 'safety is a design input, compliance is the output' - ties the halves together.",
            ],
            keyTerms: [
              { term: "ISO 10218", definition: "The industrial robot safety standard for robot and cell (parts 1 and 2)." },
              { term: "ISO/TS 15066", definition: "Collaborative robot safety specification with per-body-region force/pressure limits." },
              { term: "Light curtain", definition: "Photoelectric barrier that stops motion when the beam is broken." },
              { term: "Risk assessment", definition: "Hazard identification -> risk estimation -> risk reduction, in that order." },
              { term: "Collaborative robot (cobot)", definition: "A robot validated to share workspace with humans under force/speed limits." },
            ],
            callout: {
              type: "warning",
              title: "The fence is part of the control system",
              body: "Interlocked gates and light curtains wire into the safety-rated controller: opening the gate holds the robot, and defeating them is a design failure, not operator negligence. Emergency stops must be hardwired in the safety chain - a software-only stop is the classic wrong answer in integration questions.",
            },
            bullets: [
              "Hazards: impact, crushing, trapping; plus hydraulic injection and stored energy.",
              "Standards: ISO 10218-1/2 industrial; ISO/TS 15066 collaborative force limits.",
              "Safeguards: fences + interlocks, light curtains, mats, e-stops, soft axis limits.",
              "Cobots: speed-and-separation monitoring, power-and-force limiting - validated application only.",
              "Risk assessment: identify -> estimate -> reduce (design first, then engineering controls).",
              "Social: displacement vs new technician jobs; productivity vs inequality; liability for autonomous error.",
            ],
            diagram: {
              kind: "fork",
              title: "A person approaches the robot cell",
              caption: "Every safe path ends in motion stopped or limited - the unsafe path is a design failure.",
              start: "Human enters the robot workspace",
              branches: [
                { label: "Interlocked gate opened", outcome: "safety controller holds/stops motion", good: true },
                { label: "Light curtain beam broken", outcome: "stop within milliseconds, before contact", good: true },
                { label: "Collaborative mode engaged", outcome: "force-limited, speed monitored - safe sharing", good: true },
                { label: "Unfenced arm, no interlocks", outcome: "crushing hazard - safeguarding was not designed", good: false },
              ],
            },
            table: {
              caption: "Safeguarding device · how it protects · where it is used.",
              headers: ["Safeguard", "How it protects", "Typical use"],
              rows: [
                ["Fence + interlocked gate", "physical exclusion; gate open = stop", "standard industrial cells"],
                ["Light curtain", "beam break stops motion pre-contact", "part insertion points"],
                ["Pressure mat", "footstep in the zone halts the robot", "floor-level access zones"],
                ["Emergency stop", "hardwired cut of drive power", "every station, pendant included"],
                ["Speed-and-separation monitoring", "laser scanner slows/stops by distance", "collaborative cells"],
                ["Power-and-force limiting", "joint energy capped below injury levels", "cobot contact applications"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the safety measures and safeguarding devices used in robot installations, quoting the relevant standards and the risk-assessment procedure.",
                marks: 14,
                outline: [
                  "Hazard list: impact, crushing, trapping, injection, electric, stored energy",
                  "ISO 10218-1/2 for industrial; ISO/TS 15066 for collaborative limits",
                  "Risk assessment: identify -> estimate -> reduce, in that order",
                  "Fences + interlocked gates; light curtains; pressure mats",
                  "Emergency stop hardwired in the safety chain",
                  "Cobots: speed-and-separation monitoring, power-and-force limiting",
                  "Cobots are safe only in validated applications - state the razor example",
                ],
              },
              {
                q: "Discuss the social and economic impacts of robot adoption in manufacturing.",
                marks: 7,
                outline: [
                  "Displacement of repetitive manual jobs - name the sectors",
                  "Creation of new roles: operators, integrators, maintenance technicians",
                  "Productivity, quality and unit-cost gains; competitiveness",
                  "Distribution concern: gains concentrate with capital - inequality debate",
                  "Response: retraining, education policy, human-robot workplace design",
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
      title: "Robot Kinematics and Dynamics",
      summary:
        "Unit II is the mathematical heart: translation and rotation representation, homogeneous coordinate transformations and their composition, the Denavit-Hartenberg convention and forward kinematics, the Jacobian with its singularities and the statics it implies, and the Euler-Lagrange formulation of the equations of motion.",
      chapter: {
        number: "02",
        title: "The Geometry of Motion",
        intro:
          "Unit II covers position vectors and rotation matrices, homogeneous transformations and their composition, DH parameters and the forward kinematics of a planar 2R arm, the Jacobian and singularities, static force-torque mapping, and the Euler-Lagrange equations of motion.",
        inOneBreath:
          "Kinematics maps joint variables to tool pose by chaining 4x4 homogeneous matrices built from DH parameters. The Jacobian maps joint velocities to Cartesian velocities and, transposed, Cartesian forces to joint torques. When its determinant vanishes the arm is singular and loses a motion direction - near it, small Cartesian steps demand enormous joint speeds. Dynamics adds mass and gravity: M(q)qddot + C(q,qdot)qdot + g(q) = tau, derived from the Euler-Lagrange formulation.",
        sections: [
          {
            number: "2.1",
            title: "Translation and rotation representation",
            body: [
              "Position is a vector; orientation needs structure. The standard representation of orientation is the 3x3 rotation matrix (an element of SO(3)): orthogonal columns of unit length, determinant +1, whose columns are the body frame's axes expressed in the world frame. Rotation about the x, y and z axes has the elementary forms Rz = [[c,-s,0],[s,c,0],[0,0,1]] and its cyclic cousins - every rotation in kinematics is a product of these. Because R is orthonormal, its inverse is simply its transpose R^T, a property worth writing because it halves the work in most numerical problems.",
              "A worked example makes the matrix tangible: rotate the point (1, 0, 0) by 90 degrees about z. Rz(90) = [[0,-1,0],[1,0,0],[0,0,1]], so p' = R p = (0, 1, 0) - the point on x lands on y, exactly as intuition demands. Rotation about x by 90 degrees instead would carry (1,0,0) to (1,0,0) - the point lies on the rotation axis and does not move. These two checks (a point off the axis rotates, a point on the axis stays) are the fastest way to sanity-check any rotation matrix written under exam pressure.",
              "Two structural facts earn the remaining marks. First, rotations do not commute: Rz(90) Ry(90) applied to a point differs from Ry(90) Rz(90) of the same point - order matters, and a one-line numerical demonstration (or the aerospace analogy of aircraft yaw-then-pitch) proves it. Second, alternatives exist for good reasons: Euler angles and fixed angles use three parameters but suffer gimbal-lock singularities; quaternions use four parameters, never lock, and interpolate cleanly - which is why robot and game software stores orientations as quaternions even though the math is taught with matrices.",
              "Exam framing: expect 'explain rotation matrix properties' and 'represent rotation about the z axis and apply it'. Write the three properties (orthonormal, det = +1, inverse = transpose), give one elementary matrix, apply it to a named point, and close with the non-commutativity demonstration. That four-part structure is the complete answer.",
            ],
            keyTerms: [
              { term: "Rotation matrix (SO(3))", definition: "3x3 orthonormal matrix with determinant +1 whose columns are the body axes in world coordinates." },
              { term: "Elementary rotation", definition: "Rotation about one coordinate axis; the building block of all composed rotations." },
              { term: "Gimbal lock", definition: "The Euler-angle singularity where two axes align and one rotational DOF is lost." },
              { term: "Quaternion", definition: "Four-parameter orientation representation without gimbal lock; interpolates cleanly." },
              { term: "Non-commutativity", definition: "R1 R2 differs from R2 R1 - rotation order matters." },
            ],
            callout: {
              type: "exam",
              title: "Columns, not rows",
              body: "The columns of R are the body axes expressed in the world frame - a sentence that answers 'interpret the rotation matrix' instantly. Pair it with R^(-1) = R^T from orthonormality, and demonstrate non-commutativity with one numeric counterexample; those three items are the full property answer.",
            },
            bullets: [
              "Orientation: 3x3 rotation matrix; orthonormal columns, det = +1, inverse = transpose.",
              "Rz(90) = [[0,-1,0],[1,0,0],[0,0,1]] carries (1,0,0) to (0,1,0).",
              "A point on the rotation axis does not move - the fastest sanity check.",
              "Rotations do not commute: Rz Ry differs from Ry Rz - order matters.",
              "Euler angles: 3 parameters, gimbal lock; quaternions: 4 parameters, no lock.",
              "Fixed angles (about world axes) vs Euler angles (about body axes) - state which you use.",
            ],
            diagram: {
              kind: "flow",
              title: "From position to pose",
              caption: "Position and orientation combine into one pose object - the unit every later section manipulates.",
              steps: [
                { label: "Position vector p", note: "3 numbers, world frame" },
                { label: "Rotation matrix R", note: "9 numbers, 3 constraints" },
                { label: "Pose T = [R p; 0 1]", note: "homogeneous 4x4" },
                { label: "Pose of every link", note: "the chain of section 2.2" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "rotate.py - 90 degrees about z, checked",
              code: `import numpy as np

th = np.radians(90)
Rz = np.array([[np.cos(th), -np.sin(th), 0],
               [np.sin(th),  np.cos(th), 0],
               [0,           0,          1]])
p = np.array([1, 0, 0])
print(Rz @ p)                        # [0 1 0] - x lands on y
print(np.round(Rz @ Rz.T, 6))        # identity: R^-1 = R^T`,
            },
            examQuestions: [
              {
                q: "Explain the representation of orientation using rotation matrices. State the properties of a rotation matrix, write the elementary rotation about the z axis, and show with an example that rotations do not commute.",
                marks: 14,
                outline: [
                  "SO(3): 3x3 orthonormal, det = +1",
                  "Columns of R are body axes in world frame",
                  "R^(-1) = R^T by orthonormality",
                  "Rz(theta) = [[c,-s,0],[s,c,0],[0,0,1]] written out",
                  "Apply Rz(90) to (1,0,0) -> (0,1,0)",
                  "Counterexample: Rz(90)Ry(90) vs Ry(90)Rz(90) on one point differ",
                  "Note Euler angles vs quaternions as alternatives; gimbal lock",
                ],
              },
              {
                q: "A point P(2, 0, 0) is rotated 90 degrees about the z axis and then 90 degrees about the x axis. Find its final coordinates.",
                marks: 7,
                outline: [
                  "Rz(90): (2,0,0) -> (0,2,0)",
                  "Rx(90): y -> z, so (0,2,0) -> (0,0,2)",
                  "Compose in the stated order; matrices multiply right-to-left on the vector",
                  "Sanity check: distance from origin is preserved (2 units)",
                  "Reverse order gives a different point - non-commutativity",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Coordinate transformation",
            body: [
              "The homogeneous transformation matrix packs position and orientation into one 4x4 object: T = [[R, p],[0, 1]] - the upper-left 3x3 block rotates, the right column translates, and a point in homogeneous coordinates is mapped by a single multiplication. Its power is composition: a chain of frames is one product T_0n = T_01 T_12 ... T_(n-1)n, which is precisely how the DH transforms of section 2.3 assemble the tool pose. The inverse has the cheap closed form T^(-1) = [[R^T, -R^T p],[0, 1]] - no matrix inversion needed, only the transpose.",
              "Order matters, and a worked example proves it in two lines. Take the point (2, 0, 0); first rotate 90 degrees about z, then translate by (1, 0, 0): rotation gives (0, 2, 0), translation gives (1, 2, 0). Reverse the order: translation first gives (3, 0, 0), rotation then gives (0, 3, 0). Same two operations, different answers - transformations compose non-commutatively, so the convention must be stated: column vectors multiply as p' = T p, reading transforms applied right-to-left (nearest to the vector acts first).",
              "The two conventions trap is the classic source of wrong FK answers. Textbooks differ: some (Craig) post-multiply along the chain, others (Saha, Spong in places) pre-multiply; the same physical arm yields transposed-looking matrices under the two conventions. The defence is procedural - declare 'column vectors, right-to-left' at the top of the answer, build each T from its stated recipe, multiply in the declared order, and check dimensionality (4x4 throughout). Consistency, not convention choice, is what earns the method marks.",
              "Exam framing: 'what is a homogeneous transformation matrix? Show its use in transforming points and frames, including the inverse' is the standard question. Write the matrix layout, transform one numeric point, compose two transforms on one point to show order sensitivity, and write the inverse formula. The inverse formula is worth memorizing - it appears in nearly every mark scheme.",
            ],
            keyTerms: [
              { term: "Homogeneous transformation", definition: "4x4 matrix [[R, p],[0,1]] combining rotation and translation in one multiplication." },
              { term: "Composition", definition: "T_0n = T_01 T_12 ... - a chain of frames multiplied in the declared order." },
              { term: "Transform inverse", definition: "T^(-1) = [[R^T, -R^T p],[0,1]] - transpose, not inversion." },
              { term: "Frame", definition: "A coordinate system attached to a link; transformations map between frames." },
              { term: "Column-vector convention", definition: "p' = T p with right-to-left application; the convention to declare and keep." },
            ],
            callout: {
              type: "tip",
              title: "Declare your convention first",
              body: "Textbooks disagree on pre- vs post-multiplication, and exam scripts that silently mix them produce transposed-looking wrong answers. One line at the top - 'column vectors; transforms apply right-to-left' - protects every subsequent step and signals exactly the maturity the method marks reward.",
            },
            bullets: [
              "T = [[R, p],[0, 1]]: rotate and translate in one multiplication.",
              "Chain: T_0n = T_01 x T_12 x ... x T_(n-1)n - the FK engine.",
              "Inverse: T^(-1) = [[R^T, -R^T p],[0, 1]] - memorize this form.",
              "(2,0,0): rotate-then-translate -> (1,2,0); translate-then-rotate -> (0,3,0).",
              "Order sensitivity is structural: transforms do not commute.",
              "Craig post-multiplies; Saha pre-multiplies - state and keep one convention.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Mapping a point between frames",
              caption: "Build the transform once, then any point or pose maps through it - including back via the inverse.",
              stages: [
                { label: "Frame {B} in {A}", note: "R and p measured" },
                { label: "Build T_AB", note: "[[R, p],[0, 1]]" },
                { label: "Compose chain", note: "T_0n = T_01 T_12 ..." },
                { label: "Map point/pose", note: "p_A = T_AB p_B" },
              ],
            },
            table: {
              caption: "Transformation rules and the two traps.",
              headers: ["Rule", "Statement", "Note"],
              rows: [
                ["Point transform", "p' = T p (4x1 homogeneous)", "translation and rotation at once"],
                ["Chain composition", "T_0n = T_01 T_12 ... T_(n-1)n", "order declared, non-commutative"],
                ["Inverse", "T^(-1) = [[R^T, -R^T p],[0,1]]", "no numeric inversion needed"],
                ["Pure translation", "identity rotation block", "upper-left = I"],
                ["Pure rotation", "zero translation column", "right column = [0 0 0 1]^T"],
                ["Convention", "column vectors, right-to-left", "declare it; keep it"],
              ],
            },
            examQuestions: [
              {
                q: "What is a homogeneous transformation matrix? Show how it transforms a point, compose two transforms to demonstrate order sensitivity, and write its inverse in closed form.",
                marks: 14,
                outline: [
                  "Layout: [[R, p],[0, 1]] - rotation block + translation column",
                  "Point transform p' = T p with homogeneous coordinates",
                  "Worked: (2,0,0), Rz(90) then translate (1,0,0) -> (1,2,0)",
                  "Reversed order -> (0,3,0): transformations do not commute",
                  "Composition T_0n = T_01 T_12 ... with declared convention",
                  "Inverse T^(-1) = [[R^T, -R^T p],[0,1]]",
                  "Why inverse is cheap: rotation orthonormality",
                ],
              },
              {
                q: "Write the homogeneous transformation for a translation of (3, -1, 2) followed by a rotation of 90 degrees about the z axis, and give the transform's inverse.",
                marks: 7,
                outline: [
                  "T = Rz(90) x Trans(3,-1,2) in the declared order",
                  "Rz(90) = [[0,-1,0],[1,0,0],[0,0,1]]",
                  "Assembled 4x4 with translation column (3,-1,2)",
                  "Inverse: R^T = Rz(-90); -R^T p computed",
                  "Check: T x T^(-1) = I",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Denavit-Hartenberg parameters",
            body: [
              "The DH convention is the bookkeeping that turns a robot's geometry into four numbers per joint. Attach a frame to every link so that joint i's axis is the local z_i axis; then link i is described by exactly four parameters: the link length a_i (distance along the common normal between the joint axes), the link twist alpha_i (angle between the axes, about the common normal), the link offset d_i (distance along the previous z axis) and the joint angle theta_i (rotation about the previous z axis). Six numbers per joint would describe a general frame; the DH rules cut this to four - that minimality is the convention's entire point.",
              "The procedure is as examinable as the parameters: number the joints 1..n, assign z_i along each joint axis, choose x_i along the common normal between consecutive z axes, then read off a, alpha, d, theta. Each link transform is the product of four elementary transforms, A_i = Rz(theta_i) Tz(d_i) Tx(a_i) Rx(alpha_i), and the forward kinematics is their chain product. For a planar 2R arm the table is wonderfully small: a1 = L1, a2 = L2, and all alpha and d are zero, with theta1 and theta2 the joint variables - one variable per row, three constants.",
              "A worked build: for the 2R arm with L1 = L2 = 1 m at theta1 = 30, theta2 = 45 degrees, A1 and A2 each contain a pure planar rotation-plus-translation; their product places the tool at (1.125, 1.466, 0) with orientation 75 degrees (the full numbers are section 2.4's business). The check worth stating: A_i must have exactly one parameter varying per joint row - theta for a revolute joint, d for a prismatic - and an examiner scans the table precisely for this.",
              "Exam framing: 'explain the DH convention: frame assignment rules, the four parameters, and obtain the link transformation matrix' is a guaranteed 14-mark question. The full-mark answer: the four assignment rules, the four parameters defined with sketches (a along the common normal, alpha between the z's, d along z, theta about z), the A_i product formula, and a filled table for the standard 2R arm.",
            ],
            keyTerms: [
              { term: "DH parameters", definition: "a (length), alpha (twist), d (offset), theta (angle) - four numbers per link." },
              { term: "Common normal", definition: "The shortest line between consecutive joint axes; carries the x axes and a_i." },
              { term: "Link transform A_i", definition: "A_i = Rz(theta) Tz(d) Tx(a) Rx(alpha); the pose of frame i in frame i-1." },
              { term: "Joint variable", definition: "The one parameter per row that the motor drives - theta (revolute) or d (prismatic)." },
              { term: "Frame assignment", definition: "z along the joint axis, x along the common normal, y completes right-handed." },
            ],
            callout: {
              type: "exam",
              title: "One variable per row",
              body: "In a valid DH table each joint row has exactly one variable: theta_i for a revolute joint, d_i for a prismatic one; the other three entries are constants. Examiners scan for this first - a table with two variables in a row is an instant structural deduction, regardless of the algebra that follows.",
            },
            bullets: [
              "Four parameters per link: a (length), alpha (twist), d (offset), theta (angle).",
              "Assignment rules: z_i along joint axis; x_i along common normal; right-handed y.",
              "Link transform: A_i = Rz(theta_i) Tz(d_i) Tx(a_i) Rx(alpha_i).",
              "FK = chain product A1 A2 ... An - four matrices per joint, multiplied once.",
              "2R planar arm: a1 = L1, a2 = L2, alpha = 0, d = 0; theta1, theta2 variable.",
              "Exactly one variable per row - theta for revolute, d for prismatic.",
            ],
            diagram: {
              kind: "flow",
              title: "The DH procedure",
              caption: "Frames first, parameters second, matrices third - the order that keeps the algebra honest.",
              steps: [
                { label: "Number joints 1..n", note: "base to tool" },
                { label: "Assign z_i", note: "along each joint axis" },
                { label: "Assign x_i", note: "along common normals" },
                { label: "Read a, alpha, d, theta", note: "fill the table" },
                { label: "Build A_i", note: "Rz Tz Tx Rx, then multiply" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "dh.py - one link transform, built from four parameters",
              code: `import numpy as np

def dh(theta, d, a, alpha):
    ct, st = np.cos(theta), np.sin(theta)
    ca, sa = np.cos(alpha), np.sin(alpha)
    return np.array([
        [ct, -st*ca,  st*sa, a*ct],
        [st,  ct*ca, -ct*sa, a*st],
        [0,      sa,     ca,     d],
        [0,       0,      0,     1]])

t1, t2 = np.radians(30), np.radians(45)
T = dh(t1, 0, 1, 0) @ dh(t2, 0, 1, 0)   # 2R planar chain
print(np.round(T[:2, 3], 3))            # tool position (1.125, 1.466)`,
            },
            examQuestions: [
              {
                q: "Explain the Denavit-Hartenberg convention: the frame assignment rules, the meaning of the four parameters with sketches, and the composition of the link transformation matrix.",
                marks: 14,
                outline: [
                  "Assignment: z_i along joint axis; x_i along common normal; y right-handed",
                  "a_i: length along common normal; alpha_i: angle between z axes",
                  "d_i: offset along previous z; theta_i: angle about previous z",
                  "Sketch of two consecutive z axes with a, alpha, d, theta marked",
                  "A_i = Rz(theta) Tz(d) Tx(a) Rx(alpha)",
                  "FK = product A1 ... An",
                  "Exactly one joint variable per row; 2R arm as the example table",
                ],
              },
              {
                q: "Attach DH frames to a planar 2R manipulator with link lengths L1 and L2, and write its complete DH parameter table.",
                marks: 7,
                outline: [
                  "Both joint axes parallel (vertical z), common normals horizontal",
                  "Row 1: a1 = L1, alpha1 = 0, d1 = 0, theta1 = variable",
                  "Row 2: a2 = L2, alpha2 = 0, d2 = 0, theta2 = variable",
                  "One variable per row - both joints revolute",
                  "State A_i formula; product gives FK (next section's numbers)",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Forward kinematics of a planar 2R arm",
            body: [
              "Forward kinematics is the map joint angles -> end-effector pose, computed as the chain product of DH transforms. For the planar 2R arm the product collapses to two memorable lines: x = L1 cos(theta1) + L2 cos(theta1 + theta2), y = L1 sin(theta1) + L2 sin(theta1 + theta2), with the tool orientation phi = theta1 + theta2. These closed forms are the syllabus's canonical FK result and the seed of the Jacobian in section 2.5 - deriving them once from the DH product and then quoting them is the efficient exam strategy.",
              "A worked numerical: L1 = L2 = 1 m, theta1 = 30 degrees, theta2 = 45 degrees. cos30 = 0.866, sin30 = 0.5; the summed angle is 75 degrees with cos75 = 0.259, sin75 = 0.966. So x = 0.866 + 0.259 = 1.125 m and y = 0.5 + 0.966 = 1.466 m; the tool points at phi = 75 degrees. A dimensional sanity check: the reach is sqrt(1.125^2 + 1.466^2) = 1.85 m, inside the maximum 2 m - a two-second check that catches sign slips.",
              "The workspace insight follows from the same formulas: the reachable set is the annulus between |L1 - L2| and L1 + L2 from the base. At the outer circle (theta2 = 0) and inner circle (theta2 = 180 degrees) the arm is singular - the subject of section 2.6. Also note the elbow-up/elbow-down duality: two angle pairs produce the same tool position, which is why inverse kinematics (not in this syllabus's numericals, but conceptually expected) returns two solutions.",
              "Exam framing: 'obtain the forward kinematics of a 2R planar manipulator using DH parameters and compute the end-effector position for given angles' is the standard 14-mark form. Fill the DH table, write the two-line closed form, substitute the numbers, state the orientation, and sketch the arm with the tool marked - the sketch is the figure mark and simultaneously verifies the arithmetic.",
            ],
            keyTerms: [
              { term: "Forward kinematics", definition: "The map from joint variables to end-effector pose; unique, closed-form." },
              { term: "End-effector pose", definition: "Position (x, y, z) plus orientation phi of the tool frame." },
              { term: "Tool-center point (TCP)", definition: "The reference point on the flange or tool used for all positioning." },
              { term: "Workspace annulus", definition: "2R reachable set: between |L1 - L2| and L1 + L2 from the base." },
              { term: "Elbow-up / elbow-down", definition: "The two distinct joint solutions for one tool position." },
            ],
            callout: {
              type: "exam",
              title: "The two-line closed form",
              body: "x = L1 cos(th1) + L2 cos(th1 + th2), y = L1 sin(th1) + L2 sin(th1 + th2), phi = th1 + th2. The DH table earns the method marks and these lines earn the result marks; always finish with the reach check against L1 + L2 - it converts an arithmetic slip into a visible inconsistency before the examiner sees it.",
            },
            bullets: [
              "FK = A1 x A2 for the 2R arm; unique map from joints to pose.",
              "x = L1 c1 + L2 c12; y = L1 s1 + L2 s12; phi = th1 + th2.",
              "Worked: L1 = L2 = 1, th1 = 30, th2 = 45 -> (1.125, 1.466) m at 75 degrees.",
              "Reach check: sqrt(x^2 + y^2) = 1.85 m < L1 + L2 = 2 m.",
              "Workspace: annulus from |L1 - L2| to L1 + L2.",
              "Two IK solutions (elbow up/down) for one position - FK is unique, IK is not.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Forward kinematics in four stages",
              caption: "Joint readings enter, the DH chain multiplies, the tool pose exits - no sensing in between.",
              stages: [
                { label: "Joint vector (th1, th2)", note: "from the encoders" },
                { label: "DH table", note: "one row per link" },
                { label: "Chain product A1 A2", note: "4x4 matrices" },
                { label: "Tool pose (x, y, phi)", note: "TCP position + orientation" },
              ],
            },
            table: {
              caption: "DH table of the planar 2R arm (lengths L1, L2).",
              headers: ["Link", "a_i", "alpha_i", "d_i", "theta_i"],
              rows: [
                ["1", "L1", "0 deg", "0", "theta1 (variable)"],
                ["2", "L2", "0 deg", "0", "theta2 (variable)"],
              ],
            },
            examQuestions: [
              {
                q: "Using DH parameters, derive the forward kinematic equations of a planar 2R manipulator. Compute the end-effector position and orientation for L1 = L2 = 1 m, theta1 = 30 degrees, theta2 = 45 degrees, and sketch the arm.",
                marks: 14,
                outline: [
                  "DH table: a1 = L1, a2 = L2; alpha = d = 0; theta variable",
                  "A1 A2 product expands to the closed form",
                  "x = L1 c1 + L2 c(1+2); y = L1 s1 + L2 s(1+2)",
                  "Substitution: x = 0.866 + 0.259 = 1.125 m; y = 0.5 + 0.966 = 1.466 m",
                  "Orientation phi = th1 + th2 = 75 degrees",
                  "Reach check 1.85 m < 2 m; sketch with base, joints, TCP",
                  "Workspace annulus between |L1-L2| and L1+L2",
                ],
              },
              {
                q: "Show that the forward kinematics of a manipulator is unique while the inverse is not, using the planar 2R arm's elbow-up and elbow-down solutions.",
                marks: 7,
                outline: [
                  "FK: one joint vector -> exactly one pose (chain product)",
                  "IK: one pose -> two joint solutions in the planar 2R",
                  "Elbow-up and elbow-down mirror about the base-TCP line",
                  "Both satisfy the same x, y; they differ in phi handling and joint space",
                  "Redundant arms (>6 DOF): infinitely many IK solutions",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The Jacobian",
            body: [
              "The Jacobian is the linear map from joint velocities to end-effector velocity: xdot = J(q) qdot, where J is a 6 x n matrix for a spatial arm (2 x n for the planar case). Its columns have direct physical meaning - column i is the tool velocity caused by unit velocity of joint i with all others frozen. The Jacobian is configuration-dependent: it changes as the arm moves, and everything interesting about differential kinematics - singularities, dexterity, force transmission - is a statement about J at the current configuration.",
              "Derivation for the planar 2R arm: differentiate the FK closed forms of section 2.4. xdot = -L1 s1 th1dot - L2 s12 (th1dot + th2dot) and ydot = L1 c1 th1dot + L2 c12 (th1dot + th2dot), giving J = [[-L1 s1 - L2 s12, -L2 s12],[L1 c1 + L2 c12, L2 c12]]. Each entry is a geometric projection of the link onto the perpendicular of motion - the same structure a velocity diagram would produce, now algebraic.",
              "A worked numerical at L1 = L2 = 1 m, theta1 = 30, theta2 = 45 degrees: s1 = 0.5, c1 = 0.866, s12 = sin75 = 0.966, c12 = 0.259, so J = [[-1.466, -0.966],[1.125, 0.259]]. For joint velocities (0.5, 0.5) rad/s: xdot = -1.216 m/s, ydot = 0.692 m/s - the tool moves at 1.4 m/s toward the lower left. The determinant: det(J) = (-1.466)(0.259) - (-0.966)(1.125) = 0.707, which equals L1 L2 sin(theta2) = sin45 - a closed form worth memorizing because the singularity section is one line away.",
              "Exam framing: 'derive the Jacobian of a 2R manipulator and compute the end-effector velocity for given joint rates' is the standard numerical. Differentiate FK (or state the result), substitute angles, multiply by the given qdot, and state det(J) with the sin(theta2) interpretation. The column-meaning sentence is the conceptual mark examiners add on top.",
            ],
            keyTerms: [
              { term: "Jacobian J(q)", definition: "Configuration-dependent linear map xdot = J(q) qdot from joint to Cartesian velocities." },
              { term: "Column meaning", definition: "Column i = tool velocity per unit velocity of joint i, others frozen." },
              { term: "Twist", definition: "The stacked linear + angular velocity vector of the tool." },
              { term: "det(J)", definition: "Planar 2R: L1 L2 sin(theta2); vanishes at the singularities." },
              { term: "Differential kinematics", definition: "Velocity-level kinematics - the derivative of the FK map." },
            ],
            callout: {
              type: "tip",
              title: "det(J) = L1 L2 sin(theta2) for the planar 2R",
              body: "One closed form answers three questions at once: the Jacobian numerical, the singularity condition (theta2 = 0 or 180 degrees), and the dexterity statement (workspace interior is most dexterous at theta2 = 90 degrees). Derive it once from the 2R Jacobian and reuse it everywhere - it is the most mark-dense line in Unit II.",
            },
            bullets: [
              "xdot = J(q) qdot: linear, configuration-dependent velocity map.",
              "Column i: tool velocity from unit joint-i velocity, others frozen.",
              "2R: J = [[-L1 s1 - L2 s12, -L2 s12],[L1 c1 + L2 c12, L2 c12]].",
              "At (30, 45) deg with unit links: J = [[-1.466, -0.966],[1.125, 0.259]].",
              "qdot = (0.5, 0.5) rad/s -> xdot = (-1.216, 0.692) m/s.",
              "det(J) = L1 L2 sin(theta2) = 0.707 at theta2 = 45 degrees.",
            ],
            diagram: {
              kind: "flow",
              title: "One matrix, two directions",
              caption: "J carries velocities forward; its transpose carries forces back - the two maps of this unit.",
              steps: [
                { label: "Joint rates qdot", note: "measured at the servos" },
                { label: "Jacobian J(q)", note: "built at the current pose" },
                { label: "Cartesian twist", note: "xdot = J qdot" },
                { label: "Reverse: statics", note: "tau = J^T f (section 2.7)" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "jacobian.py - build J, apply rates, check det",
              code: `import numpy as np

L1 = L2 = 1.0
t1, t2 = np.radians(30), np.radians(45)
s1, c1 = np.sin(t1), np.cos(t1)
s12, c12 = np.sin(t1 + t2), np.cos(t1 + t2)

J = np.array([[-L1*s1 - L2*s12, -L2*s12],
              [ L1*c1 + L2*c12,  L2*c12]])
qdot = np.array([0.5, 0.5])
print(np.round(J @ qdot, 3))     # [-1.216  0.692] m/s
print(round(np.linalg.det(J), 3))# 0.707 = L1*L2*sin(t2)`,
            },
            examQuestions: [
              {
                q: "Derive the Jacobian of a planar 2R manipulator from its forward kinematics. Compute the end-effector velocity for joint rates (0.5, 0.5) rad/s at theta1 = 30 degrees, theta2 = 45 degrees, with L1 = L2 = 1 m, and evaluate det(J).",
                marks: 14,
                outline: [
                  "Differentiate x and y FK lines to get the 2x2 J",
                  "J = [[-L1 s1 - L2 s12, -L2 s12],[L1 c1 + L2 c12, L2 c12]]",
                  "Substitute angles: J = [[-1.466, -0.966],[1.125, 0.259]]",
                  "xdot = J qdot = (-1.216, 0.692) m/s",
                  "det(J) = 0.707 = L1 L2 sin(theta2)",
                  "Column meaning: unit joint rates and their tool velocities",
                  "Singular when sin(theta2) = 0 - link to section 2.6",
                ],
              },
              {
                q: "Explain the physical meaning of the columns of the Jacobian and why the Jacobian is configuration-dependent.",
                marks: 7,
                outline: [
                  "Column i: tool velocity for unit velocity of joint i alone",
                  "Revolute column: perpendicular to the link; prismatic: along the axis",
                  "J changes with q - the same joint rates give different tool motion at each pose",
                  "Consequence: singularity, dexterity and force transmission are pose-dependent",
                  "6 x n for spatial arms: 3 linear + 3 angular rows",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Singularities",
            body: [
              "A singular configuration is a pose where the Jacobian loses rank - det(J) = 0 - and the arm instantaneously loses one or more degrees of freedom: some Cartesian direction becomes unreachable no matter how the joints spin. For the planar 2R arm the closed form det(J) = L1 L2 sin(theta2) makes the condition exact: theta2 = 0 (arm fully stretched, workspace boundary) or theta2 = 180 degrees (arm folded onto itself). At the boundary the tool cannot move radially outward; the missing direction is along the arm itself.",
              "Classification: workspace-boundary singularity (fully stretched), interior singularity (folded, still inside the annulus), wrist singularity - two wrist axes align and one rotational DOF is lost, the gimbal-lock of section 2.1 in mechanical form - and base singularity, when the vertical base axis and a wrist axis coincide. Consequences are symmetrical and severe: velocity amplification (small Cartesian steps demand huge joint speeds) and force amplification (small joint torques produce enormous tool forces), the latter a genuine safety concern near singular paths.",
              "A worked near-singular number shows why 'near' is the dangerous word. At theta2 = 1 degree, det(J) = sin(1 degree) = 0.0175 - the software sees no exact singularity, yet moving the tool 1 mm radially outward demands theta2dot about 0.001/0.0175 = 0.057 rad/s per mm, roughly 57 rad/s for a 10 mm step. The arm obeys, then lurches. This is why production paths are planned with a det(J) margin inside the dexterous workspace, and why controllers use damped least squares (pseudo-inverse with a damping term) to trade a little tracking error for bounded joint speeds.",
              "Exam framing: 'what is a singular configuration? Explain its types with sketches and consequences, and how are singularities avoided?' is the standard 14-mark form. Define via det(J) = 0, classify the four types, give the near-singular speed-amplification number, and close with the two defences - path planning with margin and damped least-squares/pseudo-inverse control.",
            ],
            keyTerms: [
              { term: "Singular configuration", definition: "Pose where det(J) = 0; the arm loses one or more motion directions." },
              { term: "Workspace-boundary singularity", definition: "Fully stretched arm; radial direction lost." },
              { term: "Wrist singularity", definition: "Two wrist axes align - one rotational DOF lost (mechanical gimbal lock)." },
              { term: "Velocity amplification", definition: "Near singularity, small Cartesian motion demands enormous joint rates." },
              { term: "Damped least squares", definition: "Pseudo-inverse with damping that bounds joint speeds near singularities." },
            ],
            callout: {
              type: "warning",
              title: "Near-singular is worse than singular",
              body: "Exactly at det(J) = 0 the software can detect and stop; slightly off it the arm obeys - and a 10 mm Cartesian step costs tens of rad/s, the classic unplanned lurch. Path planning with a det(J) margin, not a det(J) = 0 check, is the engineering answer; say so explicitly.",
            },
            bullets: [
              "Singularity: det(J) = 0 - rank loss, one or more Cartesian directions unreachable.",
              "Planar 2R: det(J) = L1 L2 sin(theta2); singular at theta2 = 0 and 180 degrees.",
              "Types: workspace-boundary, interior (folded), wrist (axis alignment), base.",
              "Velocity amplification: 1 mm step near theta2 = 1 degree demands ~5.7 rad/s per mm-scale det.",
              "Force amplification: the same geometry multiplies tool forces - a safety issue.",
              "Defences: path planning inside the dexterous workspace; damped least-squares control.",
            ],
            diagram: {
              kind: "fork",
              title: "Where the arm loses a direction",
              caption: "Three geometric ways to lose rank, and the planning discipline that avoids all of them.",
              start: "Scanning the path for rank loss",
              branches: [
                { label: "theta2 = 0: fully stretched", outcome: "boundary singularity - radial direction lost", good: false },
                { label: "theta2 = 180: folded", outcome: "interior singularity - radial direction lost", good: false },
                { label: "Two wrist axes align", outcome: "wrist singularity - one rotation lost", good: false },
                { label: "Path inside dexterous workspace with det(J) margin", outcome: "bounded joint speeds, smooth motion", good: true },
              ],
            },
            table: {
              caption: "Singularity catalogue: configuration, loss, fix.",
              headers: ["Type", "Configuration", "Lost capability", "Standard fix"],
              rows: [
                ["Boundary", "arm fully stretched (theta2 = 0)", "radial motion", "plan inside reach"],
                ["Interior", "arm folded (theta2 = 180)", "radial motion", "keep elbow off the line"],
                ["Wrist", "two wrist axes aligned", "one rotation DOF", "reorient wrist early in the path"],
                ["Base", "base and wrist axes coincide", "one yaw DOF", "offset tool or path"],
              ],
            },
            examQuestions: [
              {
                q: "Define singular configuration. Classify the singularities of manipulators with sketches, explain the velocity and force amplification consequences, and describe how singularities are avoided or handled.",
                marks: 14,
                outline: [
                  "Definition: det(J) = 0, rank loss, DOF lost instantaneously",
                  "Planar 2R: det(J) = L1 L2 sin(theta2) -> theta2 = 0 or 180 degrees",
                  "Boundary (stretched), interior (folded), wrist (aligned axes), base",
                  "Velocity amplification: theta2 = 1 degree -> 1 mm needs ~5.7 rad/s-scale rates",
                  "Force amplification: small joint torques -> huge tool forces",
                  "Avoidance: plan inside dexterous workspace with det(J) margin",
                  "Handling: damped least squares / pseudo-inverse with damping",
                ],
              },
              {
                q: "For a planar 2R arm with unit links, compute det(J) at theta2 = 90, 30, 5 and 0 degrees and interpret the trend.",
                marks: 7,
                outline: [
                  "det(J) = L1 L2 sin(theta2): 1, 0.5, 0.087, 0",
                  "theta2 = 90: most dexterous pose of the arm",
                  "theta2 = 30: direction along the elbow motion compressed",
                  "theta2 = 5: near-singular - joint speeds explode for radial steps",
                  "theta2 = 0: singular - radial direction unreachable",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Statics",
            body: [
              "Statics asks the reverse question: what joint torques hold or exert a given tool force? The answer comes from the principle of virtual work: for a static arm, the work done by tool forces through any virtual displacement equals the work done by joint torques through the corresponding joint displacement - f^T dx = tau^T dq. Substituting the differential kinematics dx = J dq and demanding equality for arbitrary dq yields tau = J^T f. No new matrix is needed: the same Jacobian, transposed, maps Cartesian forces to joint torques.",
              "A worked numerical at the standing configuration (L1 = L2 = 1 m, theta1 = 30, theta2 = 45 degrees) with J = [[-1.466, -0.966],[1.125, 0.259]]: for a tool force f = (10, 0) N, tau = J^T f gives tau1 = -14.66 N m and tau2 = -9.66 N m. Interpretation: the shoulder must resist the full moment arm of both links, the elbow only the distal one - the classic leverage intuition, now with numbers. Actuator sizing reads directly from this: continuous torque ratings must cover the worst-case tau across the workspace, including gravity.",
              "The singular connection closes the loop with section 2.6. At the boundary singularity (theta2 = 0), the lost radial direction is also the direction the arm cannot resist: a force pushing straight along the stretched arm produces no opposing torque from the elbow - the geometry that blocks motion also blocks force support. Symmetrically, near singularity J^T amplifies: tiny tool forces demand large joint torques. Dexterity (large det(J)) is therefore good for motion and for force balance alike - the same determinant governs both directions.",
              "Exam framing: 'derive the force-torque relation using the principle of virtual work and compute joint torques for a given tool force' is the standard form. State the virtual-work principle in one line, derive tau = J^T f, substitute the numbers, interpret the two torques physically, and close with the singular-configuration observation - it converts a computation into an understanding answer.",
            ],
            keyTerms: [
              { term: "Statics", definition: "The map from tool forces to joint torques at zero velocity." },
              { term: "Virtual work", definition: "f^T dx = tau^T dq for all virtual displacements - the derivation engine." },
              { term: "tau = J^T f", definition: "The force-torque relation; same Jacobian, transposed." },
              { term: "Joint torque", definition: "The actuator torque each joint must supply or withstand." },
              { term: "Force amplification", definition: "Near singularity, small tool forces demand large joint torques." },
            ],
            callout: {
              type: "tip",
              title: "Same matrix, two directions",
              body: "J maps velocities joint -> Cartesian; J^T maps forces Cartesian -> joint. One virtual-work derivation covers both questions, and the singular determinant governs both amplifications. Writing this symmetry explicitly earns the synthesis mark that separates 7 from 5.",
            },
            bullets: [
              "Virtual work: f^T J dq = tau^T dq for arbitrary dq -> tau = J^T f.",
              "At (30, 45) degrees, f = (10, 0) N: tau = (-14.66, -9.66) N m.",
              "Shoulder carries both links' moment; elbow carries only the distal link.",
              "Actuator sizing: continuous torque must cover worst-case tau incl. gravity.",
              "At theta2 = 0 a force along the arm produces no balancing elbow torque.",
              "Large det(J) = dexterous in velocity AND in force - one determinant, both maps.",
            ],
            diagram: {
              kind: "compare",
              title: "The two roles of the Jacobian",
              caption: "One configuration-dependent matrix, used forwards for motion and transposed for force.",
              left: {
                heading: "Differential kinematics",
                items: [
                  "xdot = J(q) qdot",
                  "n joint rates -> 6 twist components",
                  "Used for velocity analysis and Cartesian control",
                  "det(J) = 0: velocity direction lost",
                ],
              },
              right: {
                heading: "Statics",
                items: [
                  "tau = J^T f",
                  "6 force components -> n joint torques",
                  "Used for actuator sizing and force control",
                  "Same det(J) = 0: force direction unsupported",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "statics.py - tau = J^T f with the worked numbers",
              code: `import numpy as np

J = np.array([[-1.466, -0.966],
              [ 1.125,  0.259]])
f = np.array([10.0, 0.0])          # 10 N push along +x
tau = J.T @ f
print(np.round(tau, 2))            # [-14.66  -9.66] N m
print(round(np.linalg.det(J), 3))  # 0.707 - comfortably dexterous`,
            },
            examQuestions: [
              {
                q: "Using the principle of virtual work, derive the relation tau = J^T f for a manipulator. For the planar 2R arm at theta1 = 30 degrees, theta2 = 45 degrees with L1 = L2 = 1 m, compute the joint torques required to exert a tool force of 10 N along +x.",
                marks: 14,
                outline: [
                  "Virtual work: f^T dx = tau^T dq for arbitrary dq",
                  "Substitute dx = J dq -> f^T J = tau^T -> tau = J^T f",
                  "J at the pose = [[-1.466, -0.966],[1.125, 0.259]]",
                  "tau = J^T (10, 0) = (-14.66, -9.66) N m",
                  "Interpretation: shoulder resists both links, elbow the distal one",
                  "Actuator sizing from worst-case tau incl. gravity",
                  "Singular link: force along a lost direction is unsupported",
                ],
              },
              {
                q: "Explain why dexterity (large det(J)) matters for both velocity control and force application.",
                marks: 7,
                outline: [
                  "det(J) large: all Cartesian directions reachable at moderate joint rates",
                  "Velocity side: no amplification, smooth Cartesian tracking",
                  "Force side: J^T balanced - no direction demands huge torque",
                  "Near det(J) = 0: both amplifications appear together",
                  "Conclusion: one determinant governs motion and force duality",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Euler-Lagrange dynamics",
            body: [
              "Dynamics adds the physics kinematics ignores: inertia, gravity and the coupling between joints. The Euler-Lagrange route: choose generalized coordinates q (the joint variables), write the kinetic energy T and potential energy V, form the Lagrangian L = T - V, and apply d/dt(dL/dqdot) - dL/dq = tau. The output for any serial arm has the same structure: M(q) qddot + C(q, qdot) qdot + g(q) = tau - a configuration-dependent mass matrix, Coriolis/centrifugal terms quadratic in velocity, and a gravity vector.",
              "A worked one-link example keeps the algebra exam-sized. A pendulum rod of mass m, length l at angle theta: T = (1/2) m l^2 thetadot^2, V = m g l (1 - cos theta). Then dL/dtheta = -m g l sin theta and d/dt(dL/dqdot) = m l^2 thetaddot, giving m l^2 thetaddot + m g l sin theta = tau - inertia and gravity in one line. For the 2R arm the same procedure yields a 2x2 M(q) with cos(theta2) coupling terms (section 4.5's computed torque reuses exactly these), Coriolis terms proportional to theta1dot theta2dot, and gravity entries with sin of the absolute angles.",
              "The structural facts worth stating: M(q) is symmetric positive definite (kinetic energy is positive), C collects Coriolis (velocity products of different joints) and centrifugal (velocity squared) terms, g(q) vanishes only in the horizontal plane, and friction is appended as a separate term in practice. These properties matter beyond the derivation: they drive actuator sizing (worst-case torque), simulation (integrate the ODE), and the nonlinear control of section 4.5 - the syllabus's own bridge from Unit II to Unit IV.",
              "Exam framing: 'derive the equations of motion by the Euler-Lagrange formulation' with a single link (or two-link planar arm outline) is the standard question. Define the method in four steps, do the one-link derivation completely, then state the 2R structural equation M qddot + C qdot + g = tau and name each term - the structure mark is available even when the 2R algebra runs long.",
            ],
            keyTerms: [
              { term: "Lagrangian", definition: "L = T - V, kinetic minus potential energy in generalized coordinates." },
              { term: "Generalized coordinates", definition: "The independent joint variables q describing the configuration." },
              { term: "Mass matrix M(q)", definition: "Symmetric positive definite; configuration-dependent inertia." },
              { term: "Coriolis / centrifugal C", definition: "Velocity-product and velocity-squared torque terms." },
              { term: "Gravity vector g(q)", definition: "Torques gravity exerts at each joint; zero in the horizontal plane." },
            ],
            callout: {
              type: "exam",
              title: "State the structure first",
              body: "Write M(q) qddot + C(q, qdot) qdot + g(q) = tau before any algebra, then do the one-link pendulum derivation in full. The structural sentence earns the framework mark even if the 2R expansion runs out of time - and the pendulum numbers (m l^2 thetaddot + m g l sin theta = tau) are short enough to finish.",
            },
            bullets: [
              "Method: choose q -> write T, V -> L = T - V -> apply d/dt(dL/dqdot) - dL/dq = tau.",
              "One link: T = (1/2) m l^2 thd^2, V = m g l (1 - cos th).",
              "Result: m l^2 thetaddot + m g l sin theta = tau.",
              "Serial arms: M(q) qddot + C(q, qdot) qdot + g(q) = tau.",
              "M symmetric positive definite; C quadratic in velocities; g vanishes in horizontal plane.",
              "Uses: actuator sizing, simulation, and computed-torque control (Unit IV).",
            ],
            diagram: {
              kind: "pipeline",
              title: "The Euler-Lagrange route to the equations of motion",
              caption: "Energy first, derivative second - the same five stages for one link or six.",
              stages: [
                { label: "Choose q", note: "the joint variables" },
                { label: "Write T and V", note: "kinetic and potential energy" },
                { label: "Form L = T - V", note: "the Lagrangian" },
                { label: "Apply Euler-Lagrange", note: "d/dt(dL/dqdot) - dL/dq = tau" },
                { label: "Assemble structure", note: "M qddot + C qdot + g = tau" },
              ],
            },
            table: {
              caption: "Terms of the equation of motion.",
              headers: ["Term", "Symbol", "Depends on", "Physical meaning"],
              rows: [
                ["Inertia", "M(q) qddot", "configuration + acceleration", "torque to accelerate the links"],
                ["Coriolis / centrifugal", "C(q, qdot) qdot", "configuration + velocities", "velocity-product coupling"],
                ["Gravity", "g(q)", "configuration", "torque to hold against gravity"],
                ["Actuation", "tau", "motor commands", "joint torques supplied"],
                ["Friction (added)", "F qdot", "velocity", "viscous + Coulomb losses"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Euler-Lagrange formulation of robot dynamics. Derive the equation of motion for a single link (mass m, length l) and state the structural form of the equations for a two-link manipulator with the meaning of each term.",
                marks: 14,
                outline: [
                  "Method: q -> T, V -> L = T - V -> d/dt(dL/dqdot) - dL/dq = tau",
                  "Single link: T = (1/2) m l^2 thd^2; V = m g l (1 - cos th)",
                  "dL/dq = -m g l sin th; d/dt(dL/dqdot) = m l^2 thetaddot",
                  "Result: m l^2 thetaddot + m g l sin theta = tau",
                  "Two-link structure: M(q) qddot + C qdot + g = tau",
                  "M symmetric positive definite; C quadratic in velocity; g gravity",
                  "Terms drive sizing, simulation and computed-torque control",
                ],
              },
              {
                q: "Explain the physical significance of the mass matrix, Coriolis/centrifugal terms and gravity vector in the robot equation of motion.",
                marks: 7,
                outline: [
                  "M(q): torque per joint acceleration; configuration-dependent inertia",
                  "Off-diagonal M: dynamic coupling - one joint accelerates another",
                  "C: Coriolis (velocity products) + centrifugal (velocity squared)",
                  "g(q): holding torque against gravity; zero in horizontal plane",
                  "Practical effect: fixed-gain control tuned at one pose degrades elsewhere",
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
      title: "Sensors and Vision System",
      summary:
        "Unit III equips the robot with senses: the classification and selection of sensors, contact and proximity devices, position and velocity measurement, force and tactile sensing, the pinhole camera and geometry of image formation, camera calibration, the Euclidean/similarity/affine/projective transformation hierarchy, and the vision applications that close the perception-to-action loop.",
      chapter: {
        number: "03",
        title: "Giving the Robot Senses",
        intro:
          "Unit III covers sensor classification and selection, contact and proximity sensors, position and velocity sensors including encoders, force and tactile sensors, cameras and image formation, camera calibration, the transformation hierarchy from Euclidean to projective, and vision applications in robotics.",
        inOneBreath:
          "Sensors split into internal (encoders, tachometers, strain gauges) that close the joint loops and external (proximity, force, vision) that serve the task. A camera is a pinhole: u = f X / Z projects the world onto pixels. Calibration recovers intrinsics, distortion and hand-eye pose from a checkerboard. Euclidean, similarity, affine and projective transformations form a DOF ladder - 3, 4, 6, 8 in 2D - trading degrees of freedom for preserved structure.",
        sections: [
          {
            number: "3.1",
            title: "Robot sensors: classification and selection",
            body: [
              "A sensor transduces a physical quantity into a signal a controller can read. The first split is internal (proprioceptive) versus external (exteroceptive): internal sensors measure the robot's own state - joint position, velocity, torque, temperature - and exist to close the control loops of Unit IV; external sensors measure the environment - distance, force at contact, images - and serve task planning and safety. The second split is contact versus non-contact. Both splits are orthogonal: a strain gauge is internal and contact; a camera external and non-contact.",
              "Selection is a list of measurable properties, and the exam wants them named: accuracy (closeness to truth), resolution (smallest detectable change), repeatability (spread on returning to the same input), range, linearity, sensitivity, bandwidth (how fast the sensor tracks change), and robustness to the environment - plus cost and interface fit. Static characteristics describe slow inputs; dynamic characteristics (bandwidth, response time) matter because a sensor too slow for a 1 kHz loop is invisible to the control system, however accurate.",
              "A worked selection: the pick-and-place cell of section 1.2. Joint position - incremental encoders (high resolution, closed loop); joint velocity - tachometer or encoder differentiation; part presence - inductive proximity at the gripper; assembly force - a 6-axis wrist force/torque sensor for insertion monitoring; part localization - a camera over the bin; safety - light curtain at the cell entry. One sensor per need, each justified by a named property - that one-line-per-sensor justification is precisely the 7-mark answer.",
              "Exam framing: 'classify robot sensors and explain the selection criteria with examples' is the opening question of this unit. Answer with the two splits, the criteria list (accuracy, resolution, repeatability, range, bandwidth, robustness, cost), and a small table mapping six sensor families to what they measure - then close with one concrete selection exercise to show the criteria in use.",
            ],
            keyTerms: [
              { term: "Proprioceptive (internal)", definition: "Sensing the robot's own joint state - encoders, tachometers, joint torque." },
              { term: "Exteroceptive (external)", definition: "Sensing the environment - proximity, vision, force at contact." },
              { term: "Resolution", definition: "The smallest input change the sensor can detect." },
              { term: "Repeatability", definition: "The spread of outputs on repeated identical inputs." },
              { term: "Bandwidth", definition: "The input frequency range the sensor tracks faithfully." },
            ],
            callout: {
              type: "tip",
              title: "Internal serves control, external serves tasks",
              body: "The sentence that structures any sensor answer: internal sensors close the joint servo loops; external sensors inform task planning and safety. Classify each sensor by both splits (internal/external, contact/non-contact) and attach the property that justifies its selection - three labels per sensor is the full mark.",
            },
            bullets: [
              "Two splits: internal vs external; contact vs non-contact - orthogonal labels.",
              "Internal: encoders (position), tachometers (velocity), strain gauges (torque).",
              "External: proximity, cameras, wrist force/torque, light curtains.",
              "Criteria: accuracy, resolution, repeatability, range, linearity, bandwidth, robustness, cost.",
              "A sensor slower than the control loop is useless - bandwidth before accuracy.",
              "Selection exercise: one sensor per task need, each with a named justification.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The sensing pyramid",
              caption: "Raw signals rise through features to decisions - each tier feeds the one above.",
              tiers: [
                { label: "Task-level perception", note: "vision, force/torque - world model for planning" },
                { label: "Object-level sensing", note: "proximity, part presence, collision zones" },
                { label: "Joint-level state", note: "encoders, tachometers - the servo loops" },
                { label: "Raw physical signals", note: "photons, strain, magnetic flux, capacitance" },
              ],
            },
            table: {
              caption: "Sensor families · quantity measured · example device.",
              headers: ["Family", "Measures", "Example device"],
              rows: [
                ["Position", "joint angle / linear position", "incremental encoder, LVDT"],
                ["Velocity", "joint speed", "tachometer, encoder differentiation"],
                ["Acceleration", "link acceleration", "accelerometer (MEMS)"],
                ["Force / torque", "contact force, wrist wrench", "strain-gauge load cell, 6-axis wrist sensor"],
                ["Proximity / presence", "nearby object without contact", "inductive, capacitive, IR, ultrasonic"],
                ["Tactile", "contact location and pressure map", "piezoresistive fingertip array"],
                ["Vision", "2D/3D images of the scene", "CCD/CMOS camera, depth camera"],
              ],
            },
            examQuestions: [
              {
                q: "Classify robot sensors (internal/external, contact/non-contact) with examples of each class, and explain the criteria used to select a sensor for a given application.",
                marks: 14,
                outline: [
                  "Internal (proprioceptive): encoders, tachometers, joint torque sensors",
                  "External (exteroceptive): proximity, camera, wrist F/T, safety scanners",
                  "Contact vs non-contact: strain gauge vs ultrasonic",
                  "Criteria: accuracy, resolution, repeatability, range, linearity",
                  "Dynamic criteria: bandwidth, response time - must exceed loop rate",
                  "Practical criteria: robustness, interface, cost",
                  "Close with the pick-and-place selection: one sensor per need, justified",
                ],
              },
              {
                q: "Select and justify a sensor set for a robotic pick-and-place workstation.",
                marks: 7,
                outline: [
                  "Joint position: incremental encoders - resolution for servo loops",
                  "Velocity: tachometer / encoder differentiation",
                  "Part presence: inductive proximity - non-contact, fast",
                  "Insertion force: 6-axis wrist F/T sensor",
                  "Localization: camera over the bin",
                  "Safety: light curtain at cell entry",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Contact and proximity sensors",
            body: [
              "Contact sensors answer 'is it touching?': limit switches and microswitches close a mechanical contact when actuated, bumper strips detect any collision along a surface, and reed switches respond to magnets. They are binary, rugged, cheap and wiring-simple - the workhorses of fixtures, gripper confirmation and emergency bumpers. Their weaknesses are equally simple: they need physical contact (wear, deflection, possible damage to delicate parts) and they give no distance information before the touch.",
              "Proximity (non-contact) sensors answer 'is it near, and how near?'. Inductive sensors detect metals through eddy currents - reliable few-millimetre to centimetre ranges, blind to plastics. Capacitive sensors respond to any material's dielectric change - plastics, liquids, granular media. Infrared reflective sensors beam light and measure the returned intensity - cheap, fast, sensitive to colour and reflectance. Ultrasonic sensors time an echo's flight - centimetres to metres, material-independent, but bound by the speed of sound and beam spread.",
              "A worked ultrasonic numerical: the sensor emits a burst, the echo returns after t = 5.8 ms. Distance = v_sound x t / 2 = 343 x 0.0058 / 2 = 0.995 m - about a metre. Two traps are the marks: divide by two (the sound travels out and back), and use the right medium constant (343 m/s in air, about 1480 m/s in water - an underwater sensor using the air constant overestimates range fourfold). For the inductive case: a steel fixture sensed at 8 mm is comfortably inside a typical 4-12 mm rated range; aluminium needs the sensor's correction factor (about 0.35x the steel range).",
              "Exam framing: 'explain contact and proximity sensors with principles and applications' plus a small ultrasonic numerical is the standard pair. Tabulate the four proximity principles (inductive, capacitive, IR, ultrasonic) with target material and range, work the echo arithmetic with the factor-of-two explanation, and end with one application sentence per sensor - gripper confirmation, part presence, bin edge, obstacle range.",
            ],
            keyTerms: [
              { term: "Limit switch", definition: "Mechanical contact sensor - binary, rugged, requires touch." },
              { term: "Inductive proximity", definition: "Senses metals via eddy currents; mm-to-cm range." },
              { term: "Capacitive proximity", definition: "Senses any material via dielectric change." },
              { term: "Ultrasonic ranging", definition: "Time-of-flight echo; d = v t / 2; material-independent." },
              { term: "Time of flight", definition: "The emission-to-echo interval from which distance is computed." },
            ],
            callout: {
              type: "tip",
              title: "Divide by two, then by the medium",
              body: "Every ultrasonic numerical has two marks: the round-trip factor of 2 and the speed-of-sound constant for the medium (343 m/s in air, ~1480 in water). For inductive sensors, quote the steel-rated range and the correction factor for other metals (aluminium ~0.35x) - these small constants are exactly what the examiner checks.",
            },
            bullets: [
              "Contact: limit switch, microswitch, bumper - binary, rugged, touch-required.",
              "Inductive: metals only, eddy-current principle, 4-12 mm typical.",
              "Capacitive: any material via dielectric; level and presence duty.",
              "IR reflective: fast and cheap; reflectance-dependent (dark parts vanish).",
              "Ultrasonic: d = v t / 2; 5.8 ms echo in air -> ~1 m.",
              "Applications: gripper confirmation, part presence, bin edge, obstacle range.",
            ],
            diagram: {
              kind: "compare",
              title: "Contact vs non-contact sensing",
              caption: "Touch is simple and rugged; proximity buys standoff distance at the price of physics-specific limits.",
              left: {
                heading: "Contact sensors",
                items: [
                  "limit switch, microswitch, bumper strip",
                  "binary output - touching or not",
                  "rugged, cheap, wiring-simple",
                  "wear and part deflection; no standoff",
                ],
              },
              right: {
                heading: "Proximity sensors",
                items: [
                  "inductive, capacitive, IR, ultrasonic",
                  "distance or presence without touch",
                  "no wear; fast switching",
                  "each principle has a material/range limit",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "ultrasonic.py - echo time to distance",
              code: `v_air = 343.0            # m/s, speed of sound in air
t_echo = 5.8e-3          # s, measured round-trip time
d = v_air * t_echo / 2   # divide by 2: out and back
print(round(d, 3))       # 0.995 m

# inductive check: steel rated 12 mm, aluminium factor 0.35
print(round(12 * 0.35, 1))   # 4.2 mm effective range on aluminium`,
            },
            examQuestions: [
              {
                q: "Explain the construction and principle of inductive, capacitive, infrared and ultrasonic proximity sensors. State the target material and typical range of each, with one robotic application.",
                marks: 14,
                outline: [
                  "Inductive: eddy currents in metals; 4-12 mm; part presence on fixtures",
                  "Capacitive: dielectric change, any material; levels, plastics, liquids",
                  "IR reflective: light intensity return; fast, colour-sensitive",
                  "Ultrasonic: echo time-of-flight; cm-to-m; material-independent",
                  "Each: target material + range + one application line",
                  "Contact sensors (limit switch, bumper) as the binary contrast",
                  "Trade-off sentence: contact is rugged but needs touch",
                ],
              },
              {
                q: "An ultrasonic sensor receives an echo 5.8 ms after emitting a burst in air. Compute the object distance and explain both corrections applied in the calculation.",
                marks: 7,
                outline: [
                  "d = v t / 2 = 343 x 0.0058 / 2",
                  "Factor of 2: sound travels out and back",
                  "v = 343 m/s: the air constant (water ~1480)",
                  "Result: 0.995 m ~ 1 m",
                  "Beam-spread caveat for small or angled targets",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Position and velocity sensors",
            body: [
              "Joint position is measured by five classical devices. Potentiometers: resistive wipers giving an analog voltage - cheap, absolute, but wearing and noisy. Incremental encoders: a slotted disk between LED and photodetector emits pulse trains on two channels (A, B) in quadrature - direction from the phase lead, position from counting, home reference from the index pulse. Absolute encoders: each position has a unique code (Gray code, one bit changes per step), so no homing after power loss. Resolvers: rugged wound coils outputting sin/cos of the angle - the aerospace-grade choice. LVDTs: linear inductive transformers for precise small strokes.",
              "Velocity comes from two routes: a tachometer (a small DC generator whose voltage is proportional to speed - analog, smooth) or differentiation of encoder counts over the sampling interval (digital, ubiquitous). Differentiation trades resolution against latency: shorter windows track faster but amplify quantization noise - the fixed budget every digital servo lives with. Professional drives blend both: an observer filters the differentiated counts with the motor model.",
              "A worked resolution numerical is the guaranteed mark. A 1024 PPR (pulses per revolution) incremental encoder with 4x quadrature decoding yields 1024 x 4 = 4096 counts per revolution - resolution 360/4096 = 0.088 degrees. At 3000 rpm = 50 rev/s the counter sees 4096 x 50 = 204,800 counts per second, so the capture timer must accept at least ~205 kHz - a concrete interface requirement. The two exam traps: forgetting the x4 of quadrature (A and B give four edges per line) and confusing PPR (lines on the disk) with counts (edges after decoding).",
              "Exam framing: 'explain position and velocity sensors used in robots; compute encoder resolution' is the standard pair. Tabulate the five position sensors with principle and strength, explain quadrature and the x4, work the resolution and count-rate numbers, and close with the Gray-code property (adjacent codes differ in one bit, so a misread is off by one step, never by a garbage value).",
            ],
            keyTerms: [
              { term: "Incremental encoder", definition: "Quadrature pulse train; position by counting, needs homing." },
              { term: "Quadrature (A/B)", definition: "Two channels 90 degrees apart; direction from phase, resolution x4 from edges." },
              { term: "Absolute encoder", definition: "Unique code per angle (Gray code); no homing after power loss." },
              { term: "Gray code", definition: "Adjacent codes differ in one bit - misreads are single-step." },
              { term: "Tachometer", definition: "Analog speed sensor: voltage proportional to angular velocity." },
            ],
            callout: {
              type: "exam",
              title: "Quadrature multiplies resolution by four",
              body: "A and B in quadrature give four edges per disk line: 1024 PPR -> 4096 counts/rev -> 0.088 degrees. Then compute the count rate at the stated rpm - the interface requirement is the part most answers forget. For absolute encoders, the Gray-code single-bit-change property is the sentence that earns the follow-up mark.",
            },
            bullets: [
              "Potentiometer: analog, absolute, cheap, wears.",
              "Incremental encoder: A/B quadrature + index; count-based, needs homing.",
              "Absolute encoder: Gray code per angle; powers up knowing position.",
              "Resolver: sin/cos windings; rugged, high-temperature duty.",
              "Resolution: 1024 PPR x 4 = 4096 counts/rev -> 0.088 degrees.",
              "Velocity: tachometer (analog) or counts/Dt (digital); noise vs latency trade.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From disk to degrees",
              caption: "Light through slots becomes edges, edges become counts, counts become angle - the servo's currency.",
              stages: [
                { label: "Code disk", note: "1024 slits" },
                { label: "LED + photodetector", note: "A and B channels" },
                { label: "Quadrature edges", note: "4 edges per line" },
                { label: "Counter", note: "4096 counts/rev" },
                { label: "Angle", note: "counts x 360/4096" },
              ],
            },
            table: {
              caption: "Position sensor comparison.",
              headers: ["Sensor", "Output", "Strength", "Watch-out"],
              rows: [
                ["Potentiometer", "analog voltage", "cheap, absolute", "wear, noise"],
                ["Incremental encoder", "quadrature pulses", "high resolution, digital", "needs homing"],
                ["Absolute encoder", "Gray code word", "no homing", "costlier, more wires"],
                ["Resolver", "sin/cos analog", "rugged, hot environments", "needs excitation + RDC"],
                ["LVDT", "analog amplitude", "precise linear strokes", "limited range"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the construction and working of incremental and absolute optical encoders. For a 1024 PPR encoder with quadrature decoding, compute the angular resolution and the count rate at 3000 rpm.",
                marks: 14,
                outline: [
                  "Incremental: disk, LED/photodetector, A/B quadrature, index",
                  "Direction from phase lead; position from counting; homing needed",
                  "Absolute: unique Gray code per angle; powers up informed",
                  "Counts = 1024 x 4 = 4096/rev",
                  "Resolution = 360/4096 = 0.088 degrees",
                  "3000 rpm = 50 rev/s -> 204,800 counts/s capture rate",
                  "Gray code: adjacent codes differ in one bit - safe misreads",
                ],
              },
              {
                q: "Why does an absolute encoder not require a homing cycle, and what property of Gray code makes misreads safe?",
                marks: 7,
                outline: [
                  "Every angle has a unique stored code",
                  "Position known immediately after power-up",
                  "Gray code: adjacent positions differ in one bit",
                  "A sampling glitch misreads by at most one step",
                  "Binary code would risk large multi-bit errors - the reason Gray is used",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Force and tactile sensors",
            body: [
              "Force sensing starts with the strain gauge: a metallic foil whose resistance rises with stretch. Mounted on a flexible structure and wired into a Wheatstone bridge, its resistance change becomes a voltage; four-gauge (full bridge) arrangements cancel temperature and amplify sensitivity. The wrist force/torque sensor - a compact Maltese-cross or hub instrumented with strain gauges - resolves all six components of the tool wrench and is the standard sensor for insertion, polishing and hand-guiding. Piezoelectric sensors complement them: they generate charge under load, excel at dynamic forces, and drift at DC.",
              "Tactile sensing puts the measurement where contact happens: arrays of piezoresistive or capacitive cells on fingertips report a pressure image - contact location, area, force distribution - and, tracked over time, incipient slip. Applications: grasping fragile objects with force-limited fingers, regrasping when slip is detected, and surface following. Tactile arrays are the robot's skin; the wrist F/T sensor is its inner ear - the two answer different questions and the exam wants both named.",
              "A worked strain-gauge numerical: gauge factor GF = 2, strain 500 microstrain, gauge resistance 120 ohms, excitation 5 V. Delta R/R = GF x strain = 2 x 0.0005 = 0.001, so delta R = 0.12 ohms - far too small to read directly, which is why the bridge exists: quarter-bridge output = Vexc x GF x strain / 4 = 5 x 2 x 0.0005 / 4 = 1.25 mV, feeding an instrumentation amplifier with gain ~500 before the ADC. The three exam traps: forgetting microstrain's 10^-6, skipping the bridge division by 4, and ignoring the temperature-compensation role of the dummy gauge.",
              "Exam framing: 'explain force and tactile sensors used in robots; numerical on strain gauge' is the standard pair. Cover gauge principle + bridge, the wrist F/T six-axis idea, tactile arrays with slip detection, then the full numerical chain from strain to amplified millivolts. The calibration sentence - a gauge measures strain; force follows only through the structure's stiffness - is the insight mark.",
            ],
            keyTerms: [
              { term: "Strain gauge", definition: "Foil resistor whose resistance changes with strain; GF = (dR/R)/strain." },
              { term: "Wheatstone bridge", definition: "Four-resistor network converting small resistance changes to measurable voltage." },
              { term: "Wrist F/T sensor", definition: "Six-axis strain-gauge sensor resolving the full tool wrench." },
              { term: "Piezoelectric sensor", definition: "Charge-generating sensor for dynamic forces; drifts at DC." },
              { term: "Tactile array", definition: "Fingertip pressure-image sensor; detects contact location and slip." },
            ],
            callout: {
              type: "warning",
              title: "A strain gauge measures strain, not force",
              body: "Force emerges only after calibration through the structure's stiffness - skipping that sentence makes every numerical physically meaningless. And temperature changes resistance exactly as strain does: the dummy gauge in the adjacent bridge arm exists to cancel it; forgetting it is the classic conceptual slip.",
            },
            bullets: [
              "Gauge factor: GF = (dR/R)/strain; metal foil GF ~ 2.",
              "Bridge converts delta R to voltage; full bridge cancels temperature and quadruples output.",
              "Wrist F/T sensor: 6 components of wrench at the tool flange.",
              "Worked: GF 2, 500 microstrain, 120 ohm, 5 V -> 1.25 mV bridge output.",
              "Piezoelectric: dynamic forces, self-generating; DC drift.",
              "Tactile arrays: pressure images, contact location, slip detection for grasping.",
            ],
            diagram: {
              kind: "flow",
              title: "From strain to newtons",
              caption: "Five stages turn a microscopic resistance change into a calibrated force reading.",
              steps: [
                { label: "Strain on gauge", note: "structure flexes under load" },
                { label: "dR/R = GF x strain", note: "0.001 at 500 microstrain" },
                { label: "Wheatstone bridge", note: "1.25 mV differential" },
                { label: "Instrumentation amp", note: "gain ~500 -> volts" },
                { label: "Calibrated force", note: "ADC + stiffness model" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "strain_gauge.py - the worked numbers",
              code: `GF, strain = 2.0, 500e-6      # gauge factor, 500 microstrain
R, Vexc = 120.0, 5.0          # ohms, bridge excitation

dR_over_R = GF * strain       # 0.001
dR = R * dR_over_R            # 0.12 ohm - unreadable directly
Vout = Vexc * GF * strain / 4 # quarter-bridge output
print(dR, round(Vout * 1000, 3), "mV")   # 0.12  1.25 mV`,
            },
            examQuestions: [
              {
                q: "Explain the principle of the strain gauge and its use in wrist force/torque sensors. Describe tactile sensing and its role in grasping. Compute the bridge output for GF = 2, strain = 500 microstrain, R = 120 ohms, excitation = 5 V.",
                marks: 14,
                outline: [
                  "Gauge: dR/R = GF x strain; GF ~ 2 for metal foil",
                  "Wheatstone bridge converts delta R to differential voltage",
                  "Wrist F/T: six-axis strain-gauge hub resolving the full wrench",
                  "Tactile arrays: pressure image, contact location, slip detection",
                  "dR/R = 2 x 500e-6 = 0.001; dR = 0.12 ohm",
                  "Vout = 5 x 2 x 500e-6 / 4 = 1.25 mV -> instrumentation amp",
                  "Calibration sentence: strain -> force via structure stiffness",
                ],
              },
              {
                q: "Why is a Wheatstone bridge necessary for strain-gauge measurement, and what role does the dummy gauge play?",
                marks: 7,
                outline: [
                  "dR is milliohms - direct resistance readout is hopeless",
                  "Bridge converts differential resistance change to voltage",
                  "Quarter/half/full bridge: sensitivity grows with active gauge count",
                  "Dummy gauge: same material, unstrained, adjacent arm",
                  "Cancels temperature-induced resistance change",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Cameras and geometry of image formation",
            body: [
              "The pinhole camera is the model underneath every vision answer: light from a 3D point passes through an aperture and lands on the image plane, inverting the image. Projection is u = f x X / Z and v = f x Y / Z, where (X, Y, Z) is the point in camera coordinates (Z along the optical axis) and f the focal length. Real cameras replace the pinhole with a lens - collecting more light, defining the field of view and depth of field - at the cost of distortion, which calibration will model and remove.",
              "The intrinsic matrix K = [[fx, s, cx],[0, fy, cy],[0, 0, 1]] gathers the camera's own numbers: focal lengths fx, fy expressed in pixels, the principal point (cx, cy) where the optical axis pierces the sensor, and the skew s (near-zero in modern sensors). Extrinsic parameters - a rotation R and translation t - place the camera frame in the world; the full projection is p = K [R | t] X. Intrinsic stays with the camera; extrinsic changes every time the camera is mounted or moved - the split the exam wants stated.",
              "A worked projection: fx = fy = 800 px, principal point at the image centre (320, 240) of a 640 x 480 sensor, point at (X, Y, Z) = (0.5, 0.25, 4.0) m. Then u = 800 x 0.5 / 4 + 320 = 420 px and v = 800 x 0.25 / 4 + 240 = 290 px. The depth lesson: halve Z to 2 m and u jumps to 520 px - image displacement grows as 1/Z, the inverse-square geometry that makes far objects move slowly in the image and near objects rush. Radial distortion bends straight lines near the edges (barrel or pincushion); tangential distortion arises from lens-sensor misalignment.",
              "Exam framing: 'explain the geometry of image formation with the pinhole model; project a given 3D point' is the standard pair. Draw the pinhole geometry with the image plane marked, write the projection equations and the K matrix, project one numeric point, and state the intrinsic/extrinsic split with the distortion types named.",
            ],
            keyTerms: [
              { term: "Pinhole model", definition: "Ideal camera: u = f X / Z, v = f Y / Z through an infinitesimal aperture." },
              { term: "Intrinsic matrix K", definition: "fx, fy (pixels), principal point (cx, cy), skew - the camera's own parameters." },
              { term: "Extrinsic parameters", definition: "Rotation R and translation t placing the camera in the world." },
              { term: "Principal point", definition: "Where the optical axis meets the image plane; near the sensor centre." },
              { term: "Radial distortion", definition: "Edge-of-field bending of straight lines; barrel or pincushion." },
            ],
            callout: {
              type: "tip",
              title: "fx and fy are in pixels",
              body: "Datasheets quote focal length in millimetres; calibration reports fx = f_mm / pixel_size in pixels. Mixing the two units is the most common numerical slip in image-formation answers - state the unit of fx the moment you write K.",
            },
            bullets: [
              "Pinhole: u = f X / Z + cx, v = f Y / Z + cy - perspective projection.",
              "K = [[fx, s, cx],[0, fy, cy],[0, 0, 1]] - intrinsic, in pixels.",
              "Extrinsic (R, t) mounts the camera in the world; changes with mounting.",
              "Worked: f = 800 px, point (0.5, 0.25, 4) m -> pixel (420, 290).",
              "Halving Z doubles the image displacement - 1/Z geometry.",
              "Distortion: radial (barrel/pincushion) + tangential (misalignment) - fixed in calibration.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From world point to pixel",
              caption: "Two frames and one divide: extrinsics carry the point into the camera, intrinsics carry it onto the sensor.",
              stages: [
                { label: "3D point (X, Y, Z)", note: "in world frame" },
                { label: "Camera frame", note: "extrinsics R, t" },
                { label: "Perspective divide", note: "f X / Z, f Y / Z" },
                { label: "Pixel (u, v)", note: "principal point + pixel-scaled f" },
              ],
            },
            table: {
              caption: "Camera parameters recovered by calibration.",
              headers: ["Parameter", "Symbol", "Meaning", "Units"],
              rows: [
                ["Focal lengths", "fx, fy", "f / pixel size, per axis", "pixels"],
                ["Principal point", "cx, cy", "optical axis intersection", "pixels"],
                ["Skew", "s", "axis non-orthogonality", "near 0"],
                ["Extrinsics", "R, t", "camera pose in world", "unitless, m"],
                ["Radial distortion", "k1, k2, k3", "barrel/pincushion bending", "unitless"],
                ["Tangential distortion", "p1, p2", "lens-sensor misalignment", "unitless"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the geometry of image formation using the pinhole camera model. Write the intrinsic matrix, distinguish intrinsic from extrinsic parameters, and project the point (0.5, 0.25, 4.0) m through a camera with fx = fy = 800 px and principal point (320, 240).",
                marks: 14,
                outline: [
                  "Pinhole: light through aperture; inverted image on the plane",
                  "u = f X / Z + cx; v = f Y / Z + cy",
                  "K = [[fx, s, cx],[0, fy, cy],[0, 0, 1]] - in pixels",
                  "Extrinsics R, t mount the camera; change with remounting",
                  "u = 800 x 0.5/4 + 320 = 420 px; v = 800 x 0.25/4 + 240 = 290 px",
                  "1/Z geometry: halving depth doubles displacement",
                  "Distortion types: radial + tangential, corrected in calibration",
                ],
              },
              {
                q: "Why does an object twice as far away produce half the image displacement? Derive from the pinhole equations.",
                marks: 7,
                outline: [
                  "u - cx = fx X / Z: displacement inversely proportional to Z",
                  "Z -> 2Z halves u - cx",
                  "Perspective divide is the mechanism, not lens focus",
                  "Consequence: far parts of the scene compress toward the vanishing point",
                  "Basis of depth-from-motion and structure-from-motion cues",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Camera calibration",
            body: [
              "Calibration answers two needs: to know the camera (intrinsics K, distortion coefficients) and to know where the camera is (extrinsics relative to the robot - the hand-eye problem). Without it, pixels are meaningless numbers: a blob at (420, 290) says nothing about where the part sits in gripper coordinates. Every pick-and-place, inspection and servoing application therefore begins by calibrating.",
              "The method (Zhang's planar calibration) is beautifully practical: print a checkerboard with known square size, capture it in 10-20 different poses (tilted, at corners, filling different image regions), detect the inner corners to sub-pixel accuracy, and solve for K, the distortion coefficients and a per-view extrinsic by minimizing reprojection error. The acceptance number is the RMS reprojection error - under 0.5 pixels is a healthy calibration; above 1 pixel something is wrong (poor corners, moving board, wrong square size).",
              "The hand-eye problem comes in two geometries with two names: eye-in-hand (camera on the wrist - solve the camera-to-flange transform, the classic AX = XB equation across robot motions) and eye-to-hand (camera fixed, watching the cell - solve camera-to-base). A worked acceptance: an 8 x 6 board of 25 mm squares, 15 poses, detected corners to 0.1 px, RMS reprojection error 0.3 px - the calibration is trusted; the gripper now aims within about a millimetre at typical workspace depths.",
              "Exam framing: 'why is camera calibration needed and how is it performed?' is the standard question, often with the eye-in-hand/eye-to-hand distinction demanded. Answer: the need (pixels to robot coordinates), the procedure (checkerboard, poses, corner detection, minimization), the recovered parameters (K, distortion, extrinsics), the acceptance number (RMS < 0.5 px), and the two mounting geometries.",
            ],
            keyTerms: [
              { term: "Camera calibration", definition: "Recovering K, distortion and camera pose from images of a known pattern." },
              { term: "Reprojection error", definition: "RMS pixel distance between observed and reprojected corners - the acceptance metric." },
              { term: "Zhang's method", definition: "Planar checkerboard calibration from multiple views." },
              { term: "Eye-in-hand", definition: "Camera on the wrist; calibrate camera-to-flange (AX = XB)." },
              { term: "Eye-to-hand", definition: "Fixed camera; calibrate camera-to-base." },
            ],
            callout: {
              type: "exam",
              title: "Reprojection error is the acceptance number",
              body: "A calibration without a stated RMS reprojection error is incomplete - under 0.5 px is healthy, above 1 px is broken. And name both mounting geometries (eye-in-hand, eye-to-hand) even when the question does not: it is the follow-up examiner expect and costs one line.",
            },
            bullets: [
              "Need: pixels -> robot coordinates; without it, vision is decorative.",
              "Pattern: checkerboard of known square size; 10-20 varied poses.",
              "Procedure: detect corners sub-pixel -> minimize reprojection error.",
              "Recovered: K, distortion coefficients, per-view extrinsics.",
              "Acceptance: RMS reprojection error < 0.5 px.",
              "Hand-eye: eye-in-hand (AX = XB, camera-to-flange) vs eye-to-hand (camera-to-base).",
            ],
            diagram: {
              kind: "flow",
              title: "The calibration procedure",
              caption: "Five stages from printed board to trusted transform - the acceptance gate is the last stage.",
              steps: [
                { label: "Print checkerboard", note: "known square size, flat" },
                { label: "Capture 10-20 poses", note: "tilt, corners, edges, centre" },
                { label: "Detect corners", note: "sub-pixel accuracy" },
                { label: "Solve K, distortion, extrinsics", note: "minimize reprojection error" },
                { label: "Verify RMS < 0.5 px", note: "else repeat with better poses" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "calibrate.py - Zhang's method with OpenCV",
              code: `import numpy as np, cv2

# 42 inner corners of an 8x6 board, 25 mm squares
objp = np.zeros((42, 3), np.float32)
objp[:, :2] = np.mgrid[0:7, 0:6].T.reshape(-1, 2) * 25.0

rms, K, dist, rvecs, tvecs = cv2.calibrateCamera(
    [objp] * n_views, [corners_v], (640, 480), None, None)
print(round(rms, 3), K.round(1))   # 0.3  [[fx 0 cx],[0 fy cy],[0 0 1]]`,
            },
            examQuestions: [
              {
                q: "Explain why camera calibration is required in robotic vision. Describe the checkerboard calibration procedure, list the parameters recovered, state the acceptance criterion, and distinguish eye-in-hand from eye-to-hand configurations.",
                marks: 14,
                outline: [
                  "Need: convert pixel measurements to robot/base coordinates",
                  "Checkerboard of known size; 10-20 varied poses",
                  "Corner detection to sub-pixel; minimize reprojection error",
                  "Recovered: K (fx, fy, cx, cy), distortion k/p coefficients, extrinsics",
                  "Acceptance: RMS reprojection error < 0.5 px",
                  "Eye-in-hand: camera on wrist, AX = XB camera-to-flange",
                  "Eye-to-hand: fixed camera, camera-to-base transform",
                ],
              },
              {
                q: "What is the hand-eye calibration problem? Write the AX = XB formulation in words and state its two mounting variants.",
                marks: 7,
                outline: [
                  "Unknown: camera-to-flange (or camera-to-base) transform",
                  "Robot moves through known poses; camera sees the fixed pattern",
                  "Each motion yields AX = XB: two unknown-relative observations",
                  "Solve across many motions (least squares)",
                  "Eye-in-hand vs eye-to-hand differ in which frame is unknown",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Euclidean, similarity, affine and projective transformations",
            body: [
              "The four transformation families form a DOF ladder in 2D: Euclidean (rotation + translation, 3 DOF), similarity (+ uniform scale, 4 DOF), affine (full 2x3 linear + translation, 6 DOF), projective (3x3 up to scale, 8 DOF). Each step buys freedom by selling structure: Euclidean preserves lengths and angles, similarity preserves angles and ratios, affine preserves parallelism and along-line ratios, and projective preserves only straightness - lines map to lines, but parallels meet at vanishing points.",
              "A worked visual makes the ladder memorable. A unit square under a Euclidean transform stays a unit square somewhere else; under a similarity it stays a square (scaled); under an affine transform it becomes a parallelogram - sides still parallel, angles gone; under a projective transform (a homography) it becomes an arbitrary quadrilateral. The photograph is the projective example: a floor of square tiles becomes a trapezoid family converging to the vanishing point - the camera's perspective divide in action.",
              "Which family for which robotics job is the application mark. Robot-to-camera (or flange-to-tool) mounting poses: Euclidean - rigid bodies. Zoom and scan scaling: similarity. Panorama stitching and camera projection: projective homography. Affine appears as the local approximation of projective near the image centre and in stretching/matching tasks. The 3D DOF count doubles: Euclidean 6, similarity 7, affine 12, projective 15 - worth stating once because examiners ask both 2D and 3D versions.",
              "Exam framing: 'compare Euclidean, similarity, affine and projective transformations with DOF and preserved properties' is the standard question; the follow-up is 'which transform maps a square to an arbitrary quadrilateral?' - projective, via the homography. Memorize the 3-4-6-8 ladder (2D) and one preserved property per rung; then attach the robotics examples.",
            ],
            keyTerms: [
              { term: "Euclidean transformation", definition: "Rotation + translation; preserves lengths and angles; 3 DOF in 2D." },
              { term: "Similarity transformation", definition: "Euclidean + uniform scale; preserves angles and ratios; 4 DOF." },
              { term: "Affine transformation", definition: "Full linear + translation; preserves parallelism; 6 DOF in 2D." },
              { term: "Projective transformation (homography)", definition: "3x3 up to scale; preserves straightness only; 8 DOF in 2D." },
              { term: "Vanishing point", definition: "Where parallel world lines converge in a projective image." },
            ],
            callout: {
              type: "exam",
              title: "The DOF ladder: 3-4-6-8",
              body: "In 2D: Euclidean 3, similarity 4, affine 6, projective 8; in 3D: 6-7-12-15. Attach one preserved property per rung (lengths+angles / angles+ratios / parallelism / straightness) and one example per rung (mounting pose / zoom / parallelogram warp / photograph). The ladder plus examples is the complete comparison answer.",
            },
            bullets: [
              "Euclidean: R + t; lengths and angles preserved; robot mounting poses.",
              "Similarity: + uniform scale; angles preserved; zoom and scans.",
              "Affine: full linear + t; parallelism preserved; square -> parallelogram.",
              "Projective: 3x3 homography; straightness only; square -> arbitrary quadrilateral.",
              "Photograph of tiled floor: affine fails, projective explains the vanishing point.",
              "DOF: 2D = 3, 4, 6, 8; 3D = 6, 7, 12, 15.",
            ],
            diagram: {
              kind: "compare",
              title: "What survives each family",
              caption: "The same square under four transforms - watch the parallel sides.",
              left: {
                heading: "Affine (6 DOF)",
                items: [
                  "square -> parallelogram",
                  "parallel sides stay parallel",
                  "angles and lengths free",
                  "along-line ratios preserved",
                ],
              },
              right: {
                heading: "Projective (8 DOF)",
                items: [
                  "square -> arbitrary quadrilateral",
                  "only straightness preserved",
                  "parallels meet at vanishing points",
                  "the camera's own model",
                ],
              },
            },
            table: {
              caption: "Transformation ladder in 2D.",
              headers: ["Family", "DOF", "Preserves", "Robotics example"],
              rows: [
                ["Euclidean", "3", "lengths, angles", "flange-to-camera mounting pose"],
                ["Similarity", "4", "angles, ratios", "zoom / image scaling"],
                ["Affine", "6", "parallelism, along-line ratios", "local patch warp, matching"],
                ["Projective", "8", "straightness only", "camera projection, panorama stitching"],
              ],
            },
            examQuestions: [
              {
                q: "Compare Euclidean, similarity, affine and projective transformations in terms of degrees of freedom, preserved properties, and one robotics application each. Which family maps a square to an arbitrary quadrilateral and why?",
                marks: 14,
                outline: [
                  "Euclidean 3 DOF (2D): lengths + angles; mounting poses",
                  "Similarity 4 DOF: angles + ratios; zoom",
                  "Affine 6 DOF: parallelism; patch warps",
                  "Projective 8 DOF: straightness only; camera projection",
                  "Square under each: square / square / parallelogram / quadrilateral",
                  "Quadrilateral = projective: 8 DOF permits moving each corner",
                  "3D counts: 6, 7, 12, 15",
                ],
              },
              {
                q: "Why is the camera projection matrix projective rather than affine? Explain with the perspective divide.",
                marks: 7,
                outline: [
                  "Projection divides by Z - the 1/Z depth term",
                  "Parallel world lines converge: vanishing points exist",
                  "Affine transforms preserve parallelism - cannot model this",
                  "Homography: 3x3 matrix defined up to scale (8 DOF)",
                  "Example: tiled floor photograph",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Vision applications in robotics",
            body: [
              "Localization and guidance is the flagship use: find the part, tell the arm where. Blob detection thresholds the image and computes the centroid u_bar = sum(u I)/sum(I) over bright pixels; after calibration the centroid maps to a base-frame grasp point. Pose estimation goes further - from a known object's features (corners, markers) it recovers full 6-DOF pose, which is what bin picking, machine tending and random-part feeding require. Depth cameras and structured light add the Z that a single 2D view lacks.",
              "Visual servoing closes the loop on the image itself: the error is defined in pixels (or image features) and the controller drives it to zero - position-based (error in estimated 3D pose) versus image-based (error in image features) servoing. The image-based virtue: calibration errors and camera miscalibration shrink instead of accumulating, because the loop never leaves the image. Inspection is the volume application: surface-defect detection, dimensional gauging against CAD, OCR and barcode reading, agricultural sorting - typically fixed cameras, good lighting, high throughput.",
              "A worked centroid numerical: a thresholded 640 x 480 image has bright part-pixels summing I = 50000 with weighted sums sum(u I) = 17,500,000 and sum(v I) = 10,500,000. Then u_bar = 350 px, v_bar = 210 px - the part's image centre. Through the calibrated homography, (350, 210) becomes base coordinates (0.42, -0.18) m; the arm's inverse kinematics takes over. Two lines of arithmetic, and perception hands off to the Units I-II machinery - that hand-off sentence is the integration mark.",
              "Exam framing: 'discuss the applications of machine vision in robotics' is the standard 14-mark discussion. Structure it as four applications - localization/pose estimation, visual servoing (both variants), inspection/gauging, bin picking with 3D - one paragraph each with the robot benefit named, then the centroid or servoing numerical as the concrete anchor.",
            ],
            keyTerms: [
              { term: "Blob centroid", definition: "Intensity-weighted centre of a thresholded region: sum(u I)/sum(I)." },
              { term: "Pose estimation", definition: "Recovering 6-DOF object pose from image features of a known object." },
              { term: "Visual servoing", definition: "Closing the control loop on image features (image-based) or estimated pose (position-based)." },
              { term: "Bin picking", definition: "Random-part grasping guided by 3D vision and grasp planning." },
              { term: "Machine vision inspection", definition: "Automated defect detection, gauging and verification on production lines." },
            ],
            callout: {
              type: "tip",
              title: "Servo on pixels, not millimetres",
              body: "Image-based visual servoing defines the error in pixels, so calibration error sits inside the loop where it cancels, rather than upstream where it accumulates. Name position-based vs image-based servoing and say which is robust to camera miscalibration - that pair of sentences is the application-question discriminator.",
            },
            bullets: [
              "Localization: threshold -> centroid (350, 210) px -> calibrated grasp point.",
              "Pose estimation: 6-DOF from features/markers; feeds machine tending and feeding.",
              "Visual servoing: position-based (3D error) vs image-based (pixel error).",
              "Image-based virtue: calibration errors cancel inside the loop.",
              "Inspection: defect detection, gauging, OCR - fixed cameras, high throughput.",
              "Bin picking: 3D depth + grasp planning for random parts.",
            ],
            diagram: {
              kind: "fork",
              title: "What must the robot see?",
              caption: "Four vision duties, each with its standard technique - the discussion-question skeleton.",
              start: "The robot's vision requirement",
              branches: [
                { label: "Where is the part?", outcome: "threshold + centroid / pose estimation -> grasp", good: true },
                { label: "Is my gripper converging?", outcome: "visual servoing on image error", good: true },
                { label: "Is the surface acceptable?", outcome: "inspection: defects, gauging, OCR", good: true },
                { label: "Random parts in a jumbled bin", outcome: "3D depth + grasp planning", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "centroid.py - blob centre in two lines",
              code: `import numpy as np

I = (img > 128).astype(float)          # thresholded part mask
ys, xs = np.nonzero(I)
u_bar, v_bar = xs.mean(), ys.mean()    # (350, 210) in the worked case
# calibrated homography maps (u_bar, v_bar) to base-frame grasp point`,
            },
            examQuestions: [
              {
                q: "Discuss the applications of machine vision in robotics - part localization, visual servoing, inspection and bin picking - with the technique and robot benefit in each case.",
                marks: 14,
                outline: [
                  "Localization: threshold + centroid -> calibrated grasp point",
                  "Pose estimation: 6-DOF from features; machine tending",
                  "Visual servoing: position-based (3D error) vs image-based (pixel error)",
                  "Image-based robustness: calibration error cancels in the loop",
                  "Inspection: defects, gauging, OCR - fixed cameras, throughput",
                  "Bin picking: 3D depth + grasp planning for random parts",
                  "Hand-off sentence: perception output feeds kinematics/control",
                ],
              },
              {
                q: "A thresholded image of a part has 50000 bright pixels with sum(u I) = 17,500,000 and sum(v I) = 10,500,000. Compute the image centroid and state its role in pick-and-place.",
                marks: 7,
                outline: [
                  "u_bar = 17,500,000 / 50,000 = 350 px",
                  "v_bar = 10,500,000 / 50,000 = 210 px",
                  "Centroid = part's image centre",
                  "Calibration (homography) maps it to base coordinates",
                  "Inverse kinematics then commands the grasp",
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
      title: "Robot Control",
      summary:
        "Unit IV gives the robot its reflexes: transfer functions and the closed-loop vocabulary, the control-law ladder from P through PD to PID with their numerical design consequences, the non-linear and advanced methods (computed torque, adaptive, impedance) that fixed gains cannot deliver, and the actuation side - electric, hydraulic and pneumatic actuators with their transmissions and selection parameters.",
      chapter: {
        number: "04",
        title: "Making the Joints Obey",
        intro:
          "Unit IV covers transfer functions and block diagrams, P, PD and PID control laws with their numerical effects, non-linear and advanced control including computed torque, electric, hydraulic and pneumatic actuators, transmission elements (gears, timing belts, bearings) and the parameters governing actuator selection.",
        inOneBreath:
          "A transfer function G(s) = output/input in the Laplace domain is control's vocabulary. P reacts to the present error but leaves an offset, D adds damping, I erases the offset - together PID. Non-linear methods (computed torque, adaptive, impedance) exist because a robot's inertia changes with pose. Electric, hydraulic and pneumatic actuators trade torque density against cleanliness and control bandwidth, and the transmission (gears, belts, bearings) shapes torque, speed and backlash.",
        sections: [
          {
            number: "4.1",
            title: "Basics of control and transfer functions",
            body: [
              "The transfer function is the plant's Laplace-domain identity: G(s) = Y(s)/U(s) with zero initial conditions - output over input as a ratio of polynomials in s. Its poles (denominator roots) decide everything: a real pole at s = -1/tau gives the exponential time constant tau, complex poles at -zeta wn +/- jwd give oscillation at the damped frequency. Block diagrams assemble systems: the closed-loop transfer function of a unity-feedback system is G/(1 + G), and the characteristic equation 1 + GH = 0 is where stability lives - poles in the left half-plane, or else.",
              "A worked first-order example fixes the numbers. G(s) = K/(tau s + 1) with tau = 1 s: the step response is y(t) = K(1 - e^(-t/tau)), reaching 63.2% at t = tau and 95% at 3 tau. A DC motor is exactly this shape: omega(s)/V(s) = K/(J s + b), so the mechanical time constant is tau_m = J/b - light rotors and heavy damping mean fast joints. The exam trap: tau = J/b needs SI units throughout (kg m^2, N m s/rad); unit slips here are the classic lost mark.",
              "The closed loop is where control begins. With unity feedback, G_cl = G/(1 + G): the final value theorem gives the steady-state error for a step as e_ss = 1/(1 + Kp) for a type-0 plant - the formula that section 4.2 tunes. Stability intuition in one line: adding gain moves the closed-loop poles; push them across the imaginary axis and the loop oscillates - which is why every later control law is judged by where it places those poles.",
              "Exam framing: 'define transfer function, derive the closed-loop relation, and explain first-order response' is the unit's opening question. Write the definition with zero-initial-conditions caveat, derive G_cl = G/(1 + G), give the 63.2%/95% marks of the first-order step, and name the poles-decide-response principle - four moves, full marks.",
            ],
            keyTerms: [
              { term: "Transfer function", definition: "G(s) = Y(s)/U(s) at zero initial conditions - the plant in the Laplace domain." },
              { term: "Pole", definition: "Root of the denominator; its location sets speed and oscillation." },
              { term: "Time constant tau", definition: "First-order response reaches 63.2% at tau, 95% at 3 tau." },
              { term: "Closed loop G/(1+G)", definition: "Unity-feedback transfer function; 1 + GH = 0 is the characteristic equation." },
              { term: "Final value theorem", definition: "y(inf) = lim s->0 s Y(s) - the source of steady-state-error formulas." },
            ],
            callout: {
              type: "tip",
              title: "Poles decide everything",
              body: "A pole at -1/tau is a speed; a complex pair is a ring; a right-half-plane pole is instability. Read the pole locations first in any control question, then do the algebra - the habit converts block-diagram problems from algebra puzzles into one-sentence answers about where the poles sit.",
            },
            bullets: [
              "G(s) = Y(s)/U(s), zero initial conditions - polynomials in s.",
              "First order: 63.2% at tau, 95% at 3 tau; y(t) = K(1 - e^(-t/tau)).",
              "DC motor: omega/V = K/(J s + b); tau_m = J/b.",
              "Unity feedback: G_cl = G/(1 + G); characteristic equation 1 + GH = 0.",
              "Type-0 step error: e_ss = 1/(1 + Kp) - the tuning formula of 4.2.",
              "Stability: closed-loop poles strictly in the left half-plane.",
            ],
            diagram: {
              kind: "flow",
              title: "The unity-feedback loop",
              caption: "The standard block diagram every control question in this unit assumes.",
              steps: [
                { label: "Reference r(t)", note: "the commanded trajectory" },
                { label: "Comparator", note: "e = r - y" },
                { label: "Controller C(s)", note: "P / PD / PID laws" },
                { label: "Plant G(s)", note: "motor + gearbox + joint" },
                { label: "Sensor H(s)", note: "encoder closes the loop" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "first_order.py - the two checkpoints of a step response",
              code: `import math

tau, K = 1.0, 2.0
def y(t): return K * (1 - math.exp(-t / tau))

print(round(y(tau) / K, 3))     # 0.632 at t = tau
print(round(y(3 * tau) / K, 3)) # 0.950 at t = 3 tau`,
            },
            examQuestions: [
              {
                q: "Define the transfer function of a linear system. Derive the closed-loop transfer function of a unity-feedback system and explain the first-order step response using the time constant (63.2% and 95% checkpoints).",
                marks: 14,
                outline: [
                  "G(s) = Y(s)/U(s), zero initial conditions, ratio of polynomials",
                  "Loop: e = r - y; U = C(s) e; Y = G U",
                  "G_cl = C G / (1 + C G); unity C: G/(1 + G)",
                  "First order: y(t) = K(1 - e^(-t/tau))",
                  "y(tau) = 63.2% of K; y(3 tau) = 95%",
                  "Motor example: tau_m = J/b",
                  "Stability: closed-loop poles left half-plane",
                ],
              },
              {
                q: "A DC motor has J = 0.01 kg m^2 and viscous friction b = 0.01 N m s/rad. Find its mechanical time constant and the percentage of final speed reached at that instant.",
                marks: 7,
                outline: [
                  "tau_m = J/b = 0.01/0.01 = 1 s",
                  "First-order step: 63.2% at t = tau",
                  "95% at 3 tau = 3 s",
                  "SI units are the trap - state them",
                  "Design reading: lighter rotor or heavier damping -> faster joint",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "P control",
            body: [
              "Proportional control commands effort in proportion to the present error: u = Kp e. Its virtues: one parameter, immediate response, and stiffness - the loop behaves like a spring pulling the output toward the setpoint. Raising Kp speeds the rise and shrinks the steady-state error; the closed-loop pole of a first-order plant moves left as gain grows. Every other term of PID exists to fix what P alone cannot do, which is why the exam treats P as the baseline of the ladder.",
              "The steady-state error is P's signature weakness. For a type-0 plant with unity feedback, e_ss = 1/(1 + Kp): gain 9 leaves 10% error, gain 99 leaves 1% - halved by doubling, never zeroed. The physical reason: P acts only while the error exists; at zero error it commands zero effort, so gravity droop, friction and load hold the joint persistently off target. High gain reduces but cannot remove the offset - and pushing gain high enough to nearly do so invites overshoot and oscillation in any second-order reality.",
              "A worked design reading: a joint servo needs under 2% steady-state error from P alone, so Kp > 49; but the same plant with inertia has a second-order closed loop, and near Kp ~ 50 the damping ratio has fallen well below 0.7 - overshoot and ringing appear. The lesson written into every mark scheme: P trades error for damping; you cannot maximize both with one knob. This is precisely the gap PD fills (section 4.3) and the offset the integrator erases (section 4.4).",
              "Exam framing: 'explain P control with merits and demerits; compute the steady-state error' is the standard pair. Write the law, quote e_ss = 1/(1 + Kp), plug a number, then the demerit trio - residual offset, overshoot at high gain, and the gravity-droop example. The sentence 'P can reduce but never eliminate steady-state error' is the insight mark.",
            ],
            keyTerms: [
              { term: "Proportional gain Kp", definition: "Multiplier on the present error: u = Kp e." },
              { term: "Steady-state error", definition: "e_ss = 1/(1 + Kp) for a type-0 unity-feedback plant - never zero under P." },
              { term: "Position error constant", definition: "Kp - the loop gain that sets the step offset." },
              { term: "Gravity droop", definition: "Persistent offset a P-only loop holds under constant load." },
              { term: "Type-0 plant", definition: "No free integrator in G(s) - the reason step error is finite." },
            ],
            callout: {
              type: "exam",
              title: "1/(1 + Kp), and never zero",
              body: "Quote e_ss = 1/(1 + Kp), plug Kp = 9 -> 10%, then write the insight sentence: doubling Kp halves the error but never zeroes it, because P outputs nothing at zero error. The gravity-droop example (a P-only joint holds below target under load) converts the formula into physics - that trio is the full P-control answer.",
            },
            bullets: [
              "Law: u = Kp e - effort proportional to the present error.",
              "Type-0 unity feedback: e_ss = 1/(1 + Kp); Kp = 9 -> 10% error.",
              "High Kp: faster rise, smaller offset - but overshoot and ringing follow.",
              "At zero error P commands zero effort: offsets persist (gravity droop).",
              "One knob cannot buy speed and damping together - the PD gap.",
              "Robots rarely use P alone; it is the baseline every later term fixes.",
            ],
            diagram: {
              kind: "compare",
              title: "Low gain vs high gain under P control",
              caption: "One knob, two regimes: sluggish-with-offset or fast-with-ringing.",
              left: {
                heading: "Low Kp",
                items: [
                  "slow rise toward the setpoint",
                  "large steady-state offset",
                  "no overshoot, generous stability margin",
                  "gentle on the actuator",
                ],
              },
              right: {
                heading: "High Kp",
                items: [
                  "fast rise, small offset",
                  "overshoot and ringing appear",
                  "reduced stability margin",
                  "actuator saturation risk",
                ],
              },
            },
            table: {
              caption: "Effect of Kp on closed-loop behaviour (second-order plant).",
              headers: ["Aspect", "Low Kp", "High Kp"],
              rows: [
                ["Rise time", "slow", "fast"],
                ["Steady-state error", "large (1/(1+Kp))", "small but nonzero"],
                ["Overshoot", "negligible", "significant, ringing"],
                ["Stability margin", "generous", "reduced"],
                ["Actuator effort", "modest", "saturation risk"],
              ],
            },
            examQuestions: [
              {
                q: "Explain proportional control of a robot joint. Derive or state the steady-state error for a type-0 plant, compute it for Kp = 9, and explain why P control cannot eliminate the error even at high gain.",
                marks: 14,
                outline: [
                  "Law u = Kp e; loop stiffness analogy",
                  "Type-0 unity feedback: e_ss = 1/(1 + Kp)",
                  "Kp = 9 -> e_ss = 1/10 = 10%",
                  "Kp = 99 -> 1%: halving, never zeroing",
                  "Zero error -> zero output: gravity droop persists",
                  "High-gain side effects: overshoot, ringing, saturation",
                  "Conclusion: P trades error for damping; PD/I complete the ladder",
                ],
              },
              {
                q: "A P-controlled joint sags 5 degrees below its commanded position under load. Explain the sag and state two remedies available within the PID family.",
                marks: 7,
                outline: [
                  "Load torque needs steady control effort",
                  "P provides effort only while error exists -> permanent offset",
                  "Remedy 1: raise Kp (offset shrinks, overshoot risk)",
                  "Remedy 2: add integral action - I erases the offset (section 4.4)",
                  "Gravity feedforward is the non-PID alternative",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "PD control",
            body: [
              "Derivative control adds anticipation: u = Kp e + Kd edot, effort proportional to how fast the error is changing. Physically, D is a damper - it resists motion toward or away from the target, converting the overshooting spring of P into a critically damped servomechanism. On the second-order closed loop m s^2 + (b + Kd) s + (k + Kp) = 0, Kd enters exactly where physical damping b sits - the algebra makes the physics visible.",
              "The design formulas are the exam's numerical core. Natural frequency wn = sqrt((k + Kp)/m) - P sets the speed; damping ratio zeta = (b + Kd)/(2 sqrt(m(k + Kp))) - D sets the smoothness. Worked design: m = 1, k = 1, b = 0.2, target wn = 5 rad/s so Kp = 24; then zeta = 0.7 (the near-fastest-settling, ~5% overshoot choice) requires b + Kd = 2 zeta wn m = 7, so Kd = 6.8. The design recipe - pick Kp for speed, then Kd for zeta = 0.7 - is a complete, defensible tuning procedure.",
              "The derivative's practical vice is noise amplification: edot of a quantized, noisy sensor signal explodes at high frequency, chattering the actuator. Standard defences, nameable in one line each: filter the derivative (a pole in the D path), implement derivative on measurement rather than error (avoids the setpoint 'kick' on step changes), and limit the D bandwidth. Robot drives implement PD in current loops at kilohertz rates; the joint PD of Unit V's firmware is the same law with encoders supplying edot.",
              "Exam framing: 'explain PD control; derive its effect on a second-order system; design Kd for a target damping ratio' is the standard 14-mark form. Write the law, show Kd entering the s term, work the wn/zeta design with the numbers above, and close with the noise-amplification caveat plus the on-measurement fix - the theory-practice pair the examiner scores.",
            ],
            keyTerms: [
              { term: "Derivative gain Kd", definition: "Multiplier on the error's rate of change: adds damping." },
              { term: "Damping ratio zeta", definition: "(b + Kd)/(2 sqrt(m(k + Kp))); 0.7 gives ~5% overshoot." },
              { term: "Natural frequency wn", definition: "sqrt((k + Kp)/m) - set by the proportional gain." },
              { term: "Overshoot", definition: "Peak excursion past the setpoint; exp(-zeta pi/sqrt(1 - zeta^2))." },
              { term: "Derivative on measurement", definition: "Differentiating the sensor signal instead of the error - kills setpoint kick." },
            ],
            callout: {
              type: "tip",
              title: "Tune for zeta = 0.7",
              body: "Damping ratio 0.7 lands ~5% overshoot at near-fastest settling - the industry's default sweet spot. The recipe is two moves: Kp sets wn = sqrt((k + Kp)/m); then Kd = 2 zeta wn m - b. Present it as a design procedure with the numbers filled and the examiner has nothing left to deduct.",
            },
            bullets: [
              "Law: u = Kp e + Kd edot - anticipation, mechanical damping in software.",
              "Closed loop: m s^2 + (b + Kd) s + (k + Kp) = 0.",
              "wn = sqrt((k + Kp)/m): P sets speed; zeta = (b + Kd)/(2 sqrt(m(k + Kp))): D sets smoothness.",
              "Worked: Kp = 24 -> wn = 5; zeta = 0.7 -> Kd = 6.8 (b = 0.2).",
              "zeta = 0.7: about 5% overshoot, near-fastest settling.",
              "Noise: D amplifies sensor noise - filter it, or differentiate the measurement.",
            ],
            diagram: {
              kind: "matrix",
              title: "The Kp-Kd tuning map",
              caption: "Axis x rises with Kp, axis y with Kd - each quadrant is a recognizable response personality.",
              axes: { x: "Kp (low -> high)", y: "Kd (low -> high)" },
              quadrants: [
                { label: "Sluggish", note: "high Kd, low Kp - overdamped, slow" },
                { label: "Well-tuned", note: "high Kd, high Kp - zeta ~ 0.7" },
                { label: "Droopy", note: "low Kd, low Kp - slow with large offset" },
                { label: "Oscillatory", note: "low Kd, high Kp - overshoot and ringing" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "pd_design.py - the worked design, verified",
              code: `import math

m, k, b = 1.0, 1.0, 0.2
Kp = 24.0                       # wn = 5 rad/s
wn = math.sqrt((k + Kp) / m)    # 5.0
zeta_target = 0.7
Kd = 2 * zeta_target * wn * m - b   # 6.8
zeta = (b + Kd) / (2 * m * wn)      # 0.7 back-check
OS = math.exp(-zeta * math.pi / math.sqrt(1 - zeta**2))
print(round(wn, 2), round(zeta, 2), round(OS * 100, 1))  # 5.0 0.7 4.6%`,
            },
            examQuestions: [
              {
                q: "Explain PD control of a second-order plant. Show how Kd modifies the damping ratio, and design Kp and Kd for m = 1, k = 1, b = 0.2 to achieve wn = 5 rad/s and zeta = 0.7. State the resulting overshoot.",
                marks: 14,
                outline: [
                  "Law u = Kp e + Kd edot; D = software damper",
                  "Closed loop: m s^2 + (b + Kd) s + (k + Kp) = 0",
                  "wn = sqrt((k + Kp)/m) -> Kp = wn^2 m - k = 24",
                  "zeta = (b + Kd)/(2 m wn) -> Kd = 2 x 0.7 x 5 - 0.2 = 6.8",
                  "Overshoot = exp(-zeta pi/sqrt(1 - zeta^2)) ~ 4.6%",
                  "zeta = 0.7 rationale: ~5% overshoot, near-fastest settling",
                  "Noise caveat: filter D / derivative on measurement",
                ],
              },
              {
                q: "Why is the derivative term usually implemented on the measurement rather than on the error?",
                marks: 7,
                outline: [
                  "A step setpoint makes de/dt a spike - 'derivative kick'",
                  "Actuator receives an impulsive command at every setpoint change",
                  "Measurement changes continuously - no kick",
                  "Same damping benefit, safer actuation",
                  "Caveat: measurement noise still needs filtering",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "PID control",
            body: [
              "The integral term completes the ladder: u = Kp e + Ki integral(e dt) + Kd edot. Integration accumulates error history - a persistent offset charges the integral until its output exactly cancels the disturbance, at which point the error can be zero with nonzero actuator effort. That is the property P lacked: with I present, the type-0 offset of section 4.2 vanishes. PI is the workhorse of process industry; PID is the joint-control default; over 90% of industrial loops are some PID variant - a statistic worth quoting.",
              "The gravity example shows the mechanism. A P-only joint holds 5 degrees low under load; add Ki: while error persists the integral term grows, pushing harder each cycle until the output balances the load - at equilibrium the error is zero and the integral has 'learned' the required bias. The cost: an integrator adds phase lag, slowing the loop and inviting overshoot; and when the actuator saturates, the integral keeps charging on error it cannot correct - integral windup - releasing later as a large overshoot.",
              "Windup cures and tuning methods complete the answer. Anti-windup by clamping (freeze the integral while the actuator is saturated) or back-calculation (bleed the integral down by the saturation excess) is the standard defence - naming 'anti-windup' explicitly is the mark. Tuning: Ziegler-Nichols ultimate-cycle method (raise Kp to sustained oscillation Ku, note period Tu, set Kp = 0.6 Ku, Ki and Kd from the Tu rules) or software auto-tuning; then trim by feel - I for offset, D for ringing.",
              "Exam framing: 'explain PID control with the role of each term, block diagram, windup and its cure' is the guaranteed 14-mark form. The structure: law + one sentence per term (P present, I past, D future), the block diagram, the gravity-offset demonstration, windup definition + anti-windup, and Ziegler-Nichols named with its Kp rule. A comparison table of the three terms is the fastest complete answer.",
            ],
            keyTerms: [
              { term: "Integral gain Ki", definition: "Multiplier on accumulated error; erases steady-state offset." },
              { term: "Integral windup", definition: "Integral keeps charging during actuator saturation; releases as overshoot." },
              { term: "Anti-windup", definition: "Clamping or back-calculation preventing integral charge during saturation." },
              { term: "Ziegler-Nichols tuning", definition: "Ultimate gain/period rules: Kp = 0.6 Ku and Tu-based Ki, Kd." },
              { term: "Reset action", definition: "The integral's other name - it resets the offset to zero." },
            ],
            callout: {
              type: "warning",
              title: "Integral windup is the classic failure",
              body: "During saturation the loop cannot correct the error, yet the integral keeps charging on it - the release overshoots badly and may oscillate. The one-word defence examiners want: anti-windup (clamp the integrator while saturated, or back-calculate). A PID answer that never mentions windup reads as a textbook summary, not an engineer's.",
            },
            bullets: [
              "Law: u = Kp e + Ki integral(e) + Kd edot - P present, I past, D future.",
              "I erases the type-0 offset: integral grows until output balances the load.",
              "Gravity trace: 5-degree sag under P -> zero at equilibrium with I.",
              "Cost: added phase lag, slower loop, overshoot risk.",
              "Windup: integral charges during saturation; cure = anti-windup clamping.",
              "Ziegler-Nichols: Kp = 0.6 Ku; Ki, Kd set from the oscillation period Tu.",
            ],
            diagram: {
              kind: "cycle",
              title: "The PID loop, one turn",
              caption: "Every millisecond the three terms read the same error three ways - past, present and future.",
              steps: [
                { label: "Measure error e", note: "setpoint - encoder" },
                { label: "Combine terms", note: "P now, I history, D trend" },
                { label: "Command actuator", note: "u to the drive" },
                { label: "Plant responds", note: "joint moves; next tick" },
              ],
            },
            table: {
              caption: "The three terms: what each fixes and what each costs.",
              headers: ["Term", "Acts on", "Fixes", "Costs"],
              rows: [
                ["P", "present error", "rise time, stiffness", "offset remains; high gain rings"],
                ["I", "accumulated error", "steady-state offset", "phase lag; windup"],
                ["D", "error rate", "damping, overshoot", "noise amplification"],
              ],
            },
            examQuestions: [
              {
                q: "Explain PID control with a block diagram. State the role of each term, demonstrate with the gravity-load example why the integral removes steady-state error, define integral windup with its cure, and outline Ziegler-Nichols tuning.",
                marks: 14,
                outline: [
                  "u = Kp e + Ki integral(e dt) + Kd edot",
                  "P: present - speed and stiffness; offset remains",
                  "I: past - integral charges until output cancels the load -> zero offset",
                  "D: future - damping, overshoot reduction",
                  "Windup: integral charges during saturation; release overshoots",
                  "Anti-windup: clamp or back-calculate the integrator",
                  "Ziegler-Nichols: Ku at sustained oscillation, Tu; Kp = 0.6 Ku",
                ],
              },
              {
                q: "Why does adding integral action slow the loop, and how does anti-windup clamping work?",
                marks: 7,
                outline: [
                  "Integrator adds -90 degrees of phase lag",
                  "Reduced phase margin -> slower, overshoot-prone response",
                  "During saturation the error persists uncorrected",
                  "Clamping freezes the integral while saturated",
                  "Back-calculation bleeds the excess out - alternative cure",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Non-linear and advanced control",
            body: [
              "The justification for advanced control is Unit II itself: the robot equation M(q) qddot + C(q, qdot) qdot + g(q) = tau is non-linear (sines and cosines of joint angles) and configuration-dependent (inertia changes as the arm folds). A PID tuned at one pose - arm extended, say - is over- or under-damped at another. Fixed linear gains cannot be optimal everywhere; the fix is to use the model.",
              "Computed torque (feedback linearization) is the cleanest model-based law: tau = M(q)(qdd_d + Kd edot + Kp e) + C qdot + g, with e = q_d - q the joint tracking error. Substituting into the dynamics cancels M, C and g exactly, leaving the linear error dynamics eddot + Kd edot + Kp e = 0 - a linear system whose gains work identically at every pose. The one-line idea to write: cancel the nonlinearity with the model, then control what remains linearly.",
              "The model-free and task-specific branches complete the family. Adaptive control estimates the uncertain parameters of M, C, g online (masses unknown after a payload change) and feeds them to the same computed-torque structure. Robust control bounds the uncertainty and overwhelms it with high-frequency terms. Impedance / force control regulates the mechanical relationship with the environment - stiffness and damping of contact - instead of position; it is the law of polishing, deburring and assembly, where position control would fight the surface. Sliding-mode and learning-based methods are the current-research ends worth one name each.",
              "Exam framing: 'why is a robot joint a non-linear plant? Explain computed-torque control and show that it linearizes the error dynamics' is the standard question, with 'compare position control and impedance control' as the favourite follow-up. The answer skeleton: the nonlinear terms from Unit II, the computed-torque law, the cancelled equation, and the contact-task argument for impedance.",
            ],
            keyTerms: [
              { term: "Computed torque", definition: "tau = M(q)(qdd_d + Kd edot + Kp e) + C qdot + g - model-based cancellation." },
              { term: "Feedback linearization", definition: "Using the model to render the closed loop exactly linear." },
              { term: "Adaptive control", definition: "Online estimation of uncertain dynamic parameters feeding the control law." },
              { term: "Impedance control", definition: "Regulating contact stiffness/damping rather than position - force-based tasks." },
              { term: "Gain scheduling", definition: "Pre-computed gain sets switched by configuration - the cheap alternative." },
            ],
            callout: {
              type: "tip",
              title: "Cancel, then control linearly",
              body: "Computed torque's whole idea in one sentence: use the model to cancel M, C and g, leaving eddot + Kd edot + Kp e = 0 - linear error dynamics valid at every pose. Contrast with gain scheduling (precomputed gains per configuration): model-based cancellation is exact, scheduling is an approximation - naming both shows command of the option space.",
            },
            bullets: [
              "Robot plant: M(q) qddot + C qdot + g = tau - nonlinear, pose-dependent.",
              "PID tuned at one pose degrades elsewhere - the motivation.",
              "Computed torque: tau = M(q)(qdd_d + Kd edot + Kp e) + C qdot + g.",
              "Result: eddot + Kd edot + Kp e = 0 - one gain set works everywhere.",
              "Adaptive: estimate uncertain M, C, g online (payload changes).",
              "Impedance control: regulate contact stiffness/damping - polishing, assembly.",
            ],
            diagram: {
              kind: "layers",
              title: "The control stack of a modern robot joint",
              caption: "Each layer assumes the one below it works - model-based laws sit above the classical servos.",
              layers: [
                { label: "Task / Cartesian layer", note: "trajectory + impedance or force goals" },
                { label: "Computed-torque / adaptive law", note: "cancels M, C, g" },
                { label: "Joint PID servos", note: "track q_d per joint" },
                { label: "Current / torque loops", note: "kilohertz, inside the drive" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "computed_torque.py - the cancellation law with 2R terms",
              code: `import numpy as np

def M(q):   # 2R inertia with cos(th2) coupling (unit links, masses)
    c2 = np.cos(q[1])
    return np.array([[3.0 + 2*c2, 1.0 + c2],
                     [1.0 + c2,  1.0]])

def g(q):
    return np.array([2*9.81*np.sin(q[0]) + 9.81*np.sin(q[0]+q[1]),
                     9.81*np.sin(q[0]+q[1])])

Kp, Kd = np.eye(2)*25, np.eye(2)*8
q_d, q = np.array([0.5, 0.5]), np.zeros(2)
e = q_d - q
qdd_cmd = Kp @ e          # + Kd edot in the full loop
tau = M(q) @ qdd_cmd + g(q)   # model cancels inertia + gravity
print(np.round(tau, 2))`,
            },
            examQuestions: [
              {
                q: "Why is a robot a non-linear, configuration-dependent plant? Explain computed-torque control and show that it yields linear error dynamics independent of the configuration.",
                marks: 14,
                outline: [
                  "Dynamics M(q) qddot + C qdot + g = tau: sines, pose-dependent inertia",
                  "Fixed PID tuned at one pose degrades at others",
                  "Law: tau = M(q)(qdd_d + Kd edot + Kp e) + C qdot + g",
                  "Substitution cancels M, C, g exactly",
                  "Left: eddot + Kd edot + Kp e = 0 - linear, pose-independent",
                  "One gain set valid everywhere; needs accurate model",
                  "Model error -> adaptive/robust variants; impedance for contact tasks",
                ],
              },
              {
                q: "Compare position control and impedance control for a surface-polishing task.",
                marks: 7,
                outline: [
                  "Position control fights the surface - force builds, stalls or scratches",
                  "Impedance regulates contact force/stiffness instead of position",
                  "Specified: desired stiffness/damping normal to the surface",
                  "Tangential position tracking maintained; normal force controlled",
                  "Wrist F/T sensor (Unit III) closes the force loop",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Electric actuators",
            body: [
              "Electric motors dominate modern robotics. The DC servo motor obeys tau = Kt i (torque proportional to current) with back-EMF Ke omega opposing the supply - linear, easily modelled, and the historical default. Brushless DC (BLDC) and AC permanent-magnet servo motors move commutation into the drive electronics: no brush wear, higher torque density, better thermal behaviour - and they are what every contemporary industrial arm's joint contains. Stepper motors move in discrete increments (1.8 degrees/step = 200 steps/rev, microsteppable to fractions) and position open-loop - cheap and simple, but they lose steps silently under overload, the failure that closed-loop servos cannot have.",
              "The control electronics follow the motor: brushed DC needs an H-bridge; BLDC needs a three-phase inverter with rotor-position sensing (Hall sensors or encoder-derived); AC servo drives close current loops at kilohertz rates inside the drive, presenting the outer controller a clean torque source. The torque-speed curve is the datasheet's heart: continuous rating (thermal limit) versus peak rating (magnetic/short-time limit), with the usable region between them; duty cycles beyond the continuous curve are a thermal promise the motor will break.",
              "A worked sizing numerical: a joint requires 5 N m sustained. Through a 10:1 gearbox, the motor must supply 0.5 N m (torque divides by ratio); with Kt = 0.05 N m/A the continuous current is 10 A - a normal servo-drive figure. The paired insight: reflected load inertia falls as ratio^2, so the same 10:1 box makes the motor see 1/100 of the load inertia - gearing improves both torque margin and controllability, which is why nearly every joint has one (the transmission section completes this story).",
              "Exam framing: 'explain electric actuators used in robots; compare servo and stepper' is the standard pair. Cover the tau = Kt i law and back-EMF, BLDC's commutation advantage, the stepper's open-loop trade and step-loss failure, then the sizing numerical (gear ratio first, then current). The servo-vs-stepper verdict sentence: steppers for open-loop low-cost positioning, servos wherever load can vary.",
            ],
            keyTerms: [
              { term: "DC servo motor", definition: "tau = Kt i with back-EMF Ke omega; linear and easily controlled." },
              { term: "BLDC", definition: "Brushless motor with electronic commutation; high torque density, low maintenance." },
              { term: "Stepper motor", definition: "Discrete-step motor (200 steps/rev); open-loop; loses steps on overload." },
              { term: "Torque constant Kt", definition: "Torque per ampere - the motor sizing constant." },
              { term: "Torque-speed curve", definition: "Continuous (thermal) vs peak (magnetic) operating regions." },
            ],
            callout: {
              type: "tip",
              title: "Gear first, then compute current",
              body: "In actuator sizing numericals, divide the joint torque by the gear ratio before dividing by Kt - and remember reflected inertia falls as ratio^2. A 10:1 box turns 5 N m into 0.5 N m at the motor (10 A at Kt = 0.05) and lightens the motor's inertia burden a hundredfold; doing the division in the wrong order is the classic slip.",
            },
            bullets: [
              "DC servo: tau = Kt i; back-EMF Ke omega; linear, model-friendly.",
              "BLDC / AC servo: electronic commutation, no brushes, high torque density - the joint default.",
              "Stepper: 200 steps/rev, microstepping; open-loop; silent step loss under overload.",
              "Drives close kHz current loops; the outer controller commands torque.",
              "Sizing: joint 5 N m / 10:1 = 0.5 N m; at Kt = 0.05 -> 10 A continuous.",
              "Reflected inertia falls as ratio^2 - gearing helps torque AND control.",
            ],
            diagram: {
              kind: "fork",
              title: "Which electric motor?",
              caption: "The choice falls out of two questions - feedback available? load predictable?",
              start: "Joint motion requirement",
              branches: [
                { label: "Predictable light load, low cost", outcome: "stepper + microstepping, open loop", good: true },
                { label: "Smooth servo with varying load", outcome: "brushed DC or AC servo + encoder", good: true },
                { label: "High torque density, low maintenance", outcome: "BLDC + three-phase drive", good: true },
                { label: "Overload expected but loop kept open", outcome: "stepper silently loses steps - use a servo", good: false },
              ],
            },
            table: {
              caption: "Electric actuator comparison.",
              headers: ["Motor", "Commutation", "Feedback", "Strength", "Watch-out"],
              rows: [
                ["Brushed DC", "mechanical brushes", "encoder/tacho", "linear, cheap drive", "brush wear"],
                ["BLDC / AC servo", "electronic (inverter)", "encoder/ Hall", "torque density, life", "drive complexity"],
                ["Stepper", "step commands", "none (open loop)", "cheap positioning", "silent step loss"],
                ["Direct drive", "-", "high-res encoder", "no backlash, no gears", "huge current at low speed"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the construction and control of electric actuators used in robots - DC servo, brushless DC and stepper. Compare servo and stepper drives and state when each is preferred.",
                marks: 14,
                outline: [
                  "DC servo: tau = Kt i, back-EMF; linear control, brush wear",
                  "BLDC: electronic commutation, Hall/encoder sensing; density + life",
                  "Stepper: 200 steps/rev, microstepping; open-loop positioning",
                  "Stepper failure mode: silent step loss under overload",
                  "Drives: H-bridge vs three-phase inverter; kHz current loops",
                  "Servo preferred with varying load; stepper for predictable light duty",
                  "Torque-speed curve: continuous vs peak regions",
                ],
              },
              {
                q: "A robot joint needs 5 N m sustained through a 10:1 gearbox. With motor torque constant Kt = 0.05 N m/A, compute the required motor torque and continuous current, and state the effect of the gearing on reflected inertia.",
                marks: 7,
                outline: [
                  "Motor torque = 5/10 = 0.5 N m",
                  "Current = 0.5 / 0.05 = 10 A",
                  "Reflected inertia falls as n^2 = 100x lighter",
                  "Result: easier control, better bandwidth",
                  "Check the continuous (not peak) rating",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Hydraulic and pneumatic actuators",
            body: [
              "Hydraulic actuators move incompressible oil under pressure through valves into cylinders or motors. The result is unmatched force density and stiffness: working pressures of 150-300 bar against bore areas give forces from kilonewtons to meganewtons, with the oil's incompressibility making position holding rock-solid under huge loads. Heavy presses, excavators, underwater robots and the classic heavy-payload industrial arms are hydraulic territory. The price list is equally clear: a hydraulic power pack (pump, reservoir, cooler), servo valves that are precision components, filtration discipline, leak risk, and noise.",
              "Pneumatic actuators compress air instead: cheap, clean, fast, and inherently compliant (air is a spring). F = P x A applies at much lower pressures (5-8 bar), so forces are hundreds of newtons to a few kilonewtons - ideal for grippers, pick-and-place on/off automation and the classic 80% of factory cycles that only need two positions. The servo problem: air's compressibility makes precise continuous position control difficult (dead zones, springiness), so pneumatics historically ran open-loop two-position sequences; modern servo-pneumatics exist but remain niche.",
              "A worked force numerical makes the comparison concrete: the same cylinder bore of 100 mm (area A = pi x 0.05^2 = 7.85 x 10^-3 m^2) fed at 200 bar hydraulic (2 x 10^7 Pa) produces F = 2 x 10^7 x 7.85 x 10^-3 = 157 kN; fed at 6 bar pneumatic (6 x 10^5 Pa) it produces 4.7 kN - a factor of about 33, entirely from pressure. Add stiffness (oil incompressible, air spongy) and cleanliness (oil leaks vs vented air) and the selection table writes itself.",
              "Exam framing: 'compare electric, hydraulic and pneumatic actuators' is a guaranteed 14-mark question, and the force numerical is its favourite companion. Structure: one paragraph per actuator (principle + strengths + weaknesses), the F = P x A numbers with the 33x line, then the selection guidance by application - electric for precision and control, hydraulic for huge force and stiffness, pneumatic for fast, clean, cheap two-position work.",
            ],
            keyTerms: [
              { term: "Hydraulic actuator", definition: "Oil under 150-300 bar; huge force density and stiffness." },
              { term: "Pneumatic actuator", definition: "Compressed air at 5-8 bar; fast, clean, compliant, two-position friendly." },
              { term: "Servo valve", definition: "Precision valve modulating hydraulic flow proportionally to command." },
              { term: "Cylinder bore area A", definition: "pi r^2; multiplies pressure into force: F = P A." },
              { term: "Compliance", definition: "The actuator's springiness under load - low in oil, high in air." },
            ],
            callout: {
              type: "exam",
              title: "Same bore, 33x the force",
              body: "The pressure ratio is the entire numerical: 200 bar vs 6 bar is ~33x on the same 100 mm bore - 157 kN vs 4.7 kN. Then one line each on stiffness (oil incompressible vs air springy) and cleanliness (leak risk vs vented air). That trio - numbers, stiffness, cleanliness - is the complete comparison mark set.",
            },
            bullets: [
              "Hydraulic: 150-300 bar, incompressible oil -> huge force + stiffness.",
              "Needs power pack, servo valves, filtration; leaks and noise are real.",
              "Pneumatic: 5-8 bar air; fast, clean, cheap, compliant; two-position champion.",
              "F = P x A: 100 mm bore at 200 bar -> 157 kN; at 6 bar -> 4.7 kN (~33x).",
              "Air compressibility makes continuous position servo hard - dead zone + springiness.",
              "Selection: electric = precision; hydraulic = heavy force; pneumatic = on/off speed.",
            ],
            diagram: {
              kind: "compare",
              title: "Hydraulic vs pneumatic",
              caption: "Same cylinder geometry, different fluid - and the whole character changes.",
              left: {
                heading: "Hydraulic",
                items: [
                  "oil at 150-300 bar",
                  "incompressible: stiff, precise holding",
                  "kN-MN force range",
                  "power pack, servo valve, leak discipline",
                ],
              },
              right: {
                heading: "Pneumatic",
                items: [
                  "air at 5-8 bar",
                  "compressible: compliant, springy",
                  "hundreds of N to a few kN",
                  "clean, cheap, vented; hard to servo",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "cylinder.py - F = P x A for both fluids",
              code: `import math

r = 0.05                       # 100 mm bore radius, m
A = math.pi * r * r            # 7.854e-3 m^2
F_hyd = 200e5 * A              # 200 bar in Pa
F_pne = 6e5 * A                # 6 bar in Pa
print(round(F_hyd/1000, 1), round(F_pne/1000, 1), round(F_hyd/F_pne, 1))
# 157.1 4.7 33.3 - same bore, 33x the force`,
            },
            examQuestions: [
              {
                q: "Compare electric, hydraulic and pneumatic actuators on principle, force density, stiffness, cleanliness and controllability. Compute the force of a 100 mm bore cylinder at 200 bar and at 6 bar and interpret the ratio.",
                marks: 14,
                outline: [
                  "Electric: tau = Kt i; precise, clean, controllable; limited force density",
                  "Hydraulic: 150-300 bar oil; huge force + stiffness; pumps, leaks, noise",
                  "Pneumatic: 5-8 bar air; fast, clean, compliant; poor continuous servo",
                  "A = pi x 0.05^2 = 7.854e-3 m^2",
                  "F_hyd = 2e7 x A = 157 kN; F_pne = 6e5 x A = 4.7 kN",
                  "Ratio ~33x from pressure alone",
                  "Selection: precision -> electric; heavy force -> hydraulic; on/off -> pneumatic",
                ],
              },
              {
                q: "Why is continuous position control difficult with pneumatic actuators?",
                marks: 7,
                outline: [
                  "Air is compressible - the column of air is a spring",
                  "Pressure-volume nonlinearity and dead zones at the valve",
                  "Load changes shift the equilibrium position",
                  "Two-position (on/off) duty avoids the problem - hence its dominance",
                  "Servo-pneumatics exist (pressure control loops) but stay niche",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Transmission systems and actuator selection",
            body: [
              "Transmissions sit between motor and joint and reshape the mechanical match. Gear trains (spur, planetary, cycloid) reduce speed and multiply torque by the ratio n; the harmonic drive - a flexible spline deformed by an elliptical wave generator - delivers ratios of 50-160:1 in a compact, near-zero-backlash package and is the joint gearbox of precision robots. Timing (toothed) belts transmit torque over distance with no sliding contact and effectively no backlash, at the price of elasticity and stretch. Lead and ball screws convert rotation to precise linear motion; bearings support the loads and set the friction floor.",
              "Backlash is the enemy the transmission exists to manage: the lost motion when the direction reverses, which appears as tool-position error on every direction change. A harmonic drive's near-zero backlash and a ball screw's preloaded nut are engineering answers; a spur stage's 0.1 degree of play is a positioning budget spent. The companion concept is reflected inertia: load inertia seen by the motor divides by n^2, so a 10:1 reduction turns a 3 kg m^2 arm into 0.03 kg m^2 at the motor shaft - matching motor-to-load inertia (ideally within 10:1) is the criterion that keeps servos crisp.",
              "A worked ratio numerical collects the effects: n = 10 gives joint torque x10, joint speed /10, reflected inertia /100, and resolution improved 10x (motor encoder resolution divided by n at the joint) - four consequences from one number, the fastest complete answer to 'what does a gearbox do?'. The costs to state in the same breath: added friction and backlash, reduced stiffness (belts), and the extra inertia of the gearbox itself on the motor side.",
              "Selection parameters conclude the syllabus line: continuous and peak torque with the duty cycle, required speed range, gear ratio from the torque/speed mismatch, reflected-inertia ratio (motor:load, ideally under 10), backlash and stiffness budgets, resolution, environment (dust, washdown, temperature), and cost. Exam framing: 'explain transmission elements and the parameters for actuator selection' is the standard 14-mark; the ratio numerical and the inertia-matching criterion are its two most-awarded details.",
            ],
            keyTerms: [
              { term: "Gear ratio n", definition: "Torque x n, speed / n, reflected inertia / n^2." },
              { term: "Harmonic drive", definition: "Flexible-spline gear with 50-160:1 ratios and near-zero backlash." },
              { term: "Timing belt", definition: "Toothed belt transmission - no sliding, negligible backlash, some elasticity." },
              { term: "Backlash", definition: "Lost motion on direction reversal; the positioning-error budget killer." },
              { term: "Inertia matching", definition: "Motor-to-reflected-load inertia ideally within 10:1 for crisp servo response." },
            ],
            callout: {
              type: "warning",
              title: "Backlash kills fine positioning",
              body: "0.1 degree of gear play is invisible until the arm reverses - then the tool jumps and the contour error spikes. Harmonic and cycloid drives exist precisely for this. In any selection answer, state backlash and inertia ratio explicitly: they are the two parameters that separate a servo-crisp axis from a sloppy one.",
            },
            bullets: [
              "Gear ratio n: torque x n, speed / n, reflected inertia / n^2, resolution x n.",
              "Harmonic drive: 50-160:1 compact, near-zero backlash - the precision joint gearbox.",
              "Timing belts: no sliding contact, negligible backlash, some elasticity.",
              "Ball screws: rotation -> precise linear motion; preloaded nuts kill play.",
              "Backlash appears as error on every direction reversal.",
              "Selection: torque (continuous + peak), speed, inertia ratio < 10, backlash, stiffness, cost.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From motor shaft to joint",
              caption: "Each stage trades speed for torque and adds its own imperfection - backlash is the bill.",
              stages: [
                { label: "Motor shaft", note: "high speed, low torque" },
                { label: "Gear reducer (n:1)", note: "torque x n; inertia / n^2" },
                { label: "Timing belt / screw", note: "distance or axis conversion" },
                { label: "Joint + bearings", note: "the load; friction floor" },
                { label: "Encoder", note: "on motor or joint - resolution divided by n" },
              ],
            },
            table: {
              caption: "Transmission elements and their trade-offs.",
              headers: ["Element", "Converts", "Strength", "Watch-out"],
              rows: [
                ["Spur / planetary gears", "speed -> torque", "compact, cheap", "backlash, noise"],
                ["Harmonic drive", "speed -> torque", "50-160:1, near-zero backlash", "elasticity, cost"],
                ["Timing belt", "torque across distance", "no backlash, quiet", "stretch, stiffness loss"],
                ["Ball screw", "rotation -> linear", "precise, efficient", "speed limits, needs support"],
                ["Bearings", "load support", "low friction", "set the friction floor"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the transmission elements used in robots - gears, harmonic drives, timing belts, ball screws and bearings - and discuss the parameters considered in selecting an actuator for a joint.",
                marks: 14,
                outline: [
                  "Gear trains: ratio n -> torque x n, speed / n, inertia / n^2",
                  "Harmonic drive: 50-160:1, near-zero backlash - precision joints",
                  "Timing belt: backlash-free over distance; elasticity",
                  "Ball screw: precise linear conversion; preloaded nut",
                  "Backlash as the positioning-error budget on reversal",
                  "Selection: continuous/peak torque, speed range, inertia ratio < 10",
                  "Also: resolution, stiffness, environment, duty cycle, cost",
                ],
              },
              {
                q: "State the four effects of a 10:1 gear reduction between motor and joint, and one cost of each.",
                marks: 7,
                outline: [
                  "Joint torque x10; cost: gearbox friction + own inertia",
                  "Joint speed /10; cost: top speed limited",
                  "Reflected inertia /100; cost: none - pure benefit for control",
                  "Resolution x10 (encoder counts per joint degree)",
                  "Backlash added - the universal cost of gears",
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
      title: "Control Hardware and Interfacing",
      summary:
        "Unit V closes the loop in silicon: embedded system architecture and its split by deadline, the integration of sensors and actuators with the buses and drivers between them, real-time operation and the control-loop budget, programming with ROS for robot applications, and an end-to-end integration case study that assembles the whole course into one working prototype.",
      chapter: {
        number: "05",
        title: "From Code to Motion",
        intro:
          "Unit V covers embedded systems and their architecture, integration with sensors and actuators, interfacing buses (UART, I2C, SPI, CAN), actuator drivers and PWM, real-time operation and RTOS concepts, programming for robot applications with ROS 2, and a complete integration case study.",
        inOneBreath:
          "An embedded system is a dedicated computer hidden in the robot - a microcontroller for the hard 1 ms loops, an SoC for perception and planning. Sensors enter through ADCs and buses (I2C, SPI, UART, CAN); actuators leave through drivers and PWM. Real-time means meeting deadlines - read, compute, command inside a fixed tick. ROS 2 organizes the software as nodes publishing over topics, and the case study wires all five units into one prototype.",
        sections: [
          {
            number: "5.1",
            title: "Embedded systems for robotics",
            body: [
              "An embedded system is a computer dedicated to one application, hidden inside the device it controls - processor, memory, peripherals and firmware engineered as one product. Its defining constraints differ from desktop computing: real-time deadlines (a late answer is a wrong answer), power budgets (battery robots), reliability (no reboot button at height), and cost per unit. A robot is the canonical embedded system writ large: dozens of hard deadlines per millisecond across joints, safety chains and communication.",
              "The hardware spectrum splits by deadline. Microcontrollers (STM32, ATmega, ESP32 families): megahertz-scale CPUs with flash, SRAM and rich peripherals (ADC, PWM, timers, CAN) on one chip - deterministic, microsecond-latency, the home of joint loops. Single-board computers and SoCs (Raspberry Pi, Jetson): gigahertz Linux machines with GPU/NPU acceleration - the home of perception, navigation and planning at 10-100 Hz. FPGAs serve extreme I/O determinism. Production robots are heterogeneous: an SoC thinking slowly, an MCU or dedicated drive electronics acting fast, connected by a real-time bus.",
              "A worked requirement exercise fixes the split. A line-following robot needs: 5 IR sensor reads + PID on the line error + 2 motor PWM updates, every 5 ms - an 8-bit MCU does this in microseconds per tick, so the cheapest STM32-class chip suffices. Add camera-based line tracking and Bluetooth telemetry and the perception half needs an SoC - so the architecture becomes SoC (vision, 30 Hz) + MCU (control, 200 Hz) over UART. The deadline arithmetic, not brand preference, decides the architecture - that sentence is the design maturity the question probes.",
              "Exam framing: 'what is an embedded system? Explain its architecture and role in robots; compare microcontroller and SBC' is the standard opener. Define with the four constraints, sketch the two-tier robot architecture, and fill a comparison table (clock, OS, determinism, peripherals, role, power) - the deadline-split sentence concludes it.",
            ],
            keyTerms: [
              { term: "Embedded system", definition: "A dedicated computer inside a device, engineered for real-time, power, reliability and cost." },
              { term: "Microcontroller (MCU)", definition: "Single-chip CPU + memory + peripherals; deterministic, the joint-loop home." },
              { term: "System-on-chip / SBC", definition: "Linux-class computer (Pi, Jetson); perception and planning home." },
              { term: "Heterogeneous architecture", definition: "SoC thinks, MCU acts - connected by a real-time bus." },
              { term: "Real-time constraint", definition: "Correctness includes the deadline; a late answer is a wrong answer." },
            ],
            callout: {
              type: "tip",
              title: "Split the architecture by deadline",
              body: "A 1 ms joint loop belongs on an MCU; a 100 ms perception update belongs on an SoC; the bus between them carries commands down and telemetry up. Architecture questions want this deadline-based split, not a list of boards - deriving the split from loop rates is the mark that reads as engineering judgment.",
            },
            bullets: [
              "Embedded: dedicated computer, four constraints - real-time, power, reliability, cost.",
              "MCU: flash + SRAM + ADC/PWM/timers on one chip; microsecond determinism.",
              "SBC/SoC: Linux + GPU/NPU; vision, navigation, planning at 10-100 Hz.",
              "Production robots: SoC plans, MCU/drives act, real-time bus between.",
              "Line-follower budget: 5 ms tick fits the cheapest MCU; camera pushes vision to an SoC.",
              "FPGA: the deterministic extreme for custom high-rate I/O.",
            ],
            diagram: {
              kind: "compare",
              title: "MCU vs SBC/SoC",
              caption: "Two tiers, two jobs - the robot's brain is deliberately split.",
              left: {
                heading: "Microcontroller (STM32 class)",
                items: [
                  "MHz CPU, flash + SRAM on-chip",
                  "bare-metal or RTOS",
                  "hard real-time: us latency, no jitter",
                  "rich peripherals: ADC, PWM, CAN",
                ],
              },
              right: {
                heading: "SBC / SoC (Pi, Jetson)",
                items: [
                  "GHz CPU + GPU/NPU",
                  "Linux + ROS 2",
                  "soft real-time: 10-100 Hz loops",
                  "cameras, vision models, networking",
                ],
              },
            },
            table: {
              caption: "Embedded platform comparison.",
              headers: ["Attribute", "MCU (STM32F4)", "SBC (Raspberry Pi / Jetson)"],
              rows: [
                ["Clock", "100-200 MHz", "1.5-2+ GHz (+GPU)"],
                ["OS", "bare-metal / RTOS", "Linux"],
                ["Determinism", "microsecond, hard", "milliseconds, soft"],
                ["Peripherals", "ADC, PWM, CAN, I2C, SPI", "USB, CSI camera, GPIO, Ethernet"],
                ["Typical role", "joint servo loops, safety", "perception, planning, HMI"],
                ["Power", "0.1-1 W", "3-20 W"],
              ],
            },
            examQuestions: [
              {
                q: "Define an embedded system and explain its architecture and role in a robot. Compare microcontroller-based and SBC/SoC-based control and explain how the two tiers are split in a real robot.",
                marks: 14,
                outline: [
                  "Definition: dedicated computer, engineered as one product",
                  "Four constraints: real-time, power, reliability, cost",
                  "Architecture: CPU, memory (flash/SRAM), peripherals (ADC, PWM, timers, buses)",
                  "MCU: deterministic us loops - joint control, safety chain",
                  "SBC/SoC: Linux, GPU - perception, planning, 10-100 Hz",
                  "Heterogeneous split: SoC thinks, MCU acts; real-time bus between",
                  "Split derived from deadlines (1 ms vs 100 ms), not preference",
                ],
              },
              {
                q: "Why does a 1 kHz joint control loop belong on a microcontroller rather than on a Linux single-board computer?",
                marks: 7,
                outline: [
                  "1 kHz = 1 ms deadline per cycle",
                  "Linux scheduling jitter is milliseconds - unbounded under load",
                  "A late control update is phase lag and instability risk",
                  "MCU: timer-driven ISR, deterministic microseconds",
                  "SoC still valuable: perception at 10-100 Hz upstream",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Embedded architecture and integration",
            body: [
              "Inside the MCU, the architecture is memory-mapped and peripheral-rich: a CPU core with flash (program) and SRAM (data), and peripherals hanging off the internal bus - ADC channels sampling analog inputs, timers generating PWM and counting encoder edges, GPIO pins switching and sensing, and communication blocks (UART, I2C, SPI, CAN). Firmware configures these blocks once (clocks, prescalers, interrupts) and then services them: the control loop reads the latest ADC sample, computes, and writes the PWM compare register - all within the tick.",
              "Integration with the physical robot is where courses end and engineering begins. The sensor side: transducer -> signal conditioning (amplify, filter, level-shift) -> ADC or digital bus -> filtering/fusion in firmware. The actuator side: firmware PWM -> gate driver / H-bridge -> motor -> gearbox -> joint, with the encoder feeding back to timer-capture inputs. Between the two sides sits power: logic at 3.3/5 V, motors at 12-48 V, isolated grounds, and the placement discipline that keeps motor noise out of analog measurements.",
              "A worked pin-budget exercise shows the method. A 4-wheel rover: 4 encoders x 2 channels = 8 timer-capture inputs; 4 PWM channels for motor drivers; 1 I2C bus (2 pins) for the IMU; 1 UART (2 pins) for telemetry; a handful of GPIO for e-stop and status LEDs - roughly 20 pins and 5 timers, comfortably inside one STM32F4. Overflow the budget and the answer is architectural, not heroic: expand over CAN to satellite driver boards, or multiplex, or move the IMU to SPI. The budgeted interface table is the integration answer.",
              "Exam framing: 'explain the architecture of an embedded robot controller and how sensors and actuators are integrated' is the standard 14-mark. Draw the block diagram (core, memory, peripherals, drivers, sensors, power), describe both chains (sense-in, act-out), and close with a small pin/interface budget - the table that proves the design closes.",
            ],
            keyTerms: [
              { term: "Memory-mapped I/O", definition: "Peripherals appear as addresses; firmware reads sensors and writes actuators as memory." },
              { term: "Timer capture", definition: "Hardware counting encoder edges without CPU load." },
              { term: "Signal conditioning", definition: "Amplify, filter and level-shift a transducer signal to ADC range." },
              { term: "Power domain", definition: "Separation of logic (3.3 V) and motor (12-48 V) supplies and grounds." },
              { term: "Interface budget", definition: "The counted pins/timers/buses a design needs - checked before wiring." },
            ],
            callout: {
              type: "warning",
              title: "Power domains do not mix",
              body: "Motor drivers dump switching noise and back-EMF into shared grounds; an MCU whose ground is the motor's return resets every time the motor starts. Separate supplies, star grounds, driver isolation (opto/digital isolators) - and say this in integration answers: it is the most common real-world integration bug and an easy exam anecdote.",
            },
            bullets: [
              "Core + flash + SRAM + bus; peripherals = ADC, timers/PWM, GPIO, comms.",
              "Sense-in chain: transducer -> conditioning -> ADC/bus -> filter/fusion.",
              "Act-out chain: PWM -> driver/H-bridge -> motor -> gearbox -> joint -> encoder.",
              "Timer capture counts encoder edges in hardware - no CPU load.",
              "Power domains: logic 3.3 V vs motor 12-48 V, isolated grounds.",
              "Pin budget: count captures, PWMs, buses first; expand via CAN if short.",
            ],
            diagram: {
              kind: "layers",
              title: "The embedded stack of a robot controller",
              caption: "Each layer assumes the one below meets its deadline - firmware sits directly on the metal.",
              layers: [
                { label: "Application / mission logic", note: "ROS 2, planner, user code" },
                { label: "Middleware / drivers", note: "ROS 2 DDS, device drivers" },
                { label: "RTOS / scheduler", note: "tasks, priorities, deadlines" },
                { label: "Peripherals", note: "ADC, PWM, timers, CAN/I2C/SPI" },
                { label: "Physical", note: "sensors, motor drivers, power" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "loop.c - the smallest robot control loop",
              code: `/* read, compute, command - every 1 ms tick */
while (1) {
    int pos = adc_read(CH_JOINT);        /* sense   */
    int err = target - pos;              /* think   */
    int u   = pid_step(err);             /* PID law */
    pwm_set(PWM_JOINT, u);               /* act     */
    wait_until_tick();                   /* deadline: 1 ms */
}`,
            },
            examQuestions: [
              {
                q: "Explain the architecture of an embedded robot controller (CPU, memory, peripherals) and describe how sensors and actuators are integrated with it, including the power-domain considerations.",
                marks: 14,
                outline: [
                  "Core + flash/SRAM; peripherals on the internal bus",
                  "ADC for analog sensors; timer capture for encoders",
                  "PWM + gate driver/H-bridge for actuators",
                  "Comms blocks: UART, I2C, SPI, CAN",
                  "Sense-in chain: transducer -> conditioning -> ADC -> filtering",
                  "Act-out chain: PWM -> driver -> motor -> gearbox -> feedback",
                  "Power domains: logic vs motor supplies, isolated grounds, noise",
                ],
              },
              {
                q: "A 4-wheel rover needs 4 encoder pairs, 4 PWM channels, an I2C IMU and a UART telemetry link. Sketch the interface budget and state the expansion path if pins run short.",
                marks: 7,
                outline: [
                  "8 timer-capture inputs for encoders",
                  "4 PWM channels to drivers",
                  "I2C (2 pins) for IMU; UART (2 pins) for telemetry",
                  "Total ~20 pins, 5 timers - fits one mid-range MCU",
                  "Overflow: CAN to satellite driver boards (architectural fix)",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Interfacing sensors",
            body: [
              "Analog sensors ride the full chain: transducer output (millivolts, resistance, current) -> signal conditioning (instrumentation amplifier, anti-aliasing filter, level shift to ADC range) -> ADC (sample and quantize) -> digital filtering in firmware -> fusion with other sensors. Digital sensors skip the analog front end: they speak a bus. Knowing which bus, and why, is the interfacing literacy this section teaches.",
              "The bus menu: UART - point-to-point, asynchronous, simple (GPS, radios, debug). I2C - two wires (SDA, SCL), multi-slave by address, 100-400 kHz - the IMU and low-rate sensor favorite. SPI - four wires, clocked, 10+ MHz - the fast local bus (high-rate ADCs, displays). CAN - differential pair, arbitrated, robust to noise - the automotive and multi-drive standard. Each trades wires, speed, distance and noise immunity; the exam wants the trade stated per bus.",
              "A worked ADC numerical: a 10-bit ADC over a 0-5 V range has 2^10 = 1024 levels, so one LSB = 5/1024 = 4.88 mV - the quantization floor no sensor quality can beat. A 12-bit ADC over a +/-10 V span: 20/4096 = 4.88 mV again, the arithmetic showing that range and resolution trade against each other. Noise improvement by oversampling: averaging 16 independent samples reduces random noise by sqrt(16) = 4x (2 effective bits) - at the cost of bandwidth, the recurring theme of this unit.",
              "Exam framing: 'explain the sensor interfacing chain and compare UART, I2C, SPI and CAN' is the standard pair, plus a small ADC numerical. Answer with the chain, the four-bus table (wires, speed, topology, use), the LSB computation with units, and the oversampling/noise-bandwidth trade as the closing insight.",
            ],
            keyTerms: [
              { term: "ADC", definition: "Analog-to-digital converter; n bits -> 2^n levels; LSB = range/2^n." },
              { term: "LSB size", definition: "The smallest voltage step the ADC can represent - the quantization floor." },
              { term: "I2C", definition: "Two-wire addressable bus, 100-400 kHz - low-rate multi-sensor favorite." },
              { term: "SPI", definition: "Four-wire clocked bus, 10+ MHz - the fast local bus." },
              { term: "CAN", definition: "Differential, arbitrated bus; robust over distance - drives and safety chains." },
            ],
            callout: {
              type: "tip",
              title: "Quantization sets the floor",
              body: "Resolution = full-scale / 2^n: a 10-bit ADC cannot see a 3 mV change on a 5 V range no matter how good the sensor. Oversampling and averaging buy effective bits (16x averaging = 4x noise reduction = 2 bits) but spend bandwidth - state both sides of that trade and the numerical is complete.",
            },
            bullets: [
              "Analog chain: transducer -> conditioning -> ADC -> digital filter -> fusion.",
              "UART: point-to-point serial - GPS, radios, console.",
              "I2C: 2 wires, addressing, 100-400 kHz - IMUs, low-rate sensors.",
              "SPI: 4 wires, 10+ MHz - fast ADCs, displays.",
              "CAN: differential, arbitrated, robust - drives, safety chains, automotive.",
              "10-bit/5 V -> 4.88 mV/LSB; averaging 16 samples -> 4x noise reduction.",
            ],
            diagram: {
              kind: "flow",
              title: "The sensor interfacing chain",
              caption: "Every analog input passes the same five gates; digital buses enter at the last one.",
              steps: [
                { label: "Transducer", note: "mV, ohms, current" },
                { label: "Conditioning", note: "amplify, filter, level-shift" },
                { label: "ADC", note: "sample + quantize" },
                { label: "Digital filter", note: "average, low-pass" },
                { label: "Fusion / state", note: "combine sensors into estimates" },
              ],
            },
            table: {
              caption: "Interfacing bus comparison.",
              headers: ["Bus", "Wires", "Speed", "Topology", "Typical use"],
              rows: [
                ["UART", "2 (TX, RX)", "kbps-Mbps", "point-to-point", "GPS, radios, console"],
                ["I2C", "2 (SDA, SCL)", "100-400 kHz", "multi-slave, addressed", "IMU, low-rate sensors"],
                ["SPI", "4 (MOSI, MISO, SCK, CS)", "10+ MHz", "master + per-device CS", "fast ADCs, displays"],
                ["CAN", "2 differential", "1 Mbps", "multimaster, arbitrated", "motor drives, safety"],
                ["Analog + ADC", "1 per channel", "sample-rate bound", "point-to-point", "pots, current sense"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the complete chain for interfacing an analog sensor to a microcontroller. Compare UART, I2C, SPI and CAN on wires, speed, topology and typical robotic use.",
                marks: 14,
                outline: [
                  "Transducer -> conditioning (amplify, filter, level-shift)",
                  "ADC: sample and quantize; n bits -> 2^n levels",
                  "Digital filtering and fusion in firmware",
                  "UART: 2-wire point-to-point - GPS, console",
                  "I2C: addressed 2-wire multi-slave, 100-400 kHz - IMU",
                  "SPI: 4-wire 10+ MHz - fast ADCs, displays",
                  "CAN: differential arbitrated bus - drives, safety chains",
                ],
              },
              {
                q: "Compute the LSB size of a 10-bit ADC on a 0-5 V range and of a 12-bit ADC on a +/-10 V range. How much does averaging 16 samples reduce random noise, and at what cost?",
                marks: 7,
                outline: [
                  "10-bit: 5/1024 = 4.88 mV per LSB",
                  "12-bit on 20 V span: 20/4096 = 4.88 mV - range vs resolution trade",
                  "Averaging N independent samples: noise / sqrt(N) = 4x",
                  "Effective bits gained: 2",
                  "Cost: bandwidth - the loop sees older data",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Interfacing actuators and drivers",
            body: [
              "MCU pins deliver milliamps at 3.3 V; motors demand amps at tens of volts - the driver is the translator between them. The building blocks: a MOSFET switch for one-directional loads, the H-bridge (four switches in an H) for direction reversal of DC motors, integrated driver ICs (L298, DRV8833 class) packing the bridge with protection, and for BLDC/AC servos the three-phase inverter with its own current-control loops. Relays isolate but are slow and mechanical; solid-state switching is the robot default.",
              "PWM is the language between firmware and driver: a fixed-frequency square wave whose duty cycle sets the average voltage - 25% of 12 V is 3 V average, hence slow rotation. Frequency choice trades audible noise and switching loss against control smoothness (kilohertz typical). The hobby servo is PWM in its purest form: a 50 Hz frame with a 1.0-2.0 ms pulse mapping to 0-180 degrees, decoded inside the servo - no driver needed, which is why prototypes love it.",
              "A worked mapping numerical and the sizing warning complete the section. Servo: angle 90 degrees -> pulse = 1000 us + 90 x (2000 - 1000)/180 = 1500 us - centre. DC motor at PWM 25%: average 3 V of 12 V. The warning that earns marks: stall current - a motor blocked at startup draws many times its running current, so drivers and supplies are sized for stall, not cruise; a driver sized to cruise crowbars the rail at every hard start. Braking (shorting the motor terminals) and freewheeling (flyback diodes) are the two closing behaviours to name.",
              "Exam framing: 'explain how actuators are interfaced to the controller: drivers, H-bridge, PWM' is the standard question, often with the servo-pulse mapping as the numerical. Answer: the pin-vs-motor gap, the H-bridge diagram (four switches, two half-bridges), PWM duty-to-voltage, the servo pulse arithmetic, and the stall-current sizing rule as the closing warning.",
            ],
            keyTerms: [
              { term: "H-bridge", definition: "Four switches driving a DC motor bidirectionally." },
              { term: "PWM duty cycle", definition: "Fraction of the period high; sets average voltage to the motor." },
              { term: "Servo pulse width", definition: "1.0-2.0 ms pulse in a 50 Hz frame maps to 0-180 degrees." },
              { term: "Motor driver IC", definition: "Integrated bridge + protection (L298, DRV8833 class)." },
              { term: "Stall current", definition: "Motor current at zero speed - the driver/supply sizing case." },
            ],
            callout: {
              type: "warning",
              title: "Size drivers for stall, not cruise",
              body: "A stalled motor draws several times its running current; a driver sized for cruise browns out or burns at every hard start. State it in every actuator-interface answer, together with flyback protection - the two sentences that show the design survives first contact with a real motor.",
            },
            bullets: [
              "Gap: MCU pin = mA at 3.3 V; motor = A at 12-48 V - drivers translate.",
              "H-bridge: four switches, two half-bridges - direction + speed.",
              "PWM: duty 25% of 12 V -> 3 V average; kHz frequencies typical.",
              "Hobby servo: 50 Hz frame; pulse 1.0-2.0 ms -> 0-180 degrees; 90 deg -> 1500 us.",
              "BLDC/AC servo: three-phase inverter with internal current loops.",
              "Stall current sizes the driver/supply; flyback diodes handle inductive kick.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From firmware pin to rotating joint",
              caption: "Every actuator command crosses the same five stages - the driver is the translation layer.",
              stages: [
                { label: "MCU PWM pin", note: "duty cycle command" },
                { label: "Gate driver / H-bridge", note: "power amplification + protection" },
                { label: "Motor", note: "electrical -> mechanical" },
                { label: "Gearbox + joint", note: "speed -> torque at the link" },
                { label: "Encoder feedback", note: "back to the MCU timer" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "servo.c - angle to pulse width",
              code: `/* hobby servo on 50 Hz PWM: 1000-2000 us maps to 0-180 deg */
int angle = 90;                                   /* degrees      */
int duty_us = 1000 + angle * (2000 - 1000) / 180; /* 1500 us      */
pwm_set_pulse_us(SERVO_PIN, duty_us);             /* centre       */

/* DC motor: 12 V rail, 25% duty -> ~3 V average */
pwm_set_duty(MOTOR_PWM, 0.25f);`,
            },
            examQuestions: [
              {
                q: "Explain the interfacing of actuators to a microcontroller: the need for drivers, the H-bridge operation, PWM speed control, and the mapping of servo pulse width to angle. Why must drivers be sized for stall current?",
                marks: 14,
                outline: [
                  "Pin (mA, 3.3 V) vs motor (A, 12-48 V) - the translation gap",
                  "H-bridge: four switches; diagonals on -> direction; duty -> speed",
                  "PWM: average voltage = duty x rail; kHz frequencies",
                  "Servo: 50 Hz frame, 1.0-2.0 ms -> 0-180 degrees; 90 deg = 1500 us",
                  "BLDC: three-phase inverter with internal current loops",
                  "Stall current >> running current - size driver and supply for stall",
                  "Flyback protection for inductive kick; braking by terminal shorting",
                ],
              },
              {
                q: "Compute the pulse width for a hobby servo at 135 degrees, and the average voltage applied to a 24 V motor at 40% duty.",
                marks: 7,
                outline: [
                  "Pulse = 1000 + 135 x 1000/180 = 1750 us",
                  "Average voltage = 0.40 x 24 = 9.6 V",
                  "Both are PWM arithmetic - units (us) stated",
                  "Frequency (50 Hz frame; kHz motor PWM) named",
                  "Driver must pass the resulting current continuously",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Real-time operation",
            body: [
              "Real-time does not mean fast; it means predictable - correctness includes the deadline. Hard real-time (a joint update 10 ms late is a fault) versus soft real-time (a late video frame is merely quality). The robot splits across the boundary: servo loops and safety chains are hard; perception and planning are soft. The enemy is jitter - the variation in loop timing - because a control law sampled irregularly behaves as if its gain and phase drift, degrading stability margins without any component failing.",
              "The scheduling toolbox: the bare-metal superloop (simple, one thing at a time, deadlines enforced by a timer flag) for small robots; the RTOS (FreeRTOS, Zephyr, PX4 ecosystem) for many concurrent tasks - tasks with priorities, preemptive scheduling, mutexes and queues, and interrupts/DMA moving data without CPU polling. The classic RTOS hazard has a name worth writing: priority inversion (a low-priority task holds a lock a high-priority task needs) - cured by priority inheritance, and famous from the Mars Pathfinder incident.",
              "A worked loop-budget numerical is the section's mark machine. A 1 kHz joint loop has a 1000 us deadline. Budget: encoder read via DMA/interrupt ~0 us CPU; PID computation for one joint ~5 us; PWM register write ~1 us; safety checks ~2 us - about 10 us of 1000, ample. Now add a blocking I2C IMU read at 400 us inside the same loop: still fits, but its jitter (I2C retries, clock stretching) eats the margin - so it moves to a lower-priority task or DMA. The discipline: budget every block, keep the hard loop lean, push everything else out of it.",
              "Exam framing: 'what is real-time operation? Explain RTOS concepts with a loop-budget calculation' is the standard 14-mark. Define hard vs soft, explain jitter's harm, describe superloop vs RTOS with priorities and priority inheritance, and run the 1000 us budget arithmetic with the blocking-I2C lesson - the numerical proves the design thinking.",
            ],
            keyTerms: [
              { term: "Hard / soft real-time", definition: "Missed deadline = fault vs missed deadline = quality loss." },
              { term: "Jitter", definition: "Timing variation of the loop; degrades control margins invisibly." },
              { term: "RTOS", definition: "Preemptive priority scheduler (FreeRTOS, Zephyr) with tasks, locks, queues." },
              { term: "Priority inversion", definition: "Low-priority task blocks a high-priority one via a shared lock; cured by inheritance." },
              { term: "DMA", definition: "Peripheral-to-memory transfer without CPU cycles - keeps loops lean." },
            ],
            callout: {
              type: "exam",
              title: "Real-time is deadlines, not speed",
              body: "Define hard vs soft in one line each, name jitter as the invisible enemy, then run the 1 kHz budget (about 10 us used of 1000). The blocking-I2C anecdote - fits, but its jitter eats the margin, so it moves out of the hard loop - is the sentence that turns a definition into an engineering answer.",
            },
            bullets: [
              "Real-time = predictable timing; hard (fault) vs soft (quality) deadlines.",
              "Jitter degrades control margins without any failure - the invisible enemy.",
              "Superloop for small robots; RTOS tasks + priorities for concurrency.",
              "Interrupts and DMA keep the hard loop lean.",
              "Priority inversion -> priority inheritance (Pathfinder story).",
              "Budget: 1 kHz = 1000 us; PID + safety ~10 us; blocking I/O moves out.",
            ],
            diagram: {
              kind: "cycle",
              title: "One tick of the hard real-time loop",
              caption: "Read, compute, command, and wait for the next deadline - every cycle, forever, on time.",
              steps: [
                { label: "Tick starts", note: "deadline clock begins" },
                { label: "Read sensors", note: "DMA / interrupt data ready" },
                { label: "Compute", note: "PID + safety checks (~10 us)" },
                { label: "Command + wait", note: "PWM written; sleep till next tick" },
              ],
            },
            table: {
              caption: "Execution platforms and their timing character.",
              headers: ["Platform", "Determinism", "Typical loop", "Role"],
              rows: [
                ["Bare-metal superloop", "excellent, simple", "1-10 kHz", "small robots, single loop"],
                ["RTOS (FreeRTOS/Zephyr)", "excellent, multi-task", "1 kHz + tasks", "production controllers"],
                ["Linux + PREEMPT_RT", "good, bounded", "100 Hz - 1 kHz", "soft-hard borderline"],
                ["ROS 2 on Linux", "soft", "10-100 Hz", "perception, planning, HMI"],
              ],
            },
            examQuestions: [
              {
                q: "Define real-time operation and distinguish hard from soft real-time. Explain jitter's effect on control, RTOS scheduling concepts including priority inversion, and prepare the timing budget of a 1 kHz joint loop.",
                marks: 14,
                outline: [
                  "Real-time: correctness includes deadlines; late = wrong",
                  "Hard: missed deadline is a fault (servo, safety); soft: quality loss",
                  "Jitter: irregular sampling degrades gain/phase margins",
                  "RTOS: preemptive priorities, mutexes, queues; interrupts + DMA",
                  "Priority inversion: low-priority lock holder blocks high; inheritance cures",
                  "Budget: 1000 us deadline; PID + checks ~10 us",
                  "Blocking I2C (400 us): fits but jitters - move to lower task/DMA",
                ],
              },
              {
                q: "Why is a blocking I2C sensor read dangerous inside a hard real-time control loop even when its duration fits the deadline?",
                marks: 7,
                outline: [
                  "Duration fits, but variation does not: retries, clock stretching",
                  "Jitter in the loop start = phase uncertainty for the control law",
                  "Worst case, not average, must fit the deadline",
                  "Fixes: lower-priority task, DMA, or interrupt-driven read",
                  "Principle: hard loops contain only deterministic work",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Programming for robot applications",
            body: [
              "Robot software is layered by language and framework: C/C++ for firmware and hard real-time loops (deterministic, close to metal); Python for perception glue, tools and rapid prototyping; and ROS/ROS 2 as the de-facto middleware binding them - a distributed graph of processes (nodes) communicating through typed messages. ROS 2 rebuilt the transport on DDS with QoS policies and real-time ambitions; ROS 1 knowledge transfers directly (same nodes/topics mental model).",
              "The ROS 2 vocabulary is small and examinable. Node: one process, one responsibility (camera driver, detector, planner, motor driver). Topic: named, typed, many-to-many pub/sub stream (sensor_msgs/Image, geometry_msgs/Twist). Service: request/response call (is the gripper closed?). Action: long-running goal with feedback and cancellation (navigate to a pose). Parameters, launch files, and the simulation stack (Gazebo) complete the toolkit; rviz visualizes it all.",
              "A worked teleoperation chain shows the wiring: a teleop node publishes cmd_vel (Twist: linear + angular) at 10 Hz; a differential-drive controller subscribes, converts (v, w) to per-wheel velocities via the kinematics v = (vl + vr)/2, w = (vr - vl)/b; a driver node PWMs the motors; joint_states flows back on its topic for odometry. Four nodes, three topics - and every concept of Units I-IV (kinematics, control, actuation) is now a message away. The minimal publisher snippet below is the kind of code the examiner may ask to read or extend.",
              "Exam framing: 'explain ROS 2 architecture (nodes, topics, services, actions) with an example application' is the standard question. Define the four primitives with one use case each, draw the teleoperation node graph, and include the (v, w) -> wheel-speed conversion as the concrete middle - it shows ROS is not decoration but the plumbing of the whole course.",
            ],
            keyTerms: [
              { term: "Node", definition: "One process with one responsibility in the ROS graph." },
              { term: "Topic", definition: "Named, typed pub/sub stream - the sensor and command plumbing." },
              { term: "Service", definition: "Synchronous request/response call - queries and configuration." },
              { term: "Action", definition: "Long-running goal with feedback and cancellation - navigation tasks." },
              { term: "cmd_vel / Twist", definition: "The standard velocity command message (linear + angular)." },
            ],
            callout: {
              type: "tip",
              title: "Topics for streams, services for questions, actions for missions",
              body: "Publish/subscribe for continuous data (images, cmd_vel, joint_states); services for quick request/response (gripper state?); actions for long goals with progress (navigate to the kitchen). Assigning the right primitive per interaction is the design mark in any ROS architecture question - a topic carrying a rare query is a design smell.",
            },
            bullets: [
              "C/C++ firmware for hard loops; Python for glue and tools; ROS 2 binds them.",
              "Node = one process, one job; topics = typed pub/sub streams.",
              "Service = request/response; action = long goal + feedback + cancel.",
              "Teleop chain: teleop -> cmd_vel (10 Hz) -> drive controller -> motors.",
              "Differential drive: v = (vl + vr)/2; w = (vr - vl)/b.",
              "Toolchain: launch files, parameters, Gazebo simulation, rviz visualization.",
            ],
            diagram: {
              kind: "flow",
              title: "The teleoperation node graph",
              caption: "Four nodes, three topics - the whole course flowing through one message chain.",
              steps: [
                { label: "/camera driver", note: "publishes images" },
                { label: "/detector", note: "publishes object pose" },
                { label: "/planner", note: "publishes cmd_vel Twist" },
                { label: "/motor driver", note: "PWMs the wheels" },
                { label: "/joint_states", note: "odometry flows back" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "teleop_node.py - a minimal ROS 2 publisher",
              code: `import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class Teleop(Node):
    def __init__(self):
        super().__init__("teleop")
        self.pub = self.create_publisher(Twist, "cmd_vel", 10)
        self.create_timer(0.1, self.tick)        # 10 Hz

    def tick(self):
        t = Twist()
        t.linear.x, t.angular.z = 0.2, 0.5       # m/s, rad/s
        self.pub.publish(t)

rclpy.init()
rclpy.spin(Teleop())`,
            },
            examQuestions: [
              {
                q: "Explain the ROS 2 software architecture: nodes, topics, services and actions. Draw the node graph of a teleoperated differential-drive robot and state the message conversion involved.",
                marks: 14,
                outline: [
                  "Node: one process, one responsibility",
                  "Topic: typed pub/sub (cmd_vel, joint_states, Image)",
                  "Service: request/response (gripper state query)",
                  "Action: long goal with feedback/cancel (navigate)",
                  "Graph: teleop -> cmd_vel 10 Hz -> drive controller -> driver -> motors",
                  "Conversion: v = (vl + vr)/2; w = (vr - vl)/b",
                  "DDS transport + QoS; Gazebo/rviz tooling",
                ],
              },
              {
                q: "Why is ROS 2 called middleware rather than an operating system, and what does DDS contribute?",
                marks: 7,
                outline: [
                  "It sits between the OS and application, connecting processes",
                  "Provides discovery, typed messaging, serialization",
                  "DDS: peer-to-peer data distribution, QoS policies",
                  "Real-time-friendly transport (ROS 2's rebuild over ROS 1)",
                  "Language-agnostic nodes composing one system",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Integration case study: a working prototype",
            body: [
              "The syllabus's last line - integration of mechanical and electrical hardware for a real prototype - is best answered with a complete worked build. Take the line-following robot: requirements first (track a 20 mm black line at 0.4 m/s, error under 2 cm, autonomous start/stop). The requirement table drives everything after it: sensing, control rate, actuation, power - every later choice traces to a stated requirement, which is exactly what the examiner's CO5 wording rewards.",
              "The build: an 8-channel IR reflectance array on I2C reads the line position every 5 ms; an STM32-class MCU computes line error and runs PID (Kp tuned by sweep to oscillation, backed off 40%, then Kd added until the wobble dies - the tuning narrative is itself examinable); PWM drives an H-bridge pair feeding two geared motors; quadrature encoders on the motor shafts give odometry for speed control; a 2S LiPo feeds motors directly and a buck regulator feeds logic; a watchdog and a hardware e-stop complete the safety chain.",
              "The verification numbers close the loop: steady-state tracking error 1.5 cm through a 0.5 m radius curve at 0.4 m/s; loop jitter under 50 us measured by GPIO toggling; motor stall current 4.2 A versus a 6 A-rated driver (the sizing check of section 5.4, now with numbers). Every subsystem's test is stated, not implied - the table maps each requirement to its verification, and that closure is the difference between a described project and an engineered one.",
              "Exam framing: 'design the control hardware and software for a line-following robot' (or a pick-and-place cell) is the unit's flagship question. Answer as: requirements -> architecture block diagram -> interface table -> control law and tuning -> verification numbers. Five moves, one page - and every unit of the course appears somewhere in it.",
            ],
            keyTerms: [
              { term: "Requirements table", definition: "Speed, accuracy, autonomy - stated first, traced last." },
              { term: "Architecture block diagram", definition: "MCU + drivers + sensors + power, drawn before wiring." },
              { term: "Tuning narrative", definition: "Kp sweep to oscillation, back off, add Kd - documented, not guessed." },
              { term: "Watchdog", definition: "Timer that resets the MCU if firmware hangs - the last-line safety net." },
              { term: "Verification", definition: "Each requirement mapped to a measured number." },
            ],
            callout: {
              type: "exam",
              title: "Answer integration as a table",
              body: "For any 'design a robot for X' question: a requirement -> component -> interface -> verification table reads as engineering maturity. Close with two measured numbers (tracking error, jitter) - the closure proves the design was tested, not just assembled, and that is precisely the CO5 mark.",
            },
            bullets: [
              "Requirements first: 0.4 m/s, < 2 cm error, autonomous start/stop.",
              "Sensing: 8-ch IR reflectance array on I2C at 5 ms tick.",
              "Control: PID on line error; Kp sweep -> back off 40% -> add Kd.",
              "Actuation: PWM -> H-bridge -> geared motors; encoders for odometry.",
              "Power: 2S LiPo for motors, buck regulator for logic, isolated grounds.",
              "Verification: 1.5 cm tracking error, < 50 us jitter, 4.2 A stall vs 6 A driver.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The integration workflow",
              caption: "Requirements to verification in five stages - the prototype is engineered, not assembled.",
              stages: [
                { label: "Requirements", note: "speed, accuracy, autonomy" },
                { label: "Architecture", note: "MCU + drivers + sensors + power" },
                { label: "Interfaces wired", note: "I2C, PWM, encoder capture" },
                { label: "Firmware + tuning", note: "PID narrative documented" },
                { label: "Field test", note: "measured numbers vs requirements" },
              ],
            },
            table: {
              caption: "Subsystem map of the line-following prototype.",
              headers: ["Subsystem", "Component", "Interface", "Verified by"],
              rows: [
                ["Sensing", "8-ch IR reflectance array", "I2C @ 200 Hz", "line error < 1.5 cm"],
                ["Control", "MCU PID loop", "5 ms tick", "jitter < 50 us"],
                ["Actuation", "H-bridge + geared motors", "PWM", "0.4 m/s achieved"],
                ["Feedback", "Quadrature encoders", "timer capture", "odometry vs measured path"],
                ["Power", "2S LiPo + buck regulator", "rails 7.4 V / 5 V / 3.3 V", "brown-out under stall"],
                ["Safety", "Watchdog + hardware e-stop", "GPIO / hardwired", "e-stop cuts drive power"],
              ],
            },
            examQuestions: [
              {
                q: "Design the control hardware and software for a line-following robot: requirements, architecture, sensor and actuator interfacing, control law with tuning procedure, and verification.",
                marks: 14,
                outline: [
                  "Requirements: 0.4 m/s, < 2 cm error, autonomous start/stop",
                  "Architecture: MCU + IR array + H-bridges + encoders + power rails",
                  "Sensing: 8-ch reflectance array on I2C, 5 ms tick",
                  "Control: PID on line error; Kp sweep -> back off -> add Kd",
                  "Actuation: PWM duty -> H-bridge -> geared motors; stall sizing 6 A",
                  "Safety: watchdog + hardwired e-stop in the drive power path",
                  "Verification: 1.5 cm tracking error, < 50 us jitter, measured",
                ],
              },
              {
                q: "What role does a watchdog timer play in a robot prototype, and how is control tuning validated rather than guessed?",
                marks: 7,
                outline: [
                  "Watchdog: hardware timer reset if firmware hangs or starves",
                  "Independent of software state - last-line safety net",
                  "Tuning validated by procedure: sweep Kp to oscillation, back off 40%",
                  "Add Kd until ringing dies; document the narrative",
                  "Verify with measured tracking error and jitter numbers",
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
        { topic: "Transforms, DH parameters, 2R forward kinematics", weight: "10-12 marks", note: "The guaranteed numerical: DH table + x = L1c1 + L2c12 with numbers." },
        { topic: "Jacobian, singularity, statics (tau = J^T f)", weight: "8-10 marks", note: "One closed form - det(J) = L1 L2 sin(theta2) - answers three questions." },
        { topic: "Control laws P, PD, PID with numericals", weight: "10-12 marks", note: "e_ss = 1/(1+Kp) and the zeta = 0.7 design appear every year in some form." },
        { topic: "Actuators: electric vs hydraulic vs pneumatic + F = P·A", weight: "8-10 marks", note: "Comparison table plus the 157 kN vs 4.7 kN numerical." },
        { topic: "Sensors: encoders, proximity, strain gauge numericals", weight: "6-8 marks", note: "4096 counts/rev -> 0.088 degrees; 1.25 mV bridge output." },
        { topic: "Vision: pinhole projection, calibration, transformation ladder", weight: "8-10 marks", note: "u = f X/Z numerical + the 3-4-6-8 DOF ladder." },
        { topic: "Euler-Lagrange dynamics", weight: "6-8 marks", note: "Structure equation + one-link pendulum derivation." },
        { topic: "Embedded architecture, interfacing, ROS 2", weight: "6-8 marks", note: "Deadline split, bus table, node graph - all diagram marks." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for derivation practice. Every numerical in this subject is short enough to re-derive by hand - DH chains, Jacobians, PID gains, cylinder forces - and hand-derivation is exactly what the mark scheme pays for.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - anatomy, classification, control basics", tasks: ["RIA definition + three tests; classify five devices", "Seven components + energy/signal chains, with sketch", "Five geometries + workspace envelope sketches", "Open vs closed loop block diagrams; 1/(1+KG) sentence", "Grubler counts: four-bar, 2R arm, slider-crank"] },
        { week: "Week 2", focus: "Unit II part 1 - transforms and DH", tasks: ["Rotation matrix properties + non-commutativity demo", "Homogeneous composition + inverse formula", "DH assignment rules; fill the 2R table", "FK numerical: (30 deg, 45 deg) -> (1.125, 1.466) m", "Write the two-line closed form from memory"] },
        { week: "Week 3", focus: "Unit II part 2 - Jacobian, singularities, dynamics", tasks: ["Derive the 2R Jacobian; apply qdot = (0.5, 0.5)", "det(J) = L1 L2 sin(theta2); near-singular speed number", "Virtual work -> tau = J^T f; compute (-14.66, -9.66) N m", "Euler-Lagrange: pendulum derivation + structure equation", "Redo all four numericals from blank paper"] },
        { week: "Week 4", focus: "Unit III - sensors and vision", tasks: ["Sensor classes + selection criteria; pick-and-place set", "Ultrasonic (5.8 ms -> 1 m) and encoder (0.088 deg) numericals", "Strain gauge chain: 500 microstrain -> 1.25 mV", "Pinhole projection: (0.5, 0.25, 4) m -> (420, 290) px", "Calibration procedure + transformation ladder 3-4-6-8"] },
        { week: "Week 5", focus: "Unit IV - control and actuation", tasks: ["First-order checkpoints; G_cl = G/(1+G)", "P: e_ss numericals; PD: design Kd for zeta = 0.7", "PID: windup + anti-windup + Ziegler-Nichols", "Computed-torque law + linearized error dynamics", "Actuator comparison + F = P·A (157 kN vs 4.7 kN)"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["MCU vs SoC deadline split; layer stack", "Bus table + ADC LSB numericals; servo pulse mapping", "1 kHz loop budget with the blocking-I2C lesson", "ROS 2 node graph + minimal publisher", "Integration case study as a table; two full model papers"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every answer with its diagram: block diagram for control, frame sketch for DH, envelope for classification, node graph for ROS. The sketch is half the marks.",
        "Write the formula before substituting in every numerical - method marks survive even when arithmetic slips.",
        "For kinematics, declare the convention first ('column vectors, right-to-left') and keep it; mixed conventions are the top mark-killer.",
        "The DH table must have exactly one variable per row - examiners scan for this before reading anything else.",
        "Quote det(J) = L1 L2 sin(theta2) once and reuse it for Jacobian, singularity and dexterity questions.",
        "In PID answers, map the terms to time (P present, I past, D future) and name anti-windup explicitly.",
        "Actuator comparisons: give the F = P·A numbers (157 kN vs 4.7 kN) - numbers beat adjectives every time.",
        "Vision numericals: state fx in pixels the moment you write K; the mm-to-px slip is the classic deduction.",
        "Time-box: 1-mark under 3 min, 7-mark under 12 min, 14-mark under 25 min - and attempt every unit's question before polishing any.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "The last day is for re-deriving the six core numericals by hand on blank sheets: 2R forward kinematics, the Jacobian with det(J), the strain-gauge chain, the PID zeta design, the cylinder force ratio, and the pinhole projection. Each takes under ten minutes once learned, and together they anchor the majority of the paper's marks. After that, skim every diagram in these notes once - envelope shapes, block diagrams, the DH frame sketch, the node graph - because sketch marks are the cheapest marks on the paper.",
        "Then close the book and restate the five one-liners the subject reduces to: feedback trades plant accuracy for loop accuracy; one DH variable per row; the Jacobian transposed is statics; cancel M, C, g then control linearly; deadlines - not speed - define real-time. If those sentences come out cleanly, the framework of every answer is already in place and the remaining hours are better spent sleeping than cramming.",
      ],
      bullets: [
        "Forgetting the factor of 2 in ultrasonic ranging (d = v t / 2) - the round trip.",
        "Quoting focal length in mm where fx must be in pixels (fx = f_mm / pixel size).",
        "Confusing a_i (along common normal) with alpha_i (between z axes) in the DH table.",
        "Claiming P control gives zero steady-state error - it halves with gain, never zeroes.",
        "Forgetting reflected inertia falls as n^2 when answering gear-ratio effects.",
        "Reading encoder resolution as 360/1024 instead of 360/4096 - quadrature multiplies by 4.",
        "Skipping the dummy-gauge/temperature point in strain-gauge answers.",
        "Missing anti-windup when listing PID limitations - the one-word cure examiners want.",
        "Saying real-time means 'fast' - it means meeting deadlines; name jitter.",
      ],
    },
  ],
};
