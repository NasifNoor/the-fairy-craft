import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { useTranslations } from "next-intl";

interface ProductSpecificationsProps {
  specifications: Product["specifications"];
}

export function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  const t = useTranslations();
  return (
    <Card className="space-y-5 p-6 sm:p-8">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">
          {t("common.specifications")}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)]">
          {t("common.specificationsDescription")}
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2">
        {specifications.map((spec) => (
          <div
            key={spec.label}
            className="space-y-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <dt className="text-sm font-semibold text-[var(--color-text)]">
              {spec.label}
            </dt>
            <dd className="text-sm leading-6 text-[var(--color-text-muted)]">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
