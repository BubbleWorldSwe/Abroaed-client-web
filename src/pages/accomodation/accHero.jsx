import React from 'react';

function AccHero({ onNavigate }) {
  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
          <div className="content-center justify-self-start md:col-span-7 md:text-start">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">
              Student Accommodation in United Kingdom
            </h1>
            <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl">
              Choose from over thousands of student accommodations
            </p>
            <div action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </div>
            <button
              href="#"
              className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Search
            </button>
          </div>
          <div className="hidden md:col-span-5 md:mt-0 md:flex">
            <img
              className="dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list.svg"
              alt="shopping illustration"
            />
            <img
              className="hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/girl-shopping-list-dark.svg"
              alt="shopping illustration"
            />
          </div>
        </div>
        <div
          id="banner"
          tabindex="-1"
          class="flex justify-between py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="flex items-center mx-auto">
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-6 px-4">
              <button onClick={onNavigate.popularCities} className="flex items-center md:justify-center">
                Popular cities
              </button>
              <button onClick={onNavigate.popularUnis} className="flex items-center md:justify-center">
                Popular Unis
              </button>
              <button onClick={onNavigate.studentAccommodations} className="flex items-center md:justify-center">
                Student Accommodations
              </button>
              <button onClick={onNavigate.faq} className="flex items-center md:justify-center">
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
