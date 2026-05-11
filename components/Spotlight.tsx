"use client";

import { useEffect, useRef, useState } from "react";

interface SpotlightProps {
  size?: number;
  intensity?: number;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export default function Spotlight({
  size = 200,
  intensity = 0.4,
  containerRef,
}: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } else {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle ${size}px at ${position.x}px ${position.y}px, rgba(14, 165, 233, ${intensity * 0.1}), transparent 80%)`,
        transition: "background 0.1s ease-out",
      }}
    />
  );
}
