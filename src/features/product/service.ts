import { categories } from "@/data/categories";
import { Product, products } from "@/data/products";

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "all") {
    return products;
  }

  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) {
    return [];
  }

  return products
    .filter((item) => item.category === product.category && item.slug !== slug)
    .slice(0, 3);
}

export function getProductCategories() {
  return categories;
}
