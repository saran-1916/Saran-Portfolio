"use client";

import { useEffect, useRef } from "react";

export default function SkillsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const rings = [
      { r: 180, speed: 0.0042, dotCount: 8 },
      { r: 290, speed: -0.0026, dotCount: 12 },
      { r: 400, speed: 0.0017, dotCount: 16 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (const ring of rings) {
        const angle = t * ring.speed;

        // Ring circle
        ctx.strokeStyle = "rgba(15, 118, 110, 0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.stroke();

        // Orbiting dots
        for (let i = 0; i < ring.dotCount; i++) {
          const a = angle + (i / ring.dotCount) * Math.PI * 2;
          const dx = cx + Math.cos(a) * ring.r;
          const dy = cy + Math.sin(a) * ring.r;
          ctx.fillStyle = "rgba(15, 118, 110, 0.3)";
          ctx.beginPath();
          ctx.arc(dx, dy, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(rafId);
      else rafId = requestAnimationFrame(animate);
    };
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
