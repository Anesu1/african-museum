import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Partner {
  name: string;
  type: string;
  logo: string;
  alt: string;
}

interface PartnershipsRecognitionProps {
  className?: string;
}

const PartnershipsRecognition = ({ className = '' }: PartnershipsRecognitionProps) => {
  const partners: Partner[] = [
  {
    name: 'UNESCO',
    type: 'Cultural Heritage',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11db578af-1764703743474.png",
    alt: 'UNESCO logo with blue and white design representing cultural heritage organization'
  },
  {
    name: 'African Union',
    type: 'Pan-African Unity',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19ff680d8-1764747314703.png",
    alt: 'African Union emblem with green and gold colors symbolizing continental unity'
  },
  {
    name: 'University of Ghana',
    type: 'Academic Research',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15cc08abf-1767391344404.png",
    alt: 'University crest with traditional academic symbols and African design elements'
  },
  {
    name: 'National Archives',
    type: 'Historical Preservation',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10931e2e7-1767121745491.png",
    alt: 'National archives seal with document and preservation symbols'
  },
  {
    name: 'Pan-African Heritage Foundation',
    type: 'Cultural Exchange',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a45d6e3e-1768567454133.png",
    alt: 'Foundation logo featuring African continent outline with cultural symbols'
  },
  {
    name: 'International Museum Council',
    type: 'Museum Standards',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13ebf0f85-1768498903895.png",
    alt: 'Museum council emblem with classical building columns and modern design'
  }];


  const recognitions = [
  {
    icon: 'TrophyIcon',
    title: 'UNESCO Heritage Recognition',
    year: '2024',
    description: 'Recognized for outstanding contribution to African cultural heritage preservation.'
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Excellence in Education Award',
    year: '2025',
    description: 'Honored for innovative educational programs connecting youth with liberation history.'
  },
  {
    icon: 'StarIcon',
    title: 'Pan-African Unity Medal',
    year: '2025',
    description: 'Awarded by African Union for promoting continental solidarity through heritage.'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Digital Innovation Award',
    year: '2026',
    description: 'Recognized for groundbreaking digital museum experiences and accessibility.'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partnerships Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-yellow-500 mb-6">
              Our Partners
            </h2>
            <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
              We collaborate with leading institutions, organizations, and cultural bodies to advance our mission of preserving and sharing African liberation history.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) =>
            <div
              key={index}
              className="group bg-white border border-gray-300 rounded-lg p-4 hover:border-yellow-500 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">

                <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden">
                  <AppImage
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300" />

                </div>
                <h3 className="text-sm font-cta font-bold text-gray-900 mb-1 group-hover:text-yellow-500 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-700 font-body">{partner.type}</p>
              </div>
            )}
          </div>
        </div>

        {/* Recognition Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-yellow-500 mb-6">
              Recognition & Awards
            </h2>
            <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence in heritage preservation and education has been recognized by prestigious institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) =>
            <div
              key={index}
              className="group bg-white border border-gray-300 rounded-lg p-6 hover:border-yellow-500 hover:shadow-md transition-all duration-300">

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon
                    name={recognition.icon as any}
                    size={28}
                    variant="solid"
                    className="text-gray-900" />

                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-headline font-bold text-yellow-500 group-hover:text-gray-900 transition-colors duration-300">
                        {recognition.title}
                      </h3>
                      <span className="text-sm font-cta font-bold text-yellow-500">{recognition.year}</span>
                    </div>
                    <p className="text-gray-700 font-body leading-relaxed">
                      {recognition.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Collaboration CTA */}
        <div className="mt-16 bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-300 rounded-lg p-8 text-center">
          <Icon name="HandRaisedIcon" size={48} variant="outline" className="text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-bold text-yellow-500 mb-3">
            Partner With Us
          </h3>
          <p className="text-gray-700 font-body leading-relaxed max-w-2xl mx-auto mb-6">
            Join our network of institutions, organizations, and cultural bodies committed to preserving African liberation heritage. Together, we can ensure these stories inspire generations to come.
          </p>
          <a
            href="/contact-and-visit"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105">

            <span>Contact Us</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </a>
        </div>
      </div>
    </section>);

};

export default PartnershipsRecognition;