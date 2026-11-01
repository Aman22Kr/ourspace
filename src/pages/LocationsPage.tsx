import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, RotateCcw, Building2, SlidersHorizontal } from 'lucide-react';
import { CENTRES, ALL_CITIES, ALL_REGIONS, Centre } from '../data/centres';
import { CentreCard } from '../components/CentreCard';
import { AdBanner } from '../components/AdBanner';

export const LocationsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCity = searchParams.get('city') || 'All';
  const initialQuery = searchParams.get('q') || '';
  const initialRegion = searchParams.get('region') || 'All';

  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [selectedRegion, setSelectedRegion] = useState<string>(initialRegion);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [workspaceFilter, setWorkspaceFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'rating'>('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState<boolean>(false);

  // Sync state when URL params change
  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam) setSelectedCity(cityParam);
    const qParam = searchParams.get('q');
    if (qParam !== null) setSearchQuery(qParam);
  }, [searchParams]);

  // Update URL params on state change
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    const newParams = new URLSearchParams(searchParams);
    if (city === 'All') newParams.delete('city');
    else newParams.set('city', city);
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSelectedCity('All');
    setSelectedRegion('All');
    setSearchQuery('');
    setWorkspaceFilter('All');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filtered & sorted results
  const filteredCentres = useMemo(() => {
    return CENTRES.filter((c: Centre) => {
      // City
      if (selectedCity !== 'All' && c.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }
      // Region
      if (selectedRegion !== 'All' && c.region !== selectedRegion) {
        return false;
      }
      // Workspace type
      if (workspaceFilter !== 'All') {
        const matchesWorkspace = c.workspaceTypesOffered.includes(workspaceFilter as any);
        if (!matchesWorkspace) return false;
      }
      // Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesCity = c.city.toLowerCase().includes(q);
        const matchesAddress = c.address.toLowerCase().includes(q);
        const matchesLandmark = c.landmark.toLowerCase().includes(q);
        if (!matchesName && !matchesCity && !matchesAddress && !matchesLandmark) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price_asc') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price_desc') return b.startingPrice - a.startingPrice;
      return 0; // featured default
    });
  }, [selectedCity, selectedRegion, workspaceFilter, searchQuery, sortBy]);

  return (
    <div className="w-full bg-neutral-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-neutral-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Global Footprint
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Executive Centres Directory
          </h1>
          <p className="mt-2 text-sm text-neutral-400 max-w-2xl leading-relaxed">
            Discover flexible private offices, meeting rooms, and business lounges located exclusively in Grade-A commercial landmarks across Asia Pacific, Europe, and the Middle East.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Bar */}
        <div className="bg-white border border-neutral-200 p-4 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="flex-1 relative flex items-center">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by centre name, city, landmark, or street..."
                aria-label="Search centres"
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400"
              />
            </div>

            {/* Quick City Dropdown */}
            <div className="w-full lg:w-48">
              <select
                value={selectedCity}
                onChange={(e) => handleCityChange(e.target.value)}
                aria-label="Filter by City"
                className="w-full py-2 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="All">All Cities ({CENTRES.length})</option>
                {ALL_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting */}
            <div className="w-full lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort by"
                className="w-full py-2 px-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Landmarks</option>
                <option value="rating">Highest Rated</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>

            {/* Reset Filter Button */}
            {(selectedCity !== 'All' || selectedRegion !== 'All' || searchQuery || workspaceFilter !== 'All') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-200 bg-neutral-100 transition-colors whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Secondary Filter Buttons: Workspace Types & Regions */}
          <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Workspace Type Buttons */}
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-neutral-400 mr-1 font-medium">Type:</span>
              {[
                { label: 'All', value: 'All' },
                { label: 'Private Office', value: 'private_office' },
                { label: 'Coworking Lounge', value: 'coworking' },
                { label: 'Meeting Rooms', value: 'meeting_room' },
                { label: 'Virtual Office', value: 'virtual_office' },
                { label: 'Enterprise', value: 'enterprise' }
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setWorkspaceFilter(item.value)}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                    workspaceFilter === item.value
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1">
              <span className="text-neutral-400 mr-1 font-medium">Region:</span>
              {['All', ...ALL_REGIONS].map((reg) => (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                    selectedRegion === reg
                      ? 'bg-amber-800 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter Bar (Zero-pill text) */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500">
          <div>
            Showing <span className="font-semibold text-neutral-900">{filteredCentres.length}</span> executive centres
            {selectedCity !== 'All' && <span> in <strong className="text-neutral-800">{selectedCity}</strong></span>}
          </div>
          <div className="flex items-center gap-3">
            <span>Direct Lease · Zero Commission</span>
            <span>·</span>
            <span>Grade-A Certified</span>
          </div>
        </div>

        {/* Centres Grid */}
        {filteredCentres.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCentres.map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-neutral-200 p-12 text-center max-w-lg mx-auto my-12 space-y-4">
            <Building2 className="w-10 h-10 text-neutral-400 mx-auto stroke-[1.5]" />
            <h3 className="text-lg font-serif font-bold text-neutral-900">
              No Centres Found
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We couldn’t find an executive centre matching your specific query. Try clearing your search keyword or switching to another global city.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              <span>View All Locations</span>
            </button>
          </div>
        )}
      </div>

      {/* Compact Ad Banner */}
      <AdBanner />
    </div>
  );
};
