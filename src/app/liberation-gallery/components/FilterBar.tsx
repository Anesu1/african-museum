'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  activeTab: 'countries' | 'founders' | 'battles' | 'timeline';
  onTabChange: (tab: 'countries' | 'founders' | 'battles' | 'timeline') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  selectedDecade: string;
  onDecadeChange: (decade: string) => void;
}

const FilterBar = ({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  selectedDecade,
  onDecadeChange,
}: FilterBarProps) => {
  const tabs = [
    { id: 'countries' as const, label: 'Countries', icon: 'GlobeAltIcon' },
    { id: 'founders' as const, label: 'Founding Fathers', icon: 'UserGroupIcon' },
    { id: 'battles' as const, label: 'Historic Battles', icon: 'FireIcon' },
    { id: 'timeline' as const, label: 'Timeline', icon: 'ClockIcon' },
  ];

  const regions = ['All Regions', 'West Africa', 'East Africa', 'Southern Africa', 'Central Africa', 'North Africa'];
  const decades = ['All Periods', '1950s', '1960s', '1970s', '1980s', '1990s'];

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-cta font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-yellow-100 text-yellow-800 shadow-md'
                : 'bg-white text-gray-600 border border-gray-300 hover:text-yellow-600 hover:border-yellow-400'
            }`}
          >
            <Icon name={tab.icon as any} size={18} variant={activeTab === tab.id ? 'solid' : 'outline'} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={18}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search liberation history..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
          />
        </div>

        {/* Region Filter */}
        <div className="relative">
          <Icon
            name="MapIcon"
            size={18}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <select
            value={selectedRegion}
            onChange={(e) => onRegionChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-yellow-400 transition-colors duration-300 appearance-none cursor-pointer"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <Icon
            name="ChevronDownIcon"
            size={16}
            variant="outline"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>

        {/* Decade Filter */}
        <div className="relative">
          <Icon
            name="CalendarIcon"
            size={18}
            variant="outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          <select
            value={selectedDecade}
            onChange={(e) => onDecadeChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-yellow-400 transition-colors duration-300 appearance-none cursor-pointer"
          >
            {decades.map((decade) => (
              <option key={decade} value={decade}>
                {decade}
              </option>
            ))}
          </select>
          <Icon
            name="ChevronDownIcon"
            size={16}
            variant="outline"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;