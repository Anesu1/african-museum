'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/homepage' },
    { name: 'About', path: '/about' },
    { name: 'Liberation Gallery', path: '/liberation-gallery' },
    { name: 'News & Events', path: '/news-and-events' },
  ];

  const visitLinks = [
    { name: 'Digital Museum Tour', path: '/digital-museum-tour' },
    { name: 'Contact & Visit', path: '/contact-and-visit' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', url: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', url: '#' },
    { name: 'Instagram', icon: 'CameraIcon', url: '#' },
    { name: 'YouTube', icon: 'VideoCameraIcon', url: '#' },
  ];

  return (
    <footer className={`bg-card border-t border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" stroke="url(#goldGradientFooter)" strokeWidth="2" />
                <path d="M20 8L24 16H16L20 8Z" fill="url(#goldGradientFooter)" />
                <path d="M12 24L20 20L28 24L20 32L12 24Z" fill="url(#bronzeGradientFooter)" />
                <defs>
                  <linearGradient id="goldGradientFooter" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#B8860B" />
                  </linearGradient>
                  <linearGradient id="bronzeGradientFooter" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#CD7F32" />
                    <stop offset="100%" stopColor="#8B4513" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <h2 className="text-lg font-headline font-bold text-gold">
                  African Liberation
                </h2>
                <p className="text-xs text-text-secondary font-body">Museum</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary font-body leading-relaxed">
              Preserving the sacred heritage of African liberation movements and honoring the heroes who fought for freedom.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-text-secondary hover:text-gold hover:bg-muted transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-headline font-bold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body flex items-center space-x-2 group"
                  >
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      variant="outline"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Information */}
          <div>
            <h3 className="text-base font-headline font-bold text-gold mb-4">Visit</h3>
            <ul className="space-y-3">
              {visitLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body flex items-center space-x-2 group"
                  >
                    <Icon
                      name="ChevronRightIcon"
                      size={16}
                      variant="outline"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-headline font-bold text-gold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="MapPinIcon" size={18} variant="outline" className="text-bronze mt-0.5" />
                <span className="text-sm text-text-secondary font-body">
                  Liberation City, African Heritage District
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="EnvelopeIcon" size={18} variant="outline" className="text-bronze mt-0.5" />
                <a
                  href="mailto:info@africanliberation.museum"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body"
                >
                  info@africanliberation.museum
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="PhoneIcon" size={18} variant="outline" className="text-bronze mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body"
                >
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-secondary font-body text-center md:text-left">
              © {currentYear} African Liberation Museum. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-text-secondary hover:text-gold transition-colors duration-300 font-body"
              >
                Accessibility
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs font-accent italic text-bronze">
              "Seek ye first the political kingdom and all else shall be added unto you."
            </p>
            <p className="text-xs text-text-secondary font-body mt-1">— Kwame Nkrumah</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;