export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  category: "mechanical" | "automotive" | "industrial" | "product";
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
    slug: "metro-ceiling-system-architecture",
    title: "Modular Metro Ceiling System Architecture",
    category: "mechanical",
    shortDescription:
      "Designed comprehensive 3D ceiling architecture for metro train interiors with modular components reducing design cycles by 35%",
    overview:
      "Led the development of a modular ceiling system architecture for metro rolling stock, establishing CAD standards and reusable components that streamlined design iterations across multiple train configurations.",
    role: "Lead Mechanical CAD Engineer - Responsible for 3D integration, master section design, and architectural standards",
    problem:
      "Previous projects used custom designs for each ceiling configuration, resulting in lengthy design cycles, inconsistent manufacturing drawings, and difficult supplier coordination. Each new train variant required complete redesign despite similar functional requirements.",
    solution:
      "Developed a modular parametric architecture with standardized components, fixtures, and assembly logic. Created master sections in SolidWorks with controlled configurations allowing rapid configuration of new ceiling types while maintaining design consistency. Implemented GD&T standards and design-for-manufacturing principles.",
    tools: ["SolidWorks", "Teamcenter PLM", "AutoCAD", "CATIA"],
    outcomes: [
      {
        description:
          "Established reusable modular components library with 12+ standardized elements",
        impact: "35% reduction in design iteration time per new configuration",
      },
      {
        description: "Created parametric master sections enabling quick configuration",
        impact: "Timeline: 4 weeks → 10 days for new ceiling designs",
      },
      {
        description:
          "Implemented GD&T standards across all interior components",
        impact: "Zero manufacturing interpretation issues in production",
      },
      {
        description:
          "Developed detailed manufacturing drawings and BOMs for multi-supplier coordination",
        impact: "Improved supplier quality and on-time delivery by 25%",
      },
    ],
    image: "/images/projects/metro-ceiling.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "proj-002",
    slug: "fit-validation-weight-optimization",
    title: "Fit Validation & Weight Optimization Study",
    category: "mechanical",
    shortDescription:
      "Comprehensive interference analysis and weight reduction study for train interior assemblies resulting in 8% weight savings",
    overview:
      "Performed detailed 3D interference checking and tolerance analysis on interior ceiling assemblies across multiple train types. Conducted weight optimization study to reduce component masses while maintaining structural requirements.",
    role: "Mechanical Engineer - Fit analysis, tolerance management, weight optimization, CAD documentation",
    problem:
      "Multiple interior assemblies were experiencing fit issues during manufacturing and assembly. Weight targets were exceeded by 12% on critical subsystems, affecting train performance and operating costs. Manual fit verification was time-consuming and prone to errors.",
    solution:
      "Implemented systematic 3D fit validation using SolidWorks with tolerance stackup analysis. Identified critical interference zones and optimized component dimensions and wall thicknesses. Conducted parametric weight studies using CAD model analysis combined with material property databases.",
    tools: ["SolidWorks", "Tolerance Analysis", "Weight Management Tools"],
    outcomes: [
      {
        description:
          "Completed fit validation on 15+ critical assembly junctions",
        impact: "Zero fit issues in subsequent manufacturing batches",
      },
      {
        description: "Optimized component geometry and material selection",
        impact: "8% weight reduction (120 kg per train unit)",
      },
      {
        description:
          "Established tolerance stackup methodology for future designs",
        impact: "Repeatable process reducing design review cycles by 40%",
      },
      {
        description: "Documented all findings in engineering reports and drawings",
        impact: "Knowledge base for continuous improvement",
      },
    ],
    image: "/images/projects/fit-validation.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "proj-003",
    slug: "regional-train-interior-design",
    title: "Regional Train Interior System Design",
    category: "mechanical",
    shortDescription:
      "Complete interior system design for regional train platform covering seating, handrails, and structural integration",
    overview:
      "Designed complete interior subsystems for regional train rolling stock including ceiling panels, structural brackets, fastening systems, and integration with adjacent components.",
    role: "Mechanical Designer - Full subsystem design from concept to manufacturing drawings",
    problem:
      "Regional train platform required complete interior design with specific space constraints, cost targets, and modular integration requirements with existing platform architecture.",
    solution:
      "Developed integrated CAD design following customer specifications and manufacturing constraints. Created parametric components allowing easy modification for future platform variants. Performed structural analysis to validate fastening systems and bracket designs.",
    tools: ["SolidWorks", "FEA Analysis", "CATIA Integration", "GD&T"],
    outcomes: [
      {
        description: "Completed full system design meeting all technical specifications",
        impact: "On-schedule program delivery",
      },
      {
        description: "Created modular design enabling 60% component reuse",
        impact: "Reduced future platform development costs",
      },
      {
        description:
          "Conducted structural validation of all critical load paths",
        impact: "Approved for manufacturing without design changes",
      },
    ],
    image: "/images/projects/regional-train.jpg",
    featured: false,
    year: 2023,
  },
];
