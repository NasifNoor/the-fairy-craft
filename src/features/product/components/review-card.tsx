import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";

interface ReviewCardProps {
  review: Product["reviews"][number];
}

export function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = review.date
    ? new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(review.date))
    : "Recently reviewed";

  return (
    <Card className="space-y-4 p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-[var(--color-text)]">
            {review.author}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            {formattedDate}
          </p>
        </div>
        <div className="text-sm font-medium text-[var(--color-primary-700)]">
          {"★".repeat(review.rating)}
        </div>
      </div>
      <p className="text-sm leading-7 text-[var(--color-text-muted)]">
        {review.comment}
      </p>
    </Card>
  );
}
