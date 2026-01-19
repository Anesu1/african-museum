import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Leader {
  name: string;
  title: string;
  credentials: string;
  vision: string;
  image: string;
  alt: string;
  email: string;
}

interface LeadershipTeamProps {
  className?: string;
}

const LeadershipTeam = ({ className = '' }: LeadershipTeamProps) => {
  const leaders: Leader[] = [
  {
    name: 'Dr. Amara Okonkwo',
    title: 'Executive Director',
    credentials: 'PhD in African History, Oxford University',
    vision: 'To establish the Museum of African Liberation as the world\'s foremost authority on African independence movements, ensuring our heroes\' legacies inspire generations to come.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1be9953cb-1763294484228.png",
    alt: 'Professional portrait of African woman with natural hair in elegant navy blazer against neutral background',
    email: 'a.okonkwo@africanliberation.museum'
  },
  {
    name: 'Prof. Kwame Mensah',
    title: 'Chief Curator',
    credentials: 'Professor of Pan-African Studies, University of Ghana',
    vision: 'To curate exhibitions that authentically represent the complexity and triumph of African liberation struggles, honoring both celebrated heroes and unsung contributors.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab7fb780-1763294302557.png",
    alt: 'Distinguished African man with gray beard wearing traditional kente cloth and modern suit jacket',
    email: 'k.mensah@africanliberation.museum'
  },
  {
    name: 'Ms. Zainab Diallo',
    title: 'Director of Education',
    credentials: 'MA in Museum Education, Sorbonne University',
    vision: 'To create transformative educational experiences that connect young Africans with their heritage and empower them to continue the work of unity and progress.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a5b689fb-1763296744210.png",
    alt: 'Young African woman with braided hairstyle in professional burgundy blazer smiling confidently',
    email: 'z.diallo@africanliberation.museum'
  },
  {
    name: 'Dr. Tendai Moyo',
    title: 'Head of Research',
    credentials: 'PhD in Liberation Studies, University of Zimbabwe',
    vision: 'To advance scholarly understanding of African liberation movements through rigorous research and international collaboration, preserving oral histories before they are lost.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fef08cfe-1763295457880.png",
    alt: 'African woman scholar with glasses and natural afro hairstyle in academic setting with books',
    email: 't.moyo@africanliberation.museum'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-gold mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
            Our distinguished team brings together expertise in African history, museum curation, education, and research to preserve and share liberation heritage with the world.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) =>
          <div
            key={index}
            className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-gold-glow transition-all duration-300">

              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative w-full sm:w-48 h-64 sm:h-auto flex-shrink-0 overflow-hidden">
                  <AppImage
                  src={leader.image}
                  alt={leader.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-headline font-bold text-gold mb-1 group-hover:text-text-primary transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-bronze font-cta font-medium mb-2">{leader.title}</p>
                    <p className="text-sm text-text-secondary font-body italic">{leader.credentials}</p>
                  </div>

                  <div className="flex-1 mb-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <Icon name="LightBulbIcon" size={18} variant="solid" className="text-bronze mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-cta font-medium text-text-primary">Vision Statement:</p>
                    </div>
                    <p className="text-sm text-text-secondary font-body leading-relaxed pl-6">
                      {leader.vision}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-text-secondary hover:text-gold transition-colors duration-300">
                    <Icon name="EnvelopeIcon" size={16} variant="outline" />
                    <a href={`mailto:${leader.email}`} className="font-body">
                      {leader.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Advisory Board Section */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center">
              <Icon name="UserGroupIcon" size={24} variant="solid" className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-gold mb-2">Advisory Board</h3>
              <p className="text-text-secondary font-body leading-relaxed">
                Our distinguished advisory board includes liberation movement veterans, academic scholars, cultural leaders, and diplomatic representatives from across Africa and the diaspora.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Liberation Movement Veterans</p>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Academic Scholars</p>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Cultural Leaders</p>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Diplomatic Representatives</p>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Heritage Preservation Experts</p>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-bronze flex-shrink-0" />
              <p className="text-sm text-text-secondary font-body">Community Representatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadershipTeam;