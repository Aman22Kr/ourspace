export interface SavedBooking {
  id: string;
  centreId: string;
  centreName: string;
  city: string;
  workspaceType: string;
  tourType: 'in_person' | 'virtual';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  teamSize: number;
  notes?: string;
  createdAt: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface SavedQuote {
  id: string;
  createdAt: string;
  centreId: string;
  centreName: string;
  city: string;
  solutionSlug: string;
  solutionName: string;
  teamSize: number;
  termMonths: number;
  monthlyBasePrice: number;
  discountPercentage: number;
  addOns: string[];
  addOnsMonthlyTotal: number;
  netMonthlyRate: number;
  totalContractValue: number;
  currency: string;
}

const KEYS = {
  SAVED_CENTRES: 'ourspace_saved_centres_v1',
  BOOKINGS: 'ourspace_bookings_v1',
  QUOTES: 'ourspace_quotes_v1',
  RECENTLY_VIEWED: 'ourspace_recently_viewed_v1',
  CURRENCY: 'ourspace_currency_pref_v1',
  NOTIFICATIONS_DISMISSED: 'ourspace_dismissed_v1',
};

// Safe wrapper for localStorage access
function safeGet<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (err) {
    console.warn(`Could not read ${key} from localStorage:`, err);
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Could not save ${key} to localStorage:`, err);
  }
}

// Saved Centres
export function getSavedCentres(): string[] {
  return safeGet<string[]>(KEYS.SAVED_CENTRES, ['c-sg-roq', 'c-tyo-rh']);
}

export function toggleSavedCentre(centreId: string): boolean {
  const current = getSavedCentres();
  const exists = current.includes(centreId);
  const updated = exists ? current.filter(id => id !== centreId) : [...current, centreId];
  safeSet(KEYS.SAVED_CENTRES, updated);
  return !exists;
}

export function isCentreSaved(centreId: string): boolean {
  return getSavedCentres().includes(centreId);
}

// Bookings
export function getBookings(): SavedBooking[] {
  return safeGet<SavedBooking[]>(KEYS.BOOKINGS, [
    {
      id: 'BK-78921',
      centreId: 'c-sg-roq',
      centreName: 'One Raffles Quay',
      city: 'Singapore',
      workspaceType: 'Private Office Suite',
      tourType: 'in_person',
      date: '2026-11-06',
      timeSlot: '10:30 AM',
      fullName: 'Aman Kumar',
      email: 'aman@enterprise-holdings.com',
      phone: '+65 9123 4567',
      company: 'Aman Tech Global',
      teamSize: 12,
      createdAt: '2026-10-31T20:00:00Z',
      status: 'Confirmed'
    }
  ]);
}

export function addBooking(booking: Omit<SavedBooking, 'id' | 'createdAt' | 'status'>): SavedBooking {
  const all = getBookings();
  const newBooking: SavedBooking = {
    ...booking,
    id: `BK-${Math.floor(10000 + Math.random() * 90000)}`,
    createdAt: new Date().toISOString(),
    status: 'Confirmed'
  };
  safeSet(KEYS.BOOKINGS, [newBooking, ...all]);
  return newBooking;
}

export function cancelBooking(id: string): void {
  const all = getBookings();
  const updated = all.map(b => b.id === id ? { ...b, status: 'Cancelled' as const } : b);
  safeSet(KEYS.BOOKINGS, updated);
}

export function deleteBooking(id: string): void {
  const all = getBookings();
  const updated = all.filter(b => b.id !== id);
  safeSet(KEYS.BOOKINGS, updated);
}

// Saved Quotes
export function getQuotes(): SavedQuote[] {
  return safeGet<SavedQuote[]>(KEYS.QUOTES, [
    {
      id: 'QT-45012',
      createdAt: '2026-10-30T14:15:00Z',
      centreId: 'c-sg-roq',
      centreName: 'One Raffles Quay',
      city: 'Singapore',
      solutionSlug: 'private-offices',
      solutionName: 'Private Office Suite',
      teamSize: 8,
      termMonths: 12,
      monthlyBasePrice: 1150 * 8,
      discountPercentage: 15,
      addOns: ['Unlimited Artisan Barista Pass', 'Dedicated Server Rack Space'],
      addOnsMonthlyTotal: 580,
      netMonthlyRate: 8400,
      totalContractValue: 100800,
      currency: 'SGD'
    }
  ]);
}

export function saveQuote(quote: Omit<SavedQuote, 'id' | 'createdAt'>): SavedQuote {
  const all = getQuotes();
  const newQuote: SavedQuote = {
    ...quote,
    id: `QT-${Math.floor(10000 + Math.random() * 90000)}`,
    createdAt: new Date().toISOString()
  };
  safeSet(KEYS.QUOTES, [newQuote, ...all]);
  return newQuote;
}

export function deleteQuote(id: string): void {
  const all = getQuotes();
  safeSet(KEYS.QUOTES, all.filter(q => q.id !== id));
}

// Recently viewed centres
export function getRecentlyViewed(): string[] {
  return safeGet<string[]>(KEYS.RECENTLY_VIEWED, []);
}

export function recordRecentlyViewed(centreId: string): void {
  const current = getRecentlyViewed();
  const filtered = current.filter(id => id !== centreId);
  const updated = [centreId, ...filtered].slice(0, 8);
  safeSet(KEYS.RECENTLY_VIEWED, updated);
}

// Currency preference
export function getCurrencyPref(): string {
  try {
    return localStorage.getItem(KEYS.CURRENCY) || 'USD';
  } catch {
    return 'USD';
  }
}

export function setCurrencyPref(curr: string): void {
  try {
    localStorage.setItem(KEYS.CURRENCY, curr);
  } catch (e) {
    console.warn(e);
  }
}

// Reset all client state
export function clearAllUserData(): void {
  try {
    Object.values(KEYS).forEach(k => localStorage.removeItem(k));
  } catch (e) {
    console.warn(e);
  }
}
