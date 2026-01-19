'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  event: string;
  date: string;
}

const PhotoGallery = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1624695493372-0b492777f564",
    alt: 'Large group of diverse African students in traditional and modern attire gathered in museum exhibition hall with historical artifacts',
    title: 'Youth Education Program Launch',
    event: 'Educational Program',
    date: '2026-01-12'
  },
  {
    id: 2,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1492092d7-1768567457340.png",
    alt: 'Museum curator in professional attire presenting historical liberation movement artifacts to international diplomatic delegation',
    title: 'Diplomatic Visit from Pan-African Union',
    event: 'Diplomatic Event',
    date: '2026-01-08'
  },
  {
    id: 3,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1efd9225b-1768567457090.png",
    alt: 'Packed auditorium with diverse audience attending academic conference on African liberation history',
    title: 'Liberation History Conference',
    event: 'Conference',
    date: '2025-12-20'
  },
  {
    id: 4,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_18c91b0cc-1768498533243.png",
    alt: 'Museum visitors viewing large-scale exhibition featuring photographs and documents from African independence movements',
    title: 'Founding Fathers Exhibition Opening',
    event: 'Exhibition',
    date: '2025-12-15'
  },
  {
    id: 5,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fbe0e6f7-1764656197139.png",
    alt: 'African students engaged in interactive workshop using digital tablets to explore liberation movement archives',
    title: 'Digital Archive Workshop',
    event: 'Educational Program',
    date: '2025-12-10'
  },
  {
    id: 6,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_16edbe092-1766901450030.png",
    alt: 'Community gathering celebrating African heritage with traditional music performance in museum courtyard',
    title: 'Heritage Celebration Day',
    event: 'Community Event',
    date: '2025-12-05'
  }];


  if (!isHydrated) {
    return (
      <section className="bg-card border border-border rounded-lg p-8">
        <div className="h-8 bg-muted rounded w-1/3 mb-6 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) =>
          <div key={i} className="aspect-video bg-muted rounded-lg animate-pulse" />
          )}
        </div>
      </section>);

  }

  return (
    <section className="bg-white border border-gray-300 rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Icon name="PhotoIcon" size={24} variant="outline" className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-headline font-bold text-yellow-700">Event Gallery</h2>
            <p className="text-sm text-gray-600 font-body">Recent events and exhibitions</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image) =>
        <div
          key={image.id}
          onClick={() => setSelectedImage(image)}
          className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer">

            <AppImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs text-white font-cta font-bold mb-1">{image.event}</p>
                <h3 className="text-sm font-headline font-bold text-white mb-1">{image.title}</h3>
                <p className="text-xs text-white">{image.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedImage &&
      <div
        className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}>

          <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors duration-300">

            <Icon name="XMarkIcon" size={24} variant="outline" className="text-gray-800" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
              <AppImage
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain" />

            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-sm text-yellow-700 font-cta font-bold mb-2">{selectedImage.event}</p>
              <h3 className="text-xl font-headline font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-600">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default PhotoGallery;