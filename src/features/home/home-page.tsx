"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

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
import { getHomeFeaturedProducts, getHomeNewProducts } from "./service";
import type { HomeCategory, HomeContactData, HomeCustomFurnitureData, HomeFaqItem, HomeGalleryItem, HomeHeroData, HomeReason, HomeTestimonial } from "./types";
import { NewdProductsSection } from "./components/new-products-section";

export function HomePage() {
  const t = useTranslations();
  const hero = t.raw("home.hero") as HomeHeroData;
  const categories = t.raw("home.categories") as HomeCategory[];
  const products = getHomeFeaturedProducts();
  const newProducts = getHomeNewProducts();
  const reasons = t.raw("home.reasons") as HomeReason[];
  const customFurniture = t.raw("home.custom") as HomeCustomFurnitureData;
  const gallery = t.raw("home.gallery") as HomeGalleryItem[];
  const testimonials = t.raw("home.testimonials") as HomeTestimonial[];
  const faqItems = t.raw("home.faq") as HomeFaqItem[];
  const contact: HomeContactData = {
    title: t("contact.title"), description: t("contact.description"), email: "hello@thefairycraft.com",
    customDesign: { title: t("contact.ownDesign"), description: t("contact.ownDesignDescription"), items: [t("contact.referenceImage"), t("contact.pinterestLink"), t("contact.sketch"), t("contact.measurements")] },
  };

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
