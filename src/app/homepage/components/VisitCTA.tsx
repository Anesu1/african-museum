import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface VisitCTAProps {
  className?: string;
}

const VisitCTA = ({ className = '' }: VisitCTAProps) => {
  const features = [
    {
      icon: 'CubeIcon',
      title: 'Virtual Tours',
      description: 'Explore our museum from anywhere in the world',
    },
    {
      icon: 'MapPinIcon',
      title: 'Physical Visits',
      description: 'Experience the museum in Liberation City',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Educational Programs',
      description: 'Join workshops and learning opportunities',
    },
  ];

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white via-gray-100 to-white border border-gray-300 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-px w-8 bg-yellow-500" />
                  <span className="text-sm font-cta text-yellow-600 uppercase tracking-wider">Plan Your Visit</span>
                  <div className="h-px w-8 bg-yellow-500" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-headline font-bold text-gray-900 mb-6">
                Experience African Liberation
                <span className="block mt-2 text-yellow-500">Heritage Today</span>
              </h2>

              <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you visit us virtually or in person, immerse yourself in the powerful stories of African liberation and honor the heroes who fought for freedom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-lg hover:border-yellow-500 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-4">
                    <Icon name={feature.icon as any} size={32} variant="outline" className="text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-headline font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-body">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/digital-museum-tour"
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Icon name="CubeIcon" size={20} variant="solid" />
                <span>Start Virtual Tour</span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  variant="outline"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact-and-visit"
                className="group w-full sm:w-auto px-8 py-4 bg-gray-100 border-2 border-yellow-500 text-yellow-500 font-cta font-bold rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Icon name="MapPinIcon" size={20} variant="outline" />
                <span>Plan Physical Visit</span>
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  variant="outline"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-700 font-body mb-2">Open Daily</p>
              <p className="text-base font-cta font-bold text-yellow-500">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCTA;