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
    <main className="min-h-screen relative bg-gradient-to-b from-[#0b1630] via-[#0d1f45] to-[#0a1430]">
      {/* Decorative background layers */}
      <div className="pointer-events-none fixed inset-0 transform-gpu z-0">
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