'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface VisitorFAQProps {
  className?: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const VisitorFAQ = ({ className = '' }: VisitorFAQProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqData: FAQItem[] = [
    {
      category: 'Visiting',
      question: 'Do I need to book tickets in advance?',
      answer: 'While walk-ins are welcome, we recommend booking tickets online to guarantee entry, especially during peak seasons and weekends. Group bookings (10+ people) must be made at least 48 hours in advance.',
    },
    {
      category: 'Visiting',
      question: 'Is the museum wheelchair accessible?',
      answer: 'Yes, the Museum of African Liberation is fully wheelchair accessible. We have ramps, elevators, accessible restrooms, and wheelchair rentals available at no extra cost. Please contact us in advance if you require special assistance.',
    },
    {
      category: 'Visiting',
      question: 'Can I take photographs inside the museum?',
      answer: 'Photography is permitted in most areas for personal use only. Flash photography and tripods are not allowed. Some special exhibitions may have photography restrictions, which will be clearly marked.',
    },
    {
      category: 'Visiting',
      question: 'Are guided tours available?',
      answer: 'Yes, we offer guided tours in English, Shona, and Ndebele. Tours run every hour from 10:00 AM to 4:00 PM and last approximately 90 minutes. Private tours can be arranged for groups with advance booking.',
    },
    {
      category: 'Education',
      question: 'Do you offer educational programs for schools?',
      answer: 'Yes, we have comprehensive educational programs for primary, secondary, and tertiary institutions. Programs include guided tours, workshops, and curriculum-aligned learning materials. Contact our education department for customized programs.',
    },
    {
      category: 'Education',
      question: 'Is there a research library or archive?',
      answer: 'Yes, our research center houses an extensive archive of liberation movement documents, oral histories, and academic resources. Access requires advance registration. Researchers should contact research@africanliberation.museum.',
    },
    {
      category: 'Facilities',
      question: 'Are there dining facilities at the museum?',
      answer: 'Yes, we have a café serving light meals, snacks, and beverages. The Heritage Restaurant offers traditional African cuisine for lunch. Both facilities are open during museum hours.',
    },
    {
      category: 'Facilities',
      question: 'Is parking available?',
      answer: 'Yes, we have free parking for up to 200 vehicles, including designated spaces for disabled visitors and buses. The parking area is secured and monitored 24/7.',
    },
    {
      category: 'General',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash (USD and ZWL), all major credit cards (Visa, Mastercard, American Express), mobile money (EcoCash, OneMoney), and bank transfers. Online bookings can be paid via PayPal or credit card.',
    },
    {
      category: 'General',
      question: 'Can I host private events at the museum?',
      answer: 'Yes, we offer venue hire for corporate events, academic conferences, and cultural celebrations. Our event spaces can accommodate 50-500 guests. Contact events@africanliberation.museum for availability and pricing.',
    },
  ];

  const toggleFAQ = (index: number) => {
    if (!isHydrated) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
            <Icon name="QuestionMarkCircleIcon" size={28} variant="solid" className="text-gold" />
          </div>
          <h2 className="text-3xl font-headline font-bold text-gold">Frequently Asked Questions</h2>
        </div>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-muted rounded-lg"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
          <Icon name="QuestionMarkCircleIcon" size={28} variant="solid" className="text-gold" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-gold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg overflow-hidden border border-transparent hover:border-gold/30 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/80 transition-all duration-300"
            >
              <div className="flex-1">
                <span className="text-xs font-cta font-medium text-bronze uppercase tracking-wider">
                  {faq.category}
                </span>
                <h3 className="text-base font-cta font-bold text-text-primary mt-1">{faq.question}</h3>
              </div>
              <Icon
                name="ChevronDownIcon"
                size={24}
                variant="outline"
                className={`text-gold transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4">
                <p className="text-sm text-text-secondary font-body leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-bronze/10 border border-gold/30 rounded-lg">
        <div className="flex items-start space-x-4">
          <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-gold mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-cta font-bold text-text-primary mb-2">Still have questions?</h3>
            <p className="text-sm text-text-secondary font-body mb-4">
              Our visitor services team is here to help. Contact us via phone, email, or use the contact form above.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center space-x-2 text-sm font-cta font-medium text-gold hover:text-dark-gold transition-colors duration-300"
            >
              <span>Contact Us</span>
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorFAQ;