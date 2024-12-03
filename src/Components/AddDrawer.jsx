import React from "react";

const sections = [
  {
    title: "Overview",
    fields: ["about", "QS Ranking"],
  },

  { title: "Courses", fields: ["Name", "Course Desc"] },
  { title: "FAQs", fields: ["Question", "answers"] },
];

function AddDrawer({ isOpen, onClose, title }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          // Close the drawer when clicking on the overlay
        >
          <div
            id="addReviewDrawer"
            className={`fixed right-0 top-0 z-40 h-screen w-full max-w-md overflow-y-auto bg-white p-4 transition-transform duration-800 ease-in-out antialiased dark:bg-gray-800 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            tabIndex="-1"
            aria-labelledby="addReviewDrawer-label"
          >
            <h5
              id="addReviewDrawer-label"
              class="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
            >
              {title}
            </h5>
            <button
              type="button"
              onClick={onClose}
              data-drawer-dismiss="addReviewDrawer"
              aria-controls="addReviewDrawer"
              class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
            <form action="#">
              <h4 class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Please choose the product:
              </h4>
              <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 mb-4">
                <div class="flex items-center gap-6 p-4">
                  <div>
                    <input
                      id="product4"
                      type="checkbox"
                      value=""
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label for="product4" class="sr-only">
                      {" "}
                      Product 4{" "}
                    </label>
                  </div>

                  <div class="flex items-center gap-6">
                    <div>
                      <a
                        href="#"
                        class="flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                      >
                        <img
                          class="h-auto max-h-full w-full dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-auto max-h-full w-full dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="imac image"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                      >
                        {" "}
                        PC APPLE iMac (2023)
                      </a>
                      <dl class="mt-2 sm:flex items-center gap-2.5">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                          Order Number:
                        </dt>
                        <dd class="text-base font-normal text-gray-500 dark:text-gray-400">
                          <a href="#" class="hover:underline">
                            #737423642
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label
                    for="title"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Review title{" "}
                    <span class="dark:text-gay-400 font-normal text-gray-500">
                      (30-150 characters)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Type review title"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="review"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Review{" "}
                    <span class="dark:text-gay-400 font-normal text-gray-500">
                      (150-3000 characters)
                    </span>
                  </label>
                  <textarea
                    id="review"
                    rows="5"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    required=""
                  ></textarea>
                  <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
                    Problems with the product or delivery?{" "}
                    <a
                      href="#"
                      class="text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Send a report
                    </a>
                    .
                  </p>
                </div>

                <div class="flex w-full justify-center space-x-4 pb-4">
                  <button
                    type="submit"
                    class="w-full justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit review
                  </button>
                  <button
                    type="button"
                    data-drawer-dismiss="addReviewDrawer"
                    aria-controls="addReviewDrawer"
                    class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 w-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddDrawer;
