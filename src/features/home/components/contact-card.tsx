import { LiaPhoneSolid } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { LiaFacebook } from "react-icons/lia";
import { Card } from "@/components/ui/card";
import { site } from "@/data/site";
import { ContactItem } from "./contact-item";

export function ContactCard() {
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
      <div className="space-y-4 rounded-3xl bg-[var(--color-surface)] p-6 sm:p-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            Direct contact
          </p>
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            Reach our team quickly
          </h3>
        </div>

        <div className="grid gap-3">
          <ContactItem
            icon={<LiaPhoneSolid size={22} />}
            label="Phone"
            value={site.contact.phone}
            href={`tel:${site.contact.phone}`}
            actionLabel="Call now"
            actionIcon={<LiaPhoneSolid size={18} />}
          />
          <ContactItem
            icon={<LiaWhatsapp size={22} />}
            label="WhatsApp"
            value={site.contact.whatsapp}
            href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.message)}`}
            actionLabel="WhatsApp us"
            actionIcon={<LiaWhatsapp size={18} />}
          />
          <ContactItem
            icon={<LiaMapMarkerSolid size={22} />}
            label="Address"
            value={address}
            href={site.contact.googleMapsUrl}
            actionLabel="Get directions"
            actionIcon={<LiaMapMarkerSolid size={18} />}
          />

          <ContactItem
            icon={<LiaFacebook size={22} />}
            label="Facebook"
            value={site.contact.facebook}
            href={site.contact.facebook}
            actionLabel="Visit page"
            actionIcon={<LiaFacebook size={18} />}
          />
        </div>
      </div>
    </Card>
  );
}
