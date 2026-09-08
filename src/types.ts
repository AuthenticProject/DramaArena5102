export interface ShowCategoryData {
  id: string;
  number: string;
  category: string;
  title: string;
  items: string[];
  img: string;
  duration?: string;
  performers?: string;
  desc?: string;
}

export interface CommitteeGroup {
  role: string;
  names: string[];
}

export interface BudgetItem {
  no: number;
  section: string;
  amount: string;
  raw?: number;
}

export interface SponsorTier {
  tier: string;
  pct: string;
  amount?: string;
  nominal?: string;
  desc?: string;
  perks?: string[];
  benefits?: string[];
  popular?: boolean;
  badge?: string;
}

export interface Campus3DPin {
  id: string;
  code: string;
  region: string;
  name: string;
  location: string;
  dist: string;
  x: number;
  y: number;
  z: number;
  isPusat?: boolean;
}
