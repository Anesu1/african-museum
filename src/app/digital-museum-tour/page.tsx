import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import DigitalTourInteractive from './components/DigitalTourInteractive';

export const metadata: Metadata = {
  title: 'Digital Museum Tour - African Liberation Museum',
  description: 'Experience the Museum of African Liberation through immersive 3D virtual tours. Explore liberation history, artifacts, and Liberation City from anywhere in the world with 360° panoramic views and interactive exhibits.',
};

export default function DigitalMuseumTourPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DigitalTourInteractive />
      <Footer />
    </main>
  );
}