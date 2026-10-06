import { Flame, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book Now', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-diwali-purple-950 border-t border-diwali-gold-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center animate-glow-pulse">
                <Flame className="w-6 h-6 text-diwali-purple-900" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-diwali-cream-100">
                  {BUSINESS.name}
                </h3>
                <p className="text-diwali-gold-400 text-xs font-accent">Premium Diwali Decorators</p>
              </div>
            </div>
            <p className="text-diwali-cream-300/60 text-sm leading-relaxed max-w-md mb-6">
              {BUSINESS.tagline}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full glass-card glass-card-hover flex items-center justify-center text-diwali-gold-400"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-diwali-cream-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-diwali-cream-300/60 text-sm hover:text-diwali-gold-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-diwali-cream-100 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-diwali-cream-300/60">
                <Phone className="w-4 h-4 text-diwali-gold-400 flex-shrink-0" />
                {BUSINESS.phone}
              </li>
              <li className="flex items-center gap-3 text-diwali-cream-300/60">
                <Mail className="w-4 h-4 text-diwali-gold-400 flex-shrink-0" />
                {BUSINESS.email}
              </li>
              <li className="flex items-start gap-3 text-diwali-cream-300/60">
                <MapPin className="w-4 h-4 text-diwali-gold-400 flex-shrink-0 mt-0.5" />
                {BUSINESS.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-diwali-gold-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-diwali-cream-300/40 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-diwali-cream-300/40 text-sm">
            Made with <span className="text-diwali-orange-400">light</span> &amp; <span className="text-diwali-gold-400">love</span> for Diwali
          </p>
        </div>
      </div>
    </footer>
  );
}
