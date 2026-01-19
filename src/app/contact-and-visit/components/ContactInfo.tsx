import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactInfoProps {
  className?: string;
}

interface ContactMethod {
  icon: string;
  title: string;
  details: string[];
  action?: {
    label: string;
    href: string;
  };
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'PhoneIcon',
      title: 'Phone',
      details: ['+263 242 123 456', '+263 242 789 012'],
      action: {
        label: 'Call Us',
        href: 'tel:+263242123456',
      },
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Email',
      details: ['info@africanliberation.museum', 'education@africanliberation.museum'],
      action: {
        label: 'Send Email',
        href: 'mailto:info@africanliberation.museum',
      },
    },
    {
      icon: 'MapPinIcon',
      title: 'Address',
      details: ['Liberation City, Heritage District', 'Harare, Zimbabwe'],
    },
    {
      icon: 'ClockIcon',
      title: 'Office Hours',
      details: ['Monday - Friday: 08:00 AM - 05:00 PM', 'Saturday: 09:00 AM - 01:00 PM'],
    },
  ];

  const emergencyContact = {
    icon: 'ExclamationTriangleIcon',
    title: 'Emergency Contact',
    details: ['24/7 Security: +263 777 123 456'],
  };

  return (
    <section className={`bg-card border border-border rounded-lg p-8 lg:p-12 ${className}`}>
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30">
          <Icon name="PhoneIcon" size={28} variant="solid" className="text-gold" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-gold">Contact Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method) => (
          <div
            key={method.title}
            className="p-6 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-300 border border-transparent hover:border-gold/30"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-gold/20 to-bronze/20 rounded-lg backdrop-blur-sm border border-gold/30 flex-shrink-0">
                <Icon name={method.icon as any} size={24} variant="solid" className="text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-cta font-bold text-text-primary mb-3">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, index) => (
                    <p key={index} className="text-sm text-text-secondary font-body">
                      {detail}
                    </p>
                  ))}
                </div>
                {method.action && (
                  <a
                    href={method.action.href}
                    className="inline-flex items-center space-x-2 mt-4 text-sm font-cta font-medium text-gold hover:text-dark-gold transition-colors duration-300"
                  >
                    <span>{method.action.label}</span>
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="mt-6 p-6 bg-gradient-to-r from-warning/10 to-warning/5 border border-warning/30 rounded-lg">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-warning/20 rounded-lg flex-shrink-0">
            <Icon name={emergencyContact.icon as any} size={24} variant="solid" className="text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-cta font-bold text-warning mb-2">{emergencyContact.title}</h3>
            <p className="text-sm text-text-secondary font-body">{emergencyContact.details[0]}</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="text-lg font-cta font-bold text-text-primary mb-4">Connect With Us</h3>
        <div className="flex items-center space-x-4">
          {[
            { name: 'Facebook', icon: 'ShareIcon', url: '#' },
            { name: 'Twitter', icon: 'ChatBubbleLeftIcon', url: '#' },
            { name: 'Instagram', icon: 'CameraIcon', url: '#' },
            { name: 'YouTube', icon: 'VideoCameraIcon', url: '#' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted rounded-lg hover:bg-gradient-to-br hover:from-gold/20 hover:to-bronze/20 transition-all duration-300 border border-transparent hover:border-gold/30"
              aria-label={social.name}
            >
              <Icon name={social.icon as any} size={24} variant="outline" className="text-text-secondary hover:text-gold transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;