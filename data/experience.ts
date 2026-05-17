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
    company: "Alstom",
    title: "CAD Engineer, Rolling Stock Interior Systems",
    startDate: "January 2025",
    endDate: "Present",
    description:
      "Leading end-to-end 3D ceiling design for AX products across European and North American rail platforms. Delivering modular ceiling configurations for metro, LRV, and regional train fleets using CATIA V5/V6 with Enovia PLM4A.",
    achievements: [
      "Segment-B AX Ceiling: Led 3D ceiling design delivering 20 configurations across Adesia (EU/UK), Coradia Multilevel, and Over Flush platforms — managing roofing and lighting variants for modular adaptability",
      "Segment-A AX Ceiling: Developed 16 ceiling configurations for MAS/LRV, Urban HC/MC, and NAM TTC platforms from master sections, standardising ceiling architecture and reducing platform-specific redesign",
      "2D Drawing Generation: Produced manufacturing and assembly drawings aligned with 3D models applying CDSI guidelines for fabrication clarity and regulatory compliance",
      "Modular Handrail & Handhold Design: Designed modular handrails and handholds for AX products; performed stackup and fit analysis to validate installation feasibility and minimise interface risks",
      "Engineering Studies: Executed detailed weight analysis across all segments, wire routing standardisation, concept studies for roof opening mechanisms, and fit-form-function validation",
    ],
    technologies: [
      "CATIA V5/V6",
      "Enovia PLM4A",
      "Teamcenter PLM",
      "GD&T",
      "Stackup Analysis",
      "CDSI Standards",
    ],
  },
  {
    id: "exp-002",
    company: "Ford Motor Company (Deputed via Actalent — Allegis Services India Pvt. Ltd.)",
    title: "Design Engineer, Transmission & Driveline",
    startDate: "November 2022",
    endDate: "December 2024",
    description:
      "Performed mechanical design and analysis work on transmission and driveline systems at Ford Motor Company's Chennai facility, deputed through Actalent. Managed full BOM lifecycle from initial concept through engineering release.",
    achievements: [
      "Performed fault diagnosis on transmission part assemblies and drove design corrections to resolve tolerance and fit issues, reducing rework cycles",
      "Executed Stackup Analysis and Oil Volume Studies to validate transmission housing designs for functional and manufacturing compliance",
      "Delivered concept design creations and engineering updates, managing full BOM lifecycle from initial concept through engineering release",
      "Supported DPA (Design Process Audit), assembly management, data management, and report maintenance in Teamcenter and WERS",
    ],
    technologies: [
      "CATIA V5",
      "Teamcenter PLM",
      "WERS",
      "GD&T",
      "Stackup Analysis",
      "Oil Volume Analysis",
      "MS Office Suite",
    ],
  },
  {
    id: "exp-003",
    company: "Shanthi Gears Ltd. — Murugappa Group",
    title: "Design Engineer Trainee, Research & Development",
    startDate: "April 2021",
    endDate: "November 2022",
    description:
      "Spearheaded R&D and full design cycle of a marine gearbox with integrated clutch system for fisherman boat engines at one of India's leading gear manufacturing companies. Contributed to product development from initial calculations through prototype.",
    achievements: [
      "Remastered 30% of an existing gearbox and developed the remaining design from ground up through internal R&D — marine gearbox with integrated clutch for fisherman boat engines",
      "Performed gear calculations (spur, helical, bevel) and shaft/bearing selection using KissSoft and KissSys",
      "Created casting designs for fabrication with BOM management for prototype and production phases",
    ],
    technologies: [
      "KissSoft",
      "KissSys",
      "CATIA V5",
      "GD&T",
      "Gear Calculation",
      "Casting Design",
      "MS Office Suite",
    ],
  },
];
