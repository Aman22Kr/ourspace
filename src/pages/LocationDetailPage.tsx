import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Bookmark, Check, ShieldCheck, Wifi, Coffee, PhoneCall, Train, ArrowRight, ArrowLeft } from 'lucide-react';
import { CENTRES, Centre } from '../data/centres';
import { isCentreSaved, toggleSavedCentre, recordRecentlyViewed } from '../utils/storage';
import { AdBanner } from '../components/AdBanner';

export const LocationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const centre = CENTRES.find((c) => c.slug === slug);
  const [isSaved, setIsSaved] = useState<boolean>(() => (centre ? isCentreSaved(centre.id) : false));

  useEffect(() => {
    if (centre) {
      recordRecentlyViewed(centre.id);
      setIsSaved(isCentreSaved(centre.id));
    }
  }, [centre]);

  if (!centre) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-neutral-50 text-center">
        <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">Centre Not Found</h2>
        <p className="text-sm text-neutral-600 mb-6">The location you requested does not exist or may have been relocated.</p>
        <Link
          to="/locations"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Locations Directory</span>
        </Link>
      </div>
    );
  }

  const handleToggleSave = () => {
    const nextState = toggleSavedCentre(centre.id);
    setIsSaved(nextState);
  };

  return (
    <div className="w-full bg-neutral-50">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-neutral-900">Home</Link>
            <span>/</span>
            <Link to="/locations" className="hover:text-neutral-900">Locations</Link>
            <span>/</span>
            <Link to={`/locations?city=${encodeURIComponent(centre.city)}`} className="hover:text-neutral-900">{centre.city}</Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{centre.name}</span>
          </div>

          <button
            type="button"
            onClick={handleToggleSave}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600 text-amber-600' : 'text-neutral-600'}`} />
            <span>{isSaved ? 'Saved to My Workspaces' : 'Save this Centre'}</span>
          </button>
        </div>
      </div>

      {/* Hero Visual Area */}
      <section className="relative h-[420px] lg:h-[500px] w-full overflow-hidden bg-neutral-950">
        <img
          src={centre.image}
          alt={centre.name}
          className="w-full h-full object-cover brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            {centre.city} · {centre.region} · {centre.floorLevels}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {centre.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 font-light max-w-2xl">
            {centre.tagline}
          </p>
        </div>
      </section>

      {/* Main Content & Sticky Booking Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Description */}
            <section className="space-y-4 bg-white p-8 border border-neutral-200">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Architectural Distinction & Position
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {centre.description}
              </p>

              <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {centre.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-neutral-800">
                    <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications & Key Metrics */}
            <section className="bg-white p-8 border border-neutral-200 space-y-6">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Centre Specifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-y border-neutral-100 py-6">
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Total Area</div>
                  <div className="text-lg font-bold text-neutral-900 mt-1 font-serif">{centre.specs.totalAreaSqFt}</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Max Capacity</div>
                  <div className="text-lg font-bold text-neutral-900 mt-1 font-serif">{centre.specs.maxDeskCapacity} Desks</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Boardrooms</div>
                  <div className="text-lg font-bold text-neutral-900 mt-1 font-serif">{centre.specs.meetingRoomsCount} Suites</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Security</div>
                  <div className="text-lg font-bold text-neutral-900 mt-1 font-serif">24/7 Biometric</div>
                </div>
              </div>

              {/* Certifications (Zero-pill) */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Building Environmental & Security Accreditations
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-700">
                  {centre.specs.certifications.map((cert, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-emerald-800 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Amenities Grid */}
            <section className="bg-white p-8 border border-neutral-200 space-y-6">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Five-Star Executive Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {centre.amenities.map((amenity, idx) => (
                  <div key={idx} className="p-3 bg-neutral-50 border border-neutral-100 flex items-center gap-2.5 text-xs text-neutral-800">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Transit & Address Details */}
            <section className="bg-white p-8 border border-neutral-200 space-y-4">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Location & Transit Links
              </h2>
              <div className="space-y-3 text-xs text-neutral-700">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Physical Address:</strong>
                    <div className="text-neutral-600 mt-0.5">{centre.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900">Public Transit:</strong>
                    <div className="text-neutral-600 mt-0.5">{centre.transit}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking & Quotation Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-neutral-200 p-6 space-y-6 shadow-sm">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Leasing & Pricing Guide
                </div>
                <div className="text-2xl font-bold font-serif text-neutral-900 mt-1">
                  {centre.currency} {centre.startingPrice.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-neutral-500 font-sans">/ desk / month</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  Flexible month-to-month or 12–24 month custom agreements. Zero fit-out CapEx.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <Link
                  to={`/book-tour?centreId=${centre.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Schedule Private Viewing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/calculator?centreId=${centre.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-200"
                >
                  <span>Calculate Custom Quotation</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center justify-between">
                  <span>Centre Reception:</span>
                  <span className="text-neutral-800 font-medium">+65 6823 8888</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tour Availability:</span>
                  <span className="text-emerald-700 font-medium">Mon - Fri, 9am - 6pm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Virtual 3D Walkthrough:</span>
                  <span className="text-neutral-800 font-medium">Available on Demand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
