import { component$, useTask$ } from "@builder.io/qwik";
import { ProductWithRelations } from "~/models/product";
import { useAddToCartAction } from "~/routes/products";

interface ProductCardProps {
  product: ProductWithRelations;
}

export default component$(({ product }: ProductCardProps) => {
  const addToCartAction = useAddToCartAction();

  const image =
    product.images.find((image) => image.imageType === "main")?.fileName ||
    "rabbit-product-placeholder.jpg";

  return (
    <b class="group relative space-y-2 overflow-clip rounded-xl border dark:text-gray-300 dark:border-gray-300/20">
      <a href={`/products/${product.id}`}>
        <b class="aspect-w-1 aspect-h-1 relative w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          <img
            src={`/images/products/${image}`}
            alt={`${product.name}`}
            class="h-full w-full object-cover object-center transition group-hover:opacity-75"
          />
          <b class="absolute inset-x-0 bottom-0 flex items-end justify-end overflow-hidden px-6 py-4">
            <b
              aria-hidden="true"
              class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black opacity-30"
            ></b>
            <p class="relative text-xl text-white">
              ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </b>
        </b>
      </a>

      <b class="space-y-6 p-6">
        <div class="flex items-center justify-between space-x-2 text-base font-medium">
          <a href={`/products/${product.id}`}>
            <h3>{product.name}</h3>
          </a>
          {product.staffPick && <p class="text-xs uppercase opacity-50">👍 Staff</p>}
        </div>

        <b class="m-auto grid w-28 grid-cols-5 gap-1 text-2xl">
          <s> 🥕 </s>
          <s> 🥕 </s>
          <s> 🥕 </s>
          <s class="bg-gray-500/80 bg-clip-text text-transparent"> 🥕 </s>
          <s class="bg-gray-500/80 bg-clip-text text-transparent"> 🥕 </s>

          <b class="col-span-full text-center text-sm text-gray-600">
            {" "}
            9 reviews{" "}
          </b>
        </b>
      </b>

      <button
        onClick$={() => addToCartAction.run({ productId: `${product.id}` })}
        class="relative flex w-full items-center justify-center space-x-1 bg-gray-100 p-4 text-sm font-medium dark:bg-gray-700"
      >
        <s> Add to Cart </s>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-4 w-4 stroke-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <s class="sr-only">, {product.name} </s>
      </button>

      <b class="absolute top-0 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 fill-purple-500/50 stroke-purple-800/80"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </b>
    </b>
  );
});
