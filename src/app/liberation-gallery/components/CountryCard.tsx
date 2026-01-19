'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CountryCardProps {
  country: {
    id: string;
    name: string;
    flag: string;
    flagAlt: string;
    liberationYear: number;
    foundingFather: string;
    founderImage: string;
    founderImageAlt: string;
    keyBattle: string;
    description: string;
  };
  onClick: () => void;
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={country.flag}
          alt={country.flagAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-300/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-headline font-bold text-yellow-500 mb-1">
            {country.name}
          </h3>
          <p className="text-sm text-white font-body">
            Independence: {country.liberationYear}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500">
            <AppImage
              src={country.founderImage}
              alt={country.founderImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-gray-600 font-body">Founding Father</p>
            <p className="text-sm font-cta font-semibold text-yellow-700">
              {country.foundingFather}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 font-body line-clamp-3">
          {country.description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-300">
          <div className="flex items-center space-x-2">
            <Icon name="FireIcon" size={16} variant="solid" className="text-yellow-500" />
            <span className="text-xs text-gray-600 font-body">
              Key Battle: {country.keyBattle}
            </span>
          </div>
          <Icon
            name="ChevronRightIcon"
            size={20}
            variant="outline"
            className="text-yellow-700 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;