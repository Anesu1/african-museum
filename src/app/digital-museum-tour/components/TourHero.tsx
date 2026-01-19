'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TourHeroProps {
  onStartTour: () => void;
}

const TourHero = ({ onStartTour }: TourHeroProps) => {
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

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId: number;
    let rotation = 0;

    const drawMonument = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.3;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // Draw pyramid structure
      const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2);
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(0.5, '#CD7F32');
      gradient.addColorStop(1, '#B8860B');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.closePath();
      ctx.fill();

      // Draw inner details
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      rotation += 0.002;
      animationId = requestAnimationFrame(drawMonument);
    };

    drawMonument();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <div className="relative h-[600px] bg-gradient-to-b from-white via-gray-100 to-white flex items-center justify-center">
        <div className="w-64 h-64 bg-muted/20 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative h-[600px] bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-yellow-700 leading-tight">
            Digital Museum Tour
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body max-w-2xl mx-auto leading-relaxed">
            Experience the Museum of African Liberation from anywhere in the world. Explore our halls, artifacts, and Liberation City through immersive 3D virtual tours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartTour}
              className="px-8 py-4 bg-yellow-500 text-white font-cta font-bold rounded-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="PlayIcon" size={20} variant="solid" />
              <span>Start Virtual Tour</span>
            </button>
            <button className="px-8 py-4 bg-white border border-yellow-500 text-yellow-700 font-cta font-bold rounded-md hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
              <Icon name="InformationCircleIcon" size={20} variant="outline" />
              <span>Tour Guide</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-yellow-700" />
      </div>
    </div>
  );
};

export default TourHero;