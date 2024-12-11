import React from "react";

function AccHero({ onNavigate }) {
  return (
    <div>
      <section className="bg-white  antialiased dark:bg-gray-900 ">
        <div className="bg-[url('https://www.ft.com/__origami/service/image/v2/images/raw/https://cms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/6/6/5/0/42760566-3-eng-GB/Cropped-1666620503photo_SXM2022093000003848.jpg?width=700&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms')] bg-cover bg-center bg-no-repeat dark:bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-dark.jpg')]">
          <div className="relative z-10 mx-auto max-w-2xl px-4 pb-32 pt-8 text-center text-white lg:pt-16 xl:px-0">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white lg:text-6xl">
              Study in UK
            </h1>
            <p className="mb-6 font-light text-black dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              The world’s leading test of English for international higher
              education and migration.
            </p>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          id="banner"
          tabindex="-1"
          className="flex justify-between py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800"
        >
          <div className="flex items-center mx-auto">
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6 px-4">
              <button
                onClick={onNavigate.popularCities}
                className="flex items-center md:justify-center"
              >
                Popular cities
              </button>
              <button
                onClick={onNavigate.popularUnis}
                className="flex items-center md:justify-center"
              >
                Popular Unis
              </button>
              <button
                onClick={onNavigate.studentAccommodations}
                className="flex items-center md:justify-center"
              >
                Accommodations
              </button>
              <button
                onClick={onNavigate.costs}
                className="flex items-center md:justify-center"
              >
                Costs of Living
              </button>
              <button
                onClick={onNavigate.costs}
                className="flex items-center md:justify-center"
              >
                Work Oppurtunities
              </button>
              <button
                onClick={onNavigate.faq}
                className="flex items-center md:justify-center"
              >
                FAQs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccHero;
