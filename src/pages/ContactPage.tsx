import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';

export const ContactPage: React.FC = () => {
  const [department, setDepartment] = useState<string>('Leasing & Workspace Advisory');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid corporate email is required.';
    if (!message.trim()) newErrors.message = 'Inquiry message cannot be empty.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('ourspace_contact_inquiries_v1') || '[]');
      const newInquiry = {
        id: `INQ-${Math.floor(10000 + Math.random() * 90000)}`,
        department,
        fullName,
        email,
        phone,
        company,
        message,
        date: new Date().toISOString()
      };
      localStorage.setItem('ourspace_contact_inquiries_v1', JSON.stringify([newInquiry, ...existing]));
    } catch {
      // silent
    }
  };

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-neutral-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Global Headquarters & Concierge
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Connect with ourspace
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Whether you require immediate private suite availability, multi-city enterprise lease terms, or bespoke boardroom catering, our executive team is at your disposal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-neutral-200">
              {submitted ? (
                <div className="space-y-6 text-center py-8">
                  <CheckCircle className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h2 className="text-2xl font-serif font-bold text-neutral-900">
                    Inquiry Received
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your inquiry has been routed to our <strong>{department}</strong> team. An executive director will contact you within two business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Routing Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                    >
                      <option value="Leasing & Workspace Advisory">Leasing & Private Suite Availability</option>
                      <option value="Enterprise & Headquarters Buildouts">Enterprise & Multi-Floor Solutions</option>
                      <option value="Meeting Rooms & Event Catering">Meeting Rooms & Event Bookings</option>
                      <option value="Media, Press & Real Estate Partnerships">Media & Landlord Partnerships</option>
                      <option value="Member Concierge Support">Existing Member Concierge Services</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Julian Vance"
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
                        placeholder="e.g. j.vance@fund.com"
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                      />
                      {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +65 6823 8888"
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. St. James Capital"
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Inquiry Details & Target Cities *
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your team size, target move-in timeline, preferred cities, or special IT requirements..."
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 focus:outline-none focus:border-neutral-400"
                    />
                    {errors.message && <p className="text-rose-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      Encrypted Client Submission
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-neutral-900 hover:bg-amber-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Dispatch Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Global Key Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <h2 className="text-lg font-serif font-bold text-neutral-900">
                Global Headquarters
              </h2>
              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-neutral-900">ourspace Global Holdings Ltd.</div>
                    <div>One Raffles Quay, North Tower, Level 25</div>
                    <div>Singapore 048583</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>General Concierge: +65 6823 8888</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>advisory@ourspace-executive.com</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>Concierge Desks Open Mon - Fri, 08:30 - 18:30 (Local Time)</span>
                </div>
              </div>
            </div>

            {/* Regional Hubs */}
            <div className="bg-white p-6 sm:p-8 border border-neutral-200 space-y-4">
              <h2 className="text-lg font-serif font-bold text-neutral-900">
                Key Regional Hubs
              </h2>
              <div className="space-y-3 text-xs text-neutral-700 divide-y divide-neutral-100">
                <div className="pt-2">
                  <strong className="text-neutral-900">Tokyo & North Asia:</strong>
                  <div className="text-neutral-500">Roppongi Hills Mori Tower, Level 16, Tokyo · +81 3 6406 5000</div>
                </div>
                <div className="pt-2">
                  <strong className="text-neutral-900">Hong Kong & Greater China:</strong>
                  <div className="text-neutral-500">Two IFC, Level 19, 8 Finance St, Central · +852 2251 1888</div>
                </div>
                <div className="pt-2">
                  <strong className="text-neutral-900">Sydney & Australasia:</strong>
                  <div className="text-neutral-500">International Towers 3, Level 24, Barangaroo · +61 2 8249 1800</div>
                </div>
                <div className="pt-2">
                  <strong className="text-neutral-900">Dubai & Middle East:</strong>
                  <div className="text-neutral-500">DIFC Gate Precinct 4, Level 5, Dubai · +971 4 401 9000</div>
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
