import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface MissionSectionProps {
  className?: string;
}

const MissionSection = ({ className = '' }: MissionSectionProps) => {
  const missions = [
    {
      icon: 'BookOpenIcon',
      title: 'Preserve History',
      description: 'Safeguarding the stories, artifacts, and testimonials of African liberation movements for future generations.',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Educate Generations',
      description: 'Providing comprehensive educational resources that illuminate the path to African independence and unity.',
    },
    {
      icon: 'HeartIcon',
      title: 'Honor Heroes',
      description: 'Celebrating the courage and sacrifice of liberation fighters who gave everything for African freedom.',
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Unite Africa',
      description: 'Fostering pan-African consciousness and solidarity through shared understanding of our liberation heritage.',
    },
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-cta text-bronze uppercase tracking-wider">Our Mission</span>
              <div className="h-px w-8 bg-gold" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-text-primary mb-6">
            Preserving African
            <span className="block mt-2 text-gold">Liberation Heritage</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            The Museum of African Liberation stands as a testament to the indomitable spirit of African peoples in their quest for freedom, dignity, and self-determination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-lg p-8 hover:border-gold transition-all duration-300 hover:shadow-bronze-glow"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />

              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name={mission.icon as any} size={32} variant="outline" className="text-gold" />
                </div>
              </div>

              <h3 className="text-xl font-headline font-bold text-text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                {mission.title}
              </h3>

              <p className="text-sm text-text-secondary font-body leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;