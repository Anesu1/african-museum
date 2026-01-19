'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TourLocation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface TourNavigationProps {
  locations: TourLocation[];
  currentLocation: string;
  onLocationChange: (locationId: string) => void;
}

const TourNavigation = ({ locations, currentLocation, onLocationChange }: TourNavigationProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-muted/20 rounded-md animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const currentLocationData = locations.find((loc) => loc.id === currentLocation);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-gold/10 to-bronze/10 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="MapIcon" size={24} variant="solid" className="text-gold" />
            <div>
              <h3 className="text-lg font-headline font-bold text-gold">Tour Locations</h3>
              <p className="text-xs text-text-secondary font-body">
                {locations.length} areas to explore
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden p-2 rounded-md text-gold hover:bg-muted transition-all duration-300"
          >
            <Icon
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={20}
              variant="outline"
            />
          </button>
        </div>
      </div>

      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 space-y-2 max-h-[600px] overflow-y-auto">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => {
                onLocationChange(location.id);
                setIsExpanded(false);
              }}
              className={`w-full text-left p-4 rounded-md transition-all duration-300 ${
                currentLocation === location.id
                  ? 'bg-gradient-to-r from-gold/20 to-bronze/20 border border-gold shadow-gold-glow'
                  : 'bg-muted/50 hover:bg-muted border border-transparent hover:border-gold/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <Icon
                  name={location.icon as any}
                  size={24}
                  variant={currentLocation === location.id ? 'solid' : 'outline'}
                  className={currentLocation === location.id ? 'text-gold' : 'text-bronze'}
                />
                <div className="flex-1">
                  <h4
                    className={`text-sm font-cta font-bold mb-1 ${
                      currentLocation === location.id ? 'text-gold' : 'text-text-primary'
                    }`}
                  >
                    {location.name}
                  </h4>
                  <p className="text-xs text-text-secondary font-body line-clamp-2">
                    {location.description}
                  </p>
                </div>
                {currentLocation === location.id && (
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-gold" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentLocationData && (
        <div className="p-4 bg-muted/30 border-t border-border">
          <div className="flex items-center space-x-2 text-sm text-text-secondary font-body">
            <Icon name="MapPinIcon" size={16} variant="solid" className="text-bronze" />
            <span>Currently viewing: {currentLocationData.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourNavigation;