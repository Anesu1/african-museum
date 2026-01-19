import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface VisitingHoursProps {
  className?: string;
}

interface HourSchedule {
  day: string;
  hours: string;
  isToday?: boolean;
}

const VisitingHours = ({ className = '' }: VisitingHoursProps) => {
  const schedule: HourSchedule[] = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '09:00 AM - 05:00 PM' },
    { day: 'Wednesday', hours: '09:00 AM - 05:00 PM' },
    { day: 'Thursday', hours: '09:00 AM - 05:00 PM', isToday: true },
    { day: 'Friday', hours: '09:00 AM - 05:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 06:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 04:00 PM' },
  ];

  const admissionRates = [
    { category: 'Adults', price: 'USD 15', icon: 'UserIcon' },
    { category: 'Students', price: 'USD 8', icon: 'AcademicCapIcon' },
    { category: 'Children (Under 12)', price: 'USD 5', icon: 'UserGroupIcon' },
    { category: 'Seniors (65+)', price: 'USD 10', icon: 'HeartIcon' },
    { category: 'Groups (10+)', price: 'USD 12/person', icon: 'UsersIcon' },
  ];

  return (
    <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Visiting Hours */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
              <Icon name="ClockIcon" size={28} variant="solid" className="text-gold" />
            </div>
            <h2 className="text-3xl font-headline font-bold text-gold">Visiting Hours</h2>
          </div>

          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.day}
                className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                  item.isToday
                    ? 'bg-gradient-to-r from-gold/20 to-bronze/20 border border-gold/30' :'bg-muted hover:bg-muted/80'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {item.isToday && (
                    <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-gold" />
                  )}
                  <span className={`font-cta font-medium ${item.isToday ? 'text-gold' : 'text-text-primary'}`}>
                    {item.day}
                  </span>
                </div>
                <span className={`font-body ${item.hours === 'Closed' ? 'text-error' : 'text-text-secondary'}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-bronze/10 to-gold/10 border border-bronze/30 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-bronze mt-0.5" />
              <p className="text-sm text-text-secondary font-body">
                Last admission is 30 minutes before closing. Special hours apply during public holidays and cultural events.
              </p>
            </div>
          </div>
        </div>

        {/* Admission Rates */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
              <Icon name="TicketIcon" size={28} variant="solid" className="text-gold" />
            </div>
            <h2 className="text-3xl font-headline font-bold text-gold">Admission Rates</h2>
          </div>

          <div className="space-y-3">
            {admissionRates.map((rate) => (
              <div
                key={rate.category}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Icon name={rate.icon as any} size={20} variant="outline" className="text-bronze" />
                  <span className="font-body text-text-primary">{rate.category}</span>
                </div>
                <span className="font-cta font-bold text-gold">{rate.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-gradient-to-r from-success/10 to-success/5 border border-success/30 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="SparklesIcon" size={20} variant="solid" className="text-success mt-0.5" />
                <div>
                  <p className="text-sm font-cta font-bold text-success mb-1">Free Admission Days</p>
                  <p className="text-sm text-text-secondary font-body">
                    First Sunday of every month and African Liberation Day (May 25)
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-gradient-to-r from-gold to-dark-gold text-primary font-cta font-bold rounded-md hover:shadow-gold-glow transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <Icon name="CalendarIcon" size={20} variant="solid" />
              <span>Book Your Visit</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingHours;