import React from 'react';
import image from "../assets/dark.png";


function AbroadUpdatesCards() {
  return (
    <div>
      <div className="py-8 lg:py-24 bg-white dark:bg-gray-800 antialiased mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Latest Updates
          </h2>
          <p>Laborum amet veniam proident non officia ullamco ullamco quis.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
          <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
              <img
                className="mb-5 rounded-lg"
                src={image}

                alt="office laptop working"
              />
            </a>
            <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{' '}
              <svg
                className="mt-px ml-1 w-3 h-3"
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
          </article>
          <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
              <img
                className="mb-5 rounded-lg"
                src={image}
                alt="office laptop working"
              />
            </a>
            <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{' '}
              <svg
                className="mt-px ml-1 w-3 h-3"
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
          </article>
          <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
            <a href="#">
              <img
                className="mb-5 rounded-lg"
                src={image}

                alt="office laptop working"
              />
            </a>
            <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 hover:no-underline"
            >
              Read more{' '}
              <svg
                className="mt-px ml-1 w-3 h-3"
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
          </article>
          {/* Repeat other articles */}
        </div>
      </div>
    </div>
  );
}

export default AbroadUpdatesCards;