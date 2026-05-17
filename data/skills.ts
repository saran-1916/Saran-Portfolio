export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

export const skillsData: SkillCategory[] = [
  {
    category: "CAD & Design Tools",
    skills: [
      { name: "CATIA V5/V6", proficiency: "Expert" },
      { name: "Enovia PLM4A", proficiency: "Expert" },
      { name: "SolidWorks", proficiency: "Advanced" },
      { name: "Pro-E Creo", proficiency: "Advanced" },
      { name: "Unigraphics NX", proficiency: "Advanced" },
      { name: "Fusion 360", proficiency: "Advanced" },
      { name: "AutoCAD", proficiency: "Advanced" },
    ],
  },
  {
    category: "Gear Analysis",
    skills: [
      { name: "KissSoft (Gear, Spline, Shaft & Bearing)", proficiency: "Expert" },
      { name: "KissSys (System-level drivetrain analysis)", proficiency: "Expert" },
      { name: "Spur & Helical Gear Calculation", proficiency: "Expert" },
      { name: "Bevel Gear Calculation", proficiency: "Advanced" },
      { name: "Shaft & Bearing Selection", proficiency: "Expert" },
    ],
  },
  {
    category: "PLM & Data Management",
    skills: [
      { name: "Teamcenter PLM", proficiency: "Expert" },
      { name: "Enovia PLM4A", proficiency: "Expert" },
      { name: "WERS (Ford)", proficiency: "Advanced" },
      { name: "Oracle", proficiency: "Intermediate" },
      { name: "BOM Lifecycle Management", proficiency: "Expert" },
    ],
  },
  {
    category: "Technical Methods",
    skills: [
      { name: "GD&T (Geometric Dimensioning & Tolerancing)", proficiency: "Expert" },
      { name: "Stackup Analysis", proficiency: "Expert" },
      { name: "DFMEA", proficiency: "Advanced" },
      { name: "DFA (Design for Assembly)", proficiency: "Advanced" },
      { name: "DFM (Design for Manufacturing)", proficiency: "Advanced" },
      { name: "DPA (Design Process Audit)", proficiency: "Advanced" },
      { name: "Draft Analysis", proficiency: "Advanced" },
      { name: "Oil Volume Analysis", proficiency: "Advanced" },
      { name: "Weight Analysis & MMOI", proficiency: "Advanced" },
      { name: "Wire Routing Standardisation", proficiency: "Advanced" },
    ],
  },
  {
    category: "Materials & Manufacturing",
    skills: [
      { name: "Sheet Metal Design", proficiency: "Advanced" },
      { name: "FRP Composites", proficiency: "Advanced" },
      { name: "Casting Design", proficiency: "Advanced" },
      { name: "Plastic Injection Moulding", proficiency: "Intermediate" },
      { name: "Heat Treatment", proficiency: "Intermediate" },
      { name: "Metallurgy", proficiency: "Intermediate" },
    ],
  },
  {
    category: "Simulation & Analysis",
    skills: [
      { name: "Ansys (FEA)", proficiency: "Advanced" },
      { name: "Fit-Form-Function Validation", proficiency: "Expert" },
      { name: "Structural Analysis & Validation", proficiency: "Advanced" },
      { name: "Interference Analysis", proficiency: "Advanced" },
    ],
  },
  {
    category: "Engineering Specializations",
    skills: [
      { name: "Rolling Stock Interior Systems", proficiency: "Expert" },
      { name: "Transmission & Driveline Design", proficiency: "Expert" },
      { name: "Gear Calculation & Design", proficiency: "Expert" },
      { name: "Modular Product Architecture", proficiency: "Expert" },
      { name: "Product Design & Development", proficiency: "Expert" },
    ],
  },
  {
    category: "Web Development & Digital Skills",
    skills: [
      { name: "React & Next.js", proficiency: "Advanced" },
      { name: "TypeScript", proficiency: "Advanced" },
      { name: "Tailwind CSS", proficiency: "Expert" },
      { name: "Full-stack Web Development", proficiency: "Advanced" },
      { name: "API Integration & Backend", proficiency: "Advanced" },
      { name: "AI-Assisted Development", proficiency: "Advanced" },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Claude API & LLM Integration", proficiency: "Advanced" },
      { name: "Prompt Engineering", proficiency: "Expert" },
      { name: "AI-Assisted Design Workflows", proficiency: "Advanced" },
      { name: "Automation & Scripting", proficiency: "Advanced" },
    ],
  },
  {
    category: "Professional Competencies",
    skills: [
      { name: "Technical Documentation & Drawing Generation", proficiency: "Expert" },
      { name: "CDSI Standards Compliance", proficiency: "Advanced" },
      { name: "Design Reviews & Technical Presentations", proficiency: "Advanced" },
      { name: "Cross-functional Team Collaboration", proficiency: "Advanced" },
      { name: "Project Management & Timeline Tracking", proficiency: "Advanced" },
    ],
  },
];
