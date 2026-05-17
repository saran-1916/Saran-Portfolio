"use client";

import { useEffect, useRef } from "react";

export default function ExperienceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const GRID = 60;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Slow pan offset
      offset = (offset + 0.12) % GRID;

      ctx.strokeStyle = "rgba(15, 118, 110, 0.07)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = (offset % GRID) - GRID; x < canvas.width + GRID; x += GRID) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height + GRID; y += GRID) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Crosshair marks at intersections
      ctx.strokeStyle = "rgba(15, 118, 110, 0.18)";
      ctx.lineWidth = 1;
      const CROSS = 5;
      for (let x = (offset % GRID) - GRID; x < canvas.width + GRID; x += GRID) {
        for (let y = 0; y < canvas.height + GRID; y += GRID) {
          ctx.beginPath();
          ctx.moveTo(x - CROSS, y);
          ctx.lineTo(x + CROSS, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x, y - CROSS);
          ctx.lineTo(x, y + CROSS);
          ctx.stroke();
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
