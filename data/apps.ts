export interface AppProject {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  whyBuilt: string;
  techStack: string[];
  keyFeatures: string[];
  impact?: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: number;
}

export const appsData: AppProject[] = [
  {
    id: "app-001",
    slug: "engineering-portfolio-builder",
    title: "Engineering Portfolio Builder",
    shortDescription:
      "Modern portfolio generator for mechanical engineers built with Next.js and AI-assisted content",
    description:
      "A full-featured web application that helps mechanical engineers create professional portfolio websites without coding. Features drag-and-drop project showcases, automatic resume parsing, and AI-assisted content generation using Claude API.",
    whyBuilt:
      "Realized that many talented engineers lack platforms to effectively showcase CAD work and technical achievements. Built this to democratize portfolio creation and help engineers land better opportunities.",
    techStack: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Claude API",
      "Framer Motion",
    ],
    keyFeatures: [
      "Drag-and-drop project card builder with case study formatting",
      "AI-assisted content generation for project descriptions and summaries",
      "Automatic resume parsing and content extraction",
      "Responsive design optimized for recruiter viewing on mobile",
      "Dark mode support and customizable color themes",
      "SEO optimization with metadata management",
      "One-click Vercel deployment integration",
    ],
    impact:
      "Published as open-source template; 50+ engineers have used it to create portfolios",
    image: "/images/apps/portfolio-builder.jpg",
    liveUrl: "https://saransp.vercel.app",
    githubUrl: "https://github.com/saransp/portfolio-builder",
    year: 2024,
  },
  {
    id: "app-002",
    slug: "tolerance-calculator-web",
    title: "GD&T Tolerance Calculator Web App",
    shortDescription:
      "Interactive web-based calculator for tolerance stackup analysis and worst-case calculations",
    description:
      "A practical engineering tool for calculating tolerance accumulation in mechanical assemblies. Supports both worst-case and RSS (root-sum-square) statistical methods with visual tolerance zone diagrams.",
    whyBuilt:
      "Manual tolerance calculations are time-consuming and error-prone. Built this web app to provide instant, accurate stackup analysis that engineers can use during design reviews without switching between multiple tools.",
    techStack: ["React", "Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    keyFeatures: [
      "Real-time worst-case tolerance stackup calculation",
      "Statistical RSS method analysis for optimized designs",
      "Visual tolerance zone diagrams",
      "Multiple tolerance type support (bilateral, unilateral, limit)",
      "Project save/load functionality",
      "Export results as PDF engineering reports",
      "Mobile-friendly calculation interface",
    ],
    impact:
      "200+ monthly active users from engineering teams at multiple organizations",
    image: "/images/apps/tolerance-calculator.jpg",
    liveUrl: "https://tolerance-calc.vercel.app",
    githubUrl: "https://github.com/saransp/tolerance-calculator-web",
    year: 2023,
  },
  {
    id: "app-003",
    slug: "cad-document-assistant",
    title: "CAD Document & Specification Assistant",
    shortDescription:
      "AI-powered tool for generating technical documentation, drawing notes, and engineering specifications",
    description:
      "Leverages Claude API to assist engineers in writing consistent, precise technical documentation. Helps generate manufacturing notes, design specifications, assembly procedures, and engineering reports with professional formatting.",
    whyBuilt:
      "Technical writing is often a bottleneck in design projects. This tool uses AI to accelerate documentation creation while maintaining accuracy and consistency across multiple documents.",
    techStack: [
      "Next.js",
      "React",
      "Claude API",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
    ],
    keyFeatures: [
      "AI-powered content generation for engineering documentation",
      "Drawing note and specification templates",
      "Manufacturing instruction generation from CAD context",
      "Design review checklist generation",
      "Tolerance annotation assistance",
      "Multi-format export (PDF, Word, Markdown)",
      "Custom prompt library for repetitive tasks",
    ],
    impact: "Deployed internally; saves 3-4 hours per complex drawing package",
    image: "/images/apps/doc-assistant.jpg",
    githubUrl: "https://github.com/saransp/cad-doc-assistant",
    year: 2024,
  },
];
