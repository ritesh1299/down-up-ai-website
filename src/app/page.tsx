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
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-white to-muted/60">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0 transform-gpu motion-reduce:hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] animate-pulse [animation-duration:10s]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Conic ring accent */}
        <div className="absolute inset-0 opacity-30 blur-lg [mask-image:radial-gradient(circle_at_center,white,transparent_65%)] [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0.12),transparent_30%,rgba(0,0,0,0.12)_60%,transparent_90%)] animate-spin ease-linear [animation-duration:140s]" />
        {/* Extra conic ring (counter-rotating) */}
        <div className="absolute inset-0 opacity-20 blur-[14px] [mask-image:radial-gradient(circle_at_center,white,transparent_60%)] [background:conic-gradient(from_0deg_at_50%_50%,transparent_10%,rgba(0,0,0,0.10)_35%,transparent_65%,rgba(0,0,0,0.10)_90%)] animate-spin ease-linear [animation-duration:200s] [animation-direction:reverse]" />
        {/* Faint starfield */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] animate-spin ease-linear [animation-duration:260s] [animation-direction:reverse]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        {/* Second starfield (larger, slower) */}
        <div
          className="absolute inset-0 opacity-12 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] animate-spin ease-linear [animation-duration:320s]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "6px 6px",
          }}
        />
        {/* Parallax dust ring */}
        <div
          className="absolute inset-0 opacity-15 blur-md [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] animate-spin ease-linear [animation-duration:160s]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Nebula sweep (rotating linear gradient) */}
        <div
          className="absolute inset-0 opacity-15 blur-2xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)] animate-spin ease-linear [animation-duration:180s]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0.10) 60%, transparent 100%)",
          }}
        />
        {/* Planet arcs (subtle repeating conic rings) */}
        <div className="absolute inset-0 opacity-10 blur-md [mask-image:radial-gradient(circle_at_center,white,transparent_62%)] [background:repeating-conic-gradient(from_0deg,rgba(0,0,0,0.06)_0deg,rgba(0,0,0,0.06)_6deg,transparent_6deg,transparent_18deg)] animate-spin ease-linear [animation-duration:220s] [animation-direction:reverse]" />
        {/* NEW: Twinkling stars (blinking specks) */}
        <div
          className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)] animate-pulse [animation-duration:8s]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.8px), radial-gradient(rgba(0,0,0,0.10) 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px, 26px 26px",
            backgroundPosition: "0 0, 13px 9px",
          }}
        />
        {/* Aurora bands (soft moving ribbons) */}
        <div
          className="absolute inset-0 opacity-12 blur-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] origin-[120%_50%] animate-spin ease-linear [animation-duration:220s] max-md:hidden"
          style={{
            backgroundImage:
              "linear-gradient( to right, transparent 0%, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 65%, transparent 100%)",
          }}
        />
        {/* Orbiting flare (small light that circles) */}
        <div className="absolute inset-0 origin-[0%_50%] animate-spin ease-linear [animation-duration:200s]">
          <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-[220%] -translate-y-1/2 rounded-full blur-[60px] opacity-15 bg-foreground/20" />
        </div>
        {/* NEW: Meteor belt (thin fast ring) */}
        <div className="absolute inset-0 opacity-10 blur-sm [mask-image:radial-gradient(circle_at_center,white,transparent_60%)] [background:repeating-conic-gradient(from_0deg,rgba(0,0,0,0.10)_0deg,rgba(0,0,0,0.10)_2deg,transparent_2deg,transparent_10deg)] animate-spin ease-linear [animation-duration:160s]" />
        {/* NEW: Elliptical orbit dots */}
        <div
          className="absolute inset-0 opacity-12 [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] animate-spin ease-linear [animation-duration:180s] [animation-direction:reverse]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 50%, rgba(0,0,0,0.12) 1px, transparent 1px), radial-gradient(circle at 40% 50%, rgba(0,0,0,0.10) 1px, transparent 1px), radial-gradient(circle at 50% 35%, rgba(0,0,0,0.10) 1px, transparent 1px), radial-gradient(circle at 50% 65%, rgba(0,0,0,0.10) 1px, transparent 1px)",
            backgroundSize: "auto",
          }}
        />
        {/* NEW: Solar wind sweep 2 (different origin) */}
        <div
          className="absolute inset-0 opacity-12 blur-2xl origin-[80%_10%] [mask-image:radial-gradient(ellipse_at_center,white,transparent_66%)] animate-spin ease-linear [animation-duration:190s] [animation-direction:reverse] max-md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0.08) 65%, transparent 100%)",
          }}
        />
        {/* NEW: Radial burst (subtle spokes) */}
        <div className="absolute inset-0 opacity-10 blur-sm [mask-image:radial-gradient(circle_at_center,white,transparent_64%)] [background:repeating-radial-gradient(circle, rgba(0,0,0,0.08)_0px, rgba(0,0,0,0.08)_1px, transparent_1px, transparent_8px)] animate-spin ease-linear [animation-duration:200s] max-md:hidden" />
        {/* NEW: Secondary aurora band (counter-rotating) */}
        <div
          className="absolute inset-0 opacity-12 blur-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] origin-[20%_80%] animate-spin ease-linear [animation-duration:190s] [animation-direction:reverse] max-md:hidden"
          style={{
            backgroundImage:
              "linear-gradient( to right, transparent 0%, rgba(0,0,0,0.07) 30%, rgba(0,0,0,0.13) 50%, rgba(0,0,0,0.07) 70%, transparent 100%)",
          }}
        />
        {/* NEW: Solar corona waves */}
        <div className="absolute inset-0 blur-xl [opacity:.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent_66%)] [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_12px)] animate-spin ease-linear [animation-duration:180s] max-md:hidden" />
        {/* NEW: Orbiting particle trail */}
        <div
          className="absolute inset-0 [opacity:.12] [mask-image:radial-gradient(circle_at_center,white,transparent_62%)] animate-spin ease-linear [animation-duration:180s] [animation-direction:reverse]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            backgroundPosition: "center",
          }}
        />
        {/* Soft glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse [animation-duration:10s]" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-foreground/5 blur-3xl animate-pulse [animation-duration:12s]" />
        {/* Additional gradient blobs */}
        <div className="absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-primary/10 to-foreground/5 blur-3xl animate-pulse [animation-duration:12s]" />
        <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-foreground/10 to-primary/5 blur-3xl animate-pulse [animation-duration:12s]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[100px] opacity-70 animate-pulse [animation-duration:16s]" />
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