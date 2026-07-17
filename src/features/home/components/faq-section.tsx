import * as React from "react";

import { Card } from "../../../components/ui/card";
import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeFaqItem } from "../types";
import { site } from "@/data/site";

export interface FaqSectionProps {
  items: HomeFaqItem[];
}

export function FAQSection({ items }: FaqSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            FAQ
          </p>
          <Heading as="h2">{site.faqHeading}</Heading>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.question} padding="lg" className="space-y-3">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {item.question}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
