"use client";

import * as React from "react";

import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeReason } from "../types";
import { useTranslations } from "next-intl";

export interface WhyChooseUsSectionProps {
  reasons: HomeReason[];
}

export function WhyChooseUsSection({ reasons }: WhyChooseUsSectionProps) {
  const t = useTranslations();
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("common.whyChooseUs")}
          </p>
          <Heading as="h2">
            {t("home.whyHeading")}
          </Heading>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Card key={reason.title} padding="lg" className="space-y-3">
              <div className="h-10 w-10 rounded-full bg-[var(--color-accent-50)]" />
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {reason.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
