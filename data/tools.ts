export interface Tool {
  id: string;
  slug: string;
  title: string;
  type: "certificate" | "template" | "tool" | "resource" | "prompt";
  description: string;
  problem?: string;
  hoursave?: string;
  image?: string;
  url?: string;
  issuedBy?: string;
  dateEarned?: string;
  verificationUrl?: string;
}

export const toolsData: Tool[] = [
  {
    id: "cert-001",
    slug: "gdt-fundamentals",
    title: "GD&T (Geometric Dimensioning & Tolerancing) Certification",
    type: "certificate",
    description: "Advanced certification in GD&T principles, symbols, and application in mechanical design. Proficiency in creating and interpreting tolerance annotations for manufacturing precision.",
    issuedBy: "ASME (American Society of Mechanical Engineers)",
    dateEarned: "2022",
  },
  {
    id: "cert-002",
    slug: "solidworks-advanced",
    title: "SolidWorks Advanced Certification",
    type: "certificate",
    description: "Expert-level certification covering advanced modeling, sheet metal design, surface modeling, and CAD-to-manufacturing workflows.",
    issuedBy: "Dassault Systèmes",
    dateEarned: "2021",
  },
  {
    id: "cert-003",
    slug: "design-manufacturing",
    title: "Design for Manufacturing & Assembly (DFM/DFA)",
    type: "certificate",
    description: "Specialized training in cost-effective design principles, material selection, and manufacturing process optimization.",
    issuedBy: "Professional Development Program",
    dateEarned: "2020",
  },
  {
    id: "tool-001",
    slug: "tolerance-calculator",
    title: "GD&T Tolerance Stackup Calculator",
    type: "tool",
    description: "Custom Excel-based tool for rapid tolerance stackup analysis and worst-case/statistical analysis calculations",
    problem:
      "Reduces manual tolerance calculations from 2-3 hours per analysis to 15 minutes while minimizing computational errors",
    url: "https://github.com/saransp/tolerance-calculator",
  },
  {
    id: "tool-002",
    slug: "bom-generator",
    title: "Automated BOM Generation Tool",
    type: "tool",
    description: "SolidWorks macro-based tool that automatically generates formatted BOMs from CAD assemblies with part numbering and supplier data",
    problem:
      "Eliminates manual BOM creation and reduces errors by 95%, saving 30+ minutes per assembly",
  },
  {
    id: "tool-003",
    slug: "weight-tracker",
    title: "Component Weight Tracking System",
    type: "tool",
    description: "Lightweight database tool for tracking component masses, material costs, and enabling parametric weight optimization studies",
    problem: "Provides instant weight summaries and cost analysis without manual spreadsheet updates",
  },
  {
    id: "prompt-001",
    slug: "cad-documentation",
    title: "Technical Documentation Assistant Prompt",
    type: "prompt",
    description: "Specialized AI prompt for generating consistent, precise technical documentation, manufacturing notes, and design specification writing",
    problem:
      "Accelerates documentation writing and ensures consistency across all engineering deliverables",
    hoursave: "3-4 hours per complex drawing package",
  },
  {
    id: "prompt-002",
    slug: "design-review-prompt",
    title: "Design Review Checklist & Analysis Prompt",
    type: "prompt",
    description: "Comprehensive AI prompt for systematic design reviews covering manufacturability, assembly, cost, and quality considerations",
    problem: "Ensures no critical design aspects are overlooked during reviews",
    hoursave: "2 hours per design review cycle",
  },
  {
    id: "resource-001",
    slug: "gdt-guide",
    title: "GD&T Symbols & Applications Reference Guide",
    type: "resource",
    description: "Comprehensive visual guide to GD&T symbols, positioning, tolerance zones, and real-world application examples from rail transport",
  },
  {
    id: "resource-002",
    slug: "dfm-checklist",
    title: "Design for Manufacturing Checklist",
    type: "resource",
    description: "Systematic checklist for evaluating designs across manufacturability, assembly, cost, quality, and supply chain considerations",
  },
];
