import * as React from "react";
import Image from "next/image";

import { Container } from "../../../components/ui/container";
import { Heading } from "../../../components/ui/heading";
import { HomeGalleryItem } from "../types";
import { site } from "@/data/site";

export interface GallerySectionProps {
  items: HomeGalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
            {site.home.galleryEyebrow}
          </p>
          <Heading as="h2">{site.home.galleryHeading}</Heading>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const aspectClass = "aspect-[4/5]";
            // const aspectClass =
            //   i % 3 === 0
            //     ? "aspect-[4/5]"
            //     : i % 3 === 1
            //       ? "aspect-[3/4]"
            //       : "aspect-[16/9]";
            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm`}
              >
                <div
                  className={`${aspectClass} relative bg-[var(--color-surface-muted)]`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
