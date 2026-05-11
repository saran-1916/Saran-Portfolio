import Link from "next/link";
import Image from "next/image";
import { ProjectCaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group rounded-lg border border-slate-200 overflow-hidden bg-white transition-all hover:border-accent-300 hover:shadow-card-hover">
        {/* Image Container */}
        {project.image && (
          <div className="relative h-48 w-full overflow-hidden bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-semibold text-lg text-slate-900 leading-tight group-hover:text-accent-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
              {project.year}
            </span>
          </div>

          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="text-xs bg-accent-50 text-accent-700 px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Role */}
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {project.role.substring(0, 40)}...
          </div>
        </div>
      </div>
    </Link>
  );
}
