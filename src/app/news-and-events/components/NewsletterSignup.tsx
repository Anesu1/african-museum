'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    exhibitions: true,
    educational: true,
    diplomatic: false,
    research: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="bg-card border border-border rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 animate-pulse" />
          <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-muted rounded w-full mb-6 animate-pulse" />
        </div>
      </section>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="bg-card border border-border rounded-lg p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="EnvelopeIcon" size={32} variant="outline" className="text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-gold mb-4">Stay Connected</h2>
        <p className="text-text-secondary font-body mb-6">
          Subscribe to receive updates about exhibitions, educational programs, and liberation heritage events.
        </p>

        {isSubmitted ? (
          <div className="bg-success/10 border border-success rounded-lg p-6 mb-6">
            <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-success mx-auto mb-3" />
            <p className="text-success font-cta font-bold">Successfully subscribed!</p>
            <p className="text-text-secondary text-sm mt-2">Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-input border border-border rounded-md text-text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold font-body"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            <div className="text-left">
              <p className="text-sm font-cta font-medium text-text-primary mb-3">
                Select your interests:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(preferences).map(([key, value]) => (
                  <label
                    key={key}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handlePreferenceChange(key as keyof typeof preferences)}
                      className="w-5 h-5 rounded border-border text-gold focus:ring-gold focus:ring-offset-0"
                    />
                    <span className="text-sm text-text-secondary group-hover:text-gold transition-colors duration-300 font-body capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-6 font-body">
          By subscribing, you agree to receive emails from African Liberation Museum. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;