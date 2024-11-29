import React from "react";

function CollegePageLayout() {
  return (
    <div>
      <main class="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <header class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div class="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
            <span class="block mb-4 text-gray-300">
              Published in{" "}
              <a href="#" class="font-semibold text-white hover:underline">
                World News
              </a>
            </span>
            <h1 class="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
              Harvard University
            </h1>
            <p class="text-lg font-normal text-gray-300">Boston, USA</p>
          </div>
        </header>
        <div class="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
          <article class=" w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div class="flex flex-col lg:flex-row justify-between lg:items-center">
              <div class="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
                <span>
                  By{" "}
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline no-underline font-semibold"
                  >
                    Jese Leos
                  </a>
                </span>
                <span class="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
                <span>
                  <time
                    class="font-normal text-gray-500 dark:text-gray-400"
                    pubdate
                    datetime="2022-03-08"
                    title="August 3rd, 2022"
                  >
                    August 3, 2022, 2:20am EDT
                  </time>
                </span>
              </div>
              <aside aria-label="Share social media">
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Delete
                  </button>
                </div>
              </aside>
            </div>
            <p class="lead">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>

            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>

            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-white dark:bg-gray-900"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-6 lg:mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div class="grid gap-6 lg:gap-12 md:grid-cols-2">
            <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  class="mr-5 max-w-sm"
                  alt="Image 1"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 2 minutes
                </a>
              </div>
            </article>
            <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  class="mr-5 max-w-sm"
                  alt="Image 2"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </div>
            </article>
            <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  class="mr-5 max-w-sm"
                  alt="Image 3"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered up with Google</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 8 minutes
                </a>
              </div>
            </article>
            <article class="flex flex-col xl:flex-row">
              <a href="#" class="mb-2 xl:mb-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  class="mr-5 max-w-sm"
                  alt="Image 4"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first project with React</a>
                </h2>
                <p class="mb-4 text-gray-500 dark:text-gray-400 max-w-sm">
                  Over the past year, Volosoft has undergone many changes! After
                  months of preparation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  Read in 12 minutes
                </a>
              </div>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default CollegePageLayout;
