'use client';

import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import EventCard from './EventCard';
import FilterBar from './FilterBar';
import PhotoGallery from './PhotoGallery';
import PressReleaseSection from './PressReleaseSection';
import NewsletterSignup from './NewsletterSignup';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  alt: string;
  featured?: boolean;
}

interface EventItem {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  image: string;
  alt: string;
  registrationOpen: boolean;
}

const NewsEventsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'UNESCO Partnership Brings Global Recognition to Liberation Heritage',
    excerpt:
    'Historic collaboration announced to digitize and preserve African liberation movement archives, making them accessible to researchers and educators worldwide through advanced digital platforms.',
    category: 'Partnership',
    date: '2026-01-10',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13fca1f8a-1767723178713.png",
    alt: 'International delegates in formal attire signing partnership documents at modern conference table with African Liberation Museum logo',
    featured: true
  },
  {
    id: 2,
    title: 'New Youth Leadership Program Connects Past and Present',
    excerpt:
    'Comprehensive educational initiative launches to inspire next generation of African leaders through liberation history and contemporary leadership development.',
    category: 'Education',
    date: '2026-01-05',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1759fbcd6-1766775611598.png",
    alt: 'Diverse group of young African students in casual attire engaged in interactive workshop with historical documents and digital tablets'
  },
  {
    id: 3,
    title: 'Liberation City Expansion Creates New Exhibition Spaces',
    excerpt:
    'Major infrastructure development underway to enhance visitor experience and accommodate growing collection of liberation movement artifacts.',
    category: 'Development',
    date: '2025-12-28',
    image: "https://images.unsplash.com/photo-1581303207454-c3340ba199cb",
    alt: 'Modern museum building under construction with traditional African architectural elements and bronze-colored facade'
  },
  {
    id: 4,
    title: 'Digital Archive Project Preserves Oral Histories',
    excerpt:
    'Innovative technology captures and preserves first-hand accounts from liberation movement participants for future generations.',
    category: 'Technology',
    date: '2025-12-20',
    image: "https://images.unsplash.com/photo-1664277497086-e21115efbbf4",
    alt: 'Elderly African liberation veteran being interviewed with professional recording equipment in museum studio setting'
  },
  {
    id: 5,
    title: 'Pan-African Conference Draws International Scholars',
    excerpt:
    'Leading academics gather to discuss liberation history impact on contemporary African unity and development strategies.',
    category: 'Conference',
    date: '2025-12-15',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1264e0f74-1766564670368.png",
    alt: 'Large auditorium filled with diverse international scholars attending academic conference with projection screens showing historical images'
  },
  {
    id: 6,
    title: 'Community Outreach Program Reaches 10,000 Students',
    excerpt:
    'Mobile education initiative brings liberation history directly to schools across the region, inspiring cultural pride and historical awareness.',
    category: 'Education',
    date: '2025-12-10',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16a3f3f10-1768081301864.png",
    alt: 'Museum educators presenting interactive liberation history lesson to enthusiastic classroom of African students in school uniforms'
  }];


  const eventItems: EventItem[] = [
  {
    id: 1,
    title: 'Founding Fathers Exhibition: Architects of Freedom',
    description:
    'Comprehensive exhibition showcasing the lives, struggles, and achievements of African liberation leaders who shaped the continent\'s independence movements.',
    category: 'Exhibition',
    date: '2026-02-01',
    time: '10:00 AM - 6:00 PM',
    location: 'Main Exhibition Hall, Liberation City',
    image: "https://images.unsplash.com/photo-1715104564441-00b00d73f1b5",
    alt: 'Museum exhibition hall with large portraits of African founding fathers and historical artifacts displayed in glass cases',
    registrationOpen: true
  },
  {
    id: 2,
    title: 'Youth Leadership Summit: Heritage and Future',
    description:
    'Three-day intensive program connecting young African leaders with liberation history through workshops, mentorship, and interactive sessions.',
    category: 'Educational Program',
    date: '2026-02-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Education Center, Liberation City',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d42b72e3-1766502199729.png",
    alt: 'Young African professionals in business attire participating in leadership workshop with facilitator at whiteboard',
    registrationOpen: true
  },
  {
    id: 3,
    title: 'Diplomatic Reception: Pan-African Unity Celebration',
    description:
    'High-level diplomatic gathering celebrating African unity and discussing contemporary applications of liberation movement principles.',
    category: 'Diplomatic Event',
    date: '2026-03-05',
    time: '6:00 PM - 9:00 PM',
    location: 'Heritage Hall, Liberation City',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec950dc4-1768511562816.png",
    alt: 'Formal diplomatic reception with African dignitaries in traditional and formal attire mingling in elegant museum venue',
    registrationOpen: false
  },
  {
    id: 4,
    title: 'Academic Conference: Liberation Movements and Modern Africa',
    description:
    'International scholarly conference examining the lasting impact of liberation movements on contemporary African political and social structures.',
    category: 'Conference',
    date: '2026-03-20',
    time: '8:00 AM - 6:00 PM',
    location: 'Conference Center, Liberation City',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfe6c11c-1764782661812.png",
    alt: 'Academic conference with diverse scholars presenting research papers using projection screens in modern conference hall',
    registrationOpen: true
  },
  {
    id: 5,
    title: 'Digital Heritage Workshop: Preserving Liberation Stories',
    description:
    'Hands-on training in digital archiving techniques for preserving oral histories, documents, and artifacts from liberation movements.',
    category: 'Educational Program',
    date: '2026-04-10',
    time: '10:00 AM - 4:00 PM',
    location: 'Digital Lab, Liberation City',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13fc63005-1764741977315.png",
    alt: 'Workshop participants using computers and digital scanning equipment to preserve historical documents in modern technology lab',
    registrationOpen: true
  },
  {
    id: 6,
    title: 'Community Heritage Day: Celebrating Liberation Legacy',
    description:
    'Family-friendly event featuring traditional music, storytelling, cultural performances, and interactive exhibits celebrating African liberation heritage.',
    category: 'Community Event',
    date: '2026-04-25',
    time: '11:00 AM - 7:00 PM',
    location: 'Museum Grounds, Liberation City',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e69d2bbe-1767956316820.png",
    alt: 'Outdoor community celebration with families enjoying traditional African music and dance performances on museum grounds',
    registrationOpen: true
  }];


  const filteredNews =
  activeFilter === 'all' ?
  newsItems :
  newsItems.filter((item) => {
    const categoryMap: {[key: string]: string[];} = {
      exhibitions: ['Exhibition'],
      educational: ['Education'],
      diplomatic: ['Partnership', 'Conference'],
      conferences: ['Conference', 'Technology']
    };
    return categoryMap[activeFilter]?.includes(item.category);
  });

  const filteredEvents =
  activeFilter === 'all' ?
  eventItems :
  eventItems.filter((item) => {
    const categoryMap: {[key: string]: string[];} = {
      exhibitions: ['Exhibition'],
      educational: ['Educational Program'],
      diplomatic: ['Diplomatic Event'],
      conferences: ['Conference']
    };
    return categoryMap[activeFilter]?.includes(item.category);
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 bg-muted rounded w-1/3 mb-8 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-muted rounded mb-4" />
                <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-5/6" />
              </div>
            )}
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-12">
      {/* Tab Navigation */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => setActiveTab('news')}
          className={`px-6 py-3 rounded-md font-cta font-bold text-base transition-all duration-300 ${
            activeTab === 'news' ? 'bg-yellow-500 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-300 hover:text-yellow-700 hover:border-yellow-500'
          }`}
        >
          Latest News
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-3 rounded-md font-cta font-bold text-base transition-all duration-300 ${
            activeTab === 'events' ? 'bg-yellow-500 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-300 hover:text-yellow-700 hover:border-yellow-500'
          }`}
        >
          Upcoming Events
        </button>
      </div>

      {/* Filter Bar */}
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Content Grid */}
      {activeTab === 'news' ?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) =>
        <NewsCard key={news.id} {...news} />
        )}
        </div> :

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) =>
        <EventCard key={event.id} {...event} />
        )}
        </div>
      }

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Press Release Section */}
      <PressReleaseSection />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>);

};

export default NewsEventsInteractive;