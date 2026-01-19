'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TourControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  currentSpeed: number;
}

const TourControls = ({
  isPlaying,
  onPlayPause,
  onReset,
  onSpeedChange,
  currentSpeed,
}: TourControlsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const speedOptions = [
    { value: 0.5, label: '0.5x' },
    { value: 1, label: '1x' },
    { value: 1.5, label: '1.5x' },
    { value: 2, label: '2x' },
  ];

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-muted/20 rounded-full animate-pulse" />
          <div className="w-12 h-12 bg-muted/20 rounded-full animate-pulse" />
          <div className="w-12 h-12 bg-muted/20 rounded-full animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlayPause}
            className="p-4 bg-gradient-to-r from-gold to-dark-gold text-primary rounded-full hover:shadow-gold-glow transition-all duration-300 hover:scale-110"
          >
            <Icon
              name={isPlaying ? 'PauseIcon' : 'PlayIcon'}
              size={24}
              variant="solid"
            />
          </button>
          <button
            onClick={onReset}
            className="p-3 bg-muted text-gold rounded-md hover:bg-gold hover:text-primary transition-all duration-300"
          >
            <Icon name="ArrowPathIcon" size={20} variant="outline" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="px-4 py-2 bg-muted text-gold rounded-md hover:bg-gold hover:text-primary transition-all duration-300 flex items-center space-x-2"
            >
              <Icon name="ForwardIcon" size={18} variant="outline" />
              <span className="text-sm font-cta font-bold">{currentSpeed}x</span>
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-full mb-2 right-0 bg-card border border-gold rounded-md shadow-gold-glow overflow-hidden">
                {speedOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onSpeedChange(option.value);
                      setShowSpeedMenu(false);
                    }}
                    className={`block w-full px-4 py-2 text-sm font-cta text-left transition-all duration-300 ${
                      currentSpeed === option.value
                        ? 'bg-gold text-primary' :'text-gold hover:bg-muted'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="p-3 bg-muted text-gold rounded-md hover:bg-gold hover:text-primary transition-all duration-300">
            <Icon name="Cog6ToothIcon" size={20} variant="outline" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-3">
        <Icon name="InformationCircleIcon" size={18} variant="outline" className="text-bronze" />
        <p className="text-xs text-text-secondary font-body">
          {isPlaying
            ? 'Auto-tour in progress. Click pause to explore manually.' :'Tour paused. Use navigation controls to explore at your own pace.'}
        </p>
      </div>
    </div>
  );
};

export default TourControls;