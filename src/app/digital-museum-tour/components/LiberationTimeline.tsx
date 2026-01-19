import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  country: string;
  icon: string;
}

interface LiberationTimelineProps {
  events: TimelineEvent[];
}

const LiberationTimeline = ({ events }: LiberationTimelineProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-yellow-700 mb-4">
            Liberation Timeline
          </h2>
          <p className="text-gray-600 font-body max-w-2xl mx-auto">
            Journey through the pivotal moments that shaped African independence and liberation movements across the continent.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 via-orange-400 to-yellow-700 hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:pr-12">
                  <div
                    className={`bg-white border border-gray-300 rounded-lg p-6 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3 lg:justify-end">
                      <div className="bg-yellow-100 p-2 rounded-md">
                        <Icon
                          name={event.icon as any}
                          size={24}
                          variant="solid"
                          className="text-yellow-700"
                        />
                      </div>
                      <span className="text-sm font-cta font-bold text-yellow-700">
                        {event.country}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-yellow-700 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-body text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-full border-4 border-white items-center justify-center shadow-lg">
                  <span className="text-sm font-cta font-bold text-gray-800">{event.year}</span>
                </div>

                <div className="flex-1 lg:pl-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiberationTimeline;