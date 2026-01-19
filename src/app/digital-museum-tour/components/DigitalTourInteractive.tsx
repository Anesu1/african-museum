'use client';

import React, { useState, useEffect } from 'react';
import TourHero from './TourHero';
import TourFeatures from './TourFeatures';
import ArtifactShowcase from './ArtifactShowcase';
import LiberationTimeline from './LiberationTimeline';
import LiberationCityPreview from './LiberationCityPreview';
import TourNavigation from './TourNavigation';
import VirtualTourViewer from './VirtualTourViewer';
import TourControls from './TourControls';


interface TourLocation {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface TourView {
  id: string;
  image: string;
  alt: string;
  hotspots: Array<{
    id: string;
    x: number;
    y: number;
    title: string;
    description: string;
    artifactImage?: string;
  }>;
}

interface Artifact {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  era: string;
  significance: string;
}

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  country: string;
  icon: string;
}

interface CityLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const DigitalTourInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('entrance');
  const [isPlaying, setIsPlaying] = useState(false);
  const [tourSpeed, setTourSpeed] = useState(1);
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tourLocations: TourLocation[] = [
  {
    id: 'entrance',
    name: 'Grand Entrance Hall',
    description: 'Begin your journey through African liberation history in our monumental entrance hall featuring the eternal flame of freedom.',
    icon: 'HomeIcon'
  },
  {
    id: 'founding-fathers',
    name: 'Founding Fathers Gallery',
    description: 'Honor the visionaries who led African nations to independence, including Kwame Nkrumah, Julius Nyerere, and Nelson Mandela.',
    icon: 'UserGroupIcon'
  },
  {
    id: 'liberation-movements',
    name: 'Liberation Movements Wing',
    description: 'Explore the strategies, struggles, and victories of various African liberation movements across the continent.',
    icon: 'FlagIcon'
  },
  {
    id: 'artifacts-hall',
    name: 'Sacred Artifacts Hall',
    description: 'View authentic artifacts from liberation struggles, including weapons, documents, and personal belongings of freedom fighters.',
    icon: 'ArchiveBoxIcon'
  },
  {
    id: 'multimedia-theater',
    name: 'Multimedia Theater',
    description: 'Experience immersive documentaries and oral histories from liberation movement participants and their descendants.',
    icon: 'FilmIcon'
  },
  {
    id: 'unity-pavilion',
    name: 'Pan-African Unity Pavilion',
    description: 'Celebrate the spirit of African unity and the ongoing journey toward continental solidarity and prosperity.',
    icon: 'GlobeAltIcon'
  }];


  const tourViews: Record<string, TourView> = {
    entrance: {
      id: 'entrance',
      image: "https://images.unsplash.com/photo-1704642971487-9bb2be6c2cea",
      alt: 'Grand museum entrance hall with high ceilings, marble floors, and eternal flame monument in center',
      hotspots: [
      {
        id: 'h1',
        x: 50,
        y: 40,
        title: 'Eternal Flame of Freedom',
        description: 'This sacred flame burns continuously as a symbol of the undying spirit of African liberation. It was lit on the day of the museum\'s inauguration by descendants of liberation heroes from across the continent.',
        artifactImage: 'https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg'
      },
      {
        id: 'h2',
        x: 25,
        y: 60,
        title: 'Liberation Timeline Mural',
        description: 'A stunning 50-meter mural depicting key moments in African liberation history, from early resistance movements to modern independence celebrations.'
      }]

    },
    'founding-fathers': {
      id: 'founding-fathers',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d422ac6-1768567457482.png",
      alt: 'Gallery hall with bronze statues and portrait paintings of African founding fathers along walls',
      hotspots: [
      {
        id: 'h3',
        x: 40,
        y: 50,
        title: 'Kwame Nkrumah Memorial',
        description: 'Life-size bronze statue of Ghana\'s first president and pan-African visionary, Kwame Nkrumah. His famous quote "Seek ye first the political kingdom" is inscribed at the base.',
        artifactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1393eee51-1768567457425.png"
      }]

    },
    'liberation-movements': {
      id: 'liberation-movements',
      image: "https://images.unsplash.com/photo-1711828655774-caad62722657",
      alt: 'Exhibition wing with display cases showing historical documents, photographs, and liberation movement flags',
      hotspots: [
      {
        id: 'h4',
        x: 60,
        y: 45,
        title: 'ZANU-PF Liberation Archives',
        description: 'Original documents and photographs from Zimbabwe\'s liberation struggle, including strategic plans and correspondence between liberation leaders.'
      }]

    },
    'artifacts-hall': {
      id: 'artifacts-hall',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1118e1103-1768567458856.png",
      alt: 'Sacred artifacts hall with illuminated display cases containing weapons, uniforms, and personal items from liberation fighters',
      hotspots: [
      {
        id: 'h5',
        x: 50,
        y: 55,
        title: 'Freedom Fighter\'s Uniform',
        description: 'Authentic uniform worn during the liberation struggle, preserved as a testament to the sacrifices made for African independence.',
        artifactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18865ee15-1768567457379.png"
      }]

    },
    'multimedia-theater': {
      id: 'multimedia-theater',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1909990-1768444127731.png",
      alt: 'Modern theater space with curved screen displaying documentary footage and comfortable seating',
      hotspots: [
      {
        id: 'h6',
        x: 50,
        y: 40,
        title: 'Oral History Collection',
        description: 'Access our extensive collection of video testimonials from liberation movement participants, recorded between 1990 and 2025.'
      }]

    },
    'unity-pavilion': {
      id: 'unity-pavilion',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_16fecb7d5-1768567457681.png",
      alt: 'Circular pavilion with flags of all African nations displayed around perimeter and unity sculpture in center',
      hotspots: [
      {
        id: 'h7',
        x: 50,
        y: 50,
        title: 'Unity Sculpture',
        description: 'Monumental sculpture representing the interconnected destiny of African nations, created by renowned pan-African artist Wangechi Mutu.',
        artifactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14e21ad9a-1768567455086.png"
      }]

    }
  };

  const artifacts: Artifact[] = [
  {
    id: 'a1',
    name: 'Liberation Charter Document',
    description: 'Original handwritten charter outlining the principles and goals of the liberation movement, signed by founding members in 1963.',
    image: "https://images.unsplash.com/photo-1699679886839-b3e9d7bbfae3",
    alt: 'Aged parchment document with handwritten text and multiple signatures at bottom',
    era: '1960s',
    significance: 'Foundational document that unified various resistance groups under common principles'
  },
  {
    id: 'a2',
    name: 'Freedom Fighter\'s Rifle',
    description: 'AK-47 rifle used during the liberation struggle, now preserved as a symbol of armed resistance against colonial oppression.',
    image: "https://images.unsplash.com/photo-1668347639499-765d12b1d39c",
    alt: 'Preserved military rifle displayed on velvet cushion in glass case',
    era: '1970s',
    significance: 'Represents the armed struggle phase of liberation movements'
  },
  {
    id: 'a3',
    name: 'Independence Flag',
    description: 'The first national flag raised on independence day, bearing the colors and symbols of newly liberated nation.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14ab3f599-1768567454646.png",
    alt: 'Colorful national flag with pan-African colors displayed in protective case',
    era: '1980s',
    significance: 'Symbol of sovereignty and the culmination of liberation struggle'
  },
  {
    id: 'a4',
    name: 'Leader\'s Personal Journal',
    description: 'Handwritten journal entries from a prominent liberation leader, documenting daily struggles and strategic decisions.',
    image: "https://images.unsplash.com/photo-1585178332093-1dfaa3998f6b",
    alt: 'Leather-bound journal opened to pages filled with handwritten notes and sketches',
    era: '1970s',
    significance: 'Provides intimate insight into the thoughts and challenges of liberation leadership'
  },
  {
    id: 'a5',
    name: 'Unity Conference Gavel',
    description: 'Ceremonial gavel used during the historic Pan-African Unity Conference where liberation movements pledged mutual support.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a813a9c8-1765201606888.png",
    alt: 'Wooden ceremonial gavel with carved African symbols on handle',
    era: '1960s',
    significance: 'Represents continental solidarity and cooperation among liberation movements'
  },
  {
    id: 'a6',
    name: 'Propaganda Poster Collection',
    description: 'Series of original posters used to mobilize support for liberation movements, featuring powerful imagery and slogans.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b22af6b-1768567469713.png",
    alt: 'Vintage political posters with bold graphics and revolutionary slogans in multiple African languages',
    era: '1960s-1980s',
    significance: 'Demonstrates the role of mass communication in building popular support'
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    id: 't1',
    year: '1957',
    title: 'Ghana Independence',
    description: 'Ghana becomes the first sub-Saharan African nation to gain independence from colonial rule under the leadership of Kwame Nkrumah, inspiring liberation movements across the continent.',
    country: 'Ghana',
    icon: 'FlagIcon'
  },
  {
    id: 't2',
    year: '1963',
    title: 'OAU Formation',
    description: 'The Organization of African Unity is established in Addis Ababa, creating a unified platform for supporting liberation movements and promoting pan-African solidarity.',
    country: 'Ethiopia',
    icon: 'GlobeAltIcon'
  },
  {
    id: 't3',
    year: '1975',
    title: 'Mozambique Liberation',
    description: 'After a decade-long armed struggle led by FRELIMO, Mozambique achieves independence from Portuguese colonial rule, marking a significant victory for southern African liberation.',
    country: 'Mozambique',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 't4',
    year: '1980',
    title: 'Zimbabwe Independence',
    description: 'Zimbabwe gains independence following the Lancaster House Agreement, ending white minority rule and establishing majority governance under Robert Mugabe.',
    country: 'Zimbabwe',
    icon: 'StarIcon'
  },
  {
    id: 't5',
    year: '1990',
    title: 'Namibia Freedom',
    description: 'Namibia achieves independence from South African occupation, becoming the last African nation to gain freedom from colonial rule in the 20th century.',
    country: 'Namibia',
    icon: 'SunIcon'
  },
  {
    id: 't6',
    year: '1994',
    title: 'South Africa Democracy',
    description: 'Nelson Mandela becomes South Africa\'s first democratically elected president, marking the end of apartheid and the triumph of the liberation struggle.',
    country: 'South Africa',
    icon: 'HandRaisedIcon'
  }];


  const cityLocations: CityLocation[] = [
  {
    id: 'c1',
    name: 'Heritage Village',
    description: 'Experience authentic reconstructions of traditional African villages from different regions and eras, showcasing pre-colonial life and cultural practices.',
    image: "https://images.unsplash.com/photo-1714857702069-06f4c5771837",
    alt: 'Traditional African village with thatched-roof huts, central gathering space, and cultural artifacts',
    features: [
    'Traditional architecture from 10 African regions',
    'Live cultural demonstrations and workshops',
    'Artisan marketplace with authentic crafts',
    'Interactive storytelling sessions with elders']

  },
  {
    id: 'c2',
    name: 'Liberation Memorial Gardens',
    description: 'Peaceful gardens dedicated to honoring fallen heroes of African liberation movements, featuring monuments, reflection pools, and native flora.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b6a5723-1764895390538.png",
    alt: 'Landscaped memorial gardens with stone monuments, water features, and indigenous African plants',
    features: [
    'Memorial walls with names of liberation heroes',
    'Meditation spaces for quiet reflection',
    'Native plant species from across Africa',
    'Annual commemoration ceremonies']

  }];


  const tourFeatures: Feature[] = [
  {
    id: 'f1',
    icon: 'CubeIcon',
    title: '360° Panoramic Views',
    description: 'Explore every corner of the museum with fully interactive 360-degree panoramic photography that lets you look in any direction.'
  },
  {
    id: 'f2',
    icon: 'SpeakerWaveIcon',
    title: 'Multi-Language Audio Guides',
    description: 'Listen to expert narration in English, Swahili, French, Portuguese, and Arabic, with plans to add more African languages.'
  },
  {
    id: 'f3',
    icon: 'BookmarkIcon',
    title: 'Bookmark & Save',
    description: 'Create your personal collection of favorite exhibits and artifacts to revisit later or share with friends and family.'
  },
  {
    id: 'f4',
    icon: 'ShareIcon',
    title: 'Social Sharing',
    description: 'Share your virtual tour experiences on social media to inspire others to learn about African liberation history.'
  },
  {
    id: 'f5',
    icon: 'AcademicCapIcon',
    title: 'Educational Resources',
    description: 'Access supplementary materials including lesson plans, research papers, and discussion guides for deeper learning.'
  },
  {
    id: 'f6',
    icon: 'DevicePhoneMobileIcon',
    title: 'VR Compatible',
    description: 'Experience the museum in virtual reality for the most immersive journey through African liberation history.'
  }];


  const handleStartTour = () => {
    setShowTour(true);
    setCurrentLocation('entrance');
  };

  const handleLocationChange = (locationId: string) => {
    setCurrentLocation(locationId);
  };

  const handleNavigate = (direction: 'left' | 'right' | 'forward' | 'back') => {
    const currentIndex = tourLocations.findIndex((loc) => loc.id === currentLocation);
    let newIndex = currentIndex;

    if (direction === 'forward' && currentIndex < tourLocations.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'back' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }

    setCurrentLocation(tourLocations[newIndex].id);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentLocation('entrance');
    setIsPlaying(false);
  };

  const handleSpeedChange = (speed: number) => {
    setTourSpeed(speed);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-[600px] bg-muted/20 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
          <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
          <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {!showTour ?
      <>
          <TourHero onStartTour={handleStartTour} />
          <TourFeatures features={tourFeatures} />
          <ArtifactShowcase artifacts={artifacts} />
          <LiberationTimeline events={timelineEvents} />
          <LiberationCityPreview locations={cityLocations} />
        </> :

      <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <TourNavigation
                locations={tourLocations}
                currentLocation={currentLocation}
                onLocationChange={handleLocationChange} />

              </div>
              <div className="lg:col-span-3 space-y-6">
                <VirtualTourViewer
                currentView={tourViews[currentLocation]}
                onNavigate={handleNavigate} />

                <TourControls
                isPlaying={isPlaying}
                onPlayPause={handlePlayPause}
                onReset={handleReset}
                onSpeedChange={handleSpeedChange}
                currentSpeed={tourSpeed} />

              </div>
            </div>
          </div>
        </div>
      }
    </div>);

};

export default DigitalTourInteractive;