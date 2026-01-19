'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  inquiryType: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: 'general',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: 'ChatBubbleLeftRightIcon' },
    { value: 'visit', label: 'Plan a Visit', icon: 'MapPinIcon' },
    { value: 'education', label: 'Educational Programs', icon: 'AcademicCapIcon' },
    { value: 'partnership', label: 'Partnership Opportunity', icon: 'HandRaisedIcon' },
    { value: 'donation', label: 'Donation Inquiry', icon: 'HeartIcon' },
    { value: 'research', label: 'Research Collaboration', icon: 'BookOpenIcon' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormData({
        inquiryType: 'general',
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
            <Icon name="EnvelopeIcon" size={28} variant="solid" className="text-gold" />
          </div>
          <h2 className="text-3xl font-headline font-bold text-gold">Contact Us</h2>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-12 bg-muted rounded-lg"></div>
          <div className="h-32 bg-muted rounded-lg"></div>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
          <Icon name="EnvelopeIcon" size={28} variant="solid" className="text-gold" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-gold">Contact Us</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-cta font-medium text-text-primary mb-2">
            Inquiry Type *
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDownIcon"
              size={20}
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
            />
          </div>
        </div>

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-cta font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-cta font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>
        </div>

        {/* Phone and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-cta font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+263 123 456 789"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-cta font-medium text-text-primary mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Brief subject of your inquiry"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-cta font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            placeholder="Please provide details about your inquiry..."
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-text-primary font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-text-secondary font-body">* Required fields</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Icon name="ArrowPathIcon" size={20} variant="solid" className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-gradient-to-r from-success/20 to-success/10 border border-success/30 rounded-lg flex items-center space-x-3">
            <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success" />
            <p className="text-sm font-body text-success">
              Thank you for contacting us! We will respond within 24-48 hours.
            </p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;