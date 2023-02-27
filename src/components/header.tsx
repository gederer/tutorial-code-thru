import { component$ } from "@builder.io/qwik";
import LogoIcon from "~/components/icons/logo-icon";
import { useUserLoader } from "~/routes/layout";

export default component$(() => {
  const user = useUserLoader();

  return (
    <header class="sticky top-0 z-10 bg-white/60 py-2 shadow backdrop-blur-lg backdrop-brightness-125 backdrop-saturate-150">
      <div class="mx-auto max-w-7xl px-6">
        <div class="relative flex justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <a href="/" class="rounded-full text-purple-700 transition duration-500 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-0">
                <LogoIcon color="text-purple-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});