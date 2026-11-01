export interface Centre {
  id: string;
  slug: string;
  name: string;
  building: string;
  city: string;
  country: string;
  region: 'Asia Pacific' | 'Middle East' | 'Europe';
  address: string;
  landmark: string;
  transit: string;
  floorLevels: string;
  image: string;
  startingPrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  description: string;
  highlights: string[];
  amenities: string[];
  workspaceTypesOffered: ('private_office' | 'coworking' | 'meeting_room' | 'virtual_office' | 'enterprise')[];
  specs: {
    totalAreaSqFt: string;
    maxDeskCapacity: number;
    meetingRoomsCount: number;
    certifications: string[];
  };
}

export const CENTRES: Centre[] = [
  {
    id: 'c-sg-roq',
    slug: 'one-raffles-quay-singapore',
    name: 'One Raffles Quay',
    building: 'One Raffles Quay North Tower, Level 25 & 49',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia Pacific',
    address: '1 Raffles Quay, North Tower, Singapore 048583',
    landmark: 'Directly above Raffles Place & Downtown MRT',
    transit: '2 min walk to Raffles Place MRT (EW14/NS26), direct underground link',
    floorLevels: 'Levels 25 & 49 (Penthouse Lounge)',
    image: '/src/assets/images/hero_executive_office_1793511547075.jpg',
    startingPrice: 1150,
    currency: 'SGD',
    rating: 4.9,
    reviewCount: 148,
    tagline: 'The Preeminent Address at Marina Bay',
    description: 'Located in the epicentre of Singapore’s financial district, One Raffles Quay provides iconic panoramic views over Marina Bay and the South China Sea. Built with triple-glazed acoustic glass, private executive dining suites, and a dedicated barista lounge, this flagship centre is home to premier global investment banks and technology leaders.',
    highlights: [
      'Dual-floor presence featuring high-floor Marina Bay skyline views',
      'Ergonomic Herman Miller Aeron seating throughout all private suites',
      'Enterprise-grade CISCO dual-redundant 1Gbps fiber connectivity',
      'Dedicated on-site barista and concierge hospitality team'
    ],
    amenities: [
      '24/7 Secure Access',
      'On-site Barista Cafe',
      'Acoustic Phone Booths',
      'Mother’s Nursing Room',
      'Shower & Wellness Suites',
      'Boardrooms with Cisco AV',
      'Daily Postal Concierge',
      'Underground MRT Link'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '38,500 sq ft',
      maxDeskCapacity: 450,
      meetingRoomsCount: 8,
      certifications: ['BCA Green Mark Platinum', 'ISO 27001 Certified IT', 'WELL Building Standard Health-Safety']
    }
  },
  {
    id: 'c-tyo-rh',
    slug: 'roppongi-hills-tokyo',
    name: 'Roppongi Hills Mori Tower',
    building: 'Mori Tower, Level 16 & 17',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia Pacific',
    address: '6-10-1 Roppongi, Minato-ku, Tokyo 106-6116',
    landmark: 'Direct connection to Roppongi Station (Hibiya & Oedo Lines)',
    transit: 'Direct underground access from Roppongi Station Exit 1C',
    floorLevels: 'Levels 16 & 17',
    image: '/src/assets/images/coworking_executive_lounge_1793511546311.jpg',
    startingPrice: 135000,
    currency: 'JPY',
    rating: 4.9,
    reviewCount: 182,
    tagline: 'Tokyo’s Premier Cultural and Commercial Epicentre',
    description: 'Standing as one of Tokyo’s most iconic modern towers, Roppongi Hills Mori Tower blends world-class corporate prestige with bespoke Japanese hospitality. Featuring timber and stone craftsmanship, soundproofed private office suites, and quiet executive lounges overlooking Tokyo Tower and Mt. Fuji.',
    highlights: [
      'Unrivalled prestige in Tokyo’s most recognized mixed-use skyscraper',
      'Bilingual executive receptionists proficient in Japanese and English',
      'Private acoustic-treated meeting suites with 4K interactive displays',
      'Immediate access to world-class dining, luxury retail, and hotels'
    ],
    amenities: [
      '24/7 Secure Access',
      'Artisan Matcha & Barista Bar',
      'Acoustic Phone Booths',
      'Showers & Locker Rooms',
      'Executive Event Space',
      'Dual-Redundant IT Infrastructure',
      'Helipad Access (Building)',
      'Subway Concourse Connection'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '42,000 sq ft',
      maxDeskCapacity: 520,
      meetingRoomsCount: 10,
      certifications: ['CASBEE S-Rank', 'Disaster Resilience Level 5', 'ISO 27001 Certified']
    }
  },
  {
    id: 'c-hk-two-ifc',
    slug: 'two-ifc-hong-kong',
    name: 'Two International Finance Centre (Two IFC)',
    building: 'Two IFC, Level 19 & 20',
    city: 'Hong Kong',
    country: 'Hong Kong SAR',
    region: 'Asia Pacific',
    address: '8 Finance Street, Central, Hong Kong',
    landmark: 'Directly integrated with Airport Express & Central Station',
    transit: '1 min to Airport Express Hong Kong Station & Central MTR',
    floorLevels: 'Levels 19 & 20',
    image: '/src/assets/images/boardroom_meeting_suite_1793511547929.jpg',
    startingPrice: 12800,
    currency: 'HKD',
    rating: 5.0,
    reviewCount: 230,
    tagline: 'The Pinnacle of Asian Global Finance',
    description: 'Towering above Victoria Harbour, Two IFC is globally recognized as Hong Kong’s premier financial landmark. Our flagship suites deliver uncompromised harbor views, bespoke leather and walnut furnishings, private executive dining rooms, and high-frequency trading IT infrastructure.',
    highlights: [
      'The definitive financial address in the Asia-Pacific region',
      'Panoramic Victoria Harbour and Kowloon Peninsula vistas',
      'Zero-latency financial network tie-ins and dedicated server colocation',
      'Seamless covered access to Four Seasons Hotel and IFC Mall'
    ],
    amenities: [
      '24/7 Secure Access',
      'Executive Barista Lounge',
      'Acoustic Phone Booths',
      'Bespoke Boardrooms',
      'Private Dining Suite',
      'Showers & Grooming Amenities',
      'Dedicated IT Server Racks',
      'Airport Express Check-in'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '45,000 sq ft',
      maxDeskCapacity: 580,
      meetingRoomsCount: 12,
      certifications: ['BEAM Plus Platinum', 'LEED Platinum', 'ISO 9001 & 27001']
    }
  },
  {
    id: 'c-syd-barangaroo',
    slug: 'international-towers-barangaroo-sydney',
    name: 'International Towers 3, Barangaroo',
    building: 'Tower Three, Level 24',
    city: 'Sydney',
    country: 'Australia',
    region: 'Asia Pacific',
    address: '300 Barangaroo Avenue, Sydney NSW 2000',
    landmark: 'Adjacent to Barangaroo Ferry Wharf & Wynyard Walk',
    transit: '6 min underground walk to Wynyard Train Station, 2 min to Ferry',
    floorLevels: 'Level 24',
    image: '/src/assets/images/private_office_suite_1793511548871.jpg',
    startingPrice: 1250,
    currency: 'AUD',
    rating: 4.9,
    reviewCount: 115,
    tagline: 'Harbourside Innovation and Sustainable Architecture',
    description: 'Set within Sydney’s revolutionary waterfront financial precinct, Barangaroo Tower Three sets global standards for environmental performance and modern corporate luxury. Features sweeping views of Sydney Harbour, sun-drenched private office suites, and state-of-the-art end-of-trip facilities.',
    highlights: [
      '6 Star Green Star & WELL Certified Platinum flagship workspace',
      'Sweeping western views of Darling Harbour and Anzac Bridge',
      'Spacious outdoor terraces and waterfront executive dining on doorstep',
      'Designed with Australian hardwoods and custom acoustic installations'
    ],
    amenities: [
      '24/7 Secure Access',
      'Specialty Coffee Bar',
      'Acoustic Meeting Rooms',
      'End-of-Trip Bicycle & Shower Facility',
      'Mother’s Room',
      'High-Speed Wi-Fi 6 Network',
      'Waterfront Access',
      'Podcast Studio'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '28,000 sq ft',
      maxDeskCapacity: 340,
      meetingRoomsCount: 6,
      certifications: ['6 Star Green Star', 'WELL Platinum', 'Carbon Neutral Certified']
    }
  },
  {
    id: 'c-dxb-difc',
    slug: 'gate-district-difc-dubai',
    name: 'Gate District 4, DIFC',
    building: 'Gate Precinct Building 4, Level 5 & 6',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    address: 'Dubai International Financial Centre, Dubai, UAE',
    landmark: 'Adjacent to The Gate Building & DIFC Metro',
    transit: '5 min walk to Financial Centre Metro Station',
    floorLevels: 'Levels 5 & 6',
    image: '/src/assets/images/reception_concierge_desk_1793511549781.jpg',
    startingPrice: 3800,
    currency: 'AED',
    rating: 4.8,
    reviewCount: 94,
    tagline: 'The Gateway to Finance across the Middle East & Africa',
    description: 'Positioned right at the heart of Dubai International Financial Centre (DIFC), this centre offers immediate proximity to sovereign wealth funds, major international law firms, and fintech pioneers. Boasts opulent marble finishes, private Majlis meeting suites, and full compliance with DIFC commercial licensing.',
    highlights: [
      'Direct qualification for DIFC Commercial Trade Licences',
      'Bespoke executive boardroom with multilingual AV systems',
      'Private VIP lounge suites with premium refreshments',
      'Valet parking and direct bridge to Dubai fine dining destinations'
    ],
    amenities: [
      '24/7 Secure Access',
      'Private Majlis Suite',
      'Espresso & Tea Bar',
      'VIP Boardroom with Zoom Rooms',
      'Dedicated Server Racks',
      'DIFC Registry Assistance',
      'Valet Parking',
      'Concierge Courier Service'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '24,000 sq ft',
      maxDeskCapacity: 290,
      meetingRoomsCount: 5,
      certifications: ['LEED Gold', 'DIFC Green Certified', 'ISO 27001']
    }
  },
  {
    id: 'c-sel-centerfield',
    slug: 'centerfield-gangnam-seoul',
    name: 'Centerfield East Tower, Gangnam',
    building: 'Centerfield East Tower, Level 21',
    city: 'Seoul',
    country: 'South Korea',
    region: 'Asia Pacific',
    address: '231 Teheran-ro, Gangnam-gu, Seoul',
    landmark: 'Teheran-ro Tech Valley & Yeoksam Station',
    transit: '4 min walk from Yeoksam Station (Line 2)',
    floorLevels: 'Level 21',
    image: '/src/assets/images/hero_executive_office_1793511547075.jpg',
    startingPrice: 1100000,
    currency: 'KRW',
    rating: 4.9,
    reviewCount: 88,
    tagline: 'Gangnam’s Newest Landmark of Architectural Distinction',
    description: 'Situated on Teheran-ro, Seoul’s silicon valley and corporate artery, Centerfield is an architectural masterpiece housing Josun Palace Hotel and premier global tech giants. Our Level 21 executive suites provide uncompromised views across Gangnam and Namsan Seoul Tower.',
    highlights: [
      'State-of-the-art skyscraper built with advanced seismic and acoustic dampers',
      'Dual fiber broadband lines engineered for ultra-fast latency',
      'Bespoke wellness rooms and barista lounge serving specialty Korean roast',
      'Underground retail promenade with direct transit links'
    ],
    amenities: [
      '24/7 Secure Access',
      'Specialty Coffee & Tea Lounge',
      'Acoustic Phone Booths',
      'Mother’s Room',
      'Meeting Suites with 4K AV',
      'Hotel Concierge Integration',
      'Showers & Locker Rooms',
      'Underground Parking'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '26,500 sq ft',
      maxDeskCapacity: 310,
      meetingRoomsCount: 6,
      certifications: ['LEED Gold BD+C', 'WELL Building Standard Gold']
    }
  },
  {
    id: 'c-lon-cornhill',
    slug: 'one-cornhill-city-of-london',
    name: '1 Cornhill, City of London',
    building: '1 Cornhill, Level 3 & 4',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    address: '1 Cornhill, London EC3V 3ND, United Kingdom',
    landmark: 'Directly opposite Bank of England & Royal Exchange',
    transit: '30 seconds from Bank Underground Station (Central/Northern/Waterloo & City)',
    floorLevels: 'Levels 3 & 4',
    image: '/src/assets/images/boardroom_meeting_suite_1793511547929.jpg',
    startingPrice: 850,
    currency: 'GBP',
    rating: 4.9,
    reviewCount: 164,
    tagline: 'Heritage Splendour Facing the Bank of England',
    description: 'Occupying an iconic neo-classical Grade-II listed landmark at Bank junction, 1 Cornhill combines French Renaissance architectural majesty with cutting-edge executive workspace technology. Featuring domed ceilings, original ornate stone masonry, and high-speed enterprise infrastructure.',
    highlights: [
      'Directly opposite the Bank of England in the historic core of the City',
      'Bespoke interior design marrying heritage features with Herman Miller furniture',
      'Grand executive boardroom overlooking the Royal Exchange piazza',
      'Private club-style business lounge with barista bar'
    ],
    amenities: [
      '24/7 Secure Access',
      'Heritage Boardroom Suite',
      'Artisan Barista Lounge',
      'Showers & Bike Storage',
      'Acoustic Focus Booths',
      'Dedicated Server Space',
      'Direct Tube Station Proximity',
      'Daily Mail & Courier Management'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '22,000 sq ft',
      maxDeskCapacity: 260,
      meetingRoomsCount: 5,
      certifications: ['BREEAM Excellent', 'WiredScore Platinum']
    }
  },
  {
    id: 'c-bom-bkc',
    slug: 'maker-maxity-bkc-mumbai',
    name: 'Maker Maxity, Bandra Kurla Complex',
    building: 'Maker Maxity, 5 North Avenue, Level 4',
    city: 'Mumbai',
    country: 'India',
    region: 'Asia Pacific',
    address: 'Bandra Kurla Complex, Bandra East, Mumbai 400051',
    landmark: 'Near Mumbai International Airport connector & Trident Hotel',
    transit: '15 min drive to Mumbai Chhatrapati Shivaji Maharaj International Airport',
    floorLevels: 'Level 4',
    image: '/src/assets/images/coworking_executive_lounge_1793511546311.jpg',
    startingPrice: 32000,
    currency: 'INR',
    rating: 4.8,
    reviewCount: 106,
    tagline: 'The Epicentre of India’s Commercial Momentum',
    description: 'Situated within Maker Maxity, the crown jewel development of BKC, this centre serves Mumbai’s top multinational corporations, private equity funds, and international consulates. Designed with custom acoustic isolation, marble reception, and enterprise telecommunications.',
    highlights: [
      'Prime position at the gateway of Mumbai’s premier financial hub',
      'High-performance acoustic insulation providing calm sanctuary from the city',
      'Executive conference rooms equipped with interactive video conferencing',
      'Adjacent to Michelin-standard restaurants and five-star luxury hotels'
    ],
    amenities: [
      '24/7 Secure Access',
      'Artisan Chai & Coffee Bar',
      'Boardrooms with Polycom AV',
      'Acoustic Privacy Pods',
      'High-Speed Wi-Fi 6',
      'Valet & Visitor Parking',
      'Administrative Support',
      'Airport Concierge Booking'
    ],
    workspaceTypesOffered: ['private_office', 'coworking', 'meeting_room', 'virtual_office', 'enterprise'],
    specs: {
      totalAreaSqFt: '31,000 sq ft',
      maxDeskCapacity: 380,
      meetingRoomsCount: 7,
      certifications: ['IGBC Platinum', 'ISO 27001', 'ISO 9001']
    }
  }
];

export const ALL_CITIES = Array.from(new Set(CENTRES.map(c => c.city)));
export const ALL_REGIONS = Array.from(new Set(CENTRES.map(c => c.region)));
