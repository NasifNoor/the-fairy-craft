import * as React from "react";
import Link from "next/link";

import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeCustomFurnitureData } from "../types";
import { useLocale } from "next-intl";

export interface CustomFurnitureSectionProps {
  data: HomeCustomFurnitureData;
}

export function CustomFurnitureSection({ data }: CustomFurnitureSectionProps) {
  const locale = useLocale() as "en" | "bn";

  const getIndex = (index: number): string => {
    const serial = new Intl.NumberFormat(locale === "en" ? "en-US" : "bn-BD", {
      maximumFractionDigits: 0,
    }).format(index + 1);
    return `0${serial}`;
  };
  return (
    <section
      id="custom-design"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {data.eyebrow}
          </p>
          <Heading as="h2">{data.title}</Heading>
          <p className="text-lg font-medium text-[var(--color-text)]">
            {data.subtitle}
          </p>
          <p className="text-base leading-8 text-[var(--color-text-muted)]">
            {data.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.steps.map((step, index) => (
            <Card key={step.title} padding="lg" className="space-y-3">
              <p className="text-sm font-semibold text-[var(--color-primary-700)]">
                {getIndex(index)}
              </p>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <Link href="/#contact">
          <Button size="lg">{data.ctaLabel}</Button>
        </Link>
      </Container>
    </section>
  );
}
