import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Leaf, Building2, Users2, ArrowRight } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Our Architectural Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
            Thirty Years of Executive Distinction
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Founded with an uncompromising belief that high-stakes business demands quiet elegance, ourspace designs, builds, and operates the world’s most prestigious flexible executive workspaces.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              The ourspace Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 leading-tight">
              A Flight to Quality in Commercial Real Estate
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              When ourspace opened its first executive centre over three decades ago, flexible workspaces were synonymous with temporary, uninspiring spaces. We chose a fundamentally different trajectory: investing exclusively in landmark Grade-A commercial addresses like Two IFC in Hong Kong, One Raffles Quay in Singapore, and Roppongi Hills in Tokyo.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              We understood that institutional investors, private equity partners, and multinational legal teams cannot compromise on acoustic privacy, data compliance, or five-star front-of-house presence. Every square meter of an ourspace centre is crafted to mirror the discretion of a private bank and the warmth of a luxury boutique hotel.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md">
              <img
                src="/src/assets/images/reception_concierge_desk_1793511549781.jpg"
                alt="ourspace Concierge Hospitality"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Global Network Milestones Grid */}
        <section className="bg-white p-8 sm:p-12 border border-neutral-200">
          <div className="max-w-2xl mb-8">
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Scale & Institutional Authority
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">
              A Global Presence Where Business Happens
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-100 text-center md:text-left">
            <div className="px-4 py-2">
              <div className="text-3xl font-bold font-serif text-neutral-900 tabular-nums">180+</div>
              <div className="text-xs text-neutral-500 mt-1">Flagship Executive Centres</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold font-serif text-neutral-900 tabular-nums">34</div>
              <div className="text-xs text-neutral-500 mt-1">Metropolitan Financial Capitals</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold font-serif text-neutral-900 tabular-nums">15</div>
              <div className="text-xs text-neutral-500 mt-1">Countries & Jurisdictions</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold font-serif text-neutral-900 tabular-nums">45,000+</div>
              <div className="text-xs text-neutral-500 mt-1">Senior Corporate Members</div>
            </div>
          </div>
        </section>

        {/* ESG & Sustainability Pillars */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Environmental & Social Governance
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">
              Sustainable Operations and Executive Wellness
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Responsible real estate stewardship is central to our design ethos. We partner with institutional landlords committed to the highest environmental accreditations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-neutral-200 space-y-3">
              <Leaf className="w-6 h-6 text-emerald-700" />
              <h3 className="text-base font-semibold text-neutral-900">
                LEED & BCA Green Mark
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Over 92% of our floors are situated in LEED Platinum or Gold rated buildings, maximizing energy efficiency, recycled graywater, and natural daylighting.
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 space-y-3">
              <Award className="w-6 h-6 text-emerald-700" />
              <h3 className="text-base font-semibold text-neutral-900">
                WELL Health-Safety Certified
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Indoor air quality sensors, MERV-14 hospital-grade HVAC filters, low-VOC acoustic paneling, and circadian lighting systems that sustain executive stamina.
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="text-base font-semibold text-neutral-900">
                Ethical Sourcing & Fair Trade
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Single-origin organic coffees from certified cooperatives, zero single-use plastics across our catering suites, and FSC-certified custom timber casework.
              </p>
            </div>
          </div>
        </section>

        {/* Callout */}
        <div className="bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold">Experience the ourspace Difference</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-lg">
              Book a walk-through with our regional leasing director at any of our flagship locations.
            </p>
          </div>
          <Link
            to="/book-tour"
            className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book Private Tour</span>
          </Link>
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
