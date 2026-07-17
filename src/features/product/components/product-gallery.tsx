"use client";

import * as React from "react";
import Image from "next/image";

export interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={selectedImage}
            alt={`${name} image ${selectedIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="grid gap-3 grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={`Show image ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
            className={[
              "overflow-hidden rounded-3xl border transition",
              selectedIndex === index
                ? "border-[var(--color-primary-600)]"
                : "border-[var(--color-border)]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
