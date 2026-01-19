import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Artifact {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  era: string;
  significance: string;
}

interface ArtifactShowcaseProps {
  artifacts: Artifact[];
}

const ArtifactShowcase = ({ artifacts }: ArtifactShowcaseProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gold mb-4">
            Featured Artifacts
          </h2>
          <p className="text-text-secondary font-body max-w-2xl mx-auto">
            Explore significant artifacts from African liberation movements, each telling a powerful story of resistance and triumph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-gold-glow group"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={artifact.image}
                  alt={artifact.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-xs font-cta font-bold text-primary">{artifact.era}</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-headline font-bold text-gold group-hover:text-dark-gold transition-colors duration-300">
                  {artifact.name}
                </h3>
                <p className="text-sm text-text-secondary font-body line-clamp-3">
                  {artifact.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-start space-x-2">
                    <Icon name="SparklesIcon" size={18} variant="solid" className="text-bronze mt-0.5" />
                    <p className="text-xs text-text-secondary font-body italic">
                      {artifact.significance}
                    </p>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-muted text-gold font-cta font-bold rounded-md hover:bg-gold hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2">
                  <Icon name="EyeIcon" size={18} variant="outline" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtifactShowcase;