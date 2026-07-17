"use client";

import * as React from "react";
import type { Product } from "@/data/products";
import { ProductOverview } from "./product-overview";
import { ProductReviews } from "./product-reviews";

type TabKey = "overview" | "reviews";

const tabs: { id: TabKey; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "reviews", label: "Reviews" },
];

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = React.useState<TabKey>("overview");

  return (
    <section className="space-y-6" aria-label="Product information">
      <div
        role="tablist"
        aria-label="Product details tabs"
        className="flex flex-wrap border-b border-[var(--color-border)] "
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`${tab.id}-panel`}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-t px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[var(--color-primary-500)] text-white"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-text)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id="overview-panel"
        role="tabpanel"
        aria-labelledby="overview-tab"
        hidden={activeTab !== "overview"}
      >
        {activeTab === "overview" ? (
          <ProductOverview product={product} />
        ) : null}
      </div>

      <div
        id="reviews-panel"
        role="tabpanel"
        aria-labelledby="reviews-tab"
        hidden={activeTab !== "reviews"}
      >
        {activeTab === "reviews" ? (
          <ProductReviews
            reviews={product.reviews}
            productName={product.name}
          />
        ) : null}
      </div>
    </section>
  );
}
