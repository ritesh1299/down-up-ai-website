import React from "react";

export type GlobeDotsProps = {
  variant?: "hero" | "cta";
  className?: string;
  opacity?: number;
  scale?: number;
};

const cn = (...a: Array<string | false | undefined>) => a.filter(Boolean).join(" ");

export const BGGlobeDots: React.FC<GlobeDotsProps> = ({ 
  variant = "hero", 
  className, 
  opacity, 
  scale = 1 
}) => {
  const baseOpacity = opacity ?? (variant === "hero" ? 0.08 : 0.05);
  const vw = 1400;
  const vh = 700;

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      aria-hidden="true"
      role="presentation"
      preserveAspectRatio="xMidYMid meet"
      className={cn("w-full h-auto pointer-events-none select-none", className)}
      style={{ 
        ...(opacity != null ? { opacity: baseOpacity } : {}),
        transform: `scale(${scale})`,
        willChange: "transform, opacity" 
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <symbol id="dot" viewBox="0 0 4 4">
          <circle 
            cx="2" 
            cy="2" 
            r="1.4" 
            fill="#E5E7EB"
          />
        </symbol>
        
        <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
          {/* Soften fade to avoid erasing dots entirely at the top */}
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        
        <mask id="maskFade" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width={vw} height={vh} fill="url(#fadeTop)" />
        </mask>
        
        <clipPath id="hemisphere">
          <ellipse cx={vw / 2} cy={vh} rx={vw * 0.75} ry={vh * 0.75} />
        </clipPath>
      </defs>

      <g clipPath="url(#hemisphere)">
        {Array.from({ length: 12 }, (_, bandIndex) => {
          const y = vh - bandIndex * 35 - 40;
          const spread = vw * (0.2 + bandIndex * 0.07);
          const dotCount = Math.ceil(spread / 26);
          const startX = (vw - spread) / 2;
          const stagger = (bandIndex % 4) * 0.8;
          
          return (
            <g 
              key={`band-${bandIndex}`}
              style={{ 
                animationDelay: `${stagger}s`,
                animationDuration: "2s",
                animationFillMode: "forwards"
              }}
              className="opacity-0 animate-[fadeIn_2s_ease-out_forwards]"
            >
              {Array.from({ length: dotCount }, (_, dotIndex) => {
                const xOffset = startX + dotIndex * 26;
                const yOffset = y + Math.sin((dotIndex + bandIndex) * 0.8) * 6;
                const twinkleDelay = (dotIndex + bandIndex) * 0.1;
                const twinkle = ((dotIndex + bandIndex * 3) % 7) === 0; // ~14% subset
                
                return (
                  <use
                    key={`dot-${bandIndex}-${dotIndex}`}
                    href="#dot"
                    x={xOffset}
                    y={yOffset}
                    style={{ animationDelay: `${twinkleDelay}s` } as React.CSSProperties}
                    className={twinkle ? "animate-[twinkle_8s_ease-in-out_infinite_alternate] motion-reduce:animate-none" : undefined}
                  />
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default BGGlobeDots;