import { Sparkles, Calendar, Images, Flame } from 'lucide-react';
import { BUSINESS } from '@/data/content';
import FloatingParticles from './FloatingParticles';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-festive-gradient"
    >
      <div className="absolute inset-0 bg-rangoli-pattern" />

      <FloatingParticles count={20} />

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-diwali-purple-950/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-diwali-purple-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-diwali-gold-400" />
          <span className="text-sm text-diwali-cream-200 font-medium">
            Premium Diwali Decoration Services
          </span>
        </div>

        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-diwali-gold-500/60" />
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <Flame
                key={i}
                className="w-5 h-5 text-diwali-gold-400 animate-flicker diya-glow"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-diwali-gold-500/60" />
        </div>

        <h2 className="font-accent text-3xl sm:text-4xl text-diwali-gold-300 mb-2">
          Welcome to the Festival of Lights
        </h2>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-diwali-cream-100 leading-tight mb-6">
          Make Your Diwali
          <br />
          <span className="gold-text text-shadow-gold">Shine Brighter</span>
          <span className="inline-block ml-2 animate-flicker">✨</span>
        </h1>

        <p className="text-lg sm:text-xl text-diwali-cream-300/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Beautiful Diwali decorations designed to turn your home, office and events into
          unforgettable festive spaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#booking')}
            className="festive-btn flex items-center gap-2 group"
          >
            <Calendar className="w-5 h-5" />
            Book Your Decoration
          </button>
          <button
            onClick={() => scrollTo('#gallery')}
            className="outline-btn flex items-center gap-2 group"
          >
            <Images className="w-5 h-5" />
            View Our Work
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '8+', label: 'Years Experience' },
            { value: '50+', label: 'Design Themes' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl px-4 py-6 text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold gold-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-diwali-cream-300/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-diwali-gold-500/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-diwali-gold-400 rounded-full animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
