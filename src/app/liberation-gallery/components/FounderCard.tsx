'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FounderCardProps {
  founder: {
    id: string;
    name: string;
    country: string;
    image: string;
    imageAlt: string;
    birthYear: number;
    deathYear: number | null;
    title: string;
    quote: string;
    achievements: string[];
  };
  onClick: () => void;
}

const FounderCard = ({ founder, onClick }: FounderCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={founder.image}
          alt={founder.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-300/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-headline font-bold text-yellow-700 mb-1">
            {founder.name}
          </h3>
          <p className="text-sm text-yellow-600 font-body">{founder.title}</p>
          <p className="text-xs text-gray-600 font-body mt-1">
            {founder.country} • {founder.birthYear}–{founder.deathYear || 'Present'}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-gray-100 border-l-4 border-yellow-500 p-3 rounded">
          <p className="text-xs font-accent italic text-gray-600 leading-relaxed">
            "{founder.quote}"
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-cta font-semibold text-yellow-700 uppercase tracking-wide">
            Key Achievements
          </p>
          <ul className="space-y-1.5">
            {founder.achievements.slice(0, 3).map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon
                  name="CheckCircleIcon"
                  size={14}
                  variant="solid"
                  className="text-yellow-500 mt-0.5 flex-shrink-0"
                />
                <span className="text-xs text-gray-600 font-body">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end pt-2">
          <span className="text-xs text-yellow-700 font-cta font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all duration-300">
            <span>Read Full Biography</span>
            <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;