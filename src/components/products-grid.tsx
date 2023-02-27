import { component$, Resource, ResourceReturn } from "@builder.io/qwik";
import { ProductWithRelations } from "~/models/product";
import ProductCard from "~/components/product-card";

interface ProductsGridProps {
  products: ProductWithRelations[];
}

export default component$(({ products }: ProductsGridProps) => {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
});
