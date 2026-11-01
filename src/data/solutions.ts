export interface Solution {
  id: string;
  slug: string;
  title: string;
  headline: string;
  shortDesc: string;
  longDesc: string;
  idealFor: string;
  startingPriceNote: string;
  image: string;
  features: {
    title: string;
    description: string;
  }[];
  includedServices: string[];
  equipmentSpecs: {
    label: string;
    value: string;
  }[];
  caseScenario: {
    clientType: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'sol-private-office',
    slug: 'private-offices',
    title: 'Private Offices',
    headline: 'Bespoke Executive Suites Tailored for Discretion and Focus',
    shortDesc: 'Fully furnished, acoustically treated, private executive offices in premier Grade-A landmarks for teams of 1 to 50+ professionals.',
    longDesc: 'ourspace Private Offices provide complete privacy, turnkey flexibility, and distinguished corporate presence. Each suite is fitted with ergonomic Herman Miller Aeron task chairs, bespoke timber executive desks, acoustic double-glazed walls (STC 48 rating), and dedicated enterprise VLAN connectivity. Step outside your private suite into a five-star hospitality lounge staffed by our professional concierges.',
    idealFor: 'Investment management funds, multinational branch offices, elite law practices, technology startups, and executive leadership teams.',
    startingPriceNote: 'Flexible monthly or annual agreements from $850/desk/month depending on city',
    image: '/src/assets/images/private_office_suite_1793511548871.jpg',
    features: [
      {
        title: 'Acoustic Soundproofing (STC 48)',
        description: 'Engineered with slab-to-slab acoustic drywall and double-laminated glass partitions to safeguard confidential discussions and high-stakes calls.'
      },
      {
        title: 'Ergonomic Herman Miller Furnishings',
        description: 'Equipped with world-standard Herman Miller Aeron chairs, adjustable timber executive desks, and lockable storage credenzas.'
      },
      {
        title: 'Enterprise Dual-Redundant Connectivity',
        description: 'Dedicated private VLAN with 99.99% uptime SLA, hardware firewall segmentation, and on-site certified IT engineers.'
      },
      {
        title: 'Full Hospitality & Concierge Support',
        description: 'Dedicated centre receptionists greet your clients, manage mail and couriers, and serve complimentary barista espresso directly to your desk.'
      }
    ],
    includedServices: [
      '24/7 biometric or secure keycard access',
      'Daily professional housekeeping and sanitization',
      'High-speed enterprise Wi-Fi 6 & Ethernet drops',
      'Generous monthly meeting room credits included',
      'Unlimited artisan coffee, premium teas, and infused waters',
      'Prestigious CBD mailing address and courier handling',
      'Complimentary global access to ourspace business lounges',
      'Custom company doorplate signage and branding'
    ],
    equipmentSpecs: [
      { label: 'Acoustic Rating', value: 'STC 48 Laboratory Certified' },
      { label: 'Ergonomic Seating', value: 'Herman Miller Aeron Remastered' },
      { label: 'Network Infrastructure', value: 'Cisco Enterprise Dual 1Gbps' },
      { label: 'Access Control', value: 'Encrypted RFID & Biometric' },
      { label: 'HVAC Air Quality', value: 'MERV 14 Filtration + CO2 Sensors' }
    ],
    caseScenario: {
      clientType: 'Global Private Equity Fund (London / Singapore)',
      challenge: 'Needed a confidential 18-person regional headquarters operational within 7 days without long-term 5-year commercial lease commitments.',
      solution: 'ourspace delivered a customized contiguous private suite at One Raffles Quay with secure private comms rack and executive boardroom access.',
      outcome: 'Zero capital expenditure, 45% reduction in real estate lead time, and immediate five-star client reception.'
    }
  },
  {
    id: 'sol-coworking',
    slug: 'coworking',
    title: 'Coworking & Business Lounges',
    headline: 'High-Touch Collaborative Spaces with Five-Star Barista Hospitality',
    shortDesc: 'Flexible hot desks, dedicated workstations, and tranquil designer business lounges for mobile executives and hybrid leaders.',
    longDesc: 'Experience coworking elevated to five-star executive club standards. ourspace Coworking is free of frantic noise, plastic furniture, and distraction. Instead, discover calm library-quiet zones, handcrafted Italian leather armchairs, marble barista counters serving artisan roast coffee, and sound-dampened phone booths for undisturbed conversations.',
    idealFor: 'Traveling executives, regional directors, independent consultants, remote corporate squads, and boutique advisory founders.',
    startingPriceNote: 'Global Access Passes from $350/month; Dedicated Desks from $650/month',
    image: '/src/assets/images/coworking_executive_lounge_1793511546311.jpg',
    features: [
      {
        title: 'Global Passport Access',
        description: 'Work seamlessly from any of our 180+ executive centres across Tokyo, Singapore, Hong Kong, Sydney, Dubai, London, and beyond.'
      },
      {
        title: 'Artisan Barista Experience',
        description: 'Full-time trained on-site baristas crafting single-origin pour-overs, flat whites, and artisanal herbal infusions included daily.'
      },
      {
        title: 'Private Phone Booths & Focus Pods',
        description: 'Acoustically isolated single-occupancy booths equipped with ergonomic seating, ventilation, and power outlets for crystal-clear video calls.'
      },
      {
        title: 'Curated Professional Community',
        description: 'Connect with senior industry leaders, legal advisors, and enterprise executives through discreet roundtables and curated networking sessions.'
      }
    ],
    includedServices: [
      'Unrestricted business lounge access during operating hours',
      'Enterprise-grade encrypted guest Wi-Fi',
      'Fair-use printing, scanning, and shredding services',
      'Complimentary seasonal fruit, snacks, and infused refreshments',
      'Discounted member rates on boardroom and meeting room bookings',
      'Access to member portal app for space booking worldwide',
      'End-of-trip showers and towel service at select locations'
    ],
    equipmentSpecs: [
      { label: 'Lounge Capacity', value: 'Curated 60-person max to prevent crowding' },
      { label: 'Coffee Standards', value: 'La Marzocco Commercial Espresso Machines' },
      { label: 'Connectivity', value: 'Multi-SSID 802.11ax Wi-Fi 6 Enterprise' },
      { label: 'Workstations', value: 'Power + USB-C fast charging at every seat' }
    ],
    caseScenario: {
      clientType: 'Senior Strategy Consultant (Asia-Pacific)',
      challenge: 'Traveled weekly across Tokyo, Singapore, and Sydney requiring quiet, prestigious environments to prepare client briefings.',
      solution: 'ourspace Global Passport enabled instant check-in at Roppongi Hills, One Raffles Quay, and Barangaroo with consistent five-star service.',
      outcome: 'Eliminated wasted transit hours, guaranteed high-speed connectivity, and elevated professional brand image.'
    }
  },
  {
    id: 'sol-meeting-rooms',
    slug: 'meeting-rooms',
    title: 'Meeting & Boardrooms',
    headline: 'High-Impact Boardrooms with Broadcast-Grade AV',
    shortDesc: 'Executive meeting spaces, conference suites, and corporate boardrooms available on-demand by the hour or full day.',
    longDesc: 'From confidential mergers-and-acquisitions negotiations to hybrid multinational board assemblies, ourspace Meeting Rooms deliver seamless technical reliability and understated luxury. Boasting Cisco and Polycom dual-screen video conferencing, 4K high-brightness displays, acoustic wall panelling, and bespoke executive catering options.',
    idealFor: 'Board meetings, client pitches, arbitration proceedings, executive workshops, and shareholder presentations.',
    startingPriceNote: 'Hourly bookings from $80/hr; Day packages with catering available',
    image: '/src/assets/images/boardroom_meeting_suite_1793511547929.jpg',
    features: [
      {
        title: 'One-Touch Video Conferencing',
        description: 'Integrated Zoom Rooms, Microsoft Teams, and Cisco Webex hardware with beam-forming microphones that capture every voice with studio fidelity.'
      },
      {
        title: 'Bespoke Executive Catering',
        description: 'From light continental breakfast platters to five-star plated executive luncheons prepared by premier partner hotels.'
      },
      {
        title: 'Dedicated Meeting Butler Service',
        description: 'On-site technical support to configure presentation slides, audio tests, and continuous beverage replenishment during your session.'
      },
      {
        title: 'Privacy & Discretion Assured',
        description: 'Frosted acoustic switch-glass, soundproof doors, and non-disclosure-trained concierge hospitality.'
      }
    ],
    includedServices: [
      'Complimentary coffee, specialty tea, and still/sparkling water',
      'High-resolution presentation displays and wireless screen sharing',
      'Whiteboards, magnetic glassboards, and premium stationery',
      'High-speed secure guest Wi-Fi for all attendees',
      'Receptionist meet-and-greet for arriving visitors',
      'On-demand IT support technician on standby'
    ],
    equipmentSpecs: [
      { label: 'Displays', value: '85" 4K Commercial Displays & Interactive Panels' },
      { label: 'Audio Hardware', value: 'Ceiling Shure Microflex Advance Array' },
      { label: 'Video Cameras', value: '4K PTZ Camera with Auto-Speaker Framing' },
      { label: 'Acoustics', value: 'STC 50+ Specialized Sound Isolation' }
    ],
    caseScenario: {
      clientType: 'Cross-Border M&A Advisory Firm',
      challenge: 'Required a neutral, ultra-secure location for a 3-day multi-billion dollar acquisition closing involving 24 international principals.',
      solution: 'Booked the Grand Boardroom at Two IFC Hong Kong with dedicated AV technician, private dining room, and custom tea service.',
      outcome: 'Flawless hybrid negotiation, zero technical friction, and praise from both acquirer and seller boards.'
    }
  },
  {
    id: 'sol-virtual-office',
    slug: 'virtual-offices',
    title: 'Virtual Offices',
    headline: 'Establish Instant Corporate Authority in Prime CBDs',
    shortDesc: 'A prestigious business address, dedicated local telephone answering, and mail handling without the physical overhead.',
    longDesc: 'Project global credibility with an address in the world’s most sought-after commercial towers. ourspace Virtual Offices provide you with an elite corporate address for your company registration, business cards, and regulatory filings, backed by professional bilingual receptionists who answer calls in your company name.',
    idealFor: 'Companies expanding into new markets, international holding companies, remote firms seeking regulatory addresses, and solo directors.',
    startingPriceNote: 'Address packages from $120/month; Full Communications package from $280/month',
    image: '/src/assets/images/reception_concierge_desk_1793511549781.jpg',
    features: [
      {
        title: 'Prestigious Prime CBD Address',
        description: 'Use world-renowned landmarks like Two IFC Hong Kong, Roppongi Hills Tokyo, or DIFC Dubai for your official company collateral.'
      },
      {
        title: 'Dedicated Local Telephone Answering',
        description: 'A local dedicated phone number with calls answered in your company name by our trained receptionists, forwarded per your rules.'
      },
      {
        title: 'Mail Handling & Digital Scanning',
        description: 'Daily notification of incoming courier packages, optional scanning of letters, and secure forwarding anywhere in the world.'
      },
      {
        title: 'Included Meeting Room Credits',
        description: 'Complimentary monthly boardroom and business lounge hours when you need to meet clients in person.'
      }
    ],
    includedServices: [
      'Official business registration address licence',
      'Daily incoming mail & parcel receipt notifications',
      'Personalized greeting on call routing',
      'Digital mail scanning to secure client portal',
      'Monthly business lounge access passes',
      'Preferred member rates for global meeting room bookings'
    ],
    equipmentSpecs: [
      { label: 'Phone System', value: 'Cloud PBX with smartphone app routing' },
      { label: 'Mail Dispatch', value: 'Same-day digital notification & scanning' },
      { label: 'Licensing', value: 'Full compliance with local company registries' }
    ],
    caseScenario: {
      clientType: 'European SaaS Enterprise entering Japan',
      challenge: 'Needed an official corporate presence in Tokyo for ministry filings and enterprise sales credentials without upfront office leasing overhead.',
      solution: 'Enrolled in ourspace Virtual Office at Roppongi Hills Mori Tower with bilingual Japanese call reception.',
      outcome: 'Successfully incorporated Tokyo subsidiary within 3 weeks, passing strict enterprise vendor compliance checks.'
    }
  },
  {
    id: 'sol-enterprise',
    slug: 'enterprise',
    title: 'Enterprise Bespoke Solutions',
    headline: 'Tailored Headquarters & Custom Built Workplaces',
    shortDesc: 'Turn-key real estate solutions designed, built, and operated exclusively for large corporate organizations of 50 to 500+ employees.',
    longDesc: 'From dedicated full-floor office spaces to hybrid enterprise hubs, ourspace Enterprise Solutions merges the flexibility of managed office space with the custom identity of a bespoke corporate headquarters. We manage architectural planning, furniture procurement, dedicated IT security compliance, and ongoing daily facility operations.',
    idealFor: 'Fortune 500 regional divisions, rapid-growth scaleups, bank back-offices, and corporate restructuring initiatives.',
    startingPriceNote: 'Custom proposal based on floor area and bespoke architectural specifications',
    image: '/src/assets/images/hero_executive_office_1793511547075.jpg',
    features: [
      {
        title: 'Custom Brand & Layout Design',
        description: 'Incorporate your company’s unique branding, layout density, town hall spaces, and specific department zones.'
      },
      {
        title: 'Zero Capital Expenditure (CapEx)',
        description: 'All construction, interior design, AV fit-out, and premium furniture are bundled into a predictable monthly operational fee.'
      },
      {
        title: 'Dedicated High-Security Comms',
        description: 'Independent server rooms, biometric access control, isolated fiber links, and SOC 2 / ISO 27001 data compliance.'
      },
      {
        title: 'Turn-key Facility Management',
        description: 'Comprehensive day-to-day operations including concierge, engineering, HVAC optimization, cleaning, and hospitality.'
      }
    ],
    includedServices: [
      'Dedicated bespoke architectural space planning and 3D modeling',
      'Procurement of custom furniture and acoustic wall systems',
      'Full facility management and preventative maintenance',
      'Dedicated on-site operations manager',
      'Flexible 12 to 36 month lease terms with expansion options'
    ],
    equipmentSpecs: [
      { label: 'Project Lead Time', value: '6 to 10 weeks from sign-off to move-in' },
      { label: 'Capacity Range', value: '50 to 500+ dedicated desks' },
      { label: 'Compliance', value: 'ISO 27001, SOC 2 Type II, LEED / WELL' }
    ],
    caseScenario: {
      clientType: 'Global FinTech with 140 Regional Staff in Singapore',
      challenge: 'Rapidly outgrew previous workspace, needed 15,000 sq ft contiguous space with strict banking-grade cryptographic server room.',
      solution: 'ourspace designed and delivered a dedicated custom floor at Marina Bay Financial Centre within 8 weeks.',
      outcome: 'Saved $1.8M in upfront fit-out CapEx and reduced lease liability from 7 years to flexible 2-year rolling terms.'
    }
  }
];
