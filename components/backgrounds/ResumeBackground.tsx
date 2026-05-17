"use client";

export default function ResumeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle noise texture via SVG filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="resume-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#resume-noise)" fill="#94a3b8" />
      </svg>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scanning line */}
      <div
        className="resume-scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"
        style={{
          animation: "resume-scan 8s linear infinite",
        }}
      />

      <style>{`
        @keyframes resume-scan {
          0%   { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .resume-scan-line { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
