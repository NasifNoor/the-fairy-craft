import { localizeProduct, Product } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";
import * as React from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  product: Product;
}

export function Breadcrumb({ product }: BreadcrumbProps) {
  const t = useTranslations();
  const locale = useLocale() as "en" | "bn";
  const productData = localizeProduct(product, locale);
  const items = [
    { label: t("common.home"), href: "/" },
    { label: t("common.products"), href: "/products" },
    { label: productData.name },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 ? <span>/</span> : null}
          {item.href ? (
            <a
              href={item.href}
              className="transition-colors hover:text-[var(--color-primary-700)]"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--color-text)]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
