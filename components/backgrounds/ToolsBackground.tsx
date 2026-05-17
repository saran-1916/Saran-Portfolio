"use client";

import { useEffect, useRef } from "react";

export default function ToolsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initTraces();
    };

    const GRID = 80;

    interface Trace {
      x: number; y: number;
      dir: "h" | "v";
      progress: number;
      length: number;
      speed: number;
    }

    let traces: Trace[] = [];

    const initTraces = () => {
      traces = [];
      const cols = Math.ceil(canvas.width / GRID) + 1;
      const rows = Math.ceil(canvas.height / GRID) + 1;

      for (let i = 0; i < 18; i++) {
        const isH = Math.random() > 0.5;
        traces.push({
          x: Math.floor(Math.random() * cols) * GRID,
          y: Math.floor(Math.random() * rows) * GRID,
          dir: isH ? "h" : "v",
          progress: Math.random(),
          length: (2 + Math.floor(Math.random() * 4)) * GRID,
          speed: 0.003 + Math.random() * 0.004,
        });
      }
    };

    initTraces();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Static PCB grid lines
      ctx.strokeStyle = "rgba(15, 118, 110, 0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width + GRID; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height + GRID; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Node dots at intersections
      ctx.fillStyle = "rgba(15, 118, 110, 0.12)";
      for (let x = 0; x < canvas.width + GRID; x += GRID) {
        for (let y = 0; y < canvas.height + GRID; y += GRID) {
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Animated traces
      for (const tr of traces) {
        tr.progress += tr.speed;
        if (tr.progress > 1) {
          tr.progress = 0;
          const cols = Math.ceil(canvas.width / GRID) + 1;
          const rows = Math.ceil(canvas.height / GRID) + 1;
          tr.x = Math.floor(Math.random() * cols) * GRID;
          tr.y = Math.floor(Math.random() * rows) * GRID;
          tr.dir = Math.random() > 0.5 ? "h" : "v";
          tr.length = (2 + Math.floor(Math.random() * 4)) * GRID;
        }

        const traveled = tr.progress * tr.length;
        const ex = tr.dir === "h" ? tr.x + traveled : tr.x;
        const ey = tr.dir === "v" ? tr.y + traveled : tr.y;

        ctx.strokeStyle = "rgba(15, 118, 110, 0.55)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tr.x, tr.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        // Leading dot
        ctx.fillStyle = "rgba(15, 118, 110, 0.9)";
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fill();
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
