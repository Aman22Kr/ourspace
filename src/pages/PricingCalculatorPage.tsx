import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, Bookmark, Download, RotateCcw, ShieldCheck } from 'lucide-react';
import { CENTRES, Centre } from '../data/centres';
import { SOLUTIONS } from '../data/solutions';
import { saveQuote } from '../utils/storage';
import { AdBanner } from '../components/AdBanner';

interface AddOnOption {
  id: string;
  name: string;
  monthlyCost: number;
  perDesk: boolean;
  description: string;
}

const ADD_ONS: AddOnOption[] = [
  {
    id: 'addon-server',
    name: 'Dedicated Private Server Rack Space',
    monthlyCost: 280,
    perDesk: false,
    description: 'Lockable 42U rack unit with dual-fed redundant UPS power and direct cross-connects.'
  },
  {
    id: 'addon-parking',
    name: 'Reserved Executive Basement Parking',
    monthlyCost: 350,
    perDesk: false,
    description: 'Guaranteed 24/7 dedicated bay inside building basement with direct elevator access.'
  },
  {
    id: 'addon-barista',
    name: 'Unlimited Specialty Barista Pass',
    monthlyCost: 45,
    perDesk: true,
    description: 'All-inclusive single-origin espresso and artisanal beverages for all team members.'
  },
  {
    id: 'addon-secretarial',
    name: 'Dedicated Executive Secretary Support',
    monthlyCost: 450,
    perDesk: false,
    description: '20 hours/month of corporate document preparation, translation, and courier management.'
  }
];

export const PricingCalculatorPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paramCentreId = searchParams.get('centreId');
  const paramSolution = searchParams.get('solution') || 'private-offices';

  const defaultCentre = CENTRES.find((c) => c.id === paramCentreId) || CENTRES[0];

  const [selectedCentreId, setSelectedCentreId] = useState<string>(defaultCentre.id);
  const [selectedSolutionSlug, setSelectedSolutionSlug] = useState<string>(paramSolution);
  const [teamSize, setTeamSize] = useState<number>(6);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['addon-barista']);
  const [quoteSavedNotice, setQuoteSavedNotice] = useState<boolean>(false);

  useEffect(() => {
    if (paramCentreId && CENTRES.some(c => c.id === paramCentreId)) {
      setSelectedCentreId(paramCentreId);
    }
  }, [paramCentreId]);

  const currentCentre = useMemo(() => {
    return CENTRES.find((c) => c.id === selectedCentreId) || CENTRES[0];
  }, [selectedCentreId]);

  const currentSolution = useMemo(() => {
    return SOLUTIONS.find((s) => s.slug === selectedSolutionSlug) || SOLUTIONS[0];
  }, [selectedSolutionSlug]);

  // Pricing math:
  // Base rate per desk per month in centre's currency
  const baseRatePerDesk = useMemo(() => {
    if (selectedSolutionSlug === 'coworking') return Math.round(currentCentre.startingPrice * 0.45);
    if (selectedSolutionSlug === 'virtual-offices') return Math.round(currentCentre.startingPrice * 0.15);
    if (selectedSolutionSlug === 'meeting-rooms') return Math.round(currentCentre.startingPrice * 0.3);
    if (selectedSolutionSlug === 'enterprise') return Math.round(currentCentre.startingPrice * 0.95);
    return currentCentre.startingPrice; // Private office default
  }, [selectedSolutionSlug, currentCentre]);

  // Term discount rate
  const discountRate = useMemo(() => {
    if (termMonths >= 24) return 0.22; // 22%
    if (termMonths >= 12) return 0.15; // 15%
    if (termMonths >= 6) return 0.05; // 5%
    return 0; // 1 mo
  }, [termMonths]);

  // Add-ons total monthly cost (converted relative to currency baseline)
  const addOnsMonthlyTotal = useMemo(() => {
    return selectedAddOns.reduce((acc, addOnId) => {
      const item = ADD_ONS.find((a) => a.id === addOnId);
      if (!item) return acc;
      const cost = item.perDesk ? item.monthlyCost * teamSize : item.monthlyCost;
      return acc + cost;
    }, 0);
  }, [selectedAddOns, teamSize]);

  const subtotalMonthly = baseRatePerDesk * teamSize;
  const discountAmount = Math.round(subtotalMonthly * discountRate);
  const netMonthly = subtotalMonthly - discountAmount + addOnsMonthlyTotal;
  const totalContract = netMonthly * termMonths;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((x) => x !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const handleSaveQuote = () => {
    const saved = saveQuote({
      centreId: currentCentre.id,
      centreName: currentCentre.name,
      city: currentCentre.city,
      solutionSlug: currentSolution.slug,
      solutionName: currentSolution.title,
      teamSize,
      termMonths,
      monthlyBasePrice: subtotalMonthly,
      discountPercentage: Math.round(discountRate * 100),
      addOns: selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)?.name || id),
      addOnsMonthlyTotal,
      netMonthlyRate: netMonthly,
      totalContractValue: totalContract,
      currency: currentCentre.currency
    });
    setQuoteSavedNotice(true);
    setTimeout(() => setQuoteSavedNotice(false), 5000);
  };

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Transparent Commercial Modeling
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Workspace Quotation Estimator
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Configure your team size, lease term, and executive add-ons to simulate your customized monthly rate with instant volume commitment savings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Centre */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                  1. Select Centre Location
                </h2>
                <span className="text-xs text-neutral-500">{currentCentre.city}</span>
              </div>

              <select
                value={selectedCentreId}
                onChange={(e) => setSelectedCentreId(e.target.value)}
                aria-label="Select Executive Centre"
                className="w-full p-3 bg-neutral-50 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-amber-600 cursor-pointer"
              >
                {CENTRES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.city}: {c.name} ({c.specs.certifications[0]})
                  </option>
                ))}
              </select>

              <div className="text-xs text-neutral-500 flex items-center gap-2">
                <span className="text-neutral-700 font-medium">{currentCentre.landmark}</span>
                <span>·</span>
                <span>{currentCentre.transit}</span>
              </div>
            </div>

            {/* Step 2: Workspace Solution */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                2. Select Workspace Category
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {SOLUTIONS.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => setSelectedSolutionSlug(s.slug)}
                    className={`p-3 text-left border transition-all ${
                      selectedSolutionSlug === s.slug
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-semibold">{s.title}</div>
                    <div className={`text-[11px] line-clamp-1 mt-0.5 ${selectedSolutionSlug === s.slug ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {s.shortDesc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Team Size Slider */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                  3. Team Workstations / Headcount
                </h2>
                <div className="text-base font-serif font-bold text-amber-800">
                  {teamSize} {teamSize === 1 ? 'Desk' : 'Desks'}
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                className="w-full accent-amber-700 h-2 bg-neutral-200 rounded-lg cursor-pointer"
                aria-label="Workstation Headcount Slider"
              />

              <div className="flex justify-between text-[11px] text-neutral-400">
                <span>1 Executive Desk</span>
                <span>10 Desks</span>
                <span>25 Desks</span>
                <span>50+ Desks</span>
              </div>
            </div>

            {/* Step 4: Term Duration */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                4. Lease Term Commitment
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  { months: 1, label: '1 Month', note: 'Standard Rate' },
                  { months: 6, label: '6 Months', note: '5% Savings' },
                  { months: 12, label: '12 Months', note: '15% Savings' },
                  { months: 24, label: '24 Months', note: '22% Max Savings' }
                ].map((term) => (
                  <button
                    key={term.months}
                    type="button"
                    onClick={() => setTermMonths(term.months)}
                    className={`p-3 text-center border transition-all ${
                      termMonths === term.months
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-semibold text-sm">{term.label}</div>
                    <div className={`text-[10px] mt-0.5 ${termMonths === term.months ? 'text-amber-400' : 'text-amber-700'}`}>
                      {term.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Executive Add-Ons */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                5. Executive Enhancements & Add-Ons
              </h2>

              <div className="space-y-3">
                {ADD_ONS.map((addOn) => {
                  const isChecked = selectedAddOns.includes(addOn.id);
                  return (
                    <label
                      key={addOn.id}
                      className={`flex items-start gap-3 p-3 border cursor-pointer transition-colors ${
                        isChecked ? 'bg-amber-50/50 border-amber-300' : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddOn(addOn.id)}
                        className="mt-1 accent-amber-700 w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between font-semibold text-neutral-900">
                          <span>{addOn.name}</span>
                          <span className="text-amber-800">
                            +{currentCentre.currency} {addOn.monthlyCost}
                            {addOn.perDesk ? '/desk/mo' : '/mo'}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          {addOn.description}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Quotation Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <div className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                  Estimate Breakdown
                </div>
                <h3 className="text-xl font-serif font-bold text-neutral-900 mt-1">
                  {currentCentre.name}
                </h3>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {currentSolution.title} · {teamSize} {teamSize === 1 ? 'Desk' : 'Desks'} · {termMonths} Months Term
                </div>
              </div>

              {/* Math Table (Tabular figures) */}
              <div className="space-y-3 text-xs text-neutral-600 divide-y divide-neutral-100">
                <div className="flex items-center justify-between pt-1">
                  <span>Base Rate ({teamSize} Desks × {currentCentre.currency} {baseRatePerDesk.toLocaleString()})</span>
                  <span className="font-mono tabular-nums text-neutral-900">
                    {currentCentre.currency} {subtotalMonthly.toLocaleString()}
                  </span>
                </div>

                {discountRate > 0 && (
                  <div className="flex items-center justify-between pt-2 text-emerald-700 font-medium">
                    <span>Term Savings ({Math.round(discountRate * 100)}% Discount)</span>
                    <span className="font-mono tabular-nums">
                      - {currentCentre.currency} {discountAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                {addOnsMonthlyTotal > 0 && (
                  <div className="flex items-center justify-between pt-2">
                    <span>Executive Add-Ons Total ({selectedAddOns.length} selected)</span>
                    <span className="font-mono tabular-nums text-neutral-900">
                      + {currentCentre.currency} {addOnsMonthlyTotal.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="pt-4 border-t-2 border-neutral-900 flex items-baseline justify-between text-neutral-900">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold">
                      Effective Monthly Rate
                    </div>
                    <div className="text-[10px] text-neutral-500">Excluding local GST/VAT</div>
                  </div>
                  <div className="text-2xl font-serif font-bold tabular-nums text-neutral-950">
                    {currentCentre.currency} {netMonthly.toLocaleString()}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                  <span>Total Agreement Value ({termMonths} Months)</span>
                  <span className="font-mono tabular-nums font-semibold text-neutral-900">
                    {currentCentre.currency} {totalContract.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={handleSaveQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>Save Quote to My Account</span>
                </button>

                {quoteSavedNotice && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                    <span>Quote successfully saved to browser storage.</span>
                    <Link to="/saved" className="font-semibold underline">
                      View Saved
                    </Link>
                  </div>
                )}

                <Link
                  to={`/book-tour?centreId=${currentCentre.id}&solution=${currentSolution.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Book Private Tour for this Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-1 text-[11px] text-neutral-500 leading-normal">
                <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Price Match Guarantee & Direct Landlord Terms</span>
                </div>
                <p>
                  No hidden broker commissions. Quote estimates are indicative and subject to exact suite orientation and inventory availability.
                </p>
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
