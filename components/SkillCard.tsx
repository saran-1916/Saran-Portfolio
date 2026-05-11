interface SkillCardProps {
  name: string;
  proficiency?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

export default function SkillCard({ name, proficiency }: SkillCardProps) {
  const proficiencyColor = {
    Expert: "bg-accent-100 text-accent-800",
    Advanced: "bg-blue-100 text-blue-800",
    Intermediate: "bg-slate-100 text-slate-800",
    Beginner: "bg-slate-50 text-slate-700",
  };

  const proficiencyWidth = {
    Expert: "w-4/4",
    Advanced: "w-3/4",
    Intermediate: "w-2/4",
    Beginner: "w-1/4",
  };

  const color = proficiency ? proficiencyColor[proficiency] : "bg-slate-100 text-slate-800";
  const width = proficiency ? proficiencyWidth[proficiency] : "w-full";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-card transition-all">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium text-slate-900">{name}</h4>
        {proficiency && (
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${color}`}>
            {proficiency}
          </span>
        )}
      </div>

      {/* Proficiency Bar */}
      {proficiency && (
        <div className="w-full bg-slate-200 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all ${width}`}
          />
        </div>
      )}
    </div>
  );
}
