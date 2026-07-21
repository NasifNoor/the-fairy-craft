"use client";

import * as React from "react";

import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeContactData } from "../types";
import { ContactAvailability } from "./contact-availability";
import { ContactCard } from "./contact-card";
import { useTranslations } from "next-intl";

export interface ContactSectionProps {
  data: HomeContactData;
}

export function ContactSection({ data }: ContactSectionProps) {
  const t = useTranslations();
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("common.contact")}
          </p>
          <Heading as="h2">{data.title}</Heading>
          <p className="text-base leading-8 text-[var(--color-text-muted)]">
            {data.description}
          </p>
          <ContactAvailability />
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5 space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              {data.customDesign.title}
            </h3>
            <p className="text-sm leading-7 text-[var(--color-text-muted)]">
              {data.customDesign.description}
            </p>
            <ul className="grid gap-1 text-sm font-medium text-[var(--color-text)] sm:grid-cols-2">
              {data.customDesign.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ContactCard />
      </Container>
    </section>
  );
}
