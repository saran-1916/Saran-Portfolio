"use client";

import { useEffect, useRef } from "react";

export default function ProjectsBackground() {
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
    };
    resize();

    const POINT_COUNT = 32;
    const CONNECT_DIST = 220;

    interface Point {
      x: number; y: number; vx: number; vy: number;
    }

    const points: Point[] = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }

      // Draw triangles between nearby triplets
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx1 = points[i].x - points[j].x;
          const dy1 = points[i].y - points[j].y;
          if (Math.sqrt(dx1 * dx1 + dy1 * dy1) > CONNECT_DIST) continue;

          for (let k = j + 1; k < points.length; k++) {
            const dx2 = points[j].x - points[k].x;
            const dy2 = points[j].y - points[k].y;
            const dx3 = points[i].x - points[k].x;
            const dy3 = points[i].y - points[k].y;
            if (
              Math.sqrt(dx2 * dx2 + dy2 * dy2) < CONNECT_DIST &&
              Math.sqrt(dx3 * dx3 + dy3 * dy3) < CONNECT_DIST
            ) {
              ctx.fillStyle = "rgba(15, 118, 110, 0.03)";
              ctx.strokeStyle = "rgba(15, 118, 110, 0.09)";
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.lineTo(points[k].x, points[k].y);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            }
          }
        }
      }

      // Draw vertices
      for (const p of points) {
        ctx.fillStyle = "rgba(15, 118, 110, 0.25)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
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
