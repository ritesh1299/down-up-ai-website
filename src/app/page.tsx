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
import UniverseParallax from "@/components/visual/universe-parallax";
import TimeTravelTopOverlay from "@/components/visual/time-travel-top";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0b1630] via-[#0d1f45] to-[#0a1430]">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0 transform-gpu motion-reduce:hidden">
        {/* Subtle grid */}
        <div className="hidden" />
        {/* Conic ring accent */}
        <div className="hidden" />
        {/* Extra conic ring (counter-rotating) */}
        <div className="hidden" />
        {/* Faint starfield */}
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_15%)]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "2px 2px",
          }}
        />
        {/* Second starfield (larger, slower) */}
        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_25%)]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1.2px, transparent 1.2px)",
            backgroundSize: "6px 6px",
          }}
        />
        {/* Hide abstract rings/nebula for realistic sky */}
        <div className="hidden" />
        {/* NEW: Twinkling stars (blinking specks) */}
        <div
          className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,white,transparent_30%)] animate-pulse [animation-duration:6s]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 0.8px, transparent 0.8px), radial-gradient(rgba(255,255,255,0.6) 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px, 26px 26px",
            backgroundPosition: "0 0, 13px 9px",
          }}
        />
        {/* Hide remaining abstract layers */}
        <div className="hidden" />
        <div className="hidden" />
        <div className="hidden" />
        <div className="hidden" />
        <div className="hidden" />
        <div className="hidden" />
        {/* Warm cloud tint on right for photo-like look */}
        <div
          className="absolute bottom-0 right-0 h-[42vh] w-full pointer-events-none [mask-image:linear-gradient(to_top,white,transparent_55%)]"
          style={{
            backgroundImage:
              "radial-gradient(80% 60% at 85% 115%, rgba(248,180,120,0.38) 0%, rgba(248,180,120,0.22) 35%, transparent 70%)",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* NEW: Graphic wave (layered curved bands at bottom) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[38vh] opacity-90 blur-2xl [mask-image:linear-gradient(to_top,white,transparent_60%)]"
          style={{
            backgroundImage:
              "radial-gradient(120% 70% at 20% 120%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.7) 40%, transparent 60%), radial-gradient(120% 70% at 80% 120%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.7) 40%, transparent 60%), radial-gradient(160% 90% at 50% 120%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.6) 35%, transparent 60%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "bottom center",
            WebkitMaskImage: "linear-gradient(to top, white, transparent 60%)",
          }}
        />
        {/* Remove blobs/glows for realism */}
        <div className="hidden" />
      {/* Time-travel era overlay (top-only) */}
      <TimeTravelTopOverlay />
      {/* Mouse parallax overlay on top */}
      <UniverseParallax />
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
    </main>
  );
}