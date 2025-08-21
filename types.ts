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

export interface Module {
  id: number;
  status: string;
  modulename: string;
  modulepro: boolean;
  moduleinfo: string;
  moduleprice: number;
}