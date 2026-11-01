import React from 'react';

interface AdBannerProps {
  className?: string;
}

/**
 * Compact advertisement placeholder component rendered near the bottom
 * of relevant pages above the footer. Complies with strict non-misleading
 * placeholder specifications.
 */
export const AdBanner: React.FC<AdBannerProps> = ({ className = '' }) => {
  return (
    <aside
      aria-label="Advertisement Space"
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 ${className}`}
    >
      <div className="relative border border-neutral-200 bg-neutral-100/70 rounded-none p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-widest text-[10px] font-semibold text-neutral-400 border border-neutral-300 px-1.5 py-0.5">
            Advertisement
          </span>
          <span className="text-neutral-600 font-medium">
            Partner Showcase · Global Commercial Real Estate Leaders & Institutional Advisory
          </span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400 text-[11px]">
          <span>Standard Display 728 × 90 Placement</span>
          <span>·</span>
          <span>Sponsorship Inquiries</span>
        </div>
      </div>
    </aside>
  );
};
