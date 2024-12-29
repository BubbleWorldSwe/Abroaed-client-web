import React from "react";

function CtaSection() {
  return (
    <div>
      <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto grid max-w-screen-xl rounded-lg bg-yellow-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          <div className="me-auto place-self-center lg:col-span-7">
            <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Did Our story strike a chord?
            </h1>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Labore voluptate ut amet voluptate. Aliqua in nostrud velit dolor
              eiusmod commodo consequat ut sunt voluptate pariatur tempor
              officia. Cillum laboris consectetur aliqua dolor magna anim non
              excepteur aliqua dolor veniam.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Explore Oppurtunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CtaSection;
