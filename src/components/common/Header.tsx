'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'HomeIcon' },
    { name: 'About', path: '/about', icon: 'InformationCircleIcon' },
    { name: 'Liberation Gallery', path: '/liberation-gallery', icon: 'PhotoIcon' },
    { name: 'News & Events', path: '/news-and-events', icon: 'NewspaperIcon' },
    { name: 'Digital Tour', path: '/digital-museum-tour', icon: 'CubeIcon' },
  ];

  const moreItems = [
    { name: 'Contact & Visit', path: '/contact-and-visit', icon: 'MapPinIcon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActivePath = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-bronze-glow' : 'bg-card'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <circle cx="20" cy="20" r="18" stroke="url(#goldGradient)" strokeWidth="2" />
                <path
                  d="M20 8L24 16H16L20 8Z"
                  fill="url(#goldGradient)"
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
                <path
                  d="M12 24L20 20L28 24L20 32L12 24Z"
                  fill="url(#bronzeGradient)"
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#B8860B" />
                  </linearGradient>
                  <linearGradient id="bronzeGradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#CD7F32" />
                    <stop offset="100%" stopColor="#8B4513" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-headline font-bold text-gold leading-tight">
                African Liberation
              </h1>
              <p className="text-xs text-text-secondary font-body">Museum</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-cta font-medium transition-all duration-300 flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-accent text-accent-foreground shadow-gold-glow'
                    : 'text-text-secondary hover:text-gold hover:bg-muted'
                }`}
              >
                <Icon name={item.icon as any} size={18} variant="outline" />
                <span>{item.name}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-cta font-medium text-text-secondary hover:text-gold hover:bg-muted transition-all duration-300 flex items-center space-x-2">
                <Icon name="EllipsisHorizontalIcon" size={18} variant="outline" />
                <span>More</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-bronze-glow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block px-4 py-3 text-sm font-body transition-all duration-300 flex items-center space-x-2 ${
                      isActivePath(item.path)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-text-secondary hover:text-gold hover:bg-muted'
                    }`}
                  >
                    <Icon name={item.icon as any} size={18} variant="outline" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact-and-visit"
              className="px-6 py-2.5 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105"
            >
              Visit Museum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-gold hover:bg-muted transition-all duration-300"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              variant="outline"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {[...navigationItems, ...moreItems].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-cta font-medium transition-all duration-300 flex items-center space-x-3 ${
                    isActivePath(item.path)
                      ? 'bg-accent text-accent-foreground shadow-gold-glow'
                      : 'text-text-secondary hover:text-gold hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={20} variant="outline" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href="/contact-and-visit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary text-center font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300"
              >
                Visit Museum
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;