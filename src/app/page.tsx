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
    <main className="min-h-screen relative bg-[#F6F7F9]">
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