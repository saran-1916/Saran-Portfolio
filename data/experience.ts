export interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "exp-001",
    company: "Alstom Transportation",
    title: "Mechanical CAD Engineer - Rolling Stock Interiors",
    startDate: "December 2024",
    endDate: "Present",
    description:
      "Design and develop interior ceiling systems and modular CAD architectures for metro, commuter, and regional train platforms. Lead 3D integration, master sections, and fit validation with emphasis on manufacturing efficiency and GD&T compliance.",
    achievements: [
      "Designed 36+ ceiling configurations across multiple train platforms serving diverse market requirements",
      "Established modular CAD architecture reducing design iteration time by 35% and improving reusability",
      "Conducted fit validation and weight studies ensuring manufacturing compliance and cost optimization",
      "Created detailed manufacturing drawings and bills of materials for multi-supplier coordination",
      "Implemented GD&T standards across interior components ensuring precision and quality",
    ],
    technologies: [
      "SolidWorks (Expert)",
      "Teamcenter PLM",
      "AutoCAD",
      "CATIA",
      "GD&T",
      "3D Integration",
    ],
  },
  {
    id: "exp-002",
    company: "Multiple Engineering Organizations",
    title: "Mechanical Design Engineer",
    startDate: "2019",
    endDate: "November 2024",
    description:
      "Developed mechanical designs and CAD solutions across rail, automotive, and industrial sectors. Focused on product development, system integration, and manufacturing process optimization.",
    achievements: [
      "Proficient in 6+ CAD platforms delivering solutions across 3 different industries",
      "Performed structural analysis, FEA, and simulation validation for component optimization",
      "Collaborated with manufacturing teams to ensure design-for-manufacturability and cost reduction",
      "Developed technical documentation and assembly procedures for production implementation",
      "Led design reviews and coordinated with cross-functional teams on complex assemblies",
    ],
    technologies: [
      "CAD Design",
      "FEA Analysis",
      "Manufacturing Design",
      "Technical Documentation",
      "Systems Integration",
    ],
  },
];
