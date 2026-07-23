"use client";

import { LiaPhoneSolid } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LiaFacebook } from "react-icons/lia";
import { Card } from "@/components/ui/card";
import { site } from "@/data/site";
import { ContactItem } from "./contact-item";
import { useTranslations } from "next-intl";

export function ContactCard() {
  const t = useTranslations();
  const address = [
    site.address.line1,
    site.address.city,
    site.address.region,
    site.address.zip,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <Card padding="lg" className="space-y-4">
      <div className="space-y-4 rounded-3xl bg-[var(--color-surface)] sm:p-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("common.directContact")}
          </p>
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            {t("common.reachTeam")}
          </h3>
        </div>

        <div className="grid gap-3">
          <ContactItem
            icon={<LiaPhoneSolid size={22} />}
            label={t("common.phone")}
            value={site.contact.phone}
            href={`tel:${site.contact.phone}`}
            actionLabel={t("common.callNow")}
            actionIcon={<LiaPhoneSolid size={18} />}
          />
          <ContactItem
            icon={<LiaWhatsapp size={22} />}
            label={t("common.whatsapp")}
            value={site.contact.whatsapp}
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.message)}`}
            actionLabel={t("common.whatsappUs")}
            actionIcon={<LiaWhatsapp size={18} />}
          />
          <ContactItem
            icon={<LiaMapMarkerSolid size={22} />}
            label={t("common.address")}
            value={address}
            href={site.contact.googleMapsUrl}
            actionLabel={t("common.directions")}
            actionIcon={<LiaMapMarkerSolid size={18} />}
          />

          <ContactItem
            icon={<LiaFacebook size={22} />}
            label={t("common.facebook")}
            value={site.contact.facebook.name}
            href={site.contact.facebook.href}
            actionLabel={t("common.visitPage")}
            actionIcon={<LiaFacebook size={18} />}
          />
        </div>
      </div>
    </Card>
  );
}
