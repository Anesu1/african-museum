import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesProps {
  className?: string;
}

const CoreValues = ({ className = '' }: CoreValuesProps) => {
  const values: CoreValue[] = [
    {
      icon: 'ShieldCheckIcon',
      title: 'Authenticity',
      description: 'We preserve and present African liberation history with unwavering commitment to truth, accuracy, and cultural integrity.',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Education',
      description: 'We empower through knowledge, making liberation history accessible and engaging for learners of all ages and backgrounds.',
    },
    {
      icon: 'UsersIcon',
      title: 'Unity',
      description: 'We celebrate pan-African solidarity, honoring the interconnected struggles and triumphs across the continent.',
    },
    {
      icon: 'LightBulbIcon',
      title: 'Innovation',
      description: 'We embrace modern technology to create immersive experiences that bring history to life for contemporary audiences.',
    },
    {
      icon: 'HandRaisedIcon',
      title: 'Respect',
      description: 'We honor the sacrifices of liberation heroes with dignity, reverence, and appropriate cultural sensitivity.',
    },
    {
      icon: 'GlobeAltIcon',
      title: 'Accessibility',
      description: 'We ensure liberation history reaches global audiences through inclusive design and multilingual resources.',
    },
  ];

  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-yellow-500 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
            These principles guide every aspect of our work, from curation and preservation to education and community engagement.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-300 rounded-lg p-8 hover:border-yellow-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon
                    name={value.icon as any}
                    size={32}
                    variant="solid"
                    className="text-gray-800"
                  />
                </div>
                <h3 className="text-xl font-headline font-bold text-yellow-500 group-hover:text-gray-900 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-gray-300 rounded-lg p-8 max-w-3xl">
            <Icon name="ChatBubbleLeftRightIcon" size={40} variant="outline" className="text-yellow-500 mx-auto mb-4" />
            <p className="text-xl font-accent italic text-yellow-500 mb-3">
              "Our People, Your Africa"
            </p>
            <p className="text-gray-700 font-body leading-relaxed">
              This motto embodies our commitment to shared heritage and the universal relevance of African liberation history. We tell these stories not just for Africans, but for all humanity to understand the profound impact of our continent's journey to freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;