"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import { Container } from "./container";
import { MobileNavigation } from "./mobile-navigation";
import { site } from "../../data/site";
import { LiaWhatsapp } from "react-icons/lia";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./language-switch";

export function Navbar() {
  const t = useTranslations();
  const navItems = ["home", "customDesign", "products", "about", "contact"].map(
    (key) => ({
      label: t(`nav.${key}`),
      href:
        site.nav.find(
          (item) =>
            item.label.toLowerCase().replace(" ", "") === key.toLowerCase(),
        )?.href ?? "/",
    }),
  );
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="/"
          className="text-lg font-semibold tracking-[0.2em] text-[var(--color-primary-700)] uppercase"
        >
          {site.businessName}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary-700)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* <Button variant="ghost" size="sm">
            Sign In
          </Button> */}
          <Button
            size="sm"
            className="gap-1 bg-emerald-700 hover:bg-emerald-900"
            link={`https://wa.me/${site.contact.phone}?text=${encodeURIComponent(site.contact.message)}`}
          >
            <LiaWhatsapp size={22} />
            {t("nav.whatsapp")}
          </Button>
          <LanguageSwitch />
        </div>

        <div className="md:hidden">
          <MobileNavigation items={navItems} />
        </div>
      </Container>
    </header>
  );
}
