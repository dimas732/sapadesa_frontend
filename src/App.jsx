import { useState } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero_section';
import TrackReportSection from './components/track_report_section';
// import HowItWorksSection from './components/how_it_work_section';
// import AboutSection from './components/about_section';
import Footer from './components/footer_section';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#f8faf9] text-slate-900 flex flex-col">
      <Navbar
        onOpenLogin={() => alert('Fitur Masuk akan dihubungkan ke halaman/modal login.')}
        onOpenReport={() => {
          document.getElementById('lacak-status')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1 w-full">
        <HeroSection
          onCreateReport={() => alert('Form/modal Buat Laporan bisa dibuka di sini.')}
          onCheckStatus={() => scrollToSection('lacak-status')}
        />

        <TrackReportSection />
      </main>

      <Footer />
    </div>
  );
}