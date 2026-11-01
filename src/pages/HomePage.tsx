import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ArrowRight, ShieldCheck, Coffee, Wifi, Users, ChevronRight } from 'lucide-react';
import { CENTRES, ALL_CITIES } from '../data/centres';
import { SOLUTIONS } from '../data/solutions';
import { ARTICLES } from '../data/articles';
import { TESTIMONIALS } from '../data/testimonials';
import { CentreCard } from '../components/CentreCard';
import { VideoTourPlaceholder } from '../components/VideoTourPlaceholder';
import { AdBanner } from '../components/AdBanner';

export const HomePage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/locations?q=${encodeURIComponent(searchQuery.trim())}`);
    } else if (selectedCity !== 'All') {
      navigate(`/locations?city=${encodeURIComponent(selectedCity)}`);
    } else {
      navigate('/locations');
    }
  };

  const filteredCentres = CENTRES.filter((c) => {
    if (selectedCity !== 'All' && c.city !== selectedCity) return false;
    return true;
  }).slice(0, 6);

  return (
    <div className="w-full bg-neutral-50">
      {/* 1. HERO SECTION: Full-width architectural presence */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-neutral-950 text-white overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_executive_office_1793511547075.jpg"
            alt="ourspace Luxury Executive Office"
            className="w-full h-full object-cover object-center brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-neutral-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <span>Prime CBD Grade-A Commercial Real Estate</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight text-balance">
              Flexible Workspaces in Prime Global Locations
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Elevate your business presence. ourspace provides tailored private office suites, bespoke enterprise headquarters, and executive boardrooms in the world’s most iconic skyscrapers.
            </p>

            {/* Quick Location & Solution Finder Box */}
            <form
              onSubmit={handleHeroSearch}
              className="mt-8 p-2 bg-white/95 backdrop-blur-md shadow-2xl border border-white/20 flex flex-col md:flex-row items-stretch gap-2 text-neutral-900"
            >
              {/* City Selection */}
              <div className="flex-1 flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-neutral-200">
                <MapPin className="w-4 h-4 text-amber-700 mr-2 shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-neutral-800 focus:outline-none cursor-pointer"
                  aria-label="Select destination city"
                >
                  <option value="All">All Global Cities (180+ Locations)</option>
                  {ALL_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Keyword / Building Search */}
              <div className="flex-1 flex items-center px-3 py-2">
                <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Building name, landmark or transit..."
                  aria-label="Search workspace locations"
                  className="w-full bg-transparent text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="px-6 py-3 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Find Centre</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Unboxed Trust Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Triple Acoustic Insulation
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-amber-400" />
                Cisco Enterprise Dual-Fiber
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" />
                Artisan Barista Hospitality
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & REPUTATION STRIP (Adjacency & quantitative rigor) */}
      <section className="bg-neutral-900 text-white border-y border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="px-4 py-2">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 tabular-nums">
                180+
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Centres in 34 Tier-1 Cities
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 tabular-nums">
                30+ Years
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Heritage in Premium Real Estate
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 tabular-nums">
                99.8%
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Network Uptime & IT Compliance
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 tabular-nums">
                45,000+
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Executive & Enterprise Members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKSPACE SOLUTIONS BENTO SHOWCASE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Tailored Corporate Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
              A Solution for Every Stage of Global Growth
            </h2>
          </div>
          <Link
            to="/solutions"
            className="text-xs font-semibold uppercase tracking-wider text-amber-800 hover:text-amber-950 flex items-center gap-1.5"
          >
            <span>Compare All Solutions</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid: Prominent Marquee card + secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Marquee Card: Private Offices */}
          <div className="md:col-span-2 group relative bg-neutral-900 text-white overflow-hidden flex flex-col justify-between border border-neutral-800">
            <div className="relative aspect-16/9 md:aspect-auto md:h-80 w-full overflow-hidden">
              <img
                src="/src/assets/images/private_office_suite_1793511548871.jpg"
                alt="Private Offices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute top-4 left-4 text-xs uppercase tracking-widest font-semibold text-amber-400">
                Flagship Offering
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-3 bg-neutral-950 border-t border-neutral-800">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Private Office Suites
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                Acoustically isolated (STC 48), fully furnished executive suites fitted with Herman Miller Aeron seating and dedicated enterprise VLAN for teams of 1 to 50+.
              </p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-neutral-400">From $850 / desk / month</span>
                <Link
                  to="/solutions/private-offices"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                >
                  <span>Explore Suites</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Coworking & Lounges */}
          <div className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/coworking_executive_lounge_1793511546311.jpg"
                alt="Coworking Lounges"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Coworking & Lounges
              </h3>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                Tranquil designer business lounges with full-time on-site baristas, focus pods, and global passport access across 180+ centres.
              </p>
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">From $350 / month</span>
                <Link
                  to="/solutions/coworking"
                  className="text-xs font-semibold text-neutral-900 hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Meeting Rooms */}
          <div className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/boardroom_meeting_suite_1793511547929.jpg"
                alt="Meeting & Boardrooms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Meeting & Boardrooms
              </h3>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                Broadcast-grade Cisco AV, 4K multi-screen conferencing, executive catering, and on-demand butler support for high-stakes meetings.
              </p>
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">From $80 / hour</span>
                <Link
                  to="/solutions/meeting-rooms"
                  className="text-xs font-semibold text-neutral-900 hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Virtual Offices */}
          <div className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/reception_concierge_desk_1793511549781.jpg"
                alt="Virtual Offices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Virtual Offices
              </h3>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                A premier CBD commercial address, personalized bilingual phone answering, and daily mail dispatch for global entities.
              </p>
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">From $120 / month</span>
                <Link
                  to="/solutions/virtual-offices"
                  className="text-xs font-semibold text-neutral-900 hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Enterprise Bespoke Solutions */}
          <div className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
              <img
                src="/src/assets/images/hero_executive_office_1793511547075.jpg"
                alt="Enterprise Bespoke Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Enterprise Build-Outs
              </h3>
              <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                Custom full-floor architectural headquarters designed, built, and fully operated for enterprises of 50 to 500+ professionals. Zero CapEx.
              </p>
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500">Custom Consultation</span>
                <Link
                  to="/solutions/enterprise"
                  className="text-xs font-semibold text-neutral-900 hover:text-amber-700 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP CENTRES SPOTLIGHT */}
      <section className="bg-white py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
                Global Network
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
                Featured Executive Centres
              </h2>
            </div>

            {/* City Segmented Filter Buttons (Buttons, not pills) */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
              <button
                type="button"
                onClick={() => setSelectedCity('All')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCity === 'All'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All Cities
              </button>
              {['Singapore', 'Tokyo', 'Hong Kong', 'Sydney', 'Dubai'].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedCity === city
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Centres Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCentres.map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore All 180+ Global Centres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE OURSPACE ARCHITECTURAL PILLARS (Numbered editorial, no mechanical prefixes) */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              The ourspace Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
              Architectural Rigor & Hospitality Distinction
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Unlike generic co-working providers, ourspace was built specifically for discerning enterprise organizations and institutional leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-neutral-200">
              <div className="text-amber-700 font-serif text-lg font-bold mb-2">01.</div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Prime Grade-A CBD Landmarks
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We invest strictly in the world’s most recognized commercial skyscrapers, ensuring your address commands instant prestige among clients and stakeholders.
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200">
              <div className="text-amber-700 font-serif text-lg font-bold mb-2">02.</div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                STC-48 Acoustic Engineering
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Confidentiality is paramount. All private suites and boardrooms feature slab-to-slab acoustic dampening and double-glazed soundproof glass.
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200">
              <div className="text-amber-700 font-serif text-lg font-bold mb-2">03.</div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Dual-Redundant IT Infrastructure
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Engineered with enterprise Cisco hardware, private VLANs, dedicated server racks, and ISO 27001 data compliance.
              </p>
            </div>

            <div className="bg-white p-6 border border-neutral-200">
              <div className="text-amber-700 font-serif text-lg font-bold mb-2">04.</div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Five-Star Concierge Hospitality
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Trained bilingual concierges greet your guests, deliver on-site artisan barista coffee, and manage daily administrative tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLANK VIDEO TOUR PLACEHOLDER (Adheres strictly to YouTube placeholder requirement) */}
      <VideoTourPlaceholder
        title="Walk Through an ourspace Flagship Centre"
        subtitle="Experience our soundproofed private office suites, acoustic boardrooms, and five-star barista lounges."
        locationName="One Raffles Quay, Singapore"
      />

      {/* 7. QUANTITATIVE SOCIAL PROOF & TESTIMONIALS */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
              Trusted by Leading Global Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-neutral-50 p-8 border border-neutral-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    {t.metric}
                  </div>
                  <blockquote className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="pt-6 border-t border-neutral-200 mt-6">
                  <div className="font-semibold text-neutral-900 text-sm">{t.author}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                  <div className="text-xs text-amber-800 font-medium mt-0.5">{t.company}</div>
                  <div className="text-[11px] text-neutral-400 mt-1">Based at {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXECUTIVE INSIGHTS TEASER */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
                Thought Leadership
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
                Executive Market Briefings
              </h2>
            </div>
            <Link
              to="/insights"
              className="text-xs font-semibold uppercase tracking-wider text-amber-800 hover:text-amber-950 flex items-center gap-1.5"
            >
              <span>View All Briefings</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <article key={article.id} className="bg-white p-6 border border-neutral-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs text-neutral-500 flex items-center gap-2">
                    <span className="font-medium text-amber-800">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-neutral-900 leading-snug">
                    <Link to={`/insights/${article.slug}`} className="hover:text-amber-800">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{article.publishDate}</span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="text-xs font-semibold text-neutral-900 hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM ACTION CALLOUT */}
      <section className="bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
            Ready to Discover Your Next Executive Workspace?
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Schedule a private walkthrough with our Centre Director or receive a bespoke quotation tailored to your team's headcount and timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book-tour"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Schedule Private Viewing
            </Link>
            <Link
              to="/calculator"
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Instant Quote Estimator
            </Link>
          </div>
        </div>
      </section>

      {/* 10. COMPACT AD BANNER (Above footer as required) */}
      <AdBanner />
    </div>
  );
};
