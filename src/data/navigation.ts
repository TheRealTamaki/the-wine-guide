export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'Learn',
    items: [
      { label: 'Wine Basics', href: '/wine-basics/', description: 'Start here if you\'re new to wine' },
      { label: 'Types of Wine', href: '/types-of-wine/', description: 'Red, white, rosé, sparkling, and more' },
      { label: 'Grape Varieties', href: '/grapes/', description: 'Deep dives on every major grape' },
      { label: 'Wine Regions', href: '/regions/', description: 'Terroir, climate, and regional styles' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'Food & Wine Pairing', href: '/food-wine-pairing/', description: 'The complete pairing guide' },
      { label: 'Pairing Guides', href: '/pairing/', description: 'Match wine to any dish or occasion' },
    ],
  },
  {
    label: 'Shop',
    items: [
      { label: 'Best Wines', href: '/best-wines/', description: 'Top picks by price, style, and occasion' },
      { label: 'Wine Tools', href: '/wine-tools/', description: 'Openers, decanters, glasses, and more' },
      { label: 'Comparisons', href: '/compare/', description: 'Side-by-side wine and product reviews' },
      { label: 'Gift Guides', href: '/gift-guides/', description: 'Curated gifts for every wine lover' },
    ],
  },
];

export const footerLinks: NavItem[] = [
  { label: 'Wine Basics', href: '/wine-basics/' },
  { label: 'Best Wines', href: '/best-wines/' },
  { label: 'Food Pairing', href: '/food-wine-pairing/' },
  { label: 'Grape Varieties', href: '/grapes/' },
  { label: 'Wine Regions', href: '/regions/' },
  { label: 'Wine Tools', href: '/wine-tools/' },
  { label: 'Gift Guides', href: '/gift-guides/' },
  { label: 'About', href: '/about/' },
  { label: 'Privacy Policy', href: '/privacy/' },
];
