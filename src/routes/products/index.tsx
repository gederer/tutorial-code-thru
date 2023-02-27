import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { action$, z, zod$ } from "@builder.io/qwik-city";

export const useAddToCartAction = action$(
  async (form) => {
    console.log("form", form);
  },
  zod$({
    productId: z.string().cuid()
  })
);

export default component$(() => {
  return (
    <div>
      <h1>Products will appear here remarkably soon</h1>
      <a href="/">Home</a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Rabbit Store :: Products",
  meta: [
    {
      name: "description",
      content: "The Qwik Rabbit Store: Products",
    },
  ],
};
