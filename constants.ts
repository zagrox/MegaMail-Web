import type { NavLink } from './types';
import { HomeIcon, FeaturesIcon, ModulesIcon, PricingIcon } from './components/NavIcons';

export const NAV_LINKS: NavLink[] = [
  { label: 'مگامیل', path: '/', icon: HomeIcon },
  { label: 'ویژگی‌ها', path: '/features', icon: FeaturesIcon },
  { label: 'ماژول‌ها', path: '/modules', icon: ModulesIcon },
  { label: 'تعرفه‌ها', path: '/pricing', icon: PricingIcon },
];

export const CTA_URL = 'https://app.megamail.ir/?register';
export const LOGIN_URL = 'https://app.megamail.ir';