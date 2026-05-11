import { ExperienceEntry } from "@/data/experience";

interface TimelineItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <div className="relative pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-12 h-full w-0.5 bg-gradient-to-b from-accent-500 to-accent-500/30" />
      )}

      {/* Timeline dot */}
      <div className="relative flex items-start">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-slate-900 bg-accent-500 shadow-lg shadow-accent-500/50">
          <div className="h-2 w-2 rounded-full bg-slate-900" />
        </div>

        {/* Content */}
        <div className="ml-6 flex-1 pt-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-lg text-slate-100">
                {entry.title}
              </h3>
              <p className="text-accent-400 font-medium">{entry.company}</p>
            </div>
            <div className="text-sm text-slate-400 font-medium">
              {entry.startDate} — {entry.endDate}
            </div>
          </div>

          <p className="text-slate-300 mb-3 leading-relaxed">
            {entry.description}
          </p>

          {/* Achievements */}
          {entry.achievements.length > 0 && (
            <ul className="space-y-2 mb-4">
              {entry.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-300">
                  <svg
                    className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          {entry.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-accent-500/10 text-accent-300 px-3 py-1 rounded-full border border-accent-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
