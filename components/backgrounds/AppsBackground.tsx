"use client";

import { useEffect, useRef } from "react";

export default function AppsBackground() {
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
      initColumns();
    };

    const FONT_SIZE = 14;
    const CHARS = "01アイウエオカキクケコサシスセソ<>{}[]();=+-*/";

    interface Column {
      x: number;
      y: number;
      speed: number;
      char: string;
      timer: number;
      interval: number;
    }

    let columns: Column[] = [];

    const initColumns = () => {
      const count = Math.floor(canvas.width / 40);
      columns = Array.from({ length: count }, (_, i) => ({
        x: (i / count) * canvas.width + Math.random() * 20,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        timer: 0,
        interval: 60 + Math.floor(Math.random() * 120),
      }));
    };

    initColumns();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      for (const col of columns) {
        col.y += col.speed;
        col.timer++;

        if (col.timer >= col.interval) {
          col.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          col.timer = 0;
        }

        if (col.y > canvas.height + FONT_SIZE) {
          col.y = -FONT_SIZE;
        }

        ctx.fillStyle = "rgba(15, 118, 110, 0.09)";
        ctx.fillText(col.char, col.x, col.y);
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
