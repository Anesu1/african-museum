import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

interface UpcomingEventsProps {
  className?: string;
}

const UpcomingEvents = ({ className = '' }: UpcomingEventsProps) => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Liberation Day Commemoration',
      date: 'March 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Exhibition Hall',
      category: 'Ceremony',
      description: 'Annual celebration honoring the heroes of African liberation movements with special exhibitions and guest speakers.',
    },
    {
      id: 2,
      title: 'Pan-African Unity Conference',
      date: 'April 22, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Conference Center',
      category: 'Conference',
      description: 'International gathering of scholars, activists, and leaders discussing contemporary African unity and development.',
    },
    {
      id: 3,
      title: 'Youth Education Workshop',
      date: 'May 8, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Learning Center',
      category: 'Workshop',
      description: 'Interactive educational program for students exploring African liberation history through multimedia presentations.',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Ceremony: 'bg-gold/20 text-gold border-gold/30',
      Conference: 'bg-bronze/20 text-bronze border-bronze/30',
      Workshop: 'bg-dark-gold/20 text-dark-gold border-dark-gold/30',
    };
    return colors[category] || 'bg-muted text-text-secondary border-border';
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-cta text-bronze uppercase tracking-wider">What's Happening</span>
              <div className="h-px w-8 bg-gold" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-text-primary mb-6">
            Upcoming
            <span className="block mt-2 text-gold">Events & Programs</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Join us for educational programs, commemorative ceremonies, and cultural events celebrating African liberation heritage.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-card border border-border rounded-lg p-6 hover:border-gold transition-all duration-300 hover:shadow-bronze-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-cta font-bold border ${getCategoryColor(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="CalendarIcon" size={16} variant="outline" />
                      <span className="text-sm font-body">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="ClockIcon" size={16} variant="outline" />
                      <span className="text-sm font-body">{event.time}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-headline font-bold text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-sm text-text-secondary font-body leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center space-x-2 text-bronze">
                    <Icon name="MapPinIcon" size={16} variant="solid" />
                    <span className="text-sm font-body">{event.location}</span>
                  </div>
                </div>

                <div className="lg:ml-6">
                  <Link
                    href="/news-and-events"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    <span>Learn More</span>
                    <Icon name="ArrowRightIcon" size={18} variant="outline" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news-and-events"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-card border-2 border-gold text-gold font-cta font-bold rounded-md hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-105"
          >
            <Icon name="CalendarDaysIcon" size={20} variant="outline" />
            <span>View All Events</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;