import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrendingCoursesSection from "./TrendingCoursesSection";



function PopularCityCards() {
  const swiperRef = useRef(null);

  return (
    <aside
      aria-label="Related articles"
      className="py-8 bg-white dark:bg-gray-900 lg:py-16 antialiased"
    >
      <div className="px-4 mx-auto w-full max-w-screen-xl">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full  flex flex-col gap-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div>
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Why Study in the UK?
                </h1>
              </header>

              <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li>
                  List item one
                  <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>
                      You might feel like you are being really "organized" o
                    </li>
                    <li>
                      Nested navigation in UIs is a bad idea too, keep things as
                      flat as possible.
                    </li>
                    <li>
                      Nesting tons of folders in your source code is also not
                      helpful.
                    </li>
                  </ul>
                </li>
                <li>
                  List item two
                  <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>
                      I'm not sure if we'll bother styling more than two levels
                      deep.
                    </li>
                    <li>
                      Two is already too much, three is guaranteed to be a bad
                      idea.
                    </li>
                    <li>If you nest four levels deep you belong in prison.</li>
                  </ul>
                </li>
                <li>
                  List item three
                  <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                    <li>Again please don't nest lists if you want</li>
                    <li>Nobody wants to look at this.</li>
                    <li>I'm upset that we even have to bother styling this.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="mt-2">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Fun Facts
                </h1>
              </header>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
          </article>
        </div>
        <TrendingCoursesSection />
      </div>
    </aside>
  );
}

export default PopularCityCards;
