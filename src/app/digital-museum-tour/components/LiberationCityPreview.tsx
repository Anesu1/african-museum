import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CityLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

interface LiberationCityPreviewProps {
  locations: CityLocation[];
}

const LiberationCityPreview = ({ locations }: LiberationCityPreviewProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-4">
            Liberation City Experience
          </h2>
          <p className="text-text-secondary font-body max-w-2xl mx-auto">
            Explore the Heritage Village and surrounding facilities that bring African liberation history to life through immersive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-gold-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={location.image}
                  alt={location.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-headline font-bold text-gold mb-2">
                    {location.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-text-secondary font-body leading-relaxed">
                  {location.description}
                </p>
                <div className="space-y-2">
                  {location.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className="text-bronze mt-0.5"
                      />
                      <span className="text-sm text-text-secondary font-body">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <Icon name="CubeIcon" size={20} variant="solid" />
                  <span>Explore in 3D</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gold/10 via-bronze/10 to-gold/10 border border-gold/30 rounded-lg p-8">
            <Icon name="MapIcon" size={48} variant="solid" className="text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-headline font-bold text-gold mb-3">
              Plan Your Visit to Liberation City
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Experience the complete Liberation City complex in person. Book your guided tour and immerse yourself in African liberation history.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
              <Icon name="CalendarIcon" size={20} variant="solid" />
              <span>Book Physical Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiberationCityPreview;