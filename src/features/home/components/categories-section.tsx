"use client";

import * as React from "react";

import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeCategory } from "../types";
import { site } from "@/data/site";
import { useTranslations } from "next-intl";

export interface CategoriesSectionProps {
  categories: HomeCategory[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const t = useTranslations();
  return (
    <section
      id="collections"
      className="py-20 sm:py-24 bg-[var(--color-surface)]"
    >
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("home.categoriesEyebrow")}
          </p>
          <Heading as="h2">{t("home.categoriesHeading")}</Heading>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.name} padding="lg" className="space-y-3">
              <div className="h-10 w-10 rounded-full bg-[var(--color-primary-50)]" />
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {category.name}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {category.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
