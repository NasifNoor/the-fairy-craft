"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import { Container } from "./container";
import { site } from "../../data/site";

export function Footer() {
  const t = useTranslations();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="flex flex-col gap-10 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-lg font-semibold tracking-[0.2em] text-[var(--color-primary-700)] uppercase">
            {site.businessName}
          </p>
          <p className="text-sm leading-7 text-[var(--color-text-muted)]">
            {t("footer.description")}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
              {t("footer.contact")}
            </h2>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              <li>{site.contact.phone}</li>
              <li>{site.contact.email}</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
              {t("footer.location")}
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              {site.address.line1}, {site.address.city}, {site.address.region}{" "}
              {site.address.zip}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text)]">
              {t("footer.follow")}
            </h2>
            <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
              {site.social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="transition-colors hover:text-[var(--color-primary-700)]"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
