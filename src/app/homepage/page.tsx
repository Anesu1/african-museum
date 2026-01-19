import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'Museum of African Liberation - Preserving Our Heritage',
  description: 'Experience the profound spirit of African liberation movements through immersive storytelling, 3D virtual tours, and comprehensive historical archives. Honoring the heroes who fought for freedom and inspiring future generations.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 bg-gray-100">
        <HomepageInteractive />
      </main>
      <Footer />
    </div>
  );
}