import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { getSavedCentres } from '../utils/storage';
import { SOLUTIONS } from '../data/solutions';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [savedCount, setSavedCount] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update saved count on route changes or storage events
  useEffect(() => {
    const updateCount = () => {
      setSavedCount(getSavedCentres().length);
    };
    updateCount();
    window.addEventListener('storage', updateCount);
    return () => window.removeEventListener('storage', updateCount);
  }, [location.pathname]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200'
            : 'bg-white border-b border-neutral-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Exactly 3 Zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark */}
            <Link
              to="/"
              className="group flex items-center gap-2 text-2xl font-serif font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0"
              aria-label="ourspace Home"
            >
              <span>ourspace</span>
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full inline-block group-hover:scale-125 transition-transform" />
            </Link>

            {/* Zone 2: 4-5 concise single-line nav links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
              <Link
                to="/locations"
                className={`transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith('/locations') ? 'text-amber-700 font-semibold' : ''
                }`}
              >
                Locations
              </Link>

              {/* Solutions Dropdown Menu */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`flex items-center gap-1 transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0 ${
                    location.pathname.startsWith('/solutions') ? 'text-amber-700 font-semibold' : ''
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>

                {solutionsDropdownOpen && (
                  <div className="absolute top-full -left-4 w-72 bg-white border border-neutral-200 shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-1.5 text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                      Workspace Offerings
                    </div>
                    {SOLUTIONS.map((s) => (
                      <Link
                        key={s.id}
                        to={`/solutions/${s.slug}`}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-amber-800 transition-colors"
                      >
                        <div className="font-medium text-neutral-900">{s.title}</div>
                        <div className="text-xs text-neutral-500 line-clamp-1">{s.shortDesc}</div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-neutral-100 px-4">
                      <Link
                        to="/solutions"
                        className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center justify-between"
                      >
                        <span>View All Solutions Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/calculator"
                className={`transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0 ${
                  location.pathname === '/calculator' ? 'text-amber-700 font-semibold' : ''
                }`}
              >
                Quote Estimator
              </Link>

              <Link
                to="/insights"
                className={`transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith('/insights') ? 'text-amber-700 font-semibold' : ''
                }`}
              >
                Insights
              </Link>

              <Link
                to="/about"
                className={`transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0 ${
                  location.pathname === '/about' ? 'text-amber-700 font-semibold' : ''
                }`}
              >
                About
              </Link>
            </nav>

            {/* Zone 3: Primary action + Saved Dashboard & Mobile Trigger */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Saved items quick link */}
              <Link
                to="/saved"
                className="relative p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                title="Saved Workspaces & Bookings"
                aria-label="Saved Workspaces & Bookings"
              >
                <Bookmark className="w-5 h-5" />
                {savedCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {savedCount}
                  </span>
                )}
              </Link>

              {/* Primary CTA Button */}
              <Link
                to="/book-tour"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-amber-700 active:bg-amber-800 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Book a Tour
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <Link
              to="/locations"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              Locations Directory
            </Link>

            <div className="py-2 border-b border-neutral-100">
              <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                Workspace Solutions
              </div>
              <div className="space-y-2 pl-3">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.id}
                    to={`/solutions/${s.slug}`}
                    className="block text-sm text-neutral-700 hover:text-amber-700"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/calculator"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              Quote Estimator
            </Link>
            <Link
              to="/insights"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              Executive Insights
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              About ourspace
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              Contact Global Team
            </Link>
            <Link
              to="/saved"
              className="block py-2 text-base font-medium text-neutral-800 hover:text-amber-700 border-b border-neutral-100"
            >
              Saved Workspaces ({savedCount})
            </Link>

            <div className="pt-2">
              <Link
                to="/book-tour"
                className="w-full inline-flex items-center justify-center py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-amber-700 transition-colors"
              >
                Schedule Private Viewing
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
