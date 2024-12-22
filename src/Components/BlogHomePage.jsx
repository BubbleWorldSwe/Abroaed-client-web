import React from "react";

function BlogHomePage() {
  return (
    <div>
      <div className=" p-16 rounded-lg">
        <article
          className="relative w-full h-screen bg-cover bg-center rounded-lg "
          style={{
            backgroundImage:
              "url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png')",
          }}
        >
          {/* Overlay for the background image */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

          {/* Content Box */}
          <div className="absolute bottom-0 left-0 z-10 p-6 bg-white text-black max-w-lg rounded-lg shadow-lg m-4">
            {/* Author Details */}
            <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-300"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium">
                <div className="text-gray-700">Jese Leos</div>
                <div className="text-sm font-normal text-gray-500">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
              <a href="#" className="hover:underline">
                Our first office
              </a>
            </h3>

            {/* Description */}
            <p className="mb-4 text-gray-700">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>

            {/* Read More Link */}
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-500"
            >
              Read more
              <svg
                className="ml-1 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
      <div class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800 antialiased mx-auto ">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 ">
          <article class="p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
              <img
                class="mb-5 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                alt="office laptop working"
              />
            </a>
            <div class="flex items-center mb-3 space-x-2">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div class="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3>
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{" "}
              <svg
                class="mt-px ml-1 w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </article>
          <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 sm:block">
            <a href="#">
              <img
                class="mb-5 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                alt="google hq"
              />
            </a>
            <div class="flex items-center mb-3 space-x-2">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="Roberta Casas avatar"
              />
              <div class="font-medium dark:text-white">
                <div>Roberta Casas</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">We partnered up with Google</a>
            </h3>
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{" "}
              <svg
                class="mt-px ml-1 w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </article>
          <article class="hidden p-4 mx-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 xl:block">
            <a href="#">
              <img
                class="mb-5 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                alt="office laptop working"
              />
            </a>
            <div class="flex items-center mb-3 space-x-2">
              <img
                class="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                alt="Sofia McGuire avatar"
              />
              <div class="font-medium dark:text-white">
                <div>Sofia McGuire</div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first project with React</a>
            </h3>
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{" "}
              <svg
                class="mt-px ml-1 w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </article>
        </div>
      </div>
      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800 antialiased"
      >
        <div class="px-4 mx-auto max-w-screen-xl flex justify-between">
          <div className="w-3/4">
            <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Trending Now
            </h2>
            <article class="flex mb-8">
              <a href="#" class="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                  class="mr-5 w-32 h-32 max-w-fullalign-middle rounded-full"
                  alt="Image 1"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
                </h2>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
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
            <article class="flex mb-8">
              <a href="#" class="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                  class="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
                  alt="Image 2"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
                </h2>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
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
            <article class="flex">
              <a href="#" class="shrink-0">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                  class="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
                  alt="Image 3"
                />
              </a>
              <div class="flex flex-col justify-center">
                <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">We partnered up with Google</a>
                </h2>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
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
          </div>
          <div class=" w-1/4 p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 class="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
              Latest news
            </h4>
            <div class="mb-6">
              <h5 class="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Our first office
              </h5>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 9 minutes
              </a>
            </div>
            <div class="mb-6">
              <h5 class="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Enterprise Design tips
              </h5>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 14 minutes
              </a>
            </div>
            <div class="mb-6">
              <h5 class="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                Our first project with React
              </h5>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="#"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </div>
          </div>
        </div>
      </aside>

      <aside
        aria-label="Related articles"
        className="py-8 bg-gray-50 lg:py-16 dark:bg-gray-800 antialiased"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="w-full  justify-between items-center py-8 flex ">
            <h2 className="mb-8 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Category Name
            </h2>
            <button className="bg-yellow-300 h-[50px] hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              view all
            </button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Flowbite enables IT to automate Apple device configuration
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">How AI is transforming your smartphone</a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Android, ChromeOS, and the future of app discovery
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
          </div>

          <div className="w-full  justify-between items-center py-8 flex ">
            <h2 className="mb-8 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Category Name
            </h2>
            <button className="bg-yellow-300 h-[50px] hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              view all
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Flowbite enables IT to automate Apple device configuration
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">How AI is transforming your smartphone</a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Android, ChromeOS, and the future of app discovery
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default BlogHomePage;
