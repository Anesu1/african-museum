import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative h-[60vh] min-h-[500px] overflow-hidden ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <AppImage
          src="https://images.unsplash.com/photo-1692009739023-c9c892034830"
          alt="Historic African liberation monument with bronze statues against dramatic sky at sunset"
          fill
          className="object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-gray-100" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-yellow-500 mb-6 leading-tight">
            Our Story, Your Heritage
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 font-body leading-relaxed mb-8">
            Preserving the sacred legacy of African liberation movements and honoring the heroes who fought for freedom across the continent.
          </p>
          <div className="flex items-center space-x-4 p-6 bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-lg">
            <div className="w-1 h-16 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-full" />
            <blockquote className="flex-1">
              <p className="text-lg font-accent italic text-yellow-600 mb-2">
                "I am not African because I was born in Africa, but because Africa was born in me."
              </p>
              <cite className="text-sm text-gray-600 font-body not-italic">— Kwame Nkrumah</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;