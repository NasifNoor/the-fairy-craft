import { Card } from "@/components/ui/card";
import { ProductSpecifications } from "./product-specifications";
import { localizeProduct, type Product } from "@/data/products";
import { useLocale, useTranslations } from "next-intl";

interface ProductOverviewProps {
  product: Product;
}

export function ProductOverview({ product }: ProductOverviewProps) {
  const t = useTranslations();
  const locale = useLocale() as "en" | "bn";
  const detailItems = [
    { label: "Dimensions", value: product.dimensions },
    { label: "Materials", value: product.materials },
    {
      label: "Care instructions",
      value:
        product.careInstructions ??
        "Care instructions will be shared upon request.",
    },
    {
      label: "Shipping information",
      value:
        product.shippingInfo ?? "Shipping details will be shared upon request.",
    },
    {
      label: "Warranty information",
      value:
        product.warrantyInfo ?? "Warranty details will be shared upon request.",
    },
  ];
  const productData = localizeProduct(product, locale);

  return (
    <div className="space-y-6">
      <Card className="space-y-4 p-6 sm:p-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {t("common.overview")}
          </p>
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            {t("common.productDetails")}
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-text-muted)]">
          {productData.description}
        </p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="space-y-5 p-6 sm:p-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              {t("common.features")}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              {productData.shortDescription}
            </p>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
            {productData.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-600)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <ProductSpecifications specifications={product.specifications} />
      </div>

      {/* <Card className="p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {detailItems.map((item) => (
            <div key={item.label} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-700)]">
                {item.label}
              </h3>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Card> */}
    </div>
  );
}
