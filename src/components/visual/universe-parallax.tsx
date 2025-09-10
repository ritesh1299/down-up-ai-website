"use client";

import React, { useEffect, useRef } from "react";

// Ultra-lightweight mouse parallax overlay that nudges a couple of
// decorative layers based on pointer position (performance-safe).
// Styling uses Tailwind utilities and arbitrary CSS properties only.
// Pointer events are disabled so it never blocks interactions.

export const UniverseParallax: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;
      const px = (e.clientX / vw - 0.5) * 2; // -1 .. 1
      const py = (e.clientY / vh - 0.5) * 2; // -1 .. 1
      // Small amplitude for subtlety (slightly stronger)
      targetX = px * 22; // px
      targetY = py * 16; // px
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const apply = () => {
      raf = 0;
      // Ease towards target for smoothness
      const currentX = parseFloat(el.style.getPropertyValue("--mx") || "0");
      const currentY = parseFloat(el.style.getPropertyValue("--my") || "0");
      const nextX = currentX + (targetX - currentX) * 0.18;
      const nextY = currentY + (targetY - currentY) * 0.18;
      el.style.setProperty("--mx", `${nextX}`);
      el.style.setProperty("--my", `${nextY}`);
      // keep animating until close enough
      if (Math.abs(nextX - targetX) > 0.2 || Math.abs(nextY - targetY) > 0.2) {
        raf = requestAnimationFrame(apply);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove as any);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 will-change-transform z-10"
      style={{
        // Translate in px using CSS vars updated by JS
        transform: "translate3d(var(--mx, 0px) , var(--my, 0px), 0)",
        transition: "transform 50ms linear",
      }}
    >
      {/* Layer A: soft orbiting flare following mouse slightly */}
      <div className="absolute inset-0 origin-[50%_50%]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-[70px] [opacity:.14] bg-foreground/20" />
      </div>

      {/* Layer B: sparse stars that parallax subtly */}
      <div
        className="absolute inset-0 [opacity:.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.10) 0.8px, transparent 0.8px)",
          backgroundSize: "120px 120px, 180px 180px",
          backgroundPosition: "0 0, 60px 40px",
        }}
      />

      {/* Layer C: top-only rotating lens flare + glow */}
      <div className="absolute inset-x-0 top-0 h-[60vh] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]">
        <div className="absolute inset-0 blur-2xl [opacity:.18] animate-spin [animation-duration:70s] [background:conic-gradient(from_200deg_at_50%_30%,rgba(0,0,0,0.18),transparent_45%,rgba(0,0,0,0.18)_70%,transparent_100%)]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-40 w-[32rem] rounded-full blur-[60px] [opacity:.20] bg-gradient-to-b from-foreground/20 to-transparent animate-pulse [animation-duration:6s]" />
      </div>
    </div>
  );
};

export default UniverseParallax;