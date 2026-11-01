import React, { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, Video, UserCheck } from 'lucide-react';
import { CENTRES } from '../data/centres';
import { SOLUTIONS } from '../data/solutions';
import { addBooking, SavedBooking } from '../utils/storage';
import { AdBanner } from '../components/AdBanner';

export const BookTourPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paramCentreId = searchParams.get('centreId') || CENTRES[0].id;
  const paramSolution = searchParams.get('solution') || 'private-offices';

  const [selectedCentreId, setSelectedCentreId] = useState<string>(paramCentreId);
  const [selectedSolutionSlug, setSelectedSolutionSlug] = useState<string>(paramSolution);
  const [tourType, setTourType] = useState<'in_person' | 'virtual'>('in_person');
  const [selectedDate, setSelectedDate] = useState<string>('2026-11-06');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:30 AM');

  // Form Fields
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [teamSize, setTeamSize] = useState<number>(8);
  const [notes, setNotes] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<SavedBooking | null>(null);

  const selectedCentre = CENTRES.find((c) => c.id === selectedCentreId) || CENTRES[0];
  const selectedSolution = SOLUTIONS.find((s) => s.slug === selectedSolutionSlug) || SOLUTIONS[0];

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid corporate email is required.';
    if (!phone.trim()) newErrors.phone = 'Contact phone number is required.';
    if (!company.trim()) newErrors.company = 'Company name is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const booking = addBooking({
      centreId: selectedCentre.id,
      centreName: selectedCentre.name,
      city: selectedCentre.city,
      workspaceType: selectedSolution.title,
      tourType,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      fullName,
      email,
      phone,
      company,
      teamSize,
      notes
    });

    setSubmittedBooking(booking);
  };

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Private Executive Consultation
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Schedule a Private Viewing
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Experience our acoustic privacy, bespoke ergonomic fit-outs, and five-star barista hospitality first-hand with our Centre Director.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {submittedBooking ? (
          /* Confirmation Card */
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-emerald-700">
              <CheckCircle className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-serif font-bold text-neutral-900">
                  Appointment Confirmed
                </h2>
                <p className="text-xs text-neutral-500">
                  Booking Reference ID: <strong className="font-mono text-neutral-800">{submittedBooking.id}</strong>
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 border border-neutral-200 divide-y divide-neutral-200 text-xs space-y-3">
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-500">Centre:</span>
                <span className="font-semibold text-neutral-900">{submittedBooking.centreName} ({submittedBooking.city})</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-500">Format:</span>
                <span className="font-semibold text-neutral-900">
                  {submittedBooking.tourType === 'in_person' ? 'In-Person Guided Tour with Centre Director' : 'Virtual 3D Video Walkthrough'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-500">Scheduled Date & Time:</span>
                <span className="font-semibold text-amber-800">{submittedBooking.date} at {submittedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-500">Attendee:</span>
                <span className="font-semibold text-neutral-900">{submittedBooking.fullName} · {submittedBooking.company}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-500">Contact Email:</span>
                <span className="font-semibold text-neutral-900">{submittedBooking.email}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed">
              A formal calendar invite and security check-in pass have been recorded and saved to your client localStorage dashboard. Our Centre Director looks forward to welcoming you.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/saved"
                className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                View in My Bookings
              </Link>
              <button
                type="button"
                onClick={() => setSubmittedBooking(null)}
                className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-colors border border-neutral-200"
              >
                Schedule Another Viewing
              </button>
            </div>
          </div>
        ) : (
          /* Tour Booking Form */
          <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 p-8 sm:p-10 shadow-xs space-y-8">
            {/* Step 1: Centre & Solution */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                1. Select Location & Solution
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Executive Centre
                  </label>
                  <select
                    value={selectedCentreId}
                    onChange={(e) => setSelectedCentreId(e.target.value)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  >
                    {CENTRES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.city} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Workspace Interest
                  </label>
                  <select
                    value={selectedSolutionSlug}
                    onChange={(e) => setSelectedSolutionSlug(e.target.value)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  >
                    {SOLUTIONS.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Format selection: In Person vs Virtual */}
              <div className="pt-2">
                <label className="block text-xs font-medium text-neutral-700 mb-2">
                  Preferred Tour Format
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setTourType('in_person')}
                    className={`p-3 border flex items-center justify-center gap-2 transition-colors ${
                      tourType === 'in_person'
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <UserCheck className="w-4 h-4" />
                    <span className="font-medium">In-Person Viewing</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`p-3 border flex items-center justify-center gap-2 transition-colors ${
                      tourType === 'virtual'
                        ? 'bg-neutral-900 text-white border-neutral-900'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span className="font-medium">3D Virtual Tour</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Date & Slot Selection */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                2. Preferred Date & Time
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Date (Monday to Friday)
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min="2026-11-01"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Available Time Slot
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Contact & Company Details */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-2">
                3. Executive Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                  {errors.fullName && <p className="text-rose-500 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. e.vance@company.com"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                  {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +65 9123 4567"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                  {errors.phone && <p className="text-rose-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Strategic Partners"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                  {errors.company && <p className="text-rose-500 text-[11px] mt-1">{errors.company}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Estimated Headcount / Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide any specific timeline, security needs (dedicated comms rack), or suite orientation preferences..."
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Strict Non-Disclosure Protocol & Data Privacy</span>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Confirm Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
