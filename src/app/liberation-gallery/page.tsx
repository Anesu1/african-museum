import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import LiberationGalleryInteractive from './components/LiberationGalleryInteractive';

export const metadata: Metadata = {
  title: 'Liberation Gallery - African Liberation Museum',
  description: 'Explore interactive country-by-country liberation stories, founding fathers profiles, and historic battles documentation. Discover the sacred heritage of African independence movements and the heroes who fought for freedom.',
};

export default function LiberationGalleryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <LiberationGalleryInteractive />
      </main>
      <Footer />
    </div>
  );
}