import React from 'react';

export type Theme = 'light' | 'dark';

export interface NavLink {
  label: string;
  path: string;
  icon: React.FC<{ className?: string }>;
}

export interface PricingPackage {
  id: number;
  status: string;
  packname: string;
  packsize: number;
  packprice: number;
  packrate: number;
}

export interface BlogPost {
  id: number;
  status: string;
  date_created: string;
  date_updated: string;
  blogtitle: string;
  blogimage: string; // This is an ID
  blogcategory: string[];
  blogcontent: string;
  blogslug: string;
}