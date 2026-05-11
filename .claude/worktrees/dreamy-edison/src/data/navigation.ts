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
      { label: 'Wine Basics', href: '/wine-basics/', description: 'The stuff you wish someone had told you sooner' },
      { label: 'Types of Wine', href: '/types-of-wine/', description: 'Red, white, rosé, sparkling: what makes each tick' },
      { label: 'Grape Varieties', href: '/grapes/', description: 'Know your grapes, pick better bottles' },
      { label: 'Wine Regions', href: '/regions/', description: 'Where it\'s from changes how it tastes' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'Food & Wine Pairing', href: '/food-wine-pairing/', description: 'What to drink with what you\'re eating' },
      { label: 'Pairing Guides', href: '/pairing/', description: 'Specific combos that actually work' },
    ],
  },
  {
    label: 'Reviews',
    items: [
      { label: 'Best Wines', href: '/best-wines/', description: 'Bottles we\'d actually spend our own money on' },
      { label: 'Wine Tools', href: '/wine-tools/', description: 'The gear that\'s worth it (and what\'s not)' },
      { label: 'Comparisons', href: '/compare/', description: 'Head-to-head so you don\'t have to guess' },
      { label: 'Gift Guides', href: '/gift-guides/', description: 'Gifts that don\'t end up in the re-gift pile' },
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
