export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  metric: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Arthur Pendelton',
    role: 'Managing Partner, Asia Equities',
    company: 'St. James Capital Partners',
    industry: 'Private Equity & Asset Management',
    location: 'Two IFC, Hong Kong',
    metric: '40% CapEx Saved',
    quote: 'ourspace gave our 24-member investment committee an uncompromised institutional presence at Two IFC in 48 hours. The acoustic privacy in our boardroom and the discreet five-star concierge team rival the finest private member clubs in London and Hong Kong.'
  },
  {
    id: 't-2',
    author: 'Reiko Takahashi',
    role: 'Vice President of Operations, APAC',
    company: 'Novartis Healthcare Solutions',
    industry: 'Pharmaceuticals & Biotechnology',
    location: 'Roppongi Hills Mori Tower, Tokyo',
    metric: '99.9% IT Uptime Across 3 Years',
    quote: 'Expanding into Japan required strict data security and prestigious reception for our clinical advisory board. The Roppongi Hills suites delivered certified ISO 27001 server connectivity and flawless bilingual reception that made an immediate impression on our enterprise partners.'
  },
  {
    id: 't-3',
    author: 'David Sterling',
    role: 'Head of Global Real Estate',
    company: 'Finovate Core Technologies',
    industry: 'FinTech & Digital Banking',
    location: 'One Raffles Quay, Singapore',
    metric: 'Scaled from 6 to 48 Desks Seamlessly',
    quote: 'We avoided a 5-year lock-in lease and $1.2M in capital fit-out costs. When our regional engineering team tripled over six months, ourspace expanded our private wing on the 25th floor without disrupting our live trading operations.'
  }
];
