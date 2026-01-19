import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  alt: string;
  featured?: boolean;
}

const NewsCard = ({ title, excerpt, category, date, image, alt, featured = false }: NewsCardProps) => {
  return (
    <article
      className={`group bg-card border border-border rounded-lg overflow-hidden hover:shadow-bronze-glow transition-all duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-48'}`}>
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-cta font-bold rounded-md">
            {category}
          </span>
        </div>
      </div>
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        <div className="flex items-center space-x-2 text-sm text-text-secondary mb-3">
          <Icon name="CalendarIcon" size={16} variant="outline" />
          <time dateTime={date}>{date}</time>
        </div>
        <h3
          className={`font-headline font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-300 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {title}
        </h3>
        <p className={`text-text-secondary font-body leading-relaxed mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
          {excerpt}
        </p>
        <button className="flex items-center space-x-2 text-gold hover:text-dark-gold transition-colors duration-300 font-cta font-medium text-sm">
          <span>Read More</span>
          <Icon name="ArrowRightIcon" size={16} variant="outline" />
        </button>
      </div>
    </article>
  );
};

export default NewsCard;