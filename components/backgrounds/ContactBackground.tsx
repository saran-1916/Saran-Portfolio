"use client";

import { useEffect, useRef } from "react";

export default function ContactBackground() {
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

    interface Ring {
      r: number;
      maxR: number;
      alpha: number;
    }

    const rings: Ring[] = [];
    let lastEmit = 0;
    const EMIT_INTERVAL = 2000;

    const animate = (ts: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (ts - lastEmit > EMIT_INTERVAL) {
        rings.push({ r: 10, maxR: Math.max(canvas.width, canvas.height) * 0.6, alpha: 0.25 });
        lastEmit = ts;
      }

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.r += 1.2;
        ring.alpha = 0.25 * (1 - ring.r / ring.maxR);

        if (ring.alpha <= 0 || ring.r >= ring.maxR) {
          rings.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(15, 118, 110, ${ring.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
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
