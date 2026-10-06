import { Check, Crown, Sparkles, Star } from 'lucide-react';
import { packages, BUSINESS } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const accentMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  orange: {
    bg: 'from-diwali-orange-500/10 to-diwali-orange-600/5',
    border: 'border-diwali-orange-500/30',
    text: 'text-diwali-orange-400',
    badge: 'bg-diwali-orange-500/20 text-diwali-orange-300 border-diwali-orange-500/40',
  },
  gold: {
    bg: 'from-diwali-gold-500/15 to-diwali-gold-600/5',
    border: 'border-diwali-gold-500/50',
    text: 'text-diwali-gold-400',
    badge: 'bg-diwali-gold-500/20 text-diwali-gold-300 border-diwali-gold-500/40',
  },
  purple: {
    bg: 'from-diwali-purple-400/10 to-diwali-purple-500/5',
    border: 'border-diwali-purple-400/30',
    text: 'text-diwali-purple-300',
    badge: 'bg-diwali-purple-500/20 text-diwali-purple-300 border-diwali-purple-500/40',
  },
};

const packageIcons: Record<string, typeof Crown> = {
  basic: Star,
  premium: Sparkles,
  royal: Crown,
};

export default function Packages() {
  const ref = useScrollReveal<HTMLDivElement>();

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

  return (
    <section id="packages" className="section-padding bg-diwali-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Our Packages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            Diwali Decoration <span className="gold-text">Packages</span>
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            Choose from our carefully crafted packages, or get a custom quote tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => {
            const accent = accentMap[pkg.accent];
            const Icon = packageIcons[pkg.id] || Star;
            return (
              <div
                key={pkg.id}
                className={`reveal relative glass-card rounded-3xl p-8 ${accent.border} ${
                  pkg.popular ? 'lg:-translate-y-4 lg:scale-105 border-2' : ''
                } transition-all duration-500`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-5 py-1.5 rounded-full bg-gold-gradient text-diwali-purple-900 text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.bg} border ${accent.border} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${accent.text}`} />
                </div>

                <h3 className="font-display text-2xl font-bold text-diwali-cream-100 mb-2">
                  {pkg.name}
                </h3>

                <div className="mb-6">
                  <span className="text-diwali-cream-300/60 text-sm">Starting from</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-display text-4xl font-bold gold-text">₹{pkg.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${accent.bg} border ${accent.border} flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-3 h-3 ${accent.text}`} />
                      </div>
                      <span className="text-diwali-cream-300/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToBooking}
                  className={pkg.popular ? 'festive-btn w-full' : 'outline-btn w-full'}
                >
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-diwali-cream-300/60 mb-4">
            Need something different? We offer fully customized decoration packages.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="festive-btn inline-flex items-center gap-2"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
