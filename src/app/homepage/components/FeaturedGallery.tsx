import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryItem {
  id: number;
  title: string;
  country: string;
  year: string;
  image: string;
  alt: string;
  description: string;
}

interface FeaturedGalleryProps {
  className?: string;
}

const FeaturedGallery = ({ className = '' }: FeaturedGalleryProps) => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Ghana Independence',
      country: 'Ghana',
      year: '1957',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_199652db0-1765741353780.png",
      alt: 'Historic black and white photograph of Kwame Nkrumah raising his hand in victory gesture during Ghana independence celebration with crowds in background',
      description: 'The first sub-Saharan African nation to gain independence, led by Kwame Nkrumah.'
    },
    {
      id: 2,
      title: 'Zimbabwean Liberation',
      country: 'Zimbabwe',
      year: '1980',
      image: "https://images.unsplash.com/photo-1652679751531-69a937ca896c",
      alt: 'Powerful image of African liberation fighters in military uniforms standing together with determination during Zimbabwe independence struggle',
      description: 'The culmination of a long armed struggle for freedom and self-determination.'
    },
    {
      id: 3,
      title: 'South African Freedom',
      country: 'South Africa',
      year: '1994',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e91f35f0-1768374628402.png",
      alt: 'Emotional photograph of diverse South African citizens celebrating with raised fists and South African flags during first democratic elections',
      description: 'The end of apartheid and the birth of a democratic rainbow nation.'
    }];

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-gray-300" />
              <span className="text-sm font-cta text-gray-700 uppercase tracking-wider">Liberation Stories</span>
              <div className="h-px w-8 bg-gray-300" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-gray-900 mb-6">
            Featured
            <span className="block mt-2 text-gray-600">Liberation Movements</span>
          </h2>
          <p className="text-lg text-gray-700 font-body max-w-3xl mx-auto leading-relaxed">
            Explore the pivotal moments that shaped African independence and the heroes who made freedom possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) =>
          <div
            key={item.id}
            className="group relative bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all duration-300 hover:shadow-md">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-200 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-cta font-bold text-gray-800">{item.year}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="MapPinIcon" size={16} variant="solid" className="text-gray-700" />
                  <span className="text-sm font-body text-gray-700">{item.country}</span>
                </div>

                <h3 className="text-xl font-headline font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700 font-body leading-relaxed mb-4">
                  {item.description}
                </p>

                <Link
                href="/liberation-gallery"
                className="inline-flex items-center space-x-2 text-sm font-cta font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">

                  <span>Explore Story</span>
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/liberation-gallery"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-200 text-gray-900 font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105">

            <Icon name="PhotoIcon" size={20} variant="solid" />
            <span>View Full Gallery</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedGallery;