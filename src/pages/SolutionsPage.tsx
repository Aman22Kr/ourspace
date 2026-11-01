import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck, Sparkles, Building, Coffee, Users, PhoneCall } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { AdBanner } from '../components/AdBanner';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Workspace Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Comprehensive Workspace Solutions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            From single-director private executive suites to custom 500-workstation enterprise regional headquarters, ourspace provides uncompromised flexibility and five-star corporate hospitality.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {SOLUTIONS.map((solution, idx) => (
          <div
            key={solution.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-neutral-200 p-8 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100 border border-neutral-200">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Solution 0{idx + 1}
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">
                {solution.title}
              </h2>
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                Ideal for: {solution.idealFor}
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {solution.longDesc}
              </p>

              {/* Inclusions summary */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {solution.includedServices.slice(0, 4).map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-800">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              {/* Actions & Price Guide */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-900">{solution.startingPriceNote}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Detailed Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/calculator?solution=${solution.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Matrix Section */}
      <section className="bg-white border-t border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Strategic Comparison
            </div>
            <h2 className="text-2xl font-serif font-bold text-neutral-900 tracking-tight">
              Feature Matrix by Workspace Solution
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-neutral-200 border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white border-b border-neutral-800">
                  <th className="p-4 font-semibold">Capability / Standard</th>
                  <th className="p-4 font-semibold">Private Offices</th>
                  <th className="p-4 font-semibold">Coworking</th>
                  <th className="p-4 font-semibold">Meeting Rooms</th>
                  <th className="p-4 font-semibold">Virtual Offices</th>
                  <th className="p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Team Size</td>
                  <td className="p-4">1 - 50+ Desks</td>
                  <td className="p-4">1 - 5 Desks</td>
                  <td className="p-4">4 - 30 Attendees</td>
                  <td className="p-4">Any (Remote)</td>
                  <td className="p-4">50 - 500+ Desks</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Acoustic Isolation</td>
                  <td className="p-4">STC 48 Slab-to-Slab</td>
                  <td className="p-4">Focus Booths</td>
                  <td className="p-4">STC 50+ Heavy Acoustic</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">Custom Engineered</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">IT Connectivity</td>
                  <td className="p-4">Private Dedicated VLAN</td>
                  <td className="p-4">Encrypted Wi-Fi 6</td>
                  <td className="p-4">Cisco Dual-Screen AV</td>
                  <td className="p-4">Cloud PBX App</td>
                  <td className="p-4">Dedicated Comms Room</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Contract Flexibility</td>
                  <td className="p-4">1 to 24 Months</td>
                  <td className="p-4">Monthly Rolling</td>
                  <td className="p-4">Hourly / Daily</td>
                  <td className="p-4">6 or 12 Months</td>
                  <td className="p-4">12 to 36 Months</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50">Concierge & Barista</td>
                  <td className="p-4">Included Daily</td>
                  <td className="p-4">Included Daily</td>
                  <td className="p-4">Meeting Butler Service</td>
                  <td className="p-4">Call Answering Included</td>
                  <td className="p-4">Dedicated Head Butler</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
