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
      <div className="pointer-events-none fixed inset-0 transform-gpu z-0 hidden">
        {/* Subtle grid */}
        <div className="hidden" />
        {/* Conic ring accent */}
        <div className="hidden" />
        {/* Extra conic ring (counter-rotating) */}
        <div className="hidden" />
        {/* Faint starfield */}
        <div className="hidden" />
        {/* Second starfield (larger, slower) */}
        <div className="hidden" />
        {/* NEW: Twinkling stars (blinking specks) */}
        <div className="hidden" />
        {/* Journey path with moving glow dot */}
        <svg className="hidden" />
        {/* Warm cloud tint on right for photo-like look */}
        <div className="hidden" />
        {/* Soft white clouds along bottom (left + right bias) */}
        <div className="hidden" />
        {/* Remove blobs/glows for realism */}
        <div className="hidden" />
      </div>
      {/* Foreground content */}
      <div className="relative z-10">
        {/* Top wireframe globe with connecting dots */}
        <div className="pointer-events-none fixed left-1/2 -translate-x-1/2 top-0 w-[1200px] max-w-[95vw] h-[340px] sm:h-[380px] md:h-[420px] opacity-95 z-[2000] animate-[fadeIn_800ms_ease-out_1_both]">
          <svg viewBox="0 0 1200 420" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="20%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
              </radialGradient>
              <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
            {/* Globe outline */}
            <ellipse cx="600" cy="240" rx="420" ry="180" stroke="url(#glow)" strokeWidth="1.5" />
            {/* Parallels */}
            <ellipse cx="600" cy="240" rx="380" ry="150" stroke="#93c5fd" strokeOpacity="0.35" />
            <ellipse cx="600" cy="240" rx="320" ry="110" stroke="#93c5fd" strokeOpacity="0.25" />
            <ellipse cx="600" cy="240" rx="250" ry="70" stroke="#93c5fd" strokeOpacity="0.2" />
            {/* Meridians */}
            <path d="M600 60c100 0 180 80 180 180s-80 180-180 180-180-80-180-180 80-180 180-180Z" stroke="#c4b5fd" strokeOpacity="0.35" />
            <path d="M600 60c-100 0-180 80-180 180s80 180 180 180" stroke="#c4b5fd" strokeOpacity="0.25" />
            <path d="M600 60c160 0 260 80 260 180s-100 180-260 180" stroke="#c4b5fd" strokeOpacity="0.2" />
            {/* Connections (arcs) */}
            <path d="M420 190 Q600 80 820 210" stroke="#fde68a" strokeOpacity="0.7" strokeWidth="1.6" />
            <path d="M360 250 Q600 130 940 260" stroke="#93c5fd" strokeOpacity="0.6" />
            <path d="M500 300 Q640 200 780 290" stroke="#c4b5fd" strokeOpacity="0.55" />
            {/* Nodes */}
            {[
              [420,190], [820,210], [360,250], [940,260], [500,300], [780,290], [600,160], [660,220]
            ].map(([x,y],i)=> (
              <g key={i} filter="url(#soft)">
                <circle cx={x} cy={y} r="3.5" fill="#ffffff" />
                <circle cx={x} cy={y} r="8" fill="#60a5fa" opacity="0.15" />
              </g>
            ))}
            {/* Subtle background glow */}
            <ellipse cx="600" cy="240" rx="430" ry="190" fill="url(#glow)" opacity="0.08" />
          </svg>
        </div>
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