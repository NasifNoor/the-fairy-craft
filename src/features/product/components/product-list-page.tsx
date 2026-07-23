"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";
import { localizeProduct, Product } from "@/data/products";
import { site } from "@/data/site";
import { buildProductPriceInquiryWhatsAppLink } from "@/lib/utils/product-inquiry";
import { useLocale, useTranslations } from "next-intl";

interface ProductListPageProps {
  products: Product[];
  categories: { id: string; name: { en: string; bn: string } }[];
}

const sortOptions = [
  {
    value: "featured",
    label: {
      en: "Featured",
      bn: "বিশেষ পছন্দ",
    },
  },
  {
    value: "price-asc",
    label: {
      en: "Price: low to high",
      bn: "দাম: কম থেকে বেশি",
    },
  },
  {
    value: "price-desc",
    label: {
      en: "Price: high to low",
      bn: "দাম: বেশি থেকে কম",
    },
  },
  {
    value: "name-asc",
    label: {
      en: "Name: A–Z",
      bn: "নাম: এ থেকে জেড",
    },
  },
];

const PRODUCTS_PER_PAGE = 6;

export function ProductListPage({
  products,
  categories,
}: ProductListPageProps) {
  const t = useTranslations();
  const locale = useLocale() as "en" | "bn";
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [sort, setSort] = React.useState("featured");
  const [page, setPage] = React.useState(1);

  const filteredProducts = React.useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          category === "all" || product.category === category;
        const matchesSearch =
          search.trim() === "" ||
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        return a.name.localeCompare(b.name);
      });
  }, [products, category, search, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE),
  );

  const visibleProducts = React.useMemo(() => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  React.useEffect(() => {
    setPage(1);
  }, [search, category, sort]);

  const formatPrice = (value: number) =>
    `৳ ${new Intl.NumberFormat(locale === "en" ? "en-US" : "bn-BD", {
      maximumFractionDigits: 0,
    }).format(value)}`;

  return (
    <Container className="space-y-10 py-20">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
              {t("home.allProducts.eyebrow")}
            </p>
            <Heading as="h1" className="mt-2">
              {t("home.allProducts.heading")}
            </Heading>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
              {t("home.allProducts.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t("common.searchPlaceholder")}
              aria-label="Search the collection"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded-md border border-[var(--input-border)] bg-[var(--input-bg)] px-3 py-2 text-[var(--input-text)] outline-none transition-colors focus:border-[var(--input-border-focus)]"
            >
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name[locale]}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="w-full rounded-md border border-[var(--input-border)] bg-[var(--input-bg)] px-3 py-2 text-[var(--input-text)] outline-none transition-colors focus:border-[var(--input-border-focus)]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label[locale]}
                </option>
              ))}
            </select>
            <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1">
              <p className="text-sm text-[var(--color-text-muted)]">
                {t("common.showing")}
              </p>
              <p className="text-lg font-semibold text-[var(--color-text)]">
                {filteredProducts.length} {t("common.items")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
          <p className="text-lg font-semibold text-[var(--color-text)]">
            No products match those filters.
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Try adjusting your category or search terms.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => {
            product = localizeProduct(product, locale);
            return (
              <Card key={product.slug} className="overflow-hidden">
                <div className="relative h-72 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {product.badge ? (
                      <Badge variant="accent">{product.badge}</Badge>
                    ) : null}
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[var(--color-text)]">
                      <Link href={`/products/${product.slug}`}>
                        <span className="transition-colors hover:text-[var(--color-primary-700)]">
                          {product.name}
                        </span>
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span
                      className="cursor-pointer text-sm font-semibold text-[var(--color-primary-700)] transition-colors hover:text-[var(--color-primary-800)] hover:underline"
                      onClick={() => {
                        window.open(
                          buildProductPriceInquiryWhatsAppLink(product),
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                    >
                      {t("common.askPrice")}
                    </span>
                    {/* <div>
                    {product.salePrice ? (
                      <div className="flex items-baseline gap-2">
                        <p className="text-lg font-semibold text-[var(--color-text)]">
                          {formatPrice(product.salePrice)}
                        </p>
                        <p className="text-sm line-through text-[var(--color-text-muted)]">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-lg font-semibold text-[var(--color-text)]">
                        {formatPrice(product.price)}
                      </p>
                    )}
                  </div> */}
                    <Badge
                      variant={
                        product.availability === "In stock" ||
                        product.availability === "স্টকে আছে"
                          ? "success"
                          : "warning"
                      }
                    >
                      {product.availability}
                    </Badge>
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      {t("common.viewDetails")}
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(value) => setPage(value)}
      />
    </Container>
  );
}
