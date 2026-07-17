import { Product, products } from "@/data/products";
import {
  HomeCategory,
  HomeContactData,
  HomeCtaData,
  HomeFaqItem,
  HomeGalleryItem,
  HomeHeroData,
  HomeProduct,
  HomeReason,
  HomeTestimonial,
} from "./types";

import {
  homeCategories,
  homeContact,
  homeFaq,
  homeGallery,
  homeHero,
  homeFeaturedProducts,
  homeReasons,
  homeTestimonials,
  homeNewArrivalProducts,
} from "@/data/dummy/home";

export function getHomeHero(): HomeHeroData {
  return homeHero;
}

export function getHomeCategories(): HomeCategory[] {
  return homeCategories;
}

export function getHomeFeaturedProducts(): Product[] {
  return products.filter((item) => item.badge === "Featured");
}

export function getHomeNewProducts(): Product[] {
  return products.filter((item) => item.badge === "New");
}

export function getHomeReasons(): HomeReason[] {
  return homeReasons;
}

export function getHomeGallery(): HomeGalleryItem[] {
  return homeGallery;
}

export function getHomeTestimonials(): HomeTestimonial[] {
  return homeTestimonials;
}

export function getHomeFaq(): HomeFaqItem[] {
  return homeFaq;
}

export function getHomeContact(): HomeContactData {
  return homeContact;
}
