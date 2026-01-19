import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface EventCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  alt: string;
  registrationOpen: boolean;
}

const EventCard = ({
  title,
  description,
  category,
  date,
  time,
  location,
  image,
  alt,
  registrationOpen,
}: EventCardProps) => {
  return (
    <article className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-cta font-bold rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-headline font-bold text-gray-800 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 font-body leading-relaxed mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Icon name="CalendarIcon" size={16} variant="outline" className="text-yellow-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Icon name="ClockIcon" size={16} variant="outline" className="text-yellow-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Icon name="MapPinIcon" size={16} variant="outline" className="text-yellow-500" />
            <span>{location}</span>
          </div>
        </div>
        {registrationOpen ? (
          <button className="w-full px-4 py-2.5 bg-yellow-500 text-white font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Register Now
          </button>
        ) : (
          <button
            disabled
            className="w-full px-4 py-2.5 bg-gray-200 text-gray-500 font-cta font-bold rounded-md cursor-not-allowed"
          >
            Registration Closed
          </button>
        )}
      </div>
    </article>
  );
};

export default EventCard;