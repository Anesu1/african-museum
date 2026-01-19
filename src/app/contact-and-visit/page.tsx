import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactHero from './components/ContactHero';
import LocationMap from './components/LocationMap';
import VisitingHours from './components/VisitingHours';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import VisitorFAQ from './components/VisitorFAQ';


export const metadata: Metadata = {
  title: 'Contact & Visit - African Liberation Museum',
  description: 'Plan your visit to the Museum of African Liberation in Liberation City, Zimbabwe. Find visitor information, contact details, admission rates, and nearby attractions for your heritage journey.',
};

export default function ContactAndVisitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Location Map */}
          <LocationMap />

          {/* Visiting Hours & Admission */}
          <VisitingHours />

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>

          {/* FAQ Section */}
          <VisitorFAQ />

      
        </div>
      </main>

      <Footer />
    </div>
  );
}