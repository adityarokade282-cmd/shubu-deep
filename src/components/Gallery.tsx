import { useState } from 'react';
import { Images, X, Sparkles } from 'lucide-react';
import { galleryItems } from '@/data/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-diwali-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Images className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Our Gallery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            Our <span className="gold-text">Festive Creations</span>
          </h2>
          <p className="text-diwali-cream-300/70 text-lg max-w-2xl mx-auto">
            A glimpse of the beautiful Diwali decorations we've created for our happy clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`reveal relative rounded-2xl overflow-hidden group cursor-pointer ${item.span || ''}`}
              style={{ transitionDelay: `${idx * 40}ms` }}
              onClick={() => setLightbox(item.url)}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-diwali-purple-950/90 via-diwali-purple-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-diwali-gold-300 bg-diwali-gold-500/20 border border-diwali-gold-500/30 rounded-full px-3 py-1 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-diwali-purple-950/60 backdrop-blur-sm border border-diwali-gold-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-diwali-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-diwali-purple-800/80 border border-diwali-gold-500/30 flex items-center justify-center text-diwali-cream-100 hover:bg-diwali-purple-700 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
