import { PageLayout } from "@/components/layout/page-layout";
import { ProductListPage } from "@/features/product/components/product-list-page";
import {
  getAllProducts,
  getProductCategories,
} from "@/features/product/service";

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  return (
    <PageLayout>
      <ProductListPage products={products} categories={categories} />
    </PageLayout>
  );
}
