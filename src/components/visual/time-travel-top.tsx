"use client";

import React from "react";

// TimeTravelTopOverlay: cycles subtle, top-masked overlays evoking eras:
// 0 Ancient (Roman numerals + stone grain), 1 Modern History (paper map + gear arcs),
// 2 2025 (hi-res grid + scanlines), 3 Future (neon conic + star specks)
// - Runs above existing background but below content, masked to top area.
// - No images; pure CSS gradients for performance.
// - Uses CSS transitions to crossfade between layers.

const ERAS = [0, 1, 2, 3] as const;

type Era = typeof ERAS[number];

export const TimeTravelTopOverlay: React.FC = () => {
  const [era, setEra] = React.useState<Era>(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setEra((prev) => ((prev + 1) as Era) % ERAS.length);
    }, 5000); // 5s per era
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]">
      {/* Base container for stacked eras */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ancient Rome */}
        <div
          className={[
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            era === 0 ? "opacity-35" : "opacity-0",
          ].join(" ")}
          style={{
            // Roman numerals + chiseled stone grain
            backgroundImage: [
              // Roman numerals grid (I,V,X,L,C pattern via tiny SVG)
              "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\">\
  <g fill=\"rgba(0,0,0,0.16)\" font-family=\"Poppins, Arial, sans-serif\" font-size=\"16\" opacity=\"0.7\">\
    <text x=\"8\" y=\"24\">I V X</text>\
    <text x=\"8\" y=\"48\">L C D</text>\
    <text x=\"8\" y=\"72\">I X V</text>\
    <text x=\"8\" y=\"96\">C L I</text>\
  </g>\
</svg>')",
              // stone grain
              "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
              // vertical marble veins
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 18px)",
            ].join(", "),
            backgroundSize: "120px 120px, 6px 6px, auto",
            backgroundPosition: "center, 0 0, 0 0",
            filter: "blur(0.2px)",
          }}
        />

        {/* Modern History */}
        <div
          className={[
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            era === 1 ? "opacity-35" : "opacity-0",
          ].join(" ")}
          style={{
            // Paper texture + gear-like conic arcs
            backgroundImage: [
              // parchment noise via SVG turbulence
              "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\">\
  <filter id=\"f\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\"/></filter>\
  <rect width=\"100%\" height=\"100%\" filter=\"url(%23f)\" opacity=\"0.25\"/>\
</svg>')",
              // gear arcs
              "repeating-conic-gradient(from 0deg, rgba(0,0,0,0.12) 0deg, rgba(0,0,0,0.12) 6deg, transparent 6deg, transparent 18deg)",
            ].join(", "),
            backgroundSize: "200px 200px, auto",
            backgroundPosition: "center, 50% 35%",
            mixBlendMode: "multiply",
            filter: "blur(0.3px)",
          }}
        />

        {/* 2025 */}
        <div
          className={[
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            era === 2 ? "opacity-35" : "opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: [
              // hi-res grid
              "linear-gradient(to right, rgba(0,0,0,0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.20) 1px, transparent 1px)",
              // scanlines
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 8px)",
            ].join(", "),
            backgroundSize: "24px 24px, auto",
            backgroundPosition: "center, 0 0",
          }}
        />

        {/* Future */}
        <div
          className={[
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            era === 3 ? "opacity-35" : "opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: [
              // neon conic sweep
              "conic-gradient(from 220deg at 50% 25%, rgba(0,0,0,0.22), transparent 45%, rgba(0,0,0,0.22) 70%, transparent 100%)",
              // micro stars
              "radial-gradient(rgba(0,0,0,0.18) 0.6px, transparent 0.6px)",
            ].join(", "),
            backgroundSize: "auto, 14px 14px",
            backgroundPosition: "center, 0 0",
            animation: "spin 70s linear infinite",
          }}
        />
      </div>
    </div>
  );
};

export default TimeTravelTopOverlay;