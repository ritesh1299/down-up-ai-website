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

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-white to-muted/60">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] animate-pulse [animation-duration:5s]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Conic ring accent */}
        <div className="absolute inset-0 opacity-50 blur-lg [mask-image:radial-gradient(circle_at_center,white,transparent_65%)] [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0.12),transparent_30%,rgba(0,0,0,0.12)_60%,transparent_90%)] animate-spin [animation-duration:65s]" />
        {/* Extra conic ring (counter-rotating) */}
        <div className="absolute inset-0 opacity-30 blur-[14px] [mask-image:radial-gradient(circle_at_center,white,transparent_60%)] [background:conic-gradient(from_0deg_at_50%_50%,transparent_10%,rgba(0,0,0,0.10)_35%,transparent_65%,rgba(0,0,0,0.10)_90%)] animate-spin [animation-duration:95s] [animation-direction:reverse]" />
        {/* Faint starfield */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] animate-spin [animation-duration:115s] [animation-direction:reverse]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        {/* Second starfield (larger, slower) */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] animate-spin [animation-duration:170s]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "6px 6px",
          }}
        />
        {/* Parallax dust ring */}
        <div
          className="absolute inset-0 opacity-20 blur-md [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] animate-spin [animation-duration:80s]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.10) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 50%)",
          }}
        />
        {/* Nebula sweep (rotating linear gradient) */}
        <div
          className="absolute inset-0 opacity-20 blur-2xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)] animate-spin [animation-duration:75s]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0.10) 60%, transparent 100%)",
          }}
        />
        {/* Planet arcs (subtle repeating conic rings) */}
        <div className="absolute inset-0 opacity-15 blur-md [mask-image:radial-gradient(circle_at_center,white,transparent_62%)] [background:repeating-conic-gradient(from_0deg,rgba(0,0,0,0.06)_0deg,rgba(0,0,0,0.06)_6deg,transparent_6deg,transparent_18deg)] animate-spin [animation-duration:115s] [animation-direction:reverse]" />
        {/* Comet streaks (thin diagonal lines orbiting) */}
        <div
          className="absolute inset-0 opacity-12 blur-sm [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)] mix-blend-multiply animate-spin [animation-duration:70s] [animation-timing-function:linear]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(60deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, transparent 1px, transparent 10px)",
            backgroundSize: "auto",
          }}
        />
        {/* NEW: Twinkling stars (blinking specks) */}
        <div
          className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)] animate-pulse [animation-duration:3.5s]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.14) 0.8px, transparent 0.8px), radial-gradient(rgba(0,0,0,0.10) 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px, 26px 26px",
            backgroundPosition: "0 0, 13px 9px",
          }}
        />
        {/* Aurora bands (soft moving ribbons) */}
        <div
          className="absolute inset-0 opacity-15 blur-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] origin-[120%_50%] animate-spin [animation-duration:90s]"
          style={{
            backgroundImage:
              "linear-gradient( to right, transparent 0%, rgba(0,0,0,0.06) 35%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.06) 65%, transparent 100%)",
          }}
        />
        {/* Orbiting flare (small light that circles) */}
        <div className="absolute inset-0 origin-[0%_50%] animate-spin [animation-duration:100s]">
          <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-[220%] -translate-y-1/2 rounded-full blur-[60px] opacity-20 bg-foreground/20" />
        </div>
        {/* NEW: Meteor belt (thin fast ring) */}
        <div className="absolute inset-0 opacity-12 blur-sm [mask-image:radial-gradient(circle_at_center,white,transparent_60%)] [background:repeating-conic-gradient(from_0deg,rgba(0,0,0,0.10)_0deg,rgba(0,0,0,0.10)_2deg,transparent_2deg,transparent_10deg)] animate-spin [animation-duration:55s]" />
        {/* NEW: Elliptical orbit dots */}
        <div
          className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] animate-spin [animation-duration:60s] [animation-direction:reverse]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 60% 50%, rgba(0,0,0,0.12) 1px, transparent 1px), radial-gradient(circle at 40% 50%, rgba(0,0,0,0.10) 1px, transparent 1px), radial-gradient(circle at 50% 35%, rgba(0,0,0,0.10) 1px, transparent 1px), radial-gradient(circle at 50% 65%, rgba(0,0,0,0.10) 1px, transparent 1px)",
            backgroundSize: "auto",
          }}
        />
        {/* NEW: Solar wind sweep 2 (different origin) */}
        <div
          className="absolute inset-0 opacity-15 blur-2xl origin-[80%_10%] [mask-image:radial-gradient(ellipse_at_center,white,transparent_66%)] animate-spin [animation-duration:85s] [animation-direction:reverse]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.14) 50%, rgba(0,0,0,0.08) 65%, transparent 100%)",
          }}
        />
        {/* NEW: Radial burst (subtle spokes) */}
        <div className="absolute inset-0 opacity-12 blur-sm [mask-image:radial-gradient(circle_at_center,white,transparent_64%)] [background:repeating-radial-gradient(circle, rgba(0,0,0,0.08)_0px, rgba(0,0,0,0.08)_1px, transparent_1px, transparent_8px)] animate-spin [animation-duration:95s]" />
        {/* NEW: Secondary aurora band (counter-rotating) */}
        <div
          className="absolute inset-0 opacity-20 blur-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent_68%)] origin-[20%_80%] animate-spin [animation-duration:85s] [animation-direction:reverse]"
          style={{
            backgroundImage:
              "linear-gradient( to right, transparent 0%, rgba(0,0,0,0.07) 30%, rgba(0,0,0,0.13) 50%, rgba(0,0,0,0.07) 70%, transparent 100%)",
          }}
        />
        {/* NEW: Solar corona waves */}
        <div className="absolute inset-0 blur-xl [opacity:.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent_66%)] [background:repeating-linear-gradient(0deg,rgba(0,0,0,0.08)_0px,rgba(0,0,0,0.08)_2px,transparent_2px,transparent_12px)] animate-spin [animation-duration:60s]" />
        {/* NEW: Orbiting particle trail */}
        <div
          className="absolute inset-0 [opacity:.15] [mask-image:radial-gradient(circle_at_center,white,transparent_62%)] animate-spin [animation-duration:50s] [animation-direction:reverse]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.14) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
            backgroundPosition: "center",
          }}
        />
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-25 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_2px,transparent_2px,transparent_12px)] animate-pulse [animation-duration:7s]" />
        {/* Soft glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse [animation-duration:5s]" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-foreground/5 blur-3xl animate-pulse [animation-duration:6s]" />
        {/* Additional gradient blobs */}
        <div className="absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-primary/10 to-foreground/5 blur-3xl animate-pulse [animation-duration:6s]" />
        <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-foreground/10 to-primary/5 blur-3xl animate-pulse [animation-duration:6s]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[100px] opacity-80 animate-pulse [animation-duration:9s]" />
        {/* Grain flicker for life */}
        <div className="absolute inset-0 opacity-10 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] animate-pulse [animation-duration:4s]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')", backgroundSize: "200px 200px" }} />
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