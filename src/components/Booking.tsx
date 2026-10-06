import { useState } from 'react';
import { CalendarCheck, CheckCircle2, Loader2, Send } from 'lucide-react';
import { decorationTypes, packageOptions } from '@/data/content';
import { supabase } from '@/lib/supabase';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FormState {
  name: string;
  phone: string;
  email: string;
  decorationType: string;
  eventDate: string;
  location: string;
  package: string;
  additionalRequirements: string;
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  decorationType: '',
  eventDate: '',
  location: '',
  package: '',
  additionalRequirements: '',
};

export default function Booking() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.from('booking_requests').insert({
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        decoration_type: form.decorationType,
        event_date: form.eventDate || null,
        location: form.location,
        package: form.package || null,
        additional_requirements: form.additionalRequirements || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-diwali-purple-900/40 border border-diwali-gold-500/20 rounded-xl px-4 py-3 text-diwali-cream-100 placeholder-diwali-cream-300/30 focus:outline-none focus:border-diwali-gold-500/60 focus:ring-2 focus:ring-diwali-gold-500/20 transition-all text-sm';

  const labelClass = 'block text-diwali-cream-200 text-sm font-medium mb-1.5';

  return (
    <section id="booking" className="section-padding bg-festive-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-rangoli-pattern" />
      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <CalendarCheck className="w-4 h-4 text-diwali-gold-400" />
            <span className="text-sm text-diwali-cream-200 font-medium">Book Now</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-diwali-cream-100 mb-4">
            Book Your <span className="gold-text">Diwali Decoration</span>
          </h2>
          <p className="text-diwali-cream-300/70 text-lg">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="reveal active glass-card rounded-3xl p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/30 to-green-600/20 border border-green-400/40 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-diwali-cream-100 mb-3">
              Booking Request Sent!
            </h3>
            <p className="text-diwali-cream-300/70 mb-8">
              Thank you for choosing Shubh Deep Diwali Decorators. We've received your request and
              will contact you within 24 hours to confirm your decoration details.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="outline-btn"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal glass-card rounded-3xl p-6 sm:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="name">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="eventDate">Event Date</label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={`${inputClass} color-scheme-dark`}
                  style={{ colorScheme: 'dark' }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="decorationType">Decoration Type *</label>
                <select
                  id="decorationType"
                  name="decorationType"
                  required
                  value={form.decorationType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select decoration type</option>
                  {decorationTypes.map((type) => (
                    <option key={type} value={type} className="bg-diwali-purple-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="package">Package</label>
                <select
                  id="package"
                  name="package"
                  value={form.package}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a package</option>
                  {packageOptions.map((pkg) => (
                    <option key={pkg} value={pkg} className="bg-diwali-purple-900">
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="location">Location *</label>
              <input
                id="location"
                name="location"
                type="text"
                required
                value={form.location}
                onChange={handleChange}
                placeholder="Full address or area name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="additionalRequirements">Additional Requirements</label>
              <textarea
                id="additionalRequirements"
                name="additionalRequirements"
                rows={4}
                value={form.additionalRequirements}
                onChange={handleChange}
                placeholder="Tell us about any specific themes, colors, or special requests..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3 px-4">
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="festive-btn w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Booking Request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
