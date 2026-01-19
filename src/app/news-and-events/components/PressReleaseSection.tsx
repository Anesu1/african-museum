import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PressRelease {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const PressReleaseSection = () => {
  const pressReleases: PressRelease[] = [
    {
      id: 1,
      title: 'African Liberation Museum Announces Partnership with UNESCO',
      date: '2026-01-10',
      summary:
        'Historic collaboration to preserve and digitize African liberation movement archives for global access and education.',
    },
    {
      id: 2,
      title: 'New Educational Program Launches for African Youth',
      date: '2026-01-05',
      summary:
        'Comprehensive curriculum connecting liberation history with contemporary pan-African unity and leadership development.',
    },
    {
      id: 3,
      title: 'Liberation City Expansion Project Begins Construction',
      date: '2025-12-28',
      summary:
        'Major infrastructure development to enhance visitor experience and create additional exhibition spaces for heritage preservation.',
    },
  ];

  return (
    <section className="bg-white border border-gray-300 rounded-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Icon name="DocumentTextIcon" size={24} variant="outline" className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-headline font-bold text-yellow-700">Press Releases</h2>
            <p className="text-sm text-gray-600 font-body">Official announcements and media updates</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-yellow-700 hover:text-yellow-500 transition-colors duration-300 font-cta font-medium text-sm">
          <span>View All</span>
          <Icon name="ArrowRightIcon" size={16} variant="outline" />
        </button>
      </div>

      <div className="space-y-4">
        {pressReleases.map((release) => (
          <article
            key={release.id}
            className="p-6 bg-white border border-gray-300 rounded-lg hover:border-yellow-500 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-headline font-bold text-gray-800 group-hover:text-yellow-700 transition-colors duration-300 flex-1">
                {release.title}
              </h3>
              <Icon
                name="ArrowTopRightOnSquareIcon"
                size={20}
                variant="outline"
                className="text-yellow-500 group-hover:text-yellow-700 transition-colors duration-300 ml-4"
              />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
              <Icon name="CalendarIcon" size={14} variant="outline" />
              <time dateTime={release.date}>{release.date}</time>
            </div>
            <p className="text-sm text-gray-600 font-body leading-relaxed">{release.summary}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 p-6 bg-gray-100 border border-gray-300 rounded-lg">
        <div className="flex items-start space-x-4">
          <Icon name="InformationCircleIcon" size={24} variant="outline" className="text-yellow-500 mt-1" />
          <div>
            <h3 className="text-base font-cta font-bold text-gray-800 mb-2">Media Inquiries</h3>
            <p className="text-sm text-gray-600 font-body mb-3">
              For press inquiries, interview requests, or media partnerships, please contact our communications team.
            </p>
            <a
              href="mailto:press@africanliberation.museum"
              className="inline-flex items-center space-x-2 text-yellow-700 hover:text-yellow-500 transition-colors duration-300 font-cta font-medium text-sm"
            >
              <Icon name="EnvelopeIcon" size={16} variant="outline" />
              <span>press@africanliberation.museum</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseSection;