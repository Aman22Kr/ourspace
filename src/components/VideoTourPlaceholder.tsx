import React from 'react';
import { Play } from 'lucide-react';

interface VideoTourPlaceholderProps {
  title?: string;
  subtitle?: string;
  locationName?: string;
}

/**
 * Reusable video placeholder adhering to prompt constraints:
 * Reproduces the exact 16:9 cinematic aspect ratio and dimensions of the
 * executive centre video walkthrough, using a clean architectural blank
 * placeholder frame instead of embedding an external YouTube stream.
 */
export const VideoTourPlaceholder: React.FC<VideoTourPlaceholderProps> = ({
  title = 'Executive Walkthrough: Architectural Distinction',
  subtitle = 'Experience our flagship Grade-A soundproofing, Herman Miller ergonomic design, and five-star hospitality lounges.',
  locationName = 'Global Flagship Centres'
}) => {
  return (
    <section className="w-full bg-neutral-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Virtual Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Area Container: Exact 16:9 ratio, blank placeholder canvas */}
        <div className="relative aspect-video w-full rounded-none overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col items-center justify-center p-6 text-center group">
          {/* Subtle grid background to evoke architectural blueprint */}
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
            aria-hidden="true"
          />

          {/* Central Play Indicator inside blank video frame */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-neutral-700 bg-neutral-900/90 flex items-center justify-center text-amber-400 shadow-xl transition-transform group-hover:scale-105 duration-300">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400/20 stroke-[1.5] ml-1" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200 tracking-wide">
                Architectural Video Preview
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Aspect Ratio 16:9 · 4K Master Recording · {locationName}
              </p>
            </div>
          </div>

          {/* Bottom subtle media timeline bar placeholder */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] text-neutral-500 z-10 border-t border-neutral-800/80 pt-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
              <span>00:00 / 02:45</span>
            </div>
            <span>High Definition · Master Resolution</span>
          </div>
        </div>
      </div>
    </section>
  );
};
