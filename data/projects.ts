export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "mechanical" | "automotive" | "industrial" | "product" | "research";
  shortDescription: string;
  overview: string;
  role: string;
  problem: string;
  solution: string;
  tools: string[];
  outcomes: {
    description: string;
    impact?: string;
  }[];
  image: string;
  images?: string[];
  featured: boolean;
  year: number;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "proj-001",
    slug: "alstom-ax-ceiling-system-architecture",
    title: "Alstom AX Modular Ceiling System — 36 Configurations",
    category: "mechanical",
    shortDescription:
      "Led end-to-end 3D ceiling design for Segment-A and Segment-B AX products, delivering 36 configurations across European and North American rail platforms with CATIA V5/V6 and Enovia PLM4A.",
    overview:
      "At Alstom, led the development of modular ceiling architecture for AX products across multiple rolling stock platforms. Delivered Segment-B (20 configs: Adesia EU/UK, Coradia Multilevel, Over Flush) and Segment-A (16 configs: MAS/LRV, Urban HC/MC, NAM TTC) ceiling systems from master sections through to manufacturing drawings compliant with CDSI standards.",
    role: "CAD Engineer — responsible for 3D ceiling design, master sections, 2D drawing generation, modular handrail/handhold design, and engineering studies",
    problem:
      "Each train platform required ceiling designs adapted to varying structural, layout, and lighting constraints across EU/UK and North American specifications. Managing roofing variants and maintaining CDSI standards compliance while minimising platform-specific redesign effort was the core challenge.",
    solution:
      "Developed ceiling configurations from master sections using CATIA V5/V6 with Enovia PLM4A. Standardised ceiling architecture across platforms to reduce redesign. Performed stackup and fit analysis for handrails/handholds, conducted weight analysis across all segments, standardised wire routing, and executed fit-form-function validation.",
    tools: ["CATIA V5/V6", "Enovia PLM4A", "Teamcenter PLM", "GD&T", "Stackup Analysis", "CDSI Standards"],
    outcomes: [
      {
        description: "Segment-B: 20 ceiling configurations delivered across Adesia, Coradia Multilevel, and Over Flush platforms",
        impact: "Modular adaptability across diverse EU/UK and NAM customer specifications",
      },
      {
        description: "Segment-A: 16 configurations for MAS/LRV, Urban HC/MC, and NAM TTC platforms",
        impact: "Standardised ceiling architecture reducing platform-specific redesign effort",
      },
      {
        description: "Weight analysis, wire routing standardisation, and fit-form-function validation across all segments",
        impact: "Engineering studies completed on time with zero CDSI non-conformances",
      },
      {
        description: "Manufacturing and assembly drawings produced aligned with 3D models",
        impact: "Full fabrication clarity and regulatory compliance",
      },
    ],
    image: "/images/projects/alstom-ceiling.jpg",
    featured: true,
    year: 2025,
  },
  {
    id: "proj-002",
    slug: "ford-transmission-driveline-design",
    title: "Ford Transmission & Driveline Engineering",
    category: "automotive",
    shortDescription:
      "Performed fault diagnosis, stackup analysis, and oil volume studies on transmission assemblies at Ford Motor Company, managing full BOM lifecycle from concept to engineering release.",
    overview:
      "Deputed to Ford Motor Company (Chennai) via Actalent to support transmission and driveline design. Managed design corrections, tolerance analysis, oil volume studies, and BOM lifecycle. Utilised Teamcenter, WERS, and CATIA V5 to ensure manufacturing and functional compliance.",
    role: "Design Engineer — fault diagnosis, stackup analysis, oil volume studies, concept design, BOM management, DPA support",
    problem:
      "Transmission part assemblies had tolerance and fit issues causing rework cycles. Housing designs needed validation for oil volume and structural compliance. BOM management across multiple engineering stages required systematic lifecycle control.",
    solution:
      "Performed systematic fault diagnosis to identify root causes and drove design corrections. Executed stackup analysis and oil volume studies for housing validation. Managed full BOM lifecycle in Teamcenter and WERS. Supported DPA audits and maintained design data through engineering release.",
    tools: ["CATIA V5", "Teamcenter PLM", "WERS", "GD&T", "Stackup Analysis", "Oil Volume Analysis", "MS Office Suite"],
    outcomes: [
      {
        description: "Fault diagnosis and design corrections on transmission part assemblies",
        impact: "Reduced rework cycles and manufacturing non-conformances",
      },
      {
        description: "Stackup Analysis and Oil Volume Studies for transmission housing designs",
        impact: "Validated functional and manufacturing compliance",
      },
      {
        description: "Full BOM lifecycle management from concept through engineering release",
        impact: "Consistent data integrity across Teamcenter and WERS",
      },
    ],
    image: "/images/projects/ford-transmission.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "proj-003",
    slug: "marine-gearbox-shanthi-gears",
    title: "Marine Gearbox with Integrated Clutch — R&D",
    category: "industrial",
    shortDescription:
      "Designed a marine gearbox with integrated clutch system for fisherman boat engines at Shanthi Gears (Murugappa Group), remastering 30% of existing design and developing the remainder through internal R&D.",
    overview:
      "Led the full R&D and design cycle of a marine gearbox with integrated clutch system at Shanthi Gears Ltd., Coimbatore. Responsible for gear calculations, shaft and bearing selection, casting design, and BOM management through prototype and production phases.",
    role: "Design Engineer Trainee — gear calculations, shaft/bearing selection using KissSoft/KissSys, casting design, BOM management",
    problem:
      "The fisherman boat engine application required a compact marine gearbox with an integrated clutch that met specific torque, durability, and corrosion resistance requirements. Existing gearbox architecture needed significant rework alongside new component development.",
    solution:
      "Remastered 30% of the existing gearbox design and developed remaining components from ground up. Performed spur, helical, and bevel gear calculations using KissSoft and shaft/bearing selection using KissSys. Created casting designs for fabrication and managed BOMs for prototype and production phases.",
    tools: ["KissSoft", "KissSys", "CATIA V5", "GD&T", "Casting Design", "MS Office Suite"],
    outcomes: [
      {
        description: "Full marine gearbox with integrated clutch system designed from R&D through prototype",
        impact: "Successfully delivered for fisherman boat engine application",
      },
      {
        description: "Gear calculations (spur, helical, bevel) and shaft/bearing selection completed",
        impact: "Validated using KissSoft and KissSys for functional compliance",
      },
      {
        description: "Casting designs and BOM management through prototype and production phases",
        impact: "Prototype completed on schedule with no design changes required post-casting",
      },
    ],
    image: "/images/projects/marine-gearbox.jpg",
    featured: false,
    year: 2022,
  },
  {
    id: "proj-004",
    slug: "automated-toilet-cleaner-patent",
    title: "Automated Toilet Cleaner — Published Patent",
    category: "product",
    shortDescription:
      "Developed a self-cleaning and sanitising toilet bowl mechanism with minimal human intervention using advanced scrubbing and disinfecting systems. Patent No. 2020-41042046, published October 2020.",
    overview:
      "Final year project at KPR Institute of Engineering and Technology. Designed an automated toilet cleaning mechanism incorporating motorised scrubbing and chemical disinfection systems for hygienic maintenance with minimal human contact. Resulted in a published Indian patent.",
    role: "Lead Designer — mechanism design, fabrication oversight, patent application",
    problem:
      "Manual toilet cleaning involves direct human contact with unhygienic surfaces and chemicals. Existing automated solutions were complex, expensive, or failed to clean effectively. The project aimed to deliver a low-cost, reliable automated alternative.",
    solution:
      "Designed a mechanised scrubbing and disinfecting system integrated into the toilet bowl geometry. The mechanism automates both the scrubbing motion and the dispensing of sanitising fluid, minimising human intervention while ensuring thorough cleaning coverage.",
    tools: ["CAD Design", "Fabrication", "Mechanism Design"],
    outcomes: [
      {
        description: "Self-cleaning mechanism designed and fabricated",
        impact: "Functional prototype demonstrating automated scrubbing and disinfection",
      },
      {
        description: "Indian Patent filed and granted",
        impact: "Patent No. 2020-41042046 | Published: October 2020",
      },
    ],
    image: "/images/projects/toilet-cleaner.jpg",
    featured: false,
    year: 2020,
  },
  {
    id: "proj-005",
    slug: "typha-frp-composite-research",
    title: "Typha Angustifolia FRP Composite — Research Publication",
    category: "research",
    shortDescription:
      "Determined tribological and thermomechanical properties of unidirectional Typha angustifolia fiber-reinforced epoxy composites. Published at ICCMES 2021 international conference.",
    overview:
      "Academic research project at KPR Institute of Engineering and Technology investigating the material properties of natural fiber composites using Typha angustifolia (cattail) as a reinforcement in epoxy matrix. Properties studied included wear behaviour, thermal stability, and mechanical performance of unidirectional laminate configurations.",
    role: "Researcher — specimen fabrication, tribological and thermomechanical testing, data analysis, paper authoring",
    problem:
      "Natural fiber composites offer sustainable alternatives to synthetic FRP but require thorough characterisation of tribological and thermal behaviour before industrial adoption. Typha angustifolia, a widely available natural fiber, lacked published data on its composite performance.",
    solution:
      "Fabricated unidirectional Typha angustifolia fiber-reinforced epoxy composite specimens. Conducted tribological tests (wear rate, friction coefficient) and thermomechanical characterisation (TGA, DMA). Analysed results to establish property benchmarks for this novel composite system.",
    tools: ["FRP Composite Fabrication", "Tribological Testing", "Thermomechanical Analysis", "Research & Documentation"],
    outcomes: [
      {
        description: "Tribological and thermomechanical property data established for Typha angustifolia FRP",
        impact: "First published dataset for this natural fiber composite system",
      },
      {
        description: "Paper accepted and presented at international conference",
        impact: "Published: ICCMES 2021 (International Conference on Chemical, Mechanical and Environmental Sciences), March 2021",
      },
    ],
    image: "/images/projects/frp-composite.jpg",
    featured: false,
    year: 2021,
  },
];
