import * as React from "react";

import { PageLayout } from "../../components/layout/page-layout";
import { CategoriesSection } from "./components/categories-section";
import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { FeaturedProductsSection } from "./components/featured-products-section";
import { GallerySection } from "./components/gallery-section";
import { HeroSection } from "./components/hero-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { WhyChooseUsSection } from "./components/why-choose-us-section";
import { CustomFurnitureSection } from "./components/custom-furniture-section";
import {
  getHomeCategories,
  getHomeContact,
  getHomeFaq,
  getHomeGallery,
  getHomeHero,
  getHomeFeaturedProducts,
  getHomeReasons,
  getHomeTestimonials,
  getHomeNewProducts,
  getHomeCustomFurniture,
} from "./service";
import { NewdProductsSection } from "./components/new-products-section";

export function HomePage() {
  const hero = getHomeHero();
  const categories = getHomeCategories();
  const products = getHomeFeaturedProducts();
  const newProducts = getHomeNewProducts();
  const reasons = getHomeReasons();
  const customFurniture = getHomeCustomFurniture();
  const gallery = getHomeGallery();
  const testimonials = getHomeTestimonials();
  const faqItems = getHomeFaq();
  const contact = getHomeContact();

  return (
    <PageLayout>
      <HeroSection data={hero} />
      <NewdProductsSection products={newProducts} />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={products} />
      <WhyChooseUsSection reasons={reasons} />
      <CustomFurnitureSection data={customFurniture} />
      <GallerySection items={gallery} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection items={faqItems} />
      <ContactSection data={contact} />
    </PageLayout>
  );
}
