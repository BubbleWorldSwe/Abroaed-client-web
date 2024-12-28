import React from "react";

function HeroSection() {
  return (
    <div>
      <section class="bg-[#252424] dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <div class="grid gap-8 items-center lg:gap-12 lg:grid-cols-12">
            <div class="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl dark:text-white">
                Hear Our Story
              </h1>
              <p class="mx-auto max-w-xl font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                Irure do commodo voluptate excepteur est qui tempor officia.
                Cillum occaecat sint occaecat consequat in fugiat dolor.
                Voluptate ea dolore duis amet Lorem.
                <a
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  href="#"
                >
                  Twitter
                </a>{" "}
                or our{" "}
                <a
                  class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  href=""
                >
                  blog
                </a>{" "}
                for latest updates.
              </p>
            </div>
            <div class="hidden col-span-6 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/maintenance/maintenance.svg"
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;