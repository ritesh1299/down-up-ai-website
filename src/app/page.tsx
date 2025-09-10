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
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-white to-muted/60">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] animate-pulse [animation-duration:8s]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Conic ring accent */}
        <div className="absolute inset-0 opacity-50 blur-lg [mask-image:radial-gradient(circle_at_center,white,transparent_65%)] [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,0,0,0.12),transparent_30%,rgba(0,0,0,0.12)_60%,transparent_90%)] animate-spin [animation-duration:120s]" />
        {/* Faint starfield */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] animate-spin [animation-duration:180s] [animation-direction:reverse]"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] [background-image:repeating-linear-gradient(45deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_2px,transparent_2px,transparent_12px)] animate-pulse [animation-duration:10s]" />
        {/* Soft glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse [animation-duration:6s]" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-foreground/5 blur-3xl animate-pulse [animation-duration:7s]" />
        {/* Additional gradient blobs */}
        <div className="absolute top-1/3 -right-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-primary/10 to-foreground/5 blur-3xl animate-pulse [animation-duration:9s]" />
        <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-foreground/10 to-primary/5 blur-3xl animate-pulse [animation-duration:8s]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-[100px] opacity-70 animate-pulse [animation-duration:12s]" />
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