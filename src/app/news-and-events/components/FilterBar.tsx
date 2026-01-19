'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  const filters = [
    { id: 'all', label: 'All', icon: 'Squares2X2Icon' },
    { id: 'exhibitions', label: 'Exhibitions', icon: 'PhotoIcon' },
    { id: 'educational', label: 'Educational Programs', icon: 'AcademicCapIcon' },
    { id: 'diplomatic', label: 'Diplomatic Events', icon: 'GlobeAltIcon' },
    { id: 'conferences', label: 'Conferences', icon: 'UserGroupIcon' },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-md font-cta font-medium text-sm transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-accent text-accent-foreground shadow-gold-glow'
              : 'bg-card text-text-secondary border border-border hover:text-gold hover:border-gold'
          }`}
        >
          <Icon name={filter.icon as any} size={18} variant="outline" />
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;