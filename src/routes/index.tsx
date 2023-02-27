import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { loader$ } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import ProductsGrid from "~/components/products-grid";
import { getStaffPicks } from "~/models/product";

export const useProductsLoader = loader$(async () => {
  return await getStaffPicks();
});

export default component$(() => {
  const productsLoader = useProductsLoader();

  return (
    <div>
      <h1>Welcome to the Qwik Rabbit Store</h1>
      <Link href="/products">Products</Link>
      <ProductsGrid products={productsLoader.value} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Rabbit Store",
  meta: [
    {
      name: "description",
      content: "The Qwik Rabbit Store: Where rabbits go to shop",
    },
  ],
};
