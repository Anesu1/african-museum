import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Icon from '@/components/ui/AppIcon';
import NewsEventsInteractive from './components/NewsEventsInteractive';


export const metadata: Metadata = {
  title: 'News & Events - African Liberation Museum',
  description:
    'Stay updated with the latest exhibitions, educational programs, diplomatic events, and liberation heritage activities at the African Liberation Museum.',
};

export default function NewsAndEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-card to-background py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center">
                  <Icon name="NewspaperIcon" size={32} variant="outline" className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-gold mb-6">
                News & Events
              </h1>
              <p className="text-lg md:text-xl text-text-secondary font-body leading-relaxed mb-8">
                Discover the latest exhibitions, educational programs, and liberation heritage activities shaping
                African cultural preservation and pan-African unity.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="CalendarIcon" size={20} variant="outline" className="text-bronze" />
                  <span className="text-sm font-body">Regular Updates</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="AcademicCapIcon" size={20} variant="outline" className="text-bronze" />
                  <span className="text-sm font-body">Educational Programs</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="GlobeAltIcon" size={20} variant="outline" className="text-bronze" />
                  <span className="text-sm font-body">International Events</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <NewsEventsInteractive />
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-yellow-700 mb-4">
              Experience Liberation History
            </h2>
            <p className="text-lg text-gray-600 font-body mb-8 max-w-2xl mx-auto">
              Visit the African Liberation Museum to explore our exhibitions, participate in educational programs, and
              connect with the heritage that shaped our continent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact-and-visit"
                className="px-8 py-3 bg-yellow-500 text-white font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Plan Your Visit
              </a>
              <a
                href="/digital-museum-tour"
                className="px-8 py-3 bg-white text-yellow-700 border border-yellow-500 font-cta font-bold rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Virtual Tour
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}