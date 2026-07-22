"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const changeLocale = (nextLocale: "en" | "bn") => {
    if (nextLocale === locale) return;
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };
  return <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-muted)]"><button type="button" onClick={() => changeLocale("en")} className={locale === "en" ? "text-[var(--color-primary-700)]" : "transition-colors hover:text-[var(--color-primary-700)]"}>EN</button><span aria-hidden="true">|</span><button type="button" onClick={() => changeLocale("bn")} className={locale === "bn" ? "text-[var(--color-primary-700)]" : "transition-colors hover:text-[var(--color-primary-700)]"}>বাংলা</button></div>;
}
