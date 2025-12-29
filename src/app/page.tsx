import HeroSection from "@/components/sections/HeroSection";
import CompetencesSection from "@/components/sections/CompetencesSection";
import RealisationsSection from "@/components/sections/RealisationsSection";
import IdentiteSection from "@/components/sections/IdentiteSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompetencesSection />
      <RealisationsSection />
      <IdentiteSection />
      <ContactSection />
    </main>
  );
}
