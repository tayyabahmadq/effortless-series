import type { AcademicSubject } from "./types";

export const it703d: AcademicSubject = {
  id: "it-703-d",
  code: "IT-703(D)",
  title: "Digital Image Processing",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how photons become pixels, how pixels are sharpened in space and in frequency, how corrupted images are restored, how images are compressed and segmented, and how the results are described, morphed and recognized.",
  description:
    "Five units walk from sampling, quantization and pixel relationships, through spatial enhancement with the histogram, into Fourier-domain filtering and the restoration family from inverse to Wiener, then compression and segmentation, ending with chain codes, descriptors, morphology and decision-theoretic and structural recognition.",
  accentColor: "#d946ef",
  emoji: "DI",
  unitCount: 5,
  totalSections: 39,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction and Digital Image Fundamentals",
      summary:
        "Unit I frames the subject: where digital image processing came from, the fields it serves, the fundamental processing steps, the elements of a processing system, and the working vocabulary everything later depends on - sampling and quantization, neighbours and connectivity, distance measures, and the linear versus nonlinear split.",
      chapter: {
        number: "01",
        title: "From Light to Numbers",
        intro:
          "Unit I covers the origins of digital image processing, the fields that use it, the fundamental processing steps, the elements of a digital image processing system, sampling and quantization, pixel neighbours and adjacency, distance measures, and linear versus nonlinear operations.",
        inOneBreath:
          "An image is f(x, y) digitized by sampling (the spatial grid) and quantization (the gray levels); adjacency is 4-, 8- or m-based, with m-adjacency removing 8-path ambiguity; D4, D8 and Euclidean measure near differently; convolution is linear while the median filter is not; processing climbs from low-level pixels to high-level recognition.",
        sections: [
          {
            number: "1.1",
            title: "The origins of digital image processing",
            body: [
              "Digital image processing is the manipulation of images that have been converted into arrays of numbers, and its history is shorter than most students guess. The first digital images travelled the Bartlane cable picture transmission system between London and New York in the early 1920s: newspaper photographs were coded for the transatlantic cable at 3 gray levels, later raised to 5 - digitization existed decades before any computer could process the digits. True processing had to wait for digital computers with enough memory and speed, which arrived with the 1960s space program.",
              "Two milestones define the birth of the modern field. In 1964 the Jet Propulsion Laboratory corrected geometric and photometric distortions in Ranger 7 pictures of the moon, producing the first serious computer processing of images. In the early 1970s computed tomography reconstructed cross-sections of the human body from X-ray projections - Hounsfield and Cormack shared the 1979 Nobel Prize in Medicine for it. From there the applications multiplied: bar-code readers, fingerprint analysis, industrial inspection, satellite imaging, and today every camera phone runs enhancement, restoration and compression pipelines in hardware.",
              "For the exam, organize the origins answer as a timeline - Bartlane, space program, tomography - and close with the classification that examiners actually mark: low-level processing maps images to images (enhancement, restoration, compression), mid-level maps images to attributes (segmentation, description), and high-level maps attributes to meaning (recognition). This course is almost entirely low- and mid-level processing, which is exactly the level split the RGPV paper tests.",
            ],
            keyTerms: [
              { term: "Bartlane system", definition: "Early-1920s cable picture transmission between London and New York - the first digital images, at 3 then 5 gray levels." },
              { term: "Low-level processing", definition: "Image-in, image-out operations: enhancement, restoration, compression." },
              { term: "Mid-level processing", definition: "Image-in, attributes-out operations: segmentation, representation, description." },
              { term: "High-level processing", definition: "Attributes-in, meaning-out: recognizing an ensemble of objects as a scene." },
            ],
            diagram: {
              kind: "flow",
              title: "A century of digital images",
              caption: "Digitization came first, computers came later - and medicine gave the field its killer application.",
              steps: [
                { label: "Bartlane cable, 1920s", note: "3 then 5 gray levels over the Atlantic" },
                { label: "Space program, 1960s", note: "JPL corrects Ranger 7 moon images" },
                { label: "Tomography, 1970s", note: "CT reconstruction; Nobel Prize 1979" },
                { label: "Everywhere today", note: "phones, factories, satellites, hospitals" },
              ],
            },
            bullets: [
              "Bartlane cable (early 1920s): first digital image transmission, 3 then 5 gray levels.",
              "JPL 1964: Ranger 7 moon images corrected geometrically and photometrically - the field's birth.",
              "CT in the early 1970s: reconstruction from projections; Hounsfield and Cormack, Nobel 1979.",
              "Low level: image -> image (enhancement, restoration, compression).",
              "Mid level: image -> attributes (segmentation, description). High level: attributes -> meaning.",
              "This syllabus is low- and mid-level processing throughout.",
            ],
            callout: {
              type: "tip",
              title: "End the origins answer with the levels",
              body: "Examiners reward the classification more than the dates. Timeline first (Bartlane, space, CT), then the three levels with one example each - that structure is a complete 7-mark answer without any padding.",
            },
            table: {
              caption: "The three levels of image processing.",
              headers: ["Level", "Input -> output", "Example operations"],
              rows: [
                ["Low level", "image -> image", "enhancement, restoration, compression"],
                ["Mid level", "image -> attributes", "segmentation, representation, description"],
                ["High level", "attributes -> meaning", "object recognition, scene interpretation"],
              ],
            },
            examQuestions: [
              {
                q: "Trace the origins of digital image processing from the Bartlane cable system to computed tomography, and explain the three levels into which digital image processing operations are classified.",
                marks: 7,
                outline: [
                  "Bartlane cable, early 1920s: first digital images at 3 then 5 gray levels",
                  "Digital computers of the 1960s made processing feasible",
                  "JPL 1964: Ranger 7 moon images corrected - the founding application",
                  "CT, early 1970s: reconstruction from projections; Nobel Prize 1979",
                  "Low level: image -> image (enhancement, restoration, compression)",
                  "Mid level: image -> attributes (segmentation, description)",
                  "High level: attributes -> meaning (recognition); this course covers low and mid",
                ],
              },
              {
                q: "Define a digital image and explain the difference between low-level, mid-level and high-level processing with one example operation at each level. Where do compression and segmentation belong?",
                marks: 14,
                outline: [
                  "Digital image: f(x, y) sampled at discrete spatial coordinates and quantized to discrete intensities",
                  "x, y are spatial coordinates; f is the intensity at that point",
                  "Low level: input and output both images - enhancement, restoration, compression",
                  "Mid level: input image, output attributes - segmentation, boundary and region description",
                  "High level: input attributes, output meaning - recognizing an ensemble of objects",
                  "Compression is low level; segmentation is mid level",
                  "Each level feeds the next: enhancement improves segmentation, description feeds recognition",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Fields that use digital image processing",
            body: [
              "Digital image processing serves every band of the electromagnetic spectrum, and the standard exam answer is a walk up that spectrum. Gamma-ray imaging runs nuclear medicine (PET scans track injected positron emitters) and astronomical observation. X-ray imaging produces angiograms, chest radiographs and industrial CT of circuit boards and castings. Ultraviolet imaging serves fluorescence microscopy, lithography inspection and astronomy. The visible band is the crowded one: automated industrial inspection, fingerprint and document analysis, military reconnaissance, and ordinary photography.",
              "Above visible sit infrared (thermal imaging for night vision, energy-loss surveys of buildings, weather satellites), microwave (radar imaging, which shines where light does not penetrate - clouds, darkness, terrain mapping), and radio (magnetic resonance imaging, which reconstructs anatomy from radio-frequency echoes of hydrogen nuclei). Below the spectrum proper sit the non-EM modalities worth quoting for a full answer: ultrasound (acoustic energy, obstetrics and cardiology) and electron microscopy (electron beams resolving down to the nanometre scale).",
              "The exam wants the modality, the energy source and one application each - a six-to-eight-row list. Two framing sentences earn the remaining marks: every modality ultimately produces the same object, a two-dimensional array f(x, y) of intensity values, so the processing toolbox of this course applies unchanged; and the differences lie in the physics of acquisition, not in the processing that follows.",
            ],
            keyTerms: [
              { term: "PET imaging", definition: "Positron emission tomography - gamma-ray imaging of a radioactive tracer inside the body." },
              { term: "Angiogram", definition: "X-ray image of blood vessels made visible by an injected contrast medium." },
              { term: "MRI", definition: "Magnetic resonance imaging - radio-band imaging that reconstructs anatomy from RF echoes." },
              { term: "Ultrasound", definition: "Acoustic-band imaging; echoes of high-frequency sound build the image." },
            ],
            diagram: {
              kind: "layers",
              title: "Imaging across the electromagnetic spectrum",
              caption: "Each layer is one modality - the physics differs, the resulting array f(x, y) does not.",
              layers: [
                { label: "Gamma rays", note: "PET scans, astronomical observation" },
                { label: "X-rays", note: "angiograms, chest radiographs, industrial CT" },
                { label: "Ultraviolet", note: "fluorescence microscopy, lithography inspection" },
                { label: "Visible & infrared", note: "inspection, fingerprints; thermal and satellite imaging" },
                { label: "Microwave", note: "radar imaging through cloud and darkness" },
                { label: "Radio", note: "magnetic resonance imaging (MRI)" },
              ],
            },
            bullets: [
              "Gamma rays: PET in nuclear medicine; astronomy.",
              "X-rays: angiography, radiography, industrial CT of boards and castings.",
              "Ultraviolet: fluorescence microscopy, lithography inspection, UV astronomy.",
              "Visible: industrial inspection, fingerprint and document analysis, reconnaissance.",
              "Infrared and microwave: thermal imaging, weather satellites, radar terrain mapping.",
              "Every modality yields the same f(x, y) array - the toolbox is shared.",
            ],
            callout: {
              type: "exam",
              title: "The walk-up-the-spectrum answer",
              body: "Structure the answer as a table: modality, energy source, one application per row, six to eight rows. Finish with the unifying sentence that all modalities produce f(x, y) arrays - that line converts a list into an explanation and is what the mark scheme rewards.",
            },
            table: {
              caption: "Modality - energy - application.",
              headers: ["Band / modality", "Energy source", "Typical application"],
              rows: [
                ["Gamma ray", "radioactive tracer emission", "PET scans, astronomy"],
                ["X-ray", "X-ray tube", "angiograms, industrial CT"],
                ["Ultraviolet", "UV lamp / fluorescence", "microscopy, lithography inspection"],
                ["Visible", "reflected light", "inspection, fingerprints, photography"],
                ["Infrared", "thermal emission", "night vision, energy-loss surveys"],
                ["Microwave", "radar transmitter", "terrain and weather radar imaging"],
                ["Radio", "RF echo of nuclear spin", "MRI"],
                ["Non-EM", "sound / electron beam", "ultrasound, electron microscopy"],
              ],
            },
            examQuestions: [
              {
                q: "List the major fields that use digital image processing, organized by electromagnetic band. For each, name the energy source and one application, and state what unifies them all as image processing problems.",
                marks: 7,
                outline: [
                  "Gamma rays: PET nuclear medicine, astronomy",
                  "X-rays: angiograms, radiographs, industrial CT",
                  "Ultraviolet: fluorescence microscopy, lithography",
                  "Visible: inspection, fingerprints, reconnaissance",
                  "Infrared / microwave: thermal imaging, radar",
                  "Radio: MRI; non-EM: ultrasound, electron microscopy",
                  "Unifier: every modality produces an array f(x, y) processed by the same tools",
                ],
              },
              {
                q: "Explain how X-ray imaging and MRI differ in physics of acquisition, and why the difference does not change the processing that follows.",
                marks: 14,
                outline: [
                  "X-ray: transmitted radiation attenuated by tissue density - projection imaging",
                  "CT: many projections reconstructed into a cross-section (Radon transform ideas)",
                  "MRI: radio-frequency echoes from hydrogen nuclei in a magnetic field",
                  "MRI reconstruction is from frequency-domain echo data, not projections",
                  "Both outputs are digital arrays f(x, y) of intensity values",
                  "Processing tools - enhancement, segmentation, description - are physics-agnostic",
                  "Only acquisition and noise characteristics differ between the modalities",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Fundamental steps in image processing",
            body: [
              "The fundamental steps form an ordered pipeline: image acquisition, enhancement, restoration, colour processing, wavelets and multiresolution processing, compression, morphology, segmentation, representation and description, and recognition. No real application runs all ten, but the list is the map of the whole subject - and every later unit of this syllabus is one of these steps. Acquisition digitizes the scene; enhancement sharpens it for human viewing; restoration removes degradation using a model of the corruption; compression reduces the storage bill.",
              "The remaining steps are mid-level. Morphology extracts image components useful for shape representation; segmentation partitions the image into objects and background; representation and description convert segmented regions into boundary chains, descriptors and features; recognition assigns those features a label. Wavelet-based multiresolution processing cuts across both levels, viewing images at different resolutions - it underlies modern compression standards. Colour processing is a speciality orthogonal to the rest.",
              "The exam framing is exactly this: name all steps in order, state what each consumes and produces, and classify them - acquisition through compression are low-level (images in, images out), segmentation through description are mid-level (image in, attributes out), recognition is high-level (attributes in, meaning out). Quoting the pyramid in the diagram below, with one example per tier, is the complete answer.",
            ],
            keyTerms: [
              { term: "Image acquisition", definition: "Digitizing a scene into an array f(x, y) by sampling and quantization." },
              { term: "Segmentation", definition: "Partitioning the image into constituent objects and background - the bridge to mid-level processing." },
              { term: "Description", definition: "Converting segmented regions into features: chains, descriptors, measurements." },
              { term: "Recognition", definition: "Assigning a label to a described object - the high-level endpoint of the pipeline." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The three tiers of image processing",
              caption: "Index 0 is the top tier: outputs get more abstract as you climb, and every syllabus unit sits on one tier.",
              tiers: [
                { label: "High level", note: "recognition and interpretation - attributes become meaning" },
                { label: "Mid level", note: "segmentation, representation, description - image becomes attributes" },
                { label: "Low level", note: "acquisition, enhancement, restoration, compression - image becomes image" },
              ],
            },
            bullets: [
              "Ten steps in order: acquisition, enhancement, restoration, colour, wavelets, compression, morphology, segmentation, representation and description, recognition.",
              "No application runs all ten - the list is a map, not a mandatory sequence.",
              "Enhancement is subjective (looks better); restoration is objective (uses a degradation model).",
              "Compression reduces storage with acceptable fidelity loss.",
              "Segmentation is the hardest step and the bridge to mid-level processing.",
              "Recognition consumes descriptors, not pixels.",
            ],
            callout: {
              type: "exam",
              title: "Order matters more than definitions",
              body: "Write the ten steps in syllabus order before explaining any of them - the mark scheme checks the sequence. Then attach one consumer-producer sentence per step: enhancement takes an image and returns a better image; segmentation takes an image and returns regions.",
            },
            table: {
              caption: "Step - what it consumes and produces.",
              headers: ["Step", "Consumes", "Produces"],
              rows: [
                ["Acquisition", "scene / sensor signal", "digital image f(x, y)"],
                ["Enhancement", "image", "better-looking image"],
                ["Restoration", "degraded image + degradation model", "recovered image"],
                ["Compression", "image", "compact representation"],
                ["Morphology", "binary/gray image", "shape components"],
                ["Segmentation", "image", "regions and boundaries"],
                ["Description", "regions", "feature vectors and descriptors"],
                ["Recognition", "descriptors", "object labels"],
              ],
            },
            examQuestions: [
              {
                q: "List the fundamental steps of digital image processing in order and explain what each step consumes and produces. Classify the steps into low-, mid- and high-level processing.",
                marks: 14,
                outline: [
                  "Acquisition -> enhancement -> restoration -> colour -> wavelets -> compression -> morphology -> segmentation -> representation/description -> recognition",
                  "Acquisition digitizes by sampling and quantization",
                  "Enhancement is subjective; restoration is model-based and objective",
                  "Compression reduces storage; wavelets give multiresolution processing",
                  "Morphology extracts shape components; segmentation partitions into objects",
                  "Description converts regions to features; recognition labels them",
                  "Low: image -> image; mid: image -> attributes; high: attributes -> meaning",
                ],
              },
              {
                q: "Why is segmentation called the bridge between low-level and high-level processing? Give one example of what goes wrong downstream if segmentation fails.",
                marks: 7,
                outline: [
                  "Segmentation is the first step whose output is not an image",
                  "It converts pixels into regions - the attributes every later step needs",
                  "Poor segmentation: broken boundaries -> wrong descriptors -> wrong recognition",
                  "Over-segmentation fragments objects; under-segmentation merges them",
                  "Example: a merged pair of touching coins counts as one object",
                  "No amount of clever recognition fixes a wrong segmentation",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Elements of a digital image processing system",
            body: [
              "A complete digital image processing system is a chain of eight elements: an illumination source, an imaging sensor, a digitizer, processing hardware and software, storage, display, hardcopy, and networking. The illumination source lights the scene - band-limited energy chosen to match the task (X-rays, visible light, ultrasound). The sensor converts the reflected energy into an analog electrical signal; modern solid-state sensors are CCD or CMOS arrays whose pixels accumulate charge proportional to incident light.",
              "The digitizer is the bridge to the digital world: an analog-to-digital converter samples the signal spatially (a grid of M x N positions) and quantizes each sample's amplitude into k bits. The result sits in a frame buffer - short-term storage sized M x N x k bits per image. The processor (a general computer, a DSP, or a GPU array) runs the algorithms; storage spans RAM for current work, frame buffers for live capture, and magnetic or optical media for archives; the display and hardcopy present results to humans; the network moves images between systems.",
              "Work the arithmetic once and the exam question is trivial: a 1024 x 1024 image at 8 bits per pixel is 8,388,608 bits, about 1 MB, and 30 such frames per second is roughly 30 MB/s - which is why video pipelines compress before they transmit. For the exam, draw the block diagram in this order, then attach one sentence per element; that diagram plus the storage calculation is the full 7-mark answer.",
            ],
            keyTerms: [
              { term: "CCD / CMOS sensor", definition: "Solid-state array converting incident photons into proportional electrical charge." },
              { term: "Digitizer (ADC)", definition: "Analog-to-digital converter that samples the signal spatially and quantizes amplitudes." },
              { term: "Frame buffer", definition: "Short-term storage holding one digital image, M x N x k bits." },
              { term: "Illumination source", definition: "Band-limited energy matched to the task - the element students forget." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Elements of a digital image processing system",
              caption: "Energy to signal to numbers to answers - every element is one stage of this chain.",
              stages: [
                { label: "Illumination source", note: "band-limited energy for the task" },
                { label: "Imaging sensor", note: "CCD / CMOS array, photons -> analog signal" },
                { label: "Digitizer (ADC)", note: "sampling + quantization -> frame buffer" },
                { label: "Processor", note: "computer / DSP / GPU runs the algorithms" },
                { label: "Display + storage + network", note: "present, archive, transmit" },
              ],
            },
            bullets: [
              "Eight elements: illumination, sensor, digitizer, processing, storage, display, hardcopy, networking.",
              "Illumination is chosen for the band: X-rays, visible light, ultrasound all count.",
              "CCD/CMOS pixels integrate charge proportional to incident light.",
              "The ADC does both digitizations: spatial sampling and amplitude quantization.",
              "Storage tiers: RAM and frame buffer (live), magnetic/optical (archive).",
              "Worked size: 1024 x 1024 x 8 bits = 8.39 Mb = about 1 MB per frame.",
            ],
            callout: {
              type: "warning",
              title: "Do not forget the front end",
              body: "Answers that start at the digitizer lose marks - the illumination source and sensor come first. Poor illumination is also the one element no algorithm can fully repair: garbage in the optical front end is garbage in the frame buffer.",
            },
            codeExample: {
              language: "python",
              caption: "storage.py - sizing a frame buffer",
              code: `M, N, k = 1024, 1024, 8          # pixels and bits per pixel
bits = M * N * k                  # 8,388,608 bits per image
mb = bits / (8 * 1024 * 1024)     # -> about 1.0 MB
fps = 30
print(f"one frame: {mb:.2f} MB, 30 fps stream: {mb * fps:.1f} MB/s")
# compression before transmission is why Unit IV exists`,
            },
            examQuestions: [
              {
                q: "With a neat block diagram, explain the elements of a digital image processing system. Include one sentence on the role of each element.",
                marks: 7,
                outline: [
                  "Illumination source: band-limited energy matched to the task",
                  "Imaging sensor: CCD/CMOS array, photons -> analog electrical signal",
                  "Digitizer: ADC performs spatial sampling and amplitude quantization",
                  "Frame buffer + processing hardware/software run the algorithms",
                  "Storage: RAM/frame buffer for live work, magnetic/optical for archives",
                  "Display and hardcopy present results to humans",
                  "Networking moves images between systems",
                ],
              },
              {
                q: "A video system captures 30 frames per second at 1024 x 1024 resolution with 8-bit quantization. Compute the storage per frame and the raw stream rate, and explain the consequence for the system design.",
                marks: 14,
                outline: [
                  "Bits per frame = 1024 x 1024 x 8 = 8,388,608 bits",
                  "Bytes per frame = 8,388,608 / 8 = 1,048,576 bytes = 1 MB",
                  "Raw stream = 30 x 1 MB = 30 MB/s = 240 Mb/s",
                  "A 100 GB disk holds about 100,000 frames - under an hour",
                  "Consequence: compress before storage and transmission (Unit IV)",
                  "Lossy JPEG-class coding achieves 10-50x at acceptable quality",
                  "Hardware consequence: the pipeline must sustain the codec's throughput",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Image sampling and quantization",
            body: [
              "Digitization has two halves that students must never blur. Sampling digitizes the spatial coordinates: the continuous scene is evaluated on a discrete grid of M x N sample points. Quantization digitizes the amplitudes: each sample's intensity is mapped to one of L discrete gray levels, almost always L = 2^k with k = 8, giving levels 0 to 255. The stored image is therefore M x N x k bits, and every quality-versus-storage trade in this subject is a decision about M, N and k.",
              "Worked numbers fix the intuition. A 1024 x 1024 image at 8 bits is 1024 x 1024 x 8 = 8,388,608 bits, about 1 MB; halving each spatial dimension quarters the storage (the area falls by 4), while dropping one bit per pixel halves it. Quality has two named failure modes. Sampling too coarsely (below twice the finest spatial detail - the sampling theorem) causes aliasing: fine patterns masquerade as coarse ones and detail is destroyed. Quantizing too coarsely causes false contouring: smooth gradients break into visible banded rings at the few surviving levels.",
              "The exam question pairs the definitions with the storage numerical and the two artefacts. One refinement earns the last mark: perceived quality depends on both together - highly detailed images tolerate fewer gray levels (detail masks banding), while flat images need many - the empirical Iso-preference curves from the classic experiments. Sampling is about where you look, quantization is about how finely you record what you see.",
            ],
            keyTerms: [
              { term: "Sampling", definition: "Digitizing the spatial coordinates - a continuous scene becomes an M x N grid of samples." },
              { term: "Quantization", definition: "Digitizing amplitudes into L = 2^k discrete gray levels (8 bits = 256 levels)." },
              { term: "Aliasing", definition: "Distortion from undersampling - fine patterns appear as false coarse ones." },
              { term: "False contouring", definition: "Visible banding in smooth gradients caused by too few gray levels." },
            ],
            diagram: {
              kind: "matrix",
              title: "Sampling x quantization - the quality map",
              caption: "Both axes must be fine for photorealism; each axis failing alone has a named artefact.",
              axes: { x: "Sampling density (coarse -> fine)", y: "Gray levels (few -> many)" },
              quadrants: [
                { label: "False contouring", note: "fine sampling, few levels - banded gradients" },
                { label: "Photorealistic", note: "fine sampling, many levels" },
                { label: "Aliasing / spatial blur", note: "coarse sampling, many levels" },
                { label: "Blocky posterization", note: "coarse sampling and few levels" },
              ],
            },
            bullets: [
              "Sampling = spatial grid (M x N); quantization = gray levels (L = 2^k).",
              "Storage = M x N x k bits; 1024 x 1024 x 8 = 8.39 Mb, about 1 MB.",
              "Halving each dimension quarters storage; dropping 1 bit halves it.",
              "Undersampling breaks the sampling theorem -> aliasing (irrecoverable detail loss).",
              "Coarse quantization -> false contouring in smooth regions.",
              "Iso-preference curves: detailed images tolerate fewer levels; flat images need more.",
            ],
            callout: {
              type: "warning",
              title: "Halving the side quarters the bytes",
              body: "The most common numerical slip: storage scales with the area (M x N), not the side. Reducing a 1024 x 1024 image to 512 x 512 removes three quarters of the bits, and dropping from 8 bits to 4 removes another half - compute both steps separately.",
            },
            table: {
              caption: "Storage arithmetic at 8 bits per pixel.",
              headers: ["Resolution", "Levels", "Bits", "Approx. size"],
              rows: [
                ["256 x 256", "256", "524,288", "64 KB"],
                ["512 x 512", "256", "2,097,152", "256 KB"],
                ["1024 x 1024", "256", "8,388,608", "1 MB"],
                ["1024 x 1024", "16 (4-bit)", "4,194,304", "0.5 MB"],
                ["2048 x 2048", "256", "33,554,432", "4 MB"],
              ],
            },
            examQuestions: [
              {
                q: "Define image sampling and quantization. Compute the storage for a 1024 x 1024 image with 256 gray levels, and state the quality artefact produced by poor sampling and by coarse quantization.",
                marks: 7,
                outline: [
                  "Sampling: digitizing spatial coordinates into an M x N grid",
                  "Quantization: digitizing amplitudes into L = 2^k levels (256 at k = 8)",
                  "Storage = 1024 x 1024 x 8 = 8,388,608 bits = about 1 MB",
                  "Poor sampling (below Nyquist) -> aliasing, false coarse patterns",
                  "Coarse quantization -> false contouring (banded smooth gradients)",
                  "Detail masks banding; flat images need more levels (Iso-preference)",
                ],
              },
              {
                q: "An image is reduced from 1024 x 1024 at 8 bits to 512 x 512 at 4 bits. Compute the compression factor and explain the artefacts the reduction may introduce, relating each to sampling and quantization.",
                marks: 14,
                outline: [
                  "Original: 1024 x 1024 x 8 = 8,388,608 bits (about 1 MB)",
                  "New: 512 x 512 x 4 = 1,048,576 bits (about 0.125 MB)",
                  "Compression factor = 8 - spatial halving gives 4, bit drop gives 2",
                  "Spatial halving can undersample fine detail -> aliasing/blur",
                  "4-bit quantization gives 16 levels -> false contouring in smooth areas",
                  "Artefacts compound: blocky regions plus banded gradients",
                  "Acceptable only for images without fine texture or smooth shading",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Neighbours, adjacency and connectivity",
            body: [
              "Pixel relationships are defined on neighbourhoods. The 4-neighbours of p at (x, y) are (x+1, y), (x-1, y), (x, y+1), (x, y-1) - the set N4(p). The diagonal neighbours (x+1, y+1), (x+1, y-1), (x-1, y+1), (x-1, y-1) form ND(p), and their union with N4(p) is the 8-neighbourhood N8(p). Adjacency is then defined between pixels whose values lie in a set V of interest - V = {1} for binary foreground, or a gray range such as {180, 181, ..., 255} for near-white pixels.",
              "Three adjacencies follow. Pixels p and q with values in V are 4-adjacent if q is in N4(p); 8-adjacent if q is in N8(p); m-adjacent (mixed) if q is in N4(p), or q is in ND(p) and the set N4(p) intersect N4(q) contains no pixel in V. The m-rule exists to kill ambiguity: under 8-adjacency a diagonal pair is adjacent both directly and via their shared 4-neighbour, giving two paths where one is intended. Worked example - pixels at (1,0), (0,1) and (1,1) all have value 1: N4((1,0)) intersects N4((0,1)) at (0,0) and (1,1); since (1,1) carries a value in V, the diagonal link between (1,0) and (0,1) is dropped, and the only m-path between them runs through (1,1).",
              "Connectivity is the adjacency idea generalized to paths: a pixel p is connected to q if there exists a path of adjacent pixels from p to q, and a connected component (region) is a maximal such set. The exam answer defines all three adjacencies, reproduces the small triangle example above, and states the payoff - m-adjacency guarantees exactly one path where 8-adjacency gives two, which is what connected-component labelling requires.",
            ],
            keyTerms: [
              { term: "N4(p)", definition: "The four horizontal and vertical neighbours of p: (x±1, y), (x, y±1)." },
              { term: "N8(p)", definition: "N4(p) plus the four diagonal neighbours ND(p)." },
              { term: "m-adjacency", definition: "4-adjacency, or diagonal adjacency allowed only when no shared 4-neighbour has a value in V - removes 8-path ambiguity." },
              { term: "Connected component", definition: "A maximal set of pixels pairwise connected by paths of adjacent pixels with values in V." },
            ],
            diagram: {
              kind: "flow",
              title: "From neighbours to connectivity",
              caption: "Define the neighbourhood, then the adjacency rule, then the path - ambiguity dies at the m-rule.",
              steps: [
                { label: "Pixel p at (x, y)", note: "start of every relationship" },
                { label: "N4: up, down, left, right", note: "the strict neighbourhood" },
                { label: "Add diagonals -> N8", note: "two paths can now exist" },
                { label: "m-adjacency", note: "drop a diagonal when a shared 4-neighbour is in V" },
              ],
            },
            bullets: [
              "N4(p): (x±1, y) and (x, y±1); ND(p): the diagonals; N8 = N4 plus ND.",
              "Adjacency applies only to pixel values inside the set V.",
              "4-adjacency: q in N4(p). 8-adjacency: q in N8(p).",
              "m-adjacency: diagonal allowed only if N4(p) intersect N4(q) has no V-valued pixel.",
              "Worked triangle: (1,0), (0,1), (1,1) all 1 -> the direct diagonal link is dropped under m-adjacency.",
              "Connectivity = adjacency along paths; a connected component is a maximal path-connected set.",
            ],
            callout: {
              type: "tip",
              title: "Always write V first",
              body: "Every adjacency question is meaningless until V is stated - V = {1} for binary foreground, a gray band for near-white pixels. Write V at the top of the answer, then test each adjacency against it; examiners look for that discipline.",
            },
            codeExample: {
              language: "python",
              caption: "adjacency.py - the ambiguous triangle",
              code: `import numpy as np

A = np.zeros((3, 3), dtype=int)
A[1, 0] = A[0, 1] = A[1, 1] = 1   # the triangle of 1s

p, q = (1, 0), (0, 1)             # diagonal pair
N4_p = [(p[0]-1, p[1]), (p[0]+1, p[1]), (p[0], p[1]-1), (p[0], p[1]+1)]
N4_q = [(q[0]-1, q[1]), (q[0]+1, q[1]), (q[0], q[1]-1), (q[0], q[1]+1)]
shared = [c for c in N4_p if c in N4_q]
print(shared)                     # [(0, 0), (1, 1)]
print(A[1, 1])                    # 1 -> in V, so the diagonal link is dropped
# m-adjacency: one path remains, through (1, 1)`,
            },
            examQuestions: [
              {
                q: "Define 4-, 8- and m-adjacency between pixels. With pixels at (1,0), (0,1) and (1,1) all having value 1, show why 8-adjacency is ambiguous and how m-adjacency removes the ambiguity.",
                marks: 7,
                outline: [
                  "V must be stated first (here V = {1})",
                  "4-adjacency: q in N4(p); 8-adjacency: q in N8(p)",
                  "m-adjacency: 4-adjacency, or diagonal with N4(p) and N4(q) sharing no V pixel",
                  "(1,0) and (0,1) are diagonal 8-neighbours AND both 4-adjacent to (1,1)",
                  "So 8-adjacency offers two paths - ambiguity",
                  "N4((1,0)) intersect N4((0,1)) contains (1,1), which is in V",
                  "m-adjacency drops the diagonal link; one path through (1,1) remains",
                ],
              },
              {
                q: "Explain connectivity and connected components for digital images. How does the choice of adjacency (4 vs 8) change the number of components a binary image has?",
                marks: 14,
                outline: [
                  "Connectivity: p connected to q if an adjacency path exists between them",
                  "Connected component: maximal set of mutually connected pixels",
                  "4-connectivity is stricter: diagonal-only touching pixels form separate components",
                  "8-connectivity is looser: diagonal touching merges them into one",
                  "A checkerboard has 32 components under 4-connectivity, 1 under 8-connectivity",
                  "Using 8-connectivity for foreground and 4 for background avoids the paradox",
                  "m-adjacency keeps foreground connected without path multiplicity",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Distance measures between pixels",
            body: [
              "Three distance functions dominate. Euclidean distance De = sqrt((x-s)^2 + (y-t)^2) is straight-line geometry. The city-block distance D4 = |x-s| + |y-t| counts 4-neighbour steps (rook moves) and forms a diamond: pixels with D4 = 1 are exactly the 4-neighbours of the centre. The chessboard distance D8 = max(|x-s|, |y-t|) counts king moves and forms a square: pixels with D8 = 1 are exactly the 8-neighbours. These 'distances' are metric but not Euclidean - that is the point of computing all three.",
              "Worked example for the exam pair p = (2, 2), q = (6, 5): the coordinate differences are 4 and 3, so Euclidean = sqrt(16 + 9) = sqrt(25) = 5; D4 = 4 + 3 = 7; D8 = max(4, 3) = 4. The ordering D8 <= De <= D4 always holds for this pair pattern - quote it as a check. A fourth measure, Dm, is the length of the shortest m-path between p and q: it depends on the values present in V along the path, so unlike the other three it can change when the image values change - it is a path distance, not a geometric one.",
              "The exam wants the three formulas, the diamond and square shapes for radius 1, and one numerical. The shapes earn the definition marks: a circle of Euclidean radius 1, a diamond of D4 radius 1, a square of D8 radius 1 - drawn quickly, they prove you know which moves each distance counts. Add the ordering check D8 <= De <= D4 as a verification habit, and note where Dm diverges: two pixels can be geometrically close yet far apart along m-paths when the foreground between them is broken - a connectivity fact no geometric formula captures.",
            ],
            keyTerms: [
              { term: "City-block distance (D4)", definition: "|x-s| + |y-t| - counts 4-neighbour steps; the D4 = 1 neighbourhood is a diamond." },
              { term: "Chessboard distance (D8)", definition: "max(|x-s|, |y-t|) - counts king moves; the D8 = 1 neighbourhood is a square." },
              { term: "Euclidean distance", definition: "sqrt((x-s)^2 + (y-t)^2) - straight-line geometry; the radius-1 circle." },
              { term: "Dm (m-path distance)", definition: "Length of the shortest m-path; depends on pixel values in V, not geometry alone." },
            ],
            diagram: {
              kind: "fork",
              title: "Which distance between p and q?",
              caption: "Pick by what 'near' means for the operation - each branch counts different moves.",
              start: "Measuring nearness between pixels p and q",
              branches: [
                { label: "Straight-line geometry", outcome: "Euclidean: sqrt((x-s)^2 + (y-t)^2)", good: true },
                { label: "Only rook moves (4-neighbour steps)", outcome: "D4 city block: |x-s| + |y-t|", good: true },
                { label: "King moves allowed", outcome: "D8 chessboard: max(|x-s|, |y-t|)", good: true },
                { label: "Path must stay inside V-valued pixels", outcome: "Dm - shortest m-path length", good: true },
              ],
            },
            bullets: [
              "Euclidean: sqrt((x-s)^2 + (y-t)^2); radius-1 neighbourhood is a circle.",
              "D4: |x-s| + |y-t|; radius-1 neighbourhood is a diamond.",
              "D8: max(|x-s|, |y-t|); radius-1 neighbourhood is a square.",
              "Worked pair p = (2,2), q = (6,5): De = 5, D4 = 7, D8 = 4.",
              "Ordering check: D8 <= De <= D4 for any pixel pair.",
              "Dm depends on image values along the path - a connectivity distance, not a geometric one.",
            ],
            callout: {
              type: "exam",
              title: "The shapes carry marks",
              body: "Sketch the three radius-1 neighbourhoods - circle, diamond, square - next to the formulas. It takes ten seconds, proves understanding, and is exactly what the 'distance measures' short-note question is marking.",
            },
            table: {
              caption: "Distance measure - formula - unit-radius shape.",
              headers: ["Measure", "Formula", "Shape at distance 1"],
              rows: [
                ["Euclidean De", "sqrt((x-s)^2 + (y-t)^2)", "circle"],
                ["City-block D4", "|x-s| + |y-t|", "diamond (4 neighbours)"],
                ["Chessboard D8", "max(|x-s|, |y-t|)", "square (8 neighbours)"],
                ["Dm", "shortest m-path length", "value-dependent (uses V)"],
              ],
            },
            examQuestions: [
              {
                q: "Define the Euclidean, D4 and D8 distances between two pixels. Compute all three for p = (2, 2) and q = (6, 5), and sketch the shape of each unit-radius neighbourhood.",
                marks: 7,
                outline: [
                  "De = sqrt((x-s)^2 + (y-t)^2); D4 = |x-s| + |y-t|; D8 = max(|x-s|, |y-t|)",
                  "Differences: 4 and 3",
                  "Euclidean = sqrt(16 + 9) = 5",
                  "D4 = 4 + 3 = 7; D8 = max(4, 3) = 4",
                  "Shapes: circle, diamond, square",
                  "Ordering D8 <= De <= D4 holds",
                ],
              },
              {
                q: "Explain the Dm distance and why it is not a purely geometric measure. Give an example where the shortest 8-path and the shortest m-path between the same two pixels differ.",
                marks: 14,
                outline: [
                  "Dm = length of the shortest m-path between p and q",
                  "m-paths use the m-adjacency rule, so paths depend on pixel values in V",
                  "Geometric distances (De, D4, D8) ignore image values entirely",
                  "Example: diagonal pair (1,0), (0,1) with (1,1) = 1 between them",
                  "8-path: direct diagonal, length 1",
                  "m-path: diagonal blocked by shared 4-neighbour in V, so path via (1,1), length 2",
                  "Moral: Dm measures connectivity through foreground, not spatial separation",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Linear and nonlinear operations",
            body: [
              "An operation H on images is linear if it satisfies superposition: H(a f1 + b f2) = a H(f1) + b H(f2) for any images f1, f2 and constants a, b. Spatial convolution and correlation, averaging filters, and all the enhancement transforms built from fixed masks are linear. Nonlinear operations - the median, max, min, and rank filters - fail the test, because sorting and selecting over a window is not a weighted sum. The distinction is worth marks because it predicts behaviour: linear operators scale and superpose predictably and can be analysed in the frequency domain; nonlinear ones cannot be written as masks but buy robustness.",
              "The outlier test is the worked example that makes the split visible. Take a 3 x 3 window of values {1, 2, 3, 4, 8, 6, 5, 7, 9}: the arithmetic mean is 45/9 = 5 and the median is also 5 - the two agree on clean data. Replace the 8 with an impulse of 100: the mean jumps to 16.4 while the median is still 5. The linear operator (mean) is dragged by the outlier; the nonlinear one (median) ignores it. That is exactly why salt-and-pepper noise is removed by the median filter of Unit II and not by smoothing with a mask.",
              "For the exam: state the superposition property, apply it as the test (is H(2f) = 2H(f)? is H(f + g) = H(f) + H(g)?), and classify the common operators - convolution and averaging are linear; median, min, max are nonlinear. Close with the consequence: linear filters blur edges while removing Gaussian noise, nonlinear order-statistic filters remove impulses while preserving edges - the trade Unit II exploits.",
            ],
            keyTerms: [
              { term: "Superposition", definition: "H(a f1 + b f2) = a H(f1) + b H(f2); the defining property of a linear operator." },
              { term: "Linear operator", definition: "Satisfies superposition - convolution, correlation, averaging filters." },
              { term: "Nonlinear operator", definition: "Fails superposition - median, max, min, rank filters." },
              { term: "Order-statistic filter", definition: "A filter that sorts the window and selects a rank value; inherently nonlinear." },
            ],
            diagram: {
              kind: "compare",
              title: "Linear vs nonlinear operators",
              caption: "The same noisy window, two philosophies - weighted sums versus sorting.",
              left: {
                heading: "Linear (convolution, mean)",
                items: [
                  "Superposition holds: H(2f) = 2H(f)",
                  "Expressible as a fixed mask of weights",
                  "Outlier 100 drags the mean to 16.4",
                  "Analysable in the frequency domain",
                ],
              },
              right: {
                heading: "Nonlinear (median, max, min)",
                items: [
                  "Superposition fails - no mask exists",
                  "Sorts the window, selects a rank",
                  "Median stays 5 despite the impulse",
                  "Cannot be analysed by Fourier methods",
                ],
              },
            },
            bullets: [
              "Linear test: H(a f1 + b f2) = a H(f1) + b H(f2) for all inputs and constants.",
              "Convolution, correlation and averaging filters are linear.",
              "Median, min, max and rank filters are nonlinear - no mask expresses them.",
              "Outlier test: window mean jumps 5 -> 16.4 with an impulse; median stays 5.",
              "Linear filters are frequency-domain analysable; nonlinear ones are not.",
              "Consequence: medians kill salt-and-pepper noise; means kill Gaussian noise.",
            ],
            callout: {
              type: "tip",
              title: "One test settles every classification",
              body: "When asked 'is the filter X linear?', do not argue - test: double the input and see if the output doubles, then add two inputs and see if outputs add. Both hold for convolution; both fail for the median. Writing the two checks is the full answer.",
            },
            codeExample: {
              language: "python",
              caption: "linearity.py - the superposition test, numerically",
              code: `import numpy as np

w = np.ones((3, 3)) / 9                     # linear: 3x3 mean filter

def H_mean(img):  return np.convolve(img.ravel(), w.ravel(), mode="same")
def H_median(img):
    return np.median(img[:9])               # nonlinear: median of the window

f = np.array([1, 2, 3, 4, 8, 6, 5, 7, 9], dtype=float)
print("mean of f:", round(f.mean(), 2))     # 5.0
f_out = f.copy(); f_out[4] = 100            # inject an impulse
print("mean with impulse:", round(f_out.mean(), 2))   # 16.44
print("median with impulse:", np.median(f_out))       # 5.0 - unchanged`,
            },
            examQuestions: [
              {
                q: "Define a linear operator using the superposition property. Classify convolution, averaging, median and max filters as linear or nonlinear, and demonstrate with a 3 x 3 window how an impulse affects the mean but not the median.",
                marks: 7,
                outline: [
                  "Linear: H(a f1 + b f2) = a H(f1) + b H(f2) - superposition",
                  "Convolution and averaging: linear (fixed weight masks)",
                  "Median and max: nonlinear (sorting, not weighting)",
                  "Window {1,2,3,4,8,6,5,7,9}: mean = 5, median = 5",
                  "Replace 8 with 100: mean = 16.4, median still 5",
                  "Consequence: medians remove impulse noise, means remove Gaussian noise",
                ],
              },
              {
                q: "Why can nonlinear filters not be represented by convolution masks, and what advantage do they buy in exchange? Relate your answer to edge preservation in Unit II.",
                marks: 14,
                outline: [
                  "A mask is a fixed linear combination: output = sum of weights times values",
                  "Median output is a rank of the sorted window - not expressible as weights",
                  "Changing the input changes the ranking, not the weights",
                  "Advantage: robustness to outliers and impulse noise",
                  "Mean blurs edges because edge pixels enter the weighted sum",
                  "Median preserves step edges: the sorted window still has a majority on each side",
                  "This is why Unit II uses mean filters for Gaussian noise, median filters for salt-and-pepper",
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
      title: "Image Enhancement in the Spatial Domain",
      summary:
        "Unit II is the workhorse unit: gray-level transformations, histogram processing, enhancement with arithmetic and logic operations, the mechanics of spatial filtering, smoothing and sharpening filters, and the strategy of combining methods.",
      chapter: {
        number: "02",
        title: "Pixels, Touched Directly",
        intro:
          "Unit II covers basic gray-level transformations, histogram processing, enhancement using arithmetic and logic operations, the basics of spatial filters, smoothing and sharpening spatial filters, and combining spatial enhancement methods.",
        inOneBreath:
          "Point operations map r to s pixel by pixel - negative, log, power-law; histogram equalization runs counts to PDF to CDF to a rounding of (L-1) times the CDF; averaging K images divides noise by sqrt(K); masks slide and weight; the mean smooths, the Laplacian sharpens, the median kills impulses, and big enhancements are pipelines of small ones.",
        sections: [
          {
            number: "2.1",
            title: "Basic gray-level transformations",
            body: [
              "Gray-level (point) transformations map each input intensity r to an output intensity s = T(r) with no dependence on neighbours. The four canonical transforms: the negative s = L - 1 - r (reverses intensity, ideal for white lesions on dark mammograms); the log transformation s = c log(1 + r), which compresses large dynamic ranges - the standard way to display Fourier spectra whose DC term dwarfs everything else; the power-law (gamma) transform s = c r^gamma, the workhorse for contrast and brightness; and piecewise contrast stretching, which remaps chosen intensity bands with specified slopes.",
              "The gamma exponent is the dial the exam tests. Normalize r to [0, 1]: gamma < 1 expands the dark range and brightens dark images (gamma = 0.4 rescues a dark X-ray), gamma > 1 compresses dark values and darkens (gamma = 2.5 on a washed-out image), and gamma = 1 is identity. The gamma of display devices - about 2.2 for CRTs - is why images are pre-corrected with 1/2.2. Worked numbers: r = 0.25 with gamma = 0.5 gives s = 0.5 (darker quarter becomes mid-gray); the same r with gamma = 2 gives s = 0.0625 (crushed toward black).",
              "For the exam: write each formula, one sentence on what it is for, and the gamma numerical with both exponents. The examiner's favourite contrast is log versus gamma - log compresses for display of huge ranges, gamma re-shapes contrast for viewing - and the negative transform as the cheapest medical-imaging trick in the book. Piecewise stretching deserves its own line: choose thresholds r1, r2 and band slopes so the interesting intensities map to high contrast while the rest compresses - it is the manual version of what histogram equalization automates in section 2.2.",
            ],
            keyTerms: [
              { term: "Point transformation", definition: "s = T(r) applied pixel by pixel with no neighbour dependence." },
              { term: "Negative transform", definition: "s = L - 1 - r; reverses intensity order for dark-background inspection." },
              { term: "Log transform", definition: "s = c log(1 + r); compresses wide dynamic ranges such as Fourier spectra." },
              { term: "Power-law (gamma) transform", definition: "s = c r^gamma; gamma < 1 brightens, gamma > 1 darkens." },
            ],
            diagram: {
              kind: "flow",
              title: "One pixel, four transformations",
              caption: "Every point operation is the same story: r enters, T(r) leaves - only the curve changes.",
              steps: [
                { label: "Negative", note: "s = L - 1 - r" },
                { label: "Log", note: "s = c log(1 + r) - range compression" },
                { label: "Power-law", note: "s = c r^gamma - contrast dial" },
                { label: "Piecewise stretch", note: "slopes chosen per band" },
              ],
            },
            bullets: [
              "Negative: s = L - 1 - r; with L = 256, r = 180 -> s = 75.",
              "Log: s = c log(1 + r); displays Fourier spectra without DC dominance.",
              "Power-law: s = c r^gamma on r in [0,1]; gamma < 1 brightens dark images.",
              "Worked: r = 0.25, gamma = 0.5 -> s = 0.5; r = 0.25, gamma = 2 -> s = 0.0625.",
              "Display gamma about 2.2 - images pre-corrected with 1/2.2.",
              "Piecewise contrast stretching: band-wise slopes set by thresholds r1, r2.",
            ],
            callout: {
              type: "exam",
              title: "Normalize before raising to gamma",
              body: "s = c r^gamma is defined on r in [0, 1]. If you plug raw r = 64 into r^0.5 you get 8 - apparently darker, the opposite of the truth. Normalize to 0.25, then s = 0.5. Stating the normalization is the mark most students lose.",
            },
            table: {
              caption: "Transformation - formula - use.",
              headers: ["Transform", "Formula", "Typical use"],
              rows: [
                ["Negative", "s = L - 1 - r", "dark-background medical inspection"],
                ["Log", "s = c log(1 + r)", "displaying Fourier spectra"],
                ["Power-law", "s = c r^gamma", "contrast/brightness correction, display gamma"],
                ["Piecewise linear", "band-wise slopes", "targeted contrast stretching"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the negative, log, power-law and piecewise gray-level transformations with formulas and one application each. Compute the output of the power-law transform for r = 0.25 with gamma = 0.5 and with gamma = 2.",
                marks: 7,
                outline: [
                  "Negative: s = L - 1 - r; mammography dark-background viewing",
                  "Log: s = c log(1 + r); compresses Fourier spectrum ranges",
                  "Power-law: s = c r^gamma on normalized r; contrast dial",
                  "Piecewise: specified slopes over chosen bands",
                  "r = 0.25, gamma = 0.5: s = 0.5 - dark quarter becomes mid-gray",
                  "r = 0.25, gamma = 2: s = 0.0625 - crushed toward black",
                  "gamma < 1 brightens, gamma > 1 darkens",
                ],
              },
              {
                q: "A dark X-ray image needs brightening and a washed-out spectrum display needs range compression. Which transformation serves each, why, and how does display-device gamma change the choice?",
                marks: 14,
                outline: [
                  "Dark image: power-law with gamma < 1 (e.g. 0.4-0.6)",
                  "Expands low-intensity range - dark detail becomes visible",
                  "Log suits range compression, not contrast reshaping",
                  "Spectrum: log s = c log(1 + r) tames the DC-dominated dynamic range",
                  "Without log, only the DC point is visible after scaling",
                  "Display gamma about 2.2 darkens; pre-correct with gamma = 1/2.2",
                  "Net exponent is the product - calibrate so the net effect is intended",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Histogram processing",
            body: [
              "The histogram is the discrete function h(r_k) = n_k, the count of pixels at level r_k; normalized by the total n it becomes the probability p(r_k) = n_k / n. Histogram equalization spreads the intensity distribution toward uniform, improving contrast automatically. The procedure is four steps: (1) compute p(r_k) for every level; (2) form the cumulative sum - the CDF; (3) map each level by s_k = round((L - 1) * CDF(r_k)); (4) write s_k back at every pixel that had r_k. The CDF is exactly the intensity transformation the equalizer needs, because a uniform output distribution is the goal.",
              "The canonical worked example is a 64 x 64 image (n = 4096, L = 8). Counts n_k = [790, 1023, 850, 656, 329, 245, 122, 81] give p(r_k) = [0.19, 0.25, 0.21, 0.16, 0.08, 0.06, 0.03, 0.02]; the CDF accumulates to [0.19, 0.44, 0.65, 0.81, 0.89, 0.95, 0.98, 1.00]; multiplying by L - 1 = 7 and rounding gives the mapping 0 -> 1, 1 -> 3, 2 -> 5, 3 -> 6, 4 -> 6, 5 -> 7, 6 -> 7, 7 -> 7. Two consequences follow: levels merge (3 and 4 both map to 6), so equalization cannot be undone, and the output histogram is spread but never perfectly uniform.",
              "Histogram matching (specification) is the escape hatch when equalization's result is not wanted: compute the equalization map for the image and for a desired histogram, then join them through the common CDF. The chain works because both maps are monotone through the same uniform scale, so composing them is well defined; matching is what you use when a reference image's tonal balance - a well-exposed master, a calibrated scanner - is the target. For the exam, present the four-step procedure, the full table for the 64 x 64 example, and the two consequences - that table is the answer.",
            ],
            keyTerms: [
              { term: "Histogram h(r_k)", definition: "n_k, the count of pixels at gray level r_k; normalized, an estimate of the level's probability." },
              { term: "Histogram equalization", definition: "Map levels by s = round((L-1) * CDF(r)) so the output distribution is spread toward uniform." },
              { term: "CDF transformation", definition: "The cumulative sum of p(r_k); the intensity transform that equalizes." },
              { term: "Histogram matching", definition: "Specifying a target histogram by chaining equalization maps through the CDF." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Histogram equalization in four steps",
              caption: "Counts -> probabilities -> cumulative -> rounded map; the CDF is the transformation.",
              stages: [
                { label: "Histogram", note: "n_k counts of each level" },
                { label: "Normalize", note: "p(r_k) = n_k / n" },
                { label: "Cumulative sum", note: "CDF(r_k) builds the map" },
                { label: "Scale and round", note: "s_k = round((L-1) * CDF)" },
                { label: "Remap pixels", note: "write s_k where r_k was" },
              ],
            },
            bullets: [
              "h(r_k) = n_k; p(r_k) = n_k / n after normalization.",
              "Equalization map: s_k = round((L - 1) * CDF(r_k)).",
              "Worked 64 x 64, L = 8: CDF = [0.19, 0.44, 0.65, 0.81, 0.89, 0.95, 0.98, 1.00].",
              "Times 7 and rounded: 0 -> 1, 1 -> 3, 2 -> 5, 3 -> 6, 4 -> 6, 5 -> 7, 6 -> 7, 7 -> 7.",
              "Levels merge (3 and 4 -> 6), so the operation is irreversible.",
              "Output histogram is spread but not perfectly uniform - merging forbids it.",
            ],
            callout: {
              type: "exam",
              title: "The table is the answer",
              body: "For any equalization numerical, show all five columns: r_k, n_k, p(r_k), CDF, s_k. Half the marks live in the CDF column; the rounding of (L-1)*CDF is where the other half hides. Never skip to the mapping without the working.",
            },
            table: {
              caption: "Equalization of a 64 x 64 image, L = 8.",
              headers: ["r_k", "n_k", "p(r_k)", "CDF", "s_k"],
              rows: [
                ["0", "790", "0.19", "0.19", "1"],
                ["1", "1023", "0.25", "0.44", "3"],
                ["2", "850", "0.21", "0.65", "5"],
                ["3", "656", "0.16", "0.81", "6"],
                ["4", "329", "0.08", "0.89", "6"],
                ["5", "245", "0.06", "0.95", "7"],
                ["6", "122", "0.03", "0.98", "7"],
                ["7", "81", "0.02", "1.00", "7"],
              ],
            },
            examQuestions: [
              {
                q: "Explain histogram equalization and derive the transformation function. Work through a 64 x 64, 8-level example (n_k = 790, 1023, 850, 656, 329, 245, 122, 81) and state the final mapping.",
                marks: 14,
                outline: [
                  "Histogram h(r_k) = n_k; p(r_k) = n_k / n",
                  "Equalization: s_k = round((L-1) * CDF(r_k))",
                  "p(r_k) = [0.19, 0.25, 0.21, 0.16, 0.08, 0.06, 0.03, 0.02]",
                  "CDF = [0.19, 0.44, 0.65, 0.81, 0.89, 0.95, 0.98, 1.00]",
                  "(L-1)*CDF = [1.33, 3.08, 4.55, 5.67, 6.23, 6.65, 6.86, 7.00]",
                  "Rounded mapping: 0->1, 1->3, 2->5, 3->6, 4->6, 5->7, 6->7, 7->7",
                  "Levels 3 and 4 merge - operation irreversible, output not perfectly uniform",
                ],
              },
              {
                q: "Why is the output of histogram equalization not perfectly uniform even though that is the goal? How does histogram matching (specification) produce a chosen target shape instead?",
                marks: 7,
                outline: [
                  "The map s = round((L-1)*CDF) is many-to-one - levels merge",
                  "Merged bins cannot be split back, so uniformity is approximated",
                  "Sparse input levels leave output gaps",
                  "Matching: equalize image to get T1(r), equalize target to get T2(q)",
                  "Invert T2 and compose: q = T2^-1(T1(r)) - chains through the CDF",
                  "Used when a reference image's tonal balance is wanted",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Enhancement using arithmetic and logic operations",
            body: [
              "Arithmetic operations combine two images pixel by pixel: addition, subtraction, multiplication (and division). Image averaging denoises: g(x, y) = (1/K) * sum of K noisy images of one static scene. If each frame's noise has standard deviation sigma, the averaged image's noise falls to sigma / sqrt(K) - averaging 16 frames cuts noise by 4, which is how astronomy and microscopy build clean images from noisy exposures. Image subtraction detects change: g = f1 - f2 highlights everything that differs - medical subtraction angiography removes the static anatomy and leaves only the vessel filled with contrast dye.",
              "Multiplication and division serve masking and normalization: multiply an image by a 0/1 (or gray) mask to isolate a region of interest - the mask comes from segmentation - and divide by a flat-field image to correct uneven illumination. Logic operations work on binary images: AND intersects (the mask operation), OR unions, NOT inverts, XOR highlights differences. The logic versions are the set-theory twins of the arithmetic ones, and in morphology (Unit V) they become the algebra of shapes.",
              "For the exam, each operation needs its noise-reduction or change-detection sentence plus the sigma/sqrt(K) derivation for averaging: noise variances add across independent frames, so the variance of the mean of K frames is sigma^2 / K and the standard deviation falls as sqrt(K). One numerical - 16 frames, sigma = 20 -> sigma = 5 - closes the answer. Logic operations deserve equal billing on binary images: AND is the mask, OR unions shapes, XOR flags difference - and all four are the set algebra Unit V's morphology formalizes. One caution completes the answer: averaging assumes registered frames of a static scene, and subtraction assumes aligned geometry, or the enhancement becomes an artefact generator.",
            ],
            keyTerms: [
              { term: "Image averaging", definition: "g = (1/K) sum of K frames of a static scene; noise falls by sqrt(K)." },
              { term: "Image subtraction", definition: "g = f1 - f2; isolates change or removes static anatomy (DSA)." },
              { term: "Masking", definition: "Multiplying by a 0/1 template to restrict processing to a region of interest." },
              { term: "Digital subtraction angiography", definition: "The classic subtraction application: contrast-filled vessels isolated from background." },
            ],
            diagram: {
              kind: "fork",
              title: "Two images, one operator",
              caption: "The operator is chosen by what should survive - everything else cancels.",
              start: "Combine f1 and f2 pixel by pixel",
              branches: [
                { label: "Subtract", outcome: "change and difference survive - DSA, motion detection", good: true },
                { label: "Average K frames", outcome: "noise falls by sqrt(K) - astronomy, microscopy", good: true },
                { label: "Multiply by 0/1 mask", outcome: "region of interest isolated", good: true },
                { label: "AND / OR (binary)", outcome: "intersection / union of shapes", good: true },
              ],
            },
            bullets: [
              "Averaging: g = (1/K) * sum g_i; noise std falls from sigma to sigma / sqrt(K).",
              "Worked: 16 frames, sigma = 20 -> sigma = 5 - a 4x noise reduction.",
              "Subtraction isolates change: digital subtraction angiography leaves vessels only.",
              "Multiplication by a 0/1 mask crops processing to a region of interest.",
              "Logic AND = intersection (mask), OR = union, XOR = difference of binary shapes.",
              "Frames must be aligned - a one-pixel shift turns averaging into blurring.",
            ],
            callout: {
              type: "warning",
              title: "Averaging needs registration",
              body: "The sigma / sqrt(K) law assumes the scene is static and frames are perfectly aligned. If the camera or patient moves one pixel between frames, averaging becomes a blur filter instead of a noise filter. State the assumption - it is the subtle mark in this question.",
            },
            table: {
              caption: "Operation - formula - what survives.",
              headers: ["Operation", "Formula / rule", "Survives"],
              rows: [
                ["Averaging", "g = (1/K) sum of K frames", "static content; noise drops by sqrt(K)"],
                ["Subtraction", "g = f1 - f2", "differences (change, vessels)"],
                ["Multiplication", "g = f * mask", "masked region of interest"],
                ["Division", "g = f / flat-field", "illumination-corrected image"],
                ["AND / OR", "binary intersection / union", "shape algebra"],
              ],
            },
            examQuestions: [
              {
                q: "Explain enhancement using image averaging and image subtraction. Show that averaging K independent noisy frames reduces the noise standard deviation by sqrt(K), and name the classic medical application of subtraction.",
                marks: 7,
                outline: [
                  "Averaging: g = (1/K) sum of K frames of a static scene",
                  "Noise variances add: variance of the mean = sigma^2 / K",
                  "So noise std falls to sigma / sqrt(K); 16 frames -> 4x reduction",
                  "Worked: sigma = 20 becomes 5",
                  "Subtraction g = f1 - f2 isolates change",
                  "Digital subtraction angiography: contrast vessels minus static anatomy",
                  "Frames must be registered for either operation to work",
                ],
              },
              {
                q: "Explain the logic operations AND, OR, NOT and XOR on binary images with small examples, and relate each to its arithmetic or set-theoretic counterpart.",
                marks: 14,
                outline: [
                  "AND: 1 where both images are 1 - intersection, the mask operation",
                  "OR: 1 where either is 1 - union of regions",
                  "NOT: complements the set - background swap",
                  "XOR: 1 where exactly one is 1 - symmetric difference, change detection",
                  "Arithmetic twins: AND with mask = multiply by 0/1 mask",
                  "XOR corresponds to |f1 - f2| on binary images",
                  "These set operations are the algebra morphology builds on in Unit V",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Basics of spatial filtering",
            body: [
              "A spatial filter is a neighbourhood operation: a mask (kernel) of coefficients is centred on each pixel, the neighbourhood values are combined with the coefficients, and the result is written to the output pixel. Linear filtering does this by a weighted sum - correlation is the plain weighted sum; convolution is the same sum with the mask rotated 180 degrees first, which matters only for asymmetric masks. The response of a mask w over a neighbourhood z is R = sum of w_i * z_i, and the mask slides row by row, column by column across the whole image.",
              "Mechanics, worked: the 3 x 3 averaging mask (all weights 1/9) over the subimage [2 3 4; 4 5 6; 6 7 8] gives R = (1/9)(2+3+4+4+5+6+6+7+8) = 45/9 = 5. Borders need a policy - pad with zeros, replicate edges, or restrict the output to the interior - because the mask hangs over the edge at boundary pixels. Mask size is the second dial: a 3 x 3 mask is cheap and gentle, larger masks smooth more but blur more.",
              "The exam answer: define the mask and the sliding mechanics, distinguish correlation from convolution (flip 180 degrees), compute the averaging response above, and state the border policy. One sentence closes it - nonlinear filters such as the median use the same neighbourhood idea but a sorting rule instead of weights, which is why they have no mask representation. Mention also that the same mask mechanics drive the smoothing and sharpening filters of the next two sections, so the response computation here is the one skill every later mask question reuses - practise it until the (1/9)(sum) arithmetic is automatic.",
            ],
            keyTerms: [
              { term: "Mask (kernel)", definition: "The array of filter coefficients centred on each pixel." },
              { term: "Correlation", definition: "The plain weighted sum of mask times neighbourhood - the mechanical operation." },
              { term: "Convolution", definition: "Correlation with the mask rotated 180 degrees first; identical for symmetric masks." },
              { term: "Border policy", definition: "How edges are handled: zero padding, edge replication, or interior-only output." },
            ],
            diagram: {
              kind: "flow",
              title: "One step of spatial filtering",
              caption: "Place, multiply, sum, write, slide - five moves repeated for every pixel.",
              steps: [
                { label: "Centre mask on (x, y)", note: "neighbourhood selected" },
                { label: "Multiply weights by values", note: "pairwise products" },
                { label: "Sum the products", note: "R = sum w_i * z_i" },
                { label: "Write to output", note: "optionally threshold" },
                { label: "Slide to the next pixel", note: "row by row, column by column" },
              ],
            },
            bullets: [
              "Linear filter: output = weighted sum of the neighbourhood with mask weights.",
              "Correlation = weighted sum; convolution = correlation with the mask flipped 180 degrees.",
              "Symmetric masks make the two identical - asymmetric masks do not.",
              "Worked: mean mask on [2 3 4; 4 5 6; 6 7 8] -> 45/9 = 5.",
              "Borders need zero padding, replication, or interior-only output.",
              "Nonlinear filters use the same sliding but a sorting rule, not weights.",
            ],
            callout: {
              type: "exam",
              title: "Flip only when asymmetric",
              body: "The classic trick question: are correlation and convolution the same here? Answer: yes for symmetric masks such as the mean, Laplacian and Gaussian; no for asymmetric ones. State the flip rule and you keep the mark that careless answers lose.",
            },
            table: {
              caption: "Correlation vs convolution.",
              headers: ["Aspect", "Correlation", "Convolution"],
              rows: [
                ["Mask orientation", "as written", "rotated 180 degrees"],
                ["Commutativity", "no", "yes"],
                ["Same result for symmetric masks", "yes", "yes"],
                ["Frequency-domain twin", "not directly", "multiplication by H(u, v)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the mechanics of spatial filtering: masks, correlation versus convolution, and border handling. Compute the response of a 3 x 3 averaging mask over the subimage [2 3 4; 4 5 6; 6 7 8].",
                marks: 7,
                outline: [
                  "Mask = coefficient array centred on each pixel; slides over the image",
                  "Correlation: R = sum of w_i * z_i, no flip",
                  "Convolution: same sum after rotating the mask 180 degrees",
                  "Identical for symmetric masks; different otherwise",
                  "Response: (1/9)(2+3+4+4+5+6+6+7+8) = 45/9 = 5",
                  "Borders: zero padding, edge replication, or interior-only output",
                ],
              },
              {
                q: "Why does every linear spatial filter have a frequency-domain counterpart, and what does that duality buy? Relate smoothing masks to low-pass filtering and sharpening masks to high-pass filtering.",
                marks: 14,
                outline: [
                  "Convolution in space equals multiplication in frequency (Unit III)",
                  "Every mask therefore corresponds to a transfer function H(u, v)",
                  "Smoothing masks (mean, Gaussian) attenuate high frequencies - low-pass",
                  "Sharpening masks (Laplacian, Sobel) boost high frequencies - high-pass",
                  "Duality lets design happen in whichever domain is easier",
                  "Large spatial masks <-> narrow frequency passbands (uncertainty trade)",
                  "Unit III exploits this: filtering by H(u, v) instead of sliding masks",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Smoothing spatial filters",
            body: [
              "Smoothing filters suppress fine detail and noise; they are used for noise reduction, for blurring before segmentation, and for reducing artefacts between coarse image operations. The linear family: the 3 x 3 mean filter (all weights 1/9), the weighted mean (centre 4, edges 2, corners 1, over 16) which respects distance from the centre, and the Gaussian filter whose weights fall off smoothly - the mild, ring-free workhorse of the family. Response grows smoother and slower as the mask grows: a 5 x 5 mean blurs twice as aggressively as a 3 x 3.",
              "The nonlinear family is the order-statistic filters: the median sorts the window and takes the middle value - superb against salt-and-pepper noise and far gentler on edges than any mean; the max filter brightens (grows bright regions), the min filter darkens, and the midpoint averages max and min. Worked example: the window [1, 2, 3, 4, 200, 5, 6, 7, 8] sorted is [1, 2, 3, 4, 5, 6, 7, 8, 200] - median 5, while the mean is 26.2. One impulse drags every mean; no median survives it.",
              "The exam contrast to nail: mean filters for Gaussian noise (noise averages out), median filters for impulse noise (outliers are discarded by rank). Adding that the median preserves edges while the mean blurs them, and stating the size trade-off (bigger mask, more smoothing, more blur), completes the standard 7-mark answer. Rank the order-statistic family too - max grows bright regions, min shrinks them, midpoint splits the difference for uniform noise - and note that median filtering is nonlinear, so it has no frequency-domain twin and no mask; its description is the sorting rule itself.",
            ],
            keyTerms: [
              { term: "Mean filter", definition: "Average of the neighbourhood; smooths Gaussian noise, blurs edges." },
              { term: "Weighted mean filter", definition: "Centre-weighted mask such as [1 2 1; 2 4 2; 1 2 1]/16 - closer pixels count more." },
              { term: "Median filter", definition: "Order-statistic filter taking the middle sorted value; kills impulses, preserves edges." },
              { term: "Midpoint filter", definition: "Average of max and min in the window; suits randomly distributed Gaussian and uniform noise." },
            ],
            diagram: {
              kind: "cycle",
              title: "The median filter loop",
              caption: "Slide, collect, sort, write - the loop that ignores outliers by construction.",
              steps: [
                { label: "Centre window on (x, y)", note: "3 x 3 or larger" },
                { label: "Collect 9 values", note: "impulses ride along" },
                { label: "Sort ascending", note: "outliers land at the ends" },
                { label: "Take the middle value", note: "write to output" },
                { label: "Slide to next pixel", note: "repeat across the image" },
              ],
            },
            bullets: [
              "Mean mask: all 1/9; weighted mean [1 2 1; 2 4 2; 1 2 1]/16.",
              "Gaussian weights taper smoothly - mild smoothing without ringing.",
              "Worked window [1,2,3,4,200,5,6,7,8]: median 5, mean 26.2.",
              "Median is the impulse (salt-and-pepper) killer; mean is the Gaussian-noise smoother.",
              "Max brightens and grows bright regions; min darkens; midpoint averages the two.",
              "Mask size dial: 3 x 3 gentle, 5 x 5 aggressive - more smoothing, more blur.",
            ],
            callout: {
              type: "warning",
              title: "Mean on impulse noise smears it",
              body: "Applying a mean filter to salt-and-pepper noise spreads each spike across the neighbourhood into gray blobs - the worst possible choice. Match the filter to the noise model: Gaussian noise -> mean/Gaussian; impulse noise -> median. Naming both noise models is the mark.",
            },
            table: {
              caption: "Smoothing masks and their noises.",
              headers: ["Filter", "Mask / rule", "Best against"],
              rows: [
                ["Mean", "[1 1 1; 1 1 1; 1 1 1]/9", "Gaussian noise"],
                ["Weighted mean", "[1 2 1; 2 4 2; 1 2 1]/16", "Gaussian noise, gentler"],
                ["Gaussian", "tapered weights (sigma sets spread)", "Gaussian noise, no ringing"],
                ["Median", "middle of sorted window", "salt-and-pepper impulses"],
                ["Max / min / midpoint", "largest / smallest / their mean", "growth, shrinkage, uniform noise"],
              ],
            },
            examQuestions: [
              {
                q: "Explain smoothing spatial filters. Give the mean, weighted-mean and median filters with masks or rules, and demonstrate with a worked window why the median outperforms the mean against impulse noise.",
                marks: 7,
                outline: [
                  "Smoothing suppresses detail and noise; linear masks or rank rules",
                  "Mean [1 1 1; 1 1 1; 1 1 1]/9 - plain average",
                  "Weighted mean [1 2 1; 2 4 2; 1 2 1]/16 - centre weighted",
                  "Median: middle of the sorted window - nonlinear",
                  "Window with impulse 200: sorted median 5, mean 26.2",
                  "Median removes impulses, preserves edges; mean blurs",
                  "Match filter to noise: Gaussian -> mean, impulse -> median",
                ],
              },
              {
                q: "Compare linear and order-statistic smoothing filters on three grounds: mask representation, effect on edges, and suitable noise model. Where do max, min and midpoint filters fit?",
                marks: 14,
                outline: [
                  "Linear filters are masks (weighted sums); order-statistics sort and select",
                  "Means blur edges - edge pixels enter the weighted sum",
                  "Medians preserve step edges - majority values dominate the sorted window",
                  "Gaussian noise: mean/Gaussian filters optimal",
                  "Impulse noise: median optimal; mean smears spikes into blobs",
                  "Max grows bright regions (dilation-like); min shrinks them",
                  "Midpoint (max+min)/2 suits uniform and Gaussian noise; also erosion/dilation hints for Unit V",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Sharpening spatial filters",
            body: [
              "Sharpening highlights transitions - edges and fine detail - by boosting the derivative content of the image. The second-derivative tool is the Laplacian: the isotropic operator whose discrete form subtracts four times the centre from its four neighbours, implemented by the mask [0 1 0; 1 -4 1; 0 1 0] (center-negative variants [0 -1 0; -1 4 -1; 0 -1 0] are equally standard). Sharpened output: g = f - (center-negative response) or g = f + (center-positive response) - sign discipline decides whether the image is enhanced or ruined. First-derivative tools are the gradient pair Gx, Gy computed by the Sobel or Prewitt masks; the gradient magnitude approximates sqrt(Gx^2 + Gy^2) by |Gx| + |Gy|.",
              "Worked Laplacian: neighbourhood [1 2 3; 4 9 6; 7 8 9], center-negative mask [0 -1 0; -1 4 -1; 0 -1 0]: response = 4*9 - (2 + 4 + 6 + 8) = 36 - 20 = 16 - a strong positive response at a bright spot on darker surround; the sharpened pixel is 9 + 16 = 25. Worked Sobel: on a horizontal edge with rows [0 0 0] above and [6 6 6] below, the Gy mask [-1 -2 -1; 0 0 0; 1 2 1] gives (6 + 12 + 6) - 0 = 24 - a strong vertical-derivative response. The Sobel centre weight of 2 provides smoothing while differentiating.",
              "For the exam: write the Laplacian mask pair, state the add-or-subtract rule by mask sign, compute one Laplacian and one Sobel response, and close with the comparison - Laplacian is isotropic and second-order (edges and lines), gradient is directional and first-order (edge strength and direction alpha = tan^-1(Gy/Gx)). Quote the high-boost form g = (A - 1) f + sharpened response as the practical variant that keeps the image visible while edges strengthen, and warn that the Laplacian amplifies noise roughly twice - smoothing first is why the LoG and the Sobel's centre weight exist.",
            ],
            keyTerms: [
              { term: "Laplacian", definition: "Isotropic second derivative; mask [0 1 0; 1 -4 1; 0 1 0] or its negation." },
              { term: "Gradient", definition: "First-derivative vector (Gx, Gy); magnitude approx |Gx| + |Gy|, direction tan^-1(Gy/Gx)." },
              { term: "Sobel mask", definition: "3 x 3 first-derivative mask with centre weight 2: [-1 -2 -1; 0 0 0; 1 2 1]." },
              { term: "High-boost filtering", definition: "g = (A - 1) f + sharpening response; A > 1 keeps background detail while sharpening." },
            ],
            diagram: {
              kind: "compare",
              title: "Laplacian vs gradient",
              caption: "Second derivative versus first - isotropy against direction, lines against edges.",
              left: {
                heading: "Laplacian (2nd derivative)",
                items: [
                  "Isotropic - one mask, no direction",
                  "[0 1 0; 1 -4 1; 0 1 0]",
                  "Responds to lines and edges alike",
                  "Worked: 4*9 - (2+4+6+8) = 16",
                ],
              },
              right: {
                heading: "Gradient (1st derivative, Sobel)",
                items: [
                  "Directional - Gx and Gy pair",
                  "[-1 -2 -1; 0 0 0; 1 2 1] for Gy",
                  "Magnitude + direction per pixel",
                  "Worked horizontal edge: Gy = 24",
                ],
              },
            },
            bullets: [
              "Laplacian masks: [0 1 0; 1 -4 1; 0 1 0] and its negation - both standard.",
              "Sharpening rule: center-positive mask -> g = f + response; center-negative -> g = f - response.",
              "Worked Laplacian: [1 2 3; 4 9 6; 7 8 9] gives 36 - 20 = 16; g = 9 + 16 = 25.",
              "Sobel Gy on rows [0 0 0] / [6 6 6]: (6+12+6) - 0 = 24.",
              "Sobel's centre weight 2 smooths while differentiating; Prewitt uses weight 1.",
              "High-boost: g = (A - 1) f + sharpened detail; A = 1 is plain sharpening.",
            ],
            callout: {
              type: "warning",
              title: "Sign discipline decides the output",
              body: "The single most common sharpening error: adding where you should subtract. Center-negative Laplacian masks (4 at centre) are subtracted from f; center-positive (-4 at centre) are added. Writing g = f - lap and then using the wrong mask doubles the error instead of sharpening - fix the convention in your first line.",
            },
            table: {
              caption: "Sharpening masks.",
              headers: ["Mask", "Entries", "Use"],
              rows: [
                ["Laplacian (center -4)", "[0 1 0; 1 -4 1; 0 1 0]", "g = f - response"],
                ["Laplacian (center 4)", "[0 -1 0; -1 4 -1; 0 -1 0]", "g = f + response"],
                ["Laplacian variant", "[1 1 1; 1 -8 1; 1 1 1]", "includes diagonals"],
                ["Sobel Gy", "[-1 -2 -1; 0 0 0; 1 2 1]", "vertical derivative"],
                ["Sobel Gx", "[-1 0 1; -2 0 2; -1 0 1]", "horizontal derivative"],
              ],
            },
            examQuestions: [
              {
                q: "Explain image sharpening by the Laplacian. Give both standard 3 x 3 Laplacian masks, state the correct add/subtract rule, and compute the sharpened value at the centre of the neighbourhood [1 2 3; 4 9 6; 7 8 9].",
                marks: 7,
                outline: [
                  "Laplacian: isotropic second derivative, mask [0 1 0; 1 -4 1; 0 1 0]",
                  "Center-negative variant [0 -1 0; -1 4 -1; 0 -1 0] also standard",
                  "Rule: center-positive mask -> g = f + response; center-negative -> g = f - response",
                  "Response with center-4 mask: 4*9 - (2+4+6+8) = 16",
                  "Sharpened centre: 9 + 16 = 25 (then clip to 255)",
                  "Large response = strong intensity transition - detail enhanced",
                ],
              },
              {
                q: "Compare the Laplacian and the Sobel gradient as sharpening operators: derivative order, isotropy, outputs produced, and one worked computation each. When would you choose the gradient over the Laplacian?",
                marks: 14,
                outline: [
                  "Laplacian: second derivative, single isotropic mask",
                  "Gradient: first derivative, Gx + Gy pair with magnitude and direction",
                  "Laplacian responds to lines and edges; gradient emphasizes edge strength/direction",
                  "Laplacian worked: 4*9 - 20 = 16 on the bright-centre neighbourhood",
                  "Sobel worked: horizontal edge [0 0 0]/[6 6 6] -> Gy = 24",
                  "Gradient chosen when edge direction is needed (segmentation, Unit IV)",
                  "Laplacian chosen for isotropic sharpening; gradient for edge maps",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Combining spatial enhancement methods",
            body: [
              "Real enhancement problems are solved by pipelines, not single filters - the classic worked case is the nuclear whole-body bone scan: noisy, faint, and needing both sharpening and noise suppression. The six-stage recipe: (1) compute the Laplacian of the original; (2) add it (with the sign convention) to the original to sharpen; (3) compute the Sobel gradient of the original - strong at edges, smooth in flat noise; (4) smooth the gradient with a 5 x 5 mean filter so it no longer carries noise; (5) multiply the smoothed gradient with the sharpened image - the product keeps strong edges and suppresses noise; (6) sum the product with the original, and apply a power-law stretch for final dynamic range.",
              "Why the product step is the insight: multiplication is an AND gate for detail - a pixel survives as detail only if both the Laplacian branch and the smoothed-gradient branch agree it is real structure. Laplacian alone amplifies noise; the gradient alone blurs; smoothed-gradient alone is coarse; their product is edge-only, and adding it back to the original boosts edges without the noise the naive Laplacian enhancement would have injected. Every spatial filter of this unit becomes a component in the pipeline.",
              "The exam wants the six stages in order with one sentence of justification each - especially the product rationale - and a closing note that the same design pattern generalizes: enhance, extract, smooth, combine, sum back. Draw the six-step flow; the diagram plus the product-step reasoning is what separates a memorized list from an explained pipeline. Add one line of honesty: the recipe is a design pattern, not a law - any detail extractor can replace the Laplacian and any noise-robust edge map the gradient, as long as the product gates what enters the final sum.",
            ],
            keyTerms: [
              { term: "Enhancement pipeline", definition: "A sequence of complementary filters whose outputs are combined to outperform any single filter." },
              { term: "Product masking", definition: "Multiplying two detail maps so only pixels strong in both survive - an AND gate for edges." },
              { term: "Smoothing the gradient", definition: "A 5 x 5 mean over the Sobel output removes noise before the product step." },
              { term: "Laplacian enhancement", definition: "g = f + Laplacian response - sharpens but amplifies noise on its own." },
            ],
            diagram: {
              kind: "flow",
              title: "The six-stage combined enhancement",
              caption: "Sharpen, extract, smooth, multiply, sum back - the product step is the noise gate.",
              steps: [
                { label: "1. Laplacian of f", note: "detail map, noise included" },
                { label: "2. f + Laplacian", note: "sharpened image" },
                { label: "3. Sobel gradient of f", note: "edge map" },
                { label: "4. Smooth gradient (5 x 5)", note: "noise-free-ish edges" },
                { label: "5. Product (2) x (4)", note: "AND gate: real edges only" },
                { label: "6. Sum with f, gamma stretch", note: "final result" },
              ],
            },
            bullets: [
              "Stage 1-2: Laplacian then add back - sharpening, noise amplified too.",
              "Stage 3-4: Sobel gradient then 5 x 5 smoothing - coarse, clean edges.",
              "Stage 5: product keeps pixels strong in both maps - noise gated out.",
              "Stage 6: add product to the original; power-law stretch for display.",
              "Classic application: noisy nuclear bone scans.",
              "Design pattern: enhance -> extract -> smooth -> combine -> sum back.",
            ],
            callout: {
              type: "exam",
              title: "Explain the product step, not just list it",
              body: "Stage 5 is where marks are won or lost. One sentence: the product is large only where both the Laplacian and the smoothed gradient agree the pixel is edge - noise is usually strong in at most one map, so the product suppresses it. Listing six stages without that rationale reads as memorization.",
            },
            table: {
              caption: "Stage - operation - why.",
              headers: ["Stage", "Operation", "Purpose"],
              rows: [
                ["1", "Laplacian of original", "capture fine detail (and noise)"],
                ["2", "add Laplacian to original", "sharpened image"],
                ["3", "Sobel gradient of original", "edge strength map"],
                ["4", "5 x 5 mean of gradient", "smooth the edge map, cut its noise"],
                ["5", "multiply stage 2 by stage 4", "gate: keep only agreed detail"],
                ["6", "sum with original + gamma", "final enhanced result"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the six-stage combined spatial enhancement method used for the noisy bone-scan image, giving the purpose of each stage and explaining why the product step suppresses noise better than plain Laplacian enhancement.",
                marks: 14,
                outline: [
                  "Stage 1: Laplacian of f - detail map including noise",
                  "Stage 2: f + Laplacian - sharpened (sign convention stated)",
                  "Stage 3: Sobel gradient - edges strong, flat areas near zero",
                  "Stage 4: 5 x 5 mean of the gradient - removes gradient noise",
                  "Stage 5: product of stages 2 and 4 - large only where both agree",
                  "Product rationale: noise is rarely strong in both maps - AND-gate effect",
                  "Stage 6: sum with f and power-law stretch for display",
                ],
              },
              {
                q: "Why is the smoothed gradient multiplied with the sharpened image rather than added to it? Give one scenario where addition would fail.",
                marks: 7,
                outline: [
                  "Multiplication scales by agreement - a gate, not a boost",
                  "Addition would inject the gradient's residual noise everywhere",
                  "In flat noisy regions the smoothed gradient is small but nonzero",
                  "Added: that noise appears in the final image",
                  "Multiplied: sharpened image's noise times small gradient stays small",
                  "Only pixels with strong evidence in both maps pass the gate",
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
      title: "Image Enhancement in the Frequency Domain & Image Restoration",
      summary:
        "Unit III pairs two big topics: enhancement through the Fourier transform - smoothing and sharpening filters and homomorphic filtering - and restoration, the model-based recovery of degraded images through noise models, spatial and frequency-domain filtering, and the inverse, Wiener, constrained least-squares and geometric-mean family, closing with geometric transformations.",
      chapter: {
        number: "03",
        title: "The Frequency Domain & the Art of Restoration",
        intro:
          "Unit III covers the Fourier transform and frequency-domain filtering, smoothing and sharpening frequency filters, homomorphic filtering, the degradation/restoration model with noise models and degradation estimation, noise-only spatial restoration, periodic noise reduction, inverse/Wiener/constrained least-squares/geometric-mean filtering, and geometric transformations.",
        inOneBreath:
          "Filtering in frequency is three moves - transform, multiply by H(u, v), invert; low-pass smooths, high-pass sharpens, homomorphic splits illumination from reflectance; restoration models g = H f + eta and inverts it - inverse filtering needs a quiet H, Wiener weights by |H|^2/(|H|^2 + K), CLS constrains smoothness, the geometric mean blends, and geometric transformations resample the result.",
        sections: [
          {
            number: "3.1",
            title: "Introduction to the Fourier transform and the frequency domain",
            body: [
              "The Fourier transform re-expresses an image as a sum of sinusoids: the 1-D DFT of an M-sample sequence is F(u) = (1/M) * sum over x of f(x) * e^(-j 2 pi u x / M), and the inverse rebuilds f from the coefficients. Each F(u) states how much of frequency u the signal contains; low frequencies carry slowly varying content (overall appearance, smooth shading), high frequencies carry edges and fine detail. The 2-D DFT is separable - apply the 1-D transform to rows then to columns - and the DC term F(0, 0) equals the sum of all pixel values, so it dominates any raw spectrum display (hence the log transform of Unit II).",
              "Worked 1-D example: f = [1, 0, 1, 0] (an alternating sequence). F(0) = (1/4)(1 + 0 + 1 + 0) = 0.5; F(1) = (1/4)(1 + 1 * e^(-j pi)) = (1/4)(1 - 1) = 0; F(2) = 0.5 (the Nyquist term); F(3) = 0. The alternating pattern has energy only at DC and Nyquist - a clean demonstration that the DFT is measuring frequency content, not location.",
              "Frequency-domain filtering is then a three-move loop: transform the image, multiply by a real, symmetric filter H(u, v), transform back and keep the real part. Multiplication in frequency implements convolution in space - the duality that makes Unit II's masks and Unit III's filters two views of one operation. Multiplying by (−1)^(x+y) before the DFT centres the spectrum at the display's middle, the convention every filter diagram assumes.",
            ],
            keyTerms: [
              { term: "DFT", definition: "F(u) = (1/M) sum f(x) e^(-j 2 pi u x / M); the image as frequency coefficients." },
              { term: "DC term F(0,0)", definition: "Sum of all pixel values - dominates the spectrum, removed for display by log." },
              { term: "Centering", definition: "Multiplying by (-1)^(x+y) before the DFT moves the origin to the spectrum's centre." },
              { term: "Convolution duality", definition: "Convolution in space equals multiplication in frequency - the basis of all Unit III filtering." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Frequency-domain filtering procedure",
              caption: "The six canonical steps - padding, centering, transform, filter, invert, crop.",
              stages: [
                { label: "Pad to P x Q", note: "typically 2M x 2N, avoids wraparound" },
                { label: "Center", note: "multiply by (-1)^(x+y)" },
                { label: "DFT", note: "compute F(u, v)" },
                { label: "Multiply by H(u, v)", note: "real, symmetric filter" },
                { label: "Inverse DFT", note: "multiply by (-1)^(x+y), keep real part" },
                { label: "Crop to M x N", note: "remove the padding" },
              ],
            },
            bullets: [
              "DFT: F(u) = (1/M) sum f(x) e^(-j 2 pi u x / M); inverse uses e^(+j ...).",
              "Low frequencies = smooth content; high frequencies = edges and detail.",
              "Worked f = [1, 0, 1, 0]: F = [0.5, 0, 0.5, 0] - energy at DC and Nyquist only.",
              "F(0,0) = sum of all pixels - the DC dominance the log transform fixes.",
              "2-D DFT is separable: rows first, then columns.",
              "Filter loop: DFT -> multiply by H(u,v) -> inverse DFT, real part.",
            ],
            callout: {
              type: "exam",
              title: "Say 'real and symmetric' out loud",
              body: "The mark examiners watch for: H(u, v) must be real and symmetric (about the centre) so its inverse transform is real - otherwise the restored 'image' has an imaginary part and no meaning. Pair every filter definition with that property.",
            },
            codeExample: {
              language: "python",
              caption: "dft_demo.py - the worked sequence, computed",
              code: `import numpy as np

f = np.array([1, 0, 1, 0])
F = np.fft.fft(f) / 4
print(np.round(F.real, 3))   # [0.5 0.  0.5 0. ]
print(np.round(F.imag, 3))   # zeros - energy at DC and Nyquist only
# alternating content lives at the two extreme frequencies`,
            },
            examQuestions: [
              {
                q: "Explain the discrete Fourier transform and the meaning of low and high frequencies in an image. Compute the 1-D DFT of f = [1, 0, 1, 0] and interpret the result.",
                marks: 7,
                outline: [
                  "F(u) = (1/M) sum f(x) e^(-j 2 pi u x / M)",
                  "Low frequencies: slowly varying content, overall appearance",
                  "High frequencies: edges, fine detail",
                  "F(0) = (1/4)(1+0+1+0) = 0.5 (DC)",
                  "F(1) = (1/4)(1 + e^(-j pi)) = 0; F(3) = 0",
                  "F(2) = 0.5 - the Nyquist component",
                  "Alternating sequence has energy only at the extremes",
                ],
              },
              {
                q: "Describe the complete frequency-domain filtering procedure with the reasons for padding, centering and cropping. Why must H(u, v) be real and symmetric, and what fails if it is not?",
                marks: 14,
                outline: [
                  "Pad to P x Q (about 2M x 2N) to avoid spatial wraparound from periodicity",
                  "Multiply by (-1)^(x+y) to centre the spectrum for filtering",
                  "Compute F(u, v); multiply by H(u, v)",
                  "H real + symmetric -> inverse transform is real",
                  "Non-symmetric H shifts information; complex H returns an unusable imaginary part",
                  "Inverse DFT, multiply by (-1)^(x+y), take the real part",
                  "Crop the M x N interior to remove padding artefacts",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Smoothing and sharpening frequency-domain filters",
            body: [
              "Frequency smoothing removes high frequencies; the three canonical low-pass filters differ only in the sharpness of their cutoff. The ideal lowpass (ILPF) is H = 1 inside a radius D0 and 0 outside - maximum smoothing, but the sharp cutoff's inverse transform rings badly (the Gibbs phenomenon, visible as concentric ripples). The Butterworth lowpass of order n is H = 1 / (1 + [D(u,v)/D0]^(2n)) - at D = D0 it passes exactly half the power; order 2 is the usual choice, ringing absent for n = 2 and growing with n. The Gaussian lowpass is H = exp(-D^2 / (2 D0^2)) - at D = D0 it passes 0.607, never reaches zero, and never rings.",
              "Sharpening is the complement: high-pass filters are H_HP = 1 - H_LP of the same family - ideal, Butterworth, Gaussian - killing the DC term and boosting edges. The frequency-domain Laplacian is H(u, v) = -4 pi^2 D^2(u, v) (sign chosen to match the spatial mask), and high-boost filtering adds (A - 1) back to keep the image visible while edges are sharpened. Worked placement: for a cutoff at D0 = 20 pixels, the point (3, 4) from the centre has D = 5, so the ILPF passes it, and the GLPF passes exp(-25/800) = 0.969.",
              "The exam answer: all three transfer functions written out, the D0 behaviour of each (1 or 0; 1/2; 0.607), the ringing ranking (ILPF worst, BLPF mild above order 2, GLPF none), and the complement rule for sharpening. One sentence closes it - spatial Gaussian blur and frequency Gaussian low-pass are the same operation seen from two domains. Then justify D0 selection: the radius, in pixels, of the centred spectrum - a smaller radius means stronger blur - and note the worked check D((0,0),(3,4)) = 5 that places any coefficient inside or outside a given D0.",
            ],
            keyTerms: [
              { term: "ILPF", definition: "H = 1 for D <= D0 else 0; hardest cutoff, strongest ringing." },
              { term: "BLPF", definition: "H = 1/(1 + [D/D0]^(2n)); half power at D0; order 2 is ring-free." },
              { term: "GLPF", definition: "H = exp(-D^2 / 2 D0^2); 0.607 at D0; never zero, never rings." },
              { term: "High-pass by complement", definition: "H_HP = 1 - H_LP of the same family; kills DC, boosts edges." },
            ],
            diagram: {
              kind: "compare",
              title: "The three low-pass filters",
              caption: "Same job, three cutoffs - and ringing is the price of sharpness.",
              left: {
                heading: "Ideal lowpass (ILPF)",
                items: [
                  "H = 1 inside radius D0, 0 outside",
                  "Sharpest possible cutoff",
                  "Severe ringing (Gibbs ripples)",
                  "Rarely used in practice",
                ],
              },
              right: {
                heading: "Butterworth & Gaussian",
                items: [
                  "BLPF: 1/(1 + [D/D0]^(2n)) - half power at D0",
                  "Order 2: no ringing; higher orders ring more",
                  "GLPF: exp(-D^2/2D0^2) - 0.607 at D0",
                  "Never zero -> never rings",
                ],
              },
            },
            bullets: [
              "D(u, v) = distance from the centred spectrum's origin.",
              "ILPF: H = 1 for D <= D0, else 0 - maximum smoothing, severe ringing.",
              "BLPF: H = 1/(1 + [D/D0]^(2n)); passes 1/2 at D0; n = 2 standard.",
              "GLPF: H = e^(-D^2 / 2 D0^2); passes 0.607 at D0; never rings.",
              "Sharpening: H_HP = 1 - H_LP; ideal/Butterworth/Gaussian high-pass families.",
              "Frequency Laplacian: H = -4 pi^2 D^2; high-boost adds (A - 1).",
            ],
            callout: {
              type: "warning",
              title: "Ringing belongs to the ILPF",
              body: "Students blame 'frequency filtering' for ripples - the fault is the ideal cutoff's discontinuous H, whose inverse transform is a sinc-like ring. Any question asking 'which lowpass filter produces ringing?' wants the ILPF (and BLPF for large n), with the GLPF as the ring-free contrast.",
            },
            table: {
              caption: "Transfer functions at D = D0 and ringing.",
              headers: ["Filter", "H(u,v)", "Value at D0", "Ringing"],
              rows: [
                ["ILPF", "1 if D <= D0 else 0", "1 -> 0 (discontinuity)", "severe"],
                ["BLPF (n = 2)", "1/(1 + [D/D0]^4)", "0.5", "none (mild for n > 2)"],
                ["GLPF", "exp(-D^2 / 2 D0^2)", "0.607", "none"],
                ["HPF (any)", "1 - H_LP", "0 (DC killed)", "inherited from LP pair"],
              ],
            },
            examQuestions: [
              {
                q: "Write the transfer functions of the ideal, Butterworth and Gaussian lowpass filters. State each filter's value at D = D0, rank them by ringing, and explain why the GLPF never rings.",
                marks: 7,
                outline: [
                  "ILPF: H = 1 for D <= D0 else 0",
                  "BLPF: H = 1/(1 + [D/D0]^(2n)); GLPF: H = e^(-D^2/2D0^2)",
                  "At D0: ILPF jumps 1 -> 0; BLPF passes 0.5; GLPF passes 0.607",
                  "Ringing: ILPF severe, BLPF mild (n > 2), GLPF none",
                  "GLPF never zero and infinitely smooth -> no sinc-like tail",
                  "D0 smaller -> stronger blur in all three",
                ],
              },
              {
                q: "Derive the high-pass family from the low-pass family and explain the frequency-domain Laplacian and high-boost filtering. Compute the GLPF response at D = 5 for D0 = 20.",
                marks: 14,
                outline: [
                  "Complement rule: H_HP(u,v) = 1 - H_LP(u,v)",
                  "IHPF/BHPF/GHPF inherit their LP counterparts' cutoff character",
                  "All kill the DC term - average intensity removed; edges survive",
                  "Frequency Laplacian: H = -4 pi^2 D^2 (sign per mask convention)",
                  "High-boost: add (A - 1) to keep the base image visible",
                  "GLPF at D = 5, D0 = 20: e^(-25/800) = e^(-0.03125) = 0.969",
                  "Edges live at high D, so they pass the high-pass mostly unattenuated",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Homomorphic filtering",
            body: [
              "Homomorphic filtering fixes images with wide dynamic range and poor contrast by attacking the multiplicative image model: an image is the product g(x, y) = i(x, y) * r(x, y) of illumination (slow, low-frequency, the lighting) and reflectance (sharp, high-frequency, the surfaces). A logarithm turns the product into a sum: ln g = ln i + ln r - and sums can be filtered additively. The pipeline: take ln (or log base anything), FFT, apply the filter H(u, v), inverse FFT, exponentiate back.",
              "The filter is designed from the split: illumination is low-frequency, so compress it with a gain gammaL < 1; reflectance detail is high-frequency, so boost it with gammaH > 1. The transfer function glides between the two - typically gammaL = 0.5 and gammaH = 2.0 to 2.5 - producing simultaneously dynamic-range compression (the lighting flattened) and contrast enhancement (the detail boosted). Worked numbers: with gammaL = 0.5 and gammaH = 2.5, the slow component is halved while the sharp component is 2.5x - a five-to-one ratio of treatment across the spectrum's span.",
              "For the exam: state the multiplicative model, justify the log (product -> sum), draw the five-stage pipeline, and explain why gammaL < 1 < gammaH - illumination at low frequencies, reflectance at high frequencies. The payoff sentence earns the last mark: one filter, two corrections - the definition of homomorphic processing. Bring the dynamic range home with numbers: a scene whose illumination spans 0-255 while reflectance varies only 0.1-0.9 multiplies into an image whose useful detail hides under the bright end; compressing the slow component by half while doubling the detail restores visibility in shadows and highlights simultaneously.",
            ],
            keyTerms: [
              { term: "Illumination-reflectance model", definition: "g = i * r; lighting multiplies surface reflectance to form the image." },
              { term: "Homomorphic filter", definition: "Log -> frequency filter with gammaL < 1 < gammaH -> exp; compresses range, boosts contrast." },
              { term: "gammaL", definition: "Low-frequency gain < 1 - compresses the illumination component." },
              { term: "gammaH", definition: "High-frequency gain > 1 - boosts the reflectance detail." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The homomorphic pipeline",
              caption: "Log splits the product into a sum; the filter treats the two halves differently; exp puts them back.",
              stages: [
                { label: "ln g", note: "product becomes sum: ln i + ln r" },
                { label: "DFT", note: "into the frequency domain" },
                { label: "H(u, v)", note: "gammaL < 1 at low freq, gammaH > 1 at high" },
                { label: "Inverse DFT", note: "filtered log image" },
                { label: "exp", note: "back to the intensity domain" },
              ],
            },
            bullets: [
              "Model: g(x, y) = i(x, y) * r(x, y) - illumination times reflectance.",
              "ln g = ln i + ln r - the log converts multiplication into addition.",
              "Illumination varies slowly -> low frequencies; reflectance edges -> high frequencies.",
              "H glides from gammaL (about 0.5) to gammaH (about 2.0-2.5).",
              "Worked: gammaL = 0.5, gammaH = 2.5 - 5:1 treatment ratio.",
              "One filter achieves dynamic-range compression AND contrast enhancement.",
            ],
            callout: {
              type: "tip",
              title: "Why log, in one line",
              body: "The exam question hidden in homomorphic filtering is 'why take the logarithm?' - because linear filters act on sums, and the image model is a product. ln turns the product into a sum the filter can split; exp undoes it. That sentence plus the gamma gains is the whole concept.",
            },
            table: {
              caption: "Homomorphic components.",
              headers: ["Component", "Frequency home", "Treatment"],
              rows: [
                ["Illumination i", "low frequencies (slow)", "gammaL < 1 - compress"],
                ["Reflectance r", "high frequencies (edges)", "gammaH > 1 - boost"],
                ["Log transform", "before filtering", "product -> sum"],
                ["Exp transform", "after filtering", "sum -> product, back to intensities"],
              ],
            },
            examQuestions: [
              {
                q: "Explain homomorphic filtering: the illumination-reflectance model, the role of the logarithm, the shape of the filter transfer function, and the simultaneous effects achieved. Draw the pipeline.",
                marks: 7,
                outline: [
                  "Model: g = i * r (illumination times reflectance)",
                  "ln g = ln i + ln r - product becomes an additive sum",
                  "Illumination is low-frequency; reflectance detail is high-frequency",
                  "H(u,v) moves from gammaL < 1 (low freq) to gammaH > 1 (high freq)",
                  "Typical values: gammaL = 0.5, gammaH = 2.0-2.5",
                  "Pipeline: ln -> DFT -> H -> inverse DFT -> exp",
                  "Result: dynamic-range compression plus contrast enhancement",
                ],
              },
              {
                q: "An outdoor image has blown-out sky and crushed shadows. Explain how homomorphic filtering addresses both problems at once, and state what happens if gammaL = gammaH = 1.",
                marks: 14,
                outline: [
                  "Blown highlights: illumination-dominated, low-frequency energy too strong",
                  "Crushed shadows: detail variation too small relative to the range",
                  "gammaL < 1 compresses the slow illumination - range narrows",
                  "gammaH > 1 boosts high-frequency reflectance - contrast rises",
                  "Both corrections from one H(u,v) - the defining property",
                  "gammaL = gammaH = 1 makes H = 1: identity, output = input",
                  "The filter only works through the log's product-to-sum split",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "The degradation/restoration model, noise models and estimation of the degradation function",
            body: [
              "Restoration is model-based: the observed image g is explained as g = H f + eta, where f is the true image, H the degradation system (blur, motion, defocus - possibly spatially varying), and eta additive noise. Restoration runs the model backward to estimate f-hat; enhancement (Unit II) was subjective, restoration is objective - it names the corruption and inverts it. Linear, position-invariant degradations make H a convolution, so in the frequency domain G(u, v) = H(u, v) F(u, v) + N(u, v) - the form every later filter assumes.",
              "The noise catalogue, one line each: Gaussian (electronics, sensors - mean mu, variance sigma^2); Rayleigh (range imaging, skewed); gamma (laser imaging, scaled chi-like); exponential (laser intensity, heavily skewed); uniform (least descriptive, equal likelihood over an interval); salt-and-pepper impulse (buried transmissions, saturated sensors - black and white spikes). Worked characterization: Gaussian with sigma^2 = 400 has sigma = 20, so about 95% of noise values lie within plus or minus 40 of the mean - the number that later calibrates Wiener's K.",
              "Estimating H when it is unknown: from fundamentals (model the physics - atmospheric turbulence, optics), by observation (study a familiar test image's degraded version and postulate H), or geometrically (image a point/line impulse - the degraded impulse is the impulse response, and its Fourier transform is H itself). For the exam: draw the model block diagram, tabulate the six noise models with a use case each, and name the three estimation routes.",
            ],
            keyTerms: [
              { term: "Degradation model", definition: "g = H f + eta; the restoration problem is inverting it for f-hat." },
              { term: "Position-invariant degradation", definition: "H acts identically at every pixel - a convolution, hence G = H F + N in frequency." },
              { term: "Salt-and-pepper noise", definition: "Impulse noise - random white and black spikes from sensors or transmission errors." },
              { term: "Impulse response", definition: "The degraded image of a point impulse; its Fourier transform is the degradation function H." },
            ],
            diagram: {
              kind: "flow",
              title: "The degradation / restoration model",
              caption: "Forward: degrade. Backward: restore. The model is the contract between the two.",
              steps: [
                { label: "True image f", note: "what we want back" },
                { label: "Degradation H", note: "blur / motion / defocus" },
                { label: "Add noise eta", note: "sensor and transmission noise" },
                { label: "Observed g", note: "g = H f + eta" },
                { label: "Restoration filter", note: "estimate f-hat from g and the model" },
              ],
            },
            bullets: [
              "Restoration is objective: name the degradation, then invert the model.",
              "g = H f + eta; position-invariant H becomes G = H F + N in frequency.",
              "Gaussian: electronics; Rayleigh/gamma/exponential: range and laser imaging.",
              "Uniform: least descriptive; impulse (salt-and-pepper): sensor saturation, bit errors.",
              "Worked: sigma^2 = 400 -> sigma = 20; 95% of noise within ±40.",
              "Estimate H by fundamentals, observation, or imaging a point impulse.",
            ],
            callout: {
              type: "tip",
              title: "Estimating H with a delta",
              body: "The cleanest exam line: image a single bright dot on black - the dot is a delta function, its degraded image is the impulse response h, and H is the Fourier transform of that image. No modelling of physics required; the degradation measures itself.",
            },
            table: {
              caption: "Noise models and where they occur.",
              headers: ["Model", "Character", "Typical source"],
              rows: [
                ["Gaussian", "symmetric, mean mu, variance sigma^2", "electronics, sensor noise"],
                ["Rayleigh", "skewed right", "range imaging"],
                ["Gamma / exponential", "skewed, laser-related", "laser imaging"],
                ["Uniform", "flat over [a, b]", "least descriptive model"],
                ["Salt-and-pepper", "black/white spikes", "sensor saturation, transmission errors"],
              ],
            },
            examQuestions: [
              {
                q: "Draw and explain the model of the image degradation/restoration process. List the principal noise models with their sources, and explain how the degradation function is estimated when it is unknown.",
                marks: 14,
                outline: [
                  "Model: g = H f + eta; restoration estimates f-hat",
                  "Position-invariant H -> convolution -> G = H F + N in frequency",
                  "Gaussian: electronics; sigma^2 = 400 gives sigma = 20",
                  "Rayleigh: range imaging; gamma/exponential: laser imaging",
                  "Uniform: least descriptive; impulse: salt-and-pepper spikes",
                  "Estimate H from fundamentals (physics), observation (test images),",
                  "or geometrically - image a delta and FT the impulse response",
                ],
              },
              {
                q: "Distinguish restoration from enhancement, and explain why the noise model matters before choosing a spatial restoration filter (Unit II's mean vs median).",
                marks: 7,
                outline: [
                  "Enhancement: subjective, whatever looks better",
                  "Restoration: objective inversion of a stated degradation model",
                  "Noise model dictates the filter: Gaussian -> mean family",
                  "Impulse noise -> median/order-statistic family",
                  "Wrong model: mean smears impulses, median under-smooths Gaussian",
                  "The degradation model g = H f + eta makes the choice principled",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Restoration in the presence of noise only - spatial filtering",
            body: [
              "When degradation is noise alone (H = identity), spatial filtering is the whole restoration. Mean-family filters suit Gaussian-like noise: arithmetic mean, geometric mean (product of values^(1/mn)), harmonic mean (mn / sum of 1/z, strong against salt noise), and the contraharmonic mean (sum z^(Q+1) / sum z^Q) whose order Q selects - Q > 0 eliminates pepper, Q < 0 eliminates salt, Q = 0 is the arithmetic mean.",
              "Order-statistic filters sort the window: the median (the impulse killer - worked window [1, 2, 3, 4, 200, 5, 6, 7, 8] has median 5 against a mean of 26.2), max and min (bright/dark morphology), the midpoint (max + min)/2 for uniform noise, and the alpha-trimmed mean - delete the d/2 extremes at each end and average the rest: d = mn - 1 gives the median, d = 0 the mean, one filter spanning both behaviours. Adaptive filters add local statistics: the adaptive local filter corrects by (sigma_n^2 / sigma_L^2) when the local variance exceeds the noise variance, and the adaptive median tests Zmin < Zmed < Zmax, growing the window instead of always replacing the centre.",
              "For the exam: organize by noise model - Gaussian noise -> mean/geometric/midpoint; salt-and-pepper -> median, contraharmonic with the right sign of Q, adaptive median - compute one median on a worked window, and state what the alpha-trimmed mean interpolates between. Close with the failure modes: means smear impulses into gray blobs, medians under-smooth Gaussian noise, and a contraharmonic with the wrong sign of Q doubles the very spikes it was meant to remove - matching model to filter is the entire restoration decision.",
            ],
            keyTerms: [
              { term: "Contraharmonic mean", definition: "sum z^(Q+1) / sum z^Q; Q > 0 removes pepper, Q < 0 removes salt." },
              { term: "Alpha-trimmed mean", definition: "Discard d/2 extremes at both ends, average the rest; d interpolates median -> mean." },
              { term: "Midpoint filter", definition: "(max + min)/2 of the window; suits uniform and Gaussian noise." },
              { term: "Adaptive median", definition: "Tests Zmin < Zmed < Zmax before replacing; grows the window when the test fails." },
            ],
            diagram: {
              kind: "fork",
              title: "Which filter for which noise?",
              caption: "Restoration without degradation is a matching game - name the noise, then the filter.",
              start: "Noise alone is present (H = identity)",
              branches: [
                { label: "Gaussian-like noise", outcome: "arithmetic/geometric mean, midpoint filter", good: true },
                { label: "Salt-and-pepper", outcome: "median, adaptive median, contraharmonic (sign of Q)", good: true },
                { label: "Mixed impulses + Gaussian", outcome: "alpha-trimmed mean - trims both tails", good: true },
                { label: "Uniform noise", outcome: "midpoint (max + min)/2", good: true },
              ],
            },
            bullets: [
              "Mean family: arithmetic, geometric, harmonic (kills salt), contraharmonic (Q-signed).",
              "Contraharmonic: Q > 0 removes pepper; Q < 0 removes salt; Q = 0 -> arithmetic mean.",
              "Median: window [1,2,3,4,200,5,6,7,8] -> median 5, mean 26.2.",
              "Alpha-trimmed mean: delete d/2 extremes each side, average the rest.",
              "Adaptive local filter scales correction by sigma_n^2 / sigma_L^2.",
              "Adaptive median: stage A tests Zmin < Zmed < Zmax; grow window on failure.",
            ],
            callout: {
              type: "exam",
              title: "Contraharmonic sign trap",
              body: "The classic one-mark trap: which sign of Q removes which spike? Q > 0 boosts large values, so pepper (the black 0s) is suppressed; Q < 0 boosts small values, suppressing salt. Writing the formula without the sign interpretation forfeits the point the examiner is actually testing.",
            },
            table: {
              caption: "Noise-only restoration filters.",
              headers: ["Filter", "Rule", "Noise it serves"],
              rows: [
                ["Arithmetic mean", "average of window", "Gaussian"],
                ["Geometric mean", "(product z)^(1/mn)", "Gaussian, gentler than mean"],
                ["Harmonic mean", "mn / sum(1/z)", "Gaussian + salt (not pepper)"],
                ["Contraharmonic (Q)", "sum z^(Q+1) / sum z^Q", "salt or pepper by sign of Q"],
                ["Median", "middle of sorted window", "salt-and-pepper"],
                ["Midpoint", "(max + min)/2", "uniform, Gaussian"],
                ["Alpha-trimmed", "trimmed average, parameter d", "mixed impulse + Gaussian"],
              ],
            },
            examQuestions: [
              {
                q: "Explain restoration in the presence of noise only using mean filters and order-statistic filters. Compute the median of the window [1, 2, 3, 4, 200, 5, 6, 7, 8] and state which filter suits salt-and-pepper noise and why.",
                marks: 7,
                outline: [
                  "Noise-only degradation: H = identity, spatial filtering is the tool",
                  "Mean family: arithmetic, geometric, harmonic, contraharmonic",
                  "Order-statistics: median, max, min, midpoint, alpha-trimmed",
                  "Sorted window: [1,2,3,4,5,6,7,8,200] -> median 5",
                  "Mean = 26.2 - dragged by the impulse",
                  "Salt-and-pepper -> median/adaptive median; impulses land at sort extremes",
                ],
              },
              {
                q: "Explain the contraharmonic mean filter and the alpha-trimmed mean filter. Show how the contraharmonic order Q selects between salt and pepper removal, and what d = 0 and d = mn - 1 make the alpha-trimmed mean.",
                marks: 14,
                outline: [
                  "Contraharmonic: R = sum z^(Q+1) / sum z^Q over the window",
                  "Q > 0: pepper removed (black spikes suppressed)",
                  "Q < 0: salt removed (white spikes suppressed)",
                  "Q = 0 reduces to the arithmetic mean",
                  "Alpha-trimmed: discard d/2 extremes at each end, average the rest",
                  "d = mn - 1 -> only the middle value remains = the median",
                  "d = 0 -> nothing trimmed = the arithmetic mean",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Periodic noise reduction by frequency-domain filtering",
            body: [
              "Periodic noise - repeating interference such as electrical hum or sinusoidal contamination - announces itself in the frequency domain as symmetric spike pairs at plus/minus (u0, v0) from the centred spectrum. That is why periodic noise is a frequency-domain problem: in space it is everywhere and hard to mask; in frequency it is two points, and points are easy to remove. The remedy family: bandreject filters suppress an annulus of frequencies around the noise radius (ideal, Butterworth, Gaussian versions, inheriting their lowpass cousins' ringing character); bandpass filters are their complement (1 - bandreject), used to isolate the noise for study; notch filters are the surgical tool - tiny regions (disks or rectangles) removed at exactly the spike locations.",
              "The notch discipline is the exam's subtle point: because the noise spikes come in conjugate-symmetric pairs, the notch must be built symmetrically about the spectrum centre - a single asymmetric notch leaves a complex-valued inverse and a shifted, distorted restoration. Worked placement: interference at (u0, v0) = (30, 20) spikes at (30, 20) and its centre-symmetric twin (-30, -20); two small disks centred there (plus, if desired, secondary notches at harmonics (60, 40)...) clean the spectrum while the rest of the image's frequencies pass untouched - far less collateral damage than a bandreject annulus.",
              "For the exam: state why periodic noise is localized in frequency, draw the spike-pair picture, define bandreject/bandpass/notch, and enforce the symmetry rule - then contrast notch (surgical, minimal damage) with bandreject (annular, more collateral). Sketch the centred spectrum with the two spikes and the notches drawn as small disks - the picture converts a definition list into an explanation. Add the harmonics note: real interference rarely stops at the fundamental, so notch every spike you can see, keeping each pair centre-symmetric.",
            ],
            keyTerms: [
              { term: "Periodic noise", definition: "Repeating interference (e.g. sinusoidal) appearing as conjugate spike pairs in the spectrum." },
              { term: "Bandreject filter", definition: "Suppresses an annulus of frequencies around the noise radius; ideal/Butterworth/Gaussian forms." },
              { term: "Bandpass filter", definition: "1 - bandreject; passes the noise band alone - used to isolate and study interference." },
              { term: "Notch filter", definition: "Tiny stop regions at exact spike locations; must be symmetric about the spectrum centre." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Removing periodic interference",
              caption: "The noise is two points in frequency - find them, notch them, rebuild.",
              stages: [
                { label: "FFT of g", note: "examine the centred spectrum" },
                { label: "Locate spike pairs", note: "at ±(u0, v0), maybe harmonics" },
                { label: "Build symmetric notch", note: "small disks at every spike" },
                { label: "Multiply H", note: "zeros only at the notches" },
                { label: "Inverse FFT", note: "clean image, minimal collateral damage" },
              ],
            },
            bullets: [
              "Periodic noise -> conjugate spike pairs at ±(u0, v0) in the centred spectrum.",
              "Bandreject suppresses an annulus at the noise radius; three smoothness grades.",
              "Bandpass = 1 - bandreject: isolates the noise for analysis.",
              "Notch: surgical stop regions exactly at the spikes - least collateral damage.",
              "Worked: spikes at (30, 20) and (-30, -20); notch both, plus harmonics if present.",
              "Notches must be centre-symmetric - or the inverse DFT is complex and the image distorts.",
            ],
            callout: {
              type: "warning",
              title: "One notch is half a fix",
              body: "Removing only one spike of a conjugate pair leaves a complex-valued spectrum: the restored image shifts and distorts instead of cleaning up. Always draw both notches - at (u0, v0) AND at (-u0, -v0) - before claiming the interference is removed.",
            },
            table: {
              caption: "Frequency tools for periodic noise.",
              headers: ["Filter", "Action", "Collateral damage"],
              rows: [
                ["Ideal bandreject", "annulus to zero, hard edges", "ringing"],
                ["Butterworth bandreject", "smooth annulus, order n", "mild for n = 2"],
                ["Gaussian bandreject", "smooth annulus, exponential", "none"],
                ["Bandpass", "1 - bandreject", "isolation/study only"],
                ["Notch", "small disks at spike locations", "minimal - surgical"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how periodic noise appears in the Fourier spectrum and how bandreject, bandpass and notch filters remove it. State the symmetry requirement for notch filters and what fails without it.",
                marks: 7,
                outline: [
                  "Periodic interference -> conjugate spike pairs at ±(u0, v0)",
                  "Spectrum-localized: two points, not a spatial mask",
                  "Bandreject: annulus suppressed (ideal/Butterworth/Gaussian forms)",
                  "Bandpass = 1 - bandreject - isolates noise for study",
                  "Notch: small stop regions exactly at the spikes",
                  "Symmetry about the centre is mandatory",
                  "Asymmetric notch -> complex inverse, shifted/distorted restoration",
                ],
              },
              {
                q: "An image suffers sinusoidal interference at frequency (30, 20) with a visible harmonic at (60, 40). Describe the complete notch-filtering procedure and justify notch over a wide bandreject annulus.",
                marks: 14,
                outline: [
                  "FFT the image and inspect the centred magnitude spectrum",
                  "Spikes at (30, 20), (-30, -20), (60, 40), (-60, -40)",
                  "Place small disks/regions at all four (six with harmonics) locations",
                  "H = 0 inside notches, 1 elsewhere - real and centre-symmetric",
                  "Multiply in frequency, inverse DFT, keep the real part",
                  "Notch: only two-to-six small regions lost vs a whole annulus",
                  "Bandreject would remove legitimate image content at that radius too",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Inverse filtering, Wiener filtering, constrained least squares and the geometric mean filter",
            body: [
              "With the degradation model G = H F + N, restoration means estimating F from G. Inverse filtering is the naive division: F-hat = G / H(u, v). It is exact when noise is zero and H is never small; in practice it explodes wherever |H| approaches zero - the noise divided by a tiny number floods the estimate. That failure is the reason every other filter in this section exists.",
              "Wiener filtering (minimum mean square error) adds noise awareness: F-hat = (1/H) * [|H|^2 / (|H|^2 + K)], where K is the noise-to-signal power ratio. The behaviour is the exam's favourite reading: K = 0 recovers exact inverse filtering; K very large drives the estimate toward a cautious, over-smoothed result; and the weighting factor automatically suppresses the division-by-tiny-H disaster. Worked numbers: with |H| = 0.9 and K = 0.01 the factor is 0.81/0.82 = 0.988 (nearly inverse); with |H| = 0.1 and K = 0.01 it is 0.01/0.02 = 0.5 - the estimate is halved exactly where noise amplification would occur.",
              "Constrained least squares (CLS) avoids statistical assumptions entirely: minimize the smoothness norm ||Q f-hat||^2, with Q usually the Laplacian operator, subject to the constraint ||g - H f-hat||^2 = ||eta||^2 - the total restored noise energy must equal the measured one. A Lagrange-multiplier search on gamma replaces Wiener's K. The geometric mean filter blends two restorations: F-hat = [G1]^alpha [G2]^(1 - alpha); with alpha = 1/2, G1 inverse and G2 Wiener, it inherits the sharpness of one and the noise discipline of the other.",
              "The exam answer: write all four transfer-function expressions, walk the Wiener K-limit reading with the two worked numbers above, state CLS's constraint (total noise energy equal to the measured ||eta||^2) and its Q (Laplacian smoothness), and close with the geometric mean's blend. Rank the family by assumptions too - inverse needs a silent H, Wiener needs K, CLS needs only the noise energy, and the geometric mean needs two candidate filters - because 'compare the restoration filters' is the standard 14-mark form of this question.",
            ],
            keyTerms: [
              { term: "Inverse filter", definition: "F-hat = G/H; exact without noise, explodes where |H| is small." },
              { term: "Wiener filter", definition: "F-hat = (1/H)[|H|^2/(|H|^2 + K)]; K is the noise-to-signal ratio." },
              { term: "Constrained least squares", definition: "Minimize ||Q f-hat||^2 subject to ||g - H f-hat||^2 = ||eta||^2; Q = Laplacian." },
              { term: "Geometric mean filter", definition: "F-hat = [G1]^alpha [G2]^(1-alpha); blends two restorations, alpha = 1/2 typical." },
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a restoration filter",
              caption: "What you know about H and the noise decides the filter.",
              axes: { x: "Noise (negligible -> heavy)", y: "Degradation knowledge (exact H -> statistics only)" },
              quadrants: [
                { label: "Inverse filtering", note: "exact H, negligible noise" },
                { label: "Constrained least squares", note: "exact H, noise known only by mean/energy" },
                { label: "Estimate H first", note: "H unknown, noise light - observation/geometric estimation" },
                { label: "Wiener / geometric mean", note: "H and noise statistics known, noise heavy" },
              ],
            },
            bullets: [
              "Inverse: F-hat = G/H - perfect model, fragile divisor.",
              "Wiener: F-hat = (1/H)[|H|^2/(|H|^2 + K)] - K = noise/signal power ratio.",
              "Wiener limits: K = 0 -> inverse filter; K -> infinity -> heavy smoothing.",
              "Worked: |H| = 0.9, K = 0.01 -> factor 0.988; |H| = 0.1, K = 0.01 -> factor 0.5.",
              "CLS: minimize ||Q f-hat||^2 with Q the Laplacian, subject to matching ||eta||^2.",
              "Geometric mean: [G1]^alpha [G2]^(1-alpha); alpha = 1/2 blends inverse and Wiener.",
            ],
            callout: {
              type: "exam",
              title: "Walk the K limits, then the numbers",
              body: "The Wiener question is always answered in three lines: write the formula, state K = 0 gives inverse filtering and large K gives strong smoothing, then plug two (|H|, K) pairs and read the factor. The 0.988 vs 0.5 contrast - same noise, different H - is what proves you understand where the filter protects.",
            },
            table: {
              caption: "The restoration filter family.",
              headers: ["Filter", "Expression", "Requires", "Failure mode"],
              rows: [
                ["Inverse", "G / H", "exact H, negligible noise", "blows up for small |H|"],
                ["Wiener", "(1/H)[|H|^2/(|H|^2 + K)]", "H, noise-to-signal ratio K", "needs K; over-smooths if K guessed high"],
                ["Constrained LS", "min ||Q f-hat||^2 s.t. ||g - H f-hat||^2 = ||eta||^2", "H, noise energy, Q (Laplacian)", "multiplier search cost"],
                ["Geometric mean", "[G1]^alpha [G2]^(1-alpha)", "two candidate restorations", "inherits both errors"],
              ],
            },
            examQuestions: [
              {
                q: "Derive inverse filtering from the degradation model and explain its failure. Write the Wiener filter and analyse its behaviour for K = 0 and large K, computing the weighting factor for |H| = 0.9 and |H| = 0.1 with K = 0.01.",
                marks: 14,
                outline: [
                  "Model G = H F + N; inverse: F-hat = G/H",
                  "Failure: N(u,v)/H(u,v) explodes as |H| -> 0",
                  "Wiener: F-hat = (1/H)[|H|^2/(|H|^2 + K)]",
                  "K = 0: factor = 1 -> exact inverse filtering",
                  "K large: factor small -> strong smoothing, cautious estimate",
                  "|H| = 0.9, K = 0.01: 0.81/0.82 = 0.988",
                  "|H| = 0.1, K = 0.01: 0.01/0.02 = 0.5 - protection exactly where needed",
                ],
              },
              {
                q: "Explain constrained least-squares restoration: the objective, the constraint, the choice of Q, and how it differs from Wiener filtering. Also describe the geometric mean filter with alpha = 1/2.",
                marks: 7,
                outline: [
                  "Objective: minimize smoothness ||Q f-hat||^2",
                  "Constraint: ||g - H f-hat||^2 = ||eta||^2 (noise energy must match)",
                  "Q usually the Laplacian operator - smoothness as the prior",
                  "No statistical assumptions about image/noise spectra",
                  "Lagrange multiplier (gamma) balances the two terms",
                  "Wiener needs K; CLS needs only the measured noise energy",
                  "Geometric mean: F-hat = [G1]^alpha [G2]^(1-alpha); alpha = 1/2 blends inverse and Wiener",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Geometric transformations",
            body: [
              "Geometric transformations modify spatial arrangement rather than intensity - the rubber-sheet analogy: the image is printed on a sheet that is stretched, rotated, or shifted, while pixel values ride along. The affine transform is the workhorse: x' = a0 x + a1 y + a2, y' = b0 x + b1 y + b2, six parameters covering scaling (a0, b1), translation (a2, b2), rotation (the coupled pair) and shear - all expressible as a 3 x 3 matrix acting on homogeneous coordinates. Worked: rotation by 90 degrees maps the point (2, 1) to (-1, 2) via [0 -1; 1 0]; translation by (tx, ty) is simply x' = x + tx.",
              "The subtle half is resampling: forward mapping (computing where each input pixel lands) can leave holes and overlaps in the output grid, so implementations use inverse mapping - for each output pixel, compute its source location in the input - followed by interpolation, because source locations rarely land on grid points. Nearest-neighbour interpolation picks the closest input pixel (fast, blocky); bilinear interpolation averages the four surrounding pixels weighted by distance - worked: source (1.5, 2.5) between four pixels valued 10, 20, 30, 40 gives v = 0.25(10 + 20 + 30 + 40) = 25; bicubic uses a 4 x 4 neighbourhood for smoother results.",
              "For the exam: define the rubber-sheet idea, write the affine system and name its six parameters, justify inverse mapping over forward mapping (holes), and compute the bilinear example - those four items are the complete answer, and the rotation-plus-interpolation pairing is the examiner's favourite compound. Practise the rotation matrix once - 90 degrees on (2, 1) gives (-1, 2) - and rehearse the bilinear formula as four distance weights summing to one, because those two micro-computations are exactly what the numerical part of this question asks for.",
            ],
            keyTerms: [
              { term: "Rubber-sheet transformation", definition: "Spatial distortion of the image plane with pixel values carried along." },
              { term: "Affine transform", definition: "x' = a0 x + a1 y + a2, y' = b0 x + b1 y + b2 - scaling, translation, rotation, shear." },
              { term: "Inverse mapping", definition: "For each output pixel, compute its input source location - avoids the holes of forward mapping." },
              { term: "Bilinear interpolation", definition: "Distance-weighted average of the four surrounding input pixels." },
            ],
            diagram: {
              kind: "flow",
              title: "One geometric transformation",
              caption: "Define the spatial map, invert it, then interpolate the values.",
              steps: [
                { label: "Specify transform", note: "affine parameters (scale, rotate, translate, shear)" },
                { label: "Invert it", note: "output pixel -> source location in input" },
                { label: "Locate source", note: "usually non-integer coordinates" },
                { label: "Interpolate", note: "nearest / bilinear / bicubic" },
                { label: "Write output pixel", note: "repeat for the whole grid" },
              ],
            },
            bullets: [
              "Affine: six parameters - scaling (a0, b1), translation (a2, b2), rotation, shear.",
              "Worked rotation: 90 degrees maps (2, 1) -> (-1, 2) via [0 -1; 1 0].",
              "Forward mapping leaves holes; inverse mapping plus interpolation is the standard.",
              "Nearest neighbour: fast, blocky. Bilinear: 4-pixel weighted average.",
              "Worked bilinear: source (1.5, 2.5) over values 10/20/30/40 -> v = 25.",
              "Bicubic: 4 x 4 neighbourhood, smoother - costlier.",
            ],
            callout: {
              type: "tip",
              title: "Holes are the why of inverse mapping",
              body: "The non-obvious mark: forward mapping can map two input pixels to one output cell and leave other cells empty - holes and overlaps. Inverse mapping visits every output pixel exactly once, which is why real implementations (and every exam answer) invert the transform and interpolate.",
            },
            table: {
              caption: "Interpolation choices.",
              headers: ["Method", "Neighbourhood", "Character"],
              rows: [
                ["Nearest neighbour", "1 pixel", "fastest; blocky edges"],
                ["Bilinear", "2 x 2", "smooth; slight blur"],
                ["Bicubic", "4 x 4", "smoothest; costliest"],
              ],
            },
            examQuestions: [
              {
                q: "Explain geometric transformations with the rubber-sheet analogy. Write the affine transform equations, name the transformations its six parameters produce, and compute the rotation of the point (2, 1) by 90 degrees.",
                marks: 7,
                outline: [
                  "Rubber-sheet: the image plane is stretched/rotated/shifted; values ride along",
                  "Affine: x' = a0 x + a1 y + a2; y' = b0 x + b1 y + b2",
                  "Scaling: a0, b1; translation: a2, b2",
                  "Rotation: coupled a0/a1, b0/b1 terms; shear: asymmetric cross terms",
                  "Rotation by 90 degrees: [0 -1; 1 0] on (2, 1)",
                  "x' = -1, y' = 2",
                ],
              },
              {
                q: "Why do geometric transformations use inverse mapping with interpolation rather than forward mapping? Compare nearest-neighbour and bilinear interpolation with the worked source point (1.5, 2.5) over the values 10, 20, 30, 40.",
                marks: 14,
                outline: [
                  "Forward mapping: output cells may receive 0, 1 or many inputs",
                  "Holes and overlaps result - the output grid is incompletely defined",
                  "Inverse mapping: every output pixel asks for its source location",
                  "Source coordinates are usually non-integer -> interpolation needed",
                  "Nearest: pick the closest pixel - fast, blocky",
                  "Bilinear: v = sum of 4 neighbours weighted by distance",
                  "Worked: (1.5, 2.5) -> weights 0.25 each -> v = 0.25(10+20+30+40) = 25",
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
      title: "Image Compression & Image Segmentation",
      summary:
        "Unit IV carries two syllabus topics together: compression - the three redundancies, the compression model, information theory, error-free and lossy coding with standards - and segmentation - discontinuity detection, edge linking, thresholding, and region-oriented and motion-based methods.",
      chapter: {
        number: "04",
        title: "Compress and Carve",
        intro:
          "Unit IV covers coding, interpixel and psychovisual redundancy, image compression models, elements of information theory, error-free compression, lossy compression and standards, then detection of discontinuities, edge linking and boundary detection, thresholding, region-oriented segmentation, and motion-based segmentation.",
        inOneBreath:
          "Compression removes coding, interpixel and psychovisual redundancy - entropy sets the lossless floor, Huffman and LZW approach it, the JPEG pipeline DCTs, quantizes and entropy-codes; segmentation finds objects by discontinuities (gradient/Laplacian), links edges (local, Hough), thresholds (global iteration, Otsu), grows regions, and follows motion through frame differences and optical flow.",
        sections: [
          {
            number: "4.1",
            title: "Coding, interpixel and psychovisual redundancy",
            body: [
              "Compression exists because images carry three removable redundancies. Coding redundancy: the gray-level alphabet is coded with the same number of bits for every symbol even though its histogram is non-uniform - variable-length coding (Huffman, arithmetic) removes this by spending few bits on frequent levels. Interpixel redundancy: neighbouring pixels are highly correlated, so their values are predictable from neighbours - predictive coding and transform coding remove it by mapping the image to a decorrelated representation. Psychovisual redundancy: some information is below the human visual system's threshold - quantization removes it irreversibly, and this is the only redundancy whose removal loses real data.",
              "The bookkeeping is the exam's numerical core: compression ratio C = B1 / B2 (bits before over bits after), and relative data redundancy R = 1 - 1/C. Worked: a 2 MB image compressed to 500 KB has C = 4 and R = 1 - 1/4 = 0.75 - three quarters of the original bits were redundant. Because lossy methods discard psychovisual content, they need a fidelity criterion: objective ones such as RMS error and SNR (isb = log2(amax) - log2(RMS)), and the maximum permissible error; subjective ones from human rating panels - and the exam wants the RMS/SNR pair defined, not just named.",
              "For the answer: define all three redundancies with the technique that removes each (variable-length coding; prediction/transform mapping; quantization), mark which are lossless (first two) and which is lossy (third), then work the C and R numbers and define RMS error and SNR as the objective fidelity criteria. Link the redundancies to the pipeline stages of section 4.2 - coding redundancy dies in the symbol encoder, interpixel in the mapper, psychovisual in the quantizer - so the redundancy list and the block diagram answer reinforce each other in the examiner's scheme.",
            ],
            keyTerms: [
              { term: "Coding redundancy", definition: "Uniform bit length over a non-uniform histogram; removed by variable-length coding - lossless." },
              { term: "Interpixel redundancy", definition: "Neighbour correlation; removed by predictive/transform mapping - lossless in principle." },
              { term: "Psychovisual redundancy", definition: "Perceptually irrelevant information; removed by quantization - the only lossy redundancy." },
              { term: "Compression ratio", definition: "C = B1/B2; relative redundancy R = 1 - 1/C." },
            ],
            diagram: {
              kind: "layers",
              title: "The three redundancies, stacked",
              caption: "Index 0 is the top layer: the deeper the layer removed, the more aggressive (and lossier) the codec.",
              layers: [
                { label: "Psychovisual redundancy", note: "below perception - removed by quantization (lossy)" },
                { label: "Interpixel redundancy", note: "neighbour correlation - removed by prediction/transform (reversible)" },
                { label: "Coding redundancy", note: "uniform bits on uneven histogram - removed by entropy coding (reversible)" },
              ],
            },
            bullets: [
              "Coding redundancy: non-uniform histogram coded uniformly -> variable-length codes.",
              "Interpixel redundancy: correlated neighbours -> prediction or transform mapping.",
              "Psychovisual redundancy: invisible detail -> quantization; the only irreversible removal.",
              "C = B1/B2; R = 1 - 1/C. Worked: 2 MB -> 500 KB gives C = 4, R = 0.75.",
              "Objective fidelity: RMS error, SNR isb = log2(amax) - log2(RMS).",
              "Subjective fidelity: human rating panels - what JPEG quality actually optimizes.",
            ],
            callout: {
              type: "exam",
              title: "Only one redundancy is lossy",
              body: "The one-line differentiator examiners wait for: coding and interpixel redundancy can be removed reversibly; psychovisual cannot. If a question asks 'which removal step makes a codec lossy?', the answer is always quantization - never the entropy coder.",
            },
            table: {
              caption: "Redundancy - removal - reversibility.",
              headers: ["Redundancy", "Removed by", "Lossless?"],
              rows: [
                ["Coding", "Huffman / arithmetic variable-length codes", "yes"],
                ["Interpixel", "predictive coding, transform coding", "yes (until quantized)"],
                ["Psychovisual", "quantization", "no - the lossy step"],
              ],
            },
            examQuestions: [
              {
                q: "Explain coding, interpixel and psychovisual redundancy, naming the technique that removes each and stating which removals are reversible. Define compression ratio and relative data redundancy.",
                marks: 7,
                outline: [
                  "Coding redundancy: uniform bits on non-uniform histogram -> variable-length coding",
                  "Interpixel redundancy: neighbour correlation -> prediction/transform mapping",
                  "Psychovisual redundancy: sub-perceptual content -> quantization",
                  "First two reversible; psychovisual removal is the lossy step",
                  "C = B1/B2 (bits before / bits after)",
                  "R = 1 - 1/C",
                ],
              },
              {
                q: "A 2 MB medical image is stored as 500 KB. Compute C and R. Explain objective and subjective fidelity criteria, defining RMS error and SNR, and state why medical pipelines avoid psychovisual quantization.",
                marks: 14,
                outline: [
                  "C = 2 MB / 0.5 MB = 4",
                  "R = 1 - 1/C = 1 - 0.25 = 0.75 - 75% of bits were redundant",
                  "Objective fidelity: measurable - RMS error e_rms = sqrt(mean e^2)",
                  "SNR: isb = log2(amax) - log2(e_rms) - in bits",
                  "Subjective fidelity: human panel ratings - what quality dials tune",
                  "Medical: diagnoses depend on faint detail; lossy quantization can erase it",
                  "So medical storage uses lossless (or near-lossless with audit trails)",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Image compression models and elements of information theory",
            body: [
              "The compression model has a source side and a channel side. The source encoder is three stages: the mapper transforms the image to a representation that reduces interpixel redundancy (a predictor or transform - reversible); the quantizer reduces the accuracy of the mapper's output, attacking psychovisual redundancy (the only irreversible stage, absent from lossless systems); the symbol encoder converts the quantized symbols to a shorter code, attacking coding redundancy (Huffman, arithmetic - reversible). The decoder mirrors the last two stages in reverse; the mapper needs side information (the prediction tables) to invert.",
              "Information theory sets the lossless floor. Self-information: I(E) = log2(1/P(E)) - rare events carry more bits. The entropy of a source, H = -sum p_k log2 p_k, is the average information per symbol in bits/symbol - the shortest possible average code length any lossless coder can achieve. Worked: a four-symbol source with probabilities {0.6, 0.2, 0.1, 0.1} has H = -(0.6 log2 0.6 + 0.2 log2 0.2 + 0.1 log2 0.1 + 0.1 log2 0.1) = 0.442 + 0.464 + 0.332 + 0.332 = 1.57 bits/symbol, while fixed-length coding spends 2 bits - so no lossless scheme can beat a ratio of 2/1.57 = 1.27 on this source.",
              "The exam answer: draw the source encoder/decoder block diagram naming what each stage removes, define self-information and entropy, and work the four-symbol entropy numerical with the achievable-ratio conclusion. Channel encoding (error protection, e.g. Hamming codes) earns a sentence: it adds controlled redundancy for transmission reliability, the opposite direction from compression. Say where each stage sits on the lossless/lossy divide - mapper and symbol encoder reversible, quantizer one-way - because the follow-up question 'which stage makes it lossy?' is worth its own mark.",
            ],
            keyTerms: [
              { term: "Mapper", definition: "Source-encoder stage removing interpixel redundancy by prediction or transform - reversible." },
              { term: "Quantizer", definition: "Stage reducing symbol accuracy; the only irreversible stage - psychovisual redundancy." },
              { term: "Symbol encoder", definition: "Converts symbols to short codes (Huffman/arithmetic) - coding redundancy, reversible." },
              { term: "Entropy H", definition: "-sum p log2 p in bits/symbol; the lossless coding floor." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The source encoder and decoder",
              caption: "Three stages down, two back up - only the quantizer is one-way.",
              stages: [
                { label: "Mapper", note: "decorrelate - interpixel redundancy (reversible)" },
                { label: "Quantizer", note: "reduce accuracy - psychovisual (lossy)" },
                { label: "Symbol encoder", note: "shorter codes - coding redundancy (reversible)" },
                { label: "Channel", note: "channel encoder adds protection" },
                { label: "Decoder", note: "symbol decode + inverse mapper; quantization cannot be undone" },
              ],
            },
            bullets: [
              "Source encoder: mapper -> quantizer -> symbol encoder, in that order.",
              "Mapper: interpixel redundancy; quantizer: psychovisual; symbol encoder: coding redundancy.",
              "Lossless systems omit the quantizer entirely.",
              "Self-information I(E) = log2(1/P(E)) - rare events carry more bits.",
              "Entropy H = -sum p log2 p - the lossless floor in bits/symbol.",
              "Worked: {0.6, 0.2, 0.1, 0.1} -> H = 1.57 bits/symbol; fixed 2 bits -> max ratio 1.27.",
            ],
            callout: {
              type: "tip",
              title: "Entropy is a floor, not a goal",
              body: "Students state H as if a Huffman code should reach it. It is a lower bound: Huffman reaches within one bit/symbol of H; arithmetic coding approaches it arbitrarily closely. Saying 'floor' and comparing your code's average length to H is what the markscheme rewards.",
            },
            table: {
              caption: "Stage - redundancy attacked - reversibility.",
              headers: ["Stage", "Removes", "Reversible?"],
              rows: [
                ["Mapper", "interpixel redundancy", "yes"],
                ["Quantizer", "psychovisual redundancy", "no"],
                ["Symbol encoder", "coding redundancy", "yes"],
                ["Channel encoder", "none - adds protection", "adds bits by design"],
              ],
            },
            examQuestions: [
              {
                q: "Draw and explain the image compression model: source encoder stages, decoder, and channel encoder. State which redundancy each stage removes and which stage is absent in lossless compression.",
                marks: 7,
                outline: [
                  "Source encoder: mapper -> quantizer -> symbol encoder",
                  "Mapper: prediction/transform - interpixel redundancy, reversible",
                  "Quantizer: accuracy reduction - psychovisual redundancy, irreversible",
                  "Symbol encoder: Huffman/arithmetic - coding redundancy, reversible",
                  "Channel encoder: error protection (adds redundancy) before transmission",
                  "Decoder mirrors symbol decode + inverse mapping; quantization is one-way",
                  "Lossless systems omit the quantizer",
                ],
              },
              {
                q: "Define self-information and entropy. Compute the entropy of a four-symbol source with probabilities 0.6, 0.2, 0.1, 0.1, and determine the maximum compression ratio achievable losslessly against fixed-length coding.",
                marks: 14,
                outline: [
                  "Self-information I(E) = log2(1/P(E)) = -log2 P(E)",
                  "Entropy H = -sum p_k log2 p_k (bits/symbol)",
                  "Terms: 0.6*0.737 = 0.442; 0.2*2.322 = 0.464; 0.1*3.322 = 0.332 twice",
                  "H = 0.442 + 0.464 + 0.332 + 0.332 = 1.57 bits/symbol",
                  "Fixed-length code: 4 symbols need 2 bits each",
                  "Best possible lossless ratio = 2 / 1.57 = 1.27",
                  "No lossless coder can beat this on this source - entropy is the floor",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Error-free compression",
            body: [
              "Error-free (lossless) compression uses coding and interpixel redundancy only. Huffman coding builds the optimal prefix code for known symbol probabilities: repeatedly merge the two smallest probabilities into a tree until one node remains; the code of each symbol is the path from the root. Prefix property: no code is a prefix of another, so decoding needs no separators. Worked: symbols A(0.4), B(0.3), C(0.2), D(0.1) - merge C+D = 0.3, then B+0.3 = 0.6, then A+0.6 = 1.0; code lengths 1, 2, 3, 3 give average length L = 0.4(1) + 0.3(2) + 0.2(3) + 0.1(3) = 1.9 bits/symbol against an entropy of 1.69 - within one bit of the floor, as Huffman theory promises.",
              "LZW (dictionary coding) needs no probabilities at all: initialize the dictionary with single symbols, then greedily emit the longest string already in the dictionary while adding string-plus-next-character entries - the dictionary builds itself on both sides, which is why GIF, TIFF and PDF use it. Arithmetic coding represents the whole message as a subinterval of [0, 1): each symbol narrows the interval according to its probability - the message ends encoded as one binary fraction that can approach the entropy arbitrarily closely, beating Huffman's one-bit-per-symbol ceiling. Bit-plane coding decomposes an image into binary planes and run-length codes each - most planes compress well because of interpixel correlation.",
              "For the exam: state what each method removes (coding redundancy; LZW also exploits runs), work the Huffman tree and the average length against entropy, and compare the three on assumptions - Huffman needs probabilities, LZW needs none, arithmetic needs a probability model but no prefix constraint. The 'error-free comparison' the syllabus names is exactly this assumptions-versus-performance table: one line of assumption, one line of mechanism, one line of how close each coder gets to the entropy floor - a structure the examiner can mark line by line.",
            ],
            keyTerms: [
              { term: "Huffman coding", definition: "Optimal prefix code built by merging the two smallest probabilities; within 1 bit/symbol of entropy." },
              { term: "LZW", definition: "Adaptive dictionary coding - no probabilities needed; used in GIF, TIFF, PDF." },
              { term: "Arithmetic coding", definition: "Message as one binary fraction of [0,1); approaches the entropy limit." },
              { term: "Bit-plane coding", definition: "Decompose into binary planes and run-length code each; exploits interpixel correlation." },
            ],
            diagram: {
              kind: "fork",
              title: "Which lossless coder?",
              caption: "The choice is about assumptions - probabilities, dictionary, or interval arithmetic.",
              start: "Lossless coding needed",
              branches: [
                { label: "Probabilities known", outcome: "Huffman - optimal prefix code, within 1 bit of entropy", good: true },
                { label: "No statistics available", outcome: "LZW - dictionary builds itself (GIF, TIFF, PDF)", good: true },
                { label: "Squeeze past Huffman's ceiling", outcome: "arithmetic coding - fraction of [0,1)", good: true },
                { label: "Exploit spatial runs", outcome: "bit-plane coding + RLE per plane", good: true },
              ],
            },
            bullets: [
              "Huffman: merge two smallest probabilities repeatedly; codes are root-to-leaf paths.",
              "Prefix property: no code is another's prefix - decoding needs no separators.",
              "Worked A(0.4) B(0.3) C(0.2) D(0.1): lengths 1/2/3/3, L = 1.9 vs H = 1.69.",
              "LZW: emit longest known string, add string+next to dictionary - no statistics.",
              "Arithmetic: message as a [0,1) subinterval; beats Huffman's 1-bit ceiling.",
              "Bit-plane coding: RLE per binary plane; high-order planes compress best.",
            ],
            callout: {
              type: "warning",
              title: "Huffman never beats entropy",
              body: "A recurring exam trap: claiming a Huffman code with average length below the entropy. Impossible - H is the floor. If your computed L comes out under H, a merge or rounding error happened. Check L >= H before writing the answer.",
            },
            table: {
              caption: "Lossless coders compared.",
              headers: ["Coder", "Needs", "Approach to entropy"],
              rows: [
                ["Huffman", "symbol probabilities", "within 1 bit/symbol"],
                ["LZW", "nothing (adaptive dictionary)", "good on runs/repeating strings"],
                ["Arithmetic", "a probability model", "arbitrarily close"],
                ["Bit-plane + RLE", "spatial correlation", "strong on smooth images"],
              ],
            },
            examQuestions: [
              {
                q: "Construct the Huffman code for symbols A(0.4), B(0.3), C(0.2), D(0.1). Give the code lengths, compute the average length, and compare it with the entropy of the source.",
                marks: 7,
                outline: [
                  "Merge C(0.2) + D(0.1) = 0.3",
                  "Merge B(0.3) + 0.3 = 0.6",
                  "Merge A(0.4) + 0.6 = 1.0",
                  "Code lengths: A = 1, B = 2, C = 3, D = 3",
                  "Average L = 0.4(1) + 0.3(2) + 0.2(3) + 0.1(3) = 1.9 bits/symbol",
                  "Entropy H = 1.69 bits/symbol",
                  "Huffman within 1 bit/symbol of the floor; L >= H always",
                ],
              },
              {
                q: "Explain LZW and arithmetic coding as error-free compression methods. Contrast them with Huffman on the assumptions each requires and how close each can approach the entropy limit.",
                marks: 14,
                outline: [
                  "Huffman: needs known probabilities; prefix-tree construction",
                  "Ceiling: at most 1 bit/symbol above entropy (integer lengths)",
                  "LZW: adaptive dictionary; emit longest known string, extend dictionary",
                  "No probability model; excellent on runs - GIF/TIFF/PDF heritage",
                  "Arithmetic: message as a subinterval of [0,1) narrowed per symbol",
                  "Symbol probabilities (or adaptive estimates) still needed",
                  "No prefix constraint -> can approach entropy arbitrarily closely",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Lossy compression and image compression standards",
            body: [
              "Lossy compression adds the quantizer: accuracy is traded for bitrate. Predictive lossy coding (DPCM) quantizes prediction errors - the residuals are small and near-Gaussian, so few bits suffice; transform coding decorrelates blocks and concentrates energy: the DCT of an 8 x 8 block packs most of the block's energy into a few low-frequency coefficients, which is exactly what the eye can see, while high-frequency coefficients quantize hard with little visible cost.",
              "The JPEG baseline is the canonical pipeline and the standard exam diagram: RGB -> YCbCr colour conversion; chroma subsampling 4:2:0, halving colour resolution in both axes because vision tolerates it; the image split into 8 x 8 blocks, each forward-DCT'd; coefficients divided by the quantization table and rounded - the quality dial; zigzag scan orders coefficients low-to-high frequency so the trailing zeros run long; run-length plus differential DC plus Huffman entropy coding finishes. Worked intuition: an 8 x 8 block of constant value 100 has a single nonzero DCT coefficient - the DC - so a flat block compresses to almost nothing, while a texture block keeps many coefficients and costs more.",
              "Beyond JPEG the standards split by transform. JPEG 2000 replaces the block DCT with a wavelet transform, buying better quality at low bitrates, freedom from 8 x 8 blocking artefacts, and region-of-interest coding - encode the diagnostically important region sharper than the rest. The MPEG and H.26x family adds motion compensation between frames on top of intra-frame coding, spending bits only on what changes for video. The standing trade-off: JPEG remains the simplest and most universal choice; the newer families pay complexity for quality per bit.",
              "For the exam: draw the JPEG pipeline in order with one sentence per stage, state which stages are lossy (chroma subsampling and quantization), and give the flat-block DCT argument - that one worked insight proves you know why transform coding pays. Rehearse it aloud - DC only, ACs zero - and add the blocking-artefact note: coarse quantization shows 8 x 8 seams, the visible price of the quality dial and the reason wavelet codecs such as JPEG 2000 were invented.",
            ],
            keyTerms: [
              { term: "DPCM", definition: "Lossy predictive coding - quantize prediction errors; residuals are small and cheap." },
              { term: "DCT", definition: "8 x 8 block transform concentrating energy into few low-frequency coefficients." },
              { term: "Zigzag scan", definition: "Orders DCT coefficients low-to-high frequency so trailing zeros run long for RLE." },
              { term: "JPEG 2000", definition: "Wavelet-based standard - better low-bitrate fidelity and region-of-interest coding." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The JPEG baseline pipeline",
              caption: "Five stages from RGB to bitstream - two of them lossy.",
              stages: [
                { label: "RGB -> YCbCr", note: "separate luminance from colour" },
                { label: "Chroma subsample 4:2:0", note: "lossy - colour resolution halved" },
                { label: "8 x 8 DCT per block", note: "energy into few coefficients" },
                { label: "Quantize (quality table)", note: "lossy - the quality dial" },
                { label: "Zigzag + RLE + Huffman", note: "lossless entropy coding" },
              ],
            },
            bullets: [
              "Lossy = predictive (DPCM) or transform (DCT) coding with a quantizer added.",
              "JPEG: colour convert -> 4:2:0 subsample -> 8 x 8 DCT -> quantize -> zigzag -> entropy code.",
              "Lossy stages: chroma subsampling and coefficient quantization.",
              "Flat block of value 100: only the DC DCT coefficient is nonzero - near-free compression.",
              "Quality dial: coarser quantization table = smaller file, more blocking artefacts.",
              "JPEG 2000: wavelets, ROI coding; MPEG/H.26x: motion compensation for video.",
            ],
            callout: {
              type: "exam",
              title: "Name the two lossy stages",
              body: "Every JPEG question hides the same sub-question: which stages discard information? Exactly two - chroma subsampling and quantization. Colour conversion, the DCT, zigzag and Huffman are all perfectly reversible; naming this split correctly is the discriminator between a listed pipeline and an understood one.",
            },
            table: {
              caption: "JPEG pipeline stages.",
              headers: ["Stage", "Operation", "Lossy?"],
              rows: [
                ["Colour transform", "RGB -> YCbCr", "no"],
                ["Chroma subsampling", "4:2:0 colour resolution drop", "yes"],
                ["Block DCT", "8 x 8 energy compaction", "no (rounding aside)"],
                ["Quantization", "divide by quality table, round", "yes - the quality dial"],
                ["Zigzag + entropy coding", "RLE + Huffman/arith.", "no"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the JPEG baseline compression pipeline stage by stage, identifying which stages are lossy. Why does an 8 x 8 block of constant intensity compress almost for free?",
                marks: 14,
                outline: [
                  "RGB -> YCbCr: luminance separated from chrominance (reversible)",
                  "Chroma subsampling 4:2:0 - lossy; vision tolerates colour detail loss",
                  "8 x 8 forward DCT per block - energy compaction, reversible",
                  "Quantization by the quality table - lossy; the compression dial",
                  "Zigzag scan then RLE + Huffman - lossless entropy coding",
                  "Flat block: DCT gives one nonzero DC coefficient (8 x mean)",
                  "All AC coefficients zero -> the block costs a handful of bits",
                ],
              },
              {
                q: "Compare JPEG and JPEG 2000, and explain what MPEG-class standards add for video. Include the transform difference and the region-of-interest capability.",
                marks: 7,
                outline: [
                  "JPEG: 8 x 8 block DCT + quantization",
                  "JPEG 2000: wavelet transform - whole-image, multiresolution",
                  "Wavelets avoid 8 x 8 blocking artefacts at low bitrates",
                  "JPEG 2000 supports region-of-interest coding - encode diagnoses sharper",
                  "MPEG/H.26x: inter-frame motion compensation on top of intra-frame coding",
                  "Video: only the change between frames is coded",
                  "Trade-off: JPEG 2000 better quality per bit; JPEG simpler and universal",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Detection of discontinuities: points, lines and edges",
            body: [
              "Segmentation by discontinuity looks for three kinds of abrupt change, each with its own mask family. Point detection: an isolated point differs sharply from its surround, so a Laplacian mask and a threshold (|R| > T) finds it - one bright pixel in a dark field lights up the response. Line detection: four 3 x 3 masks tuned to horizontal, vertical, +45 and -45 lines; a pixel belongs to a line of orientation k if mask k's response is the maximum across the four and exceeds a threshold.",
              "Edges are the main event: the gradient vector of first derivatives, Gx and Gy, computed by Roberts (2 x 2), Prewitt (3 x 3, weight 1) or Sobel (3 x 3, centre weight 2 - smoothing while differentiating) masks; magnitude approx |Gx| + |Gy|, direction alpha(x, y) = tan^-1(Gy/Gx). Worked Sobel: a horizontal edge with rows [0 0 0] above [6 6 6] gives Gy = (6 + 12 + 6) - 0 = 24 - a strong response. The second-derivative route is the Laplacian of Gaussian (LoG): smooth with a Gaussian, then the Laplacian; edges sit at the zero crossings of the LoG response - a two-stage noise-robust detector.",
              "For the exam: give the mask for each task, state first-derivative vs second-derivative properties (gradient gives strength and direction; Laplacian is isotropic but doubles noise), compute the Sobel example, and name the LoG zero-crossing rule. Rehearse the Sobel numerical until automatic - rows [0 0 0] over [6 6 6] give Gy = 24 - and connect the families: point and line detection are thresholded mask responses, edge detection is the gradient or LoG, and the LoG's zero crossings hand their result to the linking methods of section 4.6.",
            ],
            keyTerms: [
              { term: "Point detection", definition: "Laplacian mask + threshold |R| > T; finds isolated intensity spikes." },
              { term: "Line masks", definition: "Four 3 x 3 templates (horizontal, vertical, two diagonals); max response wins." },
              { term: "Gradient magnitude", definition: "|Gx| + |Gy| (approx of sqrt(Gx^2 + Gy^2)); direction tan^-1(Gy/Gx)." },
              { term: "LoG", definition: "Laplacian of Gaussian; edges at zero crossings - smoothing first, then differentiation." },
            ],
            diagram: {
              kind: "compare",
              title: "First vs second derivative edge detection",
              caption: "The gradient pair measures strength and direction; the Laplacian finds crossings but doubles noise.",
              left: {
                heading: "Gradient (1st derivative)",
                items: [
                  "Masks: Roberts 2 x 2, Prewitt, Sobel",
                  "Magnitude + direction per pixel",
                  "Sobel centre weight 2 smooths",
                  "Worked: Gy = 24 on the step edge",
                ],
              },
              right: {
                heading: "Laplacian / LoG (2nd derivative)",
                items: [
                  "Isotropic - no direction information",
                  "Zero crossings locate edge centres",
                  "Amplifies noise twice - smoothing mandatory",
                  "LoG = Gaussian smooth, then Laplacian",
                ],
              },
            },
            bullets: [
              "Point detection: Laplacian mask, keep |R| > T.",
              "Line detection: 4 orientation masks; maximum response + threshold.",
              "Gradient masks: Roberts (2 x 2), Prewitt (weight 1), Sobel (weight 2).",
              "Magnitude approx |Gx| + |Gy|; direction alpha = tan^-1(Gy/Gx).",
              "Worked Sobel: rows [0 0 0] / [6 6 6] -> Gy = (6+12+6) = 24.",
              "LoG: smooth then Laplacian; edges at zero crossings.",
            ],
            callout: {
              type: "tip",
              title: "Direction is the gradient's monopoly",
              body: "The Laplacian finds edges but cannot say which way they run - it is isotropic by design. Any application needing edge orientation (gradient-angle segmentation, motion estimation) must use the first-derivative pair. Quoting this asymmetry answers half the 'compare the two' questions.",
            },
            table: {
              caption: "Edge masks compared.",
              headers: ["Mask family", "Size", "Centre weight", "Character"],
              rows: [
                ["Roberts", "2 x 2", "-", "simple cross-difference"],
                ["Prewitt", "3 x 3", "1", "plain averaging derivative"],
                ["Sobel", "3 x 3", "2", "smoothing derivative - preferred"],
                ["LoG", "5 x 5 (or DoG)", "-", "smooth-then-differentiate"],
              ],
            },
            examQuestions: [
              {
                q: "Explain point, line and edge detection with the appropriate masks. Compute the Sobel Gy response for a horizontal edge with rows [0 0 0] above [6 6 6], and state how edge direction is obtained.",
                marks: 7,
                outline: [
                  "Point: Laplacian + threshold |R| > T",
                  "Line: four orientation masks; max response wins",
                  "Edge: gradient masks Roberts/Prewitt/Sobel",
                  "Sobel Gy = [-1 -2 -1; 0 0 0; 1 2 1]",
                  "Response: (6+12+6) - 0 = 24",
                  "Direction alpha = tan^-1(Gy/Gx) from the gradient pair",
                ],
              },
              {
                q: "Compare first-derivative (gradient) and second-derivative (Laplacian/LoG) edge detection on isotropy, noise sensitivity, information produced, and implementation. When is the LoG preferred?",
                marks: 14,
                outline: [
                  "Gradient: directional pair, gives magnitude and direction",
                  "Laplacian: isotropic, no direction, responds to lines too",
                  "Second derivative amplifies noise roughly twice as much",
                  "LoG fixes it: Gaussian smoothing before the Laplacian",
                  "Edges at LoG zero crossings - precise edge localization",
                  "Preferred when noise is significant and edge centrelines are wanted",
                  "Gradient preferred when orientation is needed (linking, motion)",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Edge linking and boundary detection",
            body: [
              "Edge detectors produce broken, gappy maps - linking turns them into closed boundaries. Local processing examines each edge pixel's neighbourhood: two pixels link if their gradient magnitudes and directions are similar (|difference| below thresholds), and chains of linked pixels form the boundary - cheap, but purely local. Regional processing analyses a region as a whole: the region adjacency graph, or minimum-perimeter polygon fits. Global processing asks a different question - 'do these scattered pixels agree on one shape?' - and answers it with the Hough transform.",
              "The Hough transform parametrizes lines as rho = x cos(theta) + y sin(theta) (rho = perpendicular distance from origin, theta = normal angle - this form avoids infinite slopes). Each edge pixel votes for every (rho, theta) it is consistent with; the accumulator array's peaks are the lines. Worked: three edge pixels that lie on one line each cast votes that include the same (rho0, theta0) cell - that cell accumulates 3 while neighbouring cells hold 1 - the peak survives even if one of the three pixels is missing: gaps are bridged because votes do not require adjacency. Circles and general shapes work the same way with more parameters.",
              "For the exam: define local linking conditions (magnitude and direction similarity), write the polar line parametrization and why it is used (no infinite slope), walk the three-point voting example, and state the payoff - the Hough transform finds global structure through gaps and noise, at accumulator-array cost. Close with the cost side: the accumulator's size grows with the parameter count, so lines are cheap while circles and arbitrary shapes become progressively costlier - and the threshold applied to the accumulator decides how many near-collinear pixels you are willing to accept.",
            ],
            keyTerms: [
              { term: "Local linking", definition: "Join edge pixels with similar gradient magnitude and direction in a neighbourhood." },
              { term: "Hough transform", definition: "Each edge pixel votes for all (rho, theta) lines through it; accumulator peaks are the lines." },
              { term: "rho-theta parametrization", definition: "rho = x cos(theta) + y sin(theta) - finite for vertical lines, unlike y = ax + b." },
              { term: "Accumulator array", definition: "The (rho, theta) vote table; its peaks are detected structures." },
            ],
            diagram: {
              kind: "flow",
              title: "From edge pixels to detected lines",
              caption: "Local rules stitch short chains; the Hough vote finds the whole line through gaps.",
              steps: [
                { label: "Edge map", note: "gradient magnitude + direction, broken" },
                { label: "Local linking", note: "similar magnitude and direction join" },
                { label: "Parametrize lines", note: "rho = x cos(theta) + y sin(theta)" },
                { label: "Vote into accumulator", note: "every pixel votes all its lines" },
                { label: "Read peaks", note: "cells above threshold = detected lines" },
              ],
            },
            bullets: [
              "Local processing: link when |magnitude difference| and |direction difference| are small.",
              "Global processing: the Hough transform answers 'is there one line here?'",
              "rho-theta form: rho = distance from origin, theta = normal angle - vertical lines finite.",
              "Each edge pixel votes for every (rho, theta) it satisfies.",
              "Worked: 3 collinear pixels -> accumulator peak of 3 at (rho0, theta0); 1 elsewhere.",
              "Peaks survive gaps and noise - votes need no adjacency.",
            ],
            callout: {
              type: "exam",
              title: "Why rho-theta, in one line",
              body: "The examiner's probe is always 'why not y = ax + b?' - because vertical lines have infinite slope and would need an unbounded accumulator. The polar form gives every line a finite (rho, theta) cell. That sentence plus the voting example is the conceptual core of the question.",
            },
            table: {
              caption: "Linking strategies.",
              headers: ["Strategy", "Scope", "Strength"],
              rows: [
                ["Local processing", "pixel neighbourhood", "fast; needs nearby, similar edges"],
                ["Regional processing", "whole region", "RAG / polygon fits"],
                ["Hough transform", "global", "bridges gaps; robust to noise"],
              ],
            },
            examQuestions: [
              {
                q: "Explain edge linking by local processing and by the Hough transform. Write the rho-theta line parametrization, explain why it is preferred over y = ax + b, and show how three collinear edge pixels create an accumulator peak.",
                marks: 7,
                outline: [
                  "Local: link pixels with similar gradient magnitude and direction",
                  "Hough: global voting - each pixel votes for all lines through it",
                  "rho = x cos(theta) + y sin(theta)",
                  "y = ax + b fails for vertical lines (infinite slope); rho-theta is finite",
                  "3 collinear pixels: the shared (rho0, theta0) cell reaches 3",
                  "Neighbouring cells hold 1 -> the peak stands out",
                ],
              },
              {
                q: "Why does the Hough transform bridge gaps in an edge map where local linking fails? Describe the accumulator procedure and one cost of the method.",
                marks: 14,
                outline: [
                  "Local linking requires adjacent, similar pixels - gaps break chains",
                  "Hough votes are global: pixels need not touch or be ordered",
                  "Each edge pixel votes for every (rho, theta) consistent with it",
                  "The true line's cell accumulates votes from all its pixels",
                  "A missing pixel reduces the count by 1 - the peak survives",
                  "Thresholding the accumulator recovers complete lines",
                  "Cost: accumulator size and votes grow with parameter count (circles worse)",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Thresholding",
            body: [
              "Thresholding partitions an image by intensity: pixels above T become one class, the rest another - the cheapest segmentation there is, and reliable whenever the histogram is bimodal with a clear valley. Basic global thresholding is an iteration: (1) pick an initial T (the midpoint of the intensity range); (2) segment into groups G1 (> T) and G2 (<= T); (3) compute the mean intensity mu1 and mu2 of the two groups; (4) set the new threshold T = (mu1 + mu2)/2; (5) repeat until the change in T between iterations is smaller than a preset T0. Worked: means 40 and 180 give T = 110 immediately on the first refinement.",
              "Otsu's method is the optimal global threshold: search every candidate T and maximize the between-class variance sigma_B^2 = w0 w1 (mu0 - mu1)^2, where w0, w1 are the class probabilities (weights) and mu0, mu1 the class means - equivalently minimizing within-class variance. It needs no initial guess and finds the valley-separating threshold that the iteration approximates. When illumination is uneven, no single T works: variable (adaptive) thresholding computes T locally from neighbourhood statistics - T = m + k * sigma over a moving window (m local mean, sigma local std, k a bias) - partitioning the image into subimages or sliding the window across it.",
              "For the exam: state the iteration steps with the convergence test, define Otsu's between-class variance objective (and why it needs no seed), and give the adaptive formula with one sentence on when global fails - uneven illumination is the standard trigger. Rehearse the worked refinement - means 40 and 180 give T = 110 - and connect the methods: the iteration approximates what Otsu finds exactly, and both fail on uneven illumination, which is the gateway to the adaptive formula T = m + k * sigma.",
            ],
            keyTerms: [
              { term: "Basic global thresholding", definition: "Iterate T = (mu1 + mu2)/2 over the two groups until T stabilizes." },
              { term: "Otsu's method", definition: "Maximize between-class variance w0 w1 (mu0 - mu1)^2 over all T - the optimal global threshold." },
              { term: "Variable thresholding", definition: "T(x, y) from local statistics, e.g. m + k * sigma over a moving window." },
              { term: "Bimodal histogram", definition: "Two intensity populations with a valley - the precondition for any global threshold." },
            ],
            diagram: {
              kind: "cycle",
              title: "The global thresholding iteration",
              caption: "Guess, split, average, re-guess - the loop walks T into the histogram valley.",
              steps: [
                { label: "Initial T", note: "midpoint of the intensity range" },
                { label: "Segment G1, G2", note: "above and below T" },
                { label: "Compute mu1, mu2", note: "group means" },
                { label: "Update T", note: "T = (mu1 + mu2)/2" },
                { label: "Converged?", note: "|T_new - T_old| < T0 -> stop, else repeat" },
              ],
            },
            bullets: [
              "Global thresholding assumes a bimodal histogram with a valley at the threshold.",
              "Iteration: initial T -> segment -> group means -> T = (mu1 + mu2)/2 -> repeat.",
              "Worked: mu1 = 40, mu2 = 180 -> T = 110.",
              "Otsu: maximize sigma_B^2 = w0 w1 (mu0 - mu1)^2 over every candidate T.",
              "Otsu needs no initial guess - an exhaustive, deterministic search.",
              "Uneven illumination -> variable threshold T = m + k * sigma over a local window.",
            ],
            callout: {
              type: "warning",
              title: "Otsu maximizes between-class variance",
              body: "The most common Otsu slip is describing it as 'finding the histogram valley by smoothing'. It is an optimization: minimize within-class variance, equivalently maximize sigma_B^2 = w0 w1 (mu0 - mu1)^2, exhaustively over all T. Write the objective - naming the statistic is the mark.",
            },
            codeExample: {
              language: "python",
              caption: "threshold.py - the iteration vs Otsu",
              code: `import numpy as np

hist = np.array([10, 8, 6, 4, 3, 2, 12, 40, 38, 30, 22, 12, 6, 4, 3, 2])
levels = np.arange(16)
T = 8.0                                        # midpoint seed
for _ in range(10):
    g1, g2 = levels > T, levels <= T           # split by the current T
    m1 = (hist[g1] * levels[g1]).sum() / hist[g1].sum()
    m2 = (hist[g2] * levels[g2]).sum() / hist[g2].sum()
    Tn = (m1 + m2) / 2
    if abs(Tn - T) < 0.5: break                # convergence test
    T = Tn
print(T)                                       # settles in the valley
# Otsu: same answer by maximizing w0*w1*(m0-m1)^2 over every candidate T`,
            },
            examQuestions: [
              {
                q: "Explain the basic global thresholding algorithm with its iteration and convergence test. Work the first refinement for group means 40 and 180, and state the histogram condition the method assumes.",
                marks: 7,
                outline: [
                  "Initial T: midpoint of the intensity range",
                  "Segment into G1 (> T) and G2 (<= T)",
                  "Compute group means mu1 and mu2",
                  "New T = (mu1 + mu2)/2",
                  "Worked: (40 + 180)/2 = 110",
                  "Repeat until |T_new - T_old| < T0",
                  "Assumes a bimodal histogram with a clear valley",
                ],
              },
              {
                q: "Derive Otsu's thresholding criterion and explain why it is preferred to the iterative method. How does variable (adaptive) thresholding handle uneven illumination, and why does no global threshold work in that case?",
                marks: 14,
                outline: [
                  "Otsu: for every candidate T compute class weights w0, w1 and means mu0, mu1",
                  "Objective: maximize sigma_B^2 = w0 w1 (mu0 - mu1)^2",
                  "Equivalent to minimizing within-class variance",
                  "Exhaustive search - no initial guess, deterministic optimum",
                  "Iterative method only approximates it and needs a seed",
                  "Uneven illumination: one histogram becomes a mixture per region",
                  "Adaptive T = m + k * sigma from local statistics over a moving window",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Region-oriented and motion-based segmentation",
            body: [
              "Region methods grow segmentation from the inside out, not from edges. Region growing starts from seeds (chosen by an application rule - a bright tumour pixel, a crops pixel in a satellite image), then appends neighbours that satisfy a similarity predicate (gray-level difference from the seed below a threshold, or a gradient condition) until no pixel qualifies. Region split and merge works from the outside in: recursively split any region failing a uniformity predicate (e.g. max - min > Delta) into four quadrants (a quadtree), then merge adjacent regions whose union satisfies the predicate - the refined segmentation passes through a region adjacency graph.",
              "The watershed transform treats intensity as topography: flood from each regional minimum; where two floods meet, build a dam - the dams are the watershed lines bounding the segments. Its known failure is over-segmentation from noise minima, cured by markers that flood chosen minima only. Worked intuition: two basins flooding simultaneously meet at the saddle between them - that saddle chain becomes the boundary. Motion-based segmentation: a static camera uses frame differencing - threshold |f_t - f_{t-1}| - to isolate moving objects; a moving camera uses optical flow, estimating the velocity field (u, v) from the spatio-temporal gradient equation fx*u + fy*v + ft = 0, and pixels with coherent flow vectors group into moving objects.",
              "For the exam: state the two design decisions of region growing (seeds, predicate), the split-and-merge predicate and quadtree, watershed's flooding picture plus the marker cure, and the static-camera versus moving-camera split of motion segmentation with the optical-flow gradient equation. Rehearse the flow equation fx*u + fy*v + ft = 0 until automatic, and open the answer with the two design decisions of region growing - seed rule, similarity predicate - because the examiner checks those two phrases first, and close with the shared lesson: the decision rule, not the math, is where segmentation quality is decided.",
            ],
            keyTerms: [
              { term: "Region growing", definition: "From seeds, append neighbours satisfying a similarity predicate until none qualify." },
              { term: "Split and merge", definition: "Quadtree splitting on a uniformity predicate, then merging adjacent similar regions." },
              { term: "Watershed", definition: "Flooding from regional minima; dams at meeting lines are the segmentation." },
              { term: "Optical flow", definition: "Velocity field (u, v) from fx*u + fy*v + ft = 0; coherent flow groups moving objects." },
            ],
            diagram: {
              kind: "cycle",
              title: "Region growing loop",
              caption: "Seed, test neighbours, absorb, repeat - the region expands until the predicate says stop.",
              steps: [
                { label: "Select seeds", note: "application rule (bright, textured...)" },
                { label: "Inspect neighbours", note: "4- or 8-neighbours of the region" },
                { label: "Test predicate", note: "|gray - seed| <= T or gradient condition" },
                { label: "Absorb qualifying pixels", note: "region grows" },
                { label: "Repeat until stable", note: "no neighbour qualifies" },
              ],
            },
            bullets: [
              "Region growing's two decisions: seed selection rule and similarity predicate.",
              "Split and merge: split on max - min > Delta into quadrants; merge on the same predicate.",
              "Merging runs through the region adjacency graph (RAG).",
              "Watershed: floods from minima; dams = boundaries; over-segmentation cured by markers.",
              "Static camera: frame differencing |f_t - f_{t-1}| > T isolates movers.",
              "Moving camera: optical flow fx*u + fy*v + ft = 0; group by coherent (u, v).",
            ],
            callout: {
              type: "tip",
              title: "Markers, not smoothing alone",
              body: "The usual watershed answer says 'over-segmentation happens because of noise'. The cure is markers - flooding only from application-chosen minima (e.g. the darkest blobs), so every unmarked minimum never starts a basin. Naming markers explicitly is the follow-up mark most answers miss.",
            },
            table: {
              caption: "Region and motion segmentation.",
              headers: ["Method", "Mechanism", "Key parameter"],
              rows: [
                ["Region growing", "seed + predicate expansion", "seed rule, threshold T"],
                ["Split and merge", "quadtree split, RAG merge", "uniformity Delta"],
                ["Watershed", "flooding from minima", "markers"],
                ["Frame differencing", "|f_t - f_{t-1}| threshold", "static camera, T"],
                ["Optical flow", "fx*u + fy*v + ft = 0", "moving camera, flow coherence"],
              ],
            },
            examQuestions: [
              {
                q: "Explain region growing and region split-and-merge. State the two design decisions of growing, the uniformity predicate and quadtree of split-and-merge, and how merging is performed.",
                marks: 7,
                outline: [
                  "Growing: seeds chosen by an application rule",
                  "Neighbours appended while the similarity predicate holds (e.g. |gray - seed| <= T)",
                  "Growth stops when no neighbour qualifies",
                  "Split: any region failing uniformity (max - min > Delta) splits into 4 quadrants",
                  "Quadtree recursion until all regions are uniform",
                  "Merge: adjacent regions whose union satisfies the predicate, via the RAG",
                ],
              },
              {
                q: "Explain the watershed segmentation algorithm, its over-segmentation problem and the marker-based remedy. Contrast static-camera motion segmentation (frame differencing) with moving-camera segmentation (optical flow), giving the flow constraint equation.",
                marks: 14,
                outline: [
                  "Watershed: intensity as topography; flooding from regional minima",
                  "Dams where floods meet = watershed lines = boundaries",
                  "Over-segmentation: noise creates spurious minima -> too many basins",
                  "Markers: flood only from chosen minima; others never start basins",
                  "Static camera: threshold accumulated |f_t - f_{t-1}| - frame differencing",
                  "Moving camera: optical flow from fx*u + fy*v + ft = 0",
                  "Group pixels with coherent (u, v) into moving objects",
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
      title: "Representation, Description & Object Recognition",
      summary:
        "Unit V converts segmented regions into decision-ready descriptions: representation schemes and chain codes, boundary and regional descriptors, principal components for description, binary morphology and its algorithms, and object recognition through decision-theoretic and structural methods.",
      chapter: {
        number: "05",
        title: "Describe, Morph, Recognize",
        intro:
          "Unit V covers representation, boundary descriptors, regional descriptors, the use of principal components for description, introduction to morphology, basic morphological algorithms, and object recognition with patterns and pattern classes, decision-theoretic methods and structural methods.",
        inOneBreath:
          "Representation chooses boundary vs region views; chain codes normalize by first differences; descriptors range from perimeter and Euler number to Fourier descriptors and GLCM texture; PCA finds the principal axis for rotation-normalized description; erosion, dilation, opening and closing do shape algebra, from boundary extraction to skeletons; minimum-distance and Bayes classifiers decide, string and graph matching structure.",
        sections: [
          {
            number: "5.1",
            title: "Representation: chain codes and polygonal approximations",
            body: [
              "Representation is the choice of what to record about a segmented region: an external scheme follows the boundary, an internal scheme measures the region's pixels. The chain code is the classic external scheme: the boundary becomes a sequence of direction symbols - 4-direction codes {0, 1, 2, 3} or 8-direction codes {0..7}. Its two defects: the code depends on the starting point, and its length scales with grid resolution. The fixes: resample on a coarser grid before coding, and code the first difference - successive direction changes counted counterclockwise modulo 4 (or 8) - which is rotation-invariant; circularly shifting it to the minimum-magnitude integer makes it start-point-invariant, and the result is the shape number.",
              "Worked example: a small square boundary with 4-direction chain code 0 0 1 1 2 2 3 3 gives first difference (including the wrap-around) 0 1 0 1 0 1 0 1; its minimum circular shift is 01010101, a shape number of order 8. Polygonal approximations are the other external scheme: the minimum-perimeter polygon (MPP) traced through a cellular wall around the boundary; or practical merging (fit a line until the error exceeds epsilon, then start a new segment) and splitting (split at the farthest vertex until every segment's error is below epsilon). A signature is a 1-D plot - radius versus angle, or distance versus arc length - reparametrized by slope to reduce rotation sensitivity.",
              "For the exam: define external vs internal representation, write the 4- and 8-direction codes, explain both normalizations (resampling, first difference), work the square's shape number, and give the merging/splitting rules for polygonal approximation. Practise the square-to-shape-number walk once by hand - code, difference, minimum shift - and pair each scheme with its use: chain codes for compact storage and matching, polygonal approximations for shape simplification, signatures for quick rotation-robust summaries of elongated objects.",
            ],
            keyTerms: [
              { term: "Chain code", definition: "Boundary as a sequence of direction symbols (4- or 8-direction)." },
              { term: "First difference", definition: "Successive direction changes counted counterclockwise modulo 4 (or 8) - rotation invariant." },
              { term: "Shape number", definition: "First-difference sequence of minimum magnitude - start-point invariant." },
              { term: "MPP", definition: "Minimum-perimeter polygon fitted through the boundary's cellular wall." },
            ],
            diagram: {
              kind: "flow",
              title: "From boundary to shape number",
              caption: "Code, differentiate, rotate to minimum - the normalization pipeline.",
              steps: [
                { label: "Trace boundary", note: "4- or 8-direction walk" },
                { label: "Resample grid", note: "coarser grid = shorter, resolution-tolerant code" },
                { label: "First difference", note: "successive direction changes, mod 4" },
                { label: "Minimum circular shift", note: "start-point invariance" },
                { label: "Shape number", note: "order = code length" },
              ],
            },
            bullets: [
              "External representation: boundary. Internal: region pixels. Both may combine.",
              "Chain codes: 4-direction {0,1,2,3}; 8-direction {0,...,7}.",
              "Defects: start-point dependence and resolution dependence.",
              "Fixes: resample on a coarser grid; code the first difference (rotation-invariant).",
              "Worked square: code 00112233 -> difference 01010101 -> shape number 01010101, order 8.",
              "Polygonal approximations: MPP, merging to epsilon error, splitting at farthest vertices.",
            ],
            callout: {
              type: "exam",
              title: "Two normalizations, two invariances",
              body: "Keep the pairing exact: the first difference buys rotation invariance; the minimum-magnitude circular shift buys start-point invariance; resampling buys resolution independence. Questions test one at a time - mixing them up is the standard lost mark.",
            },
            table: {
              caption: "Representation schemes.",
              headers: ["Scheme", "Type", "Key property"],
              rows: [
                ["Chain code", "external", "compact; needs normalization"],
                ["First difference / shape number", "external", "rotation + start-point invariant"],
                ["Polygonal approximation", "external", "MPP, merging, splitting"],
                ["Signature", "external (1-D)", "radius vs angle; slope-reparametrized"],
                ["Region pixels", "internal", "feeds regional descriptors"],
              ],
            },
            examQuestions: [
              {
                q: "Explain chain codes: 4- and 8-direction variants, their defects, and the normalizations applied. Work out the first difference and shape number of the boundary code 0 0 1 1 2 2 3 3.",
                marks: 7,
                outline: [
                  "Chain code: boundary as direction symbols (4- or 8-direction)",
                  "Defects: depends on start point and grid resolution",
                  "Normalize: resample on a coarser grid; use the first difference",
                  "First difference: successive changes counted counterclockwise mod 4",
                  "Code 00112233 -> differences 0, 1, 0, 1, 0, 1, 0, 1 (with wrap-around)",
                  "Minimum circular shift -> shape number 01010101, order 8",
                ],
              },
              {
                q: "Describe polygonal approximations of boundaries: the minimum-perimeter polygon, the merging strategy and the splitting strategy. When is splitting preferred to merging?",
                marks: 14,
                outline: [
                  "MPP: minimum-perimeter polygon through the cellular wall around the boundary",
                  "Merging: walk the boundary fitting a line; when error > epsilon, close the segment",
                  "Merging is fast but can miss vertices of major turns",
                  "Splitting: connect two extreme points; recursively split at the farthest vertex",
                  "Stop when every segment's deviation <= epsilon",
                  "Splitting handles major vertices correctly - preferred for irregular boundaries",
                  "Both approximate; MPP is exact but costlier to compute",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Boundary descriptors",
            body: [
              "Boundary descriptors quantify a shape's contour. The simplest are geometric: boundary length (perimeter - pixel count along the contour, with corner moves weighted sqrt(2)); diameter - the largest distance between any two boundary points, reported with the orientation of the joining line; eccentricity - the ratio of the major to the minor axis of the best-fit ellipse; and curvature - the rate of change of slope, whose high-magnitude points are corners (k-curvature at fixed step k).",
              "Fourier descriptors treat the boundary as a complex sequence s(k) = x(k) + j y(k) and take its DFT; the coefficients are the descriptors, and reconstruction from the first P/2 + 1 low-frequency coefficients recovers the shape's gross form - a square rebuilt from only its lowest four descriptors looks like a circle, the classic demonstration that fine detail lives in high frequencies. The invariance algebra is the exam's table: translation shifts only the DC descriptor F(0) (ignore it); rotation multiplies every descriptor by e^(j theta0), so magnitudes are rotation-invariant; moving the start point circularly shifts the descriptor sequence; scale multiplies all magnitudes equally - normalize by |F(1)|.",
              "For the exam: define perimeter, diameter, eccentricity and curvature in one line each, then state the Fourier descriptor representation and its four invariance adjustments - translation, rotation, starting point, scale. The square-to-circle reconstruction example proves the frequency split. Draw that sketch once - four descriptors rebuilding a blob - and attach the invariance table as four short lines, because 'how do Fourier descriptors handle rotation?' is the standard follow-up worth as many marks as the definitions themselves.",
            ],
            keyTerms: [
              { term: "Perimeter", definition: "Boundary length in pixels; corner moves weighted sqrt(2)." },
              { term: "Diameter", definition: "Maximum distance between two boundary points, plus the line's orientation." },
              { term: "Fourier descriptors", definition: "DFT coefficients of the complex boundary sequence s(k) = x(k) + j y(k)." },
              { term: "Curvature", definition: "Rate of change of boundary slope; extrema locate corners." },
            ],
            diagram: {
              kind: "compare",
              title: "Geometric vs Fourier boundary descriptors",
              caption: "Direct measurements versus transform coefficients - both describe the same contour.",
              left: {
                heading: "Geometric descriptors",
                items: [
                  "Perimeter (sqrt(2) corners)",
                  "Diameter + orientation",
                  "Eccentricity of best-fit ellipse",
                  "Curvature corners (k-curvature)",
                ],
              },
              right: {
                heading: "Fourier descriptors",
                items: [
                  "DFT of s(k) = x(k) + j y(k)",
                  "Low frequencies = gross shape",
                  "Square from 4 descriptors -> circle",
                  "Invariances by DC ignore / magnitudes / shifts",
                ],
              },
            },
            bullets: [
              "Perimeter: contour length; diagonal moves cost sqrt(2).",
              "Diameter: max pairwise boundary distance + joining-line orientation.",
              "Eccentricity: major/minor axis ratio of the fitted ellipse.",
              "Curvature: slope change rate; corner detection via k-curvature.",
              "Fourier descriptors: truncate to P/2 + 1 low-frequency coefficients to rebuild gross shape.",
              "Invariances: ignore F(0) (translation); use magnitudes (rotation); circular shift (start point); divide by |F(1)| (scale).",
            ],
            callout: {
              type: "tip",
              title: "The square-to-circle demo",
              body: "One reconstruction example settles the whole Fourier-descriptor question: rebuild a square boundary from only its four lowest-frequency descriptors and the result is a circle-like blob - proof that gross shape lives low and detail lives high in the descriptor spectrum. Draw the two silhouettes; it takes seconds and scores.",
            },
            table: {
              caption: "Fourier descriptor invariances.",
              headers: ["Transformation", "Effect on descriptors", "Invariance fix"],
              rows: [
                ["Translation", "only F(0) changes", "ignore F(0)"],
                ["Rotation", "multiply by e^(j theta0)", "use magnitudes |F(k)|"],
                ["Start point shift", "circular shift of sequence", "shift to canonical start"],
                ["Scaling", "all magnitudes scale", "divide by |F(1)|"],
              ],
            },
            examQuestions: [
              {
                q: "Explain boundary descriptors: perimeter, diameter, eccentricity and curvature. Then explain Fourier descriptors and state how each is made invariant to translation, rotation, starting point and scaling.",
                marks: 7,
                outline: [
                  "Perimeter: contour length; diagonals weighted sqrt(2)",
                  "Diameter: max pairwise boundary distance + orientation",
                  "Eccentricity: major/minor axis ratio",
                  "Curvature: slope change rate; corners at extrema",
                  "Fourier: DFT of s(k) = x(k) + j y(k)",
                  "Invariances: ignore F(0); use magnitudes; canonical circular shift; divide by |F(1)|",
                ],
              },
              {
                q: "A square boundary's Fourier descriptors are truncated to the four lowest-frequency coefficients and the shape is reconstructed. Explain the result and what it demonstrates about the distribution of shape information across descriptor frequencies.",
                marks: 14,
                outline: [
                  "Reconstruction uses only low-frequency coefficients",
                  "The square's corners are high-frequency content",
                  "Result: a rounded, circle-like silhouette",
                  "Gross shape (size, elongation, symmetry) lives in low frequencies",
                  "Fine detail (corners, texture) lives in high frequencies",
                  "Truncation level is the smoothness dial - more descriptors, sharper corners",
                  "This is the basis of shape simplification and matching by low-frequency comparison",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Regional descriptors",
            body: [
              "Regional descriptors quantify the region itself, not its contour. Topological descriptors are the cheapest: the Euler number E = C - H, connected components minus holes - '8' gives E = -1 and 'm' gives E = 1, and topology is unaffected by stretching. Texture descriptors come in three families: statistical (histogram statistics - mean, standard deviation, smoothness R = 1 - 1/(1 + sigma^2/(L-1)^2), third moment, uniformity, entropy; and the gray-level co-occurrence matrix C(i, j), counting pixel pairs at a fixed offset; it yields homogeneity, correlation, entropy and contrast); spectral (Fourier peaks reveal periodic texture - a bump at frequency u0 means stripes of that spacing); and structural (texture as a grammar of primitive elements and placement rules).",
              "Worked numbers anchor the statistics: a region with sigma = 20 on an 8-bit scale has smoothness R = 1 - 1/(1 + 400/65025) = 0.006 - small, because R approaches 0 for smooth regions and 1 for chaotic ones; the co-occurrence matrix at offset one pixel right on a perfectly constant image has all its mass on the diagonal C(i, i) - maximal homogeneity. Central moments complete the statistical kit: mu2 is the variance, mu3 the skewness, mu4 the flatness.",
              "For the exam: define the Euler number with the '8' example, list the three texture families with one descriptor each, compute the smoothness R for a given sigma, and name the co-occurrence matrix as the second-order statistical tool - four short blocks are the full answer. Pair every family with its question - topological: how connected; statistical: how coarse; spectral: how periodic; structural: what grammar - and rehearse the constant-image GLCM: all mass on the diagonal, maximal homogeneity, zero entropy.",
            ],
            keyTerms: [
              { term: "Euler number", definition: "E = C - H (components minus holes); topological, stretch-invariant. '8' has E = -1." },
              { term: "Smoothness R", definition: "R = 1 - 1/(1 + sigma^2/(L-1)^2); 0 for smooth, 1 for high-variance regions." },
              { term: "GLCM (co-occurrence matrix)", definition: "Counts of pixel pairs at a fixed offset; yields homogeneity, correlation, entropy, contrast." },
              { term: "Spectral texture", definition: "Fourier peaks of the region reveal periodicity and direction of texture." },
            ],
            diagram: {
              kind: "matrix",
              title: "The regional descriptor map",
              caption: "Two questions - what to describe, and how to summarize it - place every descriptor.",
              axes: { x: "Summary style (single number -> spectral)", y: "Scope (boundary -> region)" },
              quadrants: [
                { label: "Perimeter, diameter", note: "boundary, single number" },
                { label: "Fourier descriptors", note: "boundary, spectral" },
                { label: "Euler number, compactness", note: "region, single number" },
                { label: "GLCM texture, spectral", note: "region, spectral" },
              ],
            },
            bullets: [
              "Topological: Euler number E = C - H; '8' -> E = -1, 'm' -> E = 1.",
              "Statistical texture: mean, sigma, smoothness R, third moment, uniformity, entropy.",
              "Worked: sigma = 20 -> R = 1 - 1/(1 + 400/65025) = 0.006 (smooth).",
              "GLCM C(i, j): pairs at a fixed offset; constant image -> all mass on the diagonal.",
              "Spectral texture: Fourier bumps at u0 reveal periodic stripes.",
              "Structural texture: primitives + placement rules - a grammar for texture.",
            ],
            callout: {
              type: "exam",
              title: "Euler number is topology, not geometry",
              body: "Students compute E from areas or perimeters - wrong. It counts components and holes only: stretching, bending and compressing the shape leave E unchanged; tearing a new hole changes it. Quote the '8' example (E = -1) and state the invariance - that is the entire concept.",
            },
            table: {
              caption: "Regional descriptor families.",
              headers: ["Family", "Descriptors", "Question answered"],
              rows: [
                ["Topological", "Euler number C - H", "how connected is the shape?"],
                ["Statistical", "R, moments, entropy; GLCM", "how coarse/directional is the texture?"],
                ["Spectral", "Fourier peaks", "is the texture periodic?"],
                ["Structural", "primitives + rules", "what grammar generates the texture?"],
              ],
            },
            examQuestions: [
              {
                q: "Explain topological descriptors via the Euler number, with the letters '8' and 'm' as worked examples, and state why the Euler number is invariant to stretching. Define smoothness R and compute it for sigma = 20 on an 8-bit image.",
                marks: 7,
                outline: [
                  "E = C - H: connected components minus holes",
                  "'8': C = 1, H = 2 -> E = -1; 'm': C = 1, H = 0 -> E = 1",
                  "Topology ignores stretching/bending - only tearing/pasting changes E",
                  "Smoothness R = 1 - 1/(1 + sigma^2/(L-1)^2)",
                  "sigma = 20: 400/65025 = 0.00615",
                  "R = 1 - 1/1.00615 = 0.0061 - a smooth region",
                ],
              },
              {
                q: "Describe the three families of texture descriptors (statistical, spectral, structural) with one concrete descriptor each. Explain the gray-level co-occurrence matrix and what a constant-image GLCM looks like.",
                marks: 14,
                outline: [
                  "Statistical: histogram statistics - R, moments, entropy",
                  "Second-order statistical: GLCM C(i, j) of pairs at a fixed offset",
                  "GLCM yields homogeneity, correlation, entropy, contrast",
                  "Constant image: every pair matches -> all mass on the diagonal -> maximal homogeneity",
                  "Spectral: Fourier peaks at u0 reveal periodic texture spacing/direction",
                  "Structural: primitives + placement rules - texture as a grammar",
                  "Choice depends on whether texture is random, periodic or structured",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Use of principal components for description",
            body: [
              "Principal components give descriptions their axes. For a region - or a multispectral image with p bands - treat every pixel as a vector of measurements, compute the covariance matrix, and eigendecompose it: the eigenvectors are the principal axes and the eigenvalues the variances along them. The first principal component is the direction of maximum spread - for a single elongated region it is the region's principal axis, so describing the region in PC coordinates makes the description rotation-normalized automatically: the object's own axis becomes the coordinate axis.",
              "Worked 2-band example: a two-band image (say red and infrared) whose covariance is [[4, 3], [3, 4]] has eigenvalues lambda1 = 7 and lambda2 = 1 with principal eigenvector (1, 1)/sqrt(2) - the 45-degree direction. Projecting onto PC1 retains 7/8 = 87.5% of the total variance, so a two-band description compresses to one principal score with modest loss; the second component holds mainly sensor noise common to correlated bands. This is exactly why multispectral compression and decorrelation begin with PCA, and why PCA features make downstream classifiers (5.7) better conditioned.",
              "For the exam: state the pipeline (vectorize, covariance, eigendecompose, project), interpret the first eigenvector as the principal axis, work the [[4,3],[3,4]] numerical with its 87.5% variance share, and close with the two uses - rotation-normalized description and correlated-band decorrelation. Rehearse the eigenvalue arithmetic once - [[4, 3], [3, 4]] gives 7 and 1 with eigenvector (1, 1)/sqrt(2) - and state both uses in one line each: description in the PC frame is rotation-free, and band decorrelation hands classifiers fewer, better-conditioned features.",
            ],
            keyTerms: [
              { term: "Principal axis", definition: "The first eigenvector of the region/band covariance - the direction of maximum variance." },
              { term: "Eigenvalue", definition: "Variance along its eigenvector; the explained variance share." },
              { term: "PC coordinates", definition: "Describing a region along its principal axes - rotation-normalized by construction." },
              { term: "Band decorrelation", definition: "PCA of multispectral imagery removes inter-band correlation; PC1 carries most signal." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PCA for description",
              caption: "Vectorize, covary, eigendecompose, project - the object's own axis becomes the coordinate axis.",
              stages: [
                { label: "Vectorize", note: "pixels as measurement vectors (bands or coordinates)" },
                { label: "Covariance matrix", note: "how measurements co-vary" },
                { label: "Eigendecompose", note: "axes sorted by eigenvalue" },
                { label: "Project", note: "Z = X_centred * Wd - PC coordinates" },
                { label: "Describe", note: "rotation-normalized, decorrelated features" },
              ],
            },
            bullets: [
              "Pixels as vectors -> covariance matrix -> eigenvectors = principal axes.",
              "PC1 is the region's elongation axis - descriptions in PC frame are rotation-normalized.",
              "Worked covariance [[4, 3], [3, 4]]: eigenvalues 7 and 1.",
              "Principal eigenvector (1, 1)/sqrt(2) - the 45-degree direction.",
              "PC1 retains 7/8 = 87.5% of total variance.",
              "Correlated multispectral bands decorrelate: PC1 = signal, PC2 = shared noise.",
            ],
            callout: {
              type: "tip",
              title: "Rotate to the object's frame",
              body: "The non-obvious use: after projecting a region onto its principal axes, its description no longer depends on the object's orientation in the image - PC1 is always 'along the object'. Matching two rotated versions of one shape becomes coordinate-wise comparison of PC-frame descriptors.",
            },
            table: {
              caption: "The worked 2-band PCA.",
              headers: ["Quantity", "Value", "Meaning"],
              rows: [
                ["Covariance", "[[4, 3], [3, 4]]", "correlated bands"],
                ["Eigenvalues", "7 and 1", "variance along each axis"],
                ["PC1 eigenvector", "(1, 1)/sqrt(2)", "45-degree principal axis"],
                ["Variance retained by PC1", "7/8 = 87.5%", "one score replaces two bands"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the use of principal components for region description. Work the 2-band example with covariance [[4, 3], [3, 4]]: find the eigenvalues, the principal axis, and the fraction of variance retained by PC1.",
                marks: 7,
                outline: [
                  "Pixels as measurement vectors; covariance of the bands",
                  "Eigendecomposition: eigenvalues 7 and 1",
                  "PC1 eigenvector = (1, 1)/sqrt(2) - the 45-degree direction",
                  "PC1 variance share = 7/(7+1) = 87.5%",
                  "Projection onto PC1 compresses 2 bands to 1 score",
                  "PC2 holds mostly the correlated noise remainder",
                ],
              },
              {
                q: "Why do descriptions in principal-component coordinates become rotation-normalized, and why is PCA applied to multispectral images before classification? Relate both to the eigenvector/eigenvalue meaning.",
                marks: 14,
                outline: [
                  "PC1 is the direction of maximum spread = the object's own axis",
                  "Describing along PC1/PC2 fixes the frame to the object, not the image",
                  "Two rotated copies of a shape share PC-frame descriptors",
                  "Multispectral bands are highly correlated (red vs IR)",
                  "Covariance eigendecomposition decorrelates them",
                  "PC1 carries most signal; later PCs carry shared sensor noise",
                  "Classifiers downstream see fewer, better-conditioned features",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Introduction to morphology",
            body: [
              "Morphology is set algebra on shape: a binary image is a set A of foreground pixels, and a structuring element B (a small set with a defined origin) probes it. Erosion A minus B = {z | (B)_z is a subset of A} - points where B fits entirely inside A: it shrinks objects and removes thin bridges and small components. Dilation A plus B = {z | the reflection of B at z touches A} - it grows objects, fills gaps and joins nearby components. Worked: a 4 x 4 square eroded by a 3 x 3 square SE leaves a 2 x 2 core; dilating that core with the same SE restores the 4 x 4 square.",
              "Opening and closing compose the two into useful operations. Opening A open B = (A minus B) plus B: erode then dilate - smooths contours from the inside, breaks thin isthmuses, removes small protrusions and tiny objects. Closing A close B = (A plus B) minus B: dilate then erode - smooths from the outside, fuses narrow breaks, fills small holes and gulfs. The duality (A open B)^c = A^c plus (B reflected) is the standard algebra line. Opening and closing are idempotent - repeating them changes nothing, unlike erosion/dilation which keep acting.",
              "For the exam: define both primitive operations set-theoretically, work the 4 x 4 square example, define opening and closing by their composite constructions with their effects, and state duality plus idempotence - those are the six marks in a 7-mark morphology introduction. Rehearse the 4 x 4 example until automatic and add the algebra line - (A∘B)^c = A^c ⊕ B-hat - because the duality question and the idempotence question are the two standard follow-ups to any morphology definition.",
            ],
            keyTerms: [
              { term: "Erosion A⊖B", definition: "Points where the translated SE fits entirely inside A - shrinks and removes thin structures." },
              { term: "Dilation A⊕B", definition: "Points where the reflected SE touches A - grows, fills gaps, joins components." },
              { term: "Opening A∘B", definition: "Erode then dilate - removes small objects and protrusions; breaks isthmuses." },
              { term: "Closing A•B", definition: "Dilate then erode - fills small holes and gulfs; fuses narrow breaks." },
            ],
            diagram: {
              kind: "compare",
              title: "Erosion vs dilation",
              caption: "The SE fits (erode) versus the SE touches (dilate) - the whole of morphology rests on this pair.",
              left: {
                heading: "Erosion A⊖B",
                items: [
                  "(B)_z subset of A",
                  "Shrinks objects",
                  "4 x 4 square with 3 x 3 SE -> 2 x 2 core",
                  "Kills thin bridges and small components",
                ],
              },
              right: {
                heading: "Dilation A⊕B",
                items: [
                  "reflected (B)_z intersects A",
                  "Grows objects",
                  "2 x 2 core with 3 x 3 SE -> back to 4 x 4",
                  "Fills gaps, joins nearby parts",
                ],
              },
            },
            bullets: [
              "Binary image = set A of foreground pixels; SE B has a declared origin.",
              "Erosion: SE fits inside A - shrink, remove thin bridges.",
              "Dilation: SE touches A - grow, fill, join.",
              "Worked: 4 x 4 square eroded by 3 x 3 SE -> 2 x 2; redilated -> 4 x 4.",
              "Opening (erode then dilate): smooths inside, removes small objects/protrusions.",
              "Closing (dilate then erode): smooths outside, fills holes and gulfs.",
            ],
            callout: {
              type: "warning",
              title: "Foreground is 1 - say it, then erode",
              body: "The most common morphology error is eroding the background: if your image stores objects as 0, erosion grows your objects. State 'foreground pixels = 1' before any set operation, and remember the SE's origin - a SE with an off-centre origin shifts the result, it does not just resize it.",
            },
            table: {
              caption: "The four core operations.",
              headers: ["Operation", "Construction", "Effect"],
              rows: [
                ["Erosion A⊖B", "SE fits inside A", "shrink; remove thin/small"],
                ["Dilation A⊕B", "SE touches A", "grow; fill gaps; join"],
                ["Opening A∘B", "erode then dilate", "remove small objects; break isthmuses"],
                ["Closing A•B", "dilate then erode", "fill holes/gulfs; fuse breaks"],
              ],
            },
            examQuestions: [
              {
                q: "Define erosion and dilation set-theoretically. Work the example of a 4 x 4 solid square with a 3 x 3 square structuring element for both operations, and state what each does to thin bridges and small holes.",
                marks: 7,
                outline: [
                  "A⊖B = {z | (B)_z subset of A} - SE fits entirely",
                  "A⊕B = {z | reflected (B)_z intersects A} - SE touches",
                  "4 x 4 square, 3 x 3 SE: erosion leaves the 2 x 2 core",
                  "Dilation of the 2 x 2 core restores the 4 x 4 square",
                  "Erosion removes bridges thinner than the SE",
                  "Dilation fills gaps smaller than the SE",
                ],
              },
              {
                q: "Define opening and closing as compositions of erosion and dilation. State their effects on contours, small objects, isthmuses and holes, and explain duality and idempotence.",
                marks: 14,
                outline: [
                  "Opening A∘B = (A⊖B)⊕B - erode, then dilate",
                  "Smooths contours from inside; removes small objects and protrusions",
                  "Breaks thin isthmuses",
                  "Closing A•B = (A⊕B)⊖B - dilate, then erode",
                  "Smooths from outside; fills small holes and gulfs; fuses narrow breaks",
                  "Duality: (A∘B)^c = A^c ⊕ B-hat",
                  "Both are idempotent - repeating changes nothing (unlike erosion/dilation)",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Basic morphological algorithms",
            body: [
              "Algorithms compose the four core operations into tasks. Boundary extraction: beta(A) = A - (A⊖B) - the set difference between the object and its erosion is exactly the boundary ring; with a 3 x 3 SE the ring is one pixel thick. Hole filling: start X0 with a 1 inside the hole, iterate Xk = (Xk-1 ⊕ B) intersect A^c until stable - dilation confined to the background floods the hole but cannot leak outside the object; the filled result is Xc union A.",
              "Connected components: seed one pixel of a component, iterate Yk = (Yk-1 ⊕ B) intersect A until stable - the same confined-dilation idea, growing only inside the component. The hit-or-miss transform uses a composite SE (B1 for foreground, B2 for background) to detect exact local configurations - it is the engine of thinning (A thin B = A - hit-or-miss sequences) and skeletonization, which reduce shapes to one-pixel-wide medians while preserving connectivity and topology. Worked: boundary extraction of the 4 x 4 square with a 3 x 3 SE: erosion = the 2 x 2 core, A minus core = the 12 boundary pixels.",
              "For the exam: give the formula for each algorithm, identify which all the iterative ones share (dilation confined by intersection with a constraint set), work the boundary example, and name thinning/skeletonization as hit-or-miss-based - the confined-dilation observation is the insight that ties the section together. Rehearse the 4 x 4 boundary computation - erosion 2 x 2, difference 12 pixels - and add the termination note: every confined-dilation iteration stops when the set stops changing, Xk = Xk-1, which is also the phrase examiners look for in the fill and component algorithms.",
            ],
            keyTerms: [
              { term: "Boundary extraction", definition: "beta(A) = A - (A⊖B); the object minus its erosion is the ring." },
              { term: "Hole filling", definition: "Xk = (Xk-1 ⊕ B) ∩ A^c from a seed inside the hole; iterate to stability." },
              { term: "Connected components", definition: "Yk = (Yk-1 ⊕ B) ∩ A from a seed pixel - confined dilation isolates one component." },
              { term: "Hit-or-miss transform", definition: "Composite SE (B1, B2) matching exact foreground/background configurations; basis of thinning." },
            ],
            diagram: {
              kind: "fork",
              title: "Which morphological algorithm?",
              caption: "Every task is the same four operations, differently confined.",
              start: "Binary task on shape A",
              branches: [
                { label: "Outline the shape", outcome: "beta(A) = A - (A⊖B) - one-pixel ring", good: true },
                { label: "Fill interior holes", outcome: "confined dilation from a seed: (X ⊕ B) ∩ A^c", good: true },
                { label: "Isolate one blob", outcome: "confined dilation: (Y ⊕ B) ∩ A - connected component", good: true },
                { label: "Thin to a skeleton", outcome: "hit-or-miss based thinning/skeletonization", good: true },
              ],
            },
            bullets: [
              "Boundary: beta(A) = A - (A⊖B); 3 x 3 SE gives a 1-pixel ring.",
              "Worked: 4 x 4 square - erosion 2 x 2, boundary = the 12 outer pixels.",
              "Hole filling: Xk = (Xk-1 ⊕ B) ∩ A^c; result = X-final union A.",
              "Connected components: Yk = (Yk-1 ⊕ B) ∩ A from a seed pixel.",
              "Shared idea: dilation confined by intersection with a constraint set.",
              "Hit-or-miss (B1 for 1s, B2 for 0s) drives thinning and skeletonization.",
            ],
            callout: {
              type: "tip",
              title: "Intersection is the guardrail",
              body: "Every iterative morphology algorithm is plain dilation plus a guardrail: intersect with A^c (background) to fill holes without leaking, or with A (foreground) to grow components without merging. Name the constraint set in each formula - the examiner checks that intersection symbol.",
            },
            codeExample: {
              language: "python",
              caption: "morph.py - erosion, boundary ring, hole filling",
              code: `import numpy as np
from scipy.ndimage import binary_erosion, binary_dilation

A = np.ones((5, 5), dtype=bool); A[2, 2] = False   # square with a hole
se = np.ones((3, 3), dtype=bool)                   # structuring element

core = binary_erosion(A, se)
print(core.sum())                                  # 9 - the 3 x 3 core
print((A & ~core).sum())                           # 16 - boundary ring beta(A)

X = np.zeros_like(A); X[2, 2] = True               # seed inside the hole
for _ in range(10):
    Xn = binary_dilation(X, se) & ~A               # confined to background A^c
    if (Xn == X).all(): break                      # stable -> stop
    X = Xn
print((A | X)[2, 2])                               # True - hole filled`,
            },
            examQuestions: [
              {
                q: "Derive the morphological boundary extraction algorithm and work it for a 4 x 4 solid square with a 3 x 3 structuring element. How thick is the resulting boundary and why?",
                marks: 7,
                outline: [
                  "beta(A) = A - (A⊖B)",
                  "Erosion of the 4 x 4 square by the 3 x 3 SE = 2 x 2 core",
                  "Set difference: 16 - 4 = 12 pixels form the ring",
                  "The ring is 1 pixel thick",
                  "Thickness follows from the SE size - larger SEs trace thicker rings",
                  "Foreground must be declared as 1 before computing",
                ],
              },
              {
                q: "Explain hole filling and connected-component extraction as confined dilations. Write both update equations, explain what the intersection contributes, and state the termination condition of each iteration.",
                marks: 14,
                outline: [
                  "Hole filling: X0 = seed inside the hole; Xk = (Xk-1 ⊕ B) ∩ A^c",
                  "Intersection with A^c confines growth to the background region",
                  "Floods the hole but cannot leak outside the object",
                  "Result: X-final union A (filled object)",
                  "Components: Y0 = seed pixel; Yk = (Yk-1 ⊕ B) ∩ A",
                  "Intersection with A confines growth to that component - no merging",
                  "Both terminate when Xk = Xk-1 (Yk = Yk-1) - the iteration is stable",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Patterns, pattern classes and decision-theoretic recognition",
            body: [
              "Recognition assigns a description to a label: a pattern is the feature vector x = (x1, ..., xn) produced by Unit V's descriptors, and a pattern class is the set of patterns sharing a label omega. Decision-theoretic methods decide by numbers. The minimum distance classifier stores one prototype per class - the class mean m_j - and assigns x to the nearest: minimize ||x - m_j||; the decision boundaries are lines (perpendicular bisectors), optimal for compact, isotropic classes. Worked: means m1 = (1, 1), m2 = (4, 4); the point (3.5, 2) has distance sqrt(6.25 + 1) = 2.69 to class 1 and sqrt(0.25 + 4) = 2.06 to class 2 - assigned to class 2.",
              "The Bayes classifier is the probabilistic optimum: assign x to the class maximizing the posterior P(omega_j | x), which by Bayes' theorem is proportional to the likelihood p(x | omega_j) times the prior P(omega_j). With Gaussian class densities, the discriminant functions become quadratic in x - ellipsoidal boundaries that adapt to each class's covariance - and minimize the probability of classification error when the models are right. The exam contrast: minimum distance is cheap and assumes spherical classes; Bayes uses covariance and priors and is error-optimal under its density assumption.",
              "For the answer: define pattern and pattern class, write the minimum-distance rule with the worked (3.5, 2) computation, write the Bayes posterior rule, and state the Gaussian-quadratic consequence - then close with the assumption each method makes and when it breaks (scattered classes defeat minimum distance; wrong densities defeat Bayes). Sketch the two boundaries - straight lines for minimum distance, ellipses for Gaussian Bayes - because the boundary shapes make the assumption difference visible at a glance and cost only seconds to draw.",
            ],
            keyTerms: [
              { term: "Pattern", definition: "The feature vector x = (x1, ..., xn) describing an object." },
              { term: "Pattern class", definition: "The set of patterns sharing a label omega (e.g. 'defective', 'normal')." },
              { term: "Minimum distance classifier", definition: "Assign x to the nearest class prototype (mean m_j); linear boundaries." },
              { term: "Bayes classifier", definition: "Maximize P(omega_j | x) proportional to p(x | omega_j) P(omega_j); Gaussian densities give quadratic boundaries." },
            ],
            diagram: {
              kind: "flow",
              title: "Decision-theoretic recognition",
              caption: "Descriptors in, distances or posteriors computed, label out.",
              steps: [
                { label: "Feature vector x", note: "from Unit V descriptors" },
                { label: "Prototypes / models", note: "class means m_j or Gaussian parameters" },
                { label: "Score every class", note: "distance ||x - m_j| or posterior P(omega_j|x)" },
                { label: "Decide", note: "argmin distance / argmax posterior" },
                { label: "Label omega", note: "the recognized class" },
              ],
            },
            bullets: [
              "Pattern = feature vector; pattern class = labelled set of patterns.",
              "Minimum distance: minimize ||x - m_j||; boundaries are perpendicular bisectors.",
              "Worked: m1 = (1,1), m2 = (4,4); x = (3.5, 2) -> distances 2.69 vs 2.06 -> class 2.",
              "Bayes: argmax P(omega_j | x) ~ p(x | omega_j) P(omega_j).",
              "Gaussian class densities -> quadratic discriminant surfaces.",
              "Assumptions: minimum distance wants compact isotropic classes; Bayes wants correct densities.",
            ],
            callout: {
              type: "exam",
              title: "Boundaries betray the assumption",
              body: "The one-line contrast: minimum distance yields straight-line boundaries (it only knows means); Bayes with Gaussian densities yields quadratic ones (it knows covariances too). If an exam picture shows curved class boundaries, minimum distance is the wrong answer - say why in terms of what each classifier models.",
            },
            codeExample: {
              language: "python",
              caption: "mindist.py - the minimum distance decision",
              code: `import numpy as np

m1, m2 = np.array([1.0, 1.0]), np.array([4.0, 4.0])   # class prototypes
x = np.array([3.5, 2.0])                              # unknown pattern

d1 = np.linalg.norm(x - m1)                           # sqrt(7.25) = 2.69
d2 = np.linalg.norm(x - m2)                           # sqrt(4.25) = 2.06
print(round(d1, 2), round(d2, 2), "-> class", 1 if d1 < d2 else 2)
# Bayes upgrade: replace means with Gaussian densities
# and decide by argmax p(x|w)*P(w) - quadratic boundaries result`,
            },
            examQuestions: [
              {
                q: "Define pattern and pattern class. Explain the minimum distance classifier with class prototypes, and classify the point (3.5, 2) against class means m1 = (1, 1) and m2 = (4, 4), showing all distances.",
                marks: 7,
                outline: [
                  "Pattern: feature vector x = (x1, ..., xn) from description",
                  "Pattern class: labelled set of similar patterns",
                  "Rule: assign to argmin ||x - m_j||",
                  "d1 = sqrt((3.5-1)^2 + (2-1)^2) = sqrt(7.25) = 2.69",
                  "d2 = sqrt((3.5-4)^2 + (2-4)^2) = sqrt(4.25) = 2.06",
                  "2.06 < 2.69 -> class 2",
                  "Decision boundary: perpendicular bisector of the two means",
                ],
              },
              {
                q: "Explain the Bayes classifier: the posterior rule, the role of priors and likelihoods, and why Gaussian class densities produce quadratic decision boundaries. Contrast it with the minimum distance classifier on assumptions and cost.",
                marks: 14,
                outline: [
                  "Posterior: P(omega_j | x) = p(x | omega_j) P(omega_j) / p(x)",
                  "Decide argmax over classes; p(x) is shared - drop it",
                  "Priors weight class frequency; likelihoods carry the class model",
                  "Gaussian p(x | omega_j) -> log-discriminant quadratic in x",
                  "Covariances shape elliptical boundaries; equal covariances collapse to linear",
                  "Minimum distance: means only, linear boundaries, cheapest",
                  "Bayes is error-optimal if densities are right; costlier and model-dependent",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Structural methods",
            body: [
              "Structural recognition judges relationships, not distances: an object is a composition of primitives, and recognition checks that the composition matches. String matching represents shapes as symbol strings (chain-code-derived strings, or primitive labels) and compares them position-wise: with a penalty a for matches and b for mismatches, the similarity of two equal-length strings rises as mismatches fall. Worked: strings 0 1 0 1 and 0 1 1 1 differ in one position - one mismatch out of four, a 75% similarity. For shape numbers of the same order, the standard similarity metric counts differing terms directly.",
              "Graph matching generalizes to relational structure: nodes are primitives or regions, edges are relationships (adjacency, containment); recognition becomes a search for an isomorphism (or best partial match) between the object graph and a model graph, scored by node-label matches and edge matches. This captures what feature vectors cannot: 'the handle is attached to the top of the cup' is a graph fact. The cost is combinatorial - exact graph isomorphism is expensive, so practical systems use approximate matching or restrict the graph.",
              "For the exam: contrast decision-theoretic (numeric features, geometric decision rules) with structural (primitives + relations, symbolic matching), work the string example, and state where each wins - decision-theoretic for measurable, noisy features; structural for shape composition and relational layout. Rehearse the string example - 0101 versus 0111, one mismatch, 75% similarity - and attach the cost caveat: exact graph isomorphism is combinatorial, so practical systems approximate or restrict the graph, which is the honest limitation examiners expect you to volunteer.",
            ],
            keyTerms: [
              { term: "Structural recognition", definition: "Match compositions of primitives and relations, not numeric feature distances." },
              { term: "String matching", definition: "Compare symbol strings position-wise; similarity penalizes mismatches." },
              { term: "Shape number matching", definition: "Compare shape numbers of the same order; differing terms measure dissimilarity." },
              { term: "Graph matching", definition: "Nodes = primitives/regions, edges = relations; find the best isomorphism with a model graph." },
            ],
            diagram: {
              kind: "compare",
              title: "Decision-theoretic vs structural recognition",
              caption: "Numbers versus relationships - the two families answer different questions.",
              left: {
                heading: "Decision-theoretic",
                items: [
                  "Feature vectors of measurements",
                  "Distances / posteriors decide",
                  "Linear or quadratic boundaries",
                  "Wins on noisy measurable features",
                ],
              },
              right: {
                heading: "Structural",
                items: [
                  "Primitives + relations (strings, graphs)",
                  "Symbolic matching decides",
                  "Handles composition: handle-on-cup",
                  "Wins on relational layout; costlier",
                ],
              },
            },
            bullets: [
              "Structural view: object = composition of primitives with relations.",
              "String matching: position-wise compare; a for match, b for mismatch.",
              "Worked: 0101 vs 0111 - one mismatch in four -> 75% similarity.",
              "Shape numbers of the same order: count differing terms as the distance.",
              "Graph matching: nodes/edges carry primitives and adjacency; seek best isomorphism.",
              "Graphs capture relations feature vectors cannot; cost is combinatorial.",
            ],
            callout: {
              type: "exam",
              title: "Say what the feature vector cannot",
              body: "The discriminator sentence examiners want: a feature vector can say 'round, 3 holes, area 40' but not 'the handle is attached above the spout' - only structural representation stores relations. Use that sentence to justify structural methods, then admit the cost (combinatorial matching) for balance.",
            },
            table: {
              caption: "Structural matching tools.",
              headers: ["Tool", "Representation", "Match criterion"],
              rows: [
                ["String matching", "symbol string", "position-wise mismatches"],
                ["Shape number matching", "normalized first difference", "differing terms (same order)"],
                ["Graph matching", "nodes + relational edges", "isomorphism / best partial match"],
              ],
            },
            examQuestions: [
              {
                q: "Explain structural recognition methods: string matching and graph matching. Compute the similarity of the strings 0 1 0 1 and 0 1 1 1 under position-wise matching, and state what graph matching captures that string matching cannot.",
                marks: 7,
                outline: [
                  "Structural: object = primitives + relations; match symbolically",
                  "String matching: compare position-wise; penalize mismatches",
                  "0101 vs 0111: one mismatch in four positions",
                  "Similarity = 3/4 = 75%",
                  "Shape numbers: same order required; differing terms = distance",
                  "Graphs: nodes = primitives/regions, edges = adjacency/containment",
                  "Graphs capture relations (handle attached to top) strings cannot",
                ],
              },
              {
                q: "Contrast decision-theoretic and structural object recognition on representation, matching rule, computational cost and suitable applications. Give one task where each family is the right choice.",
                marks: 14,
                outline: [
                  "Decision-theoretic: numeric feature vectors; distance/posterior rules",
                  "Cheap scoring; linear/quadratic boundaries; needs measurable features",
                  "Structural: primitives + relations; symbolic string/graph matching",
                  "Captures composition and relational layout",
                  "Cost: graph matching is combinatorial; strings cheaper",
                  "Right choice (decision-theoretic): character recognition on measured features",
                  "Right choice (structural): scene analysis where part relations matter",
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
        { topic: "Histogram equalization + spatial filters (Unit II)", weight: "≈ 12-14 marks", note: "The equalization table and the Laplacian masks are near-guaranteed questions." },
        { topic: "Unit I fundamentals: sampling, quantization, adjacency, distances", weight: "≈ 8-10 marks", note: "Definitions plus one storage numerical; m-adjacency example earns the top marks." },
        { topic: "Frequency-domain filtering + homomorphic (Unit III)", weight: "≈ 10-12 marks", note: "Write all three transfer functions; the ILPF-rings line is the discriminator." },
        { topic: "Restoration: noise models, inverse/Wiener/CLS (Unit III)", weight: "≈ 10-12 marks", note: "Walk the Wiener K-limits with two worked (|H|, K) pairs." },
        { topic: "Compression: redundancies, entropy, Huffman, JPEG (Unit IV)", weight: "≈ 10-12 marks", note: "Entropy numericals and the JPEG pipeline diagram come every season." },
        { topic: "Segmentation: edges, linking, thresholding, regions (Unit IV)", weight: "≈ 10-12 marks", note: "Sobel computation, Hough voting and Otsu's objective are the trio to rehearse." },
        { topic: "Morphology + descriptors + recognition (Unit V)", weight: "≈ 8-10 marks", note: "Erosion/dilation tables, Euler number, and minimum-distance vs Bayes." },
        { topic: "Short-notes pool: chain codes, watershed, notch filters, geometric transformations", weight: "≈ 4-6 marks", note: "Quick definitions - keep one worked example for each." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for numericals and past papers. Every algorithm here is cheap to implement in numpy - a 20-line script each for equalization, convolution, FFT filtering and morphology makes the formulas permanent.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I fundamentals", tasks: ["Origins, fields, fundamental steps - one page of notes", "Sampling/quantization storage numericals", "4/8/m-adjacency with the triangle example", "D4, D8, Euclidean on two worked pixel pairs"] },
        { week: "Week 2", focus: "Unit II - spatial enhancement", tasks: ["Gray-level transforms with gamma numericals", "Histogram equalization table for the 64 x 64 example", "Mean vs median vs Laplacian masks by hand", "The six-stage combined enhancement pipeline"] },
        { week: "Week 3", focus: "Unit III - frequency domain", tasks: ["1-D DFT worked example and the six-step filtering procedure", "ILPF/BLPF/GLPF transfer functions + ringing ranking", "Homomorphic pipeline and the gamma gains", "Notch filters and the symmetry rule"] },
        { week: "Week 4", focus: "Unit III - restoration", tasks: ["Degradation model + six noise models table", "Mean/order-statistic/adaptive filters by noise type", "Inverse vs Wiener with the K-limit reading", "CLS constraint and geometric mean blend"] },
        { week: "Week 5", focus: "Unit IV - compression + segmentation", tasks: ["Three redundancies, C/R numericals, entropy calculation", "Huffman tree + average length vs entropy", "JPEG pipeline with the lossy stages marked", "Sobel/Hough/Otsu numericals; region growing and watershed"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Chain codes to shape numbers; Fourier descriptor invariances", "Morphology: erosion/dilation/opening/closing + algorithms", "Minimum distance vs Bayes worked example", "Two full past papers under time pressure"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Draw the block diagram first for any 'explain' question - degradation/restoration, homomorphic filtering, the JPEG pipeline. The diagram is half the marks.",
        "For histogram equalization, show every column: r_k, n_k, p(r_k), CDF, s_k. The CDF column is where the marks live.",
        "State the mask before you convolve - and declare the sign convention for the Laplacian in your first line (center-positive adds, center-negative subtracts).",
        "For Wiener filtering, write the formula, walk the K = 0 and large-K limits, then plug two (|H|, K) pairs. Three lines, full marks.",
        "For morphology, declare 'foreground = 1' and the structuring element's origin before any set operation.",
        "Entropy numericals: use log2, not ln, and state the units - bits/symbol. Compare your Huffman length against H before finishing.",
        "Connectivity questions: write the set V explicitly, then test each adjacency against it.",
        "Time-box: 7 marks <= 12 minutes, 14 marks <= 22 minutes; do the numericals first while fresh.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing sampling (spatial grid) with quantization (gray levels) - both are digitization but they answer different questions.",
        "Swapping D4 and D8 formulas - the city block is the sum |x-s| + |y-t|, the chessboard is the max.",
        "Sign error in the Laplacian: with center-negative masks you subtract from f; with center-positive you add. Fixing the convention late doubles the error.",
        "Claiming the ideal lowpass filter is practical - it rings badly; Butterworth order 2 or Gaussian is the usable choice.",
        "Applying inverse filtering when |H| is small - state the Wiener escape and the K ratio instead.",
        "Describing Otsu as 'histogram smoothing' - it maximizes between-class variance w0 w1 (mu0 - mu1)^2.",
        "In morphology, eroding without declaring the foreground - if objects are 0, erosion grows them instead of shrinking.",
        "Forgetting notch symmetry - a single asymmetric notch leaves a complex spectrum and a distorted restoration.",
      ],
    },
  ],
};
