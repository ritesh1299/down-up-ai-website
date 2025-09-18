import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import ExecutiveSearch from "@/components/sections/executive-search";
import WhatWeOffer from "@/components/sections/what-we-offer";
import BuiltDifferent from "@/components/sections/built-different";
import TeamSection from "@/components/sections/team";
import Testimonial from "@/components/sections/testimonial";
import ProvenSuccess from "@/components/sections/proven-success";
import UnlockPotentialSection from "@/components/sections/unlock-potential";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-black">
      {/* Decorative background layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Yin-Yang split circle background */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 md:top-16 w-[520px] sm:w-[640px] md:w-[760px] aspect-square rounded-full opacity-20"
          style={{ background: "conic-gradient(#ffffff 0 180deg, #000000 180deg)" }}
          aria-hidden="true"
        />

        {/* Subtle animated doodle elements */}
        <div className="absolute inset-0 opacity-10" aria-hidden>
          {/* squiggle */}
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute animate-[float_22s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{ top: "16%", left: "6%" }}
          >
            <path d="M2 20c8-14 24-14 32 0s24 14 32 0 24-14 32 0 16 14 20 10" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          </svg>
          {/* plus */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute animate-[float_26s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{ top: "34%", right: "10%" }}
          >
            <path d="M12 4v16M4 12h16" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          </svg>
          {/* ring */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute animate-[float_28s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{ bottom: "22%", left: "14%" }}
          >
            <circle cx="28" cy="28" r="18" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
            <circle cx="28" cy="28" r="8" stroke="#fff" strokeOpacity="0.6" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
          {/* triangle */}
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute animate-[float_24s_ease-in-out_infinite] motion-reduce:animate-none"
            style={{ bottom: "12%", right: "18%" }}
          >
            <path d="M27 8l18 32H9L27 8Z" stroke="#fff" strokeOpacity="0.9" strokeWidth="1.2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Wireframe globe background */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 sm:top-2 md:top-4 w-[1200px] max-w-[95vw] h-[240px] sm:h-[340px] md:h-[420px] opacity-25 animate-[float_24s_ease-in-out_infinite] motion-reduce:animate-none">
          <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid meet" shapeRendering="geometricPrecision" className="w-full h-full animate-[fadeIn_800ms_ease-out_1_both]" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <radialGradient id="glow" cx="50%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
              <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
              {/* bottom fade mask */}
              <linearGradient id="fadeGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="420">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="75%" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <mask id="fadeDown" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="420">
                <rect x="0" y="0" width="1200" height="420" fill="url(#fadeGrad)" />
              </mask>
            </defs>
            {/* Globe outline */}
            <g mask="url(#fadeDown)">
              <ellipse cx="600" cy="240" rx="420" ry="180" stroke="url(#glow)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              {/* Parallels */}
              <ellipse cx="600" cy="240" rx="380" ry="150" stroke="#ffffff" strokeOpacity="0.28" vectorEffect="non-scaling-stroke" />
              <ellipse cx="600" cy="240" rx="320" ry="110" stroke="#ffffff" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" />
              <ellipse cx="600" cy="240" rx="250" ry="70" stroke="#ffffff" strokeOpacity="0.12" vectorEffect="non-scaling-stroke" />
              {/* Meridians */}
              <path d="M600 60c100 0 180 80 180 180s-80 180-180 180-180-80-180-180 80-180 180-180Z" stroke="#ffffff" strokeOpacity="0.28" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M600 60c-100 0-180 80-180 180s80 180 180 180" stroke="#ffffff" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M600 60c160 0 260 80 260 180s-100 180-260 180" stroke="#ffffff" strokeOpacity="0.12" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              {/* Connections (arcs) */}
              <path d="M420 190 Q600 80 820 210" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M360 250 Q600 130 940 260" stroke="#ffffff" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M500 300 Q640 200 780 290" stroke="#ffffff" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              {/* Nodes */}
              {[
                [420,190], [820,210], [360,250], [940,260], [500,300], [780,290], [600,160], [660,220]
              ].map(([x,y],i)=> (
                <g key={i} filter="url(#soft)">
                  <circle cx={x} cy={y} r="3.5" fill="#ffffff" />
                  <circle cx={x} cy={y} r="8" fill="#ffffff" opacity="0.08" />
                </g>
              ))}
              {/* Subtle background glow */}
              <ellipse cx="600" cy="240" rx="430" ry="190" fill="url(#glow)" opacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
      {/* Foreground content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ExecutiveSearch />
        <WhatWeOffer />
        <BuiltDifferent />
        <TeamSection />
        <Testimonial />
        <ProvenSuccess />
        <UnlockPotentialSection />
        <Footer />
      </div>
    </main>
  );
}