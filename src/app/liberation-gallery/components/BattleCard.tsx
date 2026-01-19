'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface BattleCardProps {
  battle: {
    id: string;
    name: string;
    country: string;
    date: string;
    image: string;
    imageAlt: string;
    description: string;
    significance: string;
    casualties: string;
    outcome: 'Victory' | 'Strategic Success' | 'Turning Point';
  };
  onClick: () => void;
}

const BattleCard = ({ battle, onClick }: BattleCardProps) => {
  const outcomeColors = {
    Victory: 'text-green-700',
    'Strategic Success': 'text-yellow-700',
    'Turning Point': 'text-orange-600',
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={battle.image}
          alt={battle.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-300/40 to-transparent" />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-cta font-bold bg-gray-100/80 backdrop-blur-sm ${
              outcomeColors[battle.outcome]
            }`}
          >
            {battle.outcome}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-headline font-bold text-yellow-500 mb-1">
            {battle.name}
          </h3>
          <div className="flex items-center space-x-3 text-xs text-white font-body">
            <span className="flex items-center space-x-1">
              <Icon name="MapPinIcon" size={14} variant="outline" />
              <span>{battle.country}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="CalendarIcon" size={14} variant="outline" />
              <span>{battle.date}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-gray-600 font-body line-clamp-2">
          {battle.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Icon
              name="SparklesIcon"
              size={16}
              variant="solid"
              className="text-yellow-700 mt-0.5 flex-shrink-0"
            />
            <div>
              <p className="text-xs font-cta font-semibold text-yellow-700">Significance</p>
              <p className="text-xs text-gray-600 font-body mt-0.5">
                {battle.significance}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Icon
              name="UserGroupIcon"
              size={16}
              variant="outline"
              className="text-orange-600 mt-0.5 flex-shrink-0"
            />
            <div>
              <p className="text-xs font-cta font-semibold text-orange-600">Casualties</p>
              <p className="text-xs text-gray-600 font-body mt-0.5">
                {battle.casualties}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end pt-2 border-t border-gray-300">
          <span className="text-xs text-yellow-700 font-cta font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all duration-300">
            <span>View Full Documentation</span>
            <Icon name="DocumentTextIcon" size={14} variant="outline" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BattleCard;