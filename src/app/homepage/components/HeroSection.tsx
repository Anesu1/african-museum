'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let rotation = 0;
    const shapes = [
      { x: 0.3, y: 0.4, size: 80, speed: 0.002 },
      { x: 0.7, y: 0.6, size: 60, speed: -0.003 },
      { x: 0.5, y: 0.3, size: 50, speed: 0.0025 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        const centerX = canvas.width * shape.x;
        const centerY = canvas.height * shape.y;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation * shape.speed * 100);

        const gradient = ctx.createLinearGradient(-shape.size, -shape.size, shape.size, shape.size);
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0.15)');
        gradient.addColorStop(0.5, 'rgba(205, 127, 50, 0.1)');
        gradient.addColorStop(1, 'rgba(184, 134, 11, 0.05)');

        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
        ctx.lineWidth = 2;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 * i) / 6;
          const x = Math.cos(angle) * shape.size;
          const y = Math.sin(angle) * shape.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      rotation += 0.002;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <section className={`relative min-h-screen flex items-center justify-center bg-white overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-white opacity-50" />
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-white overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-white opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500" />
              <Icon name="SparklesIcon" size={24} variant="solid" className="text-yellow-500" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-headline font-bold text-black leading-tight">
            Museum of African
            <span className="block mt-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Liberation
            </span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl sm:text-2xl font-accent italic text-yellow-600 leading-relaxed">
              "I am not African because I was born in Africa,
              <span className="block mt-2 text-yellow-500">
                but because Africa was born in me."
              </span>
            </p>
            <p className="text-base text-gray-600 font-body">— Kwame Nkrumah</p>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 font-body max-w-4xl mx-auto leading-relaxed">
            Preserving the sacred heritage of African liberation movements and honoring the heroes who fought for freedom. Experience the dignity, resilience, and unity of our shared history.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/digital-museum-tour"
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="CubeIcon" size={20} variant="solid" />
              <span>Virtual Tour</span>
              <Icon
                name="ArrowRightIcon"
                size={20}
                variant="outline"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/liberation-gallery"
              className="group px-8 py-4 bg-gray-100 border-2 border-yellow-500 text-yellow-500 font-cta font-bold rounded-md hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="PhotoIcon" size={20} variant="outline" />
              <span>Liberation Gallery</span>
              <Icon
                name="ArrowRightIcon"
                size={20}
                variant="outline"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="pt-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600 animate-bounce">
              <span className="text-sm font-body">Explore Our Heritage</span>
              <Icon name="ChevronDownIcon" size={20} variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;