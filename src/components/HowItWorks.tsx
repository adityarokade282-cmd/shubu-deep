import * as Icons from 'lucide-react';
import { ListOrdered, type LucideIcon } from 'lucide-react';
import { steps } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-festive-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <ListOrdered className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            Simple <span className="gold-text">4-Step</span> Process
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            From inquiry to a beautifully decorated space, we make it effortless for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-diwali-gold-500/0 via-diwali-gold-500/40 to-diwali-gold-500/0" />

          {steps.map((step, idx) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[step.icon] || Icons.Phone;
            return (
              <div
                key={step.number}
                className="reveal relative glass-card glass-card-hover rounded-2xl p-8 text-center"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-display font-bold text-diwali-purple-900 text-sm shadow-lg">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-diwali-gold-500/20 to-diwali-orange-500/10 border border-diwali-gold-500/30 flex items-center justify-center mb-5 mt-4 mx-auto">
                  <Icon className="w-8 h-8 text-diwali-gold-400" />
                </div>

                <h3 className="font-display text-lg font-bold text-diwali-cream-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-diwali-cream-300/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
