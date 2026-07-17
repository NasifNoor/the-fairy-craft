"use client";

import { motion } from "framer-motion";

import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import Image from "next/image";
import { site } from "@/data/site";
import { Product } from "@/data/products";
import { buildProductPriceInquiryWhatsAppLink } from "@/lib/utils/product-inquiry";
import { LiaWhatsapp } from "react-icons/lia";

export interface NewProductsSectionProps {
  products: Product[];
}

export function NewdProductsSection({ products }: NewProductsSectionProps) {
  return (
    <section className="border-y border-[var(--color-border)] py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
              {site.home.newProducts.eyebrow}
            </p>
            <Heading as="h2">{site.home.newProducts.heading}</Heading>
          </div>
          <a
            href="/products"
            className="text-sm font-medium text-[var(--color-primary-700)] hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card padding="lg" className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="relative aspect-[4/3] rounded-xl bg-[var(--color-surface-muted)] overflow-hidden"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </motion.div>
                <div className="space-y-2">
                  <Badge variant="accent">New Arrival</Badge>
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                    {product.shortDescription}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  {/* <span className="text-lg font-semibold text-[var(--color-primary-700)]">
                    ৳{product.price}
                  </span> */}
                  <span
                    className="flex align-center gap-1 rounded-sm py-1 px-2 cursor-pointer text-sm font-semibold text-white transition-colors bg-emerald-700 hover:bg-emerald-900 "
                    onClick={() => {
                      window.open(
                        buildProductPriceInquiryWhatsAppLink(
                          product,
                          "products/",
                        ),
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }}
                  >
                    <LiaWhatsapp size={22} />
                    <span>Ask for price</span>
                  </span>
                  <a
                    href={`/products/${product.slug}`}
                    className="text-sm font-medium text-[var(--color-primary-700)] hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
