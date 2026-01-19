import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface MuseumStoryProps {
  className?: string;
}

const MuseumStory = ({ className = '' }: MuseumStoryProps) => {
  const milestones = [
  {
    year: '2018',
    title: 'Vision Conceived',
    description: 'INSTAK Foundation established with the mission to preserve African liberation history for future generations.'
  },
  {
    year: '2020',
    title: 'Foundation Laid',
    description: 'Construction began on Liberation City, creating a sacred space for African heritage and education.'
  },
  {
    year: '2023',
    title: 'Doors Opened',
    description: 'Museum of African Liberation officially opened, welcoming visitors from across the continent and beyond.'
  },
  {
    year: '2026',
    title: 'Digital Expansion',
    description: 'Launched comprehensive digital platform, making liberation history accessible to global audiences.'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-yellow-500 mb-6">
            The INSTAK Foundation Story
          </h2>
          <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
            Born from a vision to create a monumental space that honors African liberation heroes, the INSTAK Foundation has transformed into the continent's premier institution for preserving and celebrating our shared heritage.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center">
                <Icon name="SparklesIcon" size={24} variant="solid" className="text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-yellow-500 mb-2">Our Mission</h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  To preserve, document, and celebrate the history of African liberation movements, ensuring that the sacrifices and triumphs of our heroes inspire future generations to continue the work of unity and progress.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center">
                <Icon name="EyeIcon" size={24} variant="solid" className="text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-yellow-500 mb-2">Our Vision</h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  To be the definitive global authority on African liberation history, creating a sacred digital and physical space where the stories of our founding fathers and freedom fighters are preserved with dignity and shared with the world.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center">
                <Icon name="HeartIcon" size={24} variant="solid" className="text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-yellow-500 mb-2">Our Purpose</h3>
                <p className="text-gray-700 font-body leading-relaxed">
                  To connect Africans and the diaspora with their heritage, fostering pride, unity, and understanding through immersive educational experiences that honor the past while inspiring the future.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-md">
            <AppImage
              src="https://images.unsplash.com/photo-1683190650439-4586e6b54476"
              alt="Modern museum building with bronze and gold architectural elements reflecting African heritage design"
              fill
              className="object-cover" />

          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-200 hidden lg:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) =>
            <div
              key={milestone.year}
              className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl font-headline font-bold text-yellow-500">{milestone.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-yellow-500 to-transparent" />
                    </div>
                    <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-700 font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full items-center justify-center shadow-md">
                  <Icon name="StarIcon" size={28} variant="solid" className="text-gray-800" />
                </div>

                <div className="hidden lg:block w-5/12" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default MuseumStory;