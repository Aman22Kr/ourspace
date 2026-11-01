import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { AdBanner } from '../components/AdBanner';

export const SolutionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-neutral-50 text-center">
        <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2">Solution Not Found</h2>
        <p className="text-sm text-neutral-600 mb-6">The workspace solution you requested is not recognized.</p>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Solutions Directory</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="hover:text-neutral-900">Home</Link>
          <span>/</span>
          <Link to="/solutions" className="hover:text-neutral-900">Solutions</Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium">{solution.title}</span>
        </div>
      </div>

      {/* Hero Visual Banner */}
      <section className="relative h-[400px] lg:h-[460px] w-full overflow-hidden bg-neutral-950">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover brightness-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Enterprise Grade Workspace Solution
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {solution.title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 font-light max-w-2xl">
            {solution.headline}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="bg-white p-8 border border-neutral-200 space-y-4">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Detailed Overview
              </h2>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {solution.longDesc}
              </p>
              <div className="pt-2 text-xs text-neutral-500 font-medium">
                <strong>Recommended for:</strong> {solution.idealFor}
              </div>
            </section>

            {/* Core Features */}
            <section className="bg-white p-8 border border-neutral-200 space-y-6">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Architectural Inclusions & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solution.features.map((feat, idx) => (
                  <div key={idx} className="space-y-1.5 p-4 bg-neutral-50 border border-neutral-100">
                    <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Equipment & Standards Specs */}
            <section className="bg-white p-8 border border-neutral-200 space-y-6">
              <h2 className="text-xl font-serif font-bold text-neutral-900">
                Hardware & Technical Specifications
              </h2>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                {solution.equipmentSpecs.map((spec, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">{spec.label}</span>
                    <span className="text-neutral-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Study Adjacency */}
            <section className="bg-neutral-900 text-white p-8 border border-neutral-800 space-y-4">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Client Deployment Scenario
              </div>
              <h3 className="text-lg font-serif font-bold text-white">
                {solution.caseScenario.clientType}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-neutral-300">
                <div className="p-3 bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1">Challenge</div>
                  <div>{solution.caseScenario.challenge}</div>
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-800">
                  <div className="text-neutral-500 uppercase tracking-wider text-[10px] mb-1">Solution</div>
                  <div>{solution.caseScenario.solution}</div>
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-800">
                  <div className="text-amber-400 uppercase tracking-wider text-[10px] mb-1">Outcome</div>
                  <div>{solution.caseScenario.outcome}</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Action Panel (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-neutral-200 p-6 space-y-6">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Investment Guidance
                </div>
                <div className="text-base font-bold text-neutral-900 mt-1">
                  {solution.startingPriceNote}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <Link
                  to={`/calculator?solution=${solution.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Build Custom Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/book-tour"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-200"
                >
                  <span>Book In-Person Viewing</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-3 text-xs text-neutral-600">
                <div className="font-semibold text-neutral-900">Complimentary with Every Agreement:</div>
                <div className="space-y-2">
                  {solution.includedServices.slice(0, 4).map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
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
