import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { ClientLogos } from '@/app/components/ClientLogos';
import { IndustrySection } from '@/app/components/IndustrySection';
import { ModulesSection } from '@/app/components/ModulesSection';
import { SecuritySection } from '@/app/components/SecuritySection';
import { BenefitsSection } from '@/app/components/BenefitsSection';
import { WhyChooseSection } from '@/app/components/WhyChooseSection';
import { FinalCTA } from '@/app/components/FinalCTA';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30">
      <Navigation />
      <main>
        <HeroSection />
        <ClientLogos />
        <IndustrySection />
        <ModulesSection />
        <SecuritySection />
        <BenefitsSection />
        <WhyChooseSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
