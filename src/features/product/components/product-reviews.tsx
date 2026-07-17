import { Card } from "@/components/ui/card";
import { ReviewCard } from "./review-card";
import type { Product } from "@/data/products";

interface ProductReviewsProps {
  reviews: Product["reviews"];
  productName: string;
}

export function ProductReviews({ reviews, productName }: ProductReviewsProps) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-6">
      <Card className="space-y-4 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
              Reviews
            </p>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              What families say about {productName}
            </h2>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
            <p className="text-sm text-[var(--color-text-muted)]">
              Overall rating
            </p>
            <p className="text-2xl font-semibold text-[var(--color-text)]">
              {averageRating} / 5
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              {reviews.length} review{reviews.length === 1 ? "" : "s"}
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
              No reviews yet
            </h3>
            <p className="text-sm leading-7 text-[var(--color-text-muted)]">
              Be the first to share your experience with this product and help
              others make a confident choice.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
