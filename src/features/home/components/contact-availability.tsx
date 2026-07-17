import { LuMessageCircleMore } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { site } from "@/data/site";

export function ContactAvailability() {
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
                {showroom.title}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {showroom.days}
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {showroom.hours}
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
                {onlineSupport.title}
              </p>
              <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                {onlineSupport.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
