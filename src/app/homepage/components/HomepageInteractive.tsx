'use client';

import React from 'react';
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import FeaturedGallery from './FeaturedGallery';
import FoundingFathers from './FoundingFathers';
import UpcomingEvents from './UpcomingEvents';
import VisitCTA from './VisitCTA';

const HomepageInteractive = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FeaturedGallery />
      <FoundingFathers />
      <UpcomingEvents />
      <VisitCTA />
    </>
  );
};

export default HomepageInteractive;