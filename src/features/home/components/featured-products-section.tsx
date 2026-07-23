"use client";

import { motion } from "framer-motion";

import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeProduct } from "../types";
import Image from "next/image";
import { site } from "@/data/site";
import { localizeProduct, Product } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";

export interface FeaturedProductsSectionProps {
  products: Product[];
}

export function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  const t = useTranslations();
  const locale = useLocale() as "en" | "bn";
  const formatPrice = (value: number) =>
    `৳ ${new Intl.NumberFormat(locale === "en" ? "en-US" : "bn-BD", {
      maximumFractionDigits: 0,
    }).format(value)}`;

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
              {t("home.featuredProducts.eyebrow")}
            </p>
            <Heading as="h2">{t("home.featuredProducts.heading")}</Heading>
            <p className="text-base leading-7 text-[var(--color-text-muted)]">
              {t("home.featuredProducts.subtitle")}
            </p>
          </div>
          <a
            href="/products"
            className="text-sm font-medium text-[var(--color-primary-700)] hover:underline"
          >
            {t("common.viewCollection")}
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            product = localizeProduct(product, locale);
            return (
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
                    <Badge variant="accent">{t("common.spotlightPiece")}</Badge>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                      {product.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-[var(--color-primary-700)]">
                      {formatPrice(product.price)}
                    </span>
                    <a
                      href={`/products/${product.slug}`}
                      className="text-sm font-medium text-[var(--color-primary-700)] hover:underline"
                    >
                      {t("common.viewDetails")}
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
