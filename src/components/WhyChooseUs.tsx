import * as Icons from 'lucide-react';
import { Sparkles, type LucideIcon } from 'lucide-react';
import { benefits } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhyChooseUs() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-festive-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            The <span className="gold-text">Shubh Deep</span> Difference
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            We go beyond decoration to create experiences that make your Diwali truly memorable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[benefit.icon] || Sparkles;
            return (
              <div
                key={benefit.title}
                className="reveal glass-card glass-card-hover rounded-2xl p-8 group flex items-start gap-5"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-diwali-gold-500/20 to-diwali-orange-500/10 border border-diwali-gold-500/30 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-diwali-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-diwali-cream-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-diwali-cream-300/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
