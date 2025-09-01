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
    <main className="min-h-screen bg-white">
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