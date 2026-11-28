import { useState } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero_section';
import TrackReportSection from './components/track_report_section';
import CreateReportModal from './components/create_report_modal';
import HowItWorksSection from './components/how_it_work_section';
import AboutSection from './components/about_section';
import Footer from './components/footer_section';

export default function App() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] text-slate-900 flex flex-col">
      <Navbar
        onOpenLogin={() => alert('Fitur Masuk akan dihubungkan ke halaman/modal login.')}
        onOpenReport={() => setIsReportModalOpen(true)}
      />

      <main className="flex-1 w-full">
        <HeroSection
          onCreateReport={() => setIsReportModalOpen(true)}
          onCheckStatus={() => scrollToSection('lacak-status')}
        />

        <TrackReportSection />
        <HowItWorksSection />
        <AboutSection />
        <Footer />
      </main>

      <CreateReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}