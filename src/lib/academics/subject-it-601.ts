import type { AcademicSubject } from "./types";

export const it601: AcademicSubject = {
  id: "it-601",
  code: "IT-601",
  title: "Computer Graphics & Multimedia",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Five units as one connected story: how displays and input hardware paint the screen, how algorithms draw lines, circles and curves pixel by pixel, how transforms clip and light a 3D world, how multimedia systems are architected, and how compression and file formats move the media.",
  description:
    "Unit I walks the graphics workstation end to end — raster and random scan displays, DVST, refresh and interlacing, colour monitors, the display processor, printers, input devices and interactive techniques. Unit II turns geometry into pixels with DDA, Bresenham's line and circle algorithms, polygon fills and Bezier/B-spline curves. Unit III transforms, projects, clips and lights: 2D/3D matrices, parallel vs perspective projections, Cohen-Sutherland and Sutherland-Hodgman clipping, hidden-surface removal, illumination and colour models. Unit IV builds the multimedia machine — components, architecture, evolving technologies, object definitions, databases, SCSI/IDE/MCI hardware and authoring tools. Unit V moves the data: lossy vs lossless compression, JPEG, MPEG, TIFF/MIDI/DIB/RTF formats, digital audio, animation and storage. Every section pairs a definition-first explanation with a worked number or algorithm trace, one diagram, a table or code sample, and the real RGPV questions it has already been asked as.",
  accentColor: "#ec4899",
  emoji: "CG",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Graphics Systems and Display Technology",
      summary:
        "Unit I grounds the subject in the machine: raster scan and random scan displays, storage tube (DVST) technology, refreshing, flickering and interlacing, colour monitors, the display processor and resolution, dot matrix / inkjet / laser printers, the full roster of interactive input devices, and the graphical input techniques — positioning, rubber banding, dragging — that make drawing interactive.",
      chapter: {
        number: "01",
        title: "The Graphics Workstation: Displays, Printers and Input",
        intro:
          "Unit I covers raster scan displays and the frame buffer, random scan and storage tube (DVST) systems, refresh and flicker, interlacing, colour CRTs, display processors and resolution, the three printer families, every input device on the syllabus, and the interactive drawing techniques.",
        inOneBreath:
          "A raster display stores the image as pixels in a frame buffer and paints it row by row at 60 Hz; a random scan redraws a display list of lines and a DVST holds its image without refreshing. Interlacing halves the scan bandwidth by painting odd and even fields alternately; shadow-mask CRTs mix colour from three guns. The display processor converts primitives into pixels; printers and input devices carry the image in and out; rubber banding and dragging give the user feedback before geometry is committed.",
        sections: [
          {
            number: "1.1",
            title: "Raster scan displays and the frame buffer",
            body: [
              "A raster scan display represents the picture as a matrix of picture elements (pixels) stored as intensity values in a dedicated block of memory called the frame buffer (or refresh buffer). The video controller reads this buffer row by row, left to right and top to bottom, converts each pixel value into an analog voltage through a digital-to-analog converter (DAC), and the electron beam paints the corresponding spot on the CRT phosphor. Because the phosphor glows only briefly, the whole buffer is re-read and repainted 60 or more times a second — the image exists as memory, not as a drawn path, which is what makes arbitrary filled areas and continuous tone possible.",
              "The frame buffer's size follows directly from resolution and colour depth. A 1024 x 768 display with 24-bit true colour needs 1024 x 768 x 3 = 2,359,296 bytes, about 2.25 MB, per full-colour frame; the same display at 8 bits per pixel (256 shades) needs only 768 KB. At a 60 Hz refresh the video controller must read 1024 x 768 x 60 = 47.2 million pixels per second — the number that dictates the memory bandwidth of any real graphics system. Aspect ratio (the ratio of width to height, 4:3 for this display) keeps squares square when the image is mapped to a physical screen.",
              "The hardware pipeline runs: application program -> display processor (scan-converts primitives and writes pixels into the buffer) -> frame buffer -> video controller + DAC -> CRT. The beam sweeps every scan line, returns during horizontal retrace at each row end and vertical retrace at frame end. Because every pixel participates in every frame, a raster display can show shaded filled polygons, images and text with equal ease — the property that made raster technology the universal choice for both graphics terminals and television.",
              "The exam asks for exactly this architecture. RGPV has asked 'Explain the architecture of a raster scan display with a neat block diagram. How is it different from a random scan display?' (May 2024, 7 marks) — so draw the five-block pipeline, label the frame buffer with a memory size, and close with the raster-vs-random contrast of section 1.2. Quoting a frame-buffer arithmetic line (resolution x bytes per pixel) earns the numerical mark most answers drop.",
            ],
            bullets: [
              "Image = matrix of pixels held as intensities in the frame buffer (refresh buffer).",
              "Video controller scans the buffer row by row; the DAC turns pixel values into beam voltage.",
              "1024 x 768 at 24 bits needs 1024 x 768 x 3 = 2.25 MB; at 60 Hz that is 47.2 M pixels/s read.",
              "Horizontal retrace between rows, vertical retrace between frames.",
              "Raster strength: filled areas, continuous tone, images — everything is pixels.",
              "Aspect ratio (e.g. 4:3) must match the screen or shapes distort.",
            ],
            keyTerms: [
              { term: "Frame buffer", definition: "The memory block holding one screen's worth of pixel intensity values, re-read every refresh cycle." },
              { term: "Pixel", definition: "The smallest addressable picture element; its stored value is the displayed intensity or colour." },
              { term: "Video controller", definition: "The hardware that generates the scan pattern, reads the frame buffer and drives the DAC and CRT sync signals." },
              { term: "Bit plane", definition: "One bit per pixel across the whole screen; N bit planes give 2^N simultaneous intensities." },
              { term: "DAC", definition: "Digital-to-analog converter turning each stored pixel value into the voltage the gun needs." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The raster display pipeline",
              caption: "From program to glowing phosphor: geometry becomes pixels in memory before it ever reaches the screen.",
              stages: [
                { label: "Application program", note: "issues primitives" },
                { label: "Display processor", note: "scan-converts to pixels" },
                { label: "Frame buffer", note: "pixel intensities in memory" },
                { label: "Video controller + DAC", note: "reads at refresh rate" },
                { label: "CRT screen", note: "beam paints scan lines" },
              ],
            },
            table: {
              caption: "Frame-buffer arithmetic — what colour depth costs at common resolutions.",
              headers: ["Colour depth", "Colours shown", "Bytes per pixel", "Memory at 1024 x 768"],
              rows: [
                ["1-bit monochrome", "2 (black, white)", "1/8", "96 KB"],
                ["8-bit grayscale", "256 shades", "1", "768 KB"],
                ["16-bit high colour", "65,536", "2", "1.5 MB"],
                ["24-bit true colour", "16.7 million", "3", "2.25 MB"],
                ["32-bit RGBA", "16.7 M + alpha", "4", "3 MB"],
              ],
            },
            callout: {
              type: "exam",
              title: "The block diagram is the mark scheme",
              body: "May 2024 asked the raster architecture with a block diagram plus the difference from random scan (7 marks). Draw program -> display processor -> frame buffer -> DAC -> CRT, annotate the frame buffer with a size, and state the contrast: raster stores every pixel, random scan redraws only lines from a display list.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of a raster scan display with a neat block diagram. How does it differ from a random scan display?",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Define raster display: pixel matrix + frame buffer, refreshed 60+ times a second",
                  "Block diagram: program -> display processor -> frame buffer -> video controller/DAC -> CRT",
                  "Scan pattern: left-right, top-bottom, horizontal and vertical retrace",
                  "Frame-buffer arithmetic: 1024 x 768 x 3 bytes = 2.25 MB at 60 Hz = 47.2 M pixels/s",
                  "Raster strengths: filled areas, continuous tone, images",
                  "Random scan contrast: display list of line endpoints, no pixel storage, wire-frame only",
                  "Raster costs: memory, bandwidth, aliasing; random scan costs: complexity, no fills",
                ],
              },
              {
                q: "A 1024 x 768 display uses 24-bit colour and refreshes at 60 Hz. Compute the frame-buffer size and the pixel read-out rate.",
                marks: 7,
                outline: [
                  "Formula first: bytes = width x height x depth / 8",
                  "Bytes per frame = 1024 x 768 x 3 = 2,359,296 bytes (about 2.25 MB)",
                  "Pixels per second = 1024 x 768 x 60 = 47.2 million",
                  "Bandwidth = 47.2 M x 3 bytes = 141.6 MB/s of frame-buffer reads",
                  "Retrace overhead means the real pixel clock runs slightly higher",
                  "8-bit depth would halve memory to 768 KB and bandwidth to 47 MB/s",
                ],
              },
              {
                q: "Define pixel, bit plane and aspect ratio, and state how they jointly determine what a raster system can display.",
                marks: 7,
                outline: [
                  "Pixel: smallest addressable picture element carrying an intensity value",
                  "Bit plane: one bit per pixel; N planes -> 2^N intensities",
                  "More bit planes -> smoother shading, more simultaneous colours",
                  "Aspect ratio: width/height of the image (4:3) must match the device",
                  "Aspect mismatch stretches or squashes shapes on screen",
                  "Fidelity needs resolution AND depth together — neither alone suffices",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Random scan, storage tube (DVST) and colour displays",
            body: [
              "A random scan (vector/calligraphic) display does not store pixels. It holds a display list — the endpoint coordinates of every line segment — and the beam retraces only those lines, in order, 30-60 times a second. Because the beam visits only drawn geometry, line drawings are razor sharp and the refresh cost depends on scene complexity, not resolution. The price: no filled areas, no continuous tone, and flicker once the display list grows beyond a few thousand segments — the CRT phosphor decays before the list finishes repainting.",
              "The direct-view storage tube (DVST) eliminates refreshing altogether. Two electron guns write onto a storage grid inside the tube; the flood gun keeps the entire written pattern glowing continuously, so the image persists without any refresh circuitry — flicker-free at any complexity. Its disadvantages are equally structural: erasing any part of the picture means erasing the whole screen and redrawing, there is no colour (one glow level), and redraw speed is slow. DVST powered early CAD terminals precisely because drawings were static and complex — exactly where refresh displays flickered.",
              "Colour in CRTs comes by two mechanisms. Beam penetration CRTs layer red and green phosphor; a slow beam penetrates to red, a fast beam excites only green, giving four colours (red, green, orange, yellow) — cheap, used for vector displays, never true colour. The shadow-mask CRT is the standard: three guns fire through a perforated metal mask onto a triad of red, green and blue phosphor dots; the three beam intensities mix additively per dot, giving millions of colours. Dot pitch (the triad spacing, 0.25-0.4 mm) limits the achievable resolution.",
              "The exam splits this section across two questions: RGPV asked 'Write short notes on random scan systems' (Jun 2025, 7 marks) and 'Describe the working of DVST with its advantages and disadvantages' (May 2024, 7 marks). Answer both as definition -> mechanism -> two strengths -> two weaknesses, and name beam penetration vs shadow mask when colour comes up — it is the distinguishing detail most answers forget.",
            ],
            bullets: [
              "Random scan holds a display list of line endpoints; the beam redraws only the lines.",
              "Sharp lines and complexity-dependent refresh; no fills, no continuous tone.",
              "DVST: two writing guns + flood gun store the image — no refresh, no flicker.",
              "DVST weaknesses: cannot erase selectively, no colour, slow redraw.",
              "Beam penetration CRT: layered phosphors, 4 colours; shadow-mask CRT: 3 guns + RGB triads, millions.",
              "Dot pitch (0.25-0.4 mm) caps shadow-mask resolution.",
            ],
            keyTerms: [
              { term: "Display list", definition: "The ordered table of line endpoints a random scan display repaints every cycle." },
              { term: "DVST", definition: "Direct-view storage tube: the CRT itself stores the image, so no refreshing is needed but nothing can be selectively erased." },
              { term: "Beam penetration", definition: "Colour CRT using layered phosphors excited at different beam voltages — four colours only." },
              { term: "Shadow mask", definition: "A perforated plate ensuring each of three beams hits only its own RGB phosphor dot — the standard colour mechanism." },
              { term: "Dot pitch", definition: "The spacing between phosphor triads; smaller pitch means sharper achievable resolution." },
            ],
            diagram: {
              kind: "compare",
              title: "Raster scan vs random scan",
              caption: "One stores every pixel and repaints the whole screen; the other stores only lines and repaints just those.",
              left: {
                heading: "Raster scan",
                items: [
                  "Frame buffer holds every pixel",
                  "Refresh cost fixed by resolution, not scene",
                  "Filled areas, images, continuous tone",
                  "Aliasing (jaggies) on lines; memory hungry",
                ],
              },
              right: {
                heading: "Random scan (vector)",
                items: [
                  "Display list holds line endpoints only",
                  "Refresh cost grows with line count — flicker risk",
                  "Sharpest possible lines; no fills or shading",
                  "Beam penetration colour at best (4 colours)",
                ],
              },
            },
            table: {
              caption: "Display technologies in one table.",
              headers: ["Technology", "Image held as", "Refresh", "Colour"],
              rows: [
                ["Raster scan CRT", "Pixel matrix in frame buffer", "60+ Hz, mandatory", "Shadow mask: millions"],
                ["Random scan CRT", "Display list of line endpoints", "30-60 Hz, list-dependent", "Beam penetration: 4"],
                ["DVST", "Stored charge inside the tube", "None — persistent", "Single colour"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two short-note favourites",
              body: "Random scan notes came in Jun 2025 and DVST with advantages/disadvantages in May 2024 (7 marks each). For DVST always write the mechanism (writing guns + storage grid + flood gun), then exactly its two famous advantages (no refresh, no flicker) and two disadvantages (no selective erase, no colour).",
            },
            examQuestions: [
              {
                q: "Write short notes on random scan systems.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: vector/calligraphic display driven by a display list of segments",
                  "Beam visits only drawn lines, repainting 30-60 times a second",
                  "Line quality: perfectly sharp, no stair-stepping",
                  "Refresh time grows with segment count — complex scenes flicker",
                  "Cannot render filled areas or continuous tone",
                  "Use: early CAD and wire-frame workstations",
                ],
              },
              {
                q: "Describe the working of DVST with a neat diagram. Write its advantages and disadvantages.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Two writing guns write the pattern onto a dielectric storage grid",
                  "Flood gun keeps the whole written image glowing — no refresh needed",
                  "Advantage: flicker-free at any drawing complexity",
                  "Advantage: high resolution line drawings at low system cost",
                  "Disadvantage: to modify anything, erase the entire screen and redraw",
                  "Disadvantage: single colour, slow redraw, no animation",
                ],
              },
              {
                q: "Compare beam penetration and shadow-mask colour CRTs with their typical applications.",
                marks: 7,
                outline: [
                  "Beam penetration: two phosphor layers, beam speed selects red/green/orange/yellow",
                  "Cheap, high resolution, only 4 colours — vector terminals",
                  "Shadow mask: three guns + perforated mask + RGB triads",
                  "Additive mixing per triad gives millions of colours",
                  "Dot pitch limits resolution; standard for all raster monitors",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Refreshing, flicker, interlacing and persistence",
            body: [
              "A CRT's phosphor emits light only for a short persistence after the beam excites it, so the image must be redrawn — refreshed — continuously. The refresh rate is the number of complete repaints per second; below the critical fusion frequency (about 50-60 Hz for most eyes) the brain perceives decay between repaints as flicker. Persistence and refresh rate trade against each other: long-persistence phosphors reduce the required refresh rate but smear moving images, which is why video monitors use short-persistence phosphors and high refresh rates.",
              "Interlacing halves the scan bandwidth: each refresh paints only the odd-numbered lines (one field), the next refresh paints only the even lines (the second field), and the two fields interleave into one perceived frame. Television standardized on it — a 625-line PAL signal delivers 50 fields (25 full frames) per second, and 525-line NTSC delivers 60 fields (30 frames) per second, over a bandwidth that a progressive scan of the same rate would double. The cost is visible on graphics: static horizontal lines shimmer, and fast motion shows comb-like field tearing — the reason computer monitors are progressive (non-interlaced).",
              "Worked numbers: a 625-line interlaced display paints 312.5 lines per field at 50 fields/s, so the line rate is 15,625 lines/s — the PAL horizontal frequency. A progressive monitor at 1024 x 768 and 60 Hz must paint 47.2 million pixels/s; an interlaced scheme painting half the lines per pass would need only half the pixel clock for the same perceived rate, which is precisely the trade television made and desktop graphics refused.",
              "The exam frames this as 'explain refreshing, flickering and interlacing' — a definition (what refresh is and why phosphor decay forces it), the fusion-frequency threshold, then interlacing's bandwidth arithmetic with the field/frame distinction. Stating that interlacing halves bandwidth but doubles artifacts, and that modern monitors are progressive, is the line that separates a complete answer from a partial one. Quote the 15,625 lines/s derivation too — the topic's one numerical, and the sentence that lands the method mark every time.",
            ],
            bullets: [
              "Phosphor decays in microseconds-to-milliseconds; refresh repaints the image continuously.",
              "Flicker appears below the critical fusion frequency (~50-60 Hz).",
              "Longer persistence lowers the needed refresh rate but smears motion.",
              "Interlacing: odd field then even field; 50+50 -> 25 PAL / 30 NTSC full frames per second.",
              "625 lines at 50 fields/s = 15,625 lines/s (PAL horizontal scan rate).",
              "Interlacing halves scan bandwidth; costs shimmer and tearing — monitors are progressive.",
            ],
            keyTerms: [
              { term: "Refresh rate", definition: "Complete repaints per second; 60 Hz or more is needed to avoid perceived flicker." },
              { term: "Persistence", definition: "How long the phosphor keeps emitting after excitation; it and refresh rate jointly set flicker." },
              { term: "Critical fusion frequency", definition: "The rate above which discrete refreshes fuse into a steady image — roughly 50-60 Hz." },
              { term: "Interlacing", definition: "Painting odd and even line fields alternately to halve bandwidth at the cost of shimmer and tearing." },
              { term: "Field", definition: "One pass of half the scan lines (odd or even) in an interlaced system; two fields make one frame." },
            ],
            diagram: {
              kind: "cycle",
              title: "The interlaced refresh cycle",
              caption: "Two half-refreshes per frame — bandwidth halved, artifacts doubled.",
              steps: [
                { label: "Paint odd field", note: "lines 1, 3, 5, ..." },
                { label: "Vertical retrace", note: "beam returns to top" },
                { label: "Paint even field", note: "lines 2, 4, 6, ..." },
                { label: "Retrace again", note: "two fields = one frame; repeat at 50-60 fields/s" },
              ],
            },
            table: {
              caption: "Standard video timing — where interlacing came from.",
              headers: ["System", "Total lines", "Fields per second", "Full frames per second"],
              rows: [
                ["PAL (India/Europe)", "625", "50 (interlaced)", "25"],
                ["NTSC (US/Japan)", "525", "60 (interlaced)", "30"],
                ["VGA progressive", "480 visible", "60 (progressive)", "60"],
                ["XGA progressive", "768 visible", "60-75 (progressive)", "60-75"],
              ],
            },
            callout: {
              type: "tip",
              title: "Interlacing is a bandwidth trick, not a quality feature",
              body: "Interlacing doubles the perceived line rate without doubling the electronics' speed — but a static horizontal line painted in only one field visibly shimmers, which is why computer monitors abandoned it. In answers, always pair the bandwidth saving with its artifact; that pairing is the mark.",
            },
            examQuestions: [
              {
                q: "What is refreshing? Explain flickering, persistence and interlacing, and derive why a 625-line PAL system scans at 15,625 lines per second.",
                marks: 7,
                outline: [
                  "Refreshing: repainting the image because phosphor emission decays",
                  "Flicker: perceived decay below the ~50-60 Hz fusion frequency",
                  "Persistence: phosphor afterglow; long persistence smears motion",
                  "Interlacing: odd field + even field interleave into one frame",
                  "PAL: 625 lines, 50 fields/s -> 312.5 lines per field",
                  "Line rate = 312.5 x 50 = 15,625 lines/s",
                  "Cost: shimmer on static lines; monitors are progressive instead",
                ],
              },
              {
                q: "Why do computer monitors use progressive (non-interlaced) scanning while television standardized on interlacing?",
                marks: 7,
                outline: [
                  "TV traded artifacts for bandwidth under tight spectrum limits",
                  "Interlaced fields halve the required pixel clock/scan electronics",
                  "Static graphics shimmer when only one field carries a line",
                  "Motion shows field tearing (comb artifacts)",
                  "Monitors could afford the bandwidth; flicker on text is unacceptable",
                ],
              },
              {
                q: "Write short notes on CRT.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Structure: electron gun, focusing/anode system, deflection system, phosphor screen",
                  "Beam strikes phosphor -> light; persistence sets the decay time",
                  "Refreshing repaints the image because phosphor emission fades",
                  "Flicker appears below the ~50-60 Hz fusion frequency",
                  "Colour: shadow mask triads (millions) or beam penetration (4)",
                  "Raster scan vs random scan drive the same tube differently",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "The display processor and resolution",
            body: [
              "The display processor (graphics coprocessor) offloads the CPU of pixel work. It receives output primitives — lines, circles, filled polygons, text — from the application, scan-converts each into pixel addresses and intensities, and writes them into the frame buffer, often with hardware support for straight line generation, area fill and bit-block transfer (bitBLT: fast copy of a rectangular pixel block for scrolling and window moves). Separate scan-out hardware — the video controller — then reads the buffer at the refresh rate, so drawing into the buffer and reading it out to the CRT proceed independently and continuously.",
              "The scan-out rate fixes the pixel clock. An 800 x 600 display at 60 Hz must deliver 800 x 600 x 60 = 28.8 million pixels per second (plus retrace overhead, so real clocks run slightly higher); a 1920 x 1080 display at the same rate needs 124 million. This is why resolution upgrades have always been bandwidth upgrades, and why the display processor, buffer memory and DAC are designed as one budget rather than three.",
              "Resolution itself has distinct meanings the examiner probes: horizontal and vertical resolution (the addressable pixel count), addressability (points the hardware can distinguish), dot pitch (physical dot spacing on the CRT), and aspect ratio. A monitor can be driven at a resolution its dot pitch cannot honour — the lines blur; matching them is the display's quality. Intensity resolution (bits per pixel) is the parallel axis in the intensity domain: more bit planes, smoother shading and more colours.",
              "In the exam this section is usually a short note or a component within the architecture question: define the display processor's three jobs (interpret primitives, scan-convert, bitBLT), separate it from the video controller's one job (scan out), and close with a pixel-clock number. The division of labour — 'processor writes pixels, controller reads them' — is the sentence that shows real understanding.",
            ],
            bullets: [
              "Display processor: interprets primitives, scan-converts, writes the frame buffer, runs bitBLT.",
              "Video controller: reads the buffer at refresh rate and generates sync + video signals.",
              "Pixel clock example: 800 x 600 x 60 = 28.8 M pixels/s; 1920 x 1080 x 60 = 124 M.",
              "Resolution = pixel count; addressability = distinguishable points; dot pitch = physical spacing.",
              "Intensity resolution = bits per pixel — bit planes decide smooth shading and colour count.",
              "Drawing and scan-out are independent: the buffer is written and read simultaneously.",
            ],
            keyTerms: [
              { term: "Display processor", definition: "The coprocessor that converts output primitives into frame-buffer pixels and accelerates fills and bitBLT." },
              { term: "Video controller", definition: "The scan-out hardware generating the refresh pattern and sync signals from the frame buffer." },
              { term: "BitBLT", definition: "Bit block transfer — a hardware copy of a rectangular pixel region, the basis of scrolling and windowing." },
              { term: "Pixel clock", definition: "The rate at which pixels are delivered to the display: resolution x refresh rate (plus retrace)." },
              { term: "Addressability", definition: "The number of distinct points the hardware can actually address and illuminate." },
            ],
            diagram: {
              kind: "flow",
              title: "What the display processor does",
              caption: "Four jobs between the application and the buffer — then scan-out takes over.",
              steps: [
                { label: "Receive primitives", note: "lines, circles, fills, text" },
                { label: "Scan-convert", note: "geometry -> pixel addresses" },
                { label: "Write frame buffer", note: "with bitBLT for moves/scrolls" },
                { label: "Hand off to video controller", note: "scan-out at refresh rate" },
              ],
            },
            table: {
              caption: "Common resolutions and what they cost the buffer (24-bit colour).",
              headers: ["Standard", "Resolution", "Frame-buffer size", "Pixels/s at 60 Hz"],
              rows: [
                ["VGA", "640 x 480", "900 KB", "18.4 M"],
                ["SVGA", "800 x 600", "1.37 MB", "28.8 M"],
                ["XGA", "1024 x 768", "2.25 MB", "47.2 M"],
                ["Full HD", "1920 x 1080", "5.9 MB", "124.4 M"],
              ],
            },
            callout: {
              type: "tip",
              title: "Two chips, two jobs",
              body: "Answers blur the display processor and the video controller into one box — that costs marks. Write the split explicitly: the processor writes pixels into the buffer (scan conversion, fills, bitBLT); the controller reads them out (refresh timing, sync generation). One writes, one reads.",
            },
            examQuestions: [
              {
                q: "Explain the functions of a display processor in a raster system and distinguish its work from that of the video controller.",
                marks: 7,
                outline: [
                  "Display processor: interprets output primitives from the application",
                  "Scan-converts geometry into pixel addresses and intensities",
                  "Performs area fill, clipping support and bitBLT block moves",
                  "Writes pixels into the frame buffer",
                  "Video controller: reads the buffer at the refresh rate",
                  "Generates horizontal/vertical sync and drives the DAC",
                  "Pixel-clock arithmetic: 800 x 600 x 60 = 28.8 M pixels/s",
                ],
              },
              {
                q: "Differentiate resolution, addressability, dot pitch and aspect ratio with one sentence each.",
                marks: 7,
                outline: [
                  "Resolution: the pixel count the system drives (1024 x 768)",
                  "Addressability: distinct points the hardware can distinguish on screen",
                  "Dot pitch: physical spacing of phosphor triads, capping sharpness",
                  "Aspect ratio: width/height proportion (4:3); mismatch distorts shapes",
                  "Intensity resolution (bits per pixel) is the parallel axis in brightness",
                  "Driving a monitor beyond its dot pitch blurs rather than sharpens",
                ],
              },
              {
                q: "Explain the architecture of a raster scan display with a neat block diagram.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Block diagram: program -> display processor -> frame buffer -> video controller/DAC -> CRT",
                  "Display processor: interprets primitives, scan-converts, fills, bitBLT",
                  "Frame buffer holds pixel intensities; size = resolution x depth",
                  "Video controller generates the scan pattern and sync; DAC converts values",
                  "Processor writes pixels while the controller reads them — independently",
                  "Pixel-clock arithmetic: 800 x 600 x 60 = 28.8 M pixels/s",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Hard-copy devices: dot matrix, inkjet and laser printers",
            body: [
              "Printers are hard-copy output devices, classified first by mechanism: impact printers strike an inked ribbon through paper (dot matrix, daisy wheel), non-impact printers form images without contact (inkjet, laser, thermal). The syllabus names three: dot matrix, inkjet and laser — and the exam answer is one mechanism paragraph per family plus a comparison table. The mechanism classes also decide the applications: impact survives wherever carbon copies matter, non-impact wins everywhere else.",
              "The dot matrix printer fires a print head of 9 or 24 spring-driven pins against a ribbon, one character row at a time. Resolution is pin-limited — 72 to 360 dots per inch — and output is noisy, but the impact copies through multi-part forms (invoices with carbon paper) and consumables are trivial, which is why it survived in billing and logistics long after quality printers became cheap. Speed is quoted in characters per second, typically 300-500 cps for a 24-pin head.",
              "The inkjet printer fires microscopic ink droplets through nozzle arrays — either heated until they pop (thermal, the HP/Canon method) or squeezed by a piezoelectric crystal (Epson). Droplet pitch sets resolution: 300 to 1440 dpi, with CMYK cartridges mixing colour. The laser printer writes a latent electrostatic image onto a charged photoreceptor drum (by sweeping a laser modulated by the rasterized page), toner sticks to the discharged regions, transfers to paper, and is fused by heat — a page-at-a-time process at 600-1200 dpi and 10-60 pages per minute.",
              "RGPV has asked this comparison as part of Unit I short notes, so build the table below and carry one worked number per printer (24 pins, 1440 dpi droplets, 1200 dpi drum). The contrast to write in the closing line: dot matrix prints character-by-character on impact, inkjet droplet-by-droplet on paper, laser page-by-page on a drum — three granularity levels of the same rasterizing idea.",
            ],
            bullets: [
              "Impact (dot matrix) vs non-impact (inkjet, laser) — the first classification line.",
              "Dot matrix: 9/24-pin head striking a ribbon; 72-360 dpi; copies through multipart forms.",
              "Inkjet: thermal or piezo nozzles fire droplets; 300-1440 dpi; CMYK colour mixing.",
              "Laser: charged drum written by modulated laser -> toner -> transfer -> heat fusion.",
              "Laser is page-at-a-time (10-60 ppm); dot matrix character-at-a-time (cps); inkjet droplet-based.",
              "Resolution units: dpi for non-impact, cps/ppm for speed comparisons.",
            ],
            keyTerms: [
              { term: "Impact printer", definition: "Forms characters by physically striking a ribbon — the dot matrix family; can copy through carbon paper." },
              { term: "Print head", definition: "The 9- or 24-pin solenoid array that fires a dot matrix printer's dots." },
              { term: "Photoreceptor drum", definition: "The charged, laser-discharged cylinder that holds the latent toner image in a laser printer." },
              { term: "Fuser", definition: "The heated rollers that melt and press toner permanently into the paper." },
              { term: "dpi", definition: "Dots per inch — the resolution unit for inkjet and laser output." },
            ],
            diagram: {
              kind: "matrix",
              title: "Where each printer sits",
              caption: "Mechanism and output granularity place the three printer families in one 2 x 2.",
              axes: { x: "Impact -> Non-impact", y: "Character-sized -> Page-sized image step" },
              quadrants: [
                { label: "Dot matrix", note: "impact, character-at-a-time, multipart copies" },
                { label: "Inkjet", note: "non-impact, droplet streams build characters and pages" },
                { label: "Laser", note: "non-impact, whole page rasterized on a drum at once" },
                { label: "Pen plotter (context)", note: "vector strokes, large sheets — graphics forebear" },
              ],
            },
            table: {
              caption: "The three syllabus printers compared.",
              headers: ["Printer", "Mechanism", "Resolution", "Best use"],
              rows: [
                ["Dot matrix", "9/24 pins strike ribbon (impact)", "72-360 dpi", "Multipart invoices, harsh environments"],
                ["Inkjet", "Thermal/piezo droplet ejection", "300-1440 dpi", "Cheap colour, photo printing"],
                ["Laser", "Charged drum + toner + fuser", "600-1200 dpi", "Office text, high volume, speed"],
              ],
            },
            callout: {
              type: "tip",
              title: "One number per printer",
              body: "Mechanism paragraphs earn the bulk of the marks, but quoting one concrete number per family — 24 pins, 1440 dpi, 1200 dpi/60 ppm — signals you know the hardware, not just the categories. Add the granularity closing line: character vs droplet vs page.",
            },
            examQuestions: [
              {
                q: "Explain the working principles of dot matrix, inkjet and laser printers, and compare them in a table with resolution and typical applications.",
                marks: 7,
                outline: [
                  "Dot matrix: pin head strikes ribbon; impact; 9/24 pins; 72-360 dpi",
                  "Strength: carbon-copy multipart forms; weakness: noise, low quality",
                  "Inkjet: thermal bubble or piezo squeezes droplets through nozzle arrays",
                  "300-1440 dpi; CMYK; cheap colour; slowish, wet output",
                  "Laser: laser discharges charged drum -> toner adheres -> transfer -> fuser",
                  "600-1200 dpi, 10-60 ppm, page-at-a-time",
                  "Close with granularity contrast: character vs droplet vs page",
                ],
              },
              {
                q: "Why can a dot matrix printer produce carbon copies while inkjet and laser printers cannot?",
                marks: 7,
                outline: [
                  "Impact mechanics: pins physically press the ribbon into all paper layers",
                  "Non-impact methods deposit ink/toner only on the top sheet",
                  "Carbon copies need mechanical pressure through the stack",
                  "Resolution penalty: impact heads cap at 72-360 dpi",
                  "Hence dot matrix survives in billing, transport tickets, logistics",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Interactive input devices",
            body: [
              "Input devices convert user actions into coordinates, choices or digitized data for the graphics program. The syllabus roster: keyboard (text and function codes), mouse (relative 2-D positioning by ball or optical sensing), trackball (an upside-down mouse — the ball is stationary and spun directly), joystick (lever with potentiometers reporting deflection; return springs centre it; 3-D versions sense twist), data tablet/digitizer (a grid-sensing surface on which a stylus or puck reports absolute positions, accuracy to 0.025 mm), scanner (sweeps CCD arrays across a document to digitize it at 600+ dpi) and digitizing camera (captures an image directly into pixel form).",
              "The positioning mode is the distinguishing property examiners look for. Mouse, trackball and joystick are relative devices — they report motion, not location, so the cursor position is the accumulation of movements. Digitizer tablets and touch screens are absolute — a position on the surface maps directly to a screen location, which is why tracing a drawing or picking menu areas uses tablets, and why CAD stations kept puck-and-tablet setups long after the mouse conquered offices. Light pens are direct screen pointing, also positional.",
              "A worked sense of scale: a 12 x 12 inch tablet digitizing at 1000 lines per inch offers 12,000 addressable positions per axis — 144 million distinct points, far finer than the screen's 1024 x 768 grid, which is exactly why tablets digitize drawings rather than merely point. A 600 dpi scanner on an 8 x 10 inch page produces 4800 x 6000 = 28.8 million samples, the raw material of scanned image files.",
              "RGPV asked 'Write in brief about various interactive input devices' (May 2024, 7 marks). The full-mark shape: one tight sentence per device naming its sensing mechanism plus its positioning mode (relative/absolute, direct/indirect), then the tablet-vs-mouse contrast as the closing observation. Do not write an essay on one device — breadth with a classification axis is what the mark scheme rewards.",
            ],
            bullets: [
              "Relative devices (mouse, trackball, joystick) report motion; position accumulates.",
              "Absolute devices (tablet, touch screen, light pen) map surface position to screen position.",
              "Trackball = stationary ball spun by hand; joystick = deflection lever with centring springs.",
              "Digitizer tablet: grid-sensing surface + stylus/puck; 1000 lpi -> 12,000 points per axis on 12 inches.",
              "Scanner: CCD sweep at 600+ dpi; digitizing camera captures images directly.",
              "Keyboard contributes text and command codes alongside every pointing device.",
            ],
            keyTerms: [
              { term: "Relative positioning", definition: "Reporting motion deltas; cursor location is the sum of movements (mouse, trackball)." },
              { term: "Absolute positioning", definition: "A physical surface position maps directly to a screen location (tablet, touch screen)." },
              { term: "Digitizer", definition: "A tablet whose embedded grid senses stylus/puck position with sub-millimetre accuracy for tracing drawings." },
              { term: "Trackball", definition: "An inverted mouse: the ball faces up and the hand spins it while the body stays fixed." },
              { term: "CCD", definition: "Charge-coupled sensor array that converts scanned or photographed light into pixel values." },
            ],
            diagram: {
              kind: "matrix",
              title: "Input devices by reference frame and signal style",
              caption: "Two axes classify every device on the syllabus — know where each sits.",
              axes: { x: "Continuous motion -> Discrete choice", y: "Relative -> Absolute position" },
              quadrants: [
                { label: "Digitizer tablet / light pen", note: "absolute + continuous — tracing and direct drawing" },
                { label: "Mouse / trackball / joystick", note: "relative + continuous — pointing by motion" },
                { label: "Touch screen", note: "absolute + discrete-ish taps — kiosks" },
                { label: "Keyboard / function keys", note: "relative + discrete — text and commands" },
              ],
            },
            table: {
              caption: "The syllabus roster in one table.",
              headers: ["Device", "Senses", "Positioning", "Typical use"],
              rows: [
                ["Keyboard", "Key presses", "discrete", "Text, commands, accelerators"],
                ["Mouse", "Ball/optical motion", "relative", "General pointing and drawing"],
                ["Trackball", "Spun stationary ball", "relative", "Constrained desks, CAD navigation"],
                ["Joystick", "Lever deflection", "relative", "Games, simulation control"],
                ["Tablet/digitizer", "Grid under stylus/puck", "absolute", "Tracing drawings, CAD digitizing"],
                ["Scanner", "CCD light sweep", "absolute (image)", "Digitizing documents and photos"],
              ],
            },
            callout: {
              type: "exam",
              title: "Breadth beats depth here",
              body: "May 2024 asked for 'various interactive input devices' in brief (7 marks). One sentence per device — mechanism plus positioning mode — covers all devices and still leaves room for the closing relative-vs-absolute observation that earns the evaluation mark.",
            },
            examQuestions: [
              {
                q: "Write in brief about various interactive input devices: keyboard, mouse, scanner, digitizing camera, track ball, tablets and joysticks.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Keyboard: text and command entry; discrete codes",
                  "Mouse: relative 2-D positioning via ball/optical sensing; buttons for picking",
                  "Trackball: stationary ball spun directly — an inverted mouse",
                  "Joystick: deflection-sensing lever, springs re-centre, used in control tasks",
                  "Tablet/digitizer: absolute grid sensing with stylus/puck; tracing accuracy",
                  "Scanner/digitizing camera: rasterize physical images into pixel arrays",
                  "Close: relative vs absolute positioning as the classification axis",
                ],
              },
              {
                q: "Compare a mouse with a digitizer tablet for entering drawings, naming the positioning mode of each.",
                marks: 7,
                outline: [
                  "Mouse: relative positioning — motion accumulates into cursor position",
                  "Tablet: absolute positioning — surface point maps to screen point",
                  "Tablet accuracy (0.025 mm, 1000 lpi) exceeds screen resolution",
                  "Tracing an existing drawing requires absolute mapping",
                  "Mouse wins for menus and windowed interaction; tablet wins for digitizing",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Graphical input techniques: positioning, rubber banding, dragging",
            body: [
              "Graphical input techniques are interaction conventions layered over raw device data so that drawing feels direct. Positioning techniques give continuous feedback of where the cursor is: a crosshair or full-screen ruler cursor plus a live coordinate readout, optionally snapped to a grid or constrained to horizontal/vertical lines (constraint techniques), or pulled toward nearby existing geometry by a gravity field so endpoints join exactly.",
              "Rubber banding stretches the entity being drawn between its fixed anchor and the moving cursor — a line, rectangle or circle visibly 'rubbers' until the user fixes the second endpoint, giving a preview of exactly what will be committed. Dragging moves a complete existing object with the cursor, showing the object at each intermediate position so placement is chosen by eye rather than by typed coordinates. Both convert a two-step act (type coordinates, then judge the result) into one continuous guided motion.",
              "The engineering value is error elimination: rubber banding and dragging let users see and correct geometry before it enters the database, while gravity and constraint techniques guarantee geometric conditions (endpoints meet, lines are orthogonal) that would otherwise be typed in numerically. RGPV asked 'Briefly explain about Rubber band techniques' (May 2024, 7 marks) — answer as definition, the anchor-cursor mechanism with a sketch, what it applies to (lines, rectangles, circles, polylines), and the benefit sentence: preview-before-commit with immediate visual feedback.",
              "Keep the family straight for the exam: positioning (where am I — cursor + readout), rubber banding (preview of the entity being drawn), dragging (preview of a whole object being moved), constraint/grid (restrict freedom to useful values), gravity (snap to nearby entities), and inking (freehand stroke capture). Each is one technique with one feedback picture — naming the feedback is what distinguishes them in an answer.",
            ],
            bullets: [
              "Positioning: crosshair cursor + coordinate readout gives continuous location feedback.",
              "Rubber banding: entity stretches from fixed anchor to moving cursor until committed.",
              "Dragging: whole object moves with the cursor — placement chosen visually.",
              "Constraint/grid techniques: force horizontal/vertical lines or fixed grid steps.",
              "Gravity field: cursor snaps to nearby endpoints, guaranteeing exact joins.",
              "Common benefit: preview before commit — errors fixed before entering the data structure.",
            ],
            keyTerms: [
              { term: "Rubber banding", definition: "Stretching the entity being drawn between its anchor and the cursor as live preview." },
              { term: "Dragging", definition: "Moving an entire object with the cursor, showing it at each intermediate position." },
              { term: "Gravity field", definition: "A neighbourhood around existing geometry that pulls the cursor to snap onto it." },
              { term: "Constraint technique", definition: "Restricting input freedom — horizontal/vertical only, fixed angles, grid steps." },
              { term: "Positioning technique", definition: "The cursor-and-readout convention telling the user exactly where the next point will land." },
            ],
            diagram: {
              kind: "fork",
              title: "Feedback techniques while drawing",
              caption: "Every good technique shows the result before it is committed; the failure mode is committing blind.",
              start: "User is drawing or moving geometry",
              branches: [
                { label: "Rubber band", outcome: "line/rect stretches to cursor — preview before commit", good: true },
                { label: "Dragging", outcome: "object travels with cursor — placement by eye", good: true },
                { label: "Gravity + constraint", outcome: "snaps to endpoints, orthogonal lines — exact joins", good: true },
                { label: "Type coordinates blind", outcome: "no feedback — misplacement found only after commit", good: false },
              ],
            },
            table: {
              caption: "Technique -> what the user sees -> what it guarantees.",
              headers: ["Technique", "User sees", "Guarantees"],
              rows: [
                ["Positioning", "Crosshair cursor + live coordinates", "Know exactly where the next point lands"],
                ["Rubber band", "Entity stretching to the cursor", "Length/shape reviewed before commit"],
                ["Dragging", "Object moving with the cursor", "Placement judged visually, instantly"],
                ["Grid/constraint", "Cursor snapping to grid/axes", "Orthogonal or quantized geometry"],
                ["Gravity", "Cursor pulled to nearby entity", "Endpoints join existing geometry exactly"],
              ],
            },
            callout: {
              type: "exam",
              title: "The May 2024 rubber band question",
              body: "RGPV asked it directly (7 marks): define rubber banding, sketch anchor + stretching line to cursor, list what it applies to (line, rectangle, circle, polyline), and close with preview-before-commit. Pairing it with dragging in one answer shows the family, not just one trick.",
            },
            examQuestions: [
              {
                q: "Briefly explain about rubber band techniques.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Definition: entity under construction stretches from a fixed anchor to the cursor",
                  "Mechanism: redraw the entity each mouse move — old line erased, new line drawn",
                  "Applies to lines, rectangles, circles, polylines",
                  "User sees exact geometry before committing the second endpoint",
                  "Benefit: immediate visual feedback; errors corrected pre-commit",
                  "Contrast with dragging: rubber band creates, dragging relocates",
                ],
              },
              {
                q: "Explain positioning, dragging and gravity-field techniques, and state what each guarantees the user.",
                marks: 7,
                outline: [
                  "Positioning: crosshair + readout — knows the landing point",
                  "Dragging: object follows cursor — placement judged by eye",
                  "Gravity: cursor snaps to nearby geometry — exact joins",
                  "Constraint/grid: restricts to orthogonal or quantized steps",
                  "All are preview-before-commit conventions over raw device data",
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
      title: "Scan Conversion: Lines, Circles and Curves",
      summary:
        "Unit II is the algorithmic core: how continuous geometry becomes discrete pixels — image representation and scan conversion itself, simple DDA and Bresenham's line algorithms, circle drawing by the general method and symmetric DDA, the midpoint/Bresenham circle algorithm, polygon filling with boundary-fill and flood-fill, and parametric curves with the Bezier and B-spline methods.",
      chapter: {
        number: "02",
        title: "Drawing on the Pixel Grid",
        intro:
          "Unit II covers image representation and scan conversion, the DDA and Bresenham line algorithms with their decision parameters, circle drawing by general method, symmetric DDA and the midpoint/Bresenham algorithm, polygon fill techniques, and parametric curves — Bezier and B-spline.",
        inOneBreath:
          "Scan conversion rounds continuous geometry onto the integer pixel grid: DDA increments with the slope but pays for floating-point rounding; Bresenham replaces it with an integer decision parameter that picks east or south-east each step. Circles exploit 8-way symmetry — compute one octant, reflect to eight — with the midpoint decision parameter d = 3 - 2r driving the choice. Boundary-fill and flood-fill seed from inside a region and grow to the boundary; Bezier curves interpolate endpoints with Bernstein weights under global control, while B-splines trade endpoint interpolation for local control.",
        sections: [
          {
            number: "2.1",
            title: "Image representation and scan conversion",
            body: [
              "A digital image is a rectangular matrix of pixels, each holding a numeric intensity or colour value; a bitmap stores one bit per pixel (two tones), a pixmap stores several bits per pixel for greyscale or colour. Representation is therefore a resolution-times-depth contract: 640 x 480 at 8 bits occupies 307,200 bytes; the same array at 24 bits occupies 921,600 bytes. The vector alternative stores geometry (endpoints, radii, control points) and renders it on demand — the tension between the two representations runs through the whole subject.",
              "Scan conversion is the process of deciding which pixels best represent a continuous primitive — a line from (x1, y1) to (x2, y2), a circle of radius r — on the integer grid. Every algorithm in this unit is a scan conversion strategy differing in how it chooses: DDA accumulates floating-point slope steps, Bresenham accumulates an integer error, midpoint tests the pixel grid's own midpoints. The unavoidable consequence of sampling continuous geometry at discrete points is aliasing: lines render with stair-step 'jaggies' and thin details drop out, because a one-pixel-wide line either covers a pixel or does not.",
              "Anti-aliasing attacks the sampling error directly: supersampling renders at 2-4x resolution and averages down (each screen pixel takes a fractional intensity from how many subpixels it covered); intensity weighting dims edge pixels by their partial coverage so the staircase fades into greyscale. Both cost extra computation and memory bandwidth, which is why hardware AA became standard only when fill rates made supersampling affordable.",
              "Examiners open this unit with definitions: 'image representation', 'scan conversion', 'aliasing' — each is a two-sentence answer with one number (bytes per frame) or one picture (the staircase). The worked habit to carry: convert resolution x depth into bytes instantly, because three separate RGPV answers need that arithmetic as their opening line. Keep the bitmap, pixmap and vector definitions equally sharp — the examiner rotates among them, and each needs only its one-line mechanism.",
            ],
            bullets: [
              "Image = pixel matrix; bitmap = 1 bit/pixel (2 tones), pixmap = multi-bit (grey/colour).",
              "640 x 480 x 8 bits = 307,200 bytes; at 24 bits = 921,600 bytes — resolution x depth = memory.",
              "Scan conversion: choose the best integer pixels to represent a continuous primitive.",
              "Aliasing: stair-step jaggies and dropped thin details — inherent to grid sampling.",
              "Anti-aliasing: supersample and average, or dim edge pixels by partial coverage.",
              "Vector representation stores geometry; raster stores results — rendering bridges them.",
            ],
            keyTerms: [
              { term: "Bitmap", definition: "A one-bit-per-pixel image array — black/white only; a pixmap extends it to grey or colour values." },
              { term: "Scan conversion", definition: "Deciding which pixels best represent a continuous geometric primitive on the integer grid." },
              { term: "Aliasing", definition: "The stair-step and drop-out artifacts caused by sampling continuous geometry at discrete pixels." },
              { term: "Supersampling", definition: "Rendering at higher resolution and averaging down so edges take fractional intensities." },
              { term: "Intensity weighting", definition: "Anti-aliasing by dimming edge pixels in proportion to the area the primitive actually covers." },
            ],
            diagram: {
              kind: "layers",
              title: "Pixel depth stacks",
              caption: "Index 0 is the top layer: each level down doubles the information stored per pixel.",
              layers: [
                { label: "1-bit bitmap", note: "two tones — line art, fax" },
                { label: "8-bit greyscale", note: "256 shades — scans, medical images" },
                { label: "24-bit true colour", note: "8 bits each for R, G, B — 16.7 million colours" },
                { label: "32-bit RGBA", note: "24-bit colour plus an alpha channel for compositing" },
              ],
            },
            table: {
              caption: "Representation terms the examiner defines through you.",
              headers: ["Term", "What is stored", "Typical use"],
              rows: [
                ["Bitmap", "1 bit per pixel", "Line art, masks, fax"],
                ["Grayscale pixmap", "8 bits per pixel", "Scans, photographs in B/W"],
                ["Colour pixmap", "24 bits per pixel", "True-colour images, frame buffers"],
                ["Vector description", "Endpoints, radii, control points", "CAD, fonts, drawings — resolution independent"],
              ],
            },
            callout: {
              type: "tip",
              title: "The two-line memory formula",
              body: "Every representation answer opens with bytes = width x height x depth/8. Say it for one example (640 x 480 x 24 = 921,600 bytes) and the numerical mark is banked before you explain anything else.",
            },
            examQuestions: [
              {
                q: "What is meant by image representation? Explain bitmap, pixmap and vector representations with the memory each needs for a 640 x 480 image at 8-bit and 24-bit depth.",
                marks: 7,
                outline: [
                  "Digital image = matrix of pixels with numeric intensities",
                  "Bitmap: 1 bit/pixel; pixmap: multi-bit intensities",
                  "8-bit case: 640 x 480 x 1 = 307,200 bytes",
                  "24-bit case: 640 x 480 x 3 = 921,600 bytes",
                  "Vector stores geometry and renders on demand — resolution independent",
                  "Trade-off: raster fixed cost, vector render cost",
                ],
              },
              {
                q: "Write short notes on applications of visualization.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Visualization renders data as images a human reads at a glance",
                  "Medical imaging: CT/MRI volume rendering for diagnosis",
                  "Scientific visualization: fluid flow, weather systems, molecular models",
                  "Entertainment: animation, special effects, games",
                  "CAD and design: engineering drawings, simulated prototypes",
                  "Education and information graphics: charts, simulated experiments",
                ],
              },
              {
                q: "Define scan conversion and aliasing. Explain two anti-aliasing techniques and their costs.",
                marks: 7,
                outline: [
                  "Scan conversion: mapping continuous primitives onto the integer pixel grid",
                  "Aliasing: stair-step jaggies and dropped thin features from discrete sampling",
                  "Supersampling: render 2-4x resolution, average subpixel coverage down",
                  "Intensity weighting: dim edge pixels by partial coverage",
                  "Costs: extra memory bandwidth and computation per frame",
                  "Hardware AA became standard only when fill rates allowed supersampling",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Line drawing I — the simple DDA algorithm",
            body: [
              "The Digital Differential Analyzer (DDA) is the most direct scan-conversion method for a line: it follows the line's slope incrementally. Given endpoints (x1, y1) and (x2, y2), compute dx = x2 - x1 and dy = y2 - y1; the number of steps is the larger magnitude, steps = max(|dx|, |dy|); then x-increment = dx/steps and y-increment = dy/steps. Each iteration adds the increments and rounds to the nearest integer pixel — so a unit step in the driving axis produces a slope-sized step in the other, accumulating the true line in floating point.",
              "Worked example — the RGPV question: plot the line from (1, 1) to (5, 5). Here dx = 4, dy = 4, so steps = 4, x-increment = 1, y-increment = 1. The iterations produce (2, 2), (3, 3), (4, 4), (5, 5) — a perfect diagonal needing no rounding. For a shallower line, say (0, 0) to (5, 2): steps = 5, y-increment = 0.4, giving y-values 0.4, 0.8, 1.2, 1.6, 2.0 which round to pixels (1, 0), (2, 1), (3, 1), (4, 2), (5, 2) — the algorithm always steps along the axis with the larger delta and rounds the other.",
              "DDA's simplicity is also its cost: every step needs floating-point addition plus a rounding operation, and rounding errors accumulate along long lines so the drawn endpoint can drift from the requested one. It draws correctly for any slope (unlike naive versions that fix the driving axis), but it never beats Bresenham, which achieves the same pixels with integers alone — the comparison the examiner always requests next.",
              "The exam angle is numerical: 'Plot a line from (1, 1) to (5, 5) using DDA' (May 2024, 7 marks) wants the three computed constants (steps, x-increment, y-increment) and the iteration table. Write the table even for the trivial diagonal — the marker is checking method, not the four obvious points. State steps, both increments, and every intermediate pixel; omitting any of the three reads as a memorized answer.",
            ],
            bullets: [
              "DDA: steps = max(|dx|, |dy|); increments = dx/steps, dy/steps; round each step.",
              "Worked: (1,1) -> (5,5): steps 4, increments 1,1 — points (2,2), (3,3), (4,4), (5,5).",
              "Shallower line (0,0) -> (5,2): y-increment 0.4 rounds to pixels (1,0), (2,1), (3,1), (4,2), (5,2).",
              "Floating-point add + round at every step — slower than integer arithmetic.",
              "Rounding error accumulates on long lines; endpoint can drift.",
              "Works for any slope if the driving axis is chosen as the larger delta.",
            ],
            keyTerms: [
              { term: "DDA", definition: "Digital Differential Analyzer — incremental line rasterization using slope-derived floating-point steps." },
              { term: "Driving axis", definition: "The axis with the larger delta; it advances by exactly 1 each iteration." },
              { term: "Steps", definition: "max(|dx|, |dy|) — the number of pixels the line will occupy along its longer dimension." },
              { term: "Increment", definition: "dx/steps or dy/steps — the sub-unit advance added per iteration in the non-driving axis." },
              { term: "Rounding error", definition: "Drift introduced by repeatedly rounding floating-point accumulators to integers." },
            ],
            diagram: {
              kind: "flow",
              title: "The DDA loop",
              caption: "Five steps from two endpoints to a plotted line.",
              steps: [
                { label: "Read endpoints", note: "(x1, y1), (x2, y2)" },
                { label: "Compute deltas", note: "dx, dy" },
                { label: "Choose steps", note: "max(|dx|, |dy|)" },
                { label: "Increments", note: "dx/steps, dy/steps" },
                { label: "Iterate", note: "add, round, plot — steps times" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "dda.c — simple DDA line rasterizer",
              code: `#include <stdio.h>
#include <math.h>

void ddaLine(int x1, int y1, int x2, int y2) {
    int dx = x2 - x1, dy = y2 - y1;
    int steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy);
    float xi = (float)dx / steps;      /* increment per step */
    float yi = (float)dy / steps;
    float x = x1, y = y1;
    for (int k = 0; k <= steps; k++) {
        printf("(%d, %d)\\n", (int)round(x), (int)round(y));
        x += xi;  y += yi;
    }
}

int main(void) { ddaLine(1, 1, 5, 5); return 0; }`,
            },
            callout: {
              type: "exam",
              title: "Show the iteration table",
              body: "May 2024 asked the (1,1) -> (5,5) plot (7 marks). Bank the marks with: steps = max(4,4) = 4, increments = 1 and 1, then the point list (2,2), (3,3), (4,4), (5,5). Even trivial traces must be written out — the method is the answer.",
            },
            examQuestions: [
              {
                q: "Plot a line from (1, 1) to (5, 5) using DDA algorithm.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "dx = 4, dy = 4; steps = max(4, 4) = 4",
                  "x-increment = 4/4 = 1; y-increment = 4/4 = 1",
                  "Start pixel (1, 1)",
                  "Iteration 1: (2, 2); iteration 2: (3, 3)",
                  "Iteration 3: (4, 4); iteration 4: (5, 5)",
                  "Diagonal line needs no rounding — all increments integral",
                ],
              },
              {
                q: "Explain the DDA line algorithm for slopes less than 1 and greater than 1, and state its two drawbacks against Bresenham's algorithm.",
                marks: 7,
                outline: [
                  "Compute dx, dy; steps = max(|dx|, |dy|)",
                  "Driving axis advances by 1; other axis by dx/steps or dy/steps",
                  "Slope < 1: step in x, accumulate y; slope > 1: step in y, accumulate x",
                  "Drawback 1: floating-point add + round each iteration — slower than integers",
                  "Drawback 2: rounding error accumulates over long lines",
                  "Bresenham reaches the same pixels with integer-only decisions",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Line drawing II — Bresenham's algorithm and its decision parameter",
            body: [
              "Bresenham's line algorithm selects each successive pixel using an integer decision parameter that accumulates the error between the true line and the pixel chosen so far — no floating point, no rounding, only integer additions and comparisons. For a line with slope 0 < m < 1, at each step the choice is between the east pixel (x + 1, y) and the north-east pixel (x + 1, y + 1); the decision parameter p_k records which candidate lies closer to the ideal line at the midpoint.",
              "The derivation: the ideal line satisfies y = m x + c; the two candidates at x = x_k + 1 differ from it by d1 = m(x_k + 1) + c - y_k and d2 = (y_k + 1) - m(x_k + 1) - c. Their difference d1 - d2 = m(2x_k + 2) - 2y_k + 2c - 1 depends only on known quantities; multiplying by dx clears the fraction m = dy/dx and leaves an integer decision parameter p_k. Its increments are constants: p_{k+1} = p_k + 2 dy for east (p_k < 0) and p_{k+1} = p_k + 2 dy - 2 dx for north-east (p_k >= 0), with initial p_0 = 2 dy - dx.",
              "Worked trace — line (0, 0) to (5, 2): dx = 5, dy = 2, p_0 = 2(2) - 5 = -1. p_0 < 0 -> plot (1, 0), p_1 = -1 + 4 = 3. p_1 >= 0 -> plot (2, 1), p_2 = 3 + 4 - 10 = -3. p_2 < 0 -> plot (3, 1), p_3 = -3 + 4 = 1. p_3 >= 0 -> plot (4, 2), p_4 = 1 + 4 - 10 = -5. p_4 < 0 -> plot (5, 2). Five decisions, five integer updates, exact endpoints — the same pixels DDA would produce, at a fraction of the arithmetic.",
              "The exam has asked this three ways: 'Derive the decision parameter used in Bresenham's Line Drawing Algorithm' (Dec 2024, 7 marks), 'Explain Bresenham's line drawing algorithm with example' (May 2024, 7 marks), and 'Explain about different line drawing algorithms' (Dec 2024, 7 marks). The derivation paragraph plus the p-table trace answers all three; keep d1 - d2, the multiplication by dx, and both increment rules visible — those are the lines the marker scans for.",
            ],
            bullets: [
              "Decision parameter p_k accumulates the integer error between true line and chosen pixel.",
              "Choice per step: east (x+1, y) vs north-east (x+1, y+1) for 0 < m < 1.",
              "p_0 = 2 dy - dx; p < 0 -> east, p += 2 dy; p >= 0 -> north-east, p += 2(dy - dx).",
              "Trace (0,0) -> (5,2): p = -1, 3, -3, 1, -5 -> pixels (1,0), (2,1), (3,1), (4,2), (5,2).",
              "Integer-only: additions, shifts and comparisons — fast in hardware and software.",
              "Symmetric handling: swap roles of x and y for |m| > 1; mirror signs for other octants.",
            ],
            keyTerms: [
              { term: "Decision parameter", definition: "The integer p_k tracking accumulated vertical error; its sign selects east or north-east." },
              { term: "East / north-east choice", definition: "The two candidate pixels at each step when 0 < m < 1." },
              { term: "Increment rule", definition: "p += 2 dy (east) or p += 2 dy - 2 dx (north-east) — constants, computed once." },
              { term: "Integer arithmetic", definition: "Bresenham's defining property: no floats, no rounding — only adds and sign tests." },
              { term: "Octant handling", definition: "Mirror/swap logic that reduces all slopes to the canonical 0 < m < 1 case." },
            ],
            diagram: {
              kind: "compare",
              title: "DDA vs Bresenham",
              caption: "Same pixels, different arithmetic — the contrast RGPV asks for by name.",
              left: {
                heading: "Simple DDA",
                items: [
                  "Floating-point slope increments",
                  "Round every step",
                  "Rounding error accumulates",
                  "Simple to derive, slower to run",
                ],
              },
              right: {
                heading: "Bresenham",
                items: [
                  "Integer decision parameter",
                  "Sign test replaces rounding",
                  "No accumulated drift; exact endpoints",
                  "Constants precomputed — fastest incremental method",
                ],
              },
            },
            codeExample: {
              language: "c",
              caption: "bresenham.c — integer-only line drawing (0 < m < 1 case)",
              code: `#include <stdio.h>

void bresenhamLine(int x1, int y1, int x2, int y2) {
    int dx = x2 - x1, dy = y2 - y1;
    int p = 2 * dy - dx;          /* initial decision parameter */
    int y = y1;
    for (int x = x1; x <= x2; x++) {
        printf("(%d, %d)\\n", x, y);
        if (p < 0) {
            p += 2 * dy;              /* east pixel */
        } else {
            y++;                      /* north-east pixel */
            p += 2 * (dy - dx);
        }
    }
}

int main(void) { bresenhamLine(0, 0, 5, 2); return 0; }`,
            },
            callout: {
              type: "exam",
              title: "The derivation is the question",
              body: "Dec 2024 asked to 'derive the decision parameter' (7 marks) and May 2024 asked the algorithm with example. Write d1 - d2 for the two candidates, multiply through by dx to clear the fraction, then state p_0 = 2 dy - dx with both update rules — and close with the five-row trace table.",
            },
            examQuestions: [
              {
                q: "Derive the decision parameter used in Bresenham's Line Drawing Algorithm.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Ideal line: y = m x + c; candidates east (x+1, y) and north-east (x+1, y+1)",
                  "d1 = m(x+1) + c - y; d2 = y + 1 - m(x+1) - c",
                  "d1 - d2 = m(2x + 2) - 2y + 2c - 1 — the closeness test",
                  "Multiply by dx to remove the fraction m = dy/dx -> integer p",
                  "p_0 = 2 dy - dx (from substituting the first point)",
                  "Update: p += 2 dy if p < 0 (east); p += 2(dy - dx) if p >= 0 (north-east)",
                  "All quantities integer — no rounding anywhere",
                ],
              },
              {
                q: "Explain Bresenham's line drawing algorithm with example.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Goal: rasterize a line with integer arithmetic only",
                  "Decision parameter p tracks error; sign picks east vs north-east",
                  "p_0 = 2 dy - dx; updates are constants 2 dy and 2(dy - dx)",
                  "Trace (0,0) -> (5,2): p = -1, 3, -3, 1, -5",
                  "Pixels plotted: (1,0), (2,1), (3,1), (4,2), (5,2)",
                  "Exact endpoints, no drift, minimal arithmetic",
                ],
              },
              {
                q: "Explain the different line drawing algorithms and compare their costs.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Direct equation method: compute y = m x + c per x — multiply each step",
                  "DDA: incremental float adds + rounding per step",
                  "Bresenham: integer decision parameter, adds and sign tests only",
                  "Cost ladder: multiplies -> float-adds+rounds -> integer-adds",
                  "Bresenham exactness: no accumulated drift; DDA may drift",
                  "All three produce the same pixel set for shallow lines",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Circle drawing — general method, symmetric DDA and the midpoint algorithm",
            body: [
              "Circle rasterization picks the pixel sequence along x^2 + y^2 = r^2. The general (polynomial) method walks x from 0 to r computing y = sqrt(r^2 - x^2) — simple, but the square root is expensive, spacing becomes uneven as the curve steepens, and gaps appear for large radii unless extra points are added. The trigonometric alternative x = r cos(theta), y = r sin(theta) spaces points evenly but pays a sine and cosine per point — better uniformity, worse cost. Neither direct method survives into production code; both are the baseline the incremental methods improve on.",
              "Symmetric DDA cuts the cost with an incremental rotation: choose delta so epsilon = 2^n x delta gives epsilon r ~ 10^-4, then update x_{k+1} = x_k + r delta y_k and y_{k+1} = y_k - r delta x_k — epsilon a power of two makes the multiplies shifts. The bigger win is 8-way symmetry: the circle is symmetric about both axes and the line y = x, so computing the arc from x = 0 to x = y (one octant) determines eight pixels per computed point — a 22x saving at r = 100. Symmetric DDA's known defect is drift: the incremental rotation slowly departs from true circularity over long arcs, the flaw the midpoint criterion eliminates.",
              "The midpoint (Bresenham) circle algorithm replaces relative increments with an absolute test. Walk the first octant from (0, r), choosing between the east pixel E = (x + 1, y) and the south-east pixel SE = (x + 1, y - 1) by evaluating the circle function f(x, y) = x^2 + y^2 - r^2 at their midpoint (x + 1, y - 1/2): f < 0 means the midpoint is inside, so E is closer; otherwise SE is. Absorbing the half-integers gives the integer form d_0 = 3 - 2r with constant updates — d += 4x + 6 for east, d += 4(x - y) + 10 for south-east — integer additions only, no sqrt, no floats.",
              "Worked trace for radius 5 — the exact RGPV request: d_0 = 3 - 10 = -7, plot (0, 5). d < 0 -> E: (1, 5), d = -1. d < 0 -> E: (2, 5), d = -1 + 10 = 9. d >= 0 -> SE: (3, 4), d = 9 - 12 + 10 = 7. d >= 0 -> SE: (4, 3), d = 13. The octant points (0,5), (1,5), (2,5), (3,4), (4,3) reflect eight ways to the full circle. The papers asked this in May 2024, Dec 2024 and Jun 2025 (7 marks each) — memorize d_0, both updates, and this trace as one prepared block.",
            ],
            bullets: [
              "Polynomial method: y = sqrt(r^2 - x^2) — expensive sqrt, uneven spacing near y = r.",
              "Symmetric DDA: incremental rotation with epsilon r ~ 10^-4; multiplies become shifts when epsilon = 2^n.",
              "8-way symmetry: one octant (x = 0 to x = y) yields eight reflected pixels per point.",
              "Midpoint test: f(x, y) = x^2 + y^2 - r^2 evaluated at (x + 1, y - 1/2).",
              "Integer form: d_0 = 3 - 2r; E: d += 4x + 6; SE: d += 4(x - y) + 10.",
              "Trace r = 5: d = -7, -1, 9, 7, 13 -> pixels (0,5), (1,5), (2,5), (3,4), (4,3).",
            ],
            keyTerms: [
              { term: "Polynomial method", definition: "Circle rasterization by y = sqrt(r^2 - x^2) — direct but sqrt-bound and unevenly spaced." },
              { term: "Symmetric DDA", definition: "Incremental rotation of the radius point using a small angle step; multiplies reduce to shifts." },
              { term: "8-way symmetry", definition: "Reflecting each computed octant point to eight positions via the circle's symmetries." },
              { term: "Midpoint criterion", definition: "Evaluate the circle function halfway between the two candidate pixels; its sign picks the closer one." },
              { term: "Decision parameter d", definition: "The integer form of the midpoint test: d_0 = 3 - 2r with constant integer updates." },
            ],
            diagram: {
              kind: "flow",
              title: "The midpoint circle loop",
              caption: "One decision per octant pixel; symmetry does the rest of the circle.",
              steps: [
                { label: "Initialize", note: "x = 0, y = r, d = 3 - 2r" },
                { label: "Plot 8 reflections", note: "of (x, y) about the centre" },
                { label: "Test d", note: "d < 0 -> E, else SE" },
                { label: "Update", note: "d += 4x + 6 or d += 4(x - y) + 10" },
                { label: "Repeat", note: "until x >= y — octant complete" },
              ],
            },
            table: {
              caption: "One computed point (x, y) in the first octant, and the eight pixels it generates.",
              headers: ["Reflection applied", "Pixel(s) generated", "Symmetry axis"],
              rows: [
                ["Original octant point", "(x, y)", "arc x = 0 to x = y"],
                ["Swap x and y", "(y, x)", "line y = x"],
                ["Negate x", "(-x, y) and (-y, x)", "y-axis"],
                ["Negate y", "(x, -y) and (y, -x)", "x-axis"],
                ["Negate both", "(-x, -y) and (-y, -x)", "origin"],
              ],
            },
            codeExample: {
              language: "c",
              caption: "midcircle.c — midpoint circle, radius 5 trace included",
              code: `#include <stdio.h>

void midpointCircle(int r) {
    int x = 0, y = r, d = 3 - 2 * r;
    while (x <= y) {
        printf("(%d, %d) d=%d\\n", x, y, d);
        /* plot 8 symmetric points about the centre here */
        if (d < 0) {
            d += 4 * x + 6;             /* east */
        } else {
            d += 4 * (x - y) + 10;      /* south-east */
            y--;
        }
        x++;
    }
}

int main(void) { midpointCircle(5); return 0; }`,
            },
            callout: {
              type: "exam",
              title: "Asked in all three papers",
              body: "Midpoint/Bresenham circle appeared in May 2024 (draw radius 5), Dec 2024 (with example) and Jun 2025 (with example) — the single most repeated algorithm question in this subject. Prepare d_0 = 3 - 2r, both updates, and the r = 5 trace as one memorized block; add the polynomial and symmetric DDA one-liners for the 'methods' variants.",
            },
            examQuestions: [
              {
                q: "Explain the general method and symmetric DDA for circle generation, with their strengths and weaknesses.",
                marks: 7,
                outline: [
                  "General/polynomial: y = sqrt(r^2 - x^2), x from 0 to r",
                  "Weaknesses: sqrt cost, uneven spacing near vertical tangent, gaps at large r",
                  "Trigonometric variant: even spacing but trig per point",
                  "Symmetric DDA: incremental rotation with epsilon = 2^n delta, epsilon r ~ 10^-4",
                  "Updates x += r delta y, y -= r delta x; shifts when epsilon is a power of two",
                  "8-way symmetry cuts work to one octant (x = 0 to x = y)",
                  "Flaw: drift accumulates over long arcs — fixed by the midpoint criterion",
                ],
              },
              {
                q: "Explain briefly about Bresenham's circle drawing algorithm with example.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Walk the first octant from (0, r) using an integer decision parameter",
                  "Midpoint test between E (x+1, y) and SE (x+1, y-1)",
                  "d_0 = 3 - 2r; E: d += 4x + 6; SE: d += 4(x - y) + 10, y--",
                  "Trace r = 5: d = -7, -1, 9, 7, 13",
                  "Pixels: (0,5), (1,5), (2,5), (3,4), (4,3)",
                  "Reflect eight ways for the full circle; no sqrt or floats",
                ],
              },
              {
                q: "Write down midpoint circle drawing algorithm. Draw a circle of radius 5 about origin with the help of this algorithm.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Initialize x = 0, y = 5, d = 3 - 2(5) = -7",
                  "Plot (0,5); d < 0 -> E: x = 1, d = -1; plot (1,5)",
                  "d < 0 -> E: x = 2, d = -1 + 10 = 9; plot (2,5)",
                  "d >= 0 -> SE: x = 3, y = 4, d = 9 - 12 + 10 = 7; plot (3,4)",
                  "d >= 0 -> SE: x = 4, y = 3, d = 7 - 4 + 10 = 13; plot (4,3)",
                  "x >= y: octant done; eight reflections complete the circle",
                ],
              },
              {
                q: "Explain briefly about midpoint circle drawing algorithm with example.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Circle function f(x, y) = x^2 + y^2 - r^2; sign classifies inside/outside",
                  "Evaluate at midpoint (x+1, y-1/2) between the two candidates",
                  "Integer decision parameter absorbs the half: d_0 = 3 - 2r",
                  "Updates: d += 4x + 6 (east), d += 4(x - y) + 10 (south-east)",
                  "Example r = 5: points (0,5), (1,5), (2,5), (3,4), (4,3)",
                  "8-way symmetry renders the full circle from the octant",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Polygon filling — scan-line, boundary-fill and flood-fill",
            body: [
              "Area filling colours all pixels inside a polygon; three algorithms dominate the syllabus. The scan-line fill intersects each horizontal scan line with the polygon edges, sorts the intersections by x, and paints between alternating pairs (even-odd parity) — efficient and seedless, the workhorse of raster pipelines. Seed fills instead start from an interior point and grow: boundary-fill colours outward from the seed until it meets a specified boundary colour, testing up/down/left/right neighbours (4-connected) or all eight (8-connected).",
              "Flood-fill is boundary-fill's sibling with a different region definition: it recolours every pixel connected to the seed that currently holds a given interior colour, stopping at anything else. The distinction is the exam question: boundary-fill needs the boundary to be a single specified colour and fills regardless of what is inside; flood-fill needs the interior to be uniform and does not care what the boundary looks like. Boundary-fill on a region whose interior already contains several colours works fine; flood-fill on such a region stops at the first interior colour change.",
              "Both seed fills recurse, and a large region blows the call stack — implementations convert the recursion to an explicit stack and fill horizontal spans at a time (scan-line seed fill) to cut the push count. 4-connected growth is slower but safer against diagonal leaks through thin boundaries; 8-connected growth leaks through corner-touching barriers, the classic warning example. Span-based stack filling is the standard production fix for the recursion cost.",
              "The exam asked it directly: 'Compare and contrast Boundary-fill and Flood-fill polygon fill algorithms' (Jun 2025, 7 marks). Answer with the seed mechanism of each, the boundary-colour vs interior-colour distinction, 4- vs 8-connectivity, and the stack-overflow warning — the comparison table below is the skeleton of a full-mark response. One opening line on scan-line filling shows the whole algorithm family, not just the two seed fills the question names.",
            ],
            bullets: [
              "Scan-line fill: edge intersections per scan line, even-odd parity spans, no seed needed.",
              "Boundary-fill: grows from a seed until the specified boundary colour is reached.",
              "Flood-fill: recolours the connected region of a given interior colour.",
              "Distinction: boundary specified by colour (boundary-fill) vs interior uniformity (flood-fill).",
              "4-connected is leak-safe but slower; 8-connected leaks diagonally through thin walls.",
              "Recursive seed fills overflow on large regions — convert to explicit stack + span filling.",
            ],
            keyTerms: [
              { term: "Scan-line fill", definition: "Per-scan-line edge intersections filled by even-odd parity between sorted x pairs." },
              { term: "Boundary-fill", definition: "Seed fill spreading from an interior point until a specified boundary colour halts it." },
              { term: "Flood-fill", definition: "Seed fill recolouring the connected area of a uniform interior colour." },
              { term: "4-connected / 8-connected", definition: "Whether growth tests the 4 edge-neighbours or all 8 including diagonals." },
              { term: "Seed pixel", definition: "The interior starting pixel from which a seed fill propagates." },
            ],
            diagram: {
              kind: "compare",
              title: "Boundary-fill vs flood-fill",
              caption: "The Jun 2025 contrast in one picture: what defines the region to fill.",
              left: {
                heading: "Boundary-fill",
                items: [
                  "Region defined by a boundary colour",
                  "Grows while pixels differ from boundary colour",
                  "Interior may contain any colours already",
                  "Used to colour outlined shapes",
                ],
              },
              right: {
                heading: "Flood-fill",
                items: [
                  "Region defined by a uniform interior colour",
                  "Recolours every connected pixel of that colour",
                  "Boundary shape irrelevant",
                  "Used to repaint a patch of one colour",
                ],
              },
            },
            table: {
              caption: "Fill algorithms at a glance.",
              headers: ["Algorithm", "Needs seed?", "Region defined by", "Risk"],
              rows: [
                ["Scan-line", "No", "Polygon edge geometry", "Even-odd holes in self-intersecting polygons"],
                ["Boundary-fill", "Yes", "Specified boundary colour", "Stack overflow; diagonal leaks (8-connected)"],
                ["Flood-fill", "Yes", "Uniform interior colour", "Stops at interior colour changes"],
              ],
            },
            callout: {
              type: "exam",
              title: "The Jun 2025 compare question",
              body: "Boundary-fill vs flood-fill was asked verbatim in Jun 2025 (7 marks). Structure: seed mechanism of each, then the region-definer contrast (boundary colour vs interior colour), connectivity choice, and one practical warning (recursion depth). The table structure earns the organization marks.",
            },
            examQuestions: [
              {
                q: "Compare and contrast Boundary-fill and Flood-fill polygon fill algorithms.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Both are seed fills growing from an interior pixel",
                  "Boundary-fill: stops at a specified boundary colour",
                  "Flood-fill: recolours connected pixels of a given interior colour",
                  "Boundary-fill tolerates multi-colour interiors; flood-fill needs uniform interiors",
                  "Connectivity: 4-connected safer, 8-connected faster but leaks diagonally",
                  "Both recurse — explicit stacks and span filling prevent overflow",
                ],
              },
              {
                q: "Explain the scan-line polygon fill algorithm with its handling of vertices and horizontal edges.",
                marks: 7,
                outline: [
                  "For each scan line, find intersections with all polygon edges",
                  "Sort intersections by x; fill between pairs (even-odd rule)",
                  "Vertex counting: count a vertex once when adjacent edges are on the same side, twice when they straddle",
                  "Horizontal edges: handled by the vertex rule or skipped explicitly",
                  "Edge tables (sorted edge list / active edge list) make it O(edges + spans)",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Parametric curves — the Bezier method",
            body: [
              "Curves enter computer graphics as parametric functions: a point P(t) traces the curve as parameter t runs from 0 to 1, rather than y being solved as a function of x — which is why parametric forms can represent loops and verticals that single-valued functions cannot. The Bezier method defines the curve as a weighted blend of control points using the Bernstein polynomials: P(t) = (1-t)^3 P0 + 3t(1-t)^2 P1 + 3t^2(1-t) P2 + t^3 P3 for the cubic (n = 3) case that graphics almost always uses.",
              "The properties are the exam core: the curve passes through P0 and P3 and is tangent there to the lines P0P1 and P3P2; it lies inside the convex hull of its control points; it is affinely invariant (transforming control points transforms the curve identically); and it varies globally — moving any control point reshapes the whole curve, because every Bernstein weight is non-zero for every t in (0, 1).",
              "Worked example — the RGPV numbers: control points P0(2,1), P1(3,2), P2(5,0), P3(6,2). The midpoint of the curve is P(1/2) = (P0 + 3P1 + 3P2 + P3)/8. x: (2 + 9 + 15 + 6)/8 = 32/8 = 4. y: (1 + 6 + 0 + 2)/8 = 9/8 = 1.125. So the curve's midpoint is (4, 1.125), with end tangents along P1 - P0 = (1, 1) at t = 0 and P3 - P2 = (1, 2) at t = 1. De Casteljau's construction evaluates the same point by three levels of linear interpolation at t = 1/2 — the numerically stable way to draw.",
              "The exam asked: 'Find equation of Bezier curve defined by the control points (2,1), (3,2), (5,0) and (6,2). Draw the curve and find its midpoints' (May 2024, 7 marks). The full-mark shape: write the Bernstein equation, substitute the four points, evaluate P(1/2) = (4, 1.125), sketch the control polygon with the curve inside its convex hull, and state the tangent directions at the ends.",
            ],
            bullets: [
              "Parametric form: P(t) traces the curve for t in [0, 1] — handles loops and verticals.",
              "Cubic Bezier: P(t) = (1-t)^3 P0 + 3t(1-t)^2 P1 + 3t^2(1-t) P2 + t^3 P3.",
              "Passes through P0 and P3; tangent to P0P1 and P3P2 there.",
              "Convex hull containment and affine invariance — clip/transform control points only.",
              "Global control: every Bernstein weight non-zero for t in (0,1) — move one point, reshape all.",
              "Midpoint by symmetry: P(1/2) = (P0 + 3P1 + 3P2 + P3)/8.",
            ],
            keyTerms: [
              { term: "Parametric function", definition: "Curve description P(t) with an independent parameter t — represents shapes y = f(x) cannot." },
              { term: "Bernstein polynomial", definition: "The blending weights (1-t)^3, 3t(1-t)^2, 3t^2(1-t), t^3 that mix the control points." },
              { term: "Control point", definition: "A guide point whose polygon shapes the curve without being interpolated (except the ends)." },
              { term: "Convex hull property", definition: "The entire curve lies within the polygon spanned by its control points — a cheap bounds test." },
              { term: "De Casteljau construction", definition: "Repeated linear interpolation between control points; the numerically stable Bezier evaluation." },
            ],
            diagram: {
              kind: "flow",
              title: "De Casteljau evaluation at t = 1/2",
              caption: "Three levels of midpoints collapse four control points onto the curve.",
              steps: [
                { label: "Level 1", note: "midpoints of P0P1, P1P2, P2P3" },
                { label: "Level 2", note: "midpoints of the level-1 pair and pair" },
                { label: "Level 3", note: "midpoint of the two level-2 points" },
                { label: "Curve point", note: "= P(1/2) — the stable evaluation" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "bezier_mid.py — the May 2024 control points, evaluated",
              code: `P0, P1, P2, P3 = (2, 1), (3, 2), (5, 0), (6, 2)

def bezier(t):
    u = 1 - t
    x = u**3*P0[0] + 3*u*u*t*P1[0] + 3*u*t*t*P2[0] + t**3*P3[0]
    y = u**3*P0[1] + 3*u*u*t*P1[1] + 3*u*t*t*P2[1] + t**3*P3[1]
    return (x, y)

print(bezier(0.5))   # (4.0, 1.125) — the curve's midpoint
print(P0, P3)        # endpoints the curve passes through`,
            },
            callout: {
              type: "exam",
              title: "The midpoint shortcut",
              body: "When asked for a Bezier curve's midpoint (May 2024), do not integrate: substitute t = 1/2 into the Bernstein form and use the symmetry P(1/2) = (P0 + 3P1 + 3P2 + P3)/8. For the given points that is x = (2 + 9 + 15 + 6)/8 = 4 and y = (1 + 6 + 0 + 2)/8 = 1.125.",
            },
            examQuestions: [
              {
                q: "Find the equation of the Bezier curve defined by the control points (2,1), (3,2), (5,0) and (6,2). Draw the curve and find its midpoint.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Cubic Bernstein form with the four given control points",
                  "P(t) = (1-t)^3(2,1) + 3t(1-t)^2(3,2) + 3t^2(1-t)(5,0) + t^3(6,2)",
                  "Midpoint: P(1/2) = (P0 + 3P1 + 3P2 + P3)/8",
                  "x = (2 + 9 + 15 + 6)/8 = 4; y = (1 + 6 + 0 + 2)/8 = 1.125",
                  "Curve passes through (2,1) and (6,2), tangent to P0P1 and P3P2",
                  "Sketch: control polygon (2,1)-(3,2)-(5,0)-(6,2), curve inside its hull",
                ],
              },
              {
                q: "State the properties of Bezier curves and explain why their control is called global.",
                marks: 7,
                outline: [
                  "Endpoint interpolation: passes through P0 and P3 only",
                  "End tangents along P0P1 and P2P3",
                  "Convex hull containment — cheap clipping/bounds",
                  "Affine invariance — transform control points, curve follows",
                  "Symmetry of the Bernstein basis: reversing points reverses the curve",
                  "Global control: every weight non-zero for 0 < t < 1, so any move reshapes all",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "B-spline curves",
            body: [
              "A B-spline curve is a piecewise polynomial curve whose shape is guided by a control polygon and blended by basis functions determined by a knot vector — a non-decreasing sequence of parameter values that spaces the polynomial pieces. The order-k (degree k-1) basis N_{i,k}(t) is built recursively from the knots (Cox-de Boor recursion), and the curve is the weighted sum of control points P(t) = sum N_{i,k}(t) P_i. Unlike a Bezier curve, the polynomial degree is independent of the number of control points.",
              "The property that makes B-splines the industrial curve is local control: each basis function is non-zero over only k knot spans, so moving one control point reshapes at most k spans of the curve and leaves the rest untouched — Bezier's global blending is the direct contrast. Continuity follows the knots: at simple knots the curve is C^(k-2) continuous for degree k-1 pieces, and repeated knots deliberately lower continuity or pin the curve to a point (clamped ends interpolate P0 and P_last).",
              "The trade-offs are the exam contrast: B-splines give up endpoint interpolation and exact tangency control (unless ends are clamped with repeated knots) in exchange for local control, degree independence from point count, and smooth joins across arbitrarily many segments — the reason font outlines, CAD surfaces and animation paths standardize on them. Convex hull containment holds in a weaker, per-segment form.",
              "RGPV asked 'Write a short note on B-spline curve' (May 2024, 7 marks). The full-mark note: definition with knot vector, the Cox-de Boor basis idea, local control with the span count, continuity at simple vs repeated knots, and the closing contrast with Bezier — a two-column mini-table earns the comparison marks. One concrete example (font outlines, CAD surfaces) grounds the note in practice.",
            ],
            bullets: [
              "B-spline: piecewise polynomial blended by knot-driven basis functions N_{i,k}(t).",
              "Knot vector: non-decreasing parameters that space and join the polynomial pieces.",
              "Local control: one control point influences only k spans — Bezier's contrast.",
              "Degree independent of control-point count; add points without raising degree.",
              "Continuity C^(k-2) at simple knots; repeated knots lower it or clamp ends.",
              "Costs: no endpoint interpolation (unless clamped) and no direct end tangents.",
            ],
            keyTerms: [
              { term: "Knot vector", definition: "The ordered parameter breakpoints determining where each polynomial piece starts and ends." },
              { term: "Basis function N_{i,k}", definition: "The Cox-de Boor blending weight of control point i, non-zero over k knot spans." },
              { term: "Local control", definition: "Moving one control point affects only the neighbouring spans — the defining advantage." },
              { term: "Clamped B-spline", definition: "End knots repeated k times so the curve starts and ends at the first and last control points." },
              { term: "Order k", definition: "Degree k-1 pieces; continuity at simple knots is C^(k-2)." },
            ],
            diagram: {
              kind: "compare",
              title: "Bezier vs B-spline",
              caption: "The two parametric families of the syllabus, contrasted on the properties examiners probe.",
              left: {
                heading: "Bezier",
                items: [
                  "Degree tied to point count (cubic: 4 points)",
                  "Passes through first and last points",
                  "Global control — any point reshapes all",
                  "One polynomial span; joins need patching",
                ],
              },
              right: {
                heading: "B-spline",
                items: [
                  "Degree independent of point count",
                  "Interpolates ends only when clamped",
                  "Local control — k spans per point",
                  "Smooth C^(k-2) joins across segments",
                ],
              },
            },
            table: {
              caption: "Curve properties side by side.",
              headers: ["Property", "Bezier (cubic)", "B-spline (order k)"],
              rows: [
                ["Control points used", "Exactly 4", "Any number"],
                ["Endpoint interpolation", "Always", "Only when clamped"],
                ["Moving one point affects", "Whole curve", "k spans"],
                ["Continuity across segments", "Must patch manually", "C^(k-2) at simple knots"],
              ],
            },
            callout: {
              type: "tip",
              title: "Local control is the whole contrast",
              body: "If the question compares Bezier and B-spline, the sentence that earns the marks is: every Bezier basis weight is non-zero across the entire curve, so control is global, while each B-spline basis is non-zero over only k knot spans, giving local control. Everything else follows from that one structural difference.",
            },
            examQuestions: [
              {
                q: "Write a short note on B-spline curves.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Definition: piecewise polynomial guided by a control polygon and knot vector",
                  "Cox-de Boor basis functions N_{i,k}(t) blend the control points",
                  "Local control: one point moves at most k spans",
                  "Degree independent of the number of control points",
                  "Continuity C^(k-2) at simple knots; repeated knots clamp or reduce",
                  "Contrast with Bezier: global control, degree grows with points",
                ],
              },
              {
                q: "Compare Bezier and B-spline curves with respect to control, endpoints and continuity.",
                marks: 7,
                outline: [
                  "Bezier: degree = points - 1; B-spline: degree fixed, points arbitrary",
                  "Bezier interpolates P0 and P3; B-spline interpolates ends only when clamped",
                  "Bezier global control; B-spline local (k spans)",
                  "Bezier single span; B-spline smooth C^(k-2) joins",
                  "Both stay in the convex hull (B-spline per segment)",
                  "Applications: fonts/CAD favour B-splines for editing locality",
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
      title: "2D/3D Transformations, Clipping and Rendering",
      summary:
        "Unit III moves and renders geometry: the 2D and 3D coordinate systems and transformation matrices (translation, rotation, scaling, reflection, shear, inverse, composite), the viewing pipeline with world and screen coordinates, parallel and perspective projection, point/line/polygon clipping (Cohen-Sutherland, Sutherland-Hodgman, Cyrus-Beck), hidden-surface elimination, illumination models with Phong and Gouraud shading and ray tracing, and the RGB, YIQ, CMY and HSV colour models.",
      chapter: {
        number: "03",
        title: "Transform, Clip, Illuminate",
        intro:
          "Unit III covers 2D and 3D coordinate systems and transformations, inverse and composite transformations, the viewing pipeline and projections, point, line and polygon clipping, hidden-surface elimination, illumination and shading models, and colour models.",
        inOneBreath:
          "Every geometric operation is a matrix: translation, rotation, scaling, reflection and shear compose into a single 3x3 (2D) or 4x4 (3D) homogeneous matrix — order matters, and pivot rotations are T x R x T-inverse. The viewing pipeline maps world coordinates through window and viewport to screen coordinates; parallel projection preserves measurements while perspective adds depth foreshortening and vanishing points. Cohen-Sutherland clips lines with region codes, Sutherland-Hodgman clips polygons edge by edge, Cyrus-Beck uses parametric normals. Hidden surfaces fall to back-face tests, z-buffers or painter's sorting; illumination stacks ambient, Lambert diffuse and Phong specular; colour models split into additive (RGB), subtractive (CMY), broadcast (YIQ) and perceptual (HSV).",
        sections: [
          {
            number: "3.1",
            title: "2D transformations — translation, rotation, scaling, reflection, shear",
            body: [
              "A geometric transformation maps every point (x, y) of an object to a new position (x', y'). The basic 2D operations: translation adds offsets (x' = x + tx, y' = y + ty); rotation turns points about the origin by theta (x' = x cos(theta) - y sin(theta), y' = x sin(theta) + y cos(theta)); scaling multiplies coordinates by sx, sy about the origin. Reflection mirrors across an axis (about the x-axis: (x, -y); about the line y = x: (y, x)), and shear distorts by sliding layers proportionally (x-shear: x' = x + shx . y). Each is expressed as a matrix — 2x2 for the linear ones, translation unified into 3x3 by homogeneous coordinates (section 3.2).",
              "Worked rotation: point (2, 3) rotated by 90 degrees gives x' = 2(0) - 3(1) = -3 and y' = 2(1) + 3(0) = 2, i.e. (-3, 2) — the quarter turn's cos = 0, sin = 1 makes the check trivial. Inverse transformations undo each operation: the inverse of a rotation by theta is rotation by -theta, of translation (tx, ty) is (-tx, -ty), of scaling sx is 1/sx, and of reflection the same reflection (it is its own inverse) — the algebra the examiner probes with 'what transforms this point back?'.",
              "The five operations sort into a 2 x 2 of effects: translation and rotation move the object without changing shape (rigid motion); scaling changes size; shear changes angles; reflection flips handedness — an object and its mirror image cannot be rotated into each other. Composite transformations (section 3.2) multiply these matrices into one, which is why every interactive graphics package builds transforms by matrix concatenation rather than by cascading coordinate updates.",
              "The exam asked: 'What is reflection and shear transformation? Discuss with examples' (Dec 2024, 7 marks). Answer with the four reflection matrices (x-axis, y-axis, origin, y = x) and the two shears (x and y), each applied to a concrete point — reflection of (3, 4) about y = x is (4, 3); x-shear with shx = 2 sends (1, 2) to (5, 2). Named matrices plus one numeric example each is the full answer.",
            ],
            bullets: [
              "Translation: (x + tx, y + ty); rotation: cos/sin matrix; scaling: diag(sx, sy).",
              "Rotation check: (2, 3) by 90 degrees -> (-3, 2).",
              "Reflections: x-axis (x, -y), y-axis (-x, y), origin (-x, -y), line y = x (y, x).",
              "Shear: x-shear x' = x + shx . y; y-shear y' = y + shy . x.",
              "Inverse transforms: -theta rotation, negative translation, reciprocal scaling, self-inverse reflection.",
              "Rigid motion (translate + rotate) preserves shape; shear/scaling change it; reflection flips handedness.",
            ],
            keyTerms: [
              { term: "Transformation matrix", definition: "The matrix multiplying coordinates to produce the transformed position." },
              { term: "Reflection", definition: "Mirroring across an axis or line; the reflected point equidistant on the other side." },
              { term: "Shear", definition: "Sliding coordinate layers proportionally — x' = x + shx . y distorts angles without scaling." },
              { term: "Inverse transformation", definition: "The matrix undoing a transform: opposite translation, negative angle, reciprocal scale." },
              { term: "Rigid transformation", definition: "Translation and rotation — shape and size preserved, position and orientation changed." },
            ],
            diagram: {
              kind: "matrix",
              title: "What each basic transformation changes",
              caption: "Two axes — isometry and shape preservation — place all five operations.",
              axes: { x: "Preserves distances (isometry?)", y: "Preserves shape exactly?" },
              quadrants: [
                { label: "Translation, rotation, reflection", note: "isometries — distances kept; reflection flips handedness" },
                { label: "Uniform scaling", note: "shape kept, distances scaled by s" },
                { label: "Non-uniform scaling, shear", note: "affine — lines stay lines, angles change" },
                { label: "Perspective / projective", note: "leaves the affine family — parallelism lost" },
              ],
            },
            table: {
              caption: "The five basic 2D matrices (points as column vectors).",
              headers: ["Operation", "Matrix", "Applied to (3, 4)"],
              rows: [
                ["Translate (2, -1)", "[1 0 2; 0 1 -1; 0 0 1]", "(5, 3)"],
                ["Rotate 90 deg", "[0 -1 0; 1 0 0; 0 0 1]", "(-4, 3)"],
                ["Scale (2, 3)", "[2 0 0; 0 3 0; 0 0 1]", "(6, 12)"],
                ["Reflect about x-axis", "[1 0 0; 0 -1 0; 0 0 1]", "(3, -4)"],
                ["X-shear shx = 2", "[1 2 0; 0 1 0; 0 0 1]", "(11, 4)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Reflection and shear, by name",
              body: "Dec 2024 asked reflection and shear with examples (7 marks). Write all four reflection matrices, both shear matrices, and push one concrete point through each — reflection of (3, 4) about y = x is (4, 3); x-shear shx = 2 of (1, 2) is (5, 2). Matrices plus numbers is the expected format.",
            },
            examQuestions: [
              {
                q: "What is reflection and shear transformation? Discuss with examples.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Reflection: mirror image across an axis or line",
                  "Matrices: x-axis (x, -y); y-axis (-x, y); origin (-x, -y); y = x (y, x)",
                  "Example: (3, 4) about y = x -> (4, 3); about x-axis -> (3, -4)",
                  "Shear: proportional sliding of layers; x-shear x' = x + shx . y",
                  "Y-shear: y' = y + shy . x",
                  "Example: x-shear shx = 2 of (1, 2) -> (5, 2) — angles distorted, area kept",
                ],
              },
              {
                q: "Write short notes on Reflection.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Definition: mirror image across an axis, line or plane",
                  "2D matrices: x-axis (x, -y); y-axis (-x, y)",
                  "About origin: (-x, -y); about the line y = x: (y, x)",
                  "Example: (3, 4) about y = x -> (4, 3); about x-axis -> (3, -4)",
                  "Reflection is its own inverse — applied twice it restores the original",
                  "It changes handedness: rotation and translation cannot reproduce it",
                ],
              },
              {
                q: "Derive the 2D rotation matrix and state the inverse transformation of each basic operation.",
                marks: 7,
                outline: [
                  "From polar form: x' = r cos(theta + phi) expands to x cos - y sin",
                  "y' = r sin(theta + phi) expands to x sin + y cos",
                  "Matrix R(theta) = [cos -sin; sin cos]",
                  "Inverse of rotation theta is rotation -theta (matrix transpose)",
                  "Inverse of translation is negative offset; of scaling reciprocal factors",
                  "Reflection is self-inverse",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Composite transformations and homogeneous coordinates",
            body: [
              "Homogeneous coordinates embed 2D points as (x, y, 1) so that translation — an addition — becomes a matrix multiplication, unifying all 2D operations as 3x3 matrices: T = [1 0 tx; 0 1 ty; 0 0 1], R and S as before with a fixed bottom row. The payoff is composition: applying transform A then B is the single matrix M = B . A, computed once and applied to every vertex — the basis of all scene-graph and animation pipelines.",
              "The order of multiplication matters because matrix multiplication is not commutative: rotating then translating is not translating then rotating. The classic composite is rotation about an arbitrary pivot P: M = T(P) . R(theta) . T(-P) — translate the pivot to the origin, rotate, translate back. Similarly, scaling about a fixed point uses T(P) . S(sx, sy) . T(-P). Read the product right to left: the rightmost matrix acts first.",
              "Worked example — the RGPV question: rotate triangle A(0,0), B(2,2), C(4,2) by 45 degrees. About the origin: A stays (0,0); B(2,2) -> (2cos45 - 2sin45, 2sin45 + 2cos45) = (0, 2.83); C(4,2) -> (4cos45 - 2sin45, 4sin45 + 2cos45) = (1.41, 4.24). About the pivot P(-2,-2): translate by (2,2) first, rotate, translate back — A -> (2,2) rotated = (0, 2.83) -> back to (-2, 0.83); B -> (4,4) rotated = (0, 5.66) -> (-2, 3.66); C -> (6,4) rotated = (1.41, 7.07) -> (-0.59, 5.07). Same triangle, different pivot, different result — the composite recipe at work.",
              "The exam asked exactly this: 'Rotate a Triangle A(0,0), B(2,2), C(4,2) about the origin and about P(-2,-2) by an angle of 45 degrees' (May 2024, 7 marks). Bank the marks with cos45 = sin45 = 1/sqrt(2) = 0.707, the composite formula, and the six computed vertices. Close with the one-line moral: the pivot is just a translation sandwich around the rotation.",
            ],
            bullets: [
              "Homogeneous coordinates: (x, y) -> (x, y, 1); every 2D transform becomes a 3x3 matrix.",
              "Composition: apply A then B = single matrix B . A applied to all vertices.",
              "Order matters: R . T differs from T . R — multiplication is not commutative.",
              "Pivot rotation: M = T(P) . R(theta) . T(-P); pivot scaling uses S in the sandwich.",
              "Worked: triangle rotated 45 deg about origin gives (0,0), (0, 2.83), (1.41, 4.24).",
              "Same triangle about P(-2,-2) gives (-2, 0.83), (-2, 3.66), (-0.59, 5.07).",
            ],
            keyTerms: [
              { term: "Homogeneous coordinates", definition: "Representing (x, y) as (x, y, 1) so every affine transform is one matrix multiply." },
              { term: "Composite transformation", definition: "A single matrix equal to the product of successive transforms; applied right to left." },
              { term: "Pivot point", definition: "The fixed point a rotation/scaling is taken about — realized as a translate-rotate-translate sandwich." },
              { term: "Concatenation", definition: "Pre-multiplying transform matrices to build one cumulative matrix for a whole motion." },
              { term: "Non-commutativity", definition: "Order dependence of matrix products — the reason composite order must be stated." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Rotation about an arbitrary pivot",
              caption: "Three matrices compose into one: the pivot travels to the origin and back.",
              stages: [
                { label: "T(-P)", note: "translate pivot to origin — acts first" },
                { label: "R(theta)", note: "rotate about the origin" },
                { label: "T(P)", note: "translate pivot back" },
                { label: "M = T(P).R.T(-P)", note: "one matrix, applied to every vertex" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "composite.py — the May 2024 triangle, both rotations",
              code: `import numpy as np

c = s = np.cos(np.pi/4), np.sin(np.pi/4)   # 45 degrees
C, S = c[0], s[1]
R = np.array([[C, -S], [S, C]])            # 2D rotation, no translation

pts = np.array([[0, 0], [2, 2], [4, 2]], float)

print(pts @ R.T)                            # about origin
P = np.array([-2, -2])
print((pts - P) @ R.T + P)                  # pivot composite: T(-P), R, T(P)`,
            },
            callout: {
              type: "exam",
              title: "The pivot question came verbatim",
              body: "May 2024 asked the 45-degree rotation of triangle A(0,0), B(2,2), C(4,2) about the origin and about P(-2,-2). Write M = T(P).R(45).T(-P), use 0.707, and give both vertex triples — the contrast between the two pivots is the conceptual mark.",
            },
            examQuestions: [
              {
                q: "Rotate the triangle A(0,0), B(2,2), C(4,2) about the origin and about P(-2,-2) by an angle of 45 degrees.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "cos45 = sin45 = 0.707",
                  "About origin: A -> (0,0); B -> (0, 2.83); C -> (1.41, 4.24)",
                  "Composite for pivot: M = T(P).R(45).T(-P)",
                  "Translate by (2,2): A(2,2), B(4,4), C(6,4)",
                  "Rotate: (0, 2.83), (0, 5.66), (1.41, 7.07)",
                  "Translate back: (-2, 0.83), (-2, 3.66), (-0.59, 5.07)",
                ],
              },
              {
                q: "What are homogeneous coordinates? Show how translation becomes a matrix multiplication and why composite transforms must specify their order.",
                marks: 7,
                outline: [
                  "Point (x, y) written as (x, y, 1); transforms become 3x3",
                  "Translation matrix [1 0 tx; 0 1 ty; 0 0 1]",
                  "Composition: applying A then B equals multiplying by B . A",
                  "Matrix product non-commutative: R.T differs from T.R",
                  "Example: rotate-then-translate vs translate-then-rotate land differently",
                  "Pipelines fix order convention: rightmost matrix applies first",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "3D transformations and rotation about the axes",
            body: [
              "3D transformations use 4x4 homogeneous matrices acting on points (x, y, z, 1). Translation and scaling extend directly (three offsets, three scale factors); rotation becomes three distinct matrices because a 3D rotation is about an axis, not a point. With the right-handed convention (x right, y up, z out of the screen): rotation about X keeps x fixed and rotates the y-z plane, about Y keeps y fixed, about Z keeps z fixed — the 2D rotation matrix embedded in the relevant 2x2 block.",
              "The rotation about the X-axis — the derivation RGPV asked for: the point's distance from the axis is r = sqrt(y^2 + z^2); rotating by theta in the y-z plane gives y' = r cos(theta + phi) = y cos(theta) - z sin(theta) and z' = r sin(theta + phi) = y sin(theta) + z cos(theta), with x' = x. As a matrix: Rx(theta) = [1 0 0 0; 0 cos -sin 0; 0 sin cos 0; 0 0 0 1]. The Y-axis form cycles the same 2x2 into the z-x block (with its sign convention flipped: z' = z cos + x sin), and the Z-axis form is the 2D matrix verbatim.",
              "Rotation about an arbitrary axis (not through the origin) composes five steps: translate the axis to pass through the origin, rotate to align it with a coordinate axis, apply the elementary rotation, rotate back, translate back — M = T . Rx . Rz(y-alignment) . Rx-inverse . T-inverse. Quaternions achieve the same in four components without gimbal lock, which is why animation runtimes store rotations as quaternions even though the syllabus teaches matrices.",
              "The exam asked: 'Derive the transformation matrix for rotation about an X-axis in 3D' (Dec 2024, 7 marks) — write the polar-form derivation of y' and z', then the 4x4 matrix with its cos/sin entries, and note the right-handed sign convention. A follow-up contrast worth stating: 2D rotation is 3D rotation about Z viewed down the axis. Quote the 4x4 matrix in full — the cos/sin block sitting in the y-z plane is the derivation's visible result.",
            ],
            bullets: [
              "3D transforms: 4x4 homogeneous matrices on (x, y, z, 1).",
              "Rotation is about an axis: three elementary matrices Rx, Ry, Rz.",
              "Rx: y' = y cos - z sin, z' = y sin + z cos, x unchanged.",
              "Ry: x' = x cos + z sin, z' = -x sin + z cos — the sign pattern flips per the right-handed convention.",
              "Rz is the 2D rotation verbatim in the x-y plane.",
              "Arbitrary-axis rotation = translate, align, rotate, unalign, untranslate — a 5-matrix composite.",
            ],
            keyTerms: [
              { term: "Right-handed system", definition: "The x-y-z convention whose cross products fix the signs of the rotation matrices." },
              { term: "Elementary rotations", definition: "Rx, Ry, Rz — rotations about the three coordinate axes, each an identity with one 2x2 cos/sin block." },
              { term: "Arbitrary axis rotation", definition: "Composite that translates and aligns the axis before applying an elementary rotation." },
              { term: "Gimbal lock", definition: "Loss of one rotational degree of freedom with Euler-angle compositions — why quaternions exist." },
              { term: "Quaternion", definition: "Four-component rotation representation composing without gimbal lock; interpolation-friendly." },
            ],
            diagram: {
              kind: "flow",
              title: "Rotating about an arbitrary axis",
              caption: "Five composed matrices reduce the hard problem to one elementary rotation.",
              steps: [
                { label: "Translate", note: "move the axis to pass through the origin" },
                { label: "Align", note: "rotate the axis onto a coordinate axis" },
                { label: "Elementary rotation", note: "Rx / Ry / Rz by theta" },
                { label: "Unalign", note: "inverse of the alignment rotation" },
                { label: "Untranslate", note: "inverse of the first translation" },
              ],
            },
            table: {
              caption: "The three elementary 3D rotation matrices (theta = angle).",
              headers: ["Axis", "Fixed plane rotated", "Matrix block", "Note"],
              rows: [
                ["X", "y-z plane", "[cos -sin; sin cos] in (y, z)", "Dec 2024 derivation target"],
                ["Y", "z-x plane", "[cos -sin; sin cos] in (z, x)", "sign flips per right-hand rule"],
                ["Z", "x-y plane", "[cos -sin; sin cos] in (x, y)", "identical to 2D rotation"],
              ],
            },
            callout: {
              type: "warning",
              title: "Sign conventions sink derivations",
              body: "In a right-handed system, Ry has the opposite sign pattern from Rx and Rz (x' = z sin + x cos, z' = z cos - x sin). State the convention before deriving, or the marker cannot tell a sign slip from a misunderstanding.",
            },
            examQuestions: [
              {
                q: "Derive the transformation matrix for rotation about an X-axis in 3D.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Distance from X-axis: r = sqrt(y^2 + z^2), angle phi = atan(z/y)",
                  "After rotation: y' = r cos(theta + phi), z' = r sin(theta + phi)",
                  "Expand: y' = y cos - z sin; z' = y sin + z cos; x' = x",
                  "Matrix Rx = [1 0 0 0; 0 cos -sin 0; 0 sin cos 0; 0 0 0 1]",
                  "Right-handed convention stated",
                  "Column-vector application: (x, y, z, 1)^T multiplied by Rx",
                ],
              },
              {
                q: "Write the composite matrix for rotation about an arbitrary axis parallel to the Z-axis and explain each factor.",
                marks: 7,
                outline: [
                  "Axis parallel to Z through point (a, b): translate (-a, -b, 0)",
                  "Rz(theta) — the elementary rotation",
                  "Translate back (+a, +b, 0)",
                  "M = T(a, b, 0) . Rz . T(-a, -b, 0)",
                  "Rightmost matrix acts first; composite applied per vertex",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Viewing pipeline and projections — parallel vs perspective",
            body: [
              "The viewing pipeline carries geometry from the world coordinate system (the scene's own units) through a viewing coordinate system (the camera's position and orientation) to the screen coordinate system (device pixels). The window is the rectangle of world space selected for viewing; the viewport is its destination rectangle on the screen; the window-to-viewport mapping is a scaling-plus-translation that preserves relative positions — the transformation every 2D drawing program performs on every pan and zoom.",
              "Projection maps 3D onto the 2D screen by collapsing one dimension. Parallel projection keeps projectors parallel: orthographic views (front, top, side) drop one axis and preserve true lengths — engineering drawings; axonometric/isometric views rotate the object first so three faces show at once; oblique projections (cavalier with full depth, cabinet with depth halved) mix a front face with a receding axis at an angle. Parallel projection preserves parallelism and measurements, which is why CAD and drafting use it.",
              "Perspective projection sends projectors to a single centre of projection (the eye): objects farther away project smaller — realistic depth foreshortening — and parallel lines converge at vanishing points. One-point perspective has one vanishing axis, two-point has two, three-point adds vertical convergence (looking up at a tower). The cost: measurements and parallelism are lost, and only lines through the centre project without distortion — which is exactly the trade between CAD accuracy and rendered realism.",
              "The exam asked the contrast three times: 'Distinguish between parallel and perspective projection' (May 2024 and Jun 2025, 7 marks each) and 'Distinguish between world coordinate system and screen coordinate system' (Dec 2024, 7 marks). Answer the first with the comparison table below; answer the second as world = scene's own coordinate frame in its units vs screen = device frame in pixels, connected by the window-viewport mapping of the viewing pipeline.",
            ],
            bullets: [
              "Pipeline: world coordinates -> viewing (camera) -> window -> viewport -> screen coordinates.",
              "Window = world-space selection; viewport = screen-space destination; mapping is scale + shift.",
              "Parallel projection: projectors parallel; orthographic, isometric, cavalier (depth 1), cabinet (depth 1/2).",
              "Perspective: projectors to an eye point; farther = smaller; vanishing points 1/2/3.",
              "Parallel keeps parallelism and measures; perspective trades both for realism.",
              "Dec 2024 asked world vs screen coordinates; May 2024 and Jun 2025 asked parallel vs perspective.",
            ],
            keyTerms: [
              { term: "World coordinates", definition: "The scene's own coordinate frame in its natural units — the geometry's home." },
              { term: "Screen coordinates", definition: "The device frame in pixels where the image finally lands." },
              { term: "Window / viewport", definition: "The world rectangle selected and the screen rectangle it maps onto." },
              { term: "Vanishing point", definition: "Where parallel receding lines meet under perspective projection." },
              { term: "Cabinet projection", definition: "Oblique projection with the receding axis drawn at half length — looks less distorted than cavalier." },
            ],
            diagram: {
              kind: "compare",
              title: "Parallel vs perspective projection",
              caption: "The twice-asked contrast: measurement fidelity vs depth realism.",
              left: {
                heading: "Parallel projection",
                items: [
                  "Projectors remain parallel",
                  "Parallel lines stay parallel — no vanishing points",
                  "True relative measurements preserved",
                  "Types: orthographic, isometric, cavalier, cabinet",
                ],
              },
              right: {
                heading: "Perspective projection",
                items: [
                  "Projectors converge at the eye",
                  "Farther objects smaller — depth foreshortening",
                  "Parallel lines converge at vanishing points",
                  "Types: one-, two-, three-point perspective",
                ],
              },
            },
            table: {
              caption: "Projection taxonomy in one table.",
              headers: ["Projection", "Projectors", "Depth treatment", "Used for"],
              rows: [
                ["Orthographic (front/top/side)", "Perpendicular", "One axis dropped", "Engineering drawings"],
                ["Isometric", "Parallel, rotated view", "All three axes equal angle", "Technical illustration"],
                ["Cavalier / cabinet", "Parallel, oblique", "Depth full / halved", "Quick 3D sketches"],
                ["Perspective (1/2/3-point)", "Converging", "Foreshortened by distance", "Rendering, animation"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked twice by name",
              body: "Parallel vs perspective was asked in both May 2024 and Jun 2025 (7 marks each), and world vs screen coordinates in Dec 2024. Keep both answers ready: the projection table above, and the world->viewing->screen pipeline sentence with the window-viewport mapping.",
            },
            examQuestions: [
              {
                q: "Differentiate between parallel and perspective projections.",
                marks: 7,
                appearances: ["May 2024", "Jun 2025"],
                outline: [
                  "Parallel: projectors parallel; centre of projection at infinity",
                  "Preserves parallelism and relative measurements",
                  "Types: orthographic, axonometric/isometric, oblique cavalier/cabinet",
                  "Perspective: projectors converge at the eye/centre of projection",
                  "Depth foreshortening: farther = smaller",
                  "Vanishing points: one, two or three",
                  "Use: CAD/drafting vs realistic rendering",
                ],
              },
              {
                q: "Distinguish between world coordinate system and screen coordinate system, and explain the window-to-viewport transformation between them.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "World coordinates: scene's own frame, real-world units",
                  "Screen coordinates: device frame in pixel units",
                  "Viewing pipeline: world -> viewing/camera -> normalized -> screen",
                  "Window: world rectangle selected; viewport: screen rectangle mapped to",
                  "Mapping: scale sx = wv/ww, sy = hv/hw plus translation",
                  "Relative positions preserved; clipping happens at the window boundary",
                ],
              },
              {
                q: "Write short notes on viewing transformation.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Pipeline: world coordinates -> viewing coordinates -> normalized -> screen",
                  "Viewing coordinate system: the camera's position and orientation",
                  "Window: the world rectangle selected for display",
                  "Viewport: the screen rectangle it maps onto",
                  "Window-to-viewport mapping: scale sx, sy plus translation",
                  "Clipping at the window boundary precedes the mapping",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Point and line clipping — the Cohen-Sutherland algorithm",
            body: [
              "Clipping removes the parts of geometry outside the viewing window. Point clipping is the direct test xw_min <= x <= xw_max, yw_min <= y <= yw_max — accept or reject. Lines need more care: a line may cross the window, lie wholly inside, or lie wholly outside, and the Cohen-Sutherland algorithm decides which cheaply using region codes — the accept, reject or subdivide discipline every clipping question assumes.",
              "Each endpoint gets a 4-bit region code in the order Top, Bottom, Right, Left (TBRL): bit set means the point lies beyond that window boundary — e.g. above the top edge sets the T bit, left of the window sets L. Two tests follow: trivial accept when both codes are 0000; trivial reject when the bitwise AND of the codes is non-zero (both endpoints share a boundary side, so the line cannot cross the window). Otherwise the line is subdivided: intersect it with one violated boundary, replace the outside endpoint with the intersection, re-code, and repeat — at most four clips for a straight line.",
              "Worked example — the Jun 2025 numerical: window (0,0) to (340,340). Line AB from (-170, 595) to (170, 255): code(A) = 1001 (above top and left of window), code(B) = 0000. Clip the left edge x = 0: t = (0 - (-170))/(170 - (-170)) = 0.5, giving y = 595 + 0.5(255 - 595) = 425 -> new endpoint (0, 425), code 1000. Clip the top edge y = 340: t = (425 - 340)/(425 - 255) = 0.5, giving x = 85 -> (85, 340), code 0000. Visible portion: (85, 340) to (170, 255). Line CD from (425, 85) to (595, 595): codes 0100 and 1100, whose AND is 0100 — trivially rejected.",
              "The exam asked this three ways in three papers: 'Write down Cohen-Sutherland line clipping algorithm with suitable example' (May 2024), the numerical above (Jun 2025), and 'Explain the various approaches followed in different line-clipping algorithms' (Jun 2025) — the latter wants the code-based method vs the parametric (Cyrus-Beck/Liang-Barsky) method compared. 3D clipping (Dec 2024) extends the same idea to six planes of the view volume: 6-bit codes, same accept/reject/subdivide discipline.",
            ],
            bullets: [
              "Point clipping: direct bounds test — accept or reject.",
              "Region codes TBRL (top-bottom-right-left) classify each endpoint against the four edges.",
              "Trivial accept: both codes 0000. Trivial reject: AND of codes non-zero.",
              "Else clip against one violated boundary, re-code, repeat — at most 4 intersections per line.",
              "Worked: AB -> visible (85, 340)-(170, 255); CD rejected outright (AND = 0100).",
              "3D clipping: 6-bit codes against the six view-volume planes; same discipline.",
            ],
            keyTerms: [
              { term: "Region code", definition: "The 4-bit TBRL tag telling which window boundaries an endpoint lies beyond." },
              { term: "Trivial accept", definition: "Both endpoint codes zero — the line is wholly inside; draw it untouched." },
              { term: "Trivial reject", definition: "Bitwise AND of the codes non-zero — both endpoints beyond one boundary; discard." },
              { term: "Subdivision", definition: "Clipping the line against a violated edge and replacing the outside endpoint with the intersection." },
              { term: "3D clipping", definition: "Cohen-Sutherland extended to the six planes of the view volume with 6-bit codes." },
            ],
            diagram: {
              kind: "flow",
              title: "Cohen-Sutherland line clipping",
              caption: "Three cheap tests before any intersection math.",
              steps: [
                { label: "Assign region codes", note: "TBRL bits per endpoint" },
                { label: "Both 0000?", note: "trivial accept — draw" },
                { label: "AND non-zero?", note: "trivial reject — discard" },
                { label: "Clip one boundary", note: "replace outside endpoint with intersection" },
                { label: "Re-code and repeat", note: "at most four clips" },
              ],
            },
            codeExample: {
              language: "c",
              caption: "regioncode.c — computing the TBRL code",
              code: `#define TOP 1
#define BOTTOM 2
#define RIGHT 4
#define LEFT 8

int regionCode(double x, double y,
               double xmin, double ymin,
               double xmax, double ymax) {
    int code = 0;
    if (y > ymax) code |= TOP;       /* bit 0: above top */
    if (y < ymin) code |= BOTTOM;    /* bit 1: below bottom */
    if (x > xmax) code |= RIGHT;     /* bit 2: right */
    if (x < xmin) code |= LEFT;      /* bit 3: left */
    return code;
    /* accept if both codes == 0; reject if (c1 & c2) != 0 */
}`,
            },
            callout: {
              type: "exam",
              title: "A numerical from Jun 2025",
              body: "The window (0,0)-(340,340) with lines AB[(-170,595),(170,255)] and CD[(425,85),(595,595)] was asked verbatim (7 marks). Answers to memorize: AB clips twice to (85,340)-(170,255) — both t values are exactly 0.5 — and CD trivially rejects because both endpoints share the RIGHT bit.",
            },
            examQuestions: [
              {
                q: "Given a clipping window P(0,0), Q(340,0), R(340,340) and S(0,340), find the visible portion of the lines AB[(-170,595),(170,255)] and CD[(425,85),(595,595)] using the Cohen-Sutherland algorithm.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Window: x in [0,340], y in [0,340]",
                  "A(-170,595): code 1001 (top + left); B(170,255): 0000",
                  "Clip left x=0: t = 170/340 = 0.5 -> (0, 425), code 1000",
                  "Clip top y=340: t = 85/170 = 0.5 -> (85, 340), code 0000",
                  "Visible: (85,340) to (170,255)",
                  "C(425,85): 0100; D(595,595): 1100; AND = 0100 -> trivially rejected",
                ],
              },
              {
                q: "Write down the Cohen-Sutherland line clipping algorithm with a suitable example.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Four TBRL region bits per endpoint",
                  "Trivial accept: both codes 0000",
                  "Trivial reject: bitwise AND non-zero",
                  "Otherwise clip against one violated boundary and re-code",
                  "At most four intersections per line",
                  "Example: line crossing left edge then top edge, as in the worked trace",
                ],
              },
              {
                q: "Explain the various approaches followed in different line-clipping algorithms.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Cohen-Sutherland: region codes + repeated subdivision",
                  "Liang-Barsky: parametric line P(t) = P0 + t(P1-P0); inequalities give entering/leaving t-range",
                  "Cyrus-Beck: parametric clipping with inward normals against convex regions",
                  "Nicholl-Lee-Nicholl: direct region comparison, no multiplication",
                  "Trade-off: code-based cheap for most lines; parametric better for many clips",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Polygon clipping — Sutherland-Hodgman and Cyrus-Beck",
            body: [
              "A polygon must clip as a whole — clipping its edges independently can leave dangling edges and wrong interiors. Sutherland-Hodgman clips the polygon against one window edge at a time: walk the vertex list, and at each transition apply one of four output rules — both vertices inside: output the second; inside to outside: output the intersection; outside to inside: output the intersection then the vertex; both outside: output nothing. Each pass produces a new vertex list; four passes (one per window edge) yield the clipped polygon.",
              "The four rules are the algorithm's entire content and fit a 2x2: (in, in) -> emit end vertex; (in, out) -> emit intersection; (out, in) -> emit intersection + end vertex; (out, out) -> emit nothing. The method works for any convex window; on concave clip regions it can produce degenerate edges along the window border, which the pipeline removes afterward. The parametric alternative, Cyrus-Beck, clips against a convex region using inward normals: for each edge the line P(t) = P0 + t(P1 - P0) is tested against the plane inequality n . (P(t) - boundary point) >= 0, solving for the entering and leaving t values — the general parametric clip RGPV asked for.",
              "Liang-Barsky is the Cyrus-Beck specialization to rectangles: the four window boundaries become four linear inequalities in t, giving entering and leaving parameter ranges with fewer multiplications. The practical comparison: Sutherland-Hodgman is simplest and handles polygons; Cyrus-Beck/Liang-Barsky handle lines more efficiently against convex regions with no repeated re-coding. Both parametric methods require the clip region to be convex — concave regions must be pre-split, which is where the parametric family ends.",
              "The exam asked: 'Discuss about Sutherland Hodgeman polygon clipping algorithm with example' (Dec 2024, 7 marks) and 'What is the principle of Cyrus-Beck algorithm for clipping a polygon? Explain it' (Jun 2025, 7 marks). For the first, draw the four transition cases with a worked polygon through two clips; for the second, write the parametric form, the inward-normal inequality, and the entering/leaving t computation.",
            ],
            bullets: [
              "Sutherland-Hodgman: clip against one window edge per pass; four passes total.",
              "Four transition rules: in-in emit vertex; in-out emit intersection; out-in emit both; out-out emit nothing.",
              "Works for convex windows; concave regions need post-processing of degenerate edges.",
              "Cyrus-Beck: parametric P(t) = P0 + t(P1-P0) with inward normals for convex regions.",
              "Solves n . (P(t) - B) >= 0 for entering and leaving t.",
              "Liang-Barsky: the rectangle-specialized form — four t-inequalities, fewer operations.",
            ],
            keyTerms: [
              { term: "Sutherland-Hodgman", definition: "Edge-by-edge polygon clipping using four vertex-transition output rules." },
              { term: "Cyrus-Beck", definition: "Parametric line/polygon clipping against convex regions using inward normals." },
              { term: "Inward normal", definition: "The normal pointing into the clip region; the plane inequality that defines 'inside'." },
              { term: "Entering / leaving parameters", definition: "The t-range where the line satisfies every region inequality — the visible segment." },
              { term: "Degenerate edges", definition: "Zero-area artifacts Sutherland-Hodgman can create along the window border on concave inputs." },
            ],
            diagram: {
              kind: "matrix",
              title: "The four Sutherland-Hodgman transition cases",
              caption: "Rows: where the edge starts; columns: where it ends — each cell states the output.",
              axes: { x: "End vertex: inside -> outside", y: "Start vertex: outside -> inside" },
              quadrants: [
                { label: "in -> out", note: "emit the intersection point only" },
                { label: "in -> in", note: "emit the end vertex" },
                { label: "out -> out", note: "emit nothing" },
                { label: "out -> in", note: "emit intersection, then the end vertex" },
              ],
            },
            table: {
              caption: "Polygon-clipping algorithms compared.",
              headers: ["Algorithm", "Method", "Clip region", "Handles"],
              rows: [
                ["Sutherland-Hodgman", "Sequential edge passes, 4 output rules", "Any convex window", "Polygons"],
                ["Cyrus-Beck", "Parametric t-range with inward normals", "Convex region", "Lines and polygons"],
                ["Liang-Barsky", "Four boundary t-inequalities", "Rectangle", "Lines, efficiently"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two named questions",
              body: "Dec 2024 asked Sutherland-Hodgman with example; Jun 2025 asked the principle of Cyrus-Beck. For Cyrus-Beck the three sentences that earn the marks: parametric line form, inward-normal inequality n.(P(t)-B) >= 0, and solving for entering/leaving t on a convex region.",
            },
            examQuestions: [
              {
                q: "Discuss the Sutherland-Hodgman polygon clipping algorithm with example.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Clip the polygon against each window edge in sequence (four passes)",
                  "Per vertex pair apply the four transition rules",
                  "in-in: output end vertex; in-out: output intersection",
                  "out-in: output intersection then vertex; out-out: output nothing",
                  "Each pass outputs a new vertex list fed to the next edge",
                  "Example: a triangle crossing two edges — trace both passes",
                  "Note degenerate edges on concave windows",
                ],
              },
              {
                q: "What is the principle of the Cyrus-Beck algorithm for clipping a polygon? Explain it.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Parametric line P(t) = P0 + t(P1 - P0), t in [0, 1]",
                  "Each clip boundary defined by a point B and inward normal n",
                  "Inside condition: n . (P(t) - B) >= 0",
                  "Substitute and solve the linear inequality for t",
                  "Entering t (largest lower bound) and leaving t (smallest upper bound)",
                  "Visible segment = [t_entering, t_leaving] when valid",
                  "Works for any convex clip region, not just rectangles",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Hidden surface elimination — back-face, z-buffer, painter's algorithm",
            body: [
              "Hidden-surface elimination decides which surfaces are visible when objects occlude each other; methods divide into object-space (decide in geometry, before pixels) and image-space (decide per pixel, at render time). Back-face detection is the object-space quick pass: a polygon facing away from the viewer need not be drawn. With plane equation ax + by + cz + d = 0 and view direction V, the face is a back face when the normal points away — n . Vx > 0 in the convention where Vx = (vx, vy, vz); equivalently, after viewing transformation, c > 0 flags back faces for a viewer looking down -z. For a convex polyhedron alone, back-face removal is a complete solution.",
              "The z-buffer (depth buffer) algorithm is the image-space workhorse: allocate a depth buffer at frame-buffer resolution initialized to the far depth. Rasterize every polygon; for each pixel compare its depth with the stored value and keep the smaller (nearer) one, writing its colour to the frame buffer. Cost is O(1) per pixel with no sorting, and polygons may arrive in any order — the properties that made z-buffering universal in hardware. Costs: memory (a full extra buffer, e.g. 1024 x 768 x 4 bytes = 3 MB at 32-bit depth) and no transparency support without extensions.",
              "The painter's algorithm is the object-space sort: order all polygons by depth (farthest first) and paint them in that order, so nearer polygons overwrite farther ones — like painting a scene from back to front. Depth-sorting by a single key can be ambiguous: two polygons may overlap in depth in a cycle, requiring them to be split into pieces, and each reorder costs a full re-paint. RGPV asked the z-buffer ('What is Z Buffer technique? Write the use of depth and frame buffer' — May 2024, 7 marks), back-face detection as a short note (Jun 2025, 7 marks) and painter's algorithm as a short note (Jun 2025, 7 marks) — three distinct questions over one syllabus line.",
              "Answer each by its category: back-face = object-space pre-pass, complete only for convex solids; z-buffer = image-space, per-pixel, order-independent, memory-hungry; painter's = object-space sort, simple, but ambiguity forces splitting. The comparison sentence — 'z-buffer needs memory, painter's needs correct sorting' — is the discriminator examiners look for. Expect one of the three by name in any session; May and Jun 2025 both delivered.",
            ],
            bullets: [
              "Back-face detection: plane-normal test against the view direction; complete for convex polyhedra.",
              "z-buffer: depth stored per pixel; nearest wins; polygons may come in any order.",
              "z-buffer memory: full-screen depth buffer (1024 x 768 x 4 bytes = 3 MB).",
              "Painter's algorithm: sort by depth, paint far to near; ambiguous overlaps must be split.",
              "Object-space methods (back-face, painter's) work before pixels; z-buffer is image-space.",
              "All three were asked by name: May 2024 (z-buffer), Jun 2025 (back-face, painter's).",
            ],
            keyTerms: [
              { term: "Back-face detection", definition: "Rejecting polygons whose normal faces away from the viewer; sufficient alone for convex solids." },
              { term: "z-buffer", definition: "A per-pixel depth buffer keeping the nearest surface at every pixel — order-independent image-space method." },
              { term: "Painter's algorithm", definition: "Depth-sorting polygons and painting far-to-near so nearer ones overwrite." },
              { term: "Object-space vs image-space", definition: "Whether visibility is decided in geometry or per pixel." },
              { term: "Depth-sort ambiguity", definition: "Overlapping/cyclic depth orders that force polygon splitting in painter's method." },
            ],
            diagram: {
              kind: "compare",
              title: "z-buffer vs painter's algorithm",
              caption: "Memory against sorting — the discriminator question.",
              left: {
                heading: "z-buffer (image space)",
                items: [
                  "Depth stored and compared per pixel",
                  "No sorting; polygons in any order",
                  "O(1) work per pixel — hardware standard",
                  "Costs a full-resolution depth buffer",
                ],
              },
              right: {
                heading: "Painter's (object space)",
                items: [
                  "Sort polygons by depth, paint far to near",
                  "Simple; low extra memory",
                  "Ambiguity: cyclic overlaps force splitting",
                  "Re-sort and re-paint on every change",
                ],
              },
            },
            table: {
              caption: "Hidden-surface methods at a glance.",
              headers: ["Method", "Space", "Key mechanism", "Weakness"],
              rows: [
                ["Back-face detection", "Object", "Normal vs view direction", "Incomplete for non-convex solids"],
                ["z-buffer", "Image", "Per-pixel depth comparison", "Full depth-buffer memory; no transparency"],
                ["Painter's algorithm", "Object", "Depth sort, far-to-near paint", "Sort ambiguity; splitting needed"],
              ],
            },
            callout: {
              type: "exam",
              title: "Three papers, three names",
              body: "Z-buffer with depth/frame-buffer roles (May 2024), back-face detection note (Jun 2025) and painter's algorithm note (Jun 2025) — the entire hidden-surface line is exam material. Classify each method as object-space or image-space in the first sentence; that classification is the rubric.",
            },
            examQuestions: [
              {
                q: "What is the Z-buffer technique? Write the use of depth and frame buffer.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Image-space visibility: a depth value kept for every pixel",
                  "Initialize depth buffer to the far plane; frame buffer to background",
                  "Rasterize each polygon; compare per-pixel depth",
                  "Nearer depth overwrites both buffers (depth + colour)",
                  "Polygons may arrive in any order — no sorting",
                  "Depth buffer holds z-values; frame buffer holds colours",
                  "Cost: extra full-resolution buffer, no transparency",
                ],
              },
              {
                q: "Write short notes on the back face detection algorithm.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Purpose: discard polygons facing away from the viewer before rasterizing",
                  "Plane equation ax + by + cz + d = 0 gives the normal (a, b, c)",
                  "Back face when normal points away: n . Vx > 0 (view convention)",
                  "Equivalent: after viewing transform, c > 0 flags back faces",
                  "Complete for convex polyhedra; only a pre-pass otherwise",
                  "Cheap object-space test computed per polygon",
                ],
              },
              {
                q: "Write short notes on the painter's algorithm.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Object-space method: sort polygons by depth",
                  "Paint farthest first, nearest last — nearer overwrites",
                  "Depth key: maximum/minimum z, or distance of centroid",
                  "Ambiguity: cyclic and intersecting overlaps defeat one key",
                  "Fix: split polygons until a consistent order exists",
                  "Contrast: z-buffer needs memory, painter's needs a correct sort",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Illumination, shading and colour models",
            body: [
              "An illumination model computes the light intensity at a surface point; local models sum three components. Ambient light I_a with coefficient k_a gives every surface a base level (the light that has bounced around the room). Diffuse reflection (Lambert's law) models matte scatter: I = k_d I_l (N . L), proportional to the cosine of the angle between surface normal N and light direction L — brightness depends on orientation, not viewer position. Specular reflection (the Phong model) adds the highlight: I = k_s I_l (R . V)^n, where R is the reflected light direction, V the viewer direction and n the shininess exponent — high n gives tight, mirror-like highlights.",
              "Shading interpolates the model across polygons. Gouraud shading computes intensity at vertices and interpolates colours down the scan lines — cheap, but highlights smear because they exist only where vertices happen to be bright. Phong shading interpolates the normals themselves and evaluates the full illumination model per pixel — accurate highlights at higher cost. Ray tracing is the global method: primary rays from the eye through each pixel are traced to their hit points, spawning recursive reflection and refraction rays that capture mirrors, shadows and transparency — the model RGPV asks as a short note.",
              "Colour models convert the illumination result to displayable colour. RGB is additive — monitors mix red, green, blue light (white = all on). CMY/CMYK is subtractive — printers absorb light with cyan, magenta, yellow inks, each the complement of an RGB primary (C = 1 - R); K (black) is added because CMY inks mix to muddy brown. YIQ carries luminance Y plus chrominance I, Q for broadcast compatibility — old TV luminance worked unchanged. HSV (hue, saturation, value) is the perceptual model for intuitive colour picking. The exam asked diffuse reflection (Dec 2024), diffuse vs specular (Jun 2025), shading and colour models (May 2024) and ray tracing (Dec 2024) — the whole stack is exam material.",
              "The worked number to carry: a surface with k_d = 0.7 lit at N . L = 0.5 with I_l = 1.0 gives diffuse intensity 0.35; adding specular k_s = 0.4 with (R . V)^20 = 0.9 adds 0.36 — the highlight nearly doubles brightness at that pixel, which is exactly the visual difference between the Lambert and Phong terms.",
            ],
            bullets: [
              "Local illumination = ambient (k_a I_a) + diffuse (k_d I_l (N . L)) + specular (k_s I_l (R . V)^n).",
              "Lambert diffuse: orientation-dependent, viewer-independent matte shading.",
              "Phong specular: highlight term with shininess exponent n; tight highlights need large n.",
              "Gouraud interpolates intensities; Phong interpolates normals — highlights survive only in Phong.",
              "Ray tracing: recursive reflection/refraction rays — global effects, expensive.",
              "Colour models: RGB additive (monitors), CMY subtractive (printers), YIQ broadcast, HSV perceptual.",
            ],
            keyTerms: [
              { term: "Ambient light", definition: "The uniform base illumination from multiply-bounced light, scaled by k_a." },
              { term: "Lambert's law", definition: "Diffuse intensity proportional to cos(theta) between surface normal and light direction." },
              { term: "Phong model", definition: "Specular term k_s I_l (R . V)^n producing orientation-sensitive highlights." },
              { term: "Gouraud shading", definition: "Vertex-intensity interpolation across polygon interiors — fast, smears highlights." },
              { term: "HSV", definition: "Hue/saturation/value colour space matching intuitive colour choice; trivially converted to RGB." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The local illumination stack",
              caption: "Ambient at the base, diffuse from orientation, specular on top — a surface's colour is the sum.",
              tiers: [
                { label: "Specular (Phong)", note: "k_s I_l (R . V)^n — viewer-dependent highlight" },
                { label: "Diffuse (Lambert)", note: "k_d I_l (N . L) — orientation-dependent matte response" },
                { label: "Ambient", note: "k_a I_a — the base level from bounced light" },
              ],
            },
            table: {
              caption: "Colour models — the four the syllabus names.",
              headers: ["Model", "Type", "Components", "Used in"],
              rows: [
                ["RGB", "Additive", "Red, Green, Blue", "Monitors, cameras"],
                ["CMY / CMYK", "Subtractive", "Cyan, Magenta, Yellow (+K)", "Printers — C = 1 - R"],
                ["YIQ", "Luminance + chrominance", "Y (brightness), I/Q (colour)", "TV broadcast, JPEG kinship"],
                ["HSV", "Perceptual", "Hue, Saturation, Value", "Colour pickers, artists"],
              ],
            },
            callout: {
              type: "exam",
              title: "Diffuse vs specular, asked twice",
              body: "Diffuse reflection notes came in Dec 2024 and the diffuse-vs-specular compare in Jun 2025 (7 marks each). The discriminator sentence: diffuse depends on the surface-to-light angle only and is viewer-independent; specular peaks where reflect direction meets the viewer and shifts as the eye moves.",
            },
            examQuestions: [
              {
                q: "Compare and contrast diffuse reflection and specular reflection.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Diffuse: matte scattering equal in all directions; Lambert I = k_d I_l (N . L)",
                  "Depends on light angle only — viewer-independent",
                  "Specular: mirror-like highlight; Phong I = k_s I_l (R . V)^n",
                  "Depends on reflect-to-viewer angle and shininess n",
                  "Moves with the viewer; diffuse does not",
                  "Total local intensity sums ambient + diffuse + specular",
                ],
              },
              {
                q: "Write short notes on diffuse reflection.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: light scattered uniformly by matte surfaces",
                  "Lambert's law: intensity proportional to cos(theta) = N . L",
                  "Formula I = k_d I_l (N . L); k_d in [0, 1]",
                  "Viewer-independent — same from any direction",
                  "Worked number: k_d = 0.7, N . L = 0.5 -> intensity 0.35",
                  "Base of polygon shading before the Phong term",
                ],
              },
              {
                q: "Write short notes on: Shading, Colour models, and Ray tracing.",
                marks: 7,
                appearances: ["May 2024", "Dec 2024"],
                outline: [
                  "Gouraud: vertex intensities interpolated per scan line — fast, smeared highlights",
                  "Phong: normals interpolated, model evaluated per pixel — true highlights",
                  "Ray tracing: eye rays hit surfaces, spawn recursive reflection/refraction rays",
                  "Captures shadows, mirrors, transparency — global but expensive",
                  "Colour models: RGB additive, CMY subtractive (C = 1 - R), YIQ luminance/chrominance, HSV perceptual",
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
      title: "Multimedia Systems: Architecture, Hardware and Tools",
      summary:
        "Unit IV builds the multimedia machine: what multimedia and its components are, the applications they serve, the layered multimedia system architecture, the evolving technologies from hypertext to virtual reality, how multimedia objects are defined, multimedia data interface standards and databases, the SCSI/IDE storage interfaces and the MCI control API, and the presentation and authoring tools that compose it all.",
      chapter: {
        number: "04",
        title: "Building Multimedia Systems",
        intro:
          "Unit IV covers multimedia components and applications, multimedia system architecture, evolving technologies, defining objects for multimedia systems, data interface standards and multimedia databases, multimedia hardware with SCSI, IDE and MCI, and multimedia tools — presentation and authoring.",
        inOneBreath:
          "Multimedia is the interactive, computer-controlled integration of text, graphics, audio, video and animation; its architecture stacks applications over authoring tools, middleware and codecs over capture/display hardware. Objects split into discrete (text, image) and continuous (audio, video — isochronous delivery). Databases must hold BLOBs and sustain synchronized streaming; hardware moves data over SCSI or IDE buses under MCI control; authoring tools compose it with card, icon, timeline or scripting metaphors.",
        sections: [
          {
            number: "4.1",
            title: "What multimedia is — components and applications",
            body: [
              "Multimedia is the computer-controlled, interactive integration of at least text, graphics, sound, video and animation into one deliverable — the interactivity and the digital integration distinguish it from a film or a slide deck. Vaughan's definition adds the user controls the experience; the elements are stored digitally and delivered by computer. Linear multimedia plays without input (a movie); interactive/non-linear multimedia takes user input and branches (a game, a training simulation) — the classification line examiners ask for.",
              "The components: text (the primary communication layer, including hypertext links), graphics/static images (bitmaps and vectors), audio (digitized sound and MIDI), video (moving digitized frames, full-motion at 24-30 fps) and animation (synthesized motion from sequenced frames). Each carries its own data rate and format burden — audio needs continuous delivery at 176 KB/s for CD quality, video needs MPEG-scale compression — which is why the rest of this unit and Unit V exist: the components only work if the architecture, hardware and compression behind them can sustain their bandwidth.",
              "The applications span every sector: education and computer-based training (self-paced, branching lessons), information kiosks (museums, malls, airports), entertainment and games, video conferencing and telemedicine, corporate presentations and advertising, web commerce, and simulation/training (flight simulators being the canonical case). RGPV asked the definition-and-applications pair twice: 'What do you understand by multimedia? Explain with its application' (May 2024, 7 marks) and 'Define Multimedia. Explain the applications of multimedia' (Dec 2024, 7 marks).",
              "The full-mark shape is fixed: the definition sentence with the interactivity clause, the five elements in one line each, then four-to-six application domains with a concrete example each, closing with linear vs interactive. Writing the data-rate motivation (why multimedia needs architecture and compression) is the differentiator that turns a memorized list into an understanding answer. Name one example per domain — kiosk, simulator, telemedicine — and the applications paragraph is complete.",
            ],
            bullets: [
              "Multimedia = interactive, computer-controlled integration of text, graphics, audio, video, animation.",
              "Linear (no input, e.g. film) vs interactive/non-linear (user branches the flow).",
              "Audio at CD quality needs 176 KB/s sustained; video needs MPEG-scale compression.",
              "Applications: CBT/education, kiosks, games, video conferencing, presentations, simulation.",
              "Elements are digital and computer-delivered — that is what separates multimedia from TV/film.",
              "Asked verbatim in May 2024 and Dec 2024 (7 marks each).",
            ],
            keyTerms: [
              { term: "Multimedia", definition: "Interactive, computer-controlled integration of text, graphics, audio, video and animation." },
              { term: "Interactivity", definition: "The user's input steers the content — the property separating multimedia from linear media." },
              { term: "Linear vs non-linear", definition: "Playback without input vs branching on user choices." },
              { term: "Hypermedia", definition: "Multimedia extended with links between media elements — the web is its largest instance." },
              { term: "CBT", definition: "Computer-based training — the education application where multimedia branching matters most." },
            ],
            diagram: {
              kind: "fork",
              title: "The five multimedia elements",
              caption: "One system integrates all of them — each element brings its own bandwidth and format problem.",
              start: "A multimedia system integrates",
              branches: [
                { label: "Text + graphics", outcome: "discrete data — layout, links, still images", good: true },
                { label: "Audio", outcome: "continuous stream — needs sustained 8 kbps-176 KB/s delivery", good: true },
                { label: "Video", outcome: "continuous stream — needs MPEG-scale compression and sync", good: true },
                { label: "Animation", outcome: "synthesized motion — keyframes, tweens, rendering", good: true },
              ],
            },
            table: {
              caption: "Applications and what each demands of the system.",
              headers: ["Domain", "Example", "Key demand"],
              rows: [
                ["Education / CBT", "Branching training course", "Interactivity, cheap delivery"],
                ["Kiosks", "Museum, airport information", "Touch input, robust playback"],
                ["Entertainment / games", "3D game, edutainment", "Real-time graphics + audio sync"],
                ["Video conferencing", "Telemedicine consultation", "Low-latency streaming both ways"],
                ["Presentation / advertising", "Corporate sales demo", "Authoring tools, portability"],
                ["Simulation", "Flight simulator", "Real-time 3D + physical audio"],
              ],
            },
            callout: {
              type: "exam",
              title: "The definition + applications pair",
              body: "Asked in both May 2024 and Dec 2024 (7 marks each). Lead with the definition containing 'interactive' and 'computer-controlled', list the five elements in one line each, then four applications with examples. Finishing with linear vs interactive closes the rubric.",
            },
            examQuestions: [
              {
                q: "What do you understand by multimedia? Explain with its applications.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Definition: computer-controlled, interactive integration of multiple media",
                  "Elements: text, graphics, audio, video, animation",
                  "Digital storage and delivery distinguish it from film/TV",
                  "Linear vs interactive/non-linear multimedia",
                  "Applications: CBT, kiosks, games, conferencing, presentations, simulation",
                  "Each application named with one concrete example",
                ],
              },
              {
                q: "Define multimedia. Explain the applications of multimedia.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition with the interactivity clause (Vaughan)",
                  "Five elements and their data-rate burdens",
                  "Education/CBT and kiosks with examples",
                  "Games and video conferencing with latency demands",
                  "Advertising/presentations and simulation",
                  "Close: why multimedia needs architecture and compression (Units IV-V)",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Multimedia system architecture",
            body: [
              "A multimedia system is architected as a stack, because each layer hides the bandwidth and timing complexity of the one below. At the base sits multimedia hardware: capture devices (cameras, microphones, scanners), storage (SCSI/IDE disks, optical drives), processors with sufficient speed, and display/audio output. Above it run device drivers and the operating system, which must schedule time-critical streams — the real-time capture and playback problem that ordinary file systems ignore.",
              "The middle layer is multimedia middleware: codecs (JPEG/MPEG/JPEG-style compression and decompression), synchronization management (lip-sync of audio to video), and stream transport that guarantees sustained bandwidth — the isochronous delivery of Unit IV's defining constraint. Above middleware sit the authoring and editing tools (compose, edit, sequence media), and at the top the applications and interfaces the user actually runs — a kiosk, a player, a game.",
              "Andleigh and Thakrar's textbook frames the same stack around a multimedia workstation: a powerful processor, large RAM and fast storage, graphics and audio subsystems, and the enabling software — OS extensions for real-time scheduling, compression support, and device interfaces like MCI. The workstation answer names the hardware quantities (RAM size, disk bandwidth, audio capability) and the software enabling layers, because 'explain in detail' (Jun 2025's phrasing) wants both halves.",
              "The exam asked: 'Explain in detail about the multimedia system architecture' (Jun 2025, 7 marks). Draw the five-layer stack top-down — applications, authoring tools, middleware/codecs, OS/drivers, hardware — annotate one responsibility per layer, and state the pipeline direction: capture flows up through compression into storage, playback flows down through decompression into display, with synchronization enforced in middleware. Name one concrete component per layer (kiosk player, timeline tool, MPEG codec, MCI driver, SCSI disk) — specificity is what 'in detail' pays for.",
            ],
            bullets: [
              "Layered stack: applications -> authoring tools -> middleware (codecs, sync) -> OS/drivers -> hardware.",
              "Hardware: capture devices, fast processor, large RAM, SCSI/IDE storage, graphics/audio output.",
              "Middleware responsibilities: compression/decompression, stream synchronization, sustained-bandwidth transport.",
              "OS must schedule time-critical audio/video — real-time capture and playback.",
              "Capture path flows up through codecs; playback flows down through decompression.",
              "Andleigh-Thakrar workstation framing: hardware quantities + enabling software layers.",
            ],
            keyTerms: [
              { term: "Multimedia middleware", definition: "The layer providing codecs, synchronization and guaranteed-bandwidth transport between OS and tools." },
              { term: "Isochronous delivery", definition: "Time-bound continuous delivery — data must arrive on schedule, not just eventually." },
              { term: "Capture / playback pipeline", definition: "Upward path from device through compression to storage; downward path through decompression to display." },
              { term: "Lip sync", definition: "Middleware-enforced alignment of audio and video timelines during playback." },
              { term: "Multimedia workstation", definition: "The hardware-plus-OS platform sized for real-time media: CPU, RAM, storage, audio/graphics subsystems." },
            ],
            diagram: {
              kind: "layers",
              title: "The multimedia system stack",
              caption: "Index 0 is the top layer: each layer hides timing and bandwidth complexity from the one above.",
              layers: [
                { label: "Applications", note: "kiosks, players, games — what the user runs" },
                { label: "Authoring / editing tools", note: "compose, sequence, synchronize media" },
                { label: "Middleware: codecs + sync", note: "JPEG/MPEG, stream scheduling, lip sync" },
                { label: "OS + device drivers", note: "real-time scheduling, MCI device control" },
                { label: "Hardware", note: "capture, SCSI/IDE storage, graphics + audio out" },
              ],
            },
            table: {
              caption: "Layer responsibilities in one table.",
              headers: ["Layer", "Responsibility", "Example component"],
              rows: [
                ["Applications", "Deliver the user experience", "Kiosk player, game"],
                ["Authoring tools", "Create and sequence content", "Director-style timeline editor"],
                ["Middleware", "Compress, decompress, synchronize", "MPEG codec, sync manager"],
                ["OS / drivers", "Real-time scheduling, device access", "MCI driver for audio device"],
                ["Hardware", "Capture, store, render", "Sound card, SCSI disk, graphics card"],
              ],
            },
            callout: {
              type: "exam",
              title: "'In detail' means both halves",
              body: "Jun 2025 asked the architecture 'in detail' (7 marks). Give the five-layer diagram with one responsibility each AND the workstation hardware list (CPU, RAM, storage, audio/graphics). Either half alone reads as half an answer.",
            },
            examQuestions: [
              {
                q: "Explain in detail about the multimedia system architecture.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Layered stack: applications, authoring tools, middleware, OS/drivers, hardware",
                  "Hardware: capture devices, fast CPU, large RAM, SCSI/IDE storage, audio/graphics out",
                  "OS layer: real-time scheduling for continuous media",
                  "Middleware: compression/decompression codecs, synchronization, isochronous transport",
                  "Authoring: compose and sequence the elements",
                  "Capture path up, playback path down; sync enforced in middleware",
                  "Workstation framing per Andleigh-Thakrar",
                ],
              },
              {
                q: "Describe the hardware and software requirements of a multimedia workstation.",
                marks: 7,
                outline: [
                  "Processor sized for real-time decompression",
                  "Large RAM for buffers; fast disk for sustained stream rates",
                  "Audio subsystem: ADC/DAC, mixer, synthesizer",
                  "Graphics subsystem: raster acceleration, video overlay",
                  "Storage interfaces: SCSI/IDE; optical drives for distribution",
                  "Software: OS real-time extensions, codecs, MCI-style device interfaces",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Evolving technologies for multimedia",
            body: [
              "Multimedia did not appear whole; it emerged as successive enabling technologies matured. The progression runs: hypertext (linked text, the 1965 Nelson concept), hypermedia (links extended to images and sound), multimedia (time-based media — audio, video, animation — synchronized and interactive), and finally virtual reality (immersive, 3D, real-time responsive environments). Each stage added a capability: links, then media, then time-synchronized media, then immersion.",
              "Beneath that progression, four enabling technologies had to cross their thresholds. Processing power made real-time audio and video decode feasible; storage density put hundreds of megabytes (CD-ROM, then DVD) on a desktop for the price of a textbook; compression standards (JPEG for stills, MPEG for motion) cut the bandwidth of raw media by orders of magnitude; and networking (from modems to broadband) moved media from local playback to streaming delivery. When any one of the four lagged, the application class above it stalled — that dependency structure is the insight examiners want.",
              "The practical reading: every multimedia application today sits somewhere on the maturity ladder — a hypertext manual, a hypermedia encyclopedia, a synchronized multimedia courseware title, a VR training simulator — and the architect's job is matching the application's demands to the four enablers' current state. RGPV asked: 'What are the evolving technologies available for multimedia? Explain them' (Jun 2025, 7 marks).",
              "Answer the question as the two-track story: the application track (hypertext -> hypermedia -> multimedia -> VR) and the enabler track (CPU, storage, compression, networks), each stage with its threshold and one example product. The pyramid diagram gives the ladder; the table gives the enablers — together they are the complete 7-mark response. Order the answer old to new: examiners reward the direction of travel being explicit.",
            ],
            bullets: [
              "Application ladder: hypertext -> hypermedia -> multimedia -> virtual reality.",
              "Hypertext: linked text; hypermedia: links across media; multimedia: synchronized time-based media.",
              "VR adds immersion — real-time 3D response to the user's motion.",
              "Four enablers: processing power, storage density, compression standards, networks.",
              "CD-ROM/DVD put distribution-scale storage on desktops; JPEG/MPEG made streams feasible.",
              "Jun 2025 asked 'what are the evolving technologies... explain them' (7 marks).",
            ],
            keyTerms: [
              { term: "Hypertext", definition: "Non-linear text connected by links — the base technology of the ladder." },
              { term: "Hypermedia", definition: "Hypertext extended to images, audio and video as linkable nodes." },
              { term: "Virtual reality", definition: "Immersive, real-time, computer-generated 3D environments responding to user motion." },
              { term: "Enabling technology", definition: "A capability (CPU, storage, compression, network) whose threshold unlocks an application class." },
              { term: "Streaming", definition: "Playing media as it arrives over a network rather than after full download." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The multimedia maturity ladder",
              caption: "Index 0 is the top: each tier down is an earlier, simpler capability the later ones build on.",
              tiers: [
                { label: "Virtual reality", note: "immersive real-time 3D — the current top" },
                { label: "Multimedia", note: "synchronized interactive audio/video/animation" },
                { label: "Hypermedia", note: "links across text, image and sound" },
                { label: "Hypertext", note: "linked text — the foundation" },
              ],
            },
            table: {
              caption: "The four enablers and the thresholds they crossed.",
              headers: ["Enabler", "Threshold reached", "Unlocked"],
              rows: [
                ["Processing power", "Real-time audio/video decode", "Playback and games on desktops"],
                ["Storage density", "650 MB-4.7 GB removable media", "CD-ROM/DVD distribution"],
                ["Compression", "JPEG 10-20:1, MPEG ~150:1", "Full-motion video in 1.5 Mbps"],
                ["Networking", "Broadband sustained streams", "Web media and streaming"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two tracks, one answer",
              body: "Jun 2025 asked the evolving technologies by name (7 marks). Structure the answer as application ladder plus enabler table — examiners reward the dependency insight (compression enabled full-motion video; broadband enabled streaming) more than a bare list.",
            },
            examQuestions: [
              {
                q: "What are the evolving technologies available for multimedia? Explain them.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Application ladder: hypertext -> hypermedia -> multimedia -> VR",
                  "Hypertext/hypermedia: links within and across media",
                  "Multimedia: synchronized, interactive time-based elements",
                  "VR: immersive real-time 3D response",
                  "Enablers: CPU speed, storage (CD/DVD), compression (JPEG/MPEG), networks",
                  "Dependency insight: each enabler's threshold unlocked the next application class",
                ],
              },
              {
                q: "Explain how compression standards and storage technologies together enabled full-motion multimedia.",
                marks: 7,
                outline: [
                  "Raw video arithmetic: 640 x 480 x 24 x 30 = 221 Mbps — impossible to store or stream",
                  "MPEG compresses to 1.5 Mbps (~150:1) — fits CD-ROM transfer rates",
                  "CD-ROM 650 MB / DVD 4.7 GB hold 70-80 minutes of MPEG-1",
                  "Compression plus distribution storage = the multimedia CD-ROM era",
                  "Broadband later moved the same streams onto networks",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Defining objects for multimedia systems",
            body: [
              "A multimedia object is a unit of captureable and representable data the system stores, retrieves and presents — and the design step Andleigh and Thakrar prescribe is defining those objects before building storage around them. Objects split into two delivery classes: discrete objects (text, graphics, still images — transferred as blobs, timing irrelevant) and continuous objects (audio, video, animation — isochronous streams whose delivery must respect real-time constraints). The classification drives everything downstream: databases, file systems and networks treat the two classes differently.",
              "The definition steps: identify the object types the application needs; for each type, define its attributes (format, size, resolution, duration), its operations (capture, compress, store, retrieve, present, synchronize), and its relationships to other objects (a video stream synchronized with an audio stream, a caption with a slide). Then map each object to storage: discrete objects as indexed blobs, continuous objects as streams with reserved bandwidth and synchronization markers.",
              "The worked example the textbook uses: a multimedia document object composed of a text segment, a linked image, and a narrated audio clip — the text and image are discrete blobs retrievable at any speed, while the narration carries a duration attribute and must start when its slide appears; the relationship table among the three objects is what the presentation engine reads at playback. Time-stamps in the relationship definitions are what make synchronization declarative rather than procedural.",
              "The exam asked: 'Explain how we can define the objects for the multimedia systems in simple steps with suitable example' (Dec 2024, 7 marks). Answer with the discrete/continuous split first, then the five definition steps, then the narrated-slide example naming one attribute, one operation and one relationship per object — the table below is the skeleton. Keep the discrete/continuous split first; it is the classification the rest of the answer hangs on.",
            ],
            bullets: [
              "Multimedia object: a captureable, representable data unit with attributes, operations and relationships.",
              "Discrete objects (text, image): transfer as blobs; timing irrelevant.",
              "Continuous objects (audio, video): isochronous streams with real-time constraints.",
              "Definition steps: identify types -> define attributes -> define operations -> define relationships -> map to storage.",
              "Relationships carry time-stamps — synchronization becomes declarative data, not code.",
              "Example: slide document = text blob + image blob + timed audio narration.",
            ],
            keyTerms: [
              { term: "Multimedia object", definition: "The unit of data — with attributes, operations and relationships — a multimedia system stores and presents." },
              { term: "Discrete object", definition: "Text or still-image data transferred without timing constraints." },
              { term: "Continuous object", definition: "Audio/video/animation delivered as an isochronous real-time stream." },
              { term: "Attribute", definition: "A descriptive property of an object: format, size, resolution, duration." },
              { term: "Relationship", definition: "A defined link between objects, typically carrying the synchronization time-stamps." },
            ],
            diagram: {
              kind: "flow",
              title: "Defining objects, step by step",
              caption: "The five steps Dec 2024 asked for, in order.",
              steps: [
                { label: "Identify object types", note: "text, image, audio, video" },
                { label: "Classify delivery", note: "discrete vs continuous (isochronous)" },
                { label: "Define attributes", note: "format, size, resolution, duration" },
                { label: "Define operations + relationships", note: "capture, present, synchronize" },
                { label: "Map to storage", note: "blobs for discrete; streams + bandwidth for continuous" },
              ],
            },
            table: {
              caption: "The two object classes and their storage consequences.",
              headers: ["Property", "Discrete object", "Continuous object"],
              rows: [
                ["Examples", "Text, graphics, still image", "Audio, video, animation"],
                ["Delivery", "As fast as possible (blob)", "Isochronous — on schedule"],
                ["Key attribute", "Size, format", "Duration, bit rate"],
                ["Storage mapping", "Indexed blob", "Stream with reserved bandwidth"],
                ["Failure mode", "Slow, never broken", "Late data is lost data"],
              ],
            },
            callout: {
              type: "exam",
              title: "The Dec 2024 steps question",
              body: "'Define the objects for multimedia systems in simple steps with suitable example' (Dec 2024, 7 marks) — the word 'steps' wants the ordered five-step flow, and 'suitable example' wants the narrated-slide document naming attribute, operation and relationship. Both words in the question are rubric items.",
            },
            examQuestions: [
              {
                q: "Explain how we can define the objects for the multimedia systems in simple steps with suitable example.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Object classes: discrete (text/image) vs continuous (audio/video)",
                  "Step 1: identify the object types the application needs",
                  "Step 2: define attributes — format, size, resolution, duration",
                  "Step 3: define operations — capture, compress, store, retrieve, present",
                  "Step 4: define relationships with synchronization time-stamps",
                  "Step 5: map to storage — blobs vs streams with reserved bandwidth",
                  "Example: slide document = text + image blobs + timed narration",
                ],
              },
              {
                q: "Why must continuous multimedia objects be treated differently from discrete ones in storage and networking?",
                marks: 7,
                outline: [
                  "Continuous objects are isochronous — late data is unusable data",
                  "Disks and networks optimized for average throughput, not guarantees",
                  "Streams need reserved bandwidth and buffers to absorb jitter",
                  "Synchronization between streams must be enforced (lip sync)",
                  "Discrete objects tolerate delay — standard file semantics suffice",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Multimedia data interface standards and multimedia databases",
            body: [
              "Multimedia data interface standards define how media data crosses the boundaries between producers, storage and consumers — the agreed formats and control interfaces that let a capture card, an OS and a player interoperate. The syllabus's exemplars: MCI (Microsoft's Media Control Interface — the command-level control standard for media devices, section 4.6), the JPEG/MPEG compression standards acting as the data interchange formats for still and moving images, and the file format standards of Unit V (TIFF, MIDI, DIB) that make media portable between systems.",
              "A multimedia database extends a conventional DBMS to store, index and retrieve heterogeneous, often continuous media. The structural change: media live as BLOBs (binary large objects) rather than rows of typed fields, and retrieval adds content-based queries (find images similar to X, find the video containing scene Y) alongside keyword metadata. The functional change is the hard one: retrieval must sustain isochronous playback — a database returning a 176 KB/s audio stream late is as broken as one returning it wrong.",
              "The database requirements list is the exam answer: large-object storage (BLOBs) with efficient streaming; continuous, bandwidth-guaranteed retrieval; synchronization between multiple retrieved streams; indexing and query support for content (features, keywords, time-stamped annotations); and transactional integrity for very large, immutable media files. Conventional databases fail at least the bandwidth and synchronization requirements — that contrast is the point of the question.",
              "The exam asked: 'Write short notes on the multimedia databases' (Jun 2025, 7 marks). Answer as: what changes vs a traditional DB (BLOBs, continuous retrieval, sync), the requirements list, and one application example (a video-on-demand library or medical image archive). Pair it with the interface-standards sentence so the syllabus line is fully covered. Quote MCI and JPEG/MPEG as the standard examples — real names make the standards half concrete.",
            ],
            bullets: [
              "Interface standards: MCI for device control; JPEG/MPEG as still/motion interchange; Unit V file formats for portability.",
              "Multimedia database stores media as BLOBs, not typed rows.",
              "Retrieval must be isochronous — sustained bandwidth, not average throughput.",
              "Content-based retrieval: similarity queries, keyword/time-stamped annotations.",
              "Synchronization: multiple streams retrieved in lockstep (video + audio + captions).",
              "Jun 2025 asked multimedia databases as a short note (7 marks).",
            ],
            keyTerms: [
              { term: "BLOB", definition: "Binary large object — the untyped storage unit holding media inside a database." },
              { term: "Content-based retrieval", definition: "Querying media by features or similarity rather than by filename alone." },
              { term: "Multimedia data interface standard", definition: "The agreed format/control contract letting capture, OS and players interoperate." },
              { term: "Isochronous retrieval", definition: "Database output delivered on a guaranteed schedule for continuous playback." },
              { term: "Video-on-demand", definition: "The canonical MMDB application: a library of streams retrieved per viewer on request." },
            ],
            diagram: {
              kind: "compare",
              title: "Traditional DB vs multimedia DB",
              caption: "What changes when the stored objects start playing instead of printing.",
              left: {
                heading: "Traditional database",
                items: [
                  "Typed rows of bounded-size fields",
                  "Average throughput is enough",
                  "Single-stream transactions",
                  "Queries on values (SQL predicates)",
                ],
              },
              right: {
                heading: "Multimedia database",
                items: [
                  "BLOBs of heterogeneous, unbounded media",
                  "Isochronous retrieval — bandwidth guaranteed",
                  "Multi-stream synchronization (A/V + captions)",
                  "Content queries: similarity, keywords, time-stamps",
                ],
              },
            },
            table: {
              caption: "Multimedia database requirements.",
              headers: ["Requirement", "Why", "Example"],
              rows: [
                ["BLOB storage", "Media are untyped, large binaries", "100 MB video clip in a row"],
                ["Sustained-bandwidth retrieval", "Playback cannot tolerate gaps", "176 KB/s audio, 1.5 Mbps MPEG-1"],
                ["Synchronized streams", "A/V must play in lockstep", "Lip-sync enforcement"],
                ["Content indexing", "Search inside media, not just metadata", "Scene or speech search"],
                ["Large-object integrity", "Files too big for normal transactions", "Write-once archive semantics"],
              ],
            },
            callout: {
              type: "exam",
              title: "The Jun 2025 short note",
              body: "'Write short notes on the multimedia databases' (Jun 2025, 7 marks) — lead with the two structural changes (BLOBs, isochronous retrieval), then the requirements list, then one application. Naming that conventional DBMS fails the bandwidth and synchronization requirements is the closing mark.",
            },
            examQuestions: [
              {
                q: "Write short notes on the multimedia databases.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "MMDB stores heterogeneous media as BLOBs",
                  "Retrieval must be isochronous — sustained bandwidth for playback",
                  "Synchronization across retrieved streams (video + audio)",
                  "Content-based queries: similarity, keywords, annotations",
                  "Contrast with traditional DBMS: typed rows, average throughput",
                  "Application: video-on-demand library, medical image archive",
                ],
              },
              {
                q: "What are multimedia data interface standards? Name the standards at each boundary of a multimedia system.",
                marks: 7,
                outline: [
                  "Definition: agreed formats/control contracts between capture, OS, storage, player",
                  "Device control: MCI command interface",
                  "Still-image interchange: JPEG; motion: MPEG",
                  "File formats: TIFF, DIB, MIDI, RTF for portability",
                  "Without them every capture card and player would be proprietary",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Multimedia hardware — SCSI, IDE and MCI",
            body: [
              "Multimedia hardware is the physical layer: capture and playback devices (sound cards, video capture cards, CD-ROM/DVD drives), and above all the storage interfaces that move their data. SCSI (Small Computer System Interface) is a parallel bus protocol: a host adapter drives a chain of up to 7 (narrow) or 15 (wide) devices — disks, scanners, optical drives — each addressed by ID, with the chain physically terminated at both ends. SCSI-2 transferred 5-10 MB/s narrow, 20 MB/s wide; later variants scaled further — the interface of servers and high-bandwidth multimedia storage.",
              "IDE/ATA is the cheaper alternative: one controller channel carrying up to two drives (master/slave), with the electronics integrated into each drive — hence 'integrated'. ATA/UDMA modes scaled from 8 to 33, 66, 100 MB/s per channel. IDE won the desktop on cost per drive; SCSI kept the professional niche on device count, sustained throughput under concurrent access, and distance. The multimedia-relevant contrast: a video-editing rig pulling two streams at once needs SCSI's bus arbitration; a desktop player streaming one MPEG file is fine on IDE.",
              "MCI (Media Control Interface) is the software side of multimedia hardware: Microsoft's standard command-level API for controlling media devices — audio, MIDI sequencer, CD audio, videodisc, video overlay — with uniform command strings (open, play, pause, status) sent per device type. It decouples applications from hardware: the same 'play' verb drives whatever sound or CD device is installed, which is exactly why authoring tools could target generic 'multimedia PCs' rather than specific cards.",
              "The exam asked: 'Discuss briefly about the Multimedia Hardware' (Dec 2024, 7 marks). Answer with the device roster (sound card, capture card, optical drives, speakers/mics), then the SCSI-vs-IDE storage contrast with numbers, then MCI as the software control standard. The code block below shows MCI's uniform command style — quoting two command strings makes the answer concrete. One SCSI number (5-20 MB/s at SCSI-2) and one IDE number (UDMA 33-100 MB/s) complete the contrast.",
            ],
            bullets: [
              "SCSI: parallel bus, host adapter + up to 7/15 devices, both ends terminated.",
              "SCSI-2 speeds: 5-10 MB/s narrow, 20 MB/s wide — server-class sustained throughput.",
              "IDE/ATA: 2 devices per channel, integrated drive electronics, UDMA 33/66/100 MB/s.",
              "SCSI wins on device count and concurrent streams; IDE wins on cost — the desktop choice.",
              "MCI: uniform command-string API (open/play/status) controlling any media device type.",
              "Device roster: sound card, video capture, CD-ROM/DVD, microphones and speakers.",
            ],
            keyTerms: [
              { term: "SCSI", definition: "Small Computer System Interface — a multi-device parallel bus with IDs and bus termination." },
              { term: "IDE/ATA", definition: "Integrated Drive Electronics — the 2-devices-per-channel desktop storage interface." },
              { term: "Terminator", definition: "The electrical termination at both SCSI chain ends without which the bus fails." },
              { term: "MCI", definition: "Media Control Interface — Microsoft's command-level standard for controlling media devices." },
              { term: "Host adapter", definition: "The controller card that owns the SCSI bus and arbitrates its devices." },
            ],
            diagram: {
              kind: "compare",
              title: "SCSI vs IDE for multimedia storage",
              caption: "The Dec 2024 hardware question in one contrast.",
              left: {
                heading: "SCSI",
                items: [
                  "Bus of 7-15 devices under one host adapter",
                  "Sustained throughput under concurrent access",
                  "5-20 MB/s at SCSI-2; farther reach",
                  "Video editing, servers, scanning rigs",
                ],
              },
              right: {
                heading: "IDE / ATA",
                items: [
                  "Two devices per channel (master/slave)",
                  "Cheapest per drive — desktop standard",
                  "UDMA 33/66/100 MB/s per channel",
                  "Single-stream playback, general desktop use",
                ],
              },
            },
            codeExample: {
              language: "c",
              caption: "mci.c — the Media Control Interface command style",
              code: `#include <windows.h>
#include <mmsystem.h>

/* the same four verbs drive any MCI device type */
mciSendString("open cdaudio", NULL, 0, NULL);
mciSendString("play cdaudio from 1", NULL, 0, NULL);

char status[128];
mciSendString("status cdaudio mode", status, 128, NULL);
/* status now holds e.g. "playing" — device-agnostic control */`,
            },
            callout: {
              type: "warning",
              title: "Termination kills SCSI chains",
              body: "A SCSI bus without proper termination at both physical ends reflects signals and fails intermittently — the classic lab fault. In answers, pair the multi-device advantage with the termination requirement; that pairing shows you know SCSI operationally, not just by name.",
            },
            examQuestions: [
              {
                q: "Discuss briefly about the multimedia hardware.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Device roster: sound card, video capture card, CD-ROM/DVD drives, mics/speakers",
                  "Storage interfaces: SCSI vs IDE/ATA",
                  "SCSI: multi-device bus (7-15), 5-20 MB/s SCSI-2, needs termination",
                  "IDE: 2 devices/channel, cheaper, UDMA 33-100 MB/s",
                  "MCI: uniform software control (open/play/status) over device types",
                  "Choose SCSI for concurrent streams, IDE for cost",
                ],
              },
              {
                q: "Explain the MCI and show how the same commands control different media devices.",
                marks: 7,
                outline: [
                  "MCI = Media Control Interface, Microsoft's device-control standard",
                  "Command strings: open, play, pause, stop, status, set",
                  "Uniform across device types: cdaudio, waveaudio, sequencer, overlay",
                  "Applications decoupled from specific hardware cards",
                  "Example: same play verb drives CD audio or WAV playback",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Multimedia tools — presentation and authoring tools",
            body: [
              "Multimedia software divides by the level of interactivity it can express. Presentation tools build linear, time-ordered shows — slide decks with transitions, embedded images, sound and video clips — where the author arranges content but the audience path is fixed; PowerPoint is the archetype. Authoring tools compose interactive multimedia: they link media into branching structures that respond to user input, combining the five elements with navigation logic — the difference between showing a film and building a kiosk.",
              "Authoring tools cluster by metaphor. Card/scripting metaphors organize content as pages of a book with a scripting language (HyperCard, ToolBook); icon/flowline metaphors build flowcharts of icons carrying media and logic (Authorware); time-based metaphors sequence media on a timeline with channels and frames (Director); slide metaphors are presentation tools themselves. The metaphor shapes what is easy: timelines excel at synchronized playback, flowlines at decision logic, cards at navigational content, scripts at algorithmic behaviour.",
              "Choosing a tool is choosing against the application's demands: a linear corporate presentation needs only presentation software; a branching CBT course needs an authoring tool with variables and logic; a game-grade product needs programming beneath the authoring layer. Every tool ultimately exports to a runtime playable on a target machine — the portability constraint that made authoring tools the delivery side of the 'multimedia PC' standard.",
              "The exam asked this pair: 'What are the different Presentation tools available? Explain them' (Dec 2024, 7 marks) and 'Authoring tools' as a short note (May 2024, 7 marks). Answer the first with presentation-tool features (slides, transitions, media embedding, export) and examples; the second with the four authoring metaphors and one tool per metaphor — the matrix below is the ready-made diagram for both.",
            ],
            bullets: [
              "Presentation tools: linear, time-ordered shows — slides, transitions, embedded media (PowerPoint).",
              "Authoring tools: interactive, branching multimedia with navigation logic (Director, Authorware, ToolBook).",
              "Four metaphors: card/script, icon/flowline, timeline, slide.",
              "HyperCard/ToolBook = cards + scripting; Authorware = flowline icons; Director = timeline.",
              "Metaphor determines strength: sync (timeline), logic (flowline), navigation (cards).",
              "Both tool families asked by name: Dec 2024 (presentation), May 2024 (authoring).",
            ],
            keyTerms: [
              { term: "Presentation tool", definition: "Software composing linear, time-ordered slide shows with embedded media." },
              { term: "Authoring tool", definition: "Software composing interactive, branching multimedia from linked media elements." },
              { term: "Authoring metaphor", definition: "The organizing model a tool offers — cards, flowline icons, timeline, slides." },
              { term: "Scripting language", definition: "The embedded language (e.g. HyperCard's HyperTalk) that adds logic inside card metaphors." },
              { term: "Runtime", definition: "The playback-only export of an authored title, playable without the full tool." },
            ],
            diagram: {
              kind: "matrix",
              title: "Authoring metaphors on two axes",
              caption: "Synchronization power against scripting depth — the four metaphor families sit in the quadrants.",
              axes: { x: "Timeline synchronization -> Scripting depth", y: "Page metaphor -> Flow metaphor" },
              quadrants: [
                { label: "Card + script", note: "HyperCard, ToolBook — pages with embedded language" },
                { label: "Timeline", note: "Director — channels and frames for synced media" },
                { label: "Slide / presentation", note: "PowerPoint — linear, media-embedded shows" },
                { label: "Icon / flowline", note: "Authorware — flowchart icons carrying logic" },
              ],
            },
            table: {
              caption: "Tool families and their fit.",
              headers: ["Family", "Example", "Strength", "Typical use"],
              rows: [
                ["Presentation", "PowerPoint", "Fast linear shows with media", "Corporate decks, lectures"],
                ["Card/scripting", "HyperCard, ToolBook", "Navigational content + logic", "Reference titles, CBT"],
                ["Icon/flowline", "Authorware", "Explicit decision logic", "Interactive courseware"],
                ["Timeline", "Director", "Frame-accurate synchronization", "Animation, game-like titles"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two questions, one diagram",
              body: "Dec 2024 asked presentation tools; May 2024 asked authoring tools as a short note (7 marks each). The same metaphor matrix answers both — for presentation tools add the feature list (slides, transitions, media embedding, export to runtime), for authoring tools add the interactivity contrast.",
            },
            examQuestions: [
              {
                q: "What are the different presentation tools available? Explain them.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Definition: tools for linear, time-ordered slide shows",
                  "Features: slides, transitions, embedded audio/video, speaker notes",
                  "PowerPoint as the archetype; web-based and PDF-export variants",
                  "Export to self-running runtimes for kiosks",
                  "Contrast with authoring tools: fixed path vs user branching",
                ],
              },
              {
                q: "Write short notes on authoring tools.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "Definition: compose interactive, branching multimedia",
                  "Card/script metaphor: HyperCard, ToolBook — pages + HyperTalk",
                  "Icon/flowline: Authorware — flowchart of media and logic icons",
                  "Timeline: Director — channels, frames, frame-accurate sync",
                  "Choice by application: CBT logic vs animation sync",
                  "Delivery as runtime exports on target machines",
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
      title: "Compression, File Formats and Multimedia Data",
      summary:
        "Unit V moves the media: compression and decompression from lossless RLE/Huffman to lossy DCT, the JPEG image pipeline, the multimedia file format standards TIFF, MIDI, DIB and RTF, the MPEG standards and full-motion video, digital voice and audio with its sampling arithmetic, video image and animation with the principles of animation, and the multimedia I/O and storage/retrieval technologies that hold it all.",
      chapter: {
        number: "05",
        title: "Compress, Store, Play",
        intro:
          "Unit V covers compression and decompression, the JPEG pipeline, multimedia data and file format standards (TIFF, MIDI, DIB, RTF, MPEG), multimedia I/O technologies, digital voice and audio, video image and animation including full-motion video, and storage and retrieval technologies.",
        inOneBreath:
          "Compression halves the multimedia problem: lossless (RLE, Huffman) reconstructs exactly for text and archives, lossy (DCT, quantization) discards what eyes cannot see for 10-20:1 stills and ~150:1 video. JPEG runs RGB -> YCbCr -> 8x8 DCT -> quantize -> zigzag -> Huffman; MPEG adds motion prediction with I/P/B frames. MIDI stores music as events, not samples; CD audio is 44.1 kHz, 16-bit, stereo at 10.6 MB per minute; animation displays sequenced frames fast enough to exploit persistence of vision; storage tiers from CD/DVD to jukeboxes must sustain the compressed stream's bandwidth.",
        sections: [
          {
            number: "5.1",
            title: "Compression and decompression — lossy vs lossless",
            body: [
              "Compression encodes data in fewer bits; decompression restores it. The fundamental split: lossless compression reconstructs the original exactly — required for text, programs, medical images and archives — while lossy compression discards information the receiver (usually the human eye or ear) is least likely to miss, buying far higher ratios at the price of irreversibility. The compression ratio is the score: raw bits / compressed bits, with lossless methods achieving 2-4:1 on typical data and lossy methods 10-30:1 on images and over 100:1 on video.",
              "The lossless toolbox: run-length encoding (RLE) replaces runs with counts — the sequence AAAABBB becomes 4A3B, superb on flat areas, useless on noise; the PackBits variant tags runs with control bytes and is the compression inside TIFF and Mac PICT. Huffman coding assigns short bit codes to frequent symbols and long codes to rare ones — optimal prefix coding; LZW builds a dictionary of repeated substrings on the fly (the GIF and early-TIFF method). All three are entropy coders: they remove statistical redundancy and nothing else.",
              "Lossy compression adds a perceptual step before entropy coding: transform the data into a domain where perception is separable (the DCT for images, motion compensation for video), then quantize — divide by larger factors and round, throwing away small coefficients the eye ignores. JPEG does this per 8x8 block; MPEG does it per macroblock plus temporal prediction. Quantization is where information is destroyed and where the quality dial lives.",
              "The exam asked both framings: 'Compare and contrast lossy and lossless compressions' (Dec 2024, 7 marks) and 'Explain in detail about different compression techniques' (Jun 2025, 7 marks). Answer the first with the comparison table and one ratio per side; answer the second with the four techniques (RLE, Huffman, LZW, DCT-based) each carrying its mechanism and use. The code below makes RLE/PackBits concrete — a favourite numerical.",
            ],
            bullets: [
              "Lossless reconstructs exactly (2-4:1); lossy discards perceptual detail (10-30:1 images, 100+:1 video).",
              "RLE: replace runs with counts — 4A3B; PackBits tags runs with control bytes (TIFF, PICT).",
              "Huffman: short codes for frequent symbols — optimal prefix coding.",
              "LZW: adaptive dictionary of substrings — the GIF method.",
              "Lossy pipeline: transform (DCT) -> quantize (the loss) -> entropy code (Huffman/RLE).",
              "Asked twice: Dec 2024 (lossy vs lossless) and Jun 2025 (compression techniques).",
            ],
            keyTerms: [
              { term: "Compression ratio", definition: "Raw bits divided by compressed bits — the headline number of any scheme." },
              { term: "Lossless compression", definition: "Exact reconstruction guaranteed; the only option for text, code and archives." },
              { term: "Lossy compression", definition: "Discards perceptually irrelevant data; irreversible but 10-100x smaller." },
              { term: "Entropy coding", definition: "Huffman/RLE/LZW — removes statistical redundancy without touching content." },
              { term: "Quantization", definition: "The lossy step: dividing transform coefficients by a table and rounding, discarding small values." },
            ],
            diagram: {
              kind: "compare",
              title: "Lossy vs lossless compression",
              caption: "The Dec 2024 contrast — what each trades and what each is for.",
              left: {
                heading: "Lossless",
                items: [
                  "Exact reconstruction, byte for byte",
                  "Ratios 2-4:1 on typical data",
                  "RLE, PackBits, Huffman, LZW",
                  "Text, code, TIFF archives, medical images",
                ],
              },
              right: {
                heading: "Lossy",
                items: [
                  "Approximation — perceptually similar",
                  "Ratios 10-30:1 (JPEG), 100+:1 (MPEG)",
                  "Transform + quantize + entropy code",
                  "Photos, music, streaming video",
                ],
              },
            },
            table: {
              caption: "The four syllabus techniques in one table.",
              headers: ["Technique", "Type", "Mechanism", "Typical use"],
              rows: [
                ["RLE / PackBits", "Lossless", "Runs replaced by counts/tags", "TIFF, flat-area images"],
                ["Huffman coding", "Lossless", "Short codes for frequent symbols", "Final stage of JPEG/MPEG"],
                ["LZW", "Lossless", "Adaptive substring dictionary", "GIF, early TIFF"],
                ["DCT + quantization", "Lossy", "8x8 frequency transform, discard small terms", "JPEG stills, MPEG blocks"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "rle.py — PackBits-style run encoding and decoding",
              code: `def rle_encode(data):
    out, i = [], 0
    while i < len(data):
        run = 1
        while i + run < len(data) and data[i + run] == data[i]:
            run += 1
        out.append(f"{run}{data[i]}")   # e.g. "4A"
        i += run
    return "".join(out)

def rle_decode(encoded):
    out = []
    for token in encoded.split():
        out.append(token[-1] * int(token[:-1]))
    return "".join(out)

raw = "AAAABBBCCD"
packed = rle_encode(raw)          # 4A3B2C1D
print(packed, "->", rle_decode(packed))  # 9 chars from 11`,
            },
            callout: {
              type: "exam",
              title: "Two sessions, two framings",
              body: "Dec 2024 asked lossy vs lossless by compare; Jun 2025 asked the different compression techniques in detail (7 marks each). One prepared answer covers both: the compare table plus four techniques with mechanism and use. Adding one ratio per technique (RLE 3:1 on flat art, JPEG 15:1, MPEG-1 150:1) earns the numerical mark.",
            },
            examQuestions: [
              {
                q: "Compare and contrast lossy and lossless compressions.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Lossless: exact reconstruction; lossy: perceptual approximation",
                  "Lossless methods: RLE, PackBits, Huffman, LZW",
                  "Lossy pipeline: transform (DCT) -> quantize -> entropy code",
                  "Ratios: 2-4:1 lossless vs 10-30:1 JPEG, 100+:1 MPEG",
                  "Use: text/code/archives vs photos/audio/video",
                  "Decompression: reversible vs irreversible",
                ],
              },
              {
                q: "Explain in detail about different compression techniques.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "RLE: runs to counts; works on flat areas, fails on noise",
                  "PackBits: control-byte tagged runs inside TIFF",
                  "Huffman: frequency-sorted prefix codes, optimal symbol coding",
                  "LZW: adaptive dictionary, the GIF method",
                  "DCT + quantization: 8x8 frequency blocks, discard small coefficients",
                  "Ratios and use case per technique",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "The JPEG image compression pipeline",
            body: [
              "JPEG is the baseline lossy standard for continuous-tone still images — photographs, not line art — and its pipeline is the syllabus's worked example of lossy compression done right. Stage one converts RGB to a luminance/chrominance space (YCbCr) and subsamples the chroma 4:2:0, because the eye resolves brightness far better than colour — that alone halves the data before any 'lossy' flag is even raised perceptually.",
              "Stage two splits the image into 8x8 pixel blocks and applies the forward DCT, transforming each block into 64 frequency coefficients: one DC term (average brightness) and 63 AC terms from low to high spatial frequency. Stage three quantizes — divides each coefficient by a quantization table (large divisors for high frequencies, small for low) and rounds; this is the lossy step, and the quality setting scales the table. An 8x8 block of 64 bytes typically collapses to a handful of significant coefficients.",
              "Stage four entropy-codes the result: coefficients are read in zigzag order (so zeros cluster), the DC term is coded differentially from the previous block's DC, and AC terms are run-length encoded (runs of zeros) then Huffman coded. The decoder runs the pipeline backwards: dequantize, inverse DCT, upsample chroma, convert to RGB. Typical ratios: 10:1-20:1 with visually negligible loss; 30:1+ with visible artifacts.",
              "The worked number to carry: a 1024 x 1024 24-bit image is 3 MB raw; at 15:1 JPEG it stores as ~200 KB. A 64-byte 8x8 block of nearly flat sky quantizes to a DC term plus two or three low-frequency AC terms — a few bytes plus run-length zeros. The exam framing (compression techniques, file formats, the lab's 'implement JPEG compression' practical) wants the six stages named in order with the quantization table identified as the lossy step.",
            ],
            bullets: [
              "Stage 1: RGB -> YCbCr, chroma subsampled 4:2:0 (eye resolves brightness over colour).",
              "Stage 2: 8x8 blocks -> forward DCT: 1 DC + 63 AC frequency coefficients.",
              "Stage 3: quantize with a table — THE lossy step; quality dial scales the table.",
              "Stage 4: zigzag scan clusters zeros; DC differential + AC run-length + Huffman coding.",
              "Ratios: 10-20:1 visually lossless; 30:1+ with artifacts.",
              "JPEG is for continuous-tone stills — line art and text ring (Gibbs artifacts) at the edges.",
            ],
            keyTerms: [
              { term: "DCT", definition: "Discrete cosine transform — expresses an 8x8 block as 64 spatial-frequency coefficients." },
              { term: "DC coefficient", definition: "The block's average brightness, coded differentially between consecutive blocks." },
              { term: "Quantization table", definition: "The divisor table deciding which frequencies survive; scaling it is the quality dial." },
              { term: "Zigzag scan", definition: "Reading coefficients diagonally so high-frequency zeros cluster for run-length coding." },
              { term: "Chroma subsampling", definition: "Storing colour at lower resolution (4:2:0) than luminance — perceptually invisible." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The JPEG encoder pipeline",
              caption: "Six stages from RGB pixels to a Huffman-coded bitstream — quantization is the only lossy stage.",
              stages: [
                { label: "Colour convert", note: "RGB -> YCbCr, subsample 4:2:0" },
                { label: "Block split", note: "8 x 8 pixel blocks" },
                { label: "Forward DCT", note: "1 DC + 63 AC coefficients" },
                { label: "Quantize", note: "divide by table, round — the loss" },
                { label: "Zigzag + RLE", note: "cluster the zeros" },
                { label: "Huffman code", note: "entropy stage, reversible" },
              ],
            },
            table: {
              caption: "JPEG stages and what each buys.",
              headers: ["Stage", "Operation", "Reversible?", "Benefit"],
              rows: [
                ["Colour + subsample", "RGB -> YCbCr, 4:2:0", "Perceptually", "Halves data before coding"],
                ["DCT", "8x8 frequency transform", "Yes", "Energy concentrates in few terms"],
                ["Quantization", "Divide + round by table", "No — the loss", "10-30:1 of the ratio"],
                ["Zigzag + RLE + Huffman", "Entropy coding", "Yes", "Squeezes the remaining zeros"],
              ],
            },
            callout: {
              type: "warning",
              title: "JPEG is not for line art",
              body: "DCT ringing puts visible fuzz along sharp edges, so crisp text, diagrams and line drawings should use lossless formats (GIF/PNG/TIFF) instead. State this limitation in any JPEG answer — it shows the standard's scope, not just its steps.",
            },
            examQuestions: [
              {
                q: "Explain the JPEG compression scheme for still images, naming each stage and identifying where information is lost.",
                marks: 7,
                outline: [
                  "RGB -> YCbCr; chroma subsampled 4:2:0",
                  "8x8 block split; forward DCT -> 1 DC + 63 AC",
                  "Quantization by table — the lossy stage; quality dial",
                  "Zigzag order clusters zeros; DC differential coding",
                  "AC run-length + Huffman entropy coding",
                  "Typical 10-20:1 visually lossless; 3 MB -> 200 KB at 15:1",
                  "Limitation: ringing on sharp edges — not for line art",
                ],
              },
              {
                q: "Why does JPEG work in the frequency domain rather than compressing pixels directly?",
                marks: 7,
                outline: [
                  "Natural images concentrate energy in low frequencies",
                  "DCT decorrelates pixels so few coefficients carry most content",
                  "The eye is less sensitive to high-frequency error — safe to discard there",
                  "Quantizing frequencies allocates loss where perception cannot see it",
                  "Pixel-domain lossy coding would smear structure everywhere",
                ],
              },
              {
                q: "Explain in detail about different compression techniques.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Lossless entropy coders: RLE, PackBits, Huffman, LZW",
                  "Lossy pipeline: transform -> quantize -> entropy code",
                  "JPEG instantiates it: RGB -> YCbCr, 8x8 DCT, quantize table, zigzag + RLE + Huffman",
                  "Quantization is the lossy stage; the quality dial scales the table",
                  "Typical ratios: 10-20:1 visually lossless; a 3 MB photo -> ~200 KB",
                  "MPEG adds temporal motion prediction on top of the same machinery",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Multimedia file formats — TIFF, DIB, RTF and MIDI",
            body: [
              "A multimedia file format standard defines the byte-level structure — headers, tags, data sections — that lets different systems exchange media. The syllabus names four image/text/music formats. TIFF (Tagged Image File Format) stores raster images as a set of tagged structures: each tag names a property (width, resolution, compression), the data follows, and readers process only the tags they know — the most extensible image format, supporting lossless compression (LZW/PackBits), multiple pages per file and any bit depth; the format of scanners, archives and publishing.",
              "DIB (Device-Independent Bitmap) is Windows' raw bitmap format: a header with dimensions and colour depth followed by uncompressed (or RLE) pixel data — simple and fast, the format of BMP files, at the cost of large files with no advanced compression. RTF (Rich Text Format) is the text-with-formatting standard: markup describing fonts, styles, and embedded objects, readable across word processors — the format in which 'text plus embedded media' travels portably.",
              "MIDI (Musical Instrument Digital Interface) is the radical one: it stores no audio at all, but a score of events — note-on/note-off, pitch, velocity, instrument choice, tempo — that a synthesizer performs in real time. A four-minute MIDI file is a few kilobytes; the same four minutes of CD-quality PCM audio is about 40 MB. The trade: MIDI playback depends entirely on the synthesizer's sound set, so it renders differently everywhere and cannot carry voice or natural sound.",
              "The exam asked: 'Discuss various multimedia data file formats standards' (May 2024, 7 marks). Answer with the format table below, one mechanism sentence per format, and the MIDI contrast — event score vs sample stream — with the size arithmetic. MPEG (asked separately in Dec 2024) belongs to the next section, but naming it as the motion counterpart rounds out the list.",
            ],
            bullets: [
              "TIFF: tagged, extensible raster format — LZW/PackBits lossless, multipage, any depth.",
              "DIB: Windows raw bitmap — header + pixel data, simple but large.",
              "RTF: marked-up text with formatting and embedded objects — cross-application portable.",
              "MIDI: stores music as events, not samples — KB instead of MB.",
              "MIDI renders differently per synthesizer and cannot carry voice/natural sound.",
              "May 2024 asked file format standards (7 marks); Dec 2024 asked MPEG separately.",
            ],
            keyTerms: [
              { term: "TIFF", definition: "Tagged Image File Format — extensible tag-based raster container with lossless compression options." },
              { term: "DIB", definition: "Device-independent bitmap — Windows' header-plus-raw-pixels image format." },
              { term: "RTF", definition: "Rich Text Format — markup standard for formatted text with embedded objects." },
              { term: "MIDI", definition: "Musical Instrument Digital Interface — event-score format performed by a synthesizer." },
              { term: "Tag", definition: "A labelled field in TIFF naming a property and pointing to its data — the format's extensibility." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a format",
              caption: "Four paths out of the same requirement — store this media portably.",
              start: "Need to store media for exchange",
              branches: [
                { label: "Archival raster image", outcome: "TIFF — tagged, lossless, multipage, any depth", good: true },
                { label: "Fast Windows bitmap", outcome: "DIB/BMP — raw pixels, simple, large", good: true },
                { label: "Formatted document text", outcome: "RTF — markup with embedded objects", good: true },
                { label: "Music performance", outcome: "MIDI — event score, tiny, synthesizer-dependent", good: true },
              ],
            },
            table: {
              caption: "The syllabus formats compared.",
              headers: ["Format", "Stores", "Compression", "Typical use"],
              rows: [
                ["TIFF", "Raster images (any depth)", "LZW / PackBits (lossless)", "Scanning, archives, publishing"],
                ["DIB (BMP)", "Raster images", "None / RLE", "Windows bitmaps, fast access"],
                ["RTF", "Formatted text + objects", "Text markup", "Cross-word-processor documents"],
                ["MIDI", "Music events (score)", "n/a — events, not samples", "Synthesizer music, ringtones"],
                ["MPEG (next section)", "Compressed video + audio", "Lossy motion prediction", "Full-motion video"],
              ],
            },
            callout: {
              type: "warning",
              title: "MIDI is not audio",
              body: "The most common slip: describing MIDI as a compressed audio format. It is a performance score — no samples, no waveform. Its 3-kilobytes-versus-40-megabytes advantage over PCM is real, but playback varies by synthesizer and voice cannot be represented. Write that contrast explicitly.",
            },
            examQuestions: [
              {
                q: "Discuss the various multimedia data file format standards.",
                marks: 7,
                appearances: ["May 2024"],
                outline: [
                  "TIFF: tagged structure, lossless LZW/PackBits, multipage, extensible",
                  "DIB/BMP: Windows raw bitmap — header + pixels, simple, large",
                  "RTF: markup for formatted text with embedded objects",
                  "MIDI: event score — note-on/off, pitch, velocity, tempo",
                  "Size contrast: 4-minute MIDI in KB vs PCM audio in ~40 MB",
                  "MIDI trade-off: synthesizer-dependent, no voice",
                ],
              },
              {
                q: "Compare MIDI with PCM digital audio in size, fidelity and portability.",
                marks: 7,
                outline: [
                  "MIDI: event list performed by synthesizer; PCM: sampled waveform",
                  "Size: KB-scale MIDI vs 10.6 MB/min PCM (CD stereo)",
                  "Fidelity: MIDI depends on sound set; PCM captures the exact waveform",
                  "Voice/natural sound: PCM only",
                  "Portability: PCM identical everywhere; MIDI renders differ per device",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "MPEG standards and full-motion video",
            body: [
              "MPEG (Moving Picture Experts Group) is the family of lossy standards for full-motion video plus synchronized audio. Full-motion video means the frame rates of cinema and television — 24 to 30 fps — and its raw bandwidth makes the case for compression: 640 x 480 x 24 bits x 30 fps = 221 Mbps, which no consumer storage or network of the CD-ROM era could carry. MPEG-1 compresses that stream to a fixed 1.5 Mbps — roughly a 150:1 reduction — fitting a CD-ROM's 1.2 Mbps user data rate with room for audio.",
              "The mechanism is temporal prediction on top of the JPEG machinery. MPEG divides video into groups of pictures (GOP) with three frame types: I-frames are coded intra-frame — complete JPEG-style pictures, the random-access anchors; P-frames are predicted from the previous I or P frame using motion vectors per 16x16 macroblock, coding only the residual; B-frames are bidirectional, interpolating between surrounding frames for the highest compression. A typical GOP is IBBPBBPBBPBB — one anchor every half second.",
              "The standards family: MPEG-1 for CD-ROM video (1.5 Mbps, VHS-class); MPEG-2 for broadcast and DVD (2-8 Mbps, interlaced support, the DVD standard); MPEG-4 adding object-based coding and interactivity (video conferencing, streaming); MPEG-7 standardizing multimedia content description (metadata for search); MPEG-21 the framework standard. Each generation answers a different delivery constraint — that progression is the short-note answer. One target with its bit rate per member is the level of detail the marker expects.",
              "The exam asked: 'Write short notes on MPEG Standards' (Dec 2024, 7 marks). Answer with the raw-bandwidth motivation (221 Mbps -> 1.5 Mbps), the I/P/B frame mechanism with a GOP example, and the family list with one target per member. The pipeline diagram and frame-type table below are the answer's spine. Motion vectors per 16x16 macroblock are the one mechanism detail worth naming unprompted.",
            ],
            bullets: [
              "Raw video: 640 x 480 x 24 x 30 = 221 Mbps; MPEG-1 delivers 1.5 Mbps — about 150:1.",
              "I-frames: intra-coded anchors, random access points.",
              "P-frames: predicted from previous I/P via motion vectors; only residuals coded.",
              "B-frames: bidirectional interpolation — best compression, added latency.",
              "GOP example: IBBPBBPBBPBB — one I-frame per half second.",
              "Family: MPEG-1 (CD-ROM), MPEG-2 (DVD/broadcast), MPEG-4 (objects/streaming), MPEG-7 (metadata).",
            ],
            keyTerms: [
              { term: "I-frame", definition: "Intra-coded complete picture — the GOP anchor and random-access point." },
              { term: "P-frame", definition: "Predicted from the previous I/P frame with motion vectors; only differences coded." },
              { term: "B-frame", definition: "Bidirectionally interpolated between surrounding frames — highest compression." },
              { term: "GOP", definition: "Group of pictures — the I/P/B pattern repeating through the stream." },
              { term: "Motion vector", definition: "The per-macroblock displacement telling the decoder where the previous frame's block moved." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The MPEG encoder pipeline",
              caption: "JPEG's machinery plus motion prediction — compression compounds across frame types.",
              stages: [
                { label: "Colour convert", note: "RGB -> YCbCr" },
                { label: "Motion estimation", note: "vectors per 16x16 macroblock (P/B frames)" },
                { label: "DCT + quantize", note: "on residuals, per block" },
                { label: "Entropy code", note: "VLC/Huffman of vectors + residuals" },
                { label: "Multiplex", note: "video + audio into one synchronized stream" },
              ],
            },
            table: {
              caption: "The MPEG family and its targets.",
              headers: ["Standard", "Target bit rate", "Frame mechanism", "Application"],
              rows: [
                ["MPEG-1", "1.5 Mbps fixed", "I/P/B, GOP IBBPBB...", "CD-ROM video, MP3 audio layer"],
                ["MPEG-2", "2-8 Mbps", "I/P/B + interlaced fields", "DVD, digital broadcast TV"],
                ["MPEG-4", "variable, low", "Object-based coding", "Streaming, conferencing"],
                ["MPEG-7", "n/a — metadata", "Content description", "Multimedia search"],
              ],
            },
            callout: {
              type: "exam",
              title: "The Dec 2024 MPEG note",
              body: "'MPEG Standards' was a Dec 2024 short note (7 marks). Structure: bandwidth motivation (221 Mbps raw vs 1.5 Mbps MPEG-1), I/P/B mechanism with one GOP, then the family with one line per standard. Skipping the raw-bandwidth arithmetic loses the motivation mark.",
            },
            examQuestions: [
              {
                q: "Write short notes on MPEG standards.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Motivation: raw 640x480x24x30 video = 221 Mbps; MPEG-1 -> 1.5 Mbps (~150:1)",
                  "I-frames: intra anchors for random access",
                  "P-frames: motion-vector prediction, residual coding",
                  "B-frames: bidirectional interpolation, best ratio",
                  "GOP example: IBBPBBPBBPBB",
                  "Family: MPEG-1 CD-ROM, MPEG-2 DVD/broadcast, MPEG-4 objects, MPEG-7 metadata",
                ],
              },
              {
                q: "Explain how motion prediction compresses video beyond what JPEG achieves per frame.",
                marks: 7,
                outline: [
                  "JPEG removes spatial redundancy inside one frame only",
                  "Video adds temporal redundancy: consecutive frames mostly overlap",
                  "Motion vectors say where each 16x16 macroblock moved",
                  "Only the residual (difference) is DCT-coded",
                  "B-frames interpolate both directions — maximum compression",
                  "I-frame anchors bound error propagation across the GOP",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Digital voice and audio",
            body: [
              "Digital audio is produced by sampling a sound wave at fixed intervals and quantizing each sample to a fixed number of bits — pulse code modulation (PCM). Two numbers set quality: the sampling rate, which must exceed twice the highest frequency present (the Nyquist criterion — 2 x 20 kHz = 40 kHz is why CD audio samples at 44.1 kHz), and the bit depth, which sets quantization noise (16 bits gives a 96 dB dynamic range).",
              "The storage arithmetic is the exam's favourite numerical: CD-quality stereo audio occupies 44,100 samples/s x 16 bits x 2 channels = 1,411,200 bits/s = 176,400 bytes/s — about 10.6 MB per minute, and a 4-minute song lands near 40 MB. Telephone-quality voice needs only 8 kHz x 8 bits = 64 kbps — 480 KB per minute — because speech carries no energy above 4 kHz. Every multimedia design decision about audio is this arithmetic: stereo vs mono, sampling rate, bit depth.",
              "The audio subsystem components: microphone (transducer), the sound card's ADC/DAC pair (digitize on capture, reconstruct on playback), mixer (blends multiple sources and volumes), synthesizer (performs MIDI scores), and speakers/headphones on output; MIDI ports and WAV files as the two data formats (events vs samples). Voice applications (telephony, dictation) use low rates; music needs CD quality; anything below the Nyquist rate aliases — high frequencies fold back as audible artifacts.",
              "The exam asked: 'Write short notes on Audio Components' (Dec 2024, 7 marks). Answer with the component chain (microphone -> ADC -> mixer/synthesizer -> DAC -> speaker), the PCM parameters with the Nyquist justification, and the worked size numbers for voice vs CD music. The quality-tier table below is the ready skeleton. One sentence on the failure mode — sampling below Nyquist aliases high frequencies back as audible artifacts — completes the mechanism story.",
            ],
            bullets: [
              "PCM: sample the waveform, quantize each sample — the basis of digital audio.",
              "Nyquist: sample rate >= 2 x highest frequency; speech 4 kHz -> 8 kHz sampling.",
              "CD audio: 44.1 kHz, 16-bit, stereo = 1.41 Mbps = 176 KB/s = 10.6 MB/min.",
              "Telephone voice: 8 kHz x 8 bits = 64 kbps = 480 KB/min.",
              "Components: microphone -> ADC -> mixer/synthesizer -> DAC -> speakers; MIDI ports alongside.",
              "Aliasing: sampling below Nyquist folds high frequencies back as artifacts.",
            ],
            keyTerms: [
              { term: "PCM", definition: "Pulse code modulation — the sample-and-quantize representation of analog sound." },
              { term: "Nyquist rate", definition: "Minimum sampling rate of twice the highest signal frequency; below it, aliasing." },
              { term: "ADC / DAC", definition: "The sound card's digitize and reconstruct converters." },
              { term: "Mixer", definition: "The subsystem blending multiple audio sources with volume control." },
              { term: "Quantization noise", definition: "The error floor set by bit depth — 16 bits gives ~96 dB dynamic range." },
            ],
            diagram: {
              kind: "flow",
              title: "The digital audio chain",
              caption: "From pressure wave to file to speaker — five stages.",
              steps: [
                { label: "Microphone", note: "sound -> analog voltage" },
                { label: "ADC", note: "sample at fs, quantize to N bits (PCM)" },
                { label: "Store / process", note: "WAV file or stream; MIDI as parallel event path" },
                { label: "DAC", note: "PCM -> analog voltage" },
                { label: "Speaker", note: "voltage -> pressure wave" },
              ],
            },
            table: {
              caption: "Audio quality tiers and their arithmetic.",
              headers: ["Tier", "Sampling rate", "Bit depth", "Storage per minute"],
              rows: [
                ["Telephone voice", "8 kHz", "8-bit mono", "0.48 MB (64 kbps)"],
                ["AM radio", "11-22 kHz", "8-bit", "1-2 MB"],
                ["CD music", "44.1 kHz", "16-bit stereo", "10.6 MB (1.41 Mbps)"],
                ["Studio/DVD", "48-96 kHz", "24-bit", "17-34 MB"],
              ],
            },
            callout: {
              type: "tip",
              title: "Compute, never guess",
              body: "Audio questions reward the formula: rate x depth x channels / 8 = bytes per second. Write it for CD stereo (44100 x 16 x 2 / 8 = 176,400 B/s -> 10.6 MB/min) and voice (8000 x 8 / 8 = 8 KB/s). The two numbers together cover any tier the examiner names.",
            },
            examQuestions: [
              {
                q: "Write short notes on audio components of a multimedia system.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Microphone: transducer producing analog signal",
                  "Sound card: ADC digitizes (sampling + quantization, PCM)",
                  "Mixer: blends sources; synthesizer: performs MIDI events",
                  "DAC reconstructs analog for speakers/headphones",
                  "PCM parameters: Nyquist rate justification for 44.1 kHz CD audio",
                  "Sizes: voice 64 kbps (0.48 MB/min); CD stereo 1.41 Mbps (10.6 MB/min)",
                ],
              },
              {
                q: "Compute the storage for 3 minutes of CD-quality stereo audio and state the two parameters that set audio quality.",
                marks: 7,
                outline: [
                  "Parameters: sampling rate (Nyquist-limited) and bit depth (noise floor)",
                  "44,100 x 16 x 2 = 1,411,200 bits/s = 176,400 bytes/s",
                  "3 minutes: 176,400 x 180 = 31.75 MB",
                  "Voice comparison: 8 kHz x 8 bits = 64 kbps",
                  "Stereo doubles it; mono halves it",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Video image and animation — the principles of animation",
            body: [
              "Animation is the illusion of motion created by displaying a sequence of still images fast enough that persistence of vision fuses them — 24 fps for film, 30 fps for NTSC video, with frames either captured (video) or synthesized (animation). Computer animation divides by production: 2D/cel animation moves layered sprites and backgrounds; 3D animation models objects, animates them, and renders each frame — the modelling -> animation -> rendering pipeline Dec 2024 asked about.",
              "The techniques: keyframing sets the important poses and interpolates the in-betweens (tweening) — the fundamental economy of the craft; morphing transforms one image into another through warped cross-dissolves; rotoscoping traces live footage frame by frame; motion capture records real movement onto models. The animator's discipline comes from the classical principles (condensed from Disney's twelve): squash and stretch, anticipation, staging, straight-ahead vs pose-to-pose action, follow-through and overlapping action, slow-in and slow-out, arcs, secondary action, timing, exaggeration, solid drawing, and appeal.",
              "The exam asked: 'Define Animation. Write the principles of animation' (Jun 2025, 7 marks) and '3D animation' as a short note (Dec 2024, 7 marks). Answer the first with the definition, the persistence-of-vision basis, and six-plus principles with one line each; the second with the 3D pipeline (model -> rig/animate -> light -> render), keyframes and tweening, and one application (character animation in games and film).",
              "Frame the numbers: at 30 fps a one-minute animation is 1,800 frames — hand-drawing all of them is why keyframe-plus-tween exists; a walk cycle needs 8-12 distinct frames looped. Full-motion video (the syllabus phrase) simply means the playback meets those frame rates with MPEG-scale compression behind it (section 5.4). Name six-plus principles with one line each rather than all twelve bare — depth per principle is what the 7 marks buy.",
            ],
            bullets: [
              "Animation: sequenced stills displayed at 24-30 fps exploiting persistence of vision.",
              "Keyframing + inbetweening (tweening): animate the important poses, interpolate the rest.",
              "Morphing: warped cross-dissolve from one image to another.",
              "Principles (from Disney's twelve): squash & stretch, anticipation, staging, follow-through, slow in/out, timing, exaggeration.",
              "3D pipeline: modelling -> rigging/animation -> lighting -> rendering (Dec 2024 note).",
              "1,800 frames per 30-fps minute — tweening is the economy that makes that tractable.",
            ],
            keyTerms: [
              { term: "Keyframe", definition: "A deliberately set pose; the animator's input frames from which others are interpolated." },
              { term: "Inbetweening (tweening)", definition: "Automatic interpolation of intermediate frames between keyframes." },
              { term: "Morphing", definition: "Transforming one image smoothly into another via warping and cross-dissolve." },
              { term: "Persistence of vision", definition: "The eye's retention making rapid frame sequences read as continuous motion." },
              { term: "Rotoscoping", definition: "Tracing live-action footage frame by frame onto animation." },
            ],
            diagram: {
              kind: "cycle",
              title: "The animation production loop",
              caption: "From storyboard to review — every iteration is one pass around the wheel.",
              steps: [
                { label: "Storyboard", note: "plan shots and motion" },
                { label: "Keyframes", note: "set the important poses" },
                { label: "Inbetweening", note: "interpolate intermediate frames" },
                { label: "Render", note: "3D pipeline: model -> light -> frame" },
                { label: "Playback + review", note: "timing judged at full speed" },
                { label: "Revise", note: "back to keyframes — the loop closes" },
              ],
            },
            table: {
              caption: "Animation techniques and their products.",
              headers: ["Technique", "Mechanism", "Typical use"],
              rows: [
                ["Keyframing + tweening", "Pose, then interpolate", "All computer animation"],
                ["Morphing", "Warped cross-dissolve", "Effects, music videos"],
                ["Rotoscoping", "Trace live footage", "Realistic human motion"],
                ["Motion capture", "Record performer's movement", "Games, film characters"],
                ["Cel / 2D animation", "Layered sprites over backgrounds", "Cartoons, 2D games"],
              ],
            },
            callout: {
              type: "exam",
              title: "Definition + principles, verbatim",
              body: "Jun 2025 asked 'Define Animation. Write the principles of animation' (7 marks) — a two-part rubric: define with persistence of vision and frame rates, then list six-plus principles one line each. Dec 2024's '3D animation' note wants the modelling-to-rendering pipeline instead.",
            },
            examQuestions: [
              {
                q: "Define animation. Write the principles of animation.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: illusion of motion from sequenced stills at 24-30 fps",
                  "Basis: persistence of vision",
                  "Squash and stretch: deformation conveys mass and impact",
                  "Anticipation: preparatory motion before the main action",
                  "Staging: composition directs the eye to the action",
                  "Follow-through / overlapping action: motion settles gradually",
                  "Slow in/out, arcs, timing, exaggeration — one line each",
                ],
              },
              {
                q: "Write short notes on 3D animation.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "3D pipeline: modelling -> rigging -> animation -> lighting -> rendering",
                  "Keyframes on object parameters; tweening interpolates",
                  "Skeleton rigs deform mesh models",
                  "Rendering computes each frame with illumination (Unit III models)",
                  "Applications: character animation, games, film VFX",
                  "Cost: 1,800 frames per 30-fps minute — rendered offline",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Multimedia I/O technologies and storage/retrieval",
            body: [
              "Multimedia I/O technologies move media in and out of the system: touch screens and digitizers for input (section 1.6), scanners and video capture boards for image entry, MIDI ports for musical data, and audio/video output devices on the far side. The storage side is the harder engineering problem: continuous media needs guaranteed sustained bandwidth, not just capacity — a stream that stalls is a dropped video frame — so multimedia storage is chosen by both bytes and bytes-per-second.",
              "The storage hierarchy: RAM and disk caches buffer the stream; hard disks give the working capacity and throughput (with RAID arrays aggregating bandwidth for servers); optical media are the distribution and archive tier — CD-ROM 650-700 MB at a 1x transfer of 150 KB/s (MPEG-1 streams at 1.2 Mbps user data fit comfortably; 1x-48x drives scaled the rate), DVD 4.7 GB per layer (8.5 GB dual), Blu-ray 25 GB; and jukeboxes/tape libraries hold archival terabytes with slow robot-changed access. Retrieval technologies then serve the streams: buffering to absorb jitter, seek scheduling on disks, and streaming servers delivering isochronous data to many clients at once.",
              "The worked coupling: MPEG-1 video needs 1.5 Mbps sustained = 187.5 KB/s — a 1x CD-ROM at 150 KB/s is too slow, a 2x drive (300 KB/s) suffices with margin for audio; a video-on-demand server holding 700 two-hour MPEG-2 titles at 4 Mbps needs ~2.5 TB and enough concurrent bandwidth to serve hundreds of streams — the numbers that turn storage from a commodity into a design constraint.",
              "The exam treats this line as short-note material alongside the I/O roster. Answer with the two-sided criterion (capacity AND sustained bandwidth), the hierarchy with one number per tier (CD 700 MB/150 KB/s at 1x, DVD 4.7 GB, disk RAID, jukebox TB), and the buffering/streaming sentence for retrieval — the layers diagram below is the skeleton. Tie each tier to the stream it serves (MPEG-1 on a 2x CD-ROM) — the coupling is the engineering insight.",
            ],
            bullets: [
              "I/O roster: touch screens, scanners, video capture, MIDI ports; audio/video output.",
              "Storage criterion: capacity AND sustained bandwidth — a stalling stream drops frames.",
              "CD-ROM: 650-700 MB, 150 KB/s at 1x; DVD: 4.7 GB/layer; Blu-ray: 25 GB.",
              "RAID arrays aggregate disk bandwidth for server-class stream counts.",
              "Jukeboxes/tape libraries: archival terabytes with robot-changed media.",
              "Retrieval: buffers absorb jitter; streaming servers deliver isochronous streams to many clients.",
            ],
            keyTerms: [
              { term: "Sustained bandwidth", definition: "The guaranteed transfer rate a medium delivers continuously — the stream metric." },
              { term: "1x CD-ROM rate", definition: "150 KB/s — the reference speed MPEG-1 delivery was sized against." },
              { term: "Jukebox", definition: "Robotic library swapping optical discs/tapes for archival-scale storage." },
              { term: "Buffering", definition: "Pre-reading ahead of playback to absorb access-time jitter." },
              { term: "Streaming server", definition: "A server delivering synchronized media to many clients isochronously." },
            ],
            diagram: {
              kind: "layers",
              title: "The multimedia storage hierarchy",
              caption: "Index 0 is the top: faster and smaller above, slower and vaster below.",
              layers: [
                { label: "RAM / cache buffers", note: "absorb jitter during playback" },
                { label: "Hard disks + RAID", note: "working streams; aggregated bandwidth" },
                { label: "Optical: CD/DVD/Blu-ray", note: "distribution and archive: 700 MB - 25 GB" },
                { label: "Jukebox / tape library", note: "robotic terabyte-scale archives" },
              ],
            },
            table: {
              caption: "Storage tiers with their numbers.",
              headers: ["Medium", "Capacity", "Sustained rate", "Role"],
              rows: [
                ["CD-ROM (1x)", "650-700 MB", "150 KB/s", "MPEG-1 distribution"],
                ["DVD", "4.7 GB/layer", "~1.4 MB/s at 1x", "MPEG-2 video, software"],
                ["Blu-ray", "25 GB/layer", "~4.5 MB/s at 1x", "HD video distribution"],
                ["Hard disk (modern)", "1-20 TB", "100-250 MB/s", "Editing, streaming servers"],
                ["Tape library", "PB scale", "robot-mediated", "Deep archive"],
              ],
            },
            callout: {
              type: "tip",
              title: "Check bandwidth, not just capacity",
              body: "The classic design error: choosing media by bytes alone. A 1x CD-ROM holds 74 minutes of audio but cannot carry MPEG-1's 187.5 KB/s — it needs 2x. In every storage answer, pair the capacity number with the sustained-rate number; that pairing is the engineering point.",
            },
            examQuestions: [
              {
                q: "Explain the multimedia storage and retrieval technologies, using the capacity and bandwidth of each tier.",
                marks: 7,
                outline: [
                  "Two-sided criterion: capacity AND sustained bandwidth",
                  "CD-ROM: 700 MB, 150 KB/s at 1x — MPEG-1 needs 2x",
                  "DVD 4.7 GB/layer; Blu-ray 25 GB — distribution tiers",
                  "Disks/RAID: working streams, aggregated server bandwidth",
                  "Jukeboxes/tape: archival terabytes, robot access",
                  "Retrieval: buffering absorbs jitter; streaming servers deliver isochronously",
                  "Worked coupling: MPEG-1 at 187.5 KB/s -> 2x CD-ROM required",
                ],
              },
              {
                q: "List the multimedia I/O technologies and state what each contributes to a multimedia system.",
                marks: 7,
                outline: [
                  "Touch screens/digitizers: direct absolute input",
                  "Scanners: rasterize documents and photos",
                  "Video capture boards: digitize analog video into streams",
                  "MIDI ports: musical event data in/out",
                  "Audio out: DAC + speakers; video out: display subsystem",
                  "Each must sustain the data rate of its medium",
                ],
              },
              {
                q: "Discuss briefly about the Multimedia Hardware.",
                marks: 7,
                appearances: ["Dec 2024"],
                outline: [
                  "Device roster: sound card, video capture, CD-ROM/DVD drives, mics/speakers",
                  "Storage judged by capacity AND sustained bandwidth",
                  "CD-ROM 700 MB at 150 KB/s (1x); DVD 4.7 GB; Blu-ray 25 GB",
                  "Hard disks/RAID serve working streams; jukeboxes archive terabytes",
                  "SCSI vs IDE interfaces move the data (5-20 MB/s vs UDMA 33-100 MB/s)",
                  "Retrieval: buffering absorbs jitter; streaming servers deliver isochronously",
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
        { topic: "Midpoint/Bresenham circle + line algorithms (DDA, decision parameters)", weight: "≈ 14-21 marks", note: "Circle asked in all three papers (May 2024, Dec 2024, Jun 2025); line in two of three. Prepare d0 = 3 - 2r, the r = 5 trace, and p0 = 2dy - dx." },
        { topic: "Clipping: Cohen-Sutherland, Sutherland-Hodgman, Cyrus-Beck", weight: "≈ 14-21 marks", note: "May 2024 (algorithm), Dec 2024 (S-H), Jun 2025 (numerical + Cyrus-Beck + approaches). Practise the 340x340-window numerical to zero." },
        { topic: "Multimedia definitions, architecture, hardware, tools, databases", weight: "≈ 21-28 marks", note: "3-4 questions per paper across Unit IV. Definition+applications twice; architecture, hardware, presentation tools, objects, databases once each." },
        { topic: "Illumination, shading, hidden surfaces (z-buffer, back-face, painter's)", weight: "≈ 14-21 marks", note: "Diffuse notes (Dec 2024), diffuse vs specular (Jun 2025), z-buffer (May 2024), back-face + painter's (Jun 2025). Know the ambient+Lambert+Phong stack." },
        { topic: "2D/3D transformations and composite/pivot rotation", weight: "≈ 14 marks", note: "May 2024 triangle rotation about origin and P(-2,-2); Dec 2024 reflection/shear and 3D X-axis rotation matrix." },
        { topic: "Compression (lossy vs lossless) and file formats (TIFF, MIDI, DIB, RTF, MPEG)", weight: "≈ 14-21 marks", note: "Dec 2024 lossy/lossless + MPEG note; Jun 2025 compression techniques; May 2024 formats. Carry the size arithmetic (MIDI vs PCM, 221 Mbps -> 1.5 Mbps)." },
        { topic: "Parallel vs perspective projection, world vs screen coordinates", weight: "≈ 7-14 marks", note: "Asked in all three papers in some form. Table + pipeline sentence covers every variant." },
        { topic: "Curves (Bezier midpoint, B-spline), animation principles, DVST/raster hardware", weight: "≈ 14-21 marks", note: "Bezier numeric (May 2024), B-spline note (May 2024), animation principles (Jun 2025), DVST (May 2024), raster architecture (May 2024), random scan (Jun 2025)." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for past papers. Trace every algorithm by hand on graph paper at least once — DDA, Bresenham line, midpoint circle r = 5, Cohen-Sutherland on the Jun 2025 window — because the marks are in the traces, not the prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — display technology", tasks: ["Raster architecture + frame-buffer arithmetic", "Random scan, DVST, colour CRTs, interlacing", "Printers: dot matrix, inkjet, laser table", "Input devices + rubber band/dragging techniques"] },
        { week: "Week 2", focus: "Unit II — scan conversion", tasks: ["DDA by hand: (1,1)->(5,5) and a fractional-slope line", "Bresenham line: derive p, trace (0,0)->(5,2)", "Midpoint circle r = 5 full trace + 8-way symmetry", "Scan-line, boundary-fill vs flood-fill; Bezier midpoint; B-spline properties"] },
        { week: "Week 3", focus: "Unit III — transforms and projections", tasks: ["Five 2D matrices + inverses; reflection and shear examples", "Homogeneous coords; pivot rotation composite", "3D rotation matrices; derive Rx", "World/screen pipeline; parallel vs perspective table"] },
        { week: "Week 4", focus: "Unit III — clipping and rendering", tasks: ["Cohen-Sutherland: codes, accept/reject, the Jun 2025 numerical", "Sutherland-Hodgman four cases; Cyrus-Beck principle", "Z-buffer vs painter's; back-face test", "Ambient + Lambert + Phong; Gouraud vs Phong; colour models"] },
        { week: "Week 5", focus: "Unit IV — multimedia systems", tasks: ["Definition + five elements + applications", "Five-layer architecture diagram", "Objects: discrete vs continuous; definition steps", "SCSI vs IDE numbers; MCI commands; authoring metaphors; MMDB requirements"] },
        { week: "Week 6", focus: "Unit V + full papers", tasks: ["Lossy vs lossless; RLE/PackBits numerical", "JPEG six stages; MPEG I/P/B + family", "TIFF/MIDI/DIB/RTF table; audio size arithmetic", "Animation principles; storage tiers; two full past papers timed"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Lead algorithm answers with the initialization and update rules, then the trace table — the marker scans for d0/p0 first.",
        "Always attach a number: frame-buffer bytes, compression ratio, MIDI-vs-PCM sizes. The numerical line is the mark most answers drop.",
        "For compare questions (raster vs random, boundary vs flood, parallel vs perspective, z-buffer vs painter's, lossy vs lossless) write a two-column table — structure itself earns marks.",
        "Draw the diagram named in the question: block diagram for architecture, stack for multimedia layers, pipeline for JPEG/MPEG, pyramid for illumination.",
        "State conventions before deriving: right-handed 3D system, TBRL region-code order, column-vector matrices.",
        "For 'define X' questions use the two-clause form: what it is + the property that distinguishes it (multimedia = integration + interactivity).",
        "Attempt any five of eight (70 marks, 14 each): pick your two traced algorithms and two compare tables first, then the theory notes.",
        "Time-box: 7-mark half ≈ 12 minutes, 14-mark full ≈ 24 minutes; leave 10 minutes to fill skeleton answers on skipped parts.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "The morning of the exam, revise only what is verifiable on one page: the four algorithm traces (DDA (1,1)->(5,5), Bresenham (0,0)->(5,2), midpoint circle r = 5, Cohen-Sutherland on the 340x340 window), the two composite-rotation vertex triples, the six JPEG stages, the I/P/B GOP pattern, and the audio size formula. These are the papers' repeated numericals — three sessions of evidence say they return.",
        "Sweep the short-note list once: DVST, random scan, back-face detection, painter's algorithm, diffuse reflection, ray tracing, B-spline, MPEG standards, audio components, 3D animation, colour models, authoring tools. Each is a definition + mechanism + two strengths/weaknesses — write them as six-line skeletons, not essays. Then read the multimedia unit's definition-and-applications answer one final time; it has appeared in every session seen.",
        "The common slips below were all visible in how these papers split their marks — avoid each one explicitly and you bank the marks most candidates scatter.",
      ],
      bullets: [
        "Midpoint circle: using d0 = 1 - r with the 3 - 2r update table (or vice versa) — pick one formulation and stay with it through the trace.",
        "Cohen-Sutherland: forgetting the TBRL bit order or testing reject with OR instead of AND — the AND of region codes must be non-zero to reject.",
        "Composite rotation: applying T(P) before T(-P) — the pivot sandwich is T(P).R.T(-P), rightmost first.",
        "Reflection/shear: writing y = x reflection as (-x, -y) — that is the origin reflection; y = x swaps coordinates.",
        "Boundary-fill vs flood-fill: saying they are the same algorithm with different names — the region-definer (boundary colour vs interior colour) is the contrast asked in Jun 2025.",
        "Bezier midpoint: re-deriving the whole curve instead of substituting t = 1/2 into (P0 + 3P1 + 3P2 + P3)/8.",
        "MIDI: describing it as compressed audio — it is an event score, synthesizer-dependent and voiceless.",
        "Parallel vs perspective: claiming perspective preserves measurements — it deliberately does not; that is the point of the contrast.",
        "z-buffer: saying it needs polygons sorted — it does not; sorting is painter's algorithm's requirement.",
        "Audio arithmetic: quoting 10.6 MB/min without the formula 44100 x 16 x 2 / 8 — write the chain, the number follows.",
      ],
    },
  ],
};
