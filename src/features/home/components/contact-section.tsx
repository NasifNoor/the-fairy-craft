import * as React from "react";

import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeContactData } from "../types";
import { ContactAvailability } from "./contact-availability";
import { ContactCard } from "./contact-card";

export interface ContactSectionProps {
  data: HomeContactData;
}

export function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            Contact
          </p>
          <Heading as="h2">{data.title}</Heading>
          <p className="text-base leading-8 text-[var(--color-text-muted)]">
            {data.description}
          </p>
          <ContactAvailability />
        </div>

        <ContactCard />
      </Container>
    </section>
  );
}
