import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32 overflow-hidden ${className}`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bronze rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-full backdrop-blur-sm border border-gold/30">
              <Icon name="MapPinIcon" size={48} variant="solid" className="text-gold" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-gold leading-tight">
            Visit & Connect
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Plan your journey to the Museum of African Liberation. Experience the sacred heritage of African liberation movements in Liberation City, Zimbabwe.
          </p>

          {/* Quote */}
          <div className="pt-6">
            <p className="text-base sm:text-lg font-accent italic text-bronze max-w-2xl mx-auto">
              "I am not African because I was born in Africa, but because Africa was born in me."
            </p>
            <p className="text-sm text-text-secondary font-body mt-2">— Kwame Nkrumah</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;