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
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#0b1630] via-[#0d1f45] to-[#0a1430]">
      {/* Decorative background layers */}
      <div className="pointer-events-none fixed inset-0 transform-gpu z-20">
        {/* Subtle grid */}
        <div className="hidden" />
        {/* Conic ring accent */}
        <div className="hidden" />
        {/* Extra conic ring (counter-rotating) */}
        <div className="hidden" />
        {/* Faint starfield */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,1) 1.3px, transparent 1.3px)",
            backgroundSize: "3px 3px",
          }}
        />
        {/* Second starfield (larger, slower) */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1.8px, transparent 1.8px)",
            backgroundSize: "6px 6px",
          }}
        />
        {/* NEW: Twinkling stars (blinking specks) */}
        <div
          className="absolute inset-0 opacity-90 animate-pulse [animation-duration:5s]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.8) 0.8px, transparent 0.8px)",
            backgroundSize: "16px 16px, 24px 24px",
            backgroundPosition: "0 0, 12px 8px",
          }}
        />
        {/* Journey path with moving glow dot */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fde68a" stopOpacity="0.35" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <path id="journeyPath" d="M-50,780 C180,720 260,520 420,520 C620,520 620,760 800,760 C980,760 1040,560 1180,520 C1320,480 1460,620 1490,660" />
          </defs>
          {/* Soft glowing trail */}
          <use href="#journeyPath" stroke="url(#journeyGrad)" strokeWidth="3" fill="none" filter="url(#softGlow)" opacity="0.6" />
          {/* Fine path with draw-on animation */}
          <use href="#journeyPath" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" fill="none" strokeDasharray="8 10">
            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="18s" repeatCount="indefinite" />
          </use>
          {/* Moving nodes (multiple for a calm journey feel) */}
          <circle r="5" fill="#ffffff" filter="url(#softGlow)">
            <animateMotion dur="28s" repeatCount="indefinite" rotate="auto">
              <mpath href="#journeyPath" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#c4b5fd" opacity="0.9" filter="url(#softGlow)">
            <animateMotion dur="36s" begin="4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#journeyPath" />
            </animateMotion>
          </circle>
          <circle r="4" fill="#fde68a" opacity="0.9" filter="url(#softGlow)">
            <animateMotion dur="42s" begin="10s" repeatCount="indefinite" rotate="auto">
              <mpath href="#journeyPath" />
            </animateMotion>
          </circle>
        </svg>
        {/* Attached graphic at the top (smooth, subtle) */}
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1757488366071-ncmzg33r6ts.gif"
          alt="Top graphic"
          width={560}
          height={560}
          priority
          unoptimized
          className="absolute z-30 left-1/2 -translate-x-1/2 top-6 sm:top-10 w-[68vw] max-w-[560px] h-auto [filter:saturate(1.05)_contrast(1.05)] [will-change:opacity,transform] drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)] animate-[breathe_4s_ease-in-out_infinite] motion-safe:animate-[float_22s_ease-in-out_infinite,breathe_4s_ease-in-out_infinite]"
        />
        {/* Warm cloud tint on right for photo-like look */}
        <div
          className="absolute bottom-0 right-0 h-[60vh] w-full pointer-events-none bg-gradient-to-t from-amber-300/40 via-amber-200/25 to-transparent"
        />
        {/* Soft white clouds along bottom (left + right bias) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[58vh] opacity-100 blur-xl"
          style={{
            backgroundImage:
              "radial-gradient(80% 60% at 15% 115%, rgba(255,255,255,0.98) 24%, rgba(255,255,255,0.75) 48%, transparent 62%), radial-gradient(80% 60% at 85% 115%, rgba(255,255,255,0.98) 24%, rgba(255,255,255,0.75) 48%, transparent 62%), radial-gradient(140% 90% at 50% 120%, rgba(255,255,255,0.95) 18%, rgba(255,255,255,0.7) 42%, transparent 60%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "bottom center",
          }}
        />
        {/* Remove blobs/glows for realism */}
        <div className="hidden" />
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