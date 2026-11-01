import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Calendar, Calculator, Trash2, ArrowRight, Building, CheckCircle2, XCircle } from 'lucide-react';
import { CENTRES } from '../data/centres';
import {
  getSavedCentres,
  toggleSavedCentre,
  getBookings,
  cancelBooking,
  deleteBooking,
  getQuotes,
  deleteQuote,
  clearAllUserData,
  SavedBooking,
  SavedQuote
} from '../utils/storage';
import { CentreCard } from '../components/CentreCard';
import { AdBanner } from '../components/AdBanner';

export const SavedWorkspacesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'centres' | 'bookings' | 'quotes'>('centres');
  const [savedCentreIds, setSavedCentreIds] = useState<string[]>([]);
  const [bookings, setBookings] = useState<SavedBooking[]>([]);
  const [quotes, setQuotes] = useState<SavedQuote[]>([]);
  const [actionNotice, setActionNotice] = useState<string>('');

  const refreshData = () => {
    setSavedCentreIds(getSavedCentres());
    setBookings(getBookings());
    setQuotes(getQuotes());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const showNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(''), 3000);
  };

  const handleRemoveCentre = (id: string) => {
    toggleSavedCentre(id);
    refreshData();
    showNotice('Workspace removed from saved items.');
  };

  const handleCancelBooking = (id: string) => {
    cancelBooking(id);
    refreshData();
    showNotice('Booking appointment marked as cancelled.');
  };

  const handleDeleteBooking = (id: string) => {
    deleteBooking(id);
    refreshData();
    showNotice('Booking record removed.');
  };

  const handleDeleteQuote = (id: string) => {
    deleteQuote(id);
    refreshData();
    showNotice('Quotation record removed.');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all your saved workspaces, bookings, and quotations from local storage?')) {
      clearAllUserData();
      refreshData();
      showNotice('All local storage data cleared.');
    }
  };

  const savedCentresList = CENTRES.filter((c) => savedCentreIds.includes(c.id));

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Client Session Portal
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              My Saved Workspaces & Appointments
            </h1>
            <p className="mt-2 text-sm text-neutral-400 max-w-xl leading-relaxed">
              Persisted in your browser’s secure localStorage. Review your shortlisted Grade-A centres, scheduled executive walkthroughs, and customized lease simulations.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs text-neutral-400 hover:text-rose-400 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Local Storage</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toast / Notice banner */}
        {actionNotice && (
          <div className="mb-6 p-3 bg-neutral-900 text-white text-xs flex items-center justify-between border border-neutral-800 animate-in fade-in duration-150">
            <span>{actionNotice}</span>
          </div>
        )}

        {/* Tab Buttons (Zero-pill segmented style) */}
        <div className="flex items-center gap-2 border-b border-neutral-200 pb-px mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('centres')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'centres'
                ? 'border-neutral-900 text-neutral-900 bg-white shadow-2xs'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Shortlisted Centres ({savedCentresList.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bookings')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'bookings'
                ? 'border-neutral-900 text-neutral-900 bg-white shadow-2xs'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Booked Tours ({bookings.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('quotes')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
              activeTab === 'quotes'
                ? 'border-neutral-900 text-neutral-900 bg-white shadow-2xs'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Saved Quotes ({quotes.length})</span>
          </button>
        </div>

        {/* Tab 1: Saved Centres */}
        {activeTab === 'centres' && (
          <div>
            {savedCentresList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedCentresList.map((centre) => (
                  <div key={centre.id} className="relative">
                    <CentreCard centre={centre} onBookmarkChange={refreshData} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-neutral-200 p-12 text-center max-w-md mx-auto space-y-4">
                <Bookmark className="w-10 h-10 text-neutral-300 mx-auto" />
                <h3 className="text-base font-serif font-bold text-neutral-900">
                  No Shortlisted Centres
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  You haven't bookmarked any centres yet. Explore our global network and click the bookmark icon on any card to save it here.
                </p>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
                >
                  <span>Explore Locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Booked Tours */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white border border-neutral-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 px-2 py-1">
                        {booking.id}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          booking.status === 'Confirmed'
                            ? 'text-emerald-700'
                            : 'text-neutral-500 line-through'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-neutral-900">
                      {booking.centreName} ({booking.city})
                    </h3>

                    <div className="text-xs text-neutral-500 flex flex-wrap items-center gap-3">
                      <span>{booking.workspaceType}</span>
                      <span>·</span>
                      <span>{booking.tourType === 'in_person' ? 'In-Person Tour' : '3D Virtual Walkthrough'}</span>
                      <span>·</span>
                      <span className="text-amber-800 font-semibold">{booking.date} at {booking.timeSlot}</span>
                      <span>·</span>
                      <span>Attendee: {booking.fullName} ({booking.company})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {booking.status === 'Confirmed' && (
                      <button
                        type="button"
                        onClick={() => handleCancelBooking(booking.id)}
                        className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:bg-neutral-50 transition-colors"
                      >
                        Cancel Tour
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteBooking(booking.id)}
                      className="p-2 text-neutral-400 hover:text-rose-600 transition-colors"
                      title="Delete Record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-neutral-200 p-12 text-center max-w-md mx-auto space-y-4">
                <Calendar className="w-10 h-10 text-neutral-300 mx-auto" />
                <h3 className="text-base font-serif font-bold text-neutral-900">
                  No Scheduled Appointments
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Book an in-person or 3D virtual walkthrough with our Centre Director.
                </p>
                <Link
                  to="/book-tour"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
                >
                  <span>Book a Tour Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Saved Quotes */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            {quotes.length > 0 ? (
              quotes.map((q) => (
                <div
                  key={q.id}
                  className="bg-white border border-neutral-200 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 px-2 py-1">
                        {q.id}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        Generated {new Date(q.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-neutral-900">
                      {q.centreName} ({q.city})
                    </h3>

                    <div className="text-xs text-neutral-600 flex flex-wrap items-center gap-2">
                      <span>{q.solutionName}</span>
                      <span>·</span>
                      <span>{q.teamSize} Desks</span>
                      <span>·</span>
                      <span>{q.termMonths} Months Term ({q.discountPercentage}% Savings applied)</span>
                    </div>

                    {q.addOns.length > 0 && (
                      <div className="text-[11px] text-neutral-500">
                        Add-ons: {q.addOns.join(', ')}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">Effective Monthly</div>
                      <div className="text-xl font-serif font-bold text-neutral-900 tabular-nums">
                        {q.currency} {q.netMonthlyRate.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Total {q.currency} {q.totalContractValue.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to={`/book-tour?centreId=${q.centreId}&solution=${q.solutionSlug}`}
                        className="px-4 py-2 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        Book Tour
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDeleteQuote(q.id)}
                        className="p-2 text-neutral-400 hover:text-rose-600 transition-colors"
                        title="Delete Quote"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-neutral-200 p-12 text-center max-w-md mx-auto space-y-4">
                <Calculator className="w-10 h-10 text-neutral-300 mx-auto" />
                <h3 className="text-base font-serif font-bold text-neutral-900">
                  No Saved Quotations
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Configure a custom workspace scenario using our interactive calculator and click "Save Quote to My Account" to preserve it here.
                </p>
                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800"
                >
                  <span>Launch Quote Estimator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
