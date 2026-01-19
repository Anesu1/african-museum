'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  artifactImage?: string;
}

interface TourView {
  id: string;
  image: string;
  alt: string;
  hotspots: Hotspot[];
}

interface VirtualTourViewerProps {
  currentView: TourView;
  onNavigate: (direction: 'left' | 'right' | 'forward' | 'back') => void;
}

const VirtualTourViewer = ({ currentView, onNavigate }: VirtualTourViewerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewRotation, setViewRotation] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleRotateView = (direction: 'left' | 'right') => {
    setViewRotation((prev) => {
      const newRotation = direction === 'left' ? prev - 15 : prev + 15;
      return newRotation % 360;
    });
  };

  if (!isHydrated) {
    return (
      <div className="relative w-full h-[600px] bg-muted/20 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`relative w-full ${
          isFullscreen ? 'h-screen' : 'h-[600px]'
        } bg-background rounded-lg overflow-hidden border border-border`}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{ transform: `rotateY(${viewRotation}deg)` }}
        >
          <AppImage
            src={currentView.image}
            alt={currentView.alt}
            className="w-full h-full object-cover"
          />

          {currentView.hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => setSelectedHotspot(hotspot)}
              className="absolute w-8 h-8 bg-gold/80 rounded-full border-2 border-white shadow-gold-glow hover:scale-125 transition-all duration-300 flex items-center justify-center group"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-primary" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card border border-gold rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                <p className="text-xs font-cta font-bold text-gold">{hotspot.title}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="bg-card/90 backdrop-blur-sm border border-gold rounded-md px-4 py-2">
            <p className="text-sm font-cta font-bold text-gold">360° Virtual Tour</p>
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <Icon
              name={isFullscreen ? 'ArrowsPointingInIcon' : 'ArrowsPointingOutIcon'}
              size={20}
              variant="outline"
            />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <button
            onClick={() => handleRotateView('left')}
            className="p-3 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <Icon name="ArrowLeftIcon" size={20} variant="outline" />
          </button>
          <button
            onClick={() => onNavigate('forward')}
            className="p-3 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <Icon name="ArrowUpIcon" size={20} variant="outline" />
          </button>
          <button
            onClick={() => handleRotateView('right')}
            className="p-3 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </button>
        </div>

        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button className="p-2 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300">
            <Icon name="SpeakerWaveIcon" size={20} variant="outline" />
          </button>
          <button className="p-2 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300">
            <Icon name="BookmarkIcon" size={20} variant="outline" />
          </button>
          <button className="p-2 bg-card/90 backdrop-blur-sm border border-gold rounded-md text-gold hover:bg-gold hover:text-primary transition-all duration-300">
            <Icon name="ShareIcon" size={20} variant="outline" />
          </button>
        </div>
      </div>

      {selectedHotspot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4">
          <div className="bg-card border border-gold rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-xl font-headline font-bold text-gold">
                {selectedHotspot.title}
              </h3>
              <button
                onClick={() => setSelectedHotspot(null)}
                className="p-2 rounded-md text-text-secondary hover:text-gold hover:bg-muted transition-all duration-300"
              >
                <Icon name="XMarkIcon" size={24} variant="outline" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {selectedHotspot.artifactImage && (
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <AppImage
                    src={selectedHotspot.artifactImage}
                    alt={`Detailed view of ${selectedHotspot.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-text-secondary font-body leading-relaxed">
                {selectedHotspot.description}
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <button className="px-4 py-2 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2">
                  <Icon name="SpeakerWaveIcon" size={18} variant="solid" />
                  <span>Audio Guide</span>
                </button>
                <button className="px-4 py-2 bg-card border border-gold text-gold font-cta font-bold rounded-md hover:bg-gold hover:text-primary transition-all duration-300 flex items-center space-x-2">
                  <Icon name="BookmarkIcon" size={18} variant="outline" />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualTourViewer;