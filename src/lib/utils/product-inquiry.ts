import type { Product } from "@/data/products";
import { site } from "@/data/site";

export function generateProductInquiryMessage(product: Product): string {
  const currentUrl =
    typeof window !== "undefined" && typeof window.location?.href === "string"
      ? window.location.href
      : "";

  const message = [
    "Hello,",
    "",
    "I'm interested in the following product:",
    "",
    `Product: ${product.name}`,
    "",
    "Link:",
    currentUrl,
    "",
    "Could you please share the latest price, availability, delivery information, and any customization options?",
    "",
    "Thank you.",
  ].join("\n");

  return encodeURIComponent(message);
}

export function generateProductPriceInquiryMessage(product: Product): string {
  const currentUrl =
    typeof window !== "undefined" && typeof window.location?.href === "string"
      ? window.location.href
      : "";

  const message = [
    "Hello,",
    "",
    "I'm interested in the following product:",
    "",
    `Product: ${product.name}`,
    "",
    "Link:",
    currentUrl + "/" + product.slug,
    "",
    "Could you please share the latest price?",
    "",
    "Thank you.",
  ].join("\n");

  return encodeURIComponent(message);
}

export function buildProductInquiryWhatsAppLink(product: Product): string {
  return `https://wa.me/${site.contact.phone}?text=${generateProductInquiryMessage(product)}`;
}

export function buildProductPriceInquiryWhatsAppLink(product: Product): string {
  return `https://wa.me/${site.contact.phone}?text=${generateProductPriceInquiryMessage(product)}`;
}
