"use client";

import { LuMessageCircleMore } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { site } from "@/data/site";
import { useTranslations } from "next-intl";

export function ContactAvailability() {
  const t = useTranslations();
  const showroom = site.contact.openingHoursDetails?.showroom;
  const onlineSupport = site.contact.openingHoursDetails?.onlineSupport;

  return (
    <div className="space-y-4">
      {showroom ? (
        <div className="rounded-2xl p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[var(--color-primary-700)]">
              <LuClock size={22} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--color-text)]">
                {t("contact.showroom")}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {t("contact.openEveryDay")}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {t("contact.hours")}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {onlineSupport ? (
        <div className="rounded-2xl p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-[var(--color-primary-700)]">
              <LuMessageCircleMore size={22} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--color-text)]">
                {t("contact.helpAnytime")}
              </p>
              <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                {t("contact.support")}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
