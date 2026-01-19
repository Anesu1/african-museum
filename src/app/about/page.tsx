import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import MuseumStory from './components/MuseumStory';
import CoreValues from './components/CoreValues';
import LeadershipTeam from './components/LeadershipTeam';
import PartnershipsRecognition from './components/PartnershipsRecognition';


export const metadata: Metadata = {
  title: 'About - African Liberation Museum',
  description: 'Discover the INSTAK Foundation story, our mission to preserve African liberation history, meet our leadership team, and explore the core values that guide our work in honoring freedom fighters across the continent.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <MuseumStory />
        <CoreValues />
        <LeadershipTeam />
        <PartnershipsRecognition />
      </main>

      <Footer />
    </div>
  );
}