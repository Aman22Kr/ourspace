import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowLeft, ArrowRight } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-50 min-h-[75vh] flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="text-amber-700 font-serif font-bold text-6xl tracking-tight">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 tracking-tight">
            Page or Centre Not Located
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
            The destination you requested may have been relocated, or the URL identifier is no longer in service.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-100 text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors border border-neutral-200"
            >
              <span>Explore Locations Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-neutral-200 text-xs text-neutral-500">
            <span>Popular destinations: </span>
            <Link to="/locations?city=Singapore" className="underline hover:text-neutral-900">Singapore</Link> ·{' '}
            <Link to="/locations?city=Tokyo" className="underline hover:text-neutral-900">Tokyo</Link> ·{' '}
            <Link to="/locations?city=Hong%20Kong" className="underline hover:text-neutral-900">Hong Kong</Link> ·{' '}
            <Link to="/solutions/private-offices" className="underline hover:text-neutral-900">Private Offices</Link>
          </div>
        </div>
      </div>

      <AdBanner />
    </div>
  );
};
