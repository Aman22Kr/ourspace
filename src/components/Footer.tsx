import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Check } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { ALL_CITIES } from '../data/centres';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    // save to local storage
    try {
      const subs = JSON.parse(localStorage.getItem('ourspace_newsletter_subs') || '[]');
      localStorage.setItem('ourspace_newsletter_subs', JSON.stringify([...subs, email]));
    } catch {
      // silent
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Newsletter capture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block text-2xl font-serif font-bold text-white tracking-tight">
              ourspace<span className="text-amber-500">.</span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              Curating exceptional executive private offices, bespoke enterprise suites, and five-star business lounges in the world’s most prestigious Grade-A commercial landmarks.
            </p>
            <div className="pt-2 text-xs text-neutral-500 flex items-center gap-3">
              <span>180+ Flagship Centres</span>
              <span>·</span>
              <span>34 Key Global Cities</span>
              <span>·</span>
              <span>15 Countries</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-2">
                Executive Briefing & Market Intelligence
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Receive quarterly commercial real estate benchmarks, APAC leasing reports, and executive invitations.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs py-2 bg-neutral-900 px-4 border border-emerald-900/50">
                  <Check className="w-4 h-4" />
                  <span>Thank you. You are subscribed to ourspace Executive Briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter corporate email address"
                    aria-label="Corporate Email Address"
                    className="flex-1 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-4 py-2.5 text-xs focus:outline-none focus:border-amber-600 transition-colors"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              {error && <p className="text-rose-400 text-xs mt-1.5">{error}</p>}
            </div>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-neutral-900 text-xs">
          {/* Col 1: Solutions */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-4">
              Workspace Solutions
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <Link to={`/solutions/${s.slug}`} className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/calculator" className="hover:text-amber-400 transition-colors">
                  Online Quote Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Flagship Cities */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-4">
              Flagship Cities
            </h4>
            <ul className="space-y-2.5">
              {ALL_CITIES.map((city) => (
                <li key={city}>
                  <Link to={`/locations?city=${encodeURIComponent(city)}`} className="hover:text-amber-400 transition-colors">
                    {city} Centres
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/locations" className="text-amber-500 hover:underline">
                  View All 180+ Locations &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Brand */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-4">
              The ourspace Experience
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Our Architectural Legacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  Herman Miller Partnership
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  ESG & WELL Certifications
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-amber-400 transition-colors">
                  Executive Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Media & Enterprise Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Member Services & Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px] mb-4">
              Member Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/book-tour" className="hover:text-amber-400 transition-colors">
                  Schedule Private Viewing
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-amber-400 transition-colors">
                  My Saved Workspaces & Quotes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Global Concierge Desk
                </Link>
              </li>
              <li>
                <span className="text-neutral-500">Global Head Office: 1 Raffles Quay, Level 25, Singapore</span>
              </li>
              <li>
                <span className="text-neutral-500">Concierge: +65 6823 8888</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} ourspace Global Holdings Ltd. All rights reserved. Inspired by Grade-A hospitality.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-neutral-300">Privacy Notice</Link>
            <Link to="/about" className="hover:text-neutral-300">Terms of Lease</Link>
            <Link to="/about" className="hover:text-neutral-300">Security & ISO 27001</Link>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <Globe className="w-3.5 h-3.5" />
              <span>English (Global)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
