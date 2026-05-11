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
    category: "CAD & 3D Design Software",
    skills: [
      { name: "SolidWorks", proficiency: "Expert" },
      { name: "CATIA (V5/V6)", proficiency: "Advanced" },
      { name: "Teamcenter PLM", proficiency: "Advanced" },
      { name: "AutoCAD 2D/3D", proficiency: "Advanced" },
      { name: "Fusion 360", proficiency: "Advanced" },
      { name: "Drawing & Technical Detailing", proficiency: "Expert" },
    ],
  },
  {
    category: "Mechanical Engineering Analysis",
    skills: [
      { name: "FEA (Finite Element Analysis)", proficiency: "Advanced" },
      { name: "Structural Analysis & Validation", proficiency: "Advanced" },
      { name: "Tolerance & Stackup Analysis", proficiency: "Advanced" },
      { name: "GD&T (Geometric Dimensioning & Tolerancing)", proficiency: "Expert" },
      { name: "Fit & Interference Analysis", proficiency: "Advanced" },
      { name: "Weight Management & Optimization", proficiency: "Advanced" },
    ],
  },
  {
    category: "Manufacturing & Production Design",
    skills: [
      { name: "Design for Manufacturing (DFM)", proficiency: "Expert" },
      { name: "Bill of Materials (BOM) Creation", proficiency: "Expert" },
      { name: "Manufacturing Drawings & Specifications", proficiency: "Expert" },
      { name: "Assembly Documentation & Procedures", proficiency: "Advanced" },
      { name: "Cost Optimization & Value Engineering", proficiency: "Advanced" },
      { name: "Supplier Coordination & Quality Control", proficiency: "Advanced" },
    ],
  },
  {
    category: "Engineering Specializations",
    skills: [
      { name: "Rolling Stock Interior Design", proficiency: "Expert" },
      { name: "Modular Architecture & Parametric Design", proficiency: "Expert" },
      { name: "3D Integration & Master Sections", proficiency: "Expert" },
      { name: "Component Design & Assembly Logic", proficiency: "Advanced" },
      { name: "Cross-platform CAD Integration", proficiency: "Advanced" },
      { name: "Rail Transport Systems", proficiency: "Advanced" },
    ],
  },
  {
    category: "Engineering Software & Tools",
    skills: [
      { name: "PLM Systems (Teamcenter, Windchill)", proficiency: "Advanced" },
      { name: "Document Management Systems", proficiency: "Advanced" },
      { name: "PDM (Product Data Management)", proficiency: "Advanced" },
      { name: "Version Control & Revision Management", proficiency: "Advanced" },
      { name: "Microsoft Office & Technical Writing", proficiency: "Advanced" },
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
      { name: "Technical Documentation & Specification Writing", proficiency: "Expert" },
      { name: "Design Reviews & Technical Presentations", proficiency: "Advanced" },
      { name: "Cross-functional Team Collaboration", proficiency: "Advanced" },
      { name: "Project Management & Timeline Tracking", proficiency: "Advanced" },
      { name: "Quality Assurance & Design Validation", proficiency: "Advanced" },
    ],
  },
];
