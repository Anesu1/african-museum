import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface TourFeaturesProps {
  features: Feature[];
}

const TourFeatures = ({ features }: TourFeaturesProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-4">
            Virtual Tour Features
          </h2>
          <p className="text-text-secondary font-body max-w-2xl mx-auto">
            Experience the museum with cutting-edge technology designed to make African liberation history accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-card border border-border rounded-lg p-6 hover:border-gold transition-all duration-300 hover:shadow-gold-glow group"
            >
              <div className="bg-gradient-to-br from-gold/20 to-bronze/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  variant="solid"
                  className="text-gold"
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-gold mb-3 group-hover:text-dark-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-text-secondary font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-gold/5 via-bronze/5 to-gold/5 border border-gold/20 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-gold/20 p-4 rounded-full">
                <Icon name="DevicePhoneMobileIcon" size={32} variant="solid" className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-gold mb-1">
                  Access Anywhere
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  Compatible with desktop, tablet, and mobile devices
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <Icon name="ArrowDownTrayIcon" size={20} variant="solid" />
              <span>Download Tour Guide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourFeatures;