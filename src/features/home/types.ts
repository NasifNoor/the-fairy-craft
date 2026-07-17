export interface HomeHeroItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  imageAlt: string;
}

export type HomeHeroData = HomeHeroItem[];

export interface HomeCategory {
  name: string;
  description: string;
}

export interface HomeProduct {
  title: string;
  price: string;
  image: string;
  description: string;
}

export interface HomeReason {
  title: string;
  description: string;
}

export interface HomeGalleryItem {
  title: string;
  image: string;
}

export interface HomeTestimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface HomeCtaData {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface HomeCustomFurnitureData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  steps: Array<{ title: string; description: string }>;
  ctaLabel: string;
}

export interface HomeContactData {
  title: string;
  description: string;
  email: string;
  customDesign: { title: string; description: string; items: string[] };
}
