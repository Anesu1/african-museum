'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEventProps {
  event: {
    id: string;
    year: number;
    title: string;
    description: string;
    countries: string[];
    type: 'Independence' | 'Battle' | 'Treaty' | 'Movement';
  };
  isLast: boolean;
}

const TimelineEvent = ({ event, isLast }: TimelineEventProps) => {
  const typeIcons = {
    Independence: 'FlagIcon',
    Battle: 'FireIcon',
    Treaty: 'DocumentTextIcon',
    Movement: 'UserGroupIcon',
  };

  const typeColors = {
    Independence: 'text-yellow-700 border-yellow-700',
    Battle: 'text-red-600 border-red-600',
    Treaty: 'text-orange-600 border-orange-600',
    Movement: 'text-green-700 border-green-700',
  };

  return (
    <div className="relative flex items-start space-x-4 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/50 to-transparent" />
      )}

      {/* Year Badge */}
      <div className="flex-shrink-0 w-24 pt-1">
        <div className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-md text-center">
          <span className="text-sm font-cta font-bold">{event.year}</span>
        </div>
      </div>

      {/* Event Icon */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${
          typeColors[event.type]
        } bg-white flex items-center justify-center z-10`}
      >
        <Icon
          name={typeIcons[event.type] as any}
          size={20}
          variant="solid"
          className={typeColors[event.type].split(' ')[0]}
        />
      </div>

      {/* Event Content */}
      <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-base font-headline font-bold text-yellow-700">{event.title}</h4>
          <span className="px-2 py-0.5 rounded text-xs font-cta font-medium bg-gray-100 text-gray-600">
            {event.type}
          </span>
        </div>

        <p className="text-sm text-gray-600 font-body mb-3">{event.description}</p>

        <div className="flex flex-wrap gap-2">
          {event.countries.map((country, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-md text-xs font-body bg-gray-100 text-orange-600 border border-orange-300"
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;