import { Sparkles, Heart, Award, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  const features = [
    { icon: Award, title: 'Award-Winning Designs', text: 'Recognized for our creative and beautiful Diwali decoration work.' },
    { icon: Users, title: 'Expert Team', text: 'Skilled decorators with years of experience in traditional and modern themes.' },
    { icon: Heart, title: 'Customer First', text: 'We treat every space as our own, ensuring you get the best festive experience.' },
  ];

  return (
    <section id="about" className="section-padding bg-diwali-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-diwali-gold-400" />
              <span className="text-sm text-diwali-cream-200 font-medium">About Us</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-6 leading-tight">
              Crafting <span className="gold-text">Festive Magic</span> Since 2017
            </h2>
            <p className="text-diwali-cream-300/80 text-lg leading-relaxed mb-6">
              Shubh Deep Diwali Decorators was born from a passion for bringing the joy and warmth
              of Diwali into every home and event. What started as a small family venture has grown
              into one of the most trusted Diwali decoration services in the region.
            </p>
            <p className="text-diwali-cream-300/70 leading-relaxed mb-8">
              From simple home decorations to grand corporate Diwali events, we bring creativity,
              tradition, and modern aesthetics together to create unforgettable festive experiences.
              Every diya we light, every rangoli we craft, and every light we hang is placed with
              love and care.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="glass-card glass-card-hover rounded-2xl p-5">
                  <f.icon className="w-7 h-7 text-diwali-gold-400 mb-3" />
                  <h3 className="text-diwali-cream-100 font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-diwali-cream-300/60 text-xs leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/34428307/pexels-photo-34428307.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Beautifully lit Diwali oil lamps creating a warm festive atmosphere"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-diwali-purple-950 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 w-48 animate-glow-pulse">
              <div className="font-display text-3xl font-bold gold-text">8+ Years</div>
              <div className="text-diwali-cream-300/70 text-sm mt-1">of spreading festive joy</div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-6 w-48">
              <div className="font-display text-3xl font-bold gold-text">500+</div>
              <div className="text-diwali-cream-300/70 text-sm mt-1">decorations completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
