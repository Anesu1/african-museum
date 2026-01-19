'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'country' | 'founder' | 'battle' | null;
  data: any;
}

const DetailModal = ({ isOpen, onClose, type, data }: DetailModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  const renderCountryDetails = () => (
    <div className="space-y-6">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <AppImage
          src={data.flag}
          alt={data.flagAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <h2 className="text-3xl font-headline font-bold text-gold mb-2">{data.name}</h2>
          <p className="text-text-secondary font-body">
            Independence: {data.liberationYear}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-2 uppercase tracking-wide">
              Founding Father
            </h3>
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-bronze">
                <AppImage
                  src={data.founderImage}
                  alt={data.founderImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-gold">{data.foundingFather}</p>
                <p className="text-xs text-text-secondary font-body">{data.founderTitle}</p>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-2 uppercase tracking-wide">
              Key Battle
            </h3>
            <p className="text-sm text-text-secondary font-body">{data.keyBattle}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-2 uppercase tracking-wide">
              Liberation Story
            </h3>
            <p className="text-sm text-text-secondary font-body leading-relaxed">
              {data.fullDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-gold/30 rounded-lg p-4">
        <h3 className="text-sm font-cta font-bold text-gold mb-3 uppercase tracking-wide">
          Key Achievements
        </h3>
        <ul className="space-y-2">
          {data.achievements?.map((achievement: string, index: number) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon
                name="CheckCircleIcon"
                size={16}
                variant="solid"
                className="text-bronze mt-0.5 flex-shrink-0"
              />
              <span className="text-sm text-text-secondary font-body">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderFounderDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <AppImage
              src={data.image}
              alt={data.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-gold mb-2">{data.name}</h2>
            <p className="text-bronze font-cta font-semibold">{data.title}</p>
            <p className="text-text-secondary font-body text-sm">
              {data.country} • {data.birthYear}–{data.deathYear || 'Present'}
            </p>
          </div>

          <div className="bg-muted border-l-4 border-gold p-4 rounded">
            <p className="text-sm font-accent italic text-text-secondary leading-relaxed">
              "{data.quote}"
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-3 uppercase tracking-wide">
              Biography
            </h3>
            <p className="text-sm text-text-secondary font-body leading-relaxed">
              {data.biography}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-3 uppercase tracking-wide">
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {data.achievements?.map((achievement: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon
                    name="StarIcon"
                    size={16}
                    variant="solid"
                    className="text-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-text-secondary font-body">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBattleDetails = () => (
    <div className="space-y-6">
      <div className="relative h-72 rounded-lg overflow-hidden">
        <AppImage
          src={data.image}
          alt={data.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-3xl font-headline font-bold text-gold mb-2">{data.name}</h2>
          <div className="flex items-center space-x-4 text-text-secondary font-body">
            <span className="flex items-center space-x-1">
              <Icon name="MapPinIcon" size={16} variant="outline" />
              <span>{data.country}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="CalendarIcon" size={16} variant="outline" />
              <span>{data.date}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-2 uppercase tracking-wide">
              Battle Overview
            </h3>
            <p className="text-sm text-text-secondary font-body leading-relaxed">
              {data.fullDescription}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-3 uppercase tracking-wide">
              Significance
            </h3>
            <p className="text-sm text-text-secondary font-body leading-relaxed">
              {data.significance}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-bronze mb-2 uppercase tracking-wide">
              Casualties
            </h3>
            <p className="text-sm text-text-secondary font-body">{data.casualties}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-success mb-2 uppercase tracking-wide">
              Outcome
            </h3>
            <p className="text-sm text-text-secondary font-body">{data.outcome}</p>
          </div>

          <div className="bg-card border border-gold/30 rounded-lg p-4">
            <h3 className="text-sm font-cta font-bold text-gold mb-3 uppercase tracking-wide">
              Key Commanders
            </h3>
            <ul className="space-y-2">
              {data.commanders?.map((commander: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon
                    name="UserIcon"
                    size={16}
                    variant="solid"
                    className="text-bronze mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-text-secondary font-body">{commander}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm text-text-secondary hover:text-gold hover:bg-card transition-all duration-300"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8">
          {type === 'country' && renderCountryDetails()}
          {type === 'founder' && renderFounderDetails()}
          {type === 'battle' && renderBattleDetails()}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;