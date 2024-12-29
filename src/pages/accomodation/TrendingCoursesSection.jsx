import { Receipt } from "lucide-react";
import React from "react";

function TrendingCoursesSection() {
  return (
    <div>
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Trending Courses in the UK
            </p>

            <a
              href="#"
              title=""
              className="mt-4 hidden rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 lg:inline-block"
              role="button"
            >
              {" "}
              See all categories{" "}
            </a>
          </div>

          <div className="mb-4 mt-6 grid grid-cols-1 gap-4 text-center sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>{" "}
            <div className="grid place-content-center space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Receipt className="h-10 w-10" />
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Business Management
              </p>
            </div>
          </div>

          <a
            href="#"
            title=""
            className="mt-4 block w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 lg:hidden"
            role="button"
          >
            {" "}
            See all categories{" "}
          </a>
        </div>
      </section>
    </div>
  );
}

export default TrendingCoursesSection;
