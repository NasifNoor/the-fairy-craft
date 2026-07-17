"use client";

import Link from "next/link";
import { buildProductInquiryWhatsAppLink } from "@/lib/utils/product-inquiry";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProductDetailsPageCTA = ({ product }: { product: any }) => {
  // const formatPrice = (value: number) =>
  //   new Intl.NumberFormat("bn-BD", {
  //     style: "currency",
  //     currency: "BDT",
  //     maximumFractionDigits: 0,
  //   }).format(value);

  const formatPrice = (value: number) =>
    `৳ ${new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(value)}`;

  const availabilityVariant =
    product.availability === "In stock"
      ? "success"
      : product.availability === "Pre-order"
        ? "accent"
        : "warning";

  return (
    <aside className="space-y-6">
      <Card className="space-y-6 p-8">
        <div className="space-y-4">
          <Heading>{product.name}</Heading>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                Price
              </p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-semibold text-[var(--color-text)]">
                  {product.salePrice
                    ? formatPrice(product.salePrice)
                    : formatPrice(product.price)}
                </p>
                {product.salePrice ? (
                  <p className="text-sm line-through text-[var(--color-text-muted)]">
                    {formatPrice(product.price)}
                  </p>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Available to ship within 5-7 business days.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={availabilityVariant}>{product.availability}</Badge>
            <Badge variant="default">{product.categoryLabel}</Badge>
          </div>

          <div className="grid gap-3">
            <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
              <Button size="lg" className="w-full">
                Request a consultation
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => {
                window.open(
                  buildProductInquiryWhatsAppLink(product),
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Card>

      <Card className="space-y-4 p-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)]">
          Customer reviews
        </h2>
        <div className="space-y-4">
          {product.reviews.map((review: any) => (
            <div key={review.author} className="space-y-2">
              <p className="font-semibold text-[var(--color-text)]">
                {review.author}
              </p>
              <p className="text-sm text-[var(--color-primary-700)]">
                {"★".repeat(review.rating)}
              </p>
              <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default ProductDetailsPageCTA;
