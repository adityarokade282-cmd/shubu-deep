import { Star, Quote, MessageSquareHeart } from 'lucide-react';
import { testimonials } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="section-padding bg-diwali-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <MessageSquareHeart className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Customer Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            Real stories from happy customers who made their Diwali special with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="reveal glass-card glass-card-hover rounded-3xl p-8 relative"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-diwali-gold-500/15" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-diwali-gold-400 text-diwali-gold-400" />
                ))}
              </div>

              <p className="text-diwali-cream-200/80 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-diwali-gold-500/15">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-diwali-gold-400 to-diwali-orange-500 flex items-center justify-center font-display font-bold text-diwali-purple-900 text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-diwali-cream-100 text-sm">{t.name}</div>
                  <div className="text-diwali-cream-300/50 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
