"use client";

import * as React from "react";

import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeTestimonial } from "../types";
import { site } from "@/data/site";
import { useTranslations } from "next-intl";

export interface TestimonialsSectionProps {
  testimonials: HomeTestimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const t = useTranslations();
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("common.testimonials")}
          </p>
          <Heading as="h2">{t("home.testimonialsHeading")}</Heading>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} padding="lg" className="space-y-4">
              <p className="text-lg leading-8 text-[var(--color-text)]">
                “{testimonial.review}”
              </p>
              <div>
                <p className="font-semibold text-[var(--color-text)]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {testimonial.location} — {testimonial.rating} / 5
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
