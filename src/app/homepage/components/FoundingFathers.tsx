import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Leader {
  id: number;
  name: string;
  country: string;
  role: string;
  image: string;
  alt: string;
  quote: string;
}

interface FoundingFathersProps {
  className?: string;
}

const FoundingFathers = ({ className = '' }: FoundingFathersProps) => {
  const leaders: Leader[] = [
  {
    id: 1,
    name: 'Kwame Nkrumah',
    country: 'Ghana',
    role: 'First President of Ghana',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_122bb67a5-1767265059531.png",
    alt: 'Distinguished African leader in formal attire with confident expression representing Kwame Nkrumah legacy',
    quote: 'Seek ye first the political kingdom and all else shall be added unto you.'
  },
  {
    id: 2,
    name: 'Nelson Mandela',
    country: 'South Africa',
    role: 'Anti-Apartheid Revolutionary',
    image: "https://images.unsplash.com/photo-1627037118218-571762f08458",
    alt: 'Wise elderly African statesman with warm smile in traditional attire representing Nelson Mandela spirit',
    quote: 'It always seems impossible until it is done.'
  },
  {
    id: 3,
    name: 'Julius Nyerere',
    country: 'Tanzania',
    role: 'Father of the Nation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff109abd-1763293303834.png",
    alt: 'Thoughtful African leader in professional attire with determined gaze representing Julius Nyerere vision',
    quote: 'Without unity, there is no future for Africa.'
  },
  {
    id: 4,
    name: 'Patrice Lumumba',
    country: 'Congo',
    role: 'Independence Leader',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1815a2d94-1768567457499.png",
    alt: 'Young charismatic African leader with passionate expression representing Patrice Lumumba courage',
    quote: 'The day will come when history will speak.'
  }];


  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-px w-8 bg-gold" />
              <span className="text-sm font-cta text-bronze uppercase tracking-wider">Heroes of Liberation</span>
              <div className="h-px w-8 bg-gold" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-headline font-bold text-text-primary mb-6">
            Founding Fathers of
            <span className="block mt-2 text-gold">African Independence</span>
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Visionary leaders who sacrificed everything to secure freedom and dignity for their nations and inspire generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leaders.map((leader) =>
          <div
            key={leader.id}
            className="group relative bg-background border border-border rounded-lg overflow-hidden hover:border-gold transition-all duration-300 hover:shadow-bronze-glow">

              <div className="relative h-80 overflow-hidden">
                <AppImage
                src={leader.image}
                alt={leader.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPinIcon" size={14} variant="solid" className="text-bronze" />
                    <span className="text-xs font-body text-bronze">{leader.country}</span>
                  </div>

                  <h3 className="text-xl font-headline font-bold text-text-primary mb-1 group-hover:text-gold transition-colors duration-300">
                    {leader.name}
                  </h3>

                  <p className="text-sm text-text-secondary font-body mb-3">{leader.role}</p>

                  <div className="relative">
                    <Icon
                    name="ChatBubbleLeftIcon"
                    size={16}
                    variant="solid"
                    className="text-gold/50 mb-2" />

                    <p className="text-xs font-accent italic text-text-secondary leading-relaxed line-clamp-2">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/liberation-gallery"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-card border-2 border-gold text-gold font-cta font-bold rounded-md hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-105">

            <Icon name="UserGroupIcon" size={20} variant="outline" />
            <span>Meet All Leaders</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FoundingFathers;