"use client";

export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-20 z-50"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23ffffff%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
      }}
    />
  );
}
