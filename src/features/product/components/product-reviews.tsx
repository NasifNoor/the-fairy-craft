import { Card } from "@/components/ui/card";
import { ReviewCard } from "./review-card";
import { useLocale, useTranslations } from "next-intl";
import { localizeProduct, Product } from "@/data/products";

interface ProductReviewsProps {
  reviews: Product["reviews"];
  product: Product;
}

export function ProductReviews({ reviews, product }: ProductReviewsProps) {
  const t = useTranslations();
  const locale = useLocale() as "en" | "bn";

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const productData = localizeProduct(product, locale);

  const reviewDesc = (productName: string) => {
    if (locale === "en") {
      return `What customers say about ${productName}`;
    } else return `ক্রেতারা ${productName} সম্পর্কে কি বলে দেখুন`;
  };

  const reviewCount = (reviews: Product["reviews"]) => {
    if (locale === "en") {
      return `${reviews.length} review${reviews.length === 1 ? "" : "s"}`;
    } else {
      if (reviews.length === 0) {
        return `রিভিউ নেই`;
      } else {
        return `${reviews.length} টি রিভিউ`;
      }
    }
  };

  return (
    <div className="space-y-6">
      <Card className="space-y-4 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
              {t("common.reviews")}
            </p>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              {reviewDesc(productData.name)}
            </h2>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
            <p className="text-sm text-[var(--color-text-muted)]">
              {t("common.overallRating")}
            </p>
            <p className="text-2xl font-semibold text-[var(--color-text)]">
              {averageRating} / 5
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              {reviewCount(reviews)}
            </p>
          </div>
        </div>
      </Card>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.author}-${review.comment}`}
              review={review}
            />
          ))}
        </div>
      ) : (
        <Card className="p-10 text-center">
          <div className="mx-auto max-w-md space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              {t("common.noReviews")}
            </h3>
            <p className="text-sm leading-7 text-[var(--color-text-muted)]">
              {t("common.noReviewsDescription")}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
