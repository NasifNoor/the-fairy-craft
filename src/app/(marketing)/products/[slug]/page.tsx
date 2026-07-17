import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageLayout } from "@/components/layout/page-layout";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/features/product/service";
import { ProductGallery } from "@/features/product/components/product-gallery";
import { ProductTabs } from "@/features/product/components/product-tabs";
import ProductDetailsPageCTA from "@/features/product/components/product-details-cta";

interface ProductPageProps {
  params:
    | Promise<Record<string, string | undefined>>
    | Record<string, string | undefined>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  // `params` can sometimes be a Promise in the App Router; await to ensure we have the resolved object.
  const resolved = await params;
  const slug = resolved?.slug ?? resolved?.value ?? resolved?.params;

  if (!slug) {
    notFound();
  }

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug);

  return (
    <PageLayout>
      <Container className="space-y-10 py-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <ProductGallery images={product.gallery} name={product.name} />
          </div>

          <ProductDetailsPageCTA product={product} />
        </div>
        <ProductTabs product={product} />
        {relatedProducts.length > 0 ? (
          <section className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                  Related products
                </p>
                <Heading as="h2">Complete the nursery collection.</Heading>
              </div>
              <Link href="/products">
                <span className="text-sm font-medium text-[var(--color-primary-700)] transition-colors hover:text-[var(--color-primary-900)]">
                  Explore the full collection
                </span>
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((item) => (
                <Card key={item.slug} className="overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.badge ? (
                        <Badge variant="accent">{item.badge}</Badge>
                      ) : null}
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      <Link href={`/products/${item.slug}`}>
                        <span className="transition-colors hover:text-[var(--color-primary-700)]">
                          {item.name}
                        </span>
                      </Link>
                    </h3>
                    <p className="text-sm leading-6 text-[var(--color-text-muted)]">
                      {item.shortDescription}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </PageLayout>
  );
}
