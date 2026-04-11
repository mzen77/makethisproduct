export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Concept {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  approvalPercent: number;
  totalVotes: number;
  postedDate: string;
  isFeatured?: boolean;
  specs?: TechnicalSpec[];
  howItWorks?: string;
  theProblem?: string;
  theConcept?: string;
  galleryImages?: string[];
  video?: string;
}

export interface Category {
  name: string;
  slug: string;
  conceptCount: number;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
