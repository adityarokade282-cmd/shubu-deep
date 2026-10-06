import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-diwali-purple-950/95 backdrop-blur-lg shadow-lg shadow-black/30 border-b border-diwali-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center animate-glow-pulse">
              <Flame className="w-5 h-5 text-diwali-purple-900" />
            </div>
            <div className="leading-tight">
              <h1 className="font-display text-lg sm:text-xl font-bold text-diwali-cream-100">
                Shubh Deep
              </h1>
              <p className="text-[10px] sm:text-xs text-diwali-gold-400 font-accent -mt-1">
                Diwali Decorators
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-diwali-cream-200 hover:text-diwali-gold-300 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-diwali-gold-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#booking')}
              className="festive-btn text-sm"
            >
              Book Decoration
            </button>
          </div>

          <button
            className="lg:hidden text-diwali-cream-100 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-diwali-purple-950/98 backdrop-blur-lg border-t border-diwali-gold-500/20 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-diwali-cream-200 hover:text-diwali-gold-300 hover:bg-diwali-purple-800/50 rounded-lg transition-all font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#booking')}
            className="festive-btn w-full mt-4"
          >
            Book Decoration
          </button>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn w-full mt-2 inline-block text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
}
