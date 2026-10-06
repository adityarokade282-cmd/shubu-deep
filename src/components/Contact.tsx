import { Phone, MessageCircle, Mail, MapPin, Clock, Map } from 'lucide-react';
import { BUSINESS } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: BUSINESS.phone,
      href: `tel:${BUSINESS.phoneRaw}`,
      action: 'Call Now',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: BUSINESS.phone,
      href: whatsappLink,
      action: 'WhatsApp Us',
    },
    {
      icon: Mail,
      label: 'Email',
      value: BUSINESS.email,
      href: `mailto:${BUSINESS.email}`,
      action: 'Send Email',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: BUSINESS.serviceArea,
      href: '#',
      action: '',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: BUSINESS.hours,
      href: '#',
      action: '',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-diwali-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Phone className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Contact Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            Ready to make your Diwali shine? Reach out and let's start planning your perfect decoration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-diwali-gold-500/20 to-diwali-orange-500/10 border border-diwali-gold-500/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-diwali-gold-400" />
                </div>
                <div className="flex-1">
                  <div className="text-diwali-cream-300/50 text-xs uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-diwali-cream-100 font-medium text-sm">
                    {item.value}
                  </div>
                </div>
                {item.action && item.href !== '#' && (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-diwali-gold-400 text-sm font-medium hover:text-diwali-gold-300 transition-colors flex-shrink-0"
                  >
                    {item.action}
                  </a>
                )}
              </div>
            ))}

            <div className="flex gap-4 pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="festive-btn flex-1 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn flex-1 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="reveal glass-card rounded-2xl overflow-hidden h-full min-h-[400px] relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-diwali-purple-800/30 to-diwali-purple-950/50">
              <Map className="w-16 h-16 text-diwali-gold-500/30 mb-4" />
              <h3 className="font-display text-xl font-bold text-diwali-cream-100 mb-2">
                {BUSINESS.serviceArea}
              </h3>
              <p className="text-diwali-cream-300/50 text-sm text-center max-w-xs">
                We serve Mumbai, Pune, Thane & Navi Mumbai areas.
                Contact us to check availability in your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
