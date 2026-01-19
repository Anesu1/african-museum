import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  const museumLocation = {
    lat: -17.8252,
    lng: 31.0335,
    name: 'Museum of African Liberation',
    address: 'Liberation City, Heritage District, Harare, Zimbabwe',
  };

  return (
    <section className={`bg-card border border-border rounded-lg overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Map */}
        <div className="relative h-96 lg:h-full min-h-[400px] bg-muted">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={museumLocation.name}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${museumLocation.lat},${museumLocation.lng}&z=14&output=embed`}
            className="absolute inset-0"
          />
        </div>

        {/* Location Details */}
        <div className="p-8 lg:p-12 space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-bold text-gold mb-4">Our Location</h2>
            <p className="text-text-secondary font-body leading-relaxed">
              The Museum of African Liberation is located in the heart of Liberation City, a purpose-built heritage district dedicated to preserving African liberation history.
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30 flex-shrink-0">
                <Icon name="MapPinIcon" size={24} variant="solid" className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-cta font-bold text-text-primary mb-2">Address</h3>
                <p className="text-text-secondary font-body">{museumLocation.address}</p>
              </div>
            </div>

            {/* Coordinates */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30 flex-shrink-0">
                <Icon name="GlobeAltIcon" size={24} variant="solid" className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-cta font-bold text-text-primary mb-2">Coordinates</h3>
                <p className="text-text-secondary font-body">
                  {museumLocation.lat}°S, {museumLocation.lng}°E
                </p>
              </div>
            </div>

            {/* Directions */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30 flex-shrink-0">
                <Icon name="MapIcon" size={24} variant="solid" className="text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-cta font-bold text-text-primary mb-2">Getting Here</h3>
                <p className="text-text-secondary font-body">
                  Located 15km from Harare International Airport. Accessible via Liberation Highway (A2) with ample parking available.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${museumLocation.lat},${museumLocation.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            >
              <Icon name="MapIcon" size={20} variant="solid" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;