import React from "react";

function AccHero({ onNavigate }) {
  return (
    <div>
    <section className="bg-gradient-to-b from-yellow-200 to-white dark:from-yellow-400 dark:to-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
          <div className="grid gap-8 items-center lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl dark:text-white">
               Stay in USA
              </h1>
              <p className="mx-auto max-w-xl font-light text-gray-500 lg:mx-0 xl:mb-8 md:text-lg xl:text-xl dark:text-gray-400">
                Irure do commodo voluptate excepteur est qui tempor officia.
                Cillum occaecat sint occaecat consequat in fugiat dolor.
                Voluptate ea dolore duis amet Lorem.
                <a
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  href="#"
                >
                  Twitter
                </a>{" "}
                or our{" "}
                <a
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  href=""
                >
                  blog
                </a>{" "}
                for latest updates.
              </p>
            </div>
            <div className="hidden col-span-6 lg:flex">
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

export default AccHero;
