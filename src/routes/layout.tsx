import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { getSignedInUser } from "~/models/user";

export const useUserLoader = loader$(async (requestEventLoader) => {
  const token = requestEventLoader.cookie.get("session_token")?.value;

  if (token) {
    const user = await getSignedInUser(token);

    return {
      user
    };
  }
});

export default component$(() => {
  return (
    <div>
      <Header />
      <main>
        <div class="bg-gray-50">
          <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" class="sr-only">Products</h2>
            <Slot />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
});