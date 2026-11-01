import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Centre } from '../data/centres';
import { isCentreSaved, toggleSavedCentre } from '../utils/storage';

interface CentreCardProps {
  centre: Centre;
  onBookmarkChange?: () => void;
}

export const CentreCard: React.FC<CentreCardProps> = ({ centre, onBookmarkChange }) => {
  const [saved, setSaved] = useState(() => isCentreSaved(centre.id));

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleSavedCentre(centre.id);
    setSaved(newState);
    if (onBookmarkChange) onBookmarkChange();
  };

  return (
    <article className="group relative bg-white border border-neutral-200 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:border-neutral-400 hover:shadow-md">
      <div>
        {/* Centre Image Container */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
          <img
            src={centre.image}
            alt={`${centre.name} in ${centre.city}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-80" />

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            aria-label={saved ? 'Remove from saved' : 'Save workspace'}
            className="absolute top-3 right-3 p-2 bg-neutral-900/80 hover:bg-neutral-900 text-white backdrop-blur-xs transition-colors z-10"
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500 text-amber-500' : 'text-white'}`} />
          </button>

          {/* City & Building Floor overlaid on bottom of image */}
          <div className="absolute bottom-3 left-4 right-4 text-white z-10">
            <div className="text-[11px] font-medium tracking-wide uppercase text-amber-300">
              {centre.city} · {centre.region}
            </div>
            <h3 className="text-lg font-serif font-semibold text-white leading-tight mt-0.5">
              {centre.name}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-4">
          {/* Unboxed Address & Landmark (Zero-pill discipline) */}
          <div className="text-xs text-neutral-600 flex items-start gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neutral-400 mt-0.5 shrink-0" />
            <span className="line-clamp-1">{centre.address}</span>
          </div>

          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {centre.description}
          </p>

          {/* Unboxed Metadata with typographic separators */}
          <div className="text-[11px] text-neutral-500 flex items-center flex-wrap gap-2 pt-1 border-t border-neutral-100">
            <span>{centre.floorLevels}</span>
            <span aria-hidden="true">·</span>
            <span>{centre.specs.totalAreaSqFt}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-emerald-800 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-700" />
              {centre.specs.certifications[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: Starting Price & Direct Link */}
      <div className="px-5 pb-5 pt-3 border-t border-neutral-100 flex items-center justify-between mt-auto">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
            Starting from
          </div>
          <div className="text-sm font-semibold text-neutral-900">
            {centre.currency} {centre.startingPrice.toLocaleString()}{' '}
            <span className="text-[11px] text-neutral-500 font-normal">/ desk / mo</span>
          </div>
        </div>

        <Link
          to={`/locations/${centre.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-150"
        >
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
