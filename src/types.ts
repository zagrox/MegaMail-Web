export type Theme = 'light' | 'dark';

export interface NavLink {
  label: string;
  path: string;
}

export interface PricingPackage {
  id: number;
  status: string;
  packname: string;
  packsize: number;
  packprice: number;
  packrate: number;
}